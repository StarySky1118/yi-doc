import{_ as n,c as s,o as a,a as e}from"./app-B51Ae0sL.js";const p={},l=e(`<h1 id="八、接口与反射" tabindex="-1"><a class="header-anchor" href="#八、接口与反射"><span>八、接口与反射</span></a></h1><h2 id="_1、接口" tabindex="-1"><a class="header-anchor" href="#_1、接口"><span>1、接口</span></a></h2><p>接口定义了一组方法。接口定义格式：</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">type</span> Namer <span class="token keyword">interface</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Method1</span><span class="token punctuation">(</span>param_list<span class="token punctuation">)</span> return_type</span>
<span class="line">    <span class="token function">Method2</span><span class="token punctuation">(</span>param_list<span class="token punctuation">)</span> return_type</span>
<span class="line">    <span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按照约定，只包含一个方法的接口的名字由方法名加<code>[e]r</code>后缀组成，例如<code>Printer</code>、<code>Reader</code>、<code>Writer</code>、<code>Logger</code>、<code>Converter</code>等等。Go 语言中的接口都很简短，通常它们会包含 0 个、最多 3 个方法。接口类型的变量是一个<strong>指针</strong>，如下，变量<code>shaper</code>就是一个指针，通常程序控制其在运行时指向一个实现该接口的实例。</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">var</span> shaper Shaper</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>一个类型可以实现多个接口，接口和类型的桥梁只是函数。 接口的使用案例：</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> pi <span class="token operator">=</span> <span class="token number">3.1415</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Shaper 接口，有一个 Area() 方法</span></span>
<span class="line"><span class="token keyword">type</span> Shaper <span class="token keyword">interface</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token function">Area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 圆形</span></span>
<span class="line"><span class="token keyword">type</span> Circle <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// 半径</span></span>
<span class="line">	radius <span class="token builtin">float64</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 方形</span></span>
<span class="line"><span class="token keyword">type</span> Square <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// 边长</span></span>
<span class="line">	edge <span class="token builtin">float64</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Circle 实现 Shaper 接口</span></span>
<span class="line"><span class="token keyword">func</span> <span class="token punctuation">(</span>circle <span class="token operator">*</span>Circle<span class="token punctuation">)</span> <span class="token function">Area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">return</span> pi <span class="token operator">*</span> circle<span class="token punctuation">.</span>radius <span class="token operator">*</span> circle<span class="token punctuation">.</span>radius</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Square 实现 Shaper 接口</span></span>
<span class="line"><span class="token keyword">func</span> <span class="token punctuation">(</span>square <span class="token operator">*</span>Square<span class="token punctuation">)</span> <span class="token function">Area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">return</span> square<span class="token punctuation">.</span>edge <span class="token operator">*</span> square<span class="token punctuation">.</span>edge</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// Circle 实例</span></span>
<span class="line">	circle <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>Circle<span class="token punctuation">)</span></span>
<span class="line">	circle<span class="token punctuation">.</span>radius <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">	<span class="token comment">// Square 实例</span></span>
<span class="line">	square <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>Square<span class="token punctuation">)</span></span>
<span class="line">	square<span class="token punctuation">.</span>edge <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">var</span> shaper Shaper <span class="token operator">=</span> circle</span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>shaper<span class="token punctuation">.</span><span class="token function">Area</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">	shaper <span class="token operator">=</span> square</span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>shaper<span class="token punctuation">.</span><span class="token function">Area</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>上述代码中，<code>Shaper</code>接口包含<code>Area()</code>方法，类型<code>Circle</code>和<code>Square</code>均实现了<code>Shaper</code>接口。<code>shaper</code>变量是一个指针，它可以指向任何实现<code>Shaper</code>接口的实例。这便是 Go 版本的多态。</p></blockquote><h2 id="_2、接口嵌套" tabindex="-1"><a class="header-anchor" href="#_2、接口嵌套"><span>2、接口嵌套</span></a></h2><p>一个接口可以包含一个或多个其他的接口，如下所示：</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">type</span> ReadWrite <span class="token keyword">interface</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Read</span><span class="token punctuation">(</span>b Buffer<span class="token punctuation">)</span> <span class="token builtin">bool</span></span>
<span class="line">    <span class="token function">Write</span><span class="token punctuation">(</span>b Buffer<span class="token punctuation">)</span> <span class="token builtin">bool</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">type</span> Lock <span class="token keyword">interface</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">type</span> File <span class="token keyword">interface</span> <span class="token punctuation">{</span></span>
<span class="line">    ReadWrite</span>
<span class="line">    Lock</span>
<span class="line">    <span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>File</code>接口包含了<code>ReadWrite</code>和<code>Lock</code>接口。</p></blockquote><h2 id="_3、运行时类型推断" tabindex="-1"><a class="header-anchor" href="#_3、运行时类型推断"><span>3、运行时类型推断</span></a></h2><p>可以使用<strong>类型断言</strong>来测试在某个时刻接口变量<code>varI</code>是否包含类型<code>T</code>的值：</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line">varI<span class="token punctuation">.</span><span class="token punctuation">(</span>T<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> v<span class="token punctuation">,</span> ok <span class="token operator">:=</span> varI<span class="token punctuation">.</span><span class="token punctuation">(</span>T<span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>  <span class="token comment">// checked type assertion</span></span>
<span class="line">    <span class="token function">Process</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// varI is not of type T</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如果转换合法，<code>v</code>是<code>varI</code>转换到类型<code>T</code>的值，<code>ok</code>会是<code>true</code>；否则<code>v</code>是类型<code>T</code>的零值，<code>ok</code>是 <code>false</code>，也没有运行时错误发生。</p></blockquote><p>使用案例如下：</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">(</span></span>
<span class="line">	<span class="token string">&quot;fmt&quot;</span></span>
<span class="line">	<span class="token string">&quot;math&quot;</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 方形</span></span>
<span class="line"><span class="token keyword">type</span> Square <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	side <span class="token builtin">float32</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">func</span> <span class="token punctuation">(</span>sq <span class="token operator">*</span>Square<span class="token punctuation">)</span> <span class="token function">Area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float32</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">return</span> sq<span class="token punctuation">.</span>side <span class="token operator">*</span> sq<span class="token punctuation">.</span>side</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 圆形</span></span>
<span class="line"><span class="token keyword">type</span> Circle <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	radius <span class="token builtin">float32</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">func</span> <span class="token punctuation">(</span>ci <span class="token operator">*</span>Circle<span class="token punctuation">)</span> <span class="token function">Area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float32</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">return</span> ci<span class="token punctuation">.</span>radius <span class="token operator">*</span> ci<span class="token punctuation">.</span>radius <span class="token operator">*</span> math<span class="token punctuation">.</span>Pi</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Shaper 接口</span></span>
<span class="line"><span class="token keyword">type</span> Shaper <span class="token keyword">interface</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token function">Area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float32</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	circle <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>Circle<span class="token punctuation">)</span></span>
<span class="line">	circle<span class="token punctuation">.</span>radius <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">var</span> shaper Shaper <span class="token operator">=</span> circle</span>
<span class="line">	<span class="token keyword">if</span> v<span class="token punctuation">,</span> ok <span class="token operator">:=</span> shaper<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>Circle<span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span></span>
<span class="line">		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> ok<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;面积为:&quot;</span><span class="token punctuation">,</span> shaper<span class="token punctuation">.</span><span class="token function">Area</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>Circle</code>类型实现了<code>Shaper</code>接口，在运行时检测<code>shaper</code>变量指向<code>Circle</code>类型的实例。</p></blockquote><h2 id="_4、空接口" tabindex="-1"><a class="header-anchor" href="#_4、空接口"><span>4、空接口</span></a></h2><p><strong>空接口或者最小接口</strong>不包含任何方法，它对实现不做任何要求：</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">type</span> Any<span class="token operator">/</span>any <span class="token keyword">interface</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>任何其他类型都实现了空接口，空接口类似 Java 中所有类的基类：<code>Object</code>类。</p>`,24),c=[l];function t(i,o){return a(),s("div",null,c)}const d=n(p,[["render",t],["__file","8-接口与反射.html.vue"]]),r=JSON.parse('{"path":"/dev/go/go_basic/8-%E6%8E%A5%E5%8F%A3%E4%B8%8E%E5%8F%8D%E5%B0%84.html","title":"八、接口与反射","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1、接口","slug":"_1、接口","link":"#_1、接口","children":[]},{"level":2,"title":"2、接口嵌套","slug":"_2、接口嵌套","link":"#_2、接口嵌套","children":[]},{"level":2,"title":"3、运行时类型推断","slug":"_3、运行时类型推断","link":"#_3、运行时类型推断","children":[]},{"level":2,"title":"4、空接口","slug":"_4、空接口","link":"#_4、空接口","children":[]}],"git":{"updatedTime":1721491077000,"contributors":[{"name":"ZhangZiYi","email":"ecustzzy1@163.com","commits":1}]},"filePathRelative":"dev/go/go_basic/8-接口与反射.md"}');export{d as comp,r as data};
