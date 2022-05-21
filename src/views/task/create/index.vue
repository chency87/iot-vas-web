<template>
  <div class="app-container">
    <!-- <div class="app-text">name: {{ name }}</div> -->
    <el-form
      ref="ruleFormRef"
      :model="task"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      size="small"
    >
      <el-form-item label="任务名称" prop="name">
        <el-input v-model="task.name" />
      </el-form-item>
      <el-form-item label="任务描述" prop="desc">
        <el-input v-model="task.desc" type="textarea" />
      </el-form-item>
      <el-form-item label="目标地址" prop="target">
        <el-input v-model="task.target" />
      </el-form-item>
      <el-form-item label="目标端口" prop="port">
        <el-input v-model="task.port" />
      </el-form-item>
      <el-form-item label="扫描速率" prop="rate">
        <el-input v-model="task.rate" />
      </el-form-item>
      <el-form-item label="扫描方式" prop="scan_type">
        <el-checkbox-group v-model="task.scan_type">
          <el-checkbox label="TCP_Scan" value="TCP_Scan" name="scan_type" />
          <el-checkbox label="UDP_Scan" value="UDP_Scan" name="scan_type" />
          <el-checkbox label="禁用Ping" value="Ping_Scan" name="scan_type" />
          <el-checkbox label="SYN_Scan" value="SYN_Scan" name="scan_type" />
        </el-checkbox-group>
      </el-form-item>
<!--      <el-form-item label="扫描方式" prop="port">-->
<!--        <el-select v-model="task.port" placeholder="请选择（默认为空）" clearable filterable>-->
<!--          <el-option-->
<!--            v-for="item in portDictOptions"-->
<!--            :key="item.value"-->
<!--            :label="item.label"-->
<!--            :value="item.value"-->
<!--          />-->
<!--        </el-select>-->
<!--      </el-form-item>-->
      <el-form-item label="定时任务" prop="trigger">
        <el-select v-model="task.trigger" placeholder="请选择" clearable filterable>
          <el-option
            v-for="item in schedules"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="功能项" prop="config">
        <el-checkbox-group v-model="task.config">
          <el-checkbox label="banner" value="banner.nse" name="config" />
          <el-checkbox label="service" value="serv" name="config" />
          <el-checkbox label="os" value="os" name="config" />
          <el-checkbox label="vul" value="vul" name="config" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="脆弱性数据库" prop="vuldb">
        <el-checkbox-group v-model="task.vuldb">
          <el-checkbox label="cve" value="port" name="vuldb" />
          <el-checkbox label="openvas" value="serv" name="vuldb" />
          <el-checkbox label="vuldb" value="os" name="vuldb" />
          <el-checkbox label="xforce" value="vul" name="vuldb" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="协议脚本" prop="script">
        <el-checkbox-group v-model="task.script">
          <el-checkbox label="modbus-discover" value="port" name="script" />
          <el-checkbox label="DNP3" value="serv" name="script" />
          <el-checkbox label="snmp*" value="os" name="script" />
          <el-checkbox label="s7-info" value="vul" name="script" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">立即创建</el-button>
        <el-button @click="resetForm('task')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { createTask } from '@/api/task'

export default {
  name: 'CreateTask',
  data() {
    return {
      task: {
        name: '',
        desc: '',
        target: '',
        port: '',
        trigger: '',
        scan_type: [],
        rate: 100,
        config: [],
        vuldb: [],
        script: []
      },
      rules: {
        name: [
          { required: true, message: '请输入任务名称', trigger: 'blur' },
          { min: 3, message: '长度需大于等于3个字符', trigger: 'blur' }
        ],
        target: [
          { required: true, message: '请输入目标地址信息', trigger: 'blur' }
        ],
        config: [
          { type: 'array', required: true, message: '请至少选择一个配置项', trigger: 'change' }
        ],
        trigger: [
          {
            required: true, message: '请选择定时方式', trigger: 'blur'
          }
        ]
      },

      schedules: [
        {
          value: 'date',
          label: 'date'
        },
        {
          value: 'interval',
          label: 'interval'
        },
        {
          value: 'cron',
          label: 'cron'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods: {
    handleSubmit() {
      console.log(JSON.stringify(this.task))
      createTask(this.task).then(response => {
        this.$message({
          message: `Tasks Create ${response.data.status}`,
          type: 'success',
          duration: 5 * 1000
        })
        // window.location.href = '/task/index'
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
