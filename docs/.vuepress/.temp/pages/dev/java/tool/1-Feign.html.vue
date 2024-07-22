<template><div><h1 id="http-客户端-feign" tabindex="-1"><a class="header-anchor" href="#http-客户端-feign"><span>HTTP 客户端 Feign</span></a></h1>
<p>使用<code v-pre>RestTemplate</code>发起远程调用代码如下：
<img src="@source/dev/java/tool/img.png" alt="img.png">
有如下问题：</p>
<ul>
<li>url 硬编码到代码中，难以维护</li>
</ul>
<p>Feign 是一个声明式 HTTP 客户端，解决 HTTP 请求发送的问题。</p>
<h2 id="_1、使用-feign-客户端" tabindex="-1"><a class="header-anchor" href="#_1、使用-feign-客户端"><span>1、使用 Feign 客户端</span></a></h2>
<p>使用步骤</p>
<ol>
<li>引入依赖</li>
</ol>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre v-pre><code><span class="line"><span class="token comment">&lt;!--feign客户端依赖--></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-cloud-starter-openfeign<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>在启动类添加<code v-pre>@EnableFeignClients</code>注解</li>
</ol>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@MapperScan</span><span class="token punctuation">(</span><span class="token string">"cn.itcast.order.mapper"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token annotation punctuation">@EnableFeignClients</span></span>
<span class="line"><span class="token annotation punctuation">@SpringBootApplication</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderApplication</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">OrderApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>编写 Feign 客户端</li>
</ol>
<p><img src="@source/dev/java/tool/img_1.png" alt="img_1.png"></p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@FeignClient</span><span class="token punctuation">(</span><span class="token string">"userService"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserClient</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/user/{id}"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token class-name">User</span> <span class="token function">findById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>在代码中使用</li>
</ol>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@Service</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderService</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@Autowired</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">OrderMapper</span> orderMapper<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@Autowired</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">UserClient</span> userClient<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">Order</span> <span class="token function">queryOrderById</span><span class="token punctuation">(</span><span class="token class-name">Long</span> orderId<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 1.查询订单</span></span>
<span class="line">        <span class="token class-name">Order</span> order <span class="token operator">=</span> orderMapper<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span>orderId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 使用 userClient 发起 http 请求</span></span>
<span class="line">        <span class="token class-name">User</span> user <span class="token operator">=</span> userClient<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span>order<span class="token punctuation">.</span><span class="token function">getUserId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 3.封装user到Order</span></span>
<span class="line">        order<span class="token punctuation">.</span><span class="token function">setUser</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 4.返回</span></span>
<span class="line">        <span class="token keyword">return</span> order<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、自定义-feign-的配置" tabindex="-1"><a class="header-anchor" href="#_2、自定义-feign-的配置"><span>2、自定义 Feign 的配置</span></a></h2>
<p>可修改的配置如下：
<img src="@source/dev/java/tool/img_2.png" alt="img_2.png">
在<code v-pre>application.yml</code>中进行配置。
全局生效：</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token comment"># 设置 Feign 日志级别</span></span>
<span class="line"><span class="token key atrule">feign</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">client</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">config</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">default</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">loggerLevel</span><span class="token punctuation">:</span> FULL</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>单个微服务生效：</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token comment"># 设置 Feign 日志级别</span></span>
<span class="line"><span class="token key atrule">feign</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">client</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">config</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">userService</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">loggerLevel</span><span class="token punctuation">:</span> Basic</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、feign-性能优化" tabindex="-1"><a class="header-anchor" href="#_3、feign-性能优化"><span>3、Feign 性能优化</span></a></h2>
<p><img src="@source/dev/java/tool/img_3.png" alt="img_3.png"></p>
<p>Feign 性能优化主要包括：</p>
<ul>
<li>使用连接池代替默认的<code v-pre>URLConnection</code></li>
<li>日志级别为<code v-pre>BASIC</code>或<code v-pre>NONE</code></li>
</ul>
<p>使用<code v-pre>HttpClient</code>步骤：</p>
<ol>
<li>引入依赖</li>
</ol>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre v-pre><code><span class="line"><span class="token comment">&lt;!--引入HttpClient依赖--></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>io.github.openfeign<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>feign-httpclient<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>配置连接池</li>
</ol>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">feign</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">client</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">config</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">userService</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">loggerLevel</span><span class="token punctuation">:</span> Basic</span>
<span class="line">  <span class="token key atrule">httpclient</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 启用 HttpClient</span></span>
<span class="line">    <span class="token key atrule">max-connections</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># 最大连接数</span></span>
<span class="line">    <span class="token key atrule">max-connections-per-route</span><span class="token punctuation">:</span> <span class="token number">50</span> <span class="token comment"># 单个路径的最大连接数</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、feign-最佳实践" tabindex="-1"><a class="header-anchor" href="#_4、feign-最佳实践"><span>4、Feign 最佳实践</span></a></h2>
<h3 id="_1-最佳实践1-继承" tabindex="-1"><a class="header-anchor" href="#_1-最佳实践1-继承"><span>(1) 最佳实践1[继承]</span></a></h3>
<p>消费者的 FeignClient 和提供者的 Controller 定义统一的父接口作为标准。
<img src="@source/dev/java/tool/img_4.png" alt="img_4.png">
<img src="@source/dev/java/tool/img_5.png" alt="img_5.png"></p>
<h3 id="_2-最佳实践2-抽取" tabindex="-1"><a class="header-anchor" href="#_2-最佳实践2-抽取"><span>(2) 最佳实践2[抽取]</span></a></h3>
<p>将 FeignClient 抽取为独立模块，并且把接口有关的 Pojo、默认的 Feign 配置都放到这个模块中，提供给所有消费者使用。
<img src="@source/dev/java/tool/img_6.png" alt="img_6.png">
抽取最佳实践的实现：</p>
<ol>
<li>创建一个 module，命名为 feign-api，然后引入 feign 的 starter 依赖</li>
</ol>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-cloud-starter-openfeign<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>order-service 中编写的<code v-pre>UserClient</code>、<code v-pre>User</code>、<code v-pre>DefaultFeignConfiguration</code>都复制到 feign-api 项目中</li>
<li>在 order-service 中引入 feign-api 的依赖</li>
</ol>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre v-pre><code><span class="line"><span class="token comment">&lt;!--引入feign的统一api--></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>cn.itcast.demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>feign-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>修改 order-service 中的所有与上述三个组件有关的 import 部分，改成导入 feign-api 中的包</li>
<li><code v-pre>UserClient</code>注入问题</li>
</ol>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@MapperScan</span><span class="token punctuation">(</span><span class="token string">"cn.itcast.order.mapper"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token annotation punctuation">@EnableFeignClients</span><span class="token punctuation">(</span>clients <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token class-name">UserClient</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token annotation punctuation">@SpringBootApplication</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderApplication</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">OrderApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


