import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const ShopCar = () => import('views/shopcar/ShopCar')
const Profile = () => import('views/profile/Profile')
const Details = () => import('views/details/Details')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    meta: {
      title: '首页',
      keepAlive: true
    },
    component: Home
  },
  {
    path: '/details/:id',
    component: Details,
    meta:{
      title:'详情页'
    }
  },
  {
    path: '/category',
    meta: { title: '分类' },
    component: Category
  },
  {
    path: '/shopcar',
    meta: { title: '购物车' },
    component: ShopCar
  },
  {
    path: '/profile',
    meta: { title: '我的' },
    component: Profile
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
