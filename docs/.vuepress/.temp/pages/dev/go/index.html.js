import comp from "Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/dev/go/index.html.vue"
const data = JSON.parse("{\"path\":\"/dev/go/\",\"title\":\"开发 - Go\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1721465295000,\"contributors\":[{\"name\":\"ZhangZiYi\",\"email\":\"ecustzzy1@163.com\",\"commits\":1}]},\"filePathRelative\":\"dev/go/README.md\"}")
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
