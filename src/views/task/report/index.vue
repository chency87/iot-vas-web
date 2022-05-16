<template>
  <div class="app-container">
    <div>
      <panel-group :task-data="name" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PanelGroup from './components/PanelGroup'

export default {
  name: 'Report',
  components: { PanelGroup },
  data() {
    return {
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
      console.log(this.taskId)
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
