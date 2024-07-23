<template><div><h1 id="十、vue3" tabindex="-1"><a class="header-anchor" href="#十、vue3"><span>十、Vue3</span></a></h1>
<h2 id="_1、vue3-优势" tabindex="-1"><a class="header-anchor" href="#_1、vue3-优势"><span>1、Vue3 优势</span></a></h2>
<p><img src="@source/dev/front_end/vue/img_154.png" alt="img_154.png"></p>
<h3 id="_1-组合式-api-与选项式-api" tabindex="-1"><a class="header-anchor" href="#_1-组合式-api-与选项式-api"><span>(1) 组合式 API 与选项式 API</span></a></h3>
<p>选项式 API：功能分布在各个选项中。</p>
<p>组合式 API：将同功能的内容进行集合式管理。</p>
<p>可以提供更方便的复用：
<img src="@source/dev/front_end/vue/img_155.png" alt="img_155.png"></p>
<h2 id="_2、create-vue-搭建-vue3-项目" tabindex="-1"><a class="header-anchor" href="#_2、create-vue-搭建-vue3-项目"><span>2、create-vue 搭建 vue3 项目</span></a></h2>
<p><img src="@source/dev/front_end/vue/img_156.png" alt="img_156.png">
<code v-pre>vue-cli</code>底层采用<code v-pre>webpack</code>进行项目构建，<code v-pre>create-vue</code>底层采用<code v-pre>vite</code>进行项目构建。</p>
<h3 id="_1-创建步骤" tabindex="-1"><a class="header-anchor" href="#_1-创建步骤"><span>(1) 创建步骤</span></a></h3>
<p>前置条件：<code v-pre>node</code>版本 16 以上 。<code v-pre>node -v</code>。
使用<code v-pre>npm init vue@latest</code>命令，会自动下载<code v-pre>create-vue</code>并创建项目。
<img src="@source/dev/front_end/vue/img_157.png" alt="img_157.png">
运行下述三个脚本，浏览器中出现如下界面：
<img src="@source/dev/front_end/vue/img_158.png" alt="img_158.png">
<code v-pre>Vite</code>使创建项目和启动项目速度加快。</p>
<h3 id="_2-目录结构" tabindex="-1"><a class="header-anchor" href="#_2-目录结构"><span>(2) 目录结构</span></a></h3>
<p>创建项目的目录结构如下：</p>
<p><img src="@source/dev/front_end/vue/img_159.png" alt="img_159.png"></p>
<p>关键文件变化：</p>
<ol>
<li><code v-pre>vite.config.js</code>：项目的配置文件，基于<code v-pre>Vite</code>配置。</li>
</ol>
<p>支持使用<code v-pre>@</code>表示<code v-pre>src</code>目录。</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line">    alias: {</span>
<span class="line">      '@': fileURLToPath(new URL('./src', import.meta.url))</span>
<span class="line">    }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li><code v-pre>package.json</code>：项目包文件。</li>
</ol>
<p>可运行脚本使用了<code v-pre>vite</code>，vue 使用 3.x。</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"vue3demo"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"0.0.0"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"private"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"vite"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"vite build"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"preview"</span><span class="token operator">:</span> <span class="token string">"vite preview"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"lint"</span><span class="token operator">:</span> <span class="token string">"eslint . --ext .vue,.js,.jsx,.cjs,.mjs --fix --ignore-path .gitignore"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"vue"</span><span class="token operator">:</span> <span class="token string">"^3.3.4"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"devDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"@vitejs/plugin-vue"</span><span class="token operator">:</span> <span class="token string">"^4.2.3"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"eslint"</span><span class="token operator">:</span> <span class="token string">"^8.39.0"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"eslint-plugin-vue"</span><span class="token operator">:</span> <span class="token string">"^9.11.0"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"vite"</span><span class="token operator">:</span> <span class="token string">"^4.3.9"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li><code v-pre>src/main.js</code>：入口文件。</li>
</ol>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line">import './assets/main.css'</span>
<span class="line"></span>
<span class="line">import { createApp } from 'vue'</span>
<span class="line">import App from './App.vue'</span>
<span class="line"></span>
<span class="line">createApp(App).mount('#app')</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 vue3 中对实例的创建进行了规范化，例如<code v-pre>createApp()</code>、<code v-pre>createRouter()</code>和<code v-pre>createStore()</code>，保证实例创建的独立性。</p>
<blockquote>
<p>VS Code 中，vue2 使用的插件为 Vetur；vue3 使用的插件为 Volar。</p>
</blockquote>
<ol start="4">
<li><code v-pre>src/App.vue</code>：根组件</li>
</ol>
<p>变化如下：</p>
<ul>
<li><code v-pre>script</code>和<code v-pre>template</code>位置调换</li>
<li><code v-pre>template</code>不再要求唯一根元素</li>
<li><code v-pre>script</code>添加<code v-pre>setup</code>使用组合式 API</li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token comment">&lt;!--加上 setup 允许在脚本中直接使用组合式 API--></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token comment">// 自定义组件直接导入使用即可</span></span>
<span class="line"><span class="token keyword">import</span> HelloWorld <span class="token keyword">from</span> <span class="token string">'./components/HelloWorld.vue'</span></span>
<span class="line"><span class="token keyword">import</span> TheWelcome <span class="token keyword">from</span> <span class="token string">'./components/TheWelcome.vue'</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Vue logo<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>logo<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./assets/logo.svg<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>125<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>125<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wrapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HelloWorld</span> <span class="token attr-name">msg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>You did it!<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TheWelcome</span> <span class="token punctuation">/></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line"><span class="token selector">header</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.logo</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto 2rem<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1024px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token selector">header</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">place-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">padding-right</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--section-gap<span class="token punctuation">)</span> / 2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token selector">.logo</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">margin</span><span class="token punctuation">:</span> 0 2rem 0 0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token selector">header .wrapper</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">place-items</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、组合式-api-setup选项" tabindex="-1"><a class="header-anchor" href="#_3、组合式-api-setup选项"><span>3、组合式 API-<code v-pre>setup</code>选项</span></a></h2>
<p><code v-pre>setup</code>写法：</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'setup 函数执行！'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'beforeCreate 函数执行！'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong></p>
<ol>
<li><code v-pre>setup()</code>函数的执行时机在<code v-pre>beforeCreate()</code>之前。因此<code v-pre>setup()</code>函数中无法使用<code v-pre>this</code>指代 vue 实例。</li>
<li><code v-pre>setup()</code>函数中<code v-pre>return</code>的函数与数据才能在<code v-pre>template</code>中使用，如下所示：</li>
</ol>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token string">'MotherFucker'</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">printMsg</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      message<span class="token punctuation">,</span></span>
<span class="line">      printMsg</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'beforeCreate 函数执行！'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{ message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>printMsg('哈哈')<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>打印<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有数据和函数都<code v-pre>return</code>太麻烦，使用如下语法糖：</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token string">'Hello vue'</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">printMsg</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{ message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>printMsg('哈哈')<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>打印<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>知识链接：<code v-pre>var</code>、<code v-pre>let</code>和<code v-pre>const</code></strong>
在 JavaScript 中，<code v-pre>const</code>、<code v-pre>let</code>和<code v-pre>var</code>是用于声明变量的关键字，它们有以下区别：</p>
<ol>
<li><code v-pre>var</code>: 是 ES5 及之前版本中声明变量的关键字。<code v-pre>var</code>声明的变量具有<strong>函数作用域</strong>，即变量<strong>在声明所在的函数内部有效</strong>。如果在函数内部使用的变量没有使用<code v-pre>var</code>声明，则该变量成为全局变量，具有全局作用域。</li>
</ol>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line">function example() {</span>
<span class="line">  // x 具有函数作用域</span>
<span class="line">  var x = 10;</span>
<span class="line">  if (true) {</span>
<span class="line">    // y 具有函数作用域，在 if 块外部也可以访问</span>
<span class="line">    var y = 20;</span>
<span class="line">    console.log(x); // 输出: 10</span>
<span class="line">  }</span>
<span class="line">  console.log(y); // 输出: 20</span>
<span class="line">}</span>
<span class="line">example();</span>
<span class="line">console.log(x); // 报错，x 不在全局作用域内</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li><code v-pre>**let**</code>: 是 ES6 引入的<strong>块级作用域</strong>的变量声明关键字。使用<code v-pre>let</code>声明的变量具有块级作用域，即<strong>变量在声明所在的块</strong>（通常是由花括号包围的代码块）内有效。使用案例如下：</li>
</ol>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line">function example() {</span>
<span class="line">  let x = 10;</span>
<span class="line">  if (true) {</span>
<span class="line">    let y = 20;</span>
<span class="line">    console.log(x); // 输出: 10</span>
<span class="line">  }</span>
<span class="line">  console.log(y); // 报错，y 不在块级作用域内</span>
<span class="line">}</span>
<span class="line">example();</span>
<span class="line">console.log(x); // 报错，x 不在全局作用域内</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li><code v-pre>const</code>: 也是 ES6 引入的关键字，用于声明常量。使用<code v-pre>const</code>声明的变量必须进行初始化，并且不能再被重新赋值。它也具有块级作用域。</li>
</ol>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line">function example() {</span>
<span class="line">  const x = 10;</span>
<span class="line">  if (true) {</span>
<span class="line">    const y = 20;</span>
<span class="line">    console.log(x); // 输出: 10</span>
<span class="line">  }</span>
<span class="line">  console.log(y); // 报错，y 不在块级作用域内</span>
<span class="line">}</span>
<span class="line">example();</span>
<span class="line">console.log(x); // 报错，x 不在全局作用域内</span>
<span class="line"></span>
<span class="line">const PI = 3.14;</span>
<span class="line">PI = 3.14159; // 报错，常量不能被重新赋值</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结起来，<code v-pre>var</code>具有函数作用域、<code v-pre>let</code>具有块级作用域，并且可以重新赋值，而<code v-pre>const</code>也具有块级作用域，但声明的常量不能被重新赋值。建议在 ES6 及更高版本中尽可能使用<code v-pre>let</code>和<code v-pre>const</code>，避免使用<code v-pre>var</code>，因为它的作用域规则相对较为复杂。</p>
<h2 id="_4、组合式-api-reactive和ref函数" tabindex="-1"><a class="header-anchor" href="#_4、组合式-api-reactive和ref函数"><span>4、组合式 API-<code v-pre>reactive</code>和<code v-pre>ref</code>函数</span></a></h2>
<h3 id="_1-reactive" tabindex="-1"><a class="header-anchor" href="#_1-reactive"><span>(1) <code v-pre>reactive</code></span></a></h3>
<p>作用：接受对象，创建响应式对象。
使用步骤：</p>
<ol>
<li>导入<code v-pre>reactive</code></li>
<li>接收对象(复杂类型数据)，创建响应式对象</li>
</ol>
<p>使用案例：</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span></span>
<span class="line"><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">100</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  state<span class="token punctuation">.</span>count<span class="token operator">++</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{ state.count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>add<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-ref" tabindex="-1"><a class="header-anchor" href="#_2-ref"><span>(2) <code v-pre>ref</code></span></a></h3>
<p>作用：接收简单类型或复杂类型，返回响应式对象。
使用步骤：</p>
<ol>
<li>导入<code v-pre>ref</code></li>
<li><code v-pre>ref()</code>接收简单或复杂类型，使用变量接收返回值</li>
</ol>
<p>使用案例：</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>value<span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{ count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p>
<ol>
<li>在脚本中访问<code v-pre>ref()</code>对象的值，使用<code v-pre>对象.value</code>的方式；在<code v-pre>template</code>中，直接使用<code v-pre>对象</code>即可。</li>
</ol>
<p>总结：创建响应式对象，统一使用<code v-pre>ref</code>即可。</p>
<h2 id="_5、组合式-api-computed" tabindex="-1"><a class="header-anchor" href="#_5、组合式-api-computed"><span>5、组合式 API-<code v-pre>computed</code></span></a></h2>
<h3 id="_1-使用步骤" tabindex="-1"><a class="header-anchor" href="#_1-使用步骤"><span>(1) 使用步骤</span></a></h3>
<ol>
<li>导入<code v-pre>computed()</code></li>
<li>语法：</li>
</ol>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line">const 计算属性 = computed(() => {</span>
<span class="line">  return 计算结果</span>
<span class="line">})</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-使用案例" tabindex="-1"><a class="header-anchor" href="#_2-使用案例"><span>(2) 使用案例</span></a></h3>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token comment">// 声明数据</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>computed<span class="token punctuation">,</span> ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 基于 list 派生计算属性</span></span>
<span class="line"><span class="token keyword">const</span> computedList <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> list<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> item <span class="token operator">></span> <span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 或写成如下形式：</span></span>
<span class="line"><span class="token keyword">const</span> computedList <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> list<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> item <span class="token operator">></span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>原始数据：{{ list }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>计算后的数据：{{ computedList }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最佳实践：</p>
<ol>
<li>计算属性中不应出现&quot;副作用&quot;，只进行计算，不要进行其他操作</li>
<li>避免直接修改计算属性的值，计算属性的值应该根据其依赖的数据变化</li>
</ol>
<h2 id="_6、组合式-api-watch" tabindex="-1"><a class="header-anchor" href="#_6、组合式-api-watch"><span>6、组合式 API-<code v-pre>watch</code></span></a></h2>
<h3 id="_1-使用步骤-1" tabindex="-1"><a class="header-anchor" href="#_1-使用步骤-1"><span>(1) 使用步骤</span></a></h3>
<ol>
<li>导入</li>
<li>使用语法：</li>
</ol>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line">// 简单写法</span>
<span class="line">// 监测单值</span>
<span class="line">watch(监测值, (newValue, oldValue) => {</span>
<span class="line">  </span>
<span class="line">})</span>
<span class="line">// 监测多值</span>
<span class="line">watch([监测值1, 监测值2], ([新监测值1, 新监测值2], [旧监测值1, 旧监测值2]) => {</span>
<span class="line">    </span>
<span class="line">})</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>监测单值变化：</p>
<p><img src="@source/dev/front_end/vue/img_160.png" alt="img_160.png"></p>
<p>监测多值变化：</p>
<p><img src="@source/dev/front_end/vue/img_161.png" alt="img_161.png"></p>
<h3 id="_2-使用案例-1" tabindex="-1"><a class="header-anchor" href="#_2-使用案例-1"><span>(2) 使用案例</span></a></h3>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 侦听的数据：响应式</span></span>
<span class="line"><span class="token keyword">const</span> nickName <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'张三'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">changeName</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  nickName<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'李四'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 侦听器</span></span>
<span class="line"><span class="token function">watch</span><span class="token punctuation">(</span>nickName<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'名字改变：'</span> <span class="token operator">+</span> oldValue <span class="token operator">+</span> <span class="token string">'=>'</span> <span class="token operator">+</span> newValue<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{ nickName }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>changeName<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>改变名字<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-immediate和deep" tabindex="-1"><a class="header-anchor" href="#_3-immediate和deep"><span>(3) <code v-pre>immediate</code>和<code v-pre>deep</code></span></a></h3>
<p>向第三个参数传入对象，包含<code v-pre>immediate: true</code>和<code v-pre>deep: true</code></p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line">watch(nickName, (newValue, oldValue) => {</span>
<span class="line">  console.log('名字改变：' + oldValue + '=>' + newValue)</span>
<span class="line">}, {</span>
<span class="line">  // 页面渲染好触发一次</span>
<span class="line">  immediate: true,</span>
<span class="line">  // 深度侦听，侦听对象内部属性变化</span>
<span class="line">  deep: true</span>
<span class="line">})</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>深度侦听对象的某一属性：
<img src="@source/dev/front_end/vue/img_162.png" alt="img_162.png"></p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line">watch(() => ref复杂对象.value.属性, (newValue, oldValue) => {</span>
<span class="line">}, {</span>
<span class="line">  immediate: true,</span>
<span class="line">  deep: true</span>
<span class="line">})</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：<code v-pre>watch</code>侦听的对象必须为响应式对象。</p>
<h2 id="_7、组合式-api-生命周期函数" tabindex="-1"><a class="header-anchor" href="#_7、组合式-api-生命周期函数"><span>7、组合式 API-生命周期函数</span></a></h2>
<p><img src="@source/dev/front_end/vue/img_163.png" alt="img_163.png"></p>
<p>注意：</p>
<ol>
<li>原本<code v-pre>beforeCreated</code>和<code v-pre>created</code>中的逻辑放到<code v-pre>setup</code>中写，即调用接口返回数据都放到<code v-pre>&lt;script setup&gt;</code>中开放的代码中。</li>
</ol>
<p>使用案例：</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token comment">// 获取用户信息</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>onMounted<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">getUserInfo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'数据获取成功！'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'mounted!'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8、组合式-api-父子通信" tabindex="-1"><a class="header-anchor" href="#_8、组合式-api-父子通信"><span>8、组合式 API-父子通信</span></a></h2>
<h3 id="_1-父-子" tabindex="-1"><a class="header-anchor" href="#_1-父-子"><span>(1) 父-&gt;子</span></a></h3>
<p><strong>基本步骤</strong></p>
<ol>
<li>子组件中定义<code v-pre>props</code></li>
<li>父组件在使用子组件时向<code v-pre>props</code>属性传值</li>
</ol>
<p><img src="@source/dev/front_end/vue/img_164.png" alt="img_164.png">
使用案例：</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token comment">// 局部使用导入使用即可</span></span>
<span class="line"><span class="token keyword">import</span> SonCom <span class="token keyword">from</span> <span class="token string">'@/components/son-com.vue'</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SonCom</span> <span class="token attr-name">car</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>哈哈<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SonCom</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">car</span><span class="token operator">:</span> String</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>car<span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{ car }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line"></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-子-父" tabindex="-1"><a class="header-anchor" href="#_2-子-父"><span>(2) 子-&gt;父</span></a></h3>
<p><strong>基本步骤</strong></p>
<ol>
<li>子组件在需要传值时，触发自定义事件</li>
<li>父组件定义自定义事件发生时的处理函数</li>
</ol>
<p><img src="@source/dev/front_end/vue/img_165.png" alt="img_165.png"></p>
<p><strong>使用案例</strong></p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">car</span><span class="token operator">:</span> String</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>car<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'get-message'</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">sendMsg</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'get-message'</span><span class="token punctuation">,</span> <span class="token string">'message from son'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{ car }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sendMsg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>向父组件发送消息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line"></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9、组合式-api-模板引用" tabindex="-1"><a class="header-anchor" href="#_9、组合式-api-模板引用"><span>9、组合式 API-模板引用</span></a></h2>
<h3 id="_1-模板引用" tabindex="-1"><a class="header-anchor" href="#_1-模板引用"><span>(1) 模板引用</span></a></h3>
<p>在<code v-pre>setup</code>中无法使用<code v-pre>this.$ref.xxx</code>来引用组件实例或 DOM 对象，使用如下方式引用：</p>
<ol>
<li>生成响应式对象容器：调用<code v-pre>ref()</code>方法生成一个<code v-pre>ref</code>对象</li>
<li>标签绑定：通过<code v-pre>ref</code>标识绑定<code v-pre>ref</code>对象到标签</li>
</ol>
<p><img src="@source/dev/front_end/vue/img_166.png" alt="img_166.png"></p>
<p>使用案例：</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 输入框</span></span>
<span class="line"><span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 按钮</span></span>
<span class="line"><span class="token keyword">const</span> btn <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 输入框聚焦方法</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">inputFocus</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  input<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inputFocus<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点击让输入框聚焦<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-defineexpose" tabindex="-1"><a class="header-anchor" href="#_2-defineexpose"><span>(2) <code v-pre>defineExpose()</code></span></a></h3>
<p><img src="@source/dev/front_end/vue/img_167.png" alt="img_167.png">
<img src="@source/dev/front_end/vue/img_168.png" alt="img_168.png"></p>
<h2 id="_10、组合式-api-provide-inject" tabindex="-1"><a class="header-anchor" href="#_10、组合式-api-provide-inject"><span>10、组合式 API-provide/inject</span></a></h2>
<p>作用：顶层组件向任意底层组件传递数据和方法，实现<strong>跨层组件通信</strong>。
使用方法：</p>
<ol>
<li>顶层组件通过<code v-pre>provide</code>提供数据：<code v-pre>provice('key', 顶层组件中的数据)</code></li>
<li>底层组件通过<code v-pre>inject</code>获取数据：<code v-pre>const data = inject('key')</code></li>
</ol>
<p>使用案例：</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> CenterCom <span class="token keyword">from</span> <span class="token string">'@/components/center-com.vue'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>provide<span class="token punctuation">,</span> ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 顶层组件向底部组件发送数据</span></span>
<span class="line"><span class="token comment">// 1. 传递普通数据</span></span>
<span class="line"><span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">,</span> <span class="token string">'message from top'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 2. 传递响应式数据</span></span>
<span class="line"><span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">'hehe'</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 3. 传递函数</span></span>
<span class="line"><span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">'changeCount'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newCount</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  count<span class="token punctuation">.</span>value <span class="token operator">=</span> newCount</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>我是顶层组件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>center-com</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>center-com</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token comment">// 接收顶部组件传递的数据</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>inject<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 接收普通数据</span></span>
<span class="line"><span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 接收响应式数据</span></span>
<span class="line"><span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">'hehe'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 接收函数，通常不会直接改动顶层组件的响应式数据，而是使用顶层组件传递的函数修改</span></span>
<span class="line"><span class="token keyword">const</span> changeFn <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">'changeCount'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">changeCount</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">changeFn</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>我是中间组件 -- {{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>响应式数据 -- {{ count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>changeCount<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>改变 Count<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>provide/inject</code>可以传输响应式数据，并且所有组件共同维护这一份响应式数据。但响应式数据的修改会放到创建其的组件中，其余组件对其进行修改使用接口，不要直接改变。</p>
<h2 id="_11、vue-3-3-新特性-defineoptions" tabindex="-1"><a class="header-anchor" href="#_11、vue-3-3-新特性-defineoptions"><span>11、vue 3.3 新特性-<code v-pre>defineOptions</code></span></a></h2>
<p><img src="@source/dev/front_end/vue/img_169.png" alt="img_169.png">
<img src="@source/dev/front_end/vue/img_170.png" alt="img_170.png">
<img src="@source/dev/front_end/vue/img_171.png" alt="img_171.png"></p>
</div></template>


