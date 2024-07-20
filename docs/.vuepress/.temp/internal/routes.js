export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/al/", { loader: () => import(/* webpackChunkName: "al_index.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/al/index.html.js"), meta: {"title":"算法"} }],
  ["/dev/", { loader: () => import(/* webpackChunkName: "dev_index.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/dev/index.html.js"), meta: {"title":"开发"} }],
  ["/ml/", { loader: () => import(/* webpackChunkName: "ml_index.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/ml/index.html.js"), meta: {"title":"机器学习"} }],
  ["/dev/go/go_basic.html", { loader: () => import(/* webpackChunkName: "dev_go_go_basic.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/dev/go/go_basic.html.js"), meta: {"title":"Go 基础"} }],
  ["/dev/go/", { loader: () => import(/* webpackChunkName: "dev_go_index.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/dev/go/index.html.js"), meta: {"title":"开发 - Go"} }],
  ["/dev/java/", { loader: () => import(/* webpackChunkName: "dev_java_index.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/dev/java/index.html.js"), meta: {"title":""} }],
  ["/dev/java/SpringSecurity.html", { loader: () => import(/* webpackChunkName: "dev_java_SpringSecurity.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/dev/java/SpringSecurity.html.js"), meta: {"title":"基本原理"} }],
  ["/dev/go/gin/Gin%E7%A4%BA%E4%BE%8B%E7%A8%8B%E5%BA%8F.html", { loader: () => import(/* webpackChunkName: "dev_go_gin_Gin示例程序.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/dev/go/gin/Gin示例程序.html.js"), meta: {"title":"一、Gin 示例程序"} }],
  ["/dev/go/go_basic/1-%E7%8E%AF%E5%A2%83%E5%AE%89%E8%A3%85.html", { loader: () => import(/* webpackChunkName: "dev_go_go_basic_1-环境安装.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/dev/go/go_basic/1-环境安装.html.js"), meta: {"title":"一、环境安装"} }],
  ["/dev/go/go_basic/2-%E5%9F%BA%E6%9C%AC%E7%BB%93%E6%9E%84%E5%92%8C%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html", { loader: () => import(/* webpackChunkName: "dev_go_go_basic_2-基本结构和基本数据类型.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/dev/go/go_basic/2-基本结构和基本数据类型.html.js"), meta: {"title":"二、基本结构和基本数据类型"} }],
  ["/dev/go/go_basic/3-%E6%8E%A7%E5%88%B6%E7%BB%93%E6%9E%84.html", { loader: () => import(/* webpackChunkName: "dev_go_go_basic_3-控制结构.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/dev/go/go_basic/3-控制结构.html.js"), meta: {"title":"三、控制结构"} }],
  ["/dev/go/go_basic/4-%E5%87%BD%E6%95%B0.html", { loader: () => import(/* webpackChunkName: "dev_go_go_basic_4-函数.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/dev/go/go_basic/4-函数.html.js"), meta: {"title":"四、函数"} }],
  ["/dev/go/go_basic/5-%E6%95%B0%E7%BB%84%E4%B8%8E%E5%88%87%E7%89%87.html", { loader: () => import(/* webpackChunkName: "dev_go_go_basic_5-数组与切片.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/dev/go/go_basic/5-数组与切片.html.js"), meta: {"title":"五、数组与切片"} }],
  ["/dev/go/go_basic/6-Map.html", { loader: () => import(/* webpackChunkName: "dev_go_go_basic_6-Map.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/dev/go/go_basic/6-Map.html.js"), meta: {"title":"六、Map"} }],
  ["/dev/go/go_basic/7-%E7%BB%93%E6%9E%84%E4%BD%93%E4%B8%8E%E6%96%B9%E6%B3%95.html", { loader: () => import(/* webpackChunkName: "dev_go_go_basic_7-结构体与方法.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/dev/go/go_basic/7-结构体与方法.html.js"), meta: {"title":"七、结构体与方法"} }],
  ["/dev/go/go_basic/8-%E6%8E%A5%E5%8F%A3%E4%B8%8E%E5%8F%8D%E5%B0%84.html", { loader: () => import(/* webpackChunkName: "dev_go_go_basic_8-接口与反射.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/dev/go/go_basic/8-接口与反射.html.js"), meta: {"title":"八、接口与反射"} }],
  ["/dev/tool/idea/1-%E5%B8%B8%E7%94%A8%E5%BF%AB%E6%8D%B7%E9%94%AE.html", { loader: () => import(/* webpackChunkName: "dev_tool_idea_1-常用快捷键.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/dev/tool/idea/1-常用快捷键.html.js"), meta: {"title":"IDEA 常用快捷键"} }],
  ["/dev/java/springboot_multi_env/1-%E5%8D%95%E4%BD%93%E9%A1%B9%E7%9B%AE.html", { loader: () => import(/* webpackChunkName: "dev_java_springboot_multi_env_1-单体项目.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/dev/java/springboot_multi_env/1-单体项目.html.js"), meta: {"title":"单体项目"} }],
  ["/dev/java/spring_security/1-%E5%9F%BA%E6%9C%AC%E5%8E%9F%E7%90%86.html", { loader: () => import(/* webpackChunkName: "dev_java_spring_security_1-基本原理.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/dev/java/spring_security/1-基本原理.html.js"), meta: {"title":"基本原理"} }],
  ["/dev/java/spring_security/2-%E8%AE%A4%E8%AF%81%E6%8E%A5%E5%8F%A3.html", { loader: () => import(/* webpackChunkName: "dev_java_spring_security_2-认证接口.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/dev/java/spring_security/2-认证接口.html.js"), meta: {"title":"认证接口"} }],
  ["/dev/java/spring_security/3-%E5%85%B6%E4%BB%96%E8%B5%84%E6%BA%90%E6%8E%A5%E5%8F%A3.html", { loader: () => import(/* webpackChunkName: "dev_java_spring_security_3-其他资源接口.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/dev/java/spring_security/3-其他资源接口.html.js"), meta: {"title":"其他资源接口"} }],
  ["/dev/java/spring_security/SpringSecurity.html", { loader: () => import(/* webpackChunkName: "dev_java_spring_security_SpringSecurity.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/dev/java/spring_security/SpringSecurity.html.js"), meta: {"title":"基本原理"} }],
  ["/dev/java/third_party_in/1-%E9%AB%98%E5%BE%B7%E5%9C%B0%E5%9B%BE%E6%8E%A5%E5%85%A5.html", { loader: () => import(/* webpackChunkName: "dev_java_third_party_in_1-高德地图接入.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/dev/java/third_party_in/1-高德地图接入.html.js"), meta: {"title":"高德地图接入"} }],
  ["/dev/java/third_party_in/2-AWS_S3.html", { loader: () => import(/* webpackChunkName: "dev_java_third_party_in_2-AWS_S3.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/dev/java/third_party_in/2-AWS_S3.html.js"), meta: {"title":"AWS S3"} }],
  ["/dev/middleware/tdengine/1-%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.html", { loader: () => import(/* webpackChunkName: "dev_middleware_tdengine_1-基本概念.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/dev/middleware/tdengine/1-基本概念.html.js"), meta: {"title":"一、基本概念"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
