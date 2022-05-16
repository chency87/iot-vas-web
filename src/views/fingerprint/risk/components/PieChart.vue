<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    chartData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      chart: null,
      pieChartData: [
        { name: 'Critical', value: 0 },
        { name: 'High', value: 0 },
        { name: 'Medium', value: 0 },
        { name: 'Low', value: 0 }
      ]
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        const data = this.initPieChartData(val)
        this.setOption(data)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initPieChartData(val) {
      let criticalCount = 0
      let highCount = 0
      let mediumCount = 0
      let lowCount = 0
      for (var item of val) {
        for (var vulnerabilities of item.vulnerabilities) {
          if (vulnerabilities.cvss >= 9) {
            criticalCount = criticalCount + 1
          } else if (vulnerabilities.cvss >= 7) {
            highCount = highCount + 1
          } else if (vulnerabilities.cvss >= 4) {
            mediumCount = mediumCount + 1
          } else {
            lowCount = lowCount + 1
          }
        }
      }
      const data = [
        { name: 'Critical', value: criticalCount },
        { name: 'High', value: highCount },
        { name: 'Medium', value: mediumCount },
        { name: 'Low', value: lowCount }
      ]
      return data
    },
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOption(this.initPieChartData(this.chartData))
    },
    setOption(val) {
      const legendData = []
      for (var item of val) {
        legendData.push(item.name)
      }
      this.chart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: legendData
        },
        series: [
          {
            name: '脆弱性漏洞个数统计',
            type: 'pie',
            roseType: 'radius',
            radius: [15, 95],
            center: ['50%', '38%'],
            data: val,
            animationEasing: 'cubicInOut',
            animationDuration: 2600
          }
        ]
      })
    }
  }
}
</script>
