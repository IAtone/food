//一级路由
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

// 二级路由
import History from './components/about/History'
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import OrderingGuide from './components/about/OrderingGuide'

// 三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'

export const routes = [
    {
      path: '/',
      name: 'homeLink',
      components: {
          default: Home,
          'orderingGuide': OrderingGuide,
          'history': History,
          'delivery': Delivery
      }
    },
    {
      path: '/menu',
      name: 'menuLink',
      component: Menu
    },
    {
      path: '/admin',
      name: 'adminLink',
      component: Admin
      // beforeEnter: (to, from, next) => {
      //   // alert('非登录状态，不能访问起页面');
      //   // next(false);
      //   if (to.path == '/login' || to.path == '/register') {
      //     next();
      //   } else {
      //     alert('还没有登录，请先登录！');
      //     next('/login');
      //   }
      // }
    },
    {
      path: '/about',
      name: 'aboutLink',
      redirect: '/contact',
      component: About,
      children: [
        {
          path: '/history',
          name: 'historyLink',
          component: History
        },
        {
          path: '/contact',
          name: 'contactLink',
          redirect: '/personName',
          component: Contact,
          children: [
            {
              path: '/phone',
              name: 'phone',
              component: Phone
            },
            {
              path: '/personname',
              name: 'personName',
              component: PersonName
            }
          ]
        },
        {
          path: '/delivery',
          name: 'deliveryLink',
          component: Delivery
        },
        {
          path: '/orderingguide',
          name: 'orderingGuideLink',
          component: OrderingGuide
        }
      ]
    },
    {
      path: '/login',
      name: 'loginLink',
      component: Login
    },
    {
      path: '/register',
      name: 'registerLink',
      component: Register
    },
    // 没找到路径跳到根路径
    {
      path: '*',
      redirect: '/'
    }
  ]
// export default routes
  
  