module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  
    // dev: {
    //   // Paths
    //   assetsSubDirectory: 'static',
    //   assetsPublicPath: '/',
    //   proxyTable: {},
    //   host: '0.0.0.0', // 将此处localhost 修改为  '0.0.0.0',0.0.0.0意义相当于*，表示所有
    //   port: 8080,
    //   autoOpenBrowser: false,
    // }
  

  // devserve:{
  //   host:'http://192.168.6.1',
  //   port:8080,
  //   disableHostCheck:true
  // }
}

