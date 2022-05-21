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

const reportData = {
  task_id: '',
  create_time: '2022.06.06',
  end_time: '2023.21.09',
  params: {
    'name': '终端探测(282.102.188.9/24)',
    'config': 'app.backend.handlers.schedule.core:exec_namp_scan',
    'id': 'cron-489053f2861e4f91ae78b8ffc78946a444',
    'createdAt': '2021-08-09',
    'status': 'Pause',
    'target': '822.102.188.9/24',
    'finished': '2022-09-12 12:37:59'
  },
  scan_report: [
    {
      '198.53.49.46': {
        'OS': 'win 10',
        'vendor': 'Simons',
        'model_name': 'S7',
        'firmware_version': '5.2.0',
        'is_discontinued': 'Flase',
        'cve_list': [],
        'decive_type': 'PLC',
        'firmware_infor': {
          'name': '',
          'version': '',
          'shar2': ''
        },
        'tcp': [
        ],
        'udp': [
          {
            'port': 17,
            'service': 'qotd',
            'hostname': '12312312'
          },
          {
            'port': 19,
            'service': 'chargen',
            'snmp_sysdescr': ''
          },
          {
            'port': 67,
            'service': 'dhcps',
            'snmp_sysdescr': ''
          },
          {
            'port': 68,
            'service': 'dhcpc',
            'snmp_sysdescr': ''
          },
          {
            'port': 123,
            'service': 'ntp',
            'snmp_sysdescr': ''
          },
          {
            'port': 161,
            'service': 'snmp',
            'snmp_sysdescr': 'TANDBERG Codec\nSoftW: F8.1 NTSC\nMCU: TANDBERG Edge 95MXP\nDate: 2009-09-07\nS/N: 26A74922\nBootSW: Rev. 1.15, 2008-01-04\nBoard: 101070 rev. 07\n  System uptime: 1d06h40m35.24s (11043524 timeticks)'
          },
          {
            'port': 520,
            'service': 'route',
            'snmp_sysdescr': ''
          },
          {
            'port': 962,
            'service': 'unknown',
            'snmp_sysdescr': ''
          }
        ]
      }
    },
    {
      '198.53.49.46': {
        'OS': 'win 10',
        'vendor': 'Simons',
        'model_name': 'S7',
        'firmware_version': '5.2.0',
        'is_discontinued': 'Flase',
        'cve_list': [{
          'cve_id': '123123',
          'cvss': '1212322'
        }],
        'decive_type': 'PLC',
        'firmware_infor': {
          'name': '',
          'version': '',
          'shar2': ''
        },
        'tcp': [

        ],
        'udp': [
          {
            'port': 17,
            'service': 'qotd',
            'snmp_sysdescr': ''
          },
          {
            'port': 19,
            'service': 'chargen',
            'snmp_sysdescr': ''
          },
          {
            'port': 67,
            'service': 'dhcps',
            'snmp_sysdescr': ''
          },
          {
            'port': 68,
            'service': 'dhcpc',
            'snmp_sysdescr': ''
          },
          {
            'port': 123,
            'service': 'ntp',
            'snmp_sysdescr': ''
          },
          {
            'port': 161,
            'service': 'snmp',
            'snmp_sysdescr': 'TANDBERG Codec\nSoftW: F8.1 NTSC\nMCU: TANDBERG Edge 95MXP\nDate: 2009-09-07\nS/N: 26A74922\nBootSW: Rev. 1.15, 2008-01-04\nBoard: 101070 rev. 07\n  System uptime: 1d06h40m35.24s (11043524 timeticks)'
          },
          {
            'port': 520,
            'service': 'route',
            'snmp_sysdescr': ''
          },
          {
            'port': 962,
            'service': 'unknown',
            'snmp_sysdescr': ''
          }
        ]
      }
    }
  ]
}

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
        data: reportData,
        status: true
      }
    }
  }
]
