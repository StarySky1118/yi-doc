<template><div><h1 id="三、控制结构" tabindex="-1"><a class="header-anchor" href="#三、控制结构"><span>三、控制结构</span></a></h1>
<p>Go 提供了下面这些条件结构和分支结构：</p>
<ul>
<li>if-else 结构</li>
<li>switch 结构</li>
<li>select 结构</li>
</ul>
<p>可以使用迭代或循环结构来重复执行一次或多次某段代码（任务）：</p>
<ul>
<li>for (range) 结构</li>
</ul>
<p>一些如<code v-pre>break</code>和<code v-pre>continue</code>这样的关键字可以用于中途改变循环的状态。
此外，你还可以使用<code v-pre>return</code>来结束某个函数的执行，或使用<code v-pre>goto</code>和标签来调整程序的执行位置。
Go 完全省略了<code v-pre>if</code>、<code v-pre>switch</code>和<code v-pre>for</code>结构中条件语句两侧的括号，相比 Java、C++ 和 C# 中减少了很多视觉混乱的因素，同时也使你的代码更加简洁。</p>
<h2 id="_1、if-else" tabindex="-1"><a class="header-anchor" href="#_1、if-else"><span>1、if-else</span></a></h2>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">if</span> condition <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// do something	</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">if</span> condition <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// do something	</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// do something	</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">if</span> condition1 <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// do something	</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> condition2 <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// do something else	</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// catch-all or default</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>即使当代码块之间只有一条语句时，大括号也不可被省略。
关键字<code v-pre>if</code>和<code v-pre>else</code>之后的左大括号<code v-pre>{</code>必须和关键字在同一行，如果你使用了<code v-pre>else-if</code>结构，则前段代码块的右大括号<code v-pre>}</code>必须和<code v-pre>else-if</code>关键字在同一行。
<code v-pre>if</code>可以包含一个初始化语句，使用简短方式<code v-pre>:=</code>声明的变量的作用域只存在于 if 结构中（在 if 结构的大括号之间，如果使用 if-else 结构则在 else 代码块中变量也会存在）。如果变量在 if 结构之前就已经存在，那么在 if 结构中，该变量原来的值会被隐藏。</p>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">if</span> initialization<span class="token punctuation">;</span> condition <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// do something</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">(</span></span>
<span class="line">	<span class="token string">"fmt"</span></span>
<span class="line">	<span class="token string">"runtime"</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">if</span> os <span class="token operator">:=</span> runtime<span class="token punctuation">.</span>GOOS<span class="token punctuation">;</span> os <span class="token operator">==</span> <span class="token string">"windows"</span> <span class="token punctuation">{</span></span>
<span class="line">		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"都什么年代了，还在用传统windows"</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code v-pre>if</code>判断错误的产生：</p>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line">value<span class="token punctuation">,</span> err <span class="token operator">:=</span> pack1<span class="token punctuation">.</span><span class="token function">Function1</span><span class="token punctuation">(</span>param1<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"An error occured in pack1.Function1 with parameter %v"</span><span class="token punctuation">,</span> param1<span class="token punctuation">)</span></span>
<span class="line">	<span class="token keyword">return</span> err</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 未发生错误，继续执行</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、switch" tabindex="-1"><a class="header-anchor" href="#_2、switch"><span>2、switch</span></a></h2>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">switch</span> var1 <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">case</span> val1<span class="token punctuation">:</span></span>
<span class="line">		<span class="token operator">...</span></span>
<span class="line">	<span class="token keyword">case</span> val2<span class="token punctuation">:</span></span>
<span class="line">		<span class="token operator">...</span></span>
<span class="line">	<span class="token keyword">default</span><span class="token punctuation">:</span></span>
<span class="line">		<span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前花括号<code v-pre>{</code>必须和<code v-pre>switch</code>关键字在同一行。不需要特别使用<code v-pre>break</code>语句来表示结束。程序也不会自动地去执行下一个分支的代码。如果在执行完每个分支的代码后，还希望继续执行后续分支的代码，可以使用<code v-pre>fallthrough</code>关键字来达到目的。
Go 的<code v-pre>switch</code>比较灵活：</p>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">switch</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">case</span> i <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">:</span></span>
<span class="line">		<span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token keyword">case</span> i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span></span>
<span class="line">		<span class="token function">f2</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token keyword">case</span> i <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">:</span></span>
<span class="line">		<span class="token function">f3</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初始化并判断：</p>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">switch</span> initialization <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">case</span> val1<span class="token punctuation">:</span></span>
<span class="line">		<span class="token operator">...</span></span>
<span class="line">	<span class="token keyword">case</span> val2<span class="token punctuation">:</span></span>
<span class="line">		<span class="token operator">...</span></span>
<span class="line">	<span class="token keyword">default</span><span class="token punctuation">:</span></span>
<span class="line">		<span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">"fmt"</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">var</span> outputStr <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">switch</span> isExtreme <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">case</span> isExtreme <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span></span>
<span class="line">			outputStr <span class="token operator">=</span> <span class="token string">"波尔布特疑似有点太极端了"</span></span>
<span class="line">		<span class="token keyword">case</span> isExtreme <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span></span>
<span class="line">			outputStr <span class="token operator">=</span> <span class="token string">"波尔布特疑似有点太城市化了"</span></span>
<span class="line">		<span class="token keyword">default</span><span class="token punctuation">:</span></span>
<span class="line">			outputStr <span class="token operator">=</span> <span class="token string">"祖波人"</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>outputStr<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、for" tabindex="-1"><a class="header-anchor" href="#_3、for"><span>3、for</span></a></h2>
<p>想要重复执行某些语句，Go 语言中只有<code v-pre>for</code>结构可以使用。</p>
<h3 id="_1-基于计数器的迭代" tabindex="-1"><a class="header-anchor" href="#_1-基于计数器的迭代"><span>(1) 基于计数器的迭代</span></a></h3>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">for</span> 初始化语句<span class="token punctuation">;</span> 条件语句<span class="token punctuation">;</span> 修饰语句 <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">"fmt"</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span></span>
<span class="line">		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"This is the %d iteration\n"</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样的，左花括号<code v-pre>{</code>必须和<code v-pre>for</code>语句在同一行，计数器的生命周期在遇到右花括号<code v-pre>}</code>时便终止。一般习惯使用<code v-pre>i</code>、<code v-pre>j</code>、<code v-pre>z</code>或<code v-pre>ix</code>等较短的名称命名计数器。
永远不要在循环体内修改计数器，这在任何语言中都是非常差的实践！</p>
<h3 id="_2-基于条件判断的迭代" tabindex="-1"><a class="header-anchor" href="#_2-基于条件判断的迭代"><span>(2) 基于条件判断的迭代</span></a></h3>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">"fmt"</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">var</span> i <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">5</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">for</span> i <span class="token operator">>=</span> <span class="token number">0</span> <span class="token punctuation">{</span></span>
<span class="line">		i <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"The variable i is now: %d\n"</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-for-range" tabindex="-1"><a class="header-anchor" href="#_3-for-range"><span>(3) for-range</span></a></h3>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">for</span> ix<span class="token punctuation">,</span> val <span class="token operator">:=</span> <span class="token keyword">range</span> coll <span class="token punctuation">{</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">for</span> pos<span class="token punctuation">,</span> char <span class="token operator">:=</span> <span class="token keyword">range</span> str <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、标签与goto" tabindex="-1"><a class="header-anchor" href="#_4、标签与goto"><span>4、标签与<code v-pre>goto</code></span></a></h2>
<p>不鼓励使用标签和<code v-pre>goto</code>语句。
如果您必须使用<code v-pre>goto</code>，应当只使用正序的标签（标签位于<code v-pre>goto</code>语句之后），但注意标签和<code v-pre>goto</code>语句之间不能出现定义新变量的语句，否则会导致编译失败。</p>
</div></template>


