<!-- 
<template>
  <div class="file-upload">
    <el-upload
      ref="upload"
      :limit="limit"
      :before-upload="beforeUpload"
      :auto-upload="false"
      :headers="headers"
      :on-success="handleSuccess"
      :on-error="handleError"
      :accept="accept"
      :multiple="multiple"
      :action=" 'localhost:8080/api/localstorage' + '?name=' + filename"
    >
      <div><i class="el-icon-upload" /> 添加文件</div>
      <div slot="tip" class="el-upload__tip">可上传nse脚本文件,且不超过2M</div>
    </el-upload>
    <el-button :loading="loading" type="primary" @click="upload">确认上传</el-button>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
export default {
  name: 'Upload',
  props: {
    // 可上传的文件个数 -1 为可以无限上传 不能为0
    limit: {
      type: Number,
      default: 1
    },
    // 限制上传的格式
    accept: {
      type: String,
      default: 'nse'
    },
    multiple: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      loading: false,
      headers: {
        'Authorization': getToken()
      },
      filename: ''
    }
  },
  methods: {
    // 上传文件
    upload() {
      this.$refs.upload.submit()
    },
    beforeUpload(file) {
      const isNSE = file.type === 'file/nse'
      let isLt2M = true
      isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.loading = false
        this.$message.error('上传文件大小不能超过 2MB!')
      }
      if (!isNSE) {
        this.$message.error('上传文件只能是 nse 格式!')
      }
      this.filename = file.name
      return isLt2M && isNSE
    },
    handleSuccess(response, file, fileList) {
      this.$refs.upload.clearFiles()
      this.$notify({
        title: '上传成功',
        type: 'success',
        duration: 2500
      })
    },
    // 监听上传失败
    handleError(e, file, fileList) {
      const msg = JSON.parse(e.message)
      this.$notify({
        title: msg.message,
        type: 'error',
        duration: 2500
      })
      this.loading = false
    }
  }
}
</script>

<style>
.file-upload{
  text-align: center; /*让div内部文字居中*/
	background-color: #fff;
	border-radius: 20px;
	width: 300px;
	height: 350px;
	margin: auto;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
</style>
 -->
<template>
  <div>
    <div class="file-upload">
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        :accept="accept"
        :multiple="multiple"
        :limit="limit"
        :on-exceed="handleExceed"
        :on-change="onchange"
        :file-list="fileList"
      >
        <el-button size="small" type="primary" class="el-icon-upload">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/nse文件,且不超过20mb</div>
      </el-upload>
    </div>
    <div class="file-exbit">
      <el-descriptions title="上传文件列表" direction="vertical" :column="2" border>
        <el-descriptions-item label="文件MD5码">ac59075b964b0715</el-descriptions-item>
        <el-descriptions-item label="上传时间">2022-08-07</el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    accept: {
      type: String,
      default: 'nse'
    },
    limit: {
      type: Number,
      default: 3
    },
    multiple: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      fileList: [{ name: 'food.jpg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    }
  },
  methods: {
    onchange(file, fileList) {
      const fileName = file.name
      const uid = file.uid
      const pos = fileName.lastIndexOf('.')
      const lastName = fileName.substring(pos, fileName.length)
      if (
        lastName.toLowerCase() !== '.nse' &&
        lastName.toLowerCase() !== '.jpg'
      ) {
        this.$message.error('文件必须为.nse 或者.jpg 类型')
        // this.resetCompressData()
        for (var i = 0; i < fileList.length; i++) {
          if (fileList[i].uid === uid) {
            fileList.splice(i, 1)
          }
        }
        return
      }
      // 限制上传文件的大小
      const isLt =
        file.size / 1024 / 1 >= 1 && file.size / 1024 / 1024 / 20 <= 1
      if (!isLt) {
        this.$message.error('上传文件大小不得小于5KB,不得大于20MB!')
        for (i = 0; i < fileList.length; i++) {
          if (fileList[i].uid === uid) {
            fileList.splice(i, 1)
          }
        }
      }
      return isLt
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
      return this.$confirm(`确定移除 ${file.name}?`)
    }
  }
}
</script>
<style>
  .file-upload{
    text-align: center; /*让div内部文字居中*/
    background-color: #fff;
    border-radius: 20px;
    width: 300px;
    height: 550px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .file-exbit{
    text-align: center;
    background-color: #fff;
    border-radius: 20px;
    width: 1200px;
    height: 150px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
