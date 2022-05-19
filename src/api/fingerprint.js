import request from '@/utils/request'

export function getDevices(start, length, search) {
//   var queryString = Object.keys(search).map(key => key + '=' + search[key]).join('&');
  return request({
    url: '/firmware',
    method: 'get',
    params: { start, length, search }
  })
}

export function deleteDevice(data) {
  //   var queryString = Object.keys(search).map(key => key + '=' + search[key]).join('&');
  return request({
    url: '/task/delete',
    method: 'post',
    data
  })
}

export function getRisk(firmware_hash) {
  //   var queryString = Object.keys(search).map(key => key + '=' + search[key]).join('&');
  return request({
    url: '/firmware/risk',
    method: 'get',
    params: { firmware_hash }
  })
}

export function getAccounts(firmware_hash) {
  //   var queryString = Object.keys(search).map(key => key + '=' + search[key]).join('&');
  return request({
    url: '/firmware/accounts',
    method: 'get',
    params: { firmware_hash }
  })
}

export function getPrivateKeys(firmware_hash) {
  //   var queryString = Object.keys(search).map(key => key + '=' + search[key]).join('&');
  return request({
    url: '/firmware/private-keys',
    method: 'get',
    params: { firmware_hash }
  })
}

export function getWeakKeys(firmware_hash) {
  //   var queryString = Object.keys(search).map(key => key + '=' + search[key]).join('&');
  return request({
    url: '/firmware/weak-keys',
    method: 'get',
    params: { firmware_hash }
  })
}

export function getExpiredCerts(firmware_hash) {
  //   var queryString = Object.keys(search).map(key => key + '=' + search[key]).join('&');
  return request({
    url: '/firmware/expired-certs',
    method: 'get',
    params: { firmware_hash }
  })
}

export function getWeakCerts(firmware_hash) {
  //   var queryString = Object.keys(search).map(key => key + '=' + search[key]).join('&');
  return request({
    url: '/firmware/weak-certs',
    method: 'get',
    params: { firmware_hash }
  })
}

export function getConfigIssues(firmware_hash) {
  //   var queryString = Object.keys(search).map(key => key + '=' + search[key]).join('&');
  return request({
    url: '/firmware/config-issues',
    method: 'get',
    params: { firmware_hash }
  })
}
