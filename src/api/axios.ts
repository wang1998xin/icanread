import { useCookies } from "vue3-cookies";
import axios from 'axios'
import router from '@/router'
// import { clearLoginInfo } from '@/utils'
import { ElMessage } from 'element-plus'

const { cookies } = useCookies();

const axiosInstance = axios.create({
    timeout: 1000 * 30,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
})

/**
 * 请求拦截
 * 需要拦截请求的原因
  *   1.config中包含了某些不符合服务器要求的信息
  *   2.发送网络请求的时候需要向用户展示一些加载中的图标
  *   3.网站需要登录才能请求资源，也就是需要token才能请求资源
 */
axiosInstance.interceptors.request.use(config => {
    // config.headers['Authorization'] = cookies.get('Authorization') // 请求头带上token
    return config
}, error => {
    return Promise.reject(error)
})

/**
 * 响应拦截
 */
axiosInstance.interceptors.response.use(response => {
    // blob 格式处理
    if (response.request.responseType === 'blob') {
        return response
    }

    const res = response.data
    // 00000 请求成功
    if (res.code === '00000') {
        return res
    }
    // A00001 用于直接显示提示用户的错误,内容由输入决定
    if (res.code === 'A00001') {
        ElMessage({
            message: res.msg || 'Error',
            type: 'error',
            duration: 1.5 * 1000
        })
        return Promise.reject(res)
    }
    // A00002 用于直接显示提示系统的成功,内容由输入决定
    if (res.code === 'A00002') {
        ElMessage({
            message: res.msg,
            type: 'success',
            duration: 1.5 * 1000
        })
    }

    // A00004 未授权
    if (res.code === 'A00004') {
        // clearLoginInfo()
        router.push({ name: 'login' })
    }

    // A00005 服务器异常
    if (res.code === 'A00005') {
        console.error('============== 请求异常 ==============')
        // console.log('接口地址: ', response.config.url.replace(process.env.VUE_APP_BASE_API, ''))
        console.log('异常信息: ', res)
        console.error('============== 请求异常 end ==========')
        ElMessage({
            message: '服务器出了点小差，请稍后再试',
            type: 'error',
            duration: 1.5 * 1000,
            customClass: 'element-error-message-zindex'
        })
        return Promise.reject(res)
    }
    if (res.code === 'A00014') {
        ElMessage({
            message: res.msg,
            type: 'error',
            duration: 1.5 * 1000
        })
        return Promise.reject(res)
    }
}, error => {
    switch (error.response.status) {
        case 400:
            ElMessage({
                message: error.response.data,
                type: 'error',
                duration: 1500,
                customClass: 'element-error-message-zindex'
            })
            break
        case 401:
            //   clearLoginInfo()
            router.push({ name: 'login' })
            break
        case 405:
            ElMessage({
                message: 'axiosInstance请求方式有误',
                type: 'error',
                duration: 1500,
                customClass: 'element-error-message-zindex'
            })
            break
        case 500:
            ElMessage({
                message: '服务器出了点小差，请稍后再试',
                type: 'error',
                duration: 1500,
                customClass: 'element-error-message-zindex'
            })
            break
        case 501:
            ElMessage({
                message: '服务器不支持当前请求所需要的某个功能',
                type: 'error',
                duration: 1500,
                customClass: 'element-error-message-zindex'
            })
            break
    }
    return Promise.reject(error)
})

export default axiosInstance
