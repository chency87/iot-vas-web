const FileList = [
  {
    'time': '2012-01-12',
    'name': '123.nse'
  },
  {
    'time': '2012-01-12',
    'name': '123.nse'
  },
  {
    'time': '2012-01-12',
    'name': '123.nse'
  },
  {
    'time': '2012-01-12',
    'name': '123.nse'
  },
  {
    'time': '2012-01-12',
    'name': '123.nse'
  },
  {
    'time': '2012-01-12',
    'name': '123.nse'
  },
  {
    'time': '2012-01-12',
    'name': '123.nse'
  }
]

module.exports = [
  {
    url: '/plugin',
    type: 'get',
    response: config => {
      const { start, length, search } = config.query
      // mock error
      console.log(start, search)
      const name = JSON.parse(search)['name']
      let ret = []
      if (search['name'] !== '') {
        ret = FileList.filter(function(value, index, arr) {
          return value['name'].includes(name)
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
    url: '/plugin/delete',
    type: 'post',
    response: {
      code: 20000,
      data: {
        status: 'success'
      }
    }
  }
]
