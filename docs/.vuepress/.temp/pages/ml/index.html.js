import comp from "Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/ml/index.html.vue"
const data = JSON.parse("{\"path\":\"/ml/\",\"title\":\"机器学习\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"传统机器学习\",\"slug\":\"传统机器学习\",\"link\":\"#传统机器学习\",\"children\":[]},{\"level\":2,\"title\":\"深度学习\",\"slug\":\"深度学习\",\"link\":\"#深度学习\",\"children\":[]}],\"git\":{\"updatedTime\":1721465295000,\"contributors\":[{\"name\":\"ZhangZiYi\",\"email\":\"ecustzzy1@163.com\",\"commits\":2}]},\"filePathRelative\":\"ml/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
