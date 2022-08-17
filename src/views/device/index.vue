<template>
  <div class="dashboard-container">
    <panel-group @handleSetLineChartData="handleSetLineChartData" />
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData" />
      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <pie-chart />
            <h3 style="text-align: center">组件漏洞占比</h3>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <bar-chart />
            <h3 style="text-align: center">端口数量占比</h3>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <CveList></CveList>
          </div>
        </el-col>
      </el-row>
    </el-row>
    <el-row :gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PanelGroup from '@/views/device/components/PanelGroup'
import PieChart from '@/views/device/components/PieChart'
import LineChart from '@/views/device/components/LineChart'
import BarChart from '@/views/device/components/BarChart'
import RaddarChart from '@/views/device/components/RaddarChart'
import CveList from '@/views/device/components/CveList'

const lineChartData = {
  newVisitis: {
    actualData: [2, 3, 3, 4, 5, 5, 5]
  },
  messages: {
    actualData: [1, 2, 5, 5, 5, 5, 5]
  },
  purchases: {
    actualData: [3, 4, 5, 7, 9, 10, 11]
  },
  shoppings: {
    actualData: [5, 12, 15, 15, 22, 22, 22]
  }
}
export default {
  name: 'Dashboard',
  components: { CveList, PieChart, BarChart, LineChart, PanelGroup },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  }
}

</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
