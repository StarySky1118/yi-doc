<template><div><h1 id="一、微服务介绍" tabindex="-1"><a class="header-anchor" href="#一、微服务介绍"><span>一、微服务介绍</span></a></h1>
<h2 id="_1、单体项目和微服务项目" tabindex="-1"><a class="header-anchor" href="#_1、单体项目和微服务项目"><span>1、单体项目和微服务项目</span></a></h2>
<p>微服务架构图：
<img src="/images/dev/micro_service/img.png" alt="image.png"></p>
<h3 id="_1-单体项目" tabindex="-1"><a class="header-anchor" href="#_1-单体项目"><span>(1) 单体项目</span></a></h3>
<p>单体项目：业务的所有功能在一个项目中开发，打成一个包部署。
优点：架构简单，部署成本低。
缺点：耦合度高。</p>
<h3 id="_2-分布式架构" tabindex="-1"><a class="header-anchor" href="#_2-分布式架构"><span>(2) 分布式架构</span></a></h3>
<p>分布式架构：根据业务功能对系统进行拆分，每个业务模块作为独立项目开发，称为一个服务。
优点：降低服务耦合。</p>
<h3 id="_3-微服务" tabindex="-1"><a class="header-anchor" href="#_3-微服务"><span>(3) 微服务</span></a></h3>
<p>微服务是一种经过良好架构设计的分布式架构方案，如 SpringCloud 和阿里巴巴的 Dubbo。其特征如下：
<img src="/images/dev/micro_service/img_1.png" alt="image.png">
微服务实现技术对比
<img src="/images/dev/micro_service/img_2.png" alt="image.png"></p>
<h3 id="_4-springcloud" tabindex="-1"><a class="header-anchor" href="#_4-springcloud"><span>(4) SpringCloud</span></a></h3>
<p>SpringCloud 集成了各种微服务功能组件，并基于 SpringBoot 实现了这些组件的自动装配。
<img src="/images/dev/micro_service/img_3.png" alt="image.png">
SpringCloud 和 SpringBoot 有兼容关系：
<img src="/images/dev/micro_service/img_4.png" alt="image.png"></p>
<h2 id="_2、服务拆分与远程调用" tabindex="-1"><a class="header-anchor" href="#_2、服务拆分与远程调用"><span>2、服务拆分与远程调用</span></a></h2>
<h3 id="_1-提供者与消费者" tabindex="-1"><a class="header-anchor" href="#_1-提供者与消费者"><span>(1) 提供者与消费者</span></a></h3>
<p>服务提供者：提供接口的。
服务消费者：使用接口的。</p>
<h2 id="_3、eureka-注册中心" tabindex="-1"><a class="header-anchor" href="#_3、eureka-注册中心"><span>3、Eureka 注册中心</span></a></h2>
<p>服务调用出现的问题：访问地址硬编码到代码中。</p>
<p><img src="/images/dev/micro_service/img_5.png" alt="image.png"></p>
<h3 id="_1-eureka-的作用" tabindex="-1"><a class="header-anchor" href="#_1-eureka-的作用"><span>(1) Eureka 的作用</span></a></h3>
<p><img src="/images/dev/micro_service/img_6.png" alt="image.png">
<img src="/images/dev/micro_service/img_7.png" alt="image.png"></p>
<h3 id="_2-搭建-eureka" tabindex="-1"><a class="header-anchor" href="#_2-搭建-eureka"><span>(2) 搭建 Eureka</span></a></h3>
<h4 id="引入依赖" tabindex="-1"><a class="header-anchor" href="#引入依赖"><span>引入依赖</span></a></h4>
<p>引入 Eureka 服务端依赖。</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre v-pre><code><span class="line"><span class="token comment">&lt;!--eureka服务端--></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-cloud-starter-netflix-eureka-server<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建启动类" tabindex="-1"><a class="header-anchor" href="#创建启动类"><span>创建启动类</span></a></h4>
<p><img src="/images/dev/micro_service/img_8.png" alt="image.png"></p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token comment">// 将 SpringBoot 应用程序标记为 Eureka 服务器</span></span>
<span class="line"><span class="token annotation punctuation">@EnableEurekaServer</span></span>
<span class="line"><span class="token annotation punctuation">@SpringBootApplication</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EurekaApplication</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">EurekaApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="添加配置项" tabindex="-1"><a class="header-anchor" href="#添加配置项"><span>添加配置项</span></a></h4>
<p>Eureka 服务本身也被注册为微服务。</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">server</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">10086</span> <span class="token comment"># 服务端口</span></span>
<span class="line"><span class="token comment"># 进行服务注册</span></span>
<span class="line"><span class="token key atrule">spring</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">application</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">name</span><span class="token punctuation">:</span> eurekaserver <span class="token comment"># eureka的服务名称</span></span>
<span class="line"><span class="token key atrule">eureka</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">client</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">service-url</span><span class="token punctuation">:</span>  <span class="token comment"># eureka的地址信息</span></span>
<span class="line">      <span class="token key atrule">defaultZone</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span>10086/eureka</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问<code v-pre>http://localhost:10086</code>显示如下界面：
<img src="/images/dev/micro_service/img_9.png" alt="image.png"></p>
<h3 id="_3-服务注册" tabindex="-1"><a class="header-anchor" href="#_3-服务注册"><span>(3) 服务注册</span></a></h3>
<h4 id="引入依赖-1" tabindex="-1"><a class="header-anchor" href="#引入依赖-1"><span>引入依赖</span></a></h4>
<p>引入 Eureka 客户端依赖：</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre v-pre><code><span class="line"><span class="token comment">&lt;!--eureka客户端依赖--></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-cloud-starter-netflix-eureka-client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="添加配置信息" tabindex="-1"><a class="header-anchor" href="#添加配置信息"><span>添加配置信息</span></a></h4>
<p>添加注册名称和 eureka server 地址。</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">spring</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">application</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">name</span><span class="token punctuation">:</span> userService <span class="token comment"># eureka的服务名称</span></span>
<span class="line"><span class="token key atrule">eureka</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">client</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">service-url</span><span class="token punctuation">:</span>  <span class="token comment"># eureka的地址信息</span></span>
<span class="line">      <span class="token key atrule">defaultZone</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span>10086/eureka</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功添加后显示如下：
<img src="/images/dev/micro_service/img_10.png" alt="image.png"></p>
<h3 id="_4-服务发现" tabindex="-1"><a class="header-anchor" href="#_4-服务发现"><span>(4) 服务发现</span></a></h3>
<p>启动两个<code v-pre>UserService</code>服务：
<img src="/images/dev/micro_service/img_11.png" alt="image.png">
<code v-pre>-Dserver.port=8082</code>
<img src="/images/dev/micro_service/img_12.png" alt="image.png"></p>
<h4 id="修改请求url" tabindex="-1"><a class="header-anchor" href="#修改请求url"><span>修改请求url</span></a></h4>
<p>将请求 url 中的<code v-pre>ip:port</code>改为服务名：</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">    <span class="token keyword">public</span> <span class="token class-name">Order</span> <span class="token function">queryOrderById</span><span class="token punctuation">(</span><span class="token class-name">Long</span> orderId<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 1.查询订单</span></span>
<span class="line">        <span class="token class-name">Order</span> order <span class="token operator">=</span> orderMapper<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span>orderId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 2.利用RestTemplate发起http请求，查询用户</span></span>
<span class="line">        <span class="token comment">// 2.1.url路径</span></span>
<span class="line">        <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">"http://userservice/user/"</span> <span class="token operator">+</span> order<span class="token punctuation">.</span><span class="token function">getUserId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 2.2.发送http请求，实现远程调用</span></span>
<span class="line">        <span class="token class-name">User</span> user <span class="token operator">=</span> restTemplate<span class="token punctuation">.</span><span class="token function">getForObject</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 3.封装user到Order</span></span>
<span class="line">        order<span class="token punctuation">.</span><span class="token function">setUser</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 4.返回</span></span>
<span class="line">        <span class="token keyword">return</span> order<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡"><span>负载均衡</span></a></h4>
<p>向<code v-pre>RestTemplate</code>bean 添加<code v-pre>@LoadBalanced</code>注解，实现负载均衡。</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 创建RestTemplate并注入Spring容器</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token annotation punctuation">@Bean</span></span>
<span class="line">    <span class="token annotation punctuation">@LoadBalanced</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">RestTemplate</span> <span class="token function">restTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RestTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、ribbon-负载均衡" tabindex="-1"><a class="header-anchor" href="#_4、ribbon-负载均衡"><span>4、Ribbon 负载均衡</span></a></h2>
<h3 id="_1-负载均衡流程" tabindex="-1"><a class="header-anchor" href="#_1-负载均衡流程"><span>(1) 负载均衡流程</span></a></h3>
<p><img src="/images/dev/micro_service/img_13.png" alt="image.png"></p>
<h3 id="_2-负载均衡策略" tabindex="-1"><a class="header-anchor" href="#_2-负载均衡策略"><span>(2) 负载均衡策略</span></a></h3>
<p><img src="/images/dev/micro_service/img_14.png" alt="image.png">
默认规则<code v-pre>ZoneAvoidanceRule</code>。
常见的负载均衡策略：
<img src="/images/dev/micro_service/img_15.png" alt="image.png">
修改负载均衡策略有两种方式：</p>
<ol>
<li>代码方式——全局修改</li>
</ol>
<p>将某个规则实例注册为 bean，这样调用所有服务的负载均衡都使用这个规则。</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">    <span class="token annotation punctuation">@Bean</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">IRule</span> <span class="token function">randomRule</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RandomRule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>配置方式——针对某个服务</li>
</ol>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">userService</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">ribbon</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">NFLoadBalancerRuleClassName</span><span class="token punctuation">:</span> com.netflix.loadbalancer.RandomRule  <span class="token comment"># 负载均衡规则</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-饥饿加载" tabindex="-1"><a class="header-anchor" href="#_3-饥饿加载"><span>(3) 饥饿加载</span></a></h3>
<p><img src="/images/dev/micro_service/img_16.png" alt="image.png"></p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">ribbon</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">eager-load</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 开启饥饿加载</span></span>
<span class="line">    <span class="token key atrule">clients</span><span class="token punctuation">:</span> <span class="token comment"># 饥饿加载服务名称</span></span>
<span class="line">    	<span class="token comment"># - 表示一组配置</span></span>
<span class="line">      <span class="token punctuation">-</span> userService</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一次访问服务时间大幅度缩减。</p>
<h2 id="_5、nacos-注册中心" tabindex="-1"><a class="header-anchor" href="#_5、nacos-注册中心"><span>5、Nacos 注册中心</span></a></h2>
<h3 id="_1-安装-nacos" tabindex="-1"><a class="header-anchor" href="#_1-安装-nacos"><span>(1) 安装 Nacos</span></a></h3>
<p>Windows 安装 Nacos
前往 release 页面：
<img src="@source/dev/sys_infras/micro_service/img.png" alt="img.png">
<a href="https://github.com/alibaba/nacos/tags?after=2.0.1" target="_blank" rel="noopener noreferrer">Tags · alibaba/nacos</a>
解压到非中文路径目录
<img src="@source/dev/sys_infras/micro_service/img_1.png" alt="img_1.png"></p>
<p>目录说明：</p>
<ul>
<li>bin：启动脚本</li>
<li>conf：配置文件</li>
</ul>
<p>Nacos 的默认端口是 8848，如果你电脑上的其它进程占用了 8848 端口，请先尝试关闭该进程。
如果无法关闭占用 8848 端口的进程，也可以进入 nacos 的 conf 目录，修改配置文件中的端口：
<img src="@source/dev/sys_infras/micro_service/img_2.png" alt="img_2.png"></p>
<p>修改其中的内容：</p>
<p><img src="@source/dev/sys_infras/micro_service/img_3.png" alt="img_3.png"></p>
<p>进入bin目录，结构如下：</p>
<p><img src="@source/dev/sys_infras/micro_service/img_4.png" alt="img_4.png"></p>
<p>执行命令：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">startup.cmd <span class="token parameter variable">-m</span> standalone</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>在浏览器输入地址访问，默认的账号和密码都是 nacos。</p>
<h3 id="_2-服务注册" tabindex="-1"><a class="header-anchor" href="#_2-服务注册"><span>(2) 服务注册</span></a></h3>
<h4 id="添加依赖" tabindex="-1"><a class="header-anchor" href="#添加依赖"><span>添加依赖</span></a></h4>
<p>在父工程中添加<code v-pre>nacos</code>依赖：</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre v-pre><code><span class="line"><span class="token comment">&lt;!--nacos的管理依赖--></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-cloud-alibaba-dependencies<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.2.5.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>pom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>import<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在子工程中添加<code v-pre>nacos</code>客户端依赖：</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- nacos客户端依赖包 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-cloud-starter-alibaba-nacos-discovery<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="注册服务" tabindex="-1"><a class="header-anchor" href="#注册服务"><span>注册服务</span></a></h4>
<p>在<code v-pre>application.yml</code>中注册服务：</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">spring</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">application</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">name</span><span class="token punctuation">:</span> userService <span class="token comment"># eureka的服务名称</span></span>
<span class="line">  <span class="token key atrule">cloud</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">nacos</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">8850</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>Nacos 中服务是区分大小写的。</p>
</blockquote>
<p>如下表示注册成功：
<img src="@source/dev/sys_infras/micro_service/img_5.png" alt="img_5.png"></p>
<h3 id="_3-nacos-服务分级存储模型" tabindex="-1"><a class="header-anchor" href="#_3-nacos-服务分级存储模型"><span>(3) Nacos 服务分级存储模型</span></a></h3>
<p>服务 -- 集群 -- 实例 的分级存储模型：
<img src="@source/dev/sys_infras/micro_service/img_6.png" alt="img_6.png">
将某个实例划分到某个集群：</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">spring</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">application</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">name</span><span class="token punctuation">:</span> userService <span class="token comment"># eureka的服务名称</span></span>
<span class="line">  <span class="token key atrule">cloud</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">nacos</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">8850</span></span>
<span class="line">      <span class="token key atrule">discovery</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">cluster-name</span><span class="token punctuation">:</span> SH</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如下所示：
<img src="@source/dev/sys_infras/micro_service/img_7.png" alt="img_7.png"></p>
<h3 id="_4-负载均衡" tabindex="-1"><a class="header-anchor" href="#_4-负载均衡"><span>(4) 负载均衡</span></a></h3>
<h4 id="集群优先" tabindex="-1"><a class="header-anchor" href="#集群优先"><span>集群优先</span></a></h4>
<p>配置优先选择相同集群的实例：</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">spring</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">application</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">name</span><span class="token punctuation">:</span> orderService</span>
<span class="line">  <span class="token key atrule">cloud</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">nacos</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">8850</span> <span class="token comment"># nacos服务地址</span></span>
<span class="line">      <span class="token key atrule">discovery</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">cluster-name</span><span class="token punctuation">:</span> SH</span>
<span class="line"><span class="token key atrule">userService</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">ribbon</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">NFLoadBalancerRuleClassName</span><span class="token punctuation">:</span> com.alibaba.cloud.nacos.ribbon.NacosRule   <span class="token comment"># 负载均衡规则</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该规则相同集群优先，而后随机。</p>
<h4 id="基于权重" tabindex="-1"><a class="header-anchor" href="#基于权重"><span>基于权重</span></a></h4>
<p><img src="@source/dev/sys_infras/micro_service/img_8.png" alt="img_8.png"></p>
<p>点击&quot;编辑&quot;
<img src="@source/dev/sys_infras/micro_service/img_10.png" alt="img_10.png"></p>
<p><img src="@source/dev/sys_infras/micro_service/img_9.png" alt="img_9.png"></p>
<p>实例的权重值0~1。</p>
<h3 id="_5-环境隔离-namespace" tabindex="-1"><a class="header-anchor" href="#_5-环境隔离-namespace"><span>(5) 环境隔离 - namespace</span></a></h3>
<p>不同 namespace 下的服务相互不可见。
<img src="@source/dev/sys_infras/micro_service/img_11.png" alt="img_11.png">
在 Nacos 界面新建命名空间。
在代码中修改服务的命名空间：</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">spring</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">application</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">name</span><span class="token punctuation">:</span> orderService</span>
<span class="line">  <span class="token key atrule">cloud</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">nacos</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">8850</span> <span class="token comment"># nacos服务地址</span></span>
<span class="line">      <span class="token key atrule">discovery</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">cluster-name</span><span class="token punctuation">:</span> SH</span>
<span class="line">        <span class="token key atrule">namespace</span><span class="token punctuation">:</span> 5423a422<span class="token punctuation">-</span>7bb4<span class="token punctuation">-</span>4284<span class="token punctuation">-</span>afc8<span class="token punctuation">-</span>fdee987b1bd1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/dev/sys_infras/micro_service/img_12.png" alt="img_12.png"></p>
<h3 id="_6-eureka-和-nacos-对比" tabindex="-1"><a class="header-anchor" href="#_6-eureka-和-nacos-对比"><span>(6) Eureka 和 Nacos 对比</span></a></h3>
<p>Nacos 中实例分为临时实例和非临时实例。
<img src="@source/dev/sys_infras/micro_service/img_13.png" alt="img_13.png">
配置一个非临时实例：</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">spring</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">application</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">name</span><span class="token punctuation">:</span> orderService</span>
<span class="line">  <span class="token key atrule">cloud</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">nacos</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">8850</span> <span class="token comment"># nacos服务地址</span></span>
<span class="line">      <span class="token key atrule">discovery</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">cluster-name</span><span class="token punctuation">:</span> SH</span>
<span class="line">        <span class="token key atrule">namespace</span><span class="token punctuation">:</span> 5423a422<span class="token punctuation">-</span>7bb4<span class="token punctuation">-</span>4284<span class="token punctuation">-</span>afc8<span class="token punctuation">-</span>fdee987b1bd1</span>
<span class="line">        <span class="token key atrule">ephemeral</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># 是否临时实例</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/dev/sys_infras/micro_service/img_14.png" alt="img_14.png"></p>
<h2 id="_6、nacos-配置管理" tabindex="-1"><a class="header-anchor" href="#_6、nacos-配置管理"><span>6、Nacos 配置管理</span></a></h2>
<h3 id="_1-统一配置管理" tabindex="-1"><a class="header-anchor" href="#_1-统一配置管理"><span>(1) 统一配置管理</span></a></h3>
<ul>
<li>配置更改热更新</li>
</ul>
<p><img src="@source/dev/sys_infras/micro_service/img_15.png" alt="img_15.png">
Nacos 中有配置管理菜单项：</p>
<p><img src="@source/dev/sys_infras/micro_service/img_16.png" alt="img_16.png"></p>
<h4 id="新建配置" tabindex="-1"><a class="header-anchor" href="#新建配置"><span>新建配置</span></a></h4>
<p>只需要将有热更新需求的配置放置于此处。
<img src="@source/dev/sys_infras/micro_service/img_17.png" alt="img_17.png"></p>
<h4 id="配置拉取" tabindex="-1"><a class="header-anchor" href="#配置拉取"><span>配置拉取</span></a></h4>
<p><img src="@source/dev/sys_infras/micro_service/img_18.png" alt="img_18.png">
步骤</p>
<ol>
<li>添加 Nacos 配置管理依赖</li>
</ol>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre v-pre><code><span class="line"><span class="token comment">&lt;!--nacos的配置管理依赖--></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-cloud-starter-alibaba-nacos-config<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>在<code v-pre>resource</code>目录下添加一个<code v-pre>bootstrap.yml</code>文件，此文件为引导文件，优先级高于<code v-pre>application.yml</code>：</li>
</ol>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">spring</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">application</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">name</span><span class="token punctuation">:</span> userservice</span>
<span class="line">  <span class="token key atrule">profiles</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">active</span><span class="token punctuation">:</span> dev <span class="token comment"># 环境</span></span>
<span class="line">  <span class="token key atrule">cloud</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">nacos</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">8850</span> <span class="token comment"># nacos地址</span></span>
<span class="line">      <span class="token key atrule">discovery</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">cluster-name</span><span class="token punctuation">:</span> SH</span>
<span class="line">      <span class="token key atrule">config</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">file-extension</span><span class="token punctuation">:</span> yaml <span class="token comment"># 文件后缀名</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置热更新" tabindex="-1"><a class="header-anchor" href="#配置热更新"><span>配置热更新</span></a></h4>
<p>创建类，添加<code v-pre>@ConfigurationProperties(prefix = &quot;pattern&quot;)</code>注解，将配置转化为对象：</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@Data</span></span>
<span class="line"><span class="token annotation punctuation">@Component</span></span>
<span class="line"><span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">"pattern"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PatternProperties</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> dateformat<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用测试：</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@Slf4j</span></span>
<span class="line"><span class="token annotation punctuation">@RestController</span></span>
<span class="line"><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/user"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@Autowired</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//     @Value("${pattern.dateformat}")</span></span>
<span class="line"><span class="token comment">//     private String dateformat;</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@Autowired</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">PatternProperties</span> properties<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"prop"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">PatternProperties</span> <span class="token function">properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> properties<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"now"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token class-name">DateTimeFormatter</span><span class="token punctuation">.</span><span class="token function">ofPattern</span><span class="token punctuation">(</span>properties<span class="token punctuation">.</span><span class="token function">getDateformat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多环境配置共享" tabindex="-1"><a class="header-anchor" href="#多环境配置共享"><span>多环境配置共享</span></a></h4>
<p><img src="@source/dev/sys_infras/micro_service/img_19.png" alt="img_19.png">
多环境配置优先级如下：
<img src="@source/dev/sys_infras/micro_service/img_20.png" alt="img_20.png"></p>
</div></template>


