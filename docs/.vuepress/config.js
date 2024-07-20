import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress/cli'
import {viteBundler} from '@vuepress/bundler-vite'
// import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
    lang: 'zh-CN',
    base: '/yi-doc/',

    title: 'Yi-Docs',
    description: '你好！我是子亿，一名计算机专业在读研究生。这是我的个人博客。',

    theme: defaultTheme({
        // 导航栏
        navbar: [
            {
                text: '主页',
                link: '/',
            },
            {
                text: 'Web 应用开发',
                link: '/dev/'
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
        // 侧边栏
        sidebar: {
            '/al/': [
                {
                    text: 'Algorithm',
                    path: '/al/',
                    children: [
                        '/al/' // 该目录下的 README.md
                    ]
                }
            ],
            '/dev/': [
                {
                    text: 'Web 应用开发',
                    path: '/dev/',
                    children: [
                        {
                            text: 'Go',
                            collapsible: true,
                            children: [
                                {
                                    text: 'Go 基础',
                                    children: [
                                        '/dev/go/go_basic/1-环境安装',
                                        '/dev/go/go_basic/2-基本结构和基本数据类型'
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
            '/ml/': [
                {
                    text: '机器学习',
                    path: '/ml/',
                    children: [
                        '/machine_learning/',
                        '/machine_learning/123',
                        '/machine_learning/one'
                    ]
                }
            ]
        }
    }),

    bundler: viteBundler(),

    plugins: [
        searchPlugin({
            // 配置项
        }),
    ],
})
