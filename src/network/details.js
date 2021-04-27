import { request } from './request';

// 获取详情页的一些数据
export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

// 获取详情页的推荐数据
export function getRecommend(){
  return request({
    url:'/recommend'
  })
}

// baseInfo 数据封装
export class goodsInfo {
  constructor(iteminfo, columns, services) {
    this.title = iteminfo.title
    this.desc = iteminfo.desc
    this.newPrice = iteminfo.price
    this.oldPrice = iteminfo.oldPrice
    this.discount = iteminfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = iteminfo.lowNowPrice
  }
}

// 商家详情信息
export class shopInfo {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}

// 详情参数数据
export class goodsParam {
  constructor(info, rule) {
    this.image = info.image ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}