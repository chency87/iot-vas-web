import request from '@/utils/request'

export function getAllFile(start, length, tabledata) {
//   var queryString = Object.keys(search).map(key => key + '=' + search[key]).join('&');
  return request({
    url: '/plugin',
    method: 'get',
    params: { start, length, tabledata }
  })
}
export function deleteDevice(filename) {
  //   var queryString = Object.keys(search).map(key => key + '=' + search[key]).join('&');
  return request({
    url: '/plugin/delete',
    method: 'post',
    filename
  })
}
