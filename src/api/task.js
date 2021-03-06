import request from '@/utils/request'

export function getAllTask(start, length, search) {
//   var queryString = Object.keys(search).map(key => key + '=' + search[key]).join('&');
  return request({
    url: '/task',
    method: 'get',
    params: { start, length, search }
  })
}

export function deleteTask(data) {
  //   var queryString = Object.keys(search).map(key => key + '=' + search[key]).join('&');
  return request({
    url: '/task/delete',
    method: 'post',
    data
  })
}

export function getTaskStatus(task_id) {
  //   var queryString = Object.keys(search).map(key => key + '=' + search[key]).join('&');
  return request({
    url: `/task/status`,
    method: 'get',
    params: { task_id }
  })
}

export function updateTaskStatus(data) {
  //   var queryString = Object.keys(search).map(key => key + '=' + search[key]).join('&');
  return request({
    url: `/task/status`,
    method: 'put',
    data
  })
}

export function getTaskReport(task_id) {
  //   var queryString = Object.keys(search).map(key => key + '=' + search[key]).join('&');
  return request({
    url: `/task/scanreport`,
    method: 'get',
    params: { task_id }
  })
}

export function createTask(data) {
  return request(
    {
      url: `/task/create`,
      method: 'post',
      data
    }
  )
}
