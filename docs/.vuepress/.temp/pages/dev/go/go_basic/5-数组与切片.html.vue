<template><div><h1 id="五、数组与切片" tabindex="-1"><a class="header-anchor" href="#五、数组与切片"><span>五、数组与切片</span></a></h1>
<h2 id="_1、数组声明与初始化" tabindex="-1"><a class="header-anchor" href="#_1、数组声明与初始化"><span>1、数组声明与初始化</span></a></h2>
<p>数组长度也是数组类型的一部分，<code v-pre>[5]int</code>和<code v-pre>[10]int</code>是属于不同类型的。Go 语言中的数组是一种<strong>值类型，<strong>因此可以通过<code v-pre>new()</code>来创建</strong>。</strong></p>
<blockquote>
<p>Go 语言中，<code v-pre>new()</code>可以得到某类型零值的指针。
在 Go 语言中，<code v-pre>new()</code>函数用于创建一个指向新分配的零值的指针。它的主要作用是为值类型（如整数、浮点数、结构体等）分配内存，并返回一个指向该内存的指针。这个指针指向的内存已经被初始化为零值。
语法如下：
<code v-pre>ptr := new(Type)</code></p>
</blockquote>
<h2 id="_2、切片" tabindex="-1"><a class="header-anchor" href="#_2、切片"><span>2、切片</span></a></h2>
<p>切片（slice）是对数组连续片段的引用（该数组我们称之为相关数组，通常是匿名的），所以切片是一个引用类型。这个片段可以是整个数组，或者是由起始和终止索引标识的一些项的子集。终止索引标识的项不包括在切片内。切片是可索引的，并且可以由<code v-pre>len()</code>函数获取长度。切片的长度可以在运行时修改，最小为 0 最大为相关数组的长度：切片是一个<strong>长度可变的数组</strong>。
切片提供了计算容量的函数<code v-pre>cap()</code>可以测量切片最长可以达到多少：最大为数组长度。多个切片如果表示同一个数组的片段，它们可以共享数据。
切片的声明：</p>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token comment">// 切片无需声明长度</span></span>
<span class="line"><span class="token keyword">var</span> identifier <span class="token punctuation">[</span><span class="token punctuation">]</span>TYPE</span>
<span class="line"></span>
<span class="line"><span class="token comment">// 初始化</span></span>
<span class="line"><span class="token keyword">var</span> slice1 <span class="token punctuation">[</span><span class="token punctuation">]</span>TYPE <span class="token operator">=</span> arr<span class="token punctuation">[</span>startIndex<span class="token punctuation">:</span>endIndex<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-将切片作为函数参数" tabindex="-1"><a class="header-anchor" href="#_1-将切片作为函数参数"><span>(1) 将切片作为函数参数</span></a></h3>
<p>将切片作为参数传递，可以避免数组拷贝。
例：计算数组和</p>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">"fmt"</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	numbers <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span>numbers<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 计算数组和</span></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">sum</span><span class="token punctuation">(</span>arrSlice <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">var</span> sum <span class="token builtin">int</span></span>
<span class="line">	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> val <span class="token operator">:=</span> <span class="token keyword">range</span> arrSlice <span class="token punctuation">{</span></span>
<span class="line">		sum <span class="token operator">+=</span> val</span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token keyword">return</span> sum</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-使用make-创建切片" tabindex="-1"><a class="header-anchor" href="#_2-使用make-创建切片"><span>(2) 使用<code v-pre>make()</code>创建切片</span></a></h3>
<p>相关数组还没有定义时，可以使用<code v-pre>make()</code>函数来创建一个切片同时创建好相关数组：</p>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line">slice <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">type</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">,</span> <span class="token builtin">cap</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


