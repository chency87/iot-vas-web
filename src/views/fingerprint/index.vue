<template>
  <div class="app-container">
    <el-collapse v-model="activeNames" accordion>
      <el-collapse-item name="1">
        <template #title>
          设备检索&nbsp;
          <el-tooltip class="item" effect="dark" content="点击以检索设备指纹信息" placement="bottom-start" style="margin-left:5px;">
            <svg-icon icon-class="search" />
          </el-tooltip>
        </template>
        <div>
          <el-input
            v-model="searchValue"
            placeholder="输入信息以检索"
            class="input-with-select"
          >
            <template #prepend>
              <el-select v-model="searchKey" placeholder="Select" style="width: 150px">
                <el-option label="Hostname" value="hostname" />
                <el-option label="MAC Address" value="nic_mac" />
                <el-option label="SNMP 系统描述" value="snmp_sysdescr" />
                <el-option label="SNMP 系统标识" value="snmp_sysoid" />
                <el-option label="FTP Banner" value="ftp_banner" />
                <el-option label="Telnet Banner" value="telnet_banner" />
                <el-option label="HTTP Response" value="http_response" />
                <el-option label="HTTPS Response" value="https_response" />
                <el-option label="UPNP Response" value="upnpp_response" />
              </el-select>
            </template>
            <template #append>
              <el-button icon="el-icon-search" @click="handleSearch" />
            </template>
          </el-input>
        </div>
      </el-collapse-item>
    </el-collapse>

    <el-table
      v-loading="listLoading"
      :data="deviceTableData"
      style="width: 100%"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-descriptions class="margin-top" :column="3" size="small" border>
            <!-- <template slot="extra">
              <el-button type="primary" size="small">操作</el-button>
            </template> -->
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-user" />
                名称
              </template>
              <span>{{ props.row.model_name }}</span>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-location-outline" />
                厂商
              </template>
              <span>{{ props.row.manufacturer }}</span>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-link" />
                设备类型
              </template>
              <span>{{ props.row.device_type }}</span>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-document" />
                固件版本
              </template>
              <span>{{ props.row.firmware_version }}</span>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-bell" />
                连续版本？
              </template>
              <div v-if="props.row.is_discontinued === 'True'">
                <el-tag size="small" type="success"><span>{{ props.row.is_discontinued }} </span></el-tag>
              </div>
              <div v-else>
                <el-tag size="small" type="danger"><span>{{ props.row.is_discontinued }} </span></el-tag>
              </div>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-menu" />
                <router-link :to="{ path: '/fingerprint/firmware/risk', query: {firmware_hash: props.row.latest_firmware_info.sha2}}">
                  最新固件版本
                </router-link>
              </template>
              <li v-for="(val,name, idx) in props.row.latest_firmware_info" :key="idx">
                {{ name }} : {{ val }}
              </li>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-office-building" />
                <router-link :to="{ path: '/fingerprint/firmware/risk', query: {firmware_hash: props.row.firmware_info.sha2}}">
                  固件信息
                </router-link>
              </template>
              <li v-for="(val,name, idx) in props.row.firmware_info" :key="idx">
                {{ name }} : {{ val }}
              </li>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-office-building" />
                CVE List
              </template>
              <ul>
                <li v-for="item in props.row.cve_list" :key="item.cveId">
                  <span v-for="(val, name) in item" :key="val">
                    {{ name }} : {{ val }}
                  </span>
                </li>
              </ul>
            </el-descriptions-item>
          </el-descriptions>
        </template>
      </el-table-column>
      <el-table-column
        label="厂商"
        prop="manufacturer"
      />
      <el-table-column
        label="名称"
        prop="model_name"
      />
      <el-table-column
        label="固件版本"
        prop="firmware_version"
      />
      <el-table-column
        label="设备类型"
        prop="device_type"
      />
    </el-table>
    <el-pagination
      align="right"
      :page-size="length"
      layout="prev, pager, next"
      :total="total"
      :current-page.sync="start"
      @current-change="handlePageStartChange"
      @prev-click="fetchData"
    />
  </div>
</template>

<script >
import { mapGetters } from 'vuex'
import { getDevices, deleteDevice } from '@/api/fingerprint'

export default {
  name: 'Fingerprint',
  filters: {
    listFilter(list) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[list]
    }
  },
  data() {
    return {
      searchKey: 'hostname',
      searchValue: '',
      activeNames: ['1'],
      deviceTableData: [],
      start: 0,
      length: 10,
      total: 0,
      listLoading: true,
      q: {
        'snmp_sysdescr': '',
        'snmp_sysoid': '',
        'ftp_banner': '',
        'telnet_banner': '',
        'hostname': '',
        'http_response': '',
        'https_response': '',
        'upnp_response': '',
        'nic_mac': ''
      }

    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  created() {
    this.fetchData()
  },
  methods: {
    handlePageStartChange(val) {
      this.start = val
      this.fetchData()
    },
    handleSearch() {
      this.q[this.searchKey] = this.searchValue
      this.fetchData()
    },
    fetchData() {
      this.listLoading = true
      getDevices(this.start, this.length, this.q).then(response => {
        this.deviceTableData = response.data.data
        this.total = response.data.total
        this.listLoading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.app {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
