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
      </el-table>
    </el-col>
  </el-row>
</template>

<script>
import { getConfigIssues } from '@/api/fingerprint'
import { deleteDevice } from '@/api/plugin'

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
    },
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      this.$confirm('此操作将永久删除该组件，是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log({ 'name': row })
        deleteDevice({ 'name': row }).then(response => {
          console.log(response.data)
          this.$message({
            message: '组件删除成功',
            type: 'success',
            duration: 5 * 1000
          })
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
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
