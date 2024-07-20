import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress/cli'
import {viteBundler} from '@vuepress/bundler-vite'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
    lang: 'zh-CN',
    base: 'yi-doc',

    title: 'Yi-Docs',
    description: '你好！我是子亿，一名计算机专业在读研究生。这是我的个人博客。',

    theme: defaultTheme({
        navbar: [
            {
                text: '主页',
                link: '/',
            },
            {
                text: '开发',
                link: '/dev/',
            },
            {
                text: '机器学习',
                link: '/ml/',
            },
            {
                text: '算法',
                link: '/al/',
            },
        ],
    }),

    bundler: viteBundler(),

    plugins: [
        docsearchPlugin({
            // 配置项
        }),
    ],
})
