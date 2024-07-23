<template><div><h1 id="八、其他" tabindex="-1"><a class="header-anchor" href="#八、其他"><span>八、其他</span></a></h1>
<h2 id="_1、es6-模块化" tabindex="-1"><a class="header-anchor" href="#_1、es6-模块化"><span>1、ES6 模块化</span></a></h2>
<p>统一的、浏览器端和服务器端通用的模块化规范。</p>
<p><img src="@source/dev/front_end/vue/img_122.png" alt="img_122.png"></p>
<p>主要包含三种用法：</p>
<ol>
<li>默认导出与默认导入</li>
<li>按需导出与按需导入</li>
<li>直接导入并执行模块中的代码</li>
</ol>
<p><strong>总结</strong></p>
<p>默认导出只能导出一个，导入时可使用任意名称接收；</p>
<p>按需导出可以导出多个，导入时使用名称进行解构。</p>
<h3 id="_1-默认导入与导出" tabindex="-1"><a class="header-anchor" href="#_1-默认导入与导出"><span>(1) 默认导入与导出</span></a></h3>
<h4 id="默认导出" tabindex="-1"><a class="header-anchor" href="#默认导出"><span>默认导出</span></a></h4>
<p>语法：<code v-pre>export default 成员</code></p>
<blockquote>
<p>在每个模块中，只允许使用一个 <code v-pre>export default</code></p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> n1 <span class="token operator">=</span> <span class="token number">10</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">    n1<span class="token punctuation">,</span></span>
<span class="line">    show</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="默认导入" tabindex="-1"><a class="header-anchor" href="#默认导入"><span>默认导入</span></a></h4>
<p>语法：<code v-pre>import 接收名称 from '模块标识符'</code></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> idiot <span class="token keyword">from</span> <span class="token string">'./1_默认导出.js'</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>idiot<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/dev/front_end/vue/img_123.png" alt="img_123.png"></p>
<h3 id="_2-按需导入与导出" tabindex="-1"><a class="header-anchor" href="#_2-按需导入与导出"><span>(2) 按需导入与导出</span></a></h3>
<h4 id="按需导出" tabindex="-1"><a class="header-anchor" href="#按需导出"><span>按需导出</span></a></h4>
<p>语法：<code v-pre>export 成员</code></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">let</span> n1 <span class="token operator">=</span> <span class="token string">'aaa'</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="按需导入" tabindex="-1"><a class="header-anchor" href="#按需导入"><span>按需导入</span></a></h4>
<p>语法：<code v-pre>import {n1} from '模块标识符'</code></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> n1<span class="token punctuation">,</span> show <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./3_按需导出.js'</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n1<span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>show<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>按需导出与按需导入注意事项：
<img src="@source/dev/front_end/vue/img_124.png" alt="img_124.png"></p>
</blockquote>
<h3 id="_3-直接导入并执行模块中的代码" tabindex="-1"><a class="header-anchor" href="#_3-直接导入并执行模块中的代码"><span>(3) 直接导入并执行模块中的代码</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token string">'./5_直接执行模块代码.js'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2、promise" tabindex="-1"><a class="header-anchor" href="#_2、promise"><span>2、Promise</span></a></h2>
<p><img src="@source/dev/front_end/vue/img_125.png" alt="img_125.png">
<img src="@source/dev/front_end/vue/img_126.png" alt="img_126.png">
<img src="@source/dev/front_end/vue/img_127.png" alt="img_127.png">
<img src="@source/dev/front_end/vue/img_128.png" alt="img_128.png">
<img src="@source/dev/front_end/vue/img_129.png" alt="img_129.png"></p>
<h2 id="_3、async和await" tabindex="-1"><a class="header-anchor" href="#_3、async和await"><span>3、<code v-pre>async</code>和<code v-pre>await</code></span></a></h2>
<p><img src="@source/dev/front_end/vue/img_130.png" alt="img_130.png"></p>
<h2 id="_4、eventloop" tabindex="-1"><a class="header-anchor" href="#_4、eventloop"><span>4、EventLoop</span></a></h2>
<p><img src="@source/dev/front_end/vue/img_131.png" alt="img_131.png">
<img src="@source/dev/front_end/vue/img_132.png" alt="img_132.png">
<img src="@source/dev/front_end/vue/img_133.png" alt="img_133.png">
<img src="@source/dev/front_end/vue/img_134.png" alt="img_134.png"></p>
<h2 id="_5、宏任务与微任务" tabindex="-1"><a class="header-anchor" href="#_5、宏任务与微任务"><span>5、宏任务与微任务</span></a></h2>
<p><img src="@source/dev/front_end/vue/img_135.png" alt="img_135.png">
<img src="@source/dev/front_end/vue/img_136.png" alt="img_136.png">
<img src="@source/dev/front_end/vue/img_137.png" alt="img_137.png"></p>
</div></template>


