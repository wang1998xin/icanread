import request from '@/api/axios'

export function login(data: { username: string; password: string }) {
  return request({
    url: '/icanread/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token: string) {
  return request({
    url: '/icanread/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/icanread/user/logout',
    method: 'post'
  })
}