const { defineConfig } = require('@vue/cli-service')
// const cdn = {
//   js: ["https://www.isqqw.com/dep/echarts/map/js/china.js", 
//   "https://echarts.baidu.com/resource/echarts-gl-latest/dist/echarts-gl.min.js"]
// }
const webName = "dataWeb";
const BASE_URL = process.env.NODE_ENV === "production" ? "/" : "/"

// gzip压缩
// 定义压缩文件类型
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  publicPath:'./',
  // publicPath: BASE_URL,
  outputDir: webName, // 构建文件的目录
  runtimeCompiler: true,
  // // 打包时不生成.map文件
  productionSourceMap: false, // 加速生产环境构建

  css: {
    extract: true, // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中, 生产环境下是 true，开发环境下是 false
    sourceMap: false, // 开启会影响构建的性能
  },
  // configureWebpack: {
  //   externals: {
  //     'map': 'Map',
  //     'charts': 'Charts'
  //   }
  // }
  // chainWebpack(config) {
  //   config.plugin('html').tap(args=>{
  //     args[0].cdn = cdn
  //     return args
  //   })
  // }
})
