<template>
  <el-collapse v-model="activeTab">
    <el-collapse-item name="1">
      <template slot="title">
        <h2> 资产信息 <i class="header-icon el-icon-info" /> </h2>
      </template>
      <el-collapse>
        <el-collapse-item disabled class="vul-collapse-title">
          <template slot="title">
            <el-descriptions :column="6" size="small" :colon="false">
              <el-descriptions-item label="IP Address" />
              <el-descriptions-item label="厂商" />
              <el-descriptions-item label="OS" />
              <el-descriptions-item label="model name" />
              <el-descriptions-item label="固件版本" />
              <el-descriptions-item label="设备类型" />
            </el-descriptions>
          </template>
        </el-collapse-item>
        <el-collapse-item v-for="(item, index) of reportTableData" :key="index" :name="index">
          <template slot="title">
            <el-descriptions :column="6" size="small" :colon="false">
              <el-descriptions-item>{{ item.ip }}</el-descriptions-item>
              <el-descriptions-item>{{ item.vendor }}</el-descriptions-item>
              <el-descriptions-item>{{ item.OS }}</el-descriptions-item>
              <el-descriptions-item>{{ item.model_name }}</el-descriptions-item>
              <el-descriptions-item>{{ item.firmware_version }}</el-descriptions-item>
              <el-descriptions-item>{{ item.decive_type }}</el-descriptions-item>
            </el-descriptions>
          </template>
          <div>
            <el-divider content-position="left">端口信息</el-divider>
            {{item.tcp.concat(item.udp)}}
            <el-table
              :data="item.tcp.concat(item.udp)"
              stripe
              style="width: 100%"
            >
              <el-table-column
                prop="port"
                label="端口"
                width="80"
              />
              <el-table-column
                prop="service"
                label="服务"
                width="100"
              />
              <el-table-column
                prop="application"
                label="应用"
                width="110"
              />
              <el-table-column
                prop="版本"
                label="version"
                width="100"
              />
              <el-table-column
                prop="title"
                label="Title"
                width="180"
              />
              <el-table-column
                prop="cpe"
                label="CPE"
              />
              <el-table-column
                prop="snmp-sysdescr"
                label="其他"
              />
              <el-table-column
                label="其他"
                width="180"
              >
                <template slot-scope="scope">
                  <span v-if="scope.row['snmp_sysdescr']">"SNMP sysdescr":{{ scope.row['snmp_sysdescr'] }}</span>
                  <span v-if="scope.row['snmp_sysoid']">"SNMP sysoid": {{ scope.row['snmp_sysoid'] }}</span>
                  <span v-if="scope.row['ftp_banner']">"FTP banner": {{ scope.row['ftp_banner'] }}</span>
                  <span v-if="scope.row['telnet_banner']">"TELNET banner": {{ scope.row['telnet_banner'] }}</span>
                  <span v-if="scope.row['hostname']">"hostname": {{ scope.row['hostname'] }}</span>
                  <span v-if="scope.row['http_response']">"HTTP response": {{ scope.row['http_response'] }}</span>
                  <span v-if="scope.row['https_response']">"HTTPs response": {{ scope.row['https_response'] }}</span>
                </template>
              </el-table-column>
            </el-table>
            <el-divider content-position="left">漏洞信息</el-divider>
            <el-table
              :data="item.cve_list"
              stripe
              style="width: 100%"
            >
              <el-table-column
                prop="cve_id"
                label="CVE ID"
                width="180"
              />
              <el-table-column
                prop="cvss"
                label="CVSS 评分"
                width="180"
              >
                <template slot-scope="scope">
                  <el-tag :type="scope.row.cvss | cvssFilter" size="medium" effect="dark">{{ scope.row.cvss }}</el-tag>
                </template>
              </el-table-column>
              <el-table-column
                prop="desc"
                label=""
              />
            </el-table>

          </div>
        </el-collapse-item>
      </el-collapse>
    </el-collapse-item>
  </el-collapse>

</template>

<script>

export default {
  filters: {
    cvssFilter(cvss) {
      if (cvss >= 9) {
        return 'danger'
      } else if (cvss >= 7) {
        return 'warning'
      } else if (cvss >= 4) {
        return 'gray'
      } else {
        return ''
      }
    },
    statusFilter(status) {
      const statusMap = {
        Critical: 'danger',
        High: 'success',
        Medium: 'gray',
        Low: 'gray',
        None: 'Green'
      }
      return statusMap[status]
    }
  },
  components: {

  },
  props: {
    reportData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeTab: ['1'],
      reportTableData: [],
      riskSummary: {
        'net_services_risk': 'Critical',
        'crypto_risk': 'Critical',
        'kernel_risk': 'None',
        'client_tools_risk': 'High'
      }
    }
  },
  watch: {
    reportData: {
      deep: true,
      handler(val) {
        this.initCollapsePanel(val)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initCollapsePanel(this.reportData)
    })
  },
  methods: {
    initCollapsePanel(val) {
      this.reportTableData = []
      for (var item of val) {
        const tmp = Object.values(item)[0]
        const ipDict = { ip: Object.keys(item)[0] }
        this.reportTableData.push(Object.assign(tmp, ipDict))
      }
      console.log(this.reportTableData)
    },
    handleSetLineChartData(type) {
    //   this.$emit('handleSetLineChartData', type)
      console.log(type)
    }
  }
}
</script>

<style lang="scss" scoped>
  .vul-collapse-title ::v-deep .el-collapse-item__arrow {
      visibility: hidden;
  }
  .my-label {
    background: #E1F3D8;
  }

  .my-content {
    background: #FDE2E2;
  }

</style>
