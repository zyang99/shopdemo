import { request } from './request';

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export class goodsInfo{
  constructor(iteminfo,colums,services){
    this.title = iteminfo.title
    this.desc = iteminfo.desc
    this.newPrice = iteminfo.price
    this.oldPrice = iteminfo.oldPrice
    this.discount = iteminfo.discountDesc
    this.columns = colums
    this.services = services
    this.realPrice = iteminfo.lowNowPrice
  }
}