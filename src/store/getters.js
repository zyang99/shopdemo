
export default{
  totalCount(state){
    return state.carList.length
  },
  carList(state){
    return state.carList
  },
  totalPrice(state){
    return state.carList.filter(item=>{
      return item.checked
    }).reduce((pre,n)=>{
      return pre+n.price*n.count
    },0).toFixed(2)
  },
  checkedCount(state){
    return state.carList.filter(item=>{
      return item.checked
    }).length
  }
}