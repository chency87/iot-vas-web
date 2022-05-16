const taskList = [
  {
    'name': '终端探测(82.102.188.9/24)',
    'config': 'app.backend.handlers.schedule.core:exec_namp_scan',
    'id': 'cron-489053f2861e4f91ae7245sfc78946a5',
    'createdAt': '2022-09-12 12:37:59',
    'status': 'Pause',
    'target': '82.102.188.9/24',
    'finished': '2022-09-12 12:37:59'
  },
  {
    'name': '终端探测(182.102.188.9/24)',
    'config': 'app.backend.handlers.schedule.core:exec_namp_scan',
    'id': 'cron-489053f2861e4f91ae78b8ff223946a5',
    'createdAt': '2022-09-12',
    'status': 'Pause',
    'target': '82.22.188.9/24',
    'finished': '2022-09-12 12:37:59'
  },
  {
    'name': '终端探测(282.102.188.9/24)',
    'config': 'app.backend.handlers.schedule.core:exec_namp_scan',
    'id': 'cron-489053f2861e4f91ae78b8ffc78946a444',
    'createdAt': '2021-08-09',
    'status': 'Pause',
    'target': '822.102.188.9/24',
    'finished': '2022-09-12 12:37:59'
  }
]

module.exports = [
  {
    url: '/tasks',
    type: 'get',
    response: config => {
      const { start, length, search } = config.query
      // mock error
      console.log(start, search)
      const target = JSON.parse(search)['target']
      let ret = []
      if (search['target'] !== '') {
        ret = taskList.filter(function(value, index, arr) {
          return value['target'].includes(target)
        })
      }
      const total = ret.length / length

      return {
        code: 20000,
        data: {
          total: total,
          data: ret
        }
      }
    }
  },
  // delete task
  {
    url: '/task/delete',
    type: 'post',
    response: {
      code: 20000,
      data: {
        status: 'success'
      }
    }
  },
  // GET Task status
  {
    url: '/task/status',
    type: 'get',
    response: {
      code: 20000,
      data: {
        task_id: 'iijioji',
        status: 'Running',
        finished: '2022/02/03 12:32'
      }
    }
  },
  // Update Task status
  {
    url: '/task/status',
    type: 'put',
    response: config => {
      // console.log(config.body)
      const k = Object.keys(config.body)[0]
      const v = Object.values(config.body)[0]
      const ret = {}
      if (v === 'Pause') {
        ret[k] = 'Running'
      } else if (v === 'Running') {
        ret[k] = 'Finished'
      } else if (v === 'Finished') {
        ret[k] = 'Pause'
      }
      console.log(ret)
      return {
        code: 20000,
        data: ret
      }
    }
  },
  {
    url: '/task/report',
    type: 'get',
    response: {
      code: 20000,
      data: {
        task_id: 'iijioji',
        status: true
      }
    }
  }
]
