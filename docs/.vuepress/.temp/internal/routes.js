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
  ["/dev/go/go_basic/1-%E7%8E%AF%E5%A2%83%E5%AE%89%E8%A3%85.html", { loader: () => import(/* webpackChunkName: "dev_go_go_basic_1-环境安装.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/dev/go/go_basic/1-环境安装.html.js"), meta: {"title":"环境安装"} }],
  ["/dev/go/go_basic/2-%E5%9F%BA%E6%9C%AC%E7%BB%93%E6%9E%84%E5%92%8C%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html", { loader: () => import(/* webpackChunkName: "dev_go_go_basic_2-基本结构和基本数据类型.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/dev/go/go_basic/2-基本结构和基本数据类型.html.js"), meta: {"title":"基本结构和基本数据类型"} }],
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
