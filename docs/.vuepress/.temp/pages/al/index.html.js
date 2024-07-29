import comp from "Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/al/index.html.vue"
const data = JSON.parse("{\"path\":\"/al/\",\"title\":\"关于我\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1721739933000,\"contributors\":[{\"name\":\"ZhangZiYi\",\"email\":\"ecustzzy1@163.com\",\"commits\":2}]},\"filePathRelative\":\"al/README.md\"}")
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
