import comp from "Z:/code3/yi-doc-doc/vuepress-starter/docs/.vuepress/.temp/pages/dev/principle/4-Redis.html.vue"
const data = JSON.parse("{\"path\":\"/dev/principle/4-Redis.html\",\"title\":\"Redis\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"MySQL 和 Redis 数据同步方式\",\"slug\":\"mysql-和-redis-数据同步方式\",\"link\":\"#mysql-和-redis-数据同步方式\",\"children\":[]},{\"level\":2,\"title\":\"缓存雪崩、缓存击穿、缓存穿透\",\"slug\":\"缓存雪崩、缓存击穿、缓存穿透\",\"link\":\"#缓存雪崩、缓存击穿、缓存穿透\",\"children\":[]},{\"level\":2,\"title\":\"Redis 大 key 有什么问题？\",\"slug\":\"redis-大-key-有什么问题\",\"link\":\"#redis-大-key-有什么问题\",\"children\":[]}],\"git\":{\"updatedTime\":1725412272000,\"contributors\":[{\"name\":\"ZhangZiYi\",\"email\":\"ecustzzy1@163.com\",\"commits\":4}]},\"filePathRelative\":\"dev/principle/4-Redis.md\"}")
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
