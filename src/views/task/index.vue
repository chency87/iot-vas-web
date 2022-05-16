<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="taskSearchForm.taskName" size="small" placeholder="输入任务名称以检索" clearable style="width: 20%;" class="filter-item" suffix-icon="el-icon-search" @keyup.enter.native="handleFilter" />
      <el-input v-model="taskSearchForm.taskId" size="small" placeholder="输入任务ID以检索" clearable style="width:20%; margin-left: 15px;" class="filter-item" suffix-icon="el-icon-search" @keyup.enter.native="handleFilter" />
      <el-input v-model="taskSearchForm.target" size="small" placeholder="输入目标地址信息以搜索" clearable style="width: 20%; margin-left: 15px;" class="filter-item" suffix-icon="el-icon-search" @keyup.enter.native="handleFilter" />
      <el-button type="primary" size="small" style=" margin-left: 15px;" class="filter-item" icon="el-icon-edit" @click="$router.push('/task/create')">添加任务</el-button>
      <el-popconfirm title="本操作不可逆，确定删除么?" confirm-button-text="是" cancel-button-text="否" @onConfirm="handleDelete">
        <template #reference>
          <el-button type="info" size="small" style=" margin-left: 15px;" class="filter-item" icon="el-icon-delete">批量删除</el-button>
        </template>
      </el-popconfirm>
    </div>
    <el-table
      v-loading="listLoading"
      :data="taskList"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column label="任务名称" sortable fixed width="150">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="目标" align="left" width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.target }}</span>
        </template>
      </el-table-column>
      <el-table-column label="任务ID" align="left" width="260">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="配置指令" width="300" align="left">
        <template slot-scope="scope">
          {{ scope.row.config }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="状态" width="80" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter" class="status-tag" @click="handleUpdateTaskStatus(scope.$index, scope.row.id, scope.row.status)">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="left" prop="created_at" label="开始时间" min-width="120" sortable>
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>&nbsp;{{ scope.row.createdAt }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="finished" label="结束时间" min-width="120" sortable>
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>&nbsp;{{ scope.row.finished }}</span>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label=""
        width="80"
      >
        <template slot-scope="scope">
          <el-dropdown szie="small" class="demonstration" trigger="click">
            <span class="el-dropdown-link">
              操作<i class="el-icon-arrow-down el-icon--right" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-refresh" @click.native.prevent="handleRefreshTask(scope.$index, scope.row.id)">
                刷新状态
              </el-dropdown-item>
              <el-dropdown-item icon="el-icon-delete" @click.native.prevent="handleDeleteTask(scope.$index, scope.row.id)">删除任务</el-dropdown-item>
              <div v-if="scope.row.status == 'Finished'">
                <router-link :to="{ path: '/task/report', query: {taskId: scope.row.id}}">
                  <el-dropdown-item icon="el-icon-info" divided>查看结果</el-dropdown-item>
                </router-link>
              </div>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      align="right"
      :page-size="length"
      layout="prev, pager, next"
      :total="total"
    />
  </div>
</template>

<script >
import { mapGetters } from 'vuex'
import { getAllTask, deleteTask, getTaskStatus, updateTaskStatus } from '@/api/task'

export default {
  name: 'Task',
  filters: {
    statusFilter(status) {
      const statusMap = {
        Pause: 'danger',
        Running: 'success',
        Finished: 'gray'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      taskSearchForm: {
        taskName: '',
        taskId: '',
        target: ''
      },
      taskList: [],
      selectedTaskIds: [],
      listLoading: true,
      start: 0,
      length: 10,
      total: 0
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
    // handleUpdateBatchTaskStatus() {
    //   if (this.selectedTaskIds.length > 0) {
    //   }
    // },
    handleUpdateTaskStatus(idx, data, currentStatus) {
      const req = {}
      req[data] = currentStatus
      updateTaskStatus(req).then(response => {
        this.taskList[idx]['status'] = Object.values(response.data)[0]
      })
    },
    handleRefreshTask(idx, data) {
      getTaskStatus(data).then(response => {
        this.$message({
          message: `Tasks status refresh ${data}`,
          type: 'success',
          duration: 5 * 1000
        })
        this.taskList[idx]['status'] = response.data.status
        if (response.data.status === 'Finished') {
          this.taskList[idx]['finished'] = response.data.finished
          console.log(response.data.status)
        }
      })
    },
    handleDeleteTask(idx, data) {
      this.$confirm('此操作将永久删除该任务, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteTask([data]).then(response => {
          this.$message({
            message: `任务删除 ${response.data.status}`,
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
    handleSelectionChange(val) {
      this.selectedTaskIds = []
      for (var item of val) {
        this.selectedTaskIds.push(item['id'])
      }
    },
    handleDelete() {
      if (this.selectedTaskIds.length > 0) {
        deleteTask(this.selectedTaskIds).then(response => {
          this.$message({
            message: `Tasks Delete ${response.data.status}`,
            type: 'success',
            duration: 5 * 1000
          })
        })
      }
    },
    handleFilter() {
      this.fetchData()
    },
    fetchData() {
      this.listLoading = true
      getAllTask(this.start, this.length, this.taskSearchForm).then(response => {
        this.taskList = response.data.data
        this.total = response.data.total
        this.listLoading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  .filter-container {
    margin-top: 10px;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .status-col:hover {
    cursor: hand;
  }
  .status-tag:hover{
      cursor: hand;
  }
}
</style>
