// const path = require('path')
// function resolve(dir){
//   return path.join(__dirname,dir)
// }

module.exports = {
  publicPath:process.env.NODE_ENV === 'production' ? '/shopdemo/' : '/',
  // 浏览器自动打开，修改保存文件后自动重新运行
  devServer: {
    open: true
  },
  // 设置绝对地址路径别名： 在import中直接使用别名，在url中别名前面需要加上~
  // chainWebpack:(config)=>{
  //   config.resolve.alias
  //   // .set('@',resolve('./src'))
  //   .set('assets',resolve('./src/assets'))
  //   .set('components',resolve('./src/components'))
  //   .set('views',resolve('./src/views'))
  //   .set('network',resolve('./src/network'))
  // }
  configureWebpack:{
    resolve:{
      alias: {
        'assets':'@/assets',
        'components':'@/components',
        'common':'components/common',
        'content':'components/content',
        'network':'@/network',
        'views':'@/views',
        'store':'@/store'
      }
    }
  }
}