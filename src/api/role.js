import request from '@/utils/request'

export function getRoutes() {
  return request({
    url: '/iot-vas-web/routes',
    method: 'get'
  })
}

export function getRoles() {
  return request({
    url: '/iot-vas-web/roles',
    method: 'get'
  })
}

export function addRole(data) {
  return request({
    url: '/iot-vas-web/role',
    method: 'post',
    data
  })
}

export function updateRole(id, data) {
  return request({
    url: `/iot-vas-web/role/${id}`,
    method: 'put',
    data
  })
}

export function deleteRole(id) {
  return request({
    url: `/iot-vas-web/role/${id}`,
    method: 'delete'
  })
}
