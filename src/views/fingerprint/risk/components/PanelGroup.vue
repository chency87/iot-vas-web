<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-message">
          <svg-icon icon-class="message" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description card-panel-summary-description">
          <div class=" card-panel-text card-panel-summary-text">
            <div class="card-panel-summary-list">
              <ul>
                <li>网络服务风险：<el-tag size="mini" :type="riskSummary.net_services_risk | statusFilter"> {{ riskSummary.net_services_risk }}</el-tag></li>
                <li>加解密风险：<el-tag size="mini" :type="riskSummary.crypto_risk | statusFilter"> {{ riskSummary.crypto_risk }}</el-tag></li>
                <li>内核风险：<el-tag size="mini" :type="riskSummary.kernel_risk | statusFilter"> {{ riskSummary.kernel_risk }}</el-tag></li>
                <li>客户端工具风险：<el-tag size="mini" :type="riskSummary.client_tools_risk | statusFilter"> {{ riskSummary.client_tools_risk }}</el-tag></li>
              </ul>
            </div>
          </div>
          <!-- <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" /> -->
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('messages')">
        <div class="card-panel-icon-wrapper icon-bug">
          <svg-icon icon-class="bug" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            风险组件
          </div>
          <count-to :start-val="0" :end-val="vulnerableComponentCount" :duration="3000" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('purchases')">
        <div class="card-panel-icon-wrapper icon-money">
          <svg-icon icon-class="vulnerabilities" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            CVE漏洞
          </div>
          <count-to :start-val="0" :end-val="CVECount" :duration="3200" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('shoppings')">
        <div class="card-panel-icon-wrapper icon-shopping">
          <svg-icon icon-class="serious" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            高危漏洞
          </div>
          <count-to :start-val="0" :end-val="CriticalCVECount" :duration="3600" class="card-panel-num" />
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'

export default {
  filters: {
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
    CountTo
  },
  props: {
    riskData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      riskSummary: {},
      vulnerableComponentCount: 0,
      CVECount: 0,
      CriticalCVECount: 0
    }
  },
  watch: {
    riskData: {
      deep: true,
      handler(val) {
        this.initRiskSummary(val)
      }
    }
  },
  methods: {
    initRiskSummary() {
      this.riskSummary = this.riskData.risk_summary
      this.vulnerableComponentCount = this.riskData.vulnerable_components.length
      this.riskData.vulnerable_components.forEach(element => {
        this.CVECount = this.CVECount + element.vulnerabilities.length
        element.vulnerabilities.forEach(ele => {
          if (ele.cvss > 7) {
            this.CriticalCVECount = this.CriticalCVECount + 1
          }
        })
      })
    },
    handleSetLineChartData(type) {
      console.log(type)
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 0px;
  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-bug {
        background: #40c9c6;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #34bfa3;
      }

      .icon-shopping {
        background: #f4516c
      }
    }

    .icon-bug {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #34bfa3;
    }

    .icon-shopping {
      color: #f4516c
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;
      }
    }
    .card-panel-summary-description {
        margin: 8px;
        .card-panel-summary-text {
          color: rgba(0, 0, 0, 0.45);
          margin-top: 0;
          font-size: 10px;
          width: 100%;
          padding: 0;
          .card-panel-summary-title {
            line-height: 14px;
            font-size: 16px;
            // margin-bottom: 5px;
            padding: 0;
            margin: 0;
          }
          .card-panel-summary-list {
            line-height: 14px;
            font-size: 12px;
            margin-bottom: 0px;
            ul {
                list-style-type: none;
                padding: 0;
                margin: 0; /* Remove margins */
                li {
                    margin: 3px;
                }
            }
          }
      }
    }
  }
}

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
