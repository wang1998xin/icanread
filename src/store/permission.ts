import { constantRoutes, asyncRoutes } from '@/router'
import type { RouteState } from '@/types/permission'
import { defineStore } from 'pinia'
import type { RouteRecordRaw } from 'vue-router'

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles: string[], route: RouteRecordRaw) {
    if (route.meta && route.meta.roles) {
        const routeRoles: string[] = route.meta?.roles as string[] || []
        return roles.some(role => routeRoles.includes(role))
    } else {
        return true
    }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes: RouteRecordRaw[], roles: string[]) {
    const res: RouteRecordRaw[] = []

    routes.forEach(route => {
        const tmp = { ...route }
        if (hasPermission(roles, tmp)) {
            if (tmp.children) {
                tmp.children = filterAsyncRoutes(tmp.children, roles)
            }
            res.push(tmp)
        }
    })

    return res
}

const usePermissionStore = defineStore('permissionStore', {
    // 为了完整类型推理，推荐使用箭头函数
    state: (): RouteState => {
        return {
            routes: [],
            addRoutes: []
        }
    },
    actions: {
        SetRoutes(routes: RouteRecordRaw[]) {
            this.addRoutes = routes
            this.routes = constantRoutes.concat(routes)
        },

        GenerateRoutes(roles: string[]) {
            return new Promise<RouteRecordRaw[]>(resolve => {
                let accessedRoutes: RouteRecordRaw[] = []
                if (roles.includes('admin')) {
                    accessedRoutes = asyncRoutes
                } else {
                    accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
                }
                this.SetRoutes(accessedRoutes)
                resolve(accessedRoutes)
            })
        },

        PermissionRoutes() {
            return this.routes
        },
    }
})

export default usePermissionStore;