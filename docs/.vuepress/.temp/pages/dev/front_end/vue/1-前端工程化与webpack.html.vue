<template><div><h1 id="一、前端工程化与-webpack" tabindex="-1"><a class="header-anchor" href="#一、前端工程化与-webpack"><span>一、前端工程化与 webpack</span></a></h1>
<h2 id="_1、前端工程化" tabindex="-1"><a class="header-anchor" href="#_1、前端工程化"><span>1、前端工程化</span></a></h2>
<p><strong>前端工程化特征</strong></p>
<p><img src="@source/dev/front_end/vue/img.png" alt="img.png"></p>
<p><strong>前端工程化</strong></p>
<p><img src="@source/dev/front_end/vue/img_1.png" alt="img_1.png"></p>
<p><strong>前端工程化解决方案：</strong></p>
<p><img src="@source/dev/front_end/vue/img_2.png" alt="img_2.png"></p>
<h2 id="_2、webpack-基本使用" tabindex="-1"><a class="header-anchor" href="#_2、webpack-基本使用"><span>2、webpack 基本使用</span></a></h2>
<h3 id="_1-webpack-介绍" tabindex="-1"><a class="header-anchor" href="#_1-webpack-介绍"><span>(1) webpack 介绍</span></a></h3>
<p><img src="@source/dev/front_end/vue/img_3.png" alt="img_3.png">
<img src="@source/dev/front_end/vue/img_4.png" alt="img_4.png"></p>
<h3 id="_2-列表隔行变色项目" tabindex="-1"><a class="header-anchor" href="#_2-列表隔行变色项目"><span>(2) 列表隔行变色项目</span></a></h3>
<ol>
<li>新建空白项目，在文件夹中启用命令终端，输入命令：<code v-pre>npm init -y</code>，这样在项目中就初始化了包管理配置文件 <code v-pre>package.json</code>。</li>
<li>新建 <code v-pre>src</code>源代码目录，并创建 <code v-pre>index.html</code>和 <code v-pre>index.js</code>文件</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>这是第1个li<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>这是第2个li<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>这是第3个li<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>这是第4个li<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>这是第5个li<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>这是第6个li<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>这是第7个li<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>这是第8个li<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>这是第9个li<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>这是第10个li<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>运行 <code v-pre>npm install jquery -S</code>，安装 jquery</li>
</ol>
<blockquote>
<p>-S 等同于 --save，表示将包安置到 dependencies 下，开发与上线时的依赖。
<img src="@source/dev/front_end/vue/img_5.png" alt="img_5.png"></p>
</blockquote>
<ol start="4">
<li>在项目中安装 webpack</li>
</ol>
<p>运行  <code v-pre>npm install webpack@5.42.1 webpack-cli@4.7.2 -D</code></p>
<blockquote>
<p>-D 等同于 --save-dev，将包安置到 devDependencies 下，开发时的依赖。
<img src="@source/dev/front_end/vue/img_6.png" alt="img_6.png"></p>
</blockquote>
<ol start="5">
<li>配置 webpack</li>
</ol>
<p>在项目根目录中，创建名为 <code v-pre>webpack.config.js</code> 的 webpack 配置文件，并初始化如下的基本配置：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 指定构建模式</span></span>
<span class="line">  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">"development"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code v-pre>package.json</code>的 scripts 节点下，新增 dev 脚本如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"dev"</span><span class="token operator">:</span> <span class="token string">"webpack"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在终端中运行 <code v-pre>npm run dev</code> 命令，启动 webpack 进行项目的打包构建。</p>
<blockquote>
<p>如果成功，将显示如下信息：
<img src="@source/dev/front_end/vue/img_7.png" alt="img_7.png"></p>
</blockquote>
<ol start="6">
<li>引入 <code v-pre>main.js</code></li>
</ol>
<p>在 <code v-pre>index.html</code>中引入 <code v-pre>main.js</code> 取代引入 <code v-pre>index.js</code></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../dist/main.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_3、webpack-相关配置" tabindex="-1"><a class="header-anchor" href="#_3、webpack-相关配置"><span>3、webpack 相关配置</span></a></h2>
<h3 id="_1-可选模式" tabindex="-1"><a class="header-anchor" href="#_1-可选模式"><span>(1) 可选模式</span></a></h3>
<p>在 <code v-pre>webpack.config.js</code>中可以配置构建模式，有两种选择：</p>
<ul>
<li><code v-pre>development</code>：开发模式，生成的 <code v-pre>main.js</code>不会进行压缩。</li>
<li><code v-pre>production</code>：生产模式，生成的 <code v-pre>main.js</code>会进行压缩。</li>
</ul>
<h3 id="_2-webpack-config-js的作用" tabindex="-1"><a class="header-anchor" href="#_2-webpack-config-js的作用"><span>(2) <code v-pre>webpack.config.js</code>的作用</span></a></h3>
<p>运行 webpack 之前，会首先读取 <code v-pre>webpack.config.js</code>中的配置。</p>
<h3 id="_3-webpack-默认约定" tabindex="-1"><a class="header-anchor" href="#_3-webpack-默认约定"><span>(3) webpack 默认约定</span></a></h3>
<p><img src="@source/dev/front_end/vue/img_8.png" alt="img_8.png"></p>
<h3 id="_4-自定义打包的入口与出口" tabindex="-1"><a class="header-anchor" href="#_4-自定义打包的入口与出口"><span>(4) 自定义打包的入口与出口</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 导入 node.js 中专门操作路径的模块</span></span>
<span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 打包的入口，指定要处理的文件</span></span>
<span class="line">  <span class="token comment">// __dirname 表示当前文件所在路径</span></span>
<span class="line">  <span class="token literal-property property">entry</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./src/index1.js'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 打包的出口</span></span>
<span class="line">  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 存放的目录</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 生成的文件名</span></span>
<span class="line">    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'js/bundle.js'</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-打包完成后自动打开浏览器" tabindex="-1"><a class="header-anchor" href="#_5-打包完成后自动打开浏览器"><span>(5) 打包完成后自动打开浏览器</span></a></h3>
<p>在 <code v-pre>webpack.config.js</code>中，配置 <code v-pre>devServer</code>结点。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 首次打包成功后，自动打开浏览器</span></span>
<span class="line">    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 在 http 协议中，如果端口号是 80，则可以被省略</span></span>
<span class="line">    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 指定运行的主机地址</span></span>
<span class="line">    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">'127.0.0.1'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、webpack-插件" tabindex="-1"><a class="header-anchor" href="#_4、webpack-插件"><span>4、webpack 插件</span></a></h2>
<h3 id="_1-插件的作用" tabindex="-1"><a class="header-anchor" href="#_1-插件的作用"><span>(1) 插件的作用</span></a></h3>
<p><img src="@source/dev/front_end/vue/img_9.png" alt="img_9.png"></p>
<h3 id="_2-webpack-dev-server" tabindex="-1"><a class="header-anchor" href="#_2-webpack-dev-server"><span>(2) <code v-pre>webpack-dev-server</code></span></a></h3>
<ol>
<li>安装</li>
</ol>
<p><code v-pre>npm install webpack-dev-server --save-dev</code></p>
<ol start="2">
<li>配置</li>
</ol>
<p>修改 <code v-pre>package.json</code>-&gt; <code v-pre>scripts</code>中的 <code v-pre>dev</code> 命令</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"dev"</span><span class="token operator">:</span> <span class="token string">"webpack serve"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次运行 <code v-pre>npm run dev</code>。</p>
<p>在浏览器中访问：http://localhost:8080。</p>
<p><img src="@source/dev/front_end/vue/img_10.png" alt="img_10.png"></p>
<p>停用服务：ctrl+c</p>
<blockquote>
<p>出现问题：
访问 http://localhost:8080，出现 cannot get /
产生原因：
版本不兼容。
解决方案：
使用 <code v-pre> npm install webpack-dev-server@3.11.2 -D</code>命令重新安装。</p>
</blockquote>
<p><img src="@source/dev/front_end/vue/img_11.png" alt="img_11.png"></p>
<p>源代码中进行保存就会打包，因此 webpack-dev-server 插件生成的代码存放在内存中，无需频繁读写磁盘。生成代码访问路径在根目录而不是 dist 文件夹下。</p>
<h3 id="_3-html-webpack-plugin" tabindex="-1"><a class="header-anchor" href="#_3-html-webpack-plugin"><span>(3) html-webpack-plugin</span></a></h3>
<p><img src="@source/dev/front_end/vue/img_12.png" alt="img_12.png"></p>
<p><strong>安装：</strong><code v-pre>npm install html-webpack-plugin@5.3.2 -D</code>
<strong>配置</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 1. 导入 html-webpack-plugin 这个插件，得到插件的构造函数</span></span>
<span class="line"><span class="token keyword">const</span> HtmlPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'html-webpack-plugin'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 2. new 构造函数，创建插件的实例对象</span></span>
<span class="line"><span class="token keyword">const</span> htmlPlugin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HtmlPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 指定要复制哪个页面</span></span>
<span class="line">  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'./src/index.html'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 指定复制出来的文件名和存放路径</span></span>
<span class="line">  <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'./index.html'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// mode 代表 webpack 运行的模式，可选值有两个 development 和 production</span></span>
<span class="line">  <span class="token comment">// 结论：开发时候一定要用 development，因为追求的是打包的速度，而不是体积；</span></span>
<span class="line">  <span class="token comment">// 反过来，发布上线的时候一定能要用 production，因为上线追求的是体积小，而不是打包速度快！</span></span>
<span class="line">  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'development'</span></span>
<span class="line">  <span class="token comment">// 3. 插件的数组，将来 webpack 在运行时，会加载并调用这些插件</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>htmlPlugin<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>说明：
<img src="@source/dev/front_end/vue/img_13.png" alt="img_13.png"></p>
</blockquote>
<h2 id="_5、webpack-loader" tabindex="-1"><a class="header-anchor" href="#_5、webpack-loader"><span>5、webpack loader</span></a></h2>
<h3 id="_1-webpack-loader-概述" tabindex="-1"><a class="header-anchor" href="#_1-webpack-loader-概述"><span>(1) webpack loader 概述</span></a></h3>
<p><img src="@source/dev/front_end/vue/img_14.png" alt="img_14.png"></p>
<h3 id="_2-打包处理-css-文件" tabindex="-1"><a class="header-anchor" href="#_2-打包处理-css-文件"><span>(2) 打包处理 css 文件</span></a></h3>
<p>在 <code v-pre>src/css</code>下新建 css 文件</p>
<p><img src="@source/dev/front_end/vue/img_15.png" alt="img_15.png"></p>
<p>在 <code v-pre>index1.js</code>中使用 ES6 语法引入 css 文件</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 使用 ES6 导入 jquery</span></span>
<span class="line"><span class="token keyword">import</span> $ <span class="token keyword">from</span> <span class="token string">'jquery'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> '<span class="token punctuation">.</span><span class="token operator">/</span>css<span class="token operator">/</span>index<span class="token punctuation">.</span>css</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>安装</strong>
<code v-pre>npm i style-loader@3.0.0 css-loader@5.2.6 -D</code>
<strong>配置</strong>
在 <code v-pre>webpack.config.js</code>中，进行如下配置：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 所有第三方模块的匹配规则</span></span>
<span class="line">    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token comment">// 定义了不同模块对应的 loader</span></span>
<span class="line">            <span class="token punctuation">{</span> <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'style-loader'</span><span class="token punctuation">,</span> <span class="token string">'css-loader'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注：
<img src="@source/dev/front_end/vue/img_16.png" alt="img_16.png"></p>
</blockquote>
<h3 id="_3-打包处理-less-文件" tabindex="-1"><a class="header-anchor" href="#_3-打包处理-less-文件"><span>(3) 打包处理 less 文件</span></a></h3>
<p>新建 less 文件</p>
<p><img src="@source/dev/front_end/vue/img_17.png" alt="img_17.png"></p>
<p>在 <code v-pre>index1.js</code>中导入 less 文件</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token string">'./css/index.less'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>安装</strong>
<code v-pre>npm i less-loader@10.0.1 less@4.1.1 -D</code>
<strong>配置</strong>
在 <code v-pre>webpack.config.js</code>中配置</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 所有第三方模块的匹配规则</span></span>
<span class="line">    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token comment">// 处理 .less 文件的 loader</span></span>
<span class="line">            <span class="token punctuation">{</span> <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'style-loader'</span><span class="token punctuation">,</span> <span class="token string">'css-loader'</span><span class="token punctuation">,</span> <span class="token string">'less-loader'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-打包处理样式表中与-url-路径相关的文件" tabindex="-1"><a class="header-anchor" href="#_4-打包处理样式表中与-url-路径相关的文件"><span>(4)  打包处理样式表中与 url 路径相关的文件</span></a></h3>
<p>图片的 base64 格式：</p>
<p><img src="@source/dev/front_end/vue/img_18.png" alt="img_18.png"></p>
<p>将图片转换为 base64 格式可以在一次请求中直接得到图片，对一些小图片这种方式较好。本节中的 loader 可以根据文件大小判断 src 属性使用引用还是 base64。</p>
<p>在 <code v-pre>index.html</code>添加图片</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span>head<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span><span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>title<span class="token operator">></span>Title<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"/js/bundle.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span>body<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>ul<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>li<span class="token operator">></span>这是第<span class="token number">1</span>个li<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>li<span class="token operator">></span>这是第<span class="token number">2</span>个li<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>li<span class="token operator">></span>这是第<span class="token number">3</span>个li<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>li<span class="token operator">></span>这是第<span class="token number">4</span>个li<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>li<span class="token operator">></span>这是第<span class="token number">5</span>个li<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>li<span class="token operator">></span>这是第<span class="token number">6</span>个li<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>li<span class="token operator">></span>这是第<span class="token number">7</span>个li<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>li<span class="token operator">></span>这是第<span class="token number">8</span>个li<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>li<span class="token operator">></span>这是第<span class="token number">9</span>个li<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>li<span class="token operator">></span>这是第<span class="token number">10</span>个li<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">""</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"box"</span><span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code v-pre>index1.js</code>中给 img 进行动态赋值</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 导入图片</span></span>
<span class="line"><span class="token keyword">import</span> logo <span class="token keyword">from</span> <span class="token string">'./images/logo.jpg'</span></span>
<span class="line"><span class="token comment">// 给 img 标签的 src 动态赋值</span></span>
<span class="line"><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'.box'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">'src'</span><span class="token punctuation">,</span> logo<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>安装</strong>
<code v-pre>npm i url-loader@4.1.1 file-loader@6.2.0 -D</code>
<strong>配置</strong>
在 <code v-pre>webpack.config.js</code>中进行配置</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 所有第三方模块的匹配规则</span></span>
<span class="line">    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token comment">// 处理图片文件的 loader</span></span>
<span class="line">            <span class="token comment">// 如果需要调用的 loader 只有一个，则只传递一个字符串也行，如果有多个loader，则必须指定数组</span></span>
<span class="line">            <span class="token comment">// 在配置 url-loader 的时候，多个参数之间，使用 &amp; 符号进行分隔</span></span>
<span class="line">            <span class="token punctuation">{</span> <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.jpg|png|gif$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">'url-loader?limit=470&amp;outputPath=images'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-打包处理-js-文件中的高级语法" tabindex="-1"><a class="header-anchor" href="#_5-打包处理-js-文件中的高级语法"><span>(5) 打包处理 js 文件中的高级语法</span></a></h3>
<p><strong>安装</strong>
<code v-pre>npm i babel-loader@8.2.2 @babel/core@7.14.6 @babel/plugin-proposal-decorators@7.14.5 -D</code>
<strong>配置</strong>
在 <code v-pre>webpack.config.js</code>中，设置规则</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token comment">// 使用 babel-loader 处理高级的 JS 语法</span></span>
<span class="line">      <span class="token comment">// 在配置 babel-loader 的时候，程序员只需要把自己的代码进行转换即可；一定要排除 node_modules 目录中的 JS 文件</span></span>
<span class="line">      <span class="token comment">// 因为第三方包中的 JS 兼容性，不需要程序员关心</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">'babel-loader'</span><span class="token punctuation">,</span> <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在项目根目录下，创建名为 <code v-pre>babel.config.js</code>的配置文件</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 声明 babel 可用的插件</span></span>
<span class="line">  <span class="token comment">// 将来，webpack 在调用 babel-loader 的时候，会先加载 plugins 插件来使用</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">'@babel/plugin-proposal-decorators'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">legacy</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6、打包发布" tabindex="-1"><a class="header-anchor" href="#_6、打包发布"><span>6、打包发布</span></a></h2>
<p><img src="@source/dev/front_end/vue/img_19.png" alt="img_19.png"></p>
<p><strong>新增打包脚本</strong>
在 <code v-pre>package.json</code>的 <code v-pre>scripts</code>节点下，新增 build 命令：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"dev"</span><span class="token operator">:</span> <span class="token string">"webpack serve"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"build"</span><span class="token operator">:</span> <span class="token string">"webpack --mode production"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><code v-pre>--mode production</code>可以覆盖 <code v-pre>webpack.config.js</code>中的 <code v-pre>mode: development</code>。</p>
</blockquote>
<p><strong>将 JavaScript 文件统一放到 js 目录下</strong>
在 <code v-pre>webpack.config.js</code>的 <code v-pre>output</code>节点下，进行如下配置：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 存放的目录</span></span>
<span class="line">        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token comment">// 生成的文件名</span></span>
<span class="line">        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'js/bundle.js'</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>将图片统一放到 image 目录下</strong>
在 <code v-pre>webpack.config.js</code>中进行如下配置：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token comment">// 所有第三方模块的匹配规则</span></span>
<span class="line">    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token comment">// 定义了不同模块对应的 loader</span></span>
<span class="line">            <span class="token punctuation">{</span> <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'style-loader'</span><span class="token punctuation">,</span> <span class="token string">'css-loader'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token comment">// 处理 .less 文件的 loader</span></span>
<span class="line">            <span class="token punctuation">{</span> <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'style-loader'</span><span class="token punctuation">,</span> <span class="token string">'css-loader'</span><span class="token punctuation">,</span> <span class="token string">'less-loader'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token comment">// 处理图片文件的 loader</span></span>
<span class="line">            <span class="token comment">// 如果需要调用的 loader 只有一个，则只传递一个字符串也行，如果有多个loader，则必须指定数组</span></span>
<span class="line">            <span class="token comment">// 在配置 url-loader 的时候，多个参数之间，使用 &amp; 符号进行分隔</span></span>
<span class="line">            <span class="token punctuation">{</span> <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.jpg|png|gif$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">'url-loader?limit=470&amp;outputPath=images'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>自动清理 dist 目录下的旧文件</strong>
安装 <code v-pre>clean-webpack-plugin</code>
<code v-pre>npm install --save-dev clean-webpack-plugin</code>
在 <code v-pre>webpack.config.js</code>中进行如下配置：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 导入 clean-webpack-plugin 所需模块</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> CleanWebpackPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'clean-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>htmlPlugin<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7、source-map" tabindex="-1"><a class="header-anchor" href="#_7、source-map"><span>7、Source Map</span></a></h2>
<h3 id="_1-source-map-简介" tabindex="-1"><a class="header-anchor" href="#_1-source-map-简介"><span>(1) Source Map 简介</span></a></h3>
<p>应用背景：生成代码出错的位置和源代码出错的位置不是一一对应的。
<img src="@source/dev/front_end/vue/img_20.png" alt="img_20.png"></p>
<h3 id="_2-开发环境" tabindex="-1"><a class="header-anchor" href="#_2-开发环境"><span>(2) 开发环境</span></a></h3>
<p>开发环境下默认 Source Map 的问题：记录生成后代码的位置，导致报错代码行数和源代码行数不一致。
解决方案：
在 <code v-pre>webpack.config.js</code>中，进行如下设置</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 在开发调试阶段，建议大家都把 devtool 的值设置为 eval-source-map</span></span>
<span class="line">    <span class="token comment">// devtool: 'eval-source-map',</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 指定构建模式</span></span>
<span class="line">    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">"development"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-生产环境" tabindex="-1"><a class="header-anchor" href="#_3-生产环境"><span>(3) 生产环境</span></a></h3>
<p><img src="@source/dev/front_end/vue/img_21.png" alt="img_21.png"></p>
<p>生产环境下，只指出源代码中报错位置，不暴露源码：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 在实际发布的时候，建议大家把 devtool 的值设置为 nosources-source-map 或直接关闭 SourceMap</span></span>
<span class="line">  <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">'nosources-source-map'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/dev/front_end/vue/img_22.png" alt="img_22.png"></p>
<h3 id="_4-最佳实践" tabindex="-1"><a class="header-anchor" href="#_4-最佳实践"><span>(4) 最佳实践</span></a></h3>
<p><img src="@source/dev/front_end/vue/img_23.png" alt="img_23.png"></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 在开发调试阶段，建议大家都把 devtool 的值设置为 eval-source-map</span></span>
<span class="line">  <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">'eval-source-map'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 在实际发布的时候，建议大家把 devtool 的值设置为 nosources-source-map 或直接关闭 SourceMap</span></span>
<span class="line">  <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">'nosources-source-map'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8、webpack-尾声" tabindex="-1"><a class="header-anchor" href="#_8、webpack-尾声"><span>8、webpack 尾声</span></a></h2>
<p><img src="@source/dev/front_end/vue/img_24.png" alt="img_24.png"></p>
<h3 id="_1-拓展一-表示-src-目录" tabindex="-1"><a class="header-anchor" href="#_1-拓展一-表示-src-目录"><span>(1) 拓展一：<code v-pre>**@**</code><strong>表示 src 目录</strong></span></a></h3>
<p>在 <code v-pre>webpack.config.js</code>中进行配置：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 使用 Node.js 中的导出语法，向外导出一个 webpack 的配置对象</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 在开发调试阶段，建议大家都把 devtool 的值设置为 eval-source-map</span></span>
<span class="line">  <span class="token comment">// devtool: 'eval-source-map',</span></span>
<span class="line">  <span class="token comment">// 在实际发布的时候，建议大家把 devtool 的值设置为 nosources-source-map 或直接关闭 SourceMap</span></span>
<span class="line">  <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">'nosources-source-map'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// mode 代表 webpack 运行的模式，可选值有两个 development 和 production</span></span>
<span class="line">  <span class="token comment">// 结论：开发时候一定要用 development，因为追求的是打包的速度，而不是体积；</span></span>
<span class="line">  <span class="token comment">// 反过来，发布上线的时候一定能要用 production，因为上线追求的是体积小，而不是打包速度快！</span></span>
<span class="line">  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'development'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// entry: '指定要处理哪个文件'</span></span>
<span class="line">  <span class="token literal-property property">entry</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./src/index1.js'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 指定生成的文件要存放到哪里</span></span>
<span class="line">  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 存放的目录</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 生成的文件名</span></span>
<span class="line">    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'js/bundle.js'</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 3. 插件的数组，将来 webpack 在运行时，会加载并调用这些插件</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>htmlPlugin<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 首次打包成功后，自动打开浏览器</span></span>
<span class="line">    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 在 http 协议中，如果端口号是 80，则可以被省略</span></span>
<span class="line">    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 指定运行的主机地址</span></span>
<span class="line">    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">'127.0.0.1'</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token comment">// 定义了不同模块对应的 loader</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'style-loader'</span><span class="token punctuation">,</span> <span class="token string">'css-loader'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// 处理 .less 文件的 loader</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'style-loader'</span><span class="token punctuation">,</span> <span class="token string">'css-loader'</span><span class="token punctuation">,</span> <span class="token string">'less-loader'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// 处理图片文件的 loader</span></span>
<span class="line">      <span class="token comment">// 如果需要调用的 loader 只有一个，则只传递一个字符串也行，如果有多个loader，则必须指定数组</span></span>
<span class="line">      <span class="token comment">// 在配置 url-loader 的时候，多个参数之间，使用 &amp; 符号进行分隔</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.jpg|png|gif$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">'url-loader?limit=470&amp;outputPath=images'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// 使用 babel-loader 处理高级的 JS 语法</span></span>
<span class="line">      <span class="token comment">// 在配置 babel-loader 的时候，程序员只需要把自己的代码进行转换即可；一定要排除 node_modules 目录中的 JS 文件</span></span>
<span class="line">      <span class="token comment">// 因为第三方包中的 JS 兼容性，不需要程序员关心</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">'babel-loader'</span><span class="token punctuation">,</span> <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 告诉 webpack，程序员写的代码中，@ 符号表示 src 这一层目录</span></span>
<span class="line">      <span class="token string-property property">'@'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./src/'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// import msg from '../../msg'</span></span>
<span class="line"><span class="token keyword">import</span> msg <span class="token keyword">from</span> <span class="token string">'@/msg.js'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 建议大家使用 @ 表示 src 源代码目录，从外往里查找；不要使用 ../ 从里往外查找</span></span>
<span class="line"><span class="token comment">//     @/msg.js</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-拓展二-在谷歌浏览器安装-vue-devtools-工具" tabindex="-1"><a class="header-anchor" href="#_2-拓展二-在谷歌浏览器安装-vue-devtools-工具"><span>(2) 拓展二：在谷歌浏览器安装 vue-devtools 工具</span></a></h3>
<p><a href="https://www.bilibili.com/video/BV1zq4y1p7ga?p=31&amp;spm_id_from=pageDriver&amp;vd_source=7a10078ee6a4ade802edf9f0f1e7ce20" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1zq4y1p7gap=31&amp;spm_id_from=pageDriver&amp;vd_source=7a10078ee6a4ade802edf9f0f1e7ce20</a></p>
</div></template>


