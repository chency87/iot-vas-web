<template>
  <el-row :gutter="40" class="panel-group">
    <el-col>
      <el-table
        :data="accounts"
        stripe
        style="width: 100%"
      >
        <el-table-column
          prop="name"
          label="NAME"
          sortable
        />
        <el-table-column
          prop="pwd_hash"
          label="Password Hash"
          sortable
        />
        <el-table-column
          prop="hash_algorithm"
          label="Hash算法"
          sortable
        />
        <el-table-column
          prop="shell"
          label="Shell"
          sortable
        />
        <el-table-column
          prop="uid"
          label="UID"
          width="180"
          sortable
        />
        <el-table-column
          prop="gid"
          label="GID"
          sortable
        />
        <el-table-column
          prop="home_dir"
          label="HOME DIR"
          sortable
        />
      </el-table>
    </el-col>

  </el-row>
</template>

<script>
import { getAccounts } from '@/api/fingerprint'

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
    firmwareHash: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      accounts: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getAccounts(this.firmwareHash).then(response => {
        this.accounts = response.data.data
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

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3
      }
    }

    .icon-bug {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3
    }

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
