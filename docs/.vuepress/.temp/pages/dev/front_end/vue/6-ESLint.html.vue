<template><div><h1 id="六、eslint" tabindex="-1"><a class="header-anchor" href="#六、eslint"><span>六、ESLint</span></a></h1>
<p>ESLint 是 js 代码检查工具，用来规范代码。</p>
<h2 id="_1、创建带有-eslint-的项目" tabindex="-1"><a class="header-anchor" href="#_1、创建带有-eslint-的项目"><span>1、创建带有 ESLint 的项目</span></a></h2>
<p><img src="@source/dev/front_end/vue/img_108.png" alt="img_108.png">
<img src="@source/dev/front_end/vue/img_109.png" alt="img_109.png">
<img src="@source/dev/front_end/vue/img_110.png" alt="img_110.png"></p>
<h2 id="_2、eslint-规则" tabindex="-1"><a class="header-anchor" href="#_2、eslint-规则"><span>2、ESLint 规则</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">'plugin:vue/essential'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'@vue/standard'</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">'@babel/eslint-parser'</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// process.env.NODE_ENV 可以获取当前打包模式，当打包模式为 production，会发出警告</span></span>
<span class="line">    <span class="token string-property property">'no-console'</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">'production'</span> <span class="token operator">?</span> <span class="token string">'warn'</span> <span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 在 js 代码中，使用 debugger 打断点</span></span>
<span class="line">    <span class="token string-property property">'no-debugger'</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">'production'</span> <span class="token operator">?</span> <span class="token string">'warn'</span> <span class="token operator">:</span> <span class="token string">'off'</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><code v-pre>no-console</code>
<img src="@source/dev/front_end/vue/img_111.png" alt="img_111.png">
<img src="@source/dev/front_end/vue/img_112.png" alt="img_112.png"></p>
</blockquote>
<h2 id="_3、标准模式下的约束" tabindex="-1"><a class="header-anchor" href="#_3、标准模式下的约束"><span>3、标准模式下的约束</span></a></h2>
<ol>
<li>不能有多余空行</li>
<li>不能有多余空格</li>
<li>文件结尾使用空行</li>
<li>使用单引号</li>
<li>对象的属性和值之间使用空格</li>
<li>对象或属性的结尾，不允许出现多余逗号</li>
<li>使用注释 <code v-pre>//</code>或 <code v-pre>/**/</code>后加空格</li>
<li>缩进要一致</li>
<li><code v-pre>import</code>必须出现在顶部</li>
<li>不能出现从未使用的变量</li>
<li>方法形参和方法名之间要有空格</li>
</ol>
<p>在 <code v-pre>.eslintrc.js</code>中规则结点下可以禁用该规则：<code v-pre>'space-before-function-paren': ['error', 'never']</code></p>
</div></template>


