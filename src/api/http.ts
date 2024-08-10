// import qs from 'qs'
import merge from 'lodash/merge'

/**
 * 请求地址处理
 * @param {string} actionName action方法名称
 */
export const adornUrl = (actionName: string) => {
    // 非生产环境 && 开启代理, 接口前缀统一使用[/proxyApi/]前缀做代理拦截!
    return (process.env.NODE_ENV !== 'production' && process.env.OPEN_PROXY ? '/proxyApi' : process.env.VUE_APP_BASE_API) + actionName
}

/**
 * get请求参数处理
 * @param {*} params 参数对象
 * @param {*} openDefultParams 是否开启默认参数?
 */
export const adornParams = (params = {}, openDefultParams = true) => {
    let defaults = {
        't': new Date().getTime()
    }
    return openDefultParams ? merge(defaults, params) : params
}

/**
 * post请求数据处理
 * @param {*} data 数据对象
 * @param {*} openDefultdata 是否开启默认数据?
 * @param {*} contentType 数据格式
 *  json: 'application/json; charset=utf-8'
 *  form: 'application/x-www-form-urlencoded; charset=utf-8'
 */
export const adornData = (data = {}, openDefultdata = true, contentType = 'json') => {
    let defaults = {
        't': new Date().getTime()
    }
    data = openDefultdata ? merge(defaults, data) : data
    return JSON.stringify(data)
    // return contentType === 'json' ? JSON.stringify(data) : qs.stringify(data)
}