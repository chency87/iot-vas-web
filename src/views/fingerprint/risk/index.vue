<template>
  <div class="app-container">
    <!-- <div class="app-text">name: {{ name }}</div> -->
    <panel-group :risk-data="risk" @handleSetLineChartData="handleSetLineChartData" />
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="12">
        <vul-component-panel :vulnerable-components="risk.vulnerable_components" />
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <pie-chart :chart-data="risk.vulnerable_components" />
        </div>
      </el-col>
    </el-row>
    <el-row>
      <h4>固件脆弱性详细信息</h4>
    </el-row>
    <el-row class="issues-tabs">
      <el-col>
        <el-tabs tab-position="left">
          <el-tab-pane label="默认用户名"><default-account-panel :firmware-hash="firmwareHash" /></el-tab-pane>
          <el-tab-pane label="私钥信息"><private-keys-panel :firmware-hash="firmwareHash" /></el-tab-pane>
          <el-tab-pane label="弱口令"><weak-keys-panel :firmware-hash="firmwareHash" /></el-tab-pane>
          <el-tab-pane label="过期证书"><expired-certs-panel :firmware-hash="firmwareHash" /></el-tab-pane>
          <el-tab-pane label="弱证书"><weak-certs-panel :firmware-hash="firmwareHash" /></el-tab-pane>
          <el-tab-pane label="配置问题"><config-issues-panel :firmware-hash="firmwareHash" /></el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PanelGroup from './components/PanelGroup'
import VulComponentPanel from './components/VulComponentPanel'
import PieChart from './components/PieChart'
import DefaultAccountPanel from './components/DefaultAccountPanel'
import PrivateKeysPanel from './components/PrivateKeysPanel'
import WeakKeysPanel from './components/WeakKeysPanel'
import ExpiredCertsPanel from './components/ExpiredCertsPanel'
import WeakCertsPanel from './components/WeakCertsPanel'
import ConfigIssuesPanel from './components/ConfigIssuesPanel'

import { getRisk } from '@/api/fingerprint'

export default {
  name: 'Dashboard',
  components: {
    PanelGroup,
    VulComponentPanel,
    PieChart,
    DefaultAccountPanel,
    PrivateKeysPanel,
    WeakKeysPanel,
    ExpiredCertsPanel,
    WeakCertsPanel,
    ConfigIssuesPanel
  },
  data() {
    return {
      firmwareHash: this.$route.query.firmware_hash,
      risk_summary: {},
      risk: { vulnerable_components: [] }
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  // 钩子函数
  mounted() {
    this.$nextTick(() => {
      this.fetchData()
    })
  },
  methods: {
    fetchData() {
      this.firmwareHash = this.$route.query.firmware_hash
      getRisk(this.firmwareHash).then(response => {
        this.risk = response.data.data
        console.log(this.risk)
      })
    },
    handleSetLineChartData(type) {
      console.log(type)
    }
  }
}
</script>

<style lang="scss" scoped>
.app {
  &-container {
    margin: 15px;
    margin-top: 5px;
    .issues-tabs {
      margin-top: 26px;
    }
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
