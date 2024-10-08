import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress/cli'
import {viteBundler} from '@vuepress/bundler-vite'
// import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import {searchPlugin} from '@vuepress/plugin-search'

export default defineUserConfig({
    lang: 'zh-CN',
    base: '/yi-doc/',

    title: 'Yi-Docs',
    description: '技术学习博客',

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
                link: '/algo/',
            },
            {
                text: 'AI 应用探索',
                link: '/ai_application/',
            }
        ],
        // 侧边栏
        sidebar: {
            '/me/': [
                {
                    text: '关于我',
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
                            text: '深入学习',
                            collapsible: true,
                            children: [
                                '/dev/principle/1-操作系统',
                                '/dev/principle/2-java',
                                '/dev/principle/3-mysql',
                                '/dev/principle/4-Redis',
                                '/dev/principle/5-计算机网络',
                                {
                                    text: '计算机网络',
                                    collapsible: true,
                                    children: [
                                        '/dev/principle/network/',
                                        '/dev/principle/network/1-网络模型',
                                        '/dev/principle/network/2-应用层',
                                        '/dev/principle/network/3-传输层',
                                        '/dev/principle/network/4-MQTT详解'
                                    ]
                                },
                                {
                                    text: 'MySQL',
                                    collapsible: true,
                                    children: [
                                        '/dev/principle/mysql/',
                                        '/dev/principle/mysql/1-索引篇',
                                        '/dev/principle/mysql/2-事务篇',
                                        '/dev/principle/mysql/3-使用篇',
                                        '/dev/principle/mysql/4-分库分表篇',
                                        '/dev/principle/mysql/5-集群'
                                    ]
                                },
                                {
                                    text: 'Spring',
                                    collapsible: true,
                                    children: [
                                        '/dev/principle/spring/',
                                        '/dev/principle/spring/1-Ioc',
                                        '/dev/principle/spring/2-aop',
                                        '/dev/principle/spring/3-MVC',
                                        '/dev/principle/spring/4-SpringBoot'
                                    ]
                                },
                                {
                                    text: 'Java',
                                    collapsible: true,
                                    children: [
                                        '/dev/principle/java/',
                                        '/dev/principle/java/1-基础篇',
                                        '/dev/principle/java/2-集合',
                                        '/dev/principle/java/3-并发',
                                        '/dev/principle/java/4-虚拟机'
                                    ]
                                },
                                {
                                    text: 'redis',
                                    collapsible: true,
                                    children: [
                                        '/dev/principle/redis/',
                                        '/dev/principle/redis/1-数据类型',
                                        '/dev/principle/redis/2-线程模型',
                                        '/dev/principle/redis/3-事务',
                                        '/dev/principle/redis/4-过期删除与内存淘汰',
                                        '/dev/principle/redis/5-集群'
                                    ]
                                }
                            ]
                        },
                        {
                            text: '工具',
                            collapsible: true,
                            children: [
                                {
                                    text: 'IDEA',
                                    collapsible: true,
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
                                    collapsible: true,
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
                                    collapsible: true,
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
                                    collapsible: true,
                                    children: [
                                        '/dev/java/spring_security/1-基本原理',
                                        '/dev/java/spring_security/2-认证接口',
                                        '/dev/java/spring_security/3-其他资源接口'
                                    ]
                                },
                                {
                                    text: 'SpringBoot 多环境配置',
                                    collapsible: true,
                                    children: [
                                        '/dev/java/springboot_multi_env/1-单体项目'
                                    ]
                                },
                                {
                                    text: 'SpringBoot 第三方服务接入',
                                    collapsible: true,
                                    children: [
                                        '/dev/java/third_party_in/1-高德地图接入',
                                        '/dev/java/third_party_in/2-AWS_S3'
                                    ]
                                },
                                {
                                    text: 'Java生态',
                                    collapsible: true,
                                    children: [
                                        '/dev/java/tool/1-Feign'
                                    ]
                                },
                                {
                                    text: 'Mybatis-Plus',
                                    collapsible: true,
                                    children: [
                                        '/dev/java/mb_plus/1-入门案例',
                                        '/dev/java/mb_plus/2-CRUD',
                                        '/dev/java/mb_plus/3-常用注解',
                                        '/dev/java/mb_plus/4-条件构造器',
                                        '/dev/java/mb_plus/5-插件',
                                        '/dev/java/mb_plus/6-通用枚举',
                                        '/dev/java/mb_plus/7-代码生成器',
                                        '/dev/java/mb_plus/8-多数据源',
                                        '/dev/java/mb_plus/9-MybatisX插件',
                                        '/dev/java/mb_plus/10-TypeHandler类型转换器',
                                    ]
                                }
                            ]
                        },
                        {
                            text: '前端',
                            collapsible: true,
                            children: [
                                {
                                    text: 'CSS',
                                    collapsible: true,
                                    children: [
                                        '/dev/front_end/css/1-CSS布局'
                                    ]
                                },
                                {
                                    text: 'Vue',
                                    collapsible: true,
                                    children: [
                                        '/dev/front_end/vue/0-附录与补充',
                                        '/dev/front_end/vue/1-前端工程化与webpack',
                                        '/dev/front_end/vue/2-Vue基础1',
                                        '/dev/front_end/vue/3-Vue基础2',
                                        '/dev/front_end/vue/4-生命周期与数据共享',
                                        '/dev/front_end/vue/5-动态组件、插槽和自定义指令',
                                        '/dev/front_end/vue/6-ESLint',
                                        '/dev/front_end/vue/7-路由',
                                        '/dev/front_end/vue/8-其他',
                                        '/dev/front_end/vue/9-VueX',
                                        '/dev/front_end/vue/10-Vue3',
                                    ]
                                }
                            ]
                        },
                        {
                            text: '中间件',
                            collapsible: true,
                            children: [
                                {
                                    text: 'Redis',
                                    collapsible: true,
                                    children: [
                                        '/dev/middleware/redis/1-Redis介绍',
                                        '/dev/middleware/redis/2-Redis常见命令',
                                        '/dev/middleware/redis/3-RedisJava'
                                    ]
                                },
                                {
                                    text: 'MongoDB',
                                    collapsible: true,
                                    children: [
                                        '/dev/middleware/mongo/1-MongoDB基础',
                                        '/dev/middleware/mongo/2-单机部署',
                                        '/dev/middleware/mongo/3-基本命令',
                                        '/dev/middleware/mongo/4-索引',
                                        '/dev/middleware/mongo/5-JavaMongo'
                                    ]
                                },
                                {
                                    text: 'TDEngine',
                                    collapsible: true,
                                    children: [
                                        '/dev/middleware/tdengine/1-基本概念'
                                    ]
                                },
                                {
                                    text: 'ElasticSearch',
                                    collapsible: true,
                                    children: [
                                        '/dev/middleware/es/1-es.md'
                                    ]
                                }
                            ]
                        },
                        {
                            text: '系统架构',
                            collapsible: true,
                            children: [
                                {
                                    text: '微服务',
                                    collapsible: true,
                                    children: [
                                        '/dev/sys_infras/micro_service/1-微服务',
                                        '/dev/sys_infras/micro_service/2-统一网关',
                                        '/dev/sys_infras/micro_service/3-异步通讯'
                                    ]
                                }
                            ]
                        },
                        {
                            text: '容器技术',
                            collapsible: true,
                            children: [
                                {
                                    text: 'Docker',
                                    collapsible: true,
                                    children: [
                                        '/dev/container/docker/1-Docker'
                                    ]
                                }
                            ]
                        },
                        {
                            text: '测试技术',
                            collapsible: true,
                            children: [
                                {
                                    text: 'Web 自动化测试',
                                    collapsible: true,
                                    children: [
                                        '/dev/test/web_test/1-自动化测试介绍',
                                        '/dev/test/web_test/2-Selenium安装',
                                        '/dev/test/web_test/3-SeleniumApi',
                                        '/dev/test/web_test/4-单元测试',
                                    ]
                                }
                            ]
                        },
                        {
                            text: '其他',
                            collapsible: true,
                            children: [
                                {
                                    text: 'Linux',
                                    collapsible: true,
                                    children: [
                                        '/dev/other/linux/0-命令大全',
                                        '/dev/other/linux/1-Linux简介',
                                        '/dev/other/linux/2-常用命令',
                                        '/dev/other/linux/3-Linux权限',
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
                        {
                            text: '传统机器学习',
                            collapsible: true,
                            children: [
                                '/ml/traditional_ml/0-Python包使用',
                                '/ml/traditional_ml/1-K近邻算法',
                                '/ml/traditional_ml/2-决策树',
                                '/ml/traditional_ml/3-朴素贝叶斯',
                                '/ml/traditional_ml/4-逻辑回归',
                                '/ml/traditional_ml/5-SVM',
                                '/ml/traditional_ml/6-集成学习',
                                '/ml/traditional_ml/7-线性回归',
                                '/ml/traditional_ml/8-树回归',
                                '/ml/traditional_ml/9-KMeans',
                            ]
                        },
                    ]
                }
            ],
            '/algo/': [
                {
                    text: '算法与数据结构',
                    path: '/algo/',
                    children: [
                        {
                            text: '排序算法',
                            collapsible: true,
                            children: [
                                '/algo/sort/1-排序概述',
                                '/algo/sort/2-快速排序',
                            ]
                        },
                    ]
                }
            ],
            '/ai_application/': [
                {
                    text: 'AI 应用探索',
                    path: '/ai_application/',
                    children: [
                        {
                            text: 'Deep-Live-Cam',
                            collapsible: true,
                            children: [
                                '/ai_application/deep_live_cam/概述.md',
                                '/ai_application/deep_live_cam/1-快速开始.md',
                            ]
                        },
                    ]
                }
            ],
        }
    }),

    bundler: viteBundler(),

    plugins: [
        searchPlugin({
            // 配置项
        }),
    ],
})
