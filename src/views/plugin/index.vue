<template>
  <div>
    <el-row :gutter="20">
      <i class="el-icon-s-grid">
        <h2 style="margin-left: 20px;">扫描组件管理</h2>
      </i>
    </el-row>
    <div>
      <el-row :gutter="20">
        <el-col>
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
              width="500"
            >
            </el-table-column>
            <el-table-column
              prop="name"
              label="脚本"
              align="center"
              width="500">
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
                  type="brand color"
                  @click="handleEdit(scope.$index, scope.row)">下载</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row.name)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
        <el-col>
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
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
        date: '1-2-3',
        name: '123.nse'
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
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
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
