export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/al/", { loader: () => import(/* webpackChunkName: "al_index.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/al/index.html.js"), meta: {"title":"算法"} }],
  ["/dev/", { loader: () => import(/* webpackChunkName: "dev_index.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/dev/index.html.js"), meta: {"title":"开发"} }],
  ["/ml/", { loader: () => import(/* webpackChunkName: "ml_index.html" */"Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/ml/index.html.js"), meta: {"title":"机器学习"} }],
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
