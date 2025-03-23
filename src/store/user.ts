import { defineStore } from 'pinia'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router from '@/router'
import { login } from '@/api/user'

const useUserStore = defineStore('userStore', {
  // 为了完整类型推理，推荐使用箭头函数
  state: () => {
    return {
      // 所有这些属性都将自动推断出它们的类型
      token: getToken(),
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
  }
})

export default useUserStore;