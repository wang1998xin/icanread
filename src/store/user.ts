import { defineStore } from 'pinia'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { getInfo, login, logout } from '@/api/user'
import type { UserInfo, UserState } from '@/types/user'

const useUserStore = defineStore('userStore', {
  // 为了完整类型推理，推荐使用箭头函数
  state: (): UserState => {
    return {
      token: getToken() || '',
      name: '',
      avatar: '',
      introduction: '',
      roles: []
    }
  },
  getters: {
    getRoles: (state) => state.roles,
  },
  actions: {
    // user login
    async Login(userInfo: { username: string; password: string }) {
      const { username, password } = userInfo
      return new Promise<void>((resolve, reject) => {
        login({ username: username.trim(), password: password }).then(response => {
          const { data } = response
          this.token = data.token
          setToken(data.token)
          resolve()
        }).catch((error: any) => {
          reject(error)
        })
      })
    },

    // get user info
    GetInfo() {
      return new Promise<UserInfo>((resolve, reject) => {
        getInfo(this.token).then(response => {
          const data: UserInfo = response.data

          if (!data) {
            reject('Verification failed, please Login again.')
          }

          const { roles, name, avatar, introduction } = data

          // roles must be a non-empty array
          if (!roles || roles.length <= 0) {
            reject('getInfo: roles must be a non-null array!')
          }

          this.roles = roles
          this.name = name
          this.avatar = avatar
          this.introduction = introduction

          resolve(data)
        }).catch((error: any) => {
          reject(error)
        })
      })
    },

    // remove token
    ResetToken() {
      return new Promise<void>(resolve => {
        this.token = ''
        this.roles = []
        removeToken()
        resolve()
      })
    },

    // user logout
    LogOut() {
      return new Promise<void>((resolve, reject) => {
        logout().then(() => {
          this.token = ''
          this.roles = []
          removeToken()
          // resetRouter()

          // reset visited views and cached views
          // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
          // dispatch('tagsView/delAllViews', null, { root: true })

          resolve()
        }).catch((error: any) => {
          reject(error)
        })
      })
    },
  }
})

export default useUserStore;