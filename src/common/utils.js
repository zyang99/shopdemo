// debounce防抖函数--频繁调用func，则会等待时间合并执行一次
export  function debounce(func, delay='20') {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this.args)
    }, delay)
  }
}

// 事件格式化
export function formaDate(date, pattern = '') {
  let dt = new Date(date)
  let y = dt.getFullYear();
  //padStart总位数为2，不足在首位填充0，
  let m = (dt.getMonth() + 1).toString().padStart(2, '0');
  let d = (dt.getDate()).toString().padStart(2, '0');
  let hh = (dt.getHours()).toString().padStart(2, '0');
  let mm = (dt.getMinutes()).toString().padStart(2, '0');
  let ss = (dt.getSeconds()).toString().padStart(2, '0');
  if (pattern.toUpperCase() === 'YYYY-MM-DD') {
    return `${y}-${m}-${d}`;
  } else {
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
  }
}
