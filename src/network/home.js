import { request } from './request'

// 将home需要的网络请求全部封装到这里

// 获取轮播图和推荐
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

// 请求首页数据
export function getHomeGoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}

