<template>
  <el-row :gutter="40" class="panel-group">
    <el-col>
      <el-table
        :data="configIssues"
        stripe
        style="width: 100%"
      >
        <el-table-column
          prop="service_name"
          label="Service Name"
          sortable
        />
        <el-table-column
          prop="config_file"
          label="Config File"
          sortable
        />
        <el-table-column align="left" prop="issues" label="Issues" sortable>
          <template slot-scope="scope">
            <ol class="issues-list">
              <li v-for="(item,idx) of scope.row.issues" :key="idx">
                <span>{{ item }}</span>

              </li>
            </ol>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="suggestions" label="Suggestions" sortable>
          <template slot-scope="scope">
            <ol class="issues-list">
              <li v-for="(item,idx) of scope.row.suggestions" :key="idx">
                <span>{{ item }}</span>
              </li>
            </ol>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>

<script>
import { getConfigIssues } from '@/api/fingerprint'

export default {
  components: {
  },
  props: {
    firmwareHash: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      configIssues: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getConfigIssues(this.firmwareHash).then(response => {
        this.configIssues = response.data.data
      })
    },
    handleSetLineChartData(type) {
    //   this.$emit('handleSetLineChartData', type)
      console.log(type)
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 2px;
  .card-panel-col {
    margin-bottom: 32px;
  }
  .issues-list {
      margin: 0;
  padding: 0;
    // list-style-position: outside;
    list-style-type: upper-roman;
  }
}

</style>
