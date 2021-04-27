import {
  ADD_TO_CAR,
  COUNT_ADD_ONE
} from './mutations_types.js'



export default {
  addcar({ state, commit }, payload) {
    // payload是新添加的商品
    // 查找之前购物车是否有该商品
    let oldProduct = state.carList.find(item => item.iid === payload.iid)
    if (oldProduct) {
      commit(COUNT_ADD_ONE, oldProduct)
    } else {
      payload.count = 1
      commit(ADD_TO_CAR, payload)
    }
  }
}