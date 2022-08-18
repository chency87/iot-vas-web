<template>
  <div>
    <el-row :gutter="20">
      <i class="el-icon-s-grid">
        <h2 style="margin-left: 20px;">扫描组件管理</h2>
      </i>
    </el-row>
    <div>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-table
            :data="tableData"
            height="400"
            style="align-content: center;width: 100%"
          >
            <el-table-column
              fixed
              prop="date"
              label="日期"
              align="center"
              width="200"
            >
            </el-table-column>
            <el-table-column
              prop="name"
              label="脚本"
              align="center"
              width="350">
            </el-table-column>
            <el-table-column
              prop="operate"
              label="操作"
              align="center"
              width="350"
              style="right: auto">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row.name)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
        <el-col :span="12">
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传NSE/py文件，且不超过5mb
            </div>
          </el-upload>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getAllFile, deleteDevice } from '@/api/plugin'

export default {
  data() {
    return {
      tableData: [{
        date: '',
        name: ''
      }],
      selectedFileName: [],
      listLoading: true,
      start: 0,
      length: 10,
      total: 0,
      fileList: []
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
    },
    fetchData() {
      this.listLoading = true
      getAllFile(this.start, this.length, this.tableData).then(response => {
        this.tableData = response.data
        console.log(this.tableData)
        this.total = response.data.total
        this.listLoading = false
      })
    }
  }
}
</script>
