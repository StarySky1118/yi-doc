<template><div><h1 id="七、路由" tabindex="-1"><a class="header-anchor" href="#七、路由"><span>七、路由</span></a></h1>
<h2 id="_1、前端路由简介" tabindex="-1"><a class="header-anchor" href="#_1、前端路由简介"><span>1、前端路由简介</span></a></h2>
<h3 id="_1-概念" tabindex="-1"><a class="header-anchor" href="#_1-概念"><span>(1) 概念</span></a></h3>
<p>路由(router)就是<strong>哈希地址地址和组件</strong>之间的对应关系。单页面应用程序(SPA)中，全部内容在一个页面中展示，展示内容根据地址栏上的路由信息改变。</p>
<p><img src="@source/dev/front_end/vue/img_113.png" alt="img_113.png"></p>
<p><code v-pre>#/home</code>就是一个哈希地址。</p>
<h3 id="_2-工作方式" tabindex="-1"><a class="header-anchor" href="#_2-工作方式"><span>(2) 工作方式</span></a></h3>
<p>前端路由的工作流程如下：</p>
<ol>
<li>用户点击路由链接</li>
<li>地址栏哈希地址发生变化</li>
<li>前端路由监听哈希地址变化</li>
<li>前端路由将哈希地址对应的组件渲染到浏览器</li>
</ol>
<p><img src="@source/dev/front_end/vue/img_114.png" alt="img_114.png"></p>
<h2 id="_2、vue-router-基本使用" tabindex="-1"><a class="header-anchor" href="#_2、vue-router-基本使用"><span>2、vue-router 基本使用</span></a></h2>
<p>Vue-router 是 Vue 官方给出的前端路由解决方案，只能使用在 Vue 项目中。</p>
<h3 id="_1-vue-router-的安装与配置" tabindex="-1"><a class="header-anchor" href="#_1-vue-router-的安装与配置"><span>(1) vue-router 的安装与配置</span></a></h3>
<p>今后使用 vue-cli 可以自动配置 vue-router，这个过程了解即可。</p>
<ol>
<li><strong>安装 vue-router</strong></li>
</ol>
<p>仅供 Vue 2.0 使用
<code v-pre>npm i vue-router@3.5.2</code></p>
<ol start="2">
<li><strong>在项目中创建路由模块</strong></li>
</ol>
<p>在 <code v-pre>src/router</code>文件夹下，创建 <code v-pre>index.js</code>文件</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 当前项目的路由模块</span></span>
<span class="line"><span class="token comment">// 1.导入 Vue 和 vue-router</span></span>
<span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">'vue-router'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2.向 Vue 添加 vue-router 插件</span></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 3.创建 vue-router 实例</span></span>
<span class="line"><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 4.共享实例对象</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> router</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li><strong>导入并挂载路由模块</strong></li>
</ol>
<p>在 <code v-pre>main.js</code>中挂载 <code v-pre>router</code>实例对象</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span></span>
<span class="line"><span class="token comment">// 导入路由模块</span></span>
<span class="line"><span class="token comment">// 在进行模块化导入时，导入的是一个文件夹，默认导入该文件夹下名为 index.js 的文件</span></span>
<span class="line"><span class="token comment">// import router from "@/router/index.js"</span></span>
<span class="line"><span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">"@/router"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 导入 bootstrap 样式</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">'bootstrap/dist/css/bootstrap.min.css'</span></span>
<span class="line"><span class="token comment">// 全局样式</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">'@/assets/global.css'</span></span>
<span class="line"></span>
<span class="line">Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=></span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// router 实例对象挂载</span></span>
<span class="line">  <span class="token comment">// router: router</span></span>
<span class="line">  router</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-使用小案例" tabindex="-1"><a class="header-anchor" href="#_2-使用小案例"><span>(2) 使用小案例</span></a></h3>
<p><img src="@source/dev/front_end/vue/img_115.png" alt="img_115.png"></p>
<p>点击链接按需显示组件。</p>
<p><strong>实现步骤</strong></p>
<p>在根组件中放入三个路由链接：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#/home<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#/movie<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>电影<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#/about<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>关于<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>路由链接可以改变哈希地址，vue-router 实例可以监听哈希地址的变化，哈希地址和组件的映射需要在 <code v-pre>/src/router/index.js</code>中定义：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 当前项目的路由模块</span></span>
<span class="line"><span class="token comment">// 1.导入 Vue 和 vue-router</span></span>
<span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">'vue-router'</span></span>
<span class="line"><span class="token comment">// 导入所需组件</span></span>
<span class="line"><span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">"@/components/Home.vue"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Movie <span class="token keyword">from</span> <span class="token string">"@/components/Movie.vue"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">"@/components/About.vue"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2.向 Vue 添加 vue-router 插件</span></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 3.创建 vue-router 实例</span></span>
<span class="line"><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 定义路由规则：哈希地址和组件之间的对应关系</span></span>
<span class="line">  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/home'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Home<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/movie'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Movie<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/about'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> About<span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 4.共享实例对象</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> router</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在根组件中使用 <code v-pre>&lt;router-view&gt;</code>组件占位，按需渲染组件。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>App2 组件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#/home<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#/movie<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>电影<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#/about<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>关于<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token comment">&lt;!--占位符--></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>改进</strong></p>
<p>vue-router 也提供了替代 a 链接的 <code v-pre>&lt;router-link&gt;</code>标签。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/home<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/movie<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>电影<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/about<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>关于<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、路由重定向" tabindex="-1"><a class="header-anchor" href="#_3、路由重定向"><span>3、路由重定向</span></a></h2>
<p>路由重定向：当用户访问地址 A，强制跳转到地址 C，从而显示特定组件。</p>
<blockquote>
<p>使用案例：
当访问项目根目录，什么组件都不显示。希望访问根目录时，直接跳转到哈希地址为 <code v-pre>#/home</code>。
<img src="@source/dev/front_end/vue/img_116.png" alt="img_116.png"></p>
</blockquote>
<p>在 <code v-pre>src/router/index.js</code>中添加重定向的路由规则：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 当前项目的路由模块</span></span>
<span class="line"><span class="token comment">// 1.导入 Vue 和 vue-router</span></span>
<span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">'vue-router'</span></span>
<span class="line"><span class="token comment">// 导入所需组件</span></span>
<span class="line"><span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">"@/components/Home.vue"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Movie <span class="token keyword">from</span> <span class="token string">"@/components/Movie.vue"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">"@/components/About.vue"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2.向 Vue 添加 vue-router 插件</span></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 3.创建 vue-router 实例</span></span>
<span class="line"><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 定义路由：哈希地址和组件之间的对应关系</span></span>
<span class="line">  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token comment">// 当访问哈希地址为 #/ 时，重定向到哈希地址为 #/home</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">'/home'</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/home'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Home<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/movie'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Movie<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/about'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> About<span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 4.共享实例对象</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> router</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、嵌套路由" tabindex="-1"><a class="header-anchor" href="#_4、嵌套路由"><span>4、嵌套路由</span></a></h2>
<p>点击路由连接显示组件，若该组件也是通过路由方式呈现，就是嵌套路由。</p>
<p><strong>使用案例</strong></p>
<p><img src="@source/dev/front_end/vue/img_117.png" alt="img_117.png"></p>
<p>About 组件也使用路由方式呈现。</p>
<p><strong>使用步骤</strong></p>
<p>在 About 组件中放置路由连接和占位符</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token comment">&lt;!--路由链接--></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/about/tab1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>tab1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/about/tab2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>tab2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code v-pre>index.js</code>中声明路由规则，这些路由规则都是 about 的子路由规则，使用 <code v-pre>children</code>结点放置这些规则。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 当前项目的路由模块</span></span>
<span class="line"><span class="token comment">// 1.导入 Vue 和 vue-router</span></span>
<span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">'vue-router'</span></span>
<span class="line"><span class="token comment">// 导入所需组件</span></span>
<span class="line"><span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">"@/components/Home.vue"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Movie <span class="token keyword">from</span> <span class="token string">"@/components/Movie.vue"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">"@/components/About.vue"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Tab1 <span class="token keyword">from</span> <span class="token string">"@/components/tabs/Tab1.vue"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Tab2 <span class="token keyword">from</span> <span class="token string">"@/components/tabs/Tab2.vue"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2.向 Vue 添加 vue-router 插件</span></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 3.创建 vue-router 实例</span></span>
<span class="line"><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 定义路由：哈希地址和组件之间的对应关系</span></span>
<span class="line">  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token comment">// 当访问哈希地址为 #/ 时，重定向到哈希地址为 #/home</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">'/home'</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/home'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Home<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/movie'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Movie<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/about'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">component</span><span class="token operator">:</span> About<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">'about/tab1'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'tab1'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Tab1<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'tab2'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Tab2<span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 4.共享实例对象</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> router</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>默认子路由</strong>
以上代码 <code v-pre>routes</code>也可以这样写：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token comment">// 当访问哈希地址为 #/ 时，重定向到哈希地址为 #/home</span></span>
<span class="line">  <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">'/home'</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/home'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Home<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/movie'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Movie<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/about'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">component</span><span class="token operator">:</span> About<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'tab1'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Tab1<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'tab2'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Tab2<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Tab1<span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码表示哈希地址为 <code v-pre>#/about</code>时，自动展示组件 Tab1。</p>
<h2 id="_5、动态路由" tabindex="-1"><a class="header-anchor" href="#_5、动态路由"><span>5、动态路由</span></a></h2>
<p>动态路由：将哈希地址可变的部分定义为参数，从而提高复用性。</p>
<p><strong>使用案例</strong></p>
<p>哈希地址可以在路径中传参，并被组件接收。</p>
<p><img src="@source/dev/front_end/vue/img_118.png" alt="img_118.png"></p>
<p><strong>实现步骤</strong></p>
<p>路由链接</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/movie/1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>阿甘正传<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/movie/2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>明日边缘<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/movie/3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>星露谷物语<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/about<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>关于<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>路由规则
使用 <code v-pre>:</code>匹配可变参数</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 当前项目的路由模块</span></span>
<span class="line"><span class="token comment">// 1.导入 Vue 和 vue-router</span></span>
<span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">'vue-router'</span></span>
<span class="line"><span class="token comment">// 导入所需组件</span></span>
<span class="line"><span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">"@/components/Home.vue"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Movie <span class="token keyword">from</span> <span class="token string">"@/components/Movie.vue"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">"@/components/About.vue"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Tab1 <span class="token keyword">from</span> <span class="token string">"@/components/tabs/Tab1.vue"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Tab2 <span class="token keyword">from</span> <span class="token string">"@/components/tabs/Tab2.vue"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2.向 Vue 添加 vue-router 插件</span></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 3.创建 vue-router 实例</span></span>
<span class="line"><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 定义路由：哈希地址和组件之间的对应关系</span></span>
<span class="line">  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token comment">// 当访问哈希地址为 #/ 时，重定向到哈希地址为 #/home</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">'/home'</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/home'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Home<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/movie/:id'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Movie<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/about'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">component</span><span class="token operator">:</span> About<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'tab1'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Tab1<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'tab2'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Tab2<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Tab1<span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 4.共享实例对象</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> router</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在组件中，使用 <code v-pre>this.$route.params.xxx</code>来访问参数</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>movie-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>Movie 组件 -- {{ this.$route.params.id }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><code v-pre>this.route</code>是路由的参数对象，<code v-pre>this.router</code>是路由的导航对象。</p>
</blockquote>
<p>以上代码比较复杂，还有一种解决方案。
为某条路由规则开启传参：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 当前项目的路由模块</span></span>
<span class="line"><span class="token comment">// 1.导入 Vue 和 vue-router</span></span>
<span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">'vue-router'</span></span>
<span class="line"><span class="token comment">// 导入所需组件</span></span>
<span class="line"><span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">"@/components/Home.vue"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Movie <span class="token keyword">from</span> <span class="token string">"@/components/Movie.vue"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">"@/components/About.vue"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Tab1 <span class="token keyword">from</span> <span class="token string">"@/components/tabs/Tab1.vue"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Tab2 <span class="token keyword">from</span> <span class="token string">"@/components/tabs/Tab2.vue"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2.向 Vue 添加 vue-router 插件</span></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 3.创建 vue-router 实例</span></span>
<span class="line"><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 定义路由：哈希地址和组件之间的对应关系</span></span>
<span class="line">  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token comment">// 当访问哈希地址为 #/ 时，重定向到哈希地址为 #/home</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">'/home'</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/home'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Home<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/movie/:id'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Movie<span class="token punctuation">,</span> <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/about'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">component</span><span class="token operator">:</span> About<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'tab1'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Tab1<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'tab2'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Tab2<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Tab1<span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 4.共享实例对象</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> router</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在对应组件中，声明该参数作为组件的参数</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>movie-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>Movie 组件 -- {{ this.$route.params.id }} -- {{ id }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Movie'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'id'</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>less<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">  <span class="token selector">.movie-container</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">min-height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> lightsalmon<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">padding</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>补充：</p>
<ol>
<li>路径参数与查询参数</li>
</ol>
<p><code v-pre>/movie/2</code>中的 2 属于路径参数，使用 <code v-pre>this.$route.params.xxx</code>来获取。
<code v-pre>movie/2?name=zs&amp;age=20</code>中的 zs 属于查询参数，使用 <code v-pre>this.$route.query.xxx</code>来获取。</p>
<ol start="2">
<li><code v-pre>fullPath</code>和 <code v-pre>path</code></li>
</ol>
<p><img src="@source/dev/front_end/vue/img_119.png" alt="img_119.png"></p>
</blockquote>
<h2 id="_6、声明式导航-编程式导航" tabindex="-1"><a class="header-anchor" href="#_6、声明式导航-编程式导航"><span>6、声明式导航&amp;编程式导航</span></a></h2>
<p>声明式导航：点击链接实现导航，如 <code v-pre>&lt;a&gt;</code> 链接和 <code v-pre>&lt;router-link&gt;</code>链接。
编程式导航：调用 API 实现导航。
声明式导航只能使用链接标签跳转，编程式导航让任何具有单击事件的元素称为导航按钮，更加灵活。</p>
<h3 id="_1-vue-router-中的编程式导航-api" tabindex="-1"><a class="header-anchor" href="#_1-vue-router-中的编程式导航-api"><span>(1) vue-router 中的编程式导航 API</span></a></h3>
<ol>
<li><code v-pre>this.$router.push('hash 地址')</code></li>
</ol>
<p>跳转到指定地址，并增加一条历史记录。</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>home-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>Home 组件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>goToAGan<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>跳转到阿甘正传<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Home'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">goToAGan</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'/movie/1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>less<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">  <span class="token selector">.home-container</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">min-height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">padding</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li><code v-pre>this.$router.replace('hash 地址')</code></li>
</ol>
<p>跳转到指定的哈希地址，并替换当前历史记录。</p>
<ol start="3">
<li><code v-pre>this.$router.go(数值n)</code></li>
</ol>
<p>在浏览历史中前进和后退。
前进一层：<code v-pre>this.$router.forward()</code>
后退一层：<code v-pre>this.$router.back()</code></p>
<h2 id="_7、导航守卫" tabindex="-1"><a class="header-anchor" href="#_7、导航守卫"><span>7、导航守卫</span></a></h2>
<p>导航守卫可以控制路由的访问权限。
<img src="@source/dev/front_end/vue/img_120.png" alt="img_120.png"></p>
<h3 id="_1-全局前置守卫" tabindex="-1"><a class="header-anchor" href="#_1-全局前置守卫"><span>(1) 全局前置守卫</span></a></h3>
<p>在导航跳转之前，进行访问权限控制。
前置守卫回调的三个参数：
<img src="@source/dev/front_end/vue/img_121.png" alt="img_121.png"></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 导航守卫</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// to 表示将要访问的路由信息</span></span>
<span class="line">  <span class="token comment">// from 表示将要离开的路由信息</span></span>
<span class="line">  <span class="token comment">// next 表示放行</span></span>
<span class="line">  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>next()</code>函数有三种使用方式：</p>
<ul>
<li><code v-pre>next()</code>：放行</li>
<li><code v-pre>next('/login')</code>：跳转到其他页面</li>
<li><code v-pre>next(false)</code>：不允许放行</li>
</ul>
<p><strong>使用案例</strong></p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line">// 当前项目的路由模块</span>
<span class="line">// 1.导入 Vue 和 vue-router</span>
<span class="line">import Vue from 'vue'</span>
<span class="line">import VueRouter from 'vue-router'</span>
<span class="line">// 导入所需组件</span>
<span class="line">import Home from "@/components/Home.vue";</span>
<span class="line">import Movie from "@/components/Movie.vue";</span>
<span class="line">import About from "@/components/About.vue";</span>
<span class="line">import Tab1 from "@/components/tabs/Tab1.vue";</span>
<span class="line">import Tab2 from "@/components/tabs/Tab2.vue";</span>
<span class="line">import Login from '@/components/Login.vue';</span>
<span class="line">import Main from '@/components/Main.vue'</span>
<span class="line"></span>
<span class="line">// 2.向 Vue 添加 vue-router 插件</span>
<span class="line">Vue.use(VueRouter)</span>
<span class="line"></span>
<span class="line">// 3.创建 vue-router 实例</span>
<span class="line">const router = new VueRouter({</span>
<span class="line">    // 定义路由：哈希地址和组件之间的对应关系</span>
<span class="line">    routes: [</span>
<span class="line">        // 当访问哈希地址为 #/ 时，重定向到哈希地址为 #/home</span>
<span class="line">        {path: '/', redirect: '/home'},</span>
<span class="line">        {path: '/home', component: Home},</span>
<span class="line">        {path: '/movie/:id', component: Movie, props: true},</span>
<span class="line">        {</span>
<span class="line">            path: '/about',</span>
<span class="line">            component: About,</span>
<span class="line">            children: [</span>
<span class="line">                {path: 'tab1', component: Tab1},</span>
<span class="line">                {path: 'tab2', component: Tab2},</span>
<span class="line">                {path: '', component: Tab1}</span>
<span class="line">            ]</span>
<span class="line">        },</span>
<span class="line">        { path: '/login', component: Login},</span>
<span class="line">        { path: '/main', component: Main}</span>
<span class="line">    ]</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line">// 导航守卫</span>
<span class="line">router.beforeEach(function (to, from, next) {</span>
<span class="line">    // to 表示将要访问的路由信息</span>
<span class="line">    // from 表示将要离开的路由信息</span>
<span class="line">    // next 表示放行</span>
<span class="line">    if (to.path === '/main') { // 若要访问后台管理界面，进行权限控制</span>
<span class="line">        const token = localStorage.getItem('token')</span>
<span class="line">        if (token) { // 有 token 直接放行</span>
<span class="line">            next()</span>
<span class="line">        } else { // 否则跳转到登录页</span>
<span class="line">            next('/login')</span>
<span class="line">        }</span>
<span class="line">    } else { // 直接放行</span>
<span class="line">        next()</span>
<span class="line">    }</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line">// 4.共享实例对象</span>
<span class="line">export default router</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


