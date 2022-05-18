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
    method: 'post',
    firmware_hash
  })
}

export function getAccounts(firmware_hash) {
  //   var queryString = Object.keys(search).map(key => key + '=' + search[key]).join('&');
  return request({
    url: '/firmware/accounts',
    method: 'post',
    firmware_hash
  })
}

export function getPrivateKeys(firmware_hash) {
  //   var queryString = Object.keys(search).map(key => key + '=' + search[key]).join('&');
  return request({
    url: '/firmware/private-keys',
    method: 'post',
    firmware_hash
  })
}

export function getWeakKeys(firmware_hash) {
  //   var queryString = Object.keys(search).map(key => key + '=' + search[key]).join('&');
  return request({
    url: '/firmware/weak-keys',
    method: 'post',
    firmware_hash
  })
}

export function getExpiredCerts(firmware_hash) {
  //   var queryString = Object.keys(search).map(key => key + '=' + search[key]).join('&');
  return request({
    url: '/firmware/expired-certs',
    method: 'post',
    firmware_hash
  })
}

export function getWeakCerts(firmware_hash) {
  //   var queryString = Object.keys(search).map(key => key + '=' + search[key]).join('&');
  return request({
    url: '/firmware/weak-certs',
    method: 'post',
    firmware_hash
  })
}

export function getConfigIssues(firmware_hash) {
  //   var queryString = Object.keys(search).map(key => key + '=' + search[key]).join('&');
  return request({
    url: '/firmware/config-issues',
    method: 'post',
    firmware_hash
  })
}
