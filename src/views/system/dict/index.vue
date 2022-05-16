<template>
  <div class="app-container">
    <el-row>
      <el-col>
        <el-select v-model="currentDict" placeholder="请选择字典">
          <el-option
            v-for="item in dictOtions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-button>
          创建字典
        </el-button>
        <el-button>
          修改字典
        </el-button>
        <el-button>
          删除字典
        </el-button>
        <el-button>
          添加端口
        </el-button>
      </el-col>
    </el-row>
    <el-table
      ref="filterTable"
      :data="dictOtions"
      style="width: 100%"
    >
      <el-table-column
        prop="name"
        label="名称"
      />
      <el-table-column
        prop="port"
        label="端口"
      />
      <el-table-column
        prop="protocol"
        label="协议"
      />
      <el-table-column
        prop="desc"
        label="描述"
      />
    </el-table>
  </div>
</template>

<script>
export default {

  data() {
    return {
      currentDict: '',
      dictList: [],
      dictOtions: []
    }
  },
  created() {
    this.fetchDictList()
    this.fetchDictEle()
  },
  methods: {
    fetchDictList() {
      this.dictList = [{
        'label': 'default',
        value: 'default'
      }]
    },
    fetchDictEle() {
      this.currentDict
      this.dictOtions = [{
        name: 'default',
        dict_id: 1,
        dict_name: 'default',
        port: '123',
        protocol: '上海市普陀区金沙江路 1518 弄',
        desc: '家'
      }]
    }

  }
}
</script>

