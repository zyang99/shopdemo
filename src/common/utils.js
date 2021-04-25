// debounce防抖函数--频繁调用func，则会等待时间合并执行一次
export default function debounce(func,delay){
  let timer = null
  return  function(...args){
    if(timer) clearTimeout(timer)
    timer = setTimeout(()=>{
      func.apply(this.args)
    },delay)
  }
}