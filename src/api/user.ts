import request from '@/api/axios'

export function login(data: { username: string; password: string }) {
  return request({
    url: '/icanread/user/login',
    method: 'post',
    data
  })
}