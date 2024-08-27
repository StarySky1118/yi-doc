import comp from "Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/dev/principle/mysql/2-事务篇.html.vue"
const data = JSON.parse("{\"path\":\"/dev/principle/mysql/2-%E4%BA%8B%E5%8A%A1%E7%AF%87.html\",\"title\":\"2. 事务篇\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"事务的特性\",\"slug\":\"事务的特性\",\"link\":\"#事务的特性\",\"children\":[]},{\"level\":2,\"title\":\"MySQL 如何实现事务\",\"slug\":\"mysql-如何实现事务\",\"link\":\"#mysql-如何实现事务\",\"children\":[]},{\"level\":2,\"title\":\"Undo Log\",\"slug\":\"undo-log\",\"link\":\"#undo-log\",\"children\":[]},{\"level\":2,\"title\":\"MVCC\",\"slug\":\"mvcc\",\"link\":\"#mvcc\",\"children\":[]},{\"level\":2,\"title\":\"MySQL 事务隔离级别\",\"slug\":\"mysql-事务隔离级别\",\"link\":\"#mysql-事务隔离级别\",\"children\":[]},{\"level\":2,\"title\":\"锁机制\",\"slug\":\"锁机制\",\"link\":\"#锁机制\",\"children\":[{\"level\":3,\"title\":\"全局锁\",\"slug\":\"全局锁\",\"link\":\"#全局锁\",\"children\":[]},{\"level\":3,\"title\":\"表级锁\",\"slug\":\"表级锁\",\"link\":\"#表级锁\",\"children\":[]},{\"level\":3,\"title\":\"行级锁\",\"slug\":\"行级锁\",\"link\":\"#行级锁\",\"children\":[]}]},{\"level\":2,\"title\":\"Redo Log\",\"slug\":\"redo-log\",\"link\":\"#redo-log\",\"children\":[]}],\"git\":{\"updatedTime\":1724744106000,\"contributors\":[{\"name\":\"ZhangZiYi\",\"email\":\"ecustzzy1@163.com\",\"commits\":2}]},\"filePathRelative\":\"dev/principle/mysql/2-事务篇.md\"}")
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
