<template><div><h1 id="六、map" tabindex="-1"><a class="header-anchor" href="#六、map"><span>六、Map</span></a></h1>
<p>map 声明语法如下：</p>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">var</span> map1 <span class="token keyword">map</span><span class="token punctuation">[</span>keytype<span class="token punctuation">]</span>valuetype</span>
<span class="line"><span class="token keyword">var</span> map1 <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span></span>
<span class="line"></span>
<span class="line">map1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span>keyType<span class="token punctuation">]</span>valueType<span class="token punctuation">,</span> capacity<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>key 可以是任意可以用<code v-pre>==</code>或者<code v-pre>!=</code>操作符比较的类型，比如<code v-pre>string</code>、<code v-pre>int</code>、<code v-pre>float</code>。如果要用结构体作为 key 可以提供<code v-pre>Key()</code>和<code v-pre>Hash()</code>方法，这样可以通过结构体的域计算出唯一的数字或者字符串的 key。</p>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token comment">// map 赋值</span></span>
<span class="line">map1<span class="token punctuation">[</span>key1<span class="token punctuation">]</span> <span class="token operator">=</span> val1</span>
<span class="line"><span class="token comment">// map 取值，默认有零值</span></span>
<span class="line">v <span class="token operator">:=</span> map1<span class="token punctuation">[</span>key1<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment">// 获取键值对数量</span></span>
<span class="line"><span class="token function">len</span><span class="token punctuation">(</span>map1<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1、判断键是否存在与删除元素" tabindex="-1"><a class="header-anchor" href="#_1、判断键是否存在与删除元素"><span>1、判断键是否存在与删除元素</span></a></h2>
<p><code v-pre>map</code>获取值有两个返回值<code v-pre>value</code>和<code v-pre>isPresent</code>，<code v-pre>isPresent</code>是一个<code v-pre>bool</code>值，标识键是否存在。</p>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">"fmt"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 判断键是否存在</span></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	map1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span></span>
<span class="line">	key <span class="token operator">:=</span> <span class="token string">"波尔布特"</span></span>
<span class="line">	map1<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"极端"</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">if</span> <span class="token function">isKeyPresent</span><span class="token punctuation">(</span>map1<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"键存在"</span><span class="token punctuation">)</span></span>
<span class="line">		<span class="token function">delete</span><span class="token punctuation">(</span>map1<span class="token punctuation">,</span> key<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isKeyPresent</span><span class="token punctuation">(</span>map1<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"键已删除"</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 判断键是否存在</span></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">isKeyPresent</span><span class="token punctuation">(</span>datamap <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> key <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token boolean">_</span><span class="token punctuation">,</span> isPresent <span class="token operator">:=</span> datamap<span class="token punctuation">[</span>key<span class="token punctuation">]</span></span>
<span class="line">	<span class="token keyword">return</span> isPresent</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、for-range" tabindex="-1"><a class="header-anchor" href="#_2、for-range"><span>2、for-range</span></a></h2>
<p><code v-pre>map</code>类型的<code v-pre>for-range</code>，第一个参数为<code v-pre>key</code>，第二个参数为<code v-pre>value</code>，没有<code v-pre>index</code>，因为是无序的。
使用案例：</p>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">"fmt"</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	datamap <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	datamap<span class="token punctuation">[</span><span class="token string">"波尔布特"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"极端"</span></span>
<span class="line">	datamap<span class="token punctuation">[</span><span class="token string">"张伟"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"大众"</span></span>
<span class="line">	datamap<span class="token punctuation">[</span><span class="token string">"詹姆斯"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"强大"</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> datamap <span class="token punctuation">{</span></span>
<span class="line">		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"键为:%s,值为:%s"</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


