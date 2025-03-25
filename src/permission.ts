import router from './router'
import { ElMessage } from 'element-plus'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import useUserStore from '@/store/user'
import usePermissionStore from '@/store/permission'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
    // start progress bar
    NProgress.start()

    // determine whether the user has logged in
    const hasToken = getToken()
    
    if (hasToken) {
        if (to.path === '/login') {
            // if is logged in, redirect to the home page
            next({ path: '/' })
            NProgress.done()
        }
        else {
            const userStore = useUserStore()

            const permissionStore = usePermissionStore()

            // determine whether the user has obtained his permission roles through getInfo
            const hasRoles = userStore.getRoles && userStore.getRoles.length > 0
            if (hasRoles) {
                next()
            } else {
                try {
                    // get user info
                    // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
                    const { roles } = await userStore.GetInfo()

                    // generate accessible routes map based on roles
                    const accessRoutes = await permissionStore.GenerateRoutes(roles)

                    // dynamically add accessible routes
                    accessRoutes.forEach(route => router.addRoute(route))

                    // set the replace: true, so the navigation will not leave a history record
                    next({ ...to, replace: true })
                } catch (error) {
                    // remove token and go to login page to re-login
                    await userStore.ResetToken()
                    ElMessage({
                        message: 'Has Error',
                        type: 'error',
                        duration: 1.5 * 1000,
                        customClass: 'element-error-message-zindex'
                    })
                    next(`/login?redirect=${to.path}`)
                    NProgress.done()
                }
            }
        }
    } else {
        /* has no token*/
        if (whiteList.indexOf(to.path) !== -1) {
            // in the free login whitelist, go directly
            next()
        } else {
            // other pages that do not have permission to access are redirected to the login page.
            next(`/login?redirect=${to.path}`)
            NProgress.done()
        }
    }

})

router.afterEach(() => {
    // finish progress bar
    NProgress.done()
})
