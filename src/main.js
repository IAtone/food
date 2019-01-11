import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import routes from './routes'
import { routes } from './routes'
import axios from 'axios'

import {store} from './store/store'

Vue.use(VueRouter)

//配置默认根路径
axios.defaults.baseURL="https://wd0613301809pbsjzx.wilddogio.com/"

//配置Vue原型(在任何组件中都可以正常使用axios)
Vue.prototype.http = axios


const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savePosition) {
    // return {
    //   x: 0,
    //   y: 100
    // }
    // return {
    //   selector: 'button'
    // }
    if(savePosition) {
      return savePosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

// 全局守卫
// router.beforeEach((to, from, next) => {

//   // console.log(to);
//   //判断store.getters.isLogin === false
//   if (to.path == '/login' || to.path == '/register') {
//     next();
//   } else {
//     alert('还没有登录，请先登录！');
//     next('/login');
//   }
// })

//后置钩子
// router.afterEach((to, from) => {
//   alert('after each');
// }) 



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
