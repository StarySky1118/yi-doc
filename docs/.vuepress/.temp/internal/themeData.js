export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"主页\",\"link\":\"/\"},{\"text\":\"Web 应用开发\",\"link\":\"/dev/\"},{\"text\":\"机器学习\",\"link\":\"/ml/\"},{\"text\":\"算法\",\"link\":\"/al/\"}],\"sidebar\":{\"/al/\":[{\"text\":\"Algorithm\",\"path\":\"/al/\",\"children\":[\"/al/\"]}],\"/dev/\":[{\"text\":\"Web 应用开发\",\"path\":\"/dev/\",\"children\":[{\"text\":\"Go\",\"collapsible\":true,\"children\":[{\"text\":\"Go 基础\",\"children\":[\"/dev/go/go_basic/1-环境安装\",\"/dev/go/go_basic/2-基本结构和基本数据类型\"]}]}]}],\"/ml/\":[{\"text\":\"机器学习\",\"path\":\"/ml/\",\"children\":[\"/machine_learning/\",\"/machine_learning/123\",\"/machine_learning/one\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
