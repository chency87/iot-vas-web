<template>
  <el-collapse v-model="activeTab">
    <el-collapse-item name="1">
      <template slot="title">
        <h2> 组件漏洞信息 <i class="header-icon el-icon-info" /> </h2>
      </template>
      <el-collapse>
        <el-collapse-item disabled class="vul-collapse-title">
          <template slot="title">
            <el-descriptions :column="3" size="small" :colon="false">
              <el-descriptions-item label="组件名称" label-class-name="my-label" content-class-name="my-content" />
              <el-descriptions-item label="组件版本" />
              <el-descriptions-item label="组件类别" colon="false" />
            </el-descriptions>
          </template>
        </el-collapse-item>
        <el-collapse-item v-for="(item, index) of vulnerableComponents" :key="index" :name="index">
          <template slot="title">
            <el-descriptions :column="3" size="small" :colon="false">
              <el-descriptions-item>{{ item.name }}</el-descriptions-item>
              <el-descriptions-item>{{ item.version }}</el-descriptions-item>
              <el-descriptions-item>{{ item.category }}</el-descriptions-item>
            </el-descriptions>
          </template>
          <div>
            <el-table
              :data="item.vulnerabilities"
              stripe
              style="width: 100%"
            >
              <el-table-column
                prop="cve_id"
                label="CVE ID"
                width="180"
                sortable
              />
              <el-table-column
                prop="cvss"
                label="CVSS 评分"
                width="180"
                sortable
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
            <el-table-column
              prop="operate"
              label="操作"
              align="center"
              width="500"
              style="right: auto">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row.name)">验证</el-button>
              </template>
            </el-table-column>

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
    vulnerableComponents: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeTab: ['1'],
      riskSummary: {
        'net_services_risk': 'Critical',
        'crypto_risk': 'Critical',
        'kernel_risk': 'None',
        'client_tools_risk': 'High'
      }
    }
  },
  methods: {
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
