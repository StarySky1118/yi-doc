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
                            text: '工具',
                            collapsible: true,
                            children: [
                                {
                                    text: 'IDEA',
                                    children: [
                                        '/dev/tool/idea/1-常用快捷键'
                                    ]
                                }
                            ]
                        },
                        {
                            text: 'Go',
                            collapsible: true,
                            children: [
                                {
                                    text: 'Go 基础',
                                    children: [
                                        '/dev/go/go_basic/1-环境安装',
                                        '/dev/go/go_basic/2-基本结构和基本数据类型',
                                        '/dev/go/go_basic/3-控制结构',
                                        '/dev/go/go_basic/4-函数',
                                        '/dev/go/go_basic/5-数组与切片',
                                        '/dev/go/go_basic/6-Map',
                                        '/dev/go/go_basic/7-结构体与方法',
                                        '/dev/go/go_basic/8-接口与反射'
                                    ]
                                },
                                {
                                    text: 'Gin',
                                    children: [
                                        '/dev/go/gin/Gin示例程序'
                                    ]
                                }
                            ]
                        },
                        {
                            text: 'Java',
                            collapsible: true,
                            children: [
                                {
                                    text: 'SpringSecurity',
                                    children: [
                                        '/dev/java/spring_security/1-基本原理',
                                        '/dev/java/spring_security/2-认证接口',
                                        '/dev/java/spring_security/3-其他资源接口'
                                    ]
                                },
                                {
                                    text: 'SpringBoot 多环境配置',
                                    children: [
                                        '/dev/java/springboot_multi_env/1-单体项目'
                                    ]
                                },
                                {
                                    text: 'SpringBoot 第三方服务接入',
                                    children: [
                                        '/dev/java/third_party_in/1-高德地图接入',
                                        '/dev/java/third_party_in/2-AWS_S3'
                                    ]
                                }
                            ]
                        },
                        {
                            text: '中间件',
                            collapsible: true,
                            children: [
                                {
                                    text: 'MongoDB',
                                    children: [
                                        '/dev/middleware/mongo/1-MongoDB基础',
                                        '/dev/middleware/mongo/2-单机部署',
                                        '/dev/middleware/mongo/3-基本命令'
                                    ]
                                },
                                {
                                    text: 'TDEngine',
                                    children: [
                                        '/dev/middleware/tdengine/1-基本概念'
                                    ]
                                }
                            ]
                        },
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
