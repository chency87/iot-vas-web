<template>
  <el-row :gutter="40" class="panel-group">
    <el-col>
      <el-table
        :data="weakKeys"
        stripe
        style="width: 100%"
      >
        <el-table-column
          prop="file_name"
          label="NAME"
          sortable
        />
        <el-table-column
          prop="file_hash"
          label="File Hash"
          sortable
        />
        <el-table-column
          prop="pem_type"
          label="Type"
          sortable
        />
        <el-table-column
          prop="algorithm"
          label="Algorithm"
          sortable
        />
        <el-table-column
          prop="bits"
          label="bits"
          sortable
        />
      </el-table>
    </el-col>
  </el-row>
</template>

<script>
import { getWeakKeys } from '@/api/fingerprint'

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
      weakKeys: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getWeakKeys(this.firmwareHash).then(response => {
        this.weakKeys = response.data.data
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

  .card-panel {
    height: 108px;
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

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;
      }
    }
    .card-panel-summary-description {
        margin: 8px;
        .card-panel-summary-text {
          color: rgba(0, 0, 0, 0.45);
          margin-top: 0;
          font-size: 10px;
          width: 100%;
          padding: 0;
          .card-panel-summary-title {
            line-height: 14px;
            font-size: 16px;
            // margin-bottom: 5px;
            padding: 0;
            margin: 0;
          }
          .card-panel-summary-list {
            line-height: 14px;
            font-size: 12px;
            margin-bottom: 0px;
            ul {
                list-style-type: none;
                padding: 0;
                margin: 0; /* Remove margins */
                li {
                    margin: 3px;
                }
            }
          }
      }
    }
  }
}

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
