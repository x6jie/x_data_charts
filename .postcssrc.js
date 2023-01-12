
module.exports = {
  "plugins": {

    "postcss-pxtorem": {
      "rootValue": 12,
      "propList": ["*"],
      unitPrecision: 5, //保留rem小数点多少位
      // 注意：如果有使用第三方UI如VUX，则需要配置下忽略选择器不转换。d
      // 规则是class中包含的字符串，如vux中所有的class前缀都是weui-。也可以是正则。
      "selectorBlackList": ['el-card','el-input','el-form', '.search', '.routerContent', '.routerPage']
    }
  }
}

