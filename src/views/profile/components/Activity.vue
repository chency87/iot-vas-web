<template>
  <el-form>
    <el-form-item label="旧密码">
      <el-input v-model.trim="user.old_pass" />
    </el-form-item>
    <el-form-item label="新密码">
      <el-input v-model.trim="user.new_pass" />
    </el-form-item>
    <el-form-item label="确认新密码">
      <el-input v-model.trim="user.confirm_pass" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">重置密码</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: '',
          old_pass: '',
          new_pass: '',
          confirm_pass: ''
        }
      }
    }
  },
  methods: {
    submit() {
      this.$message({
        message: 'User information has been updated successfully',
        type: 'success',
        duration: 5 * 1000
      })
    }
  }
}
</script>
