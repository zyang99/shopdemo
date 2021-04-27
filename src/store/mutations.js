import {
  ADD_TO_CAR,
  COUNT_ADD_ONE
} from './mutations_types.js'


export default {
  // 功能单一化
  [ADD_TO_CAR](state, payload) {
    payload.checked = true
    state.carList.push(payload)
  },
  [COUNT_ADD_ONE](state, payload) {
    payload.count++
  }
}