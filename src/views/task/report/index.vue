<template>
  <div class="app-container">
    <div>
      <panel-group :task-data="taskData" />
      <asset-panel :report-data="scanReport" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PanelGroup from './components/PanelGroup'
import AssetPanel from './components/AssetPanel'
import { getTaskReport } from '@/api/task'

export default {
  name: 'Report',
  components: {
    PanelGroup,
    AssetPanel
  },
  data() {
    return {
      taskData: {},
      scanReport: [],
      taskId: ''
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
    fetchData() {
      this.taskId = this.$route.query.taskId
      getTaskReport(this.taskId).then(response => {
        this.taskData = response.data.data
        this.scanReport = this.taskData.scan_report
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
