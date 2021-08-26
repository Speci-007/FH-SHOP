module.exports = {
  configureWebpack: {                  // 表示进行对webpack的config进行配置
    resolve: {                         
      alias: {                         // 配置别名
        'assets': '@/assets',            //@默认表示为src
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

