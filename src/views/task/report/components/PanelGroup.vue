<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="24" :sm="24" :lg="24" class="card-panel-col">
      <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix">
          <span>任务信息</span>
          <el-tag type="success" style="margin-left: 25px;" effect="dark" size="small">已完成</el-tag>
          <el-tag type="info" style="margin-left: 10px;" size="small">运行时间：{{ taskData.create_time }} - {{ taskData.end_time }}</el-tag>
          <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
        </div>
        <el-form label-position="right" label-width="80px" :model="taskData.params">
          <el-row :gutter="36">
            <el-col :span="12">
              <el-form-item label="任务名称">
                <el-input v-model="taskData.params.name" disabled />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="任务ID" prop="id">
                <el-input v-model="taskData.params.id" placeholder="请输入内容" disabled>
                  <template slot="append" icon="el-icon-search"><i class="el-icon-tickets" /></template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="探测目标" prop="target">
                <el-input v-model="taskData.params.target" placeholder="请输入内容" disabled>
                  <template slot="append" icon="el-icon-search"><i class="el-icon-tickets" /></template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="探测命令">
                <el-input v-model="taskData.params.config" disabled />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-card>

    </el-col>
  </el-row>
</template>

<script>

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        Critical: 'danger',
        High: 'success',
        Medium: 'gray',
        Low: 'gray',
        None: 'Green'
      }
      return statusMap[status]
    }
  },
  components: {
  },
  props: {
    taskData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
    }
  },
  watch: {
    taskData: {
      deep: true,
      handler(val) {
      }
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 0px;
  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 208px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }
  }
}
</style>
