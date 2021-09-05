import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
// import store from '../store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

NProgress.configure({     
  easing: 'ease',  // 动画方式    
  speed: 500,  // 递增进度条的速度    
  showSpinner: false, // 是否显示加载ico    
  trickleSpeed: 200, // 自动递增间隔    
  minimum: 0.3 // 初始化时的最小百分比
})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
//   if(!localStorage.crm_token && to.path !== '/login') {
//     next('/login')
//   }
//   if(!to.meta.root || (to.meta.root && localStorage.crm_user_type === '1')) {
  next()
//   } else {
//     next('/login')
//   }
})
router.afterEach(() => {
  NProgress.done()
})
export default router
