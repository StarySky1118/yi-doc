import{_ as n,c as s,o as a,a as e}from"./app-B6JmyODB.js";const p={},t=e(`<h1 id="七、结构体与方法" tabindex="-1"><a class="header-anchor" href="#七、结构体与方法"><span>七、结构体与方法</span></a></h1><p>结构体也是<strong>值类型</strong>，因此可以通过<code>new()</code>函数来创建。组成结构体类型的那些数据称为<strong>字段（fields）</strong>。</p><h2 id="_1、结构体定义" tabindex="-1"><a class="header-anchor" href="#_1、结构体定义"><span>1、结构体定义</span></a></h2><p>结构体定义格式：</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">type</span> identifier <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">    field1 type1</span>
<span class="line">    field2 type2</span>
<span class="line">    <span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>赋值语法如下：</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">var</span> s T</span>
<span class="line">s<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">5</span></span>
<span class="line">s<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">8</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用<code>new()</code>创建结构体零值，并返回指针：</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line">t <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>T<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在 Go 中，<code>.</code>称为选择器，无论变量是一个结构体类型还是一个结构体类型指针，都使用同样的<strong>选择器符</strong>来引用结构体的字段：</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// 家庭住址</span></span>
<span class="line">	<span class="token keyword">type</span> Address <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">		no <span class="token builtin">int</span></span>
<span class="line">		detail <span class="token builtin">string</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">type</span> VCard <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">		name <span class="token builtin">string</span></span>
<span class="line">		address <span class="token operator">*</span>Address</span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	myAddress <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>Address<span class="token punctuation">)</span></span>
<span class="line">	myAddress<span class="token punctuation">.</span>no <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">	myAddress<span class="token punctuation">.</span>detail <span class="token operator">=</span> <span class="token string">&quot;山东省济南市&quot;</span></span>
<span class="line"></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>myAddress<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	myVCard <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>VCard<span class="token punctuation">)</span></span>
<span class="line">	myVCard<span class="token punctuation">.</span>address <span class="token operator">=</span> myAddress</span>
<span class="line">	myVCard<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;张三&quot;</span></span>
<span class="line"></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>myVCard<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、使用工厂方法创建结构体实例" tabindex="-1"><a class="header-anchor" href="#_2、使用工厂方法创建结构体实例"><span>2、使用工厂方法创建结构体实例</span></a></h2><p>Go 语言不支持面向对象编程语言中那样的构造子方法，但是可以很容易的在 Go 中实现&quot;构造子工厂&quot;方法。为了方便通常会为类型定义一个工厂，按惯例，工厂的名字以<code>new</code>或<code>New</code>开头。</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">(</span></span>
<span class="line">	<span class="token string">&quot;fmt&quot;</span></span>
<span class="line">	<span class="token string">&quot;unsafe&quot;</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 文件结构体</span></span>
<span class="line"><span class="token keyword">type</span> File <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// 文件名</span></span>
<span class="line">	name <span class="token builtin">string</span></span>
<span class="line">	<span class="token comment">// 后缀名</span></span>
<span class="line">	suffix <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	fp <span class="token operator">:=</span> <span class="token function">NewFile</span><span class="token punctuation">(</span><span class="token string">&quot;明日方舟&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.jpg&quot;</span><span class="token punctuation">)</span></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>unsafe<span class="token punctuation">.</span><span class="token function">Sizeof</span><span class="token punctuation">(</span><span class="token operator">*</span>fp<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">NewFile</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> suffix <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>File <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token operator">&amp;</span>File<span class="token punctuation">{</span>name<span class="token punctuation">,</span> suffix<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过将结构体首字母小写，只提供工厂方法，可强制使用工厂方法创建结构体实例。</p><h2 id="_3、方法" tabindex="-1"><a class="header-anchor" href="#_3、方法"><span>3、方法</span></a></h2><h3 id="_1-概念" tabindex="-1"><a class="header-anchor" href="#_1-概念"><span>(1) 概念</span></a></h3><p>Go 方法是作用在接收者上的一个函数，接收者是某种类型的变量。一个类型加上它的方法等价于面向对象中的一个类。一个重要的区别是：在 Go 中，类型的代码和绑定在它上面的方法的代码可以不放置在一起，它们可以存在在不同的源文件，唯一的要求是：它们必须是同一个包的。 方法定义语法：</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token punctuation">(</span>recv receiver_type<span class="token punctuation">)</span> <span class="token function">methodName</span><span class="token punctuation">(</span>parameter_list<span class="token punctuation">)</span> <span class="token punctuation">(</span>return_value_list<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><code>recv</code>就像是面向对象语言中的<code>this</code>或<code>self</code>，但是 Go 中并没有这两个关键字。随个人喜好，可以使用<code>this</code>或<code>self</code>作为接收者的名字。</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 文件结构体</span></span>
<span class="line"><span class="token keyword">type</span> file <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// 文件名</span></span>
<span class="line">	name <span class="token builtin">string</span></span>
<span class="line">	<span class="token comment">// 后缀</span></span>
<span class="line">	suffix <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 工厂方法</span></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">NewFile</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> suffix <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>file <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token operator">&amp;</span>file<span class="token punctuation">{</span>name<span class="token punctuation">,</span> suffix<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// getter</span></span>
<span class="line"><span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>file<span class="token punctuation">)</span> <span class="token function">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">return</span> this<span class="token punctuation">.</span>name</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>file<span class="token punctuation">)</span> <span class="token function">Suffix</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">return</span> this<span class="token punctuation">.</span>suffix</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// toString</span></span>
<span class="line"><span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>file<span class="token punctuation">)</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">return</span> this<span class="token punctuation">.</span>name <span class="token operator">+</span> this<span class="token punctuation">.</span>suffix</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	fp <span class="token operator">:=</span> <span class="token function">NewFile</span><span class="token punctuation">(</span><span class="token string">&quot;明日方舟&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.exe&quot;</span><span class="token punctuation">)</span></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>fp<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-getter-setter" tabindex="-1"><a class="header-anchor" href="#_2-getter-setter"><span>(2) getter &amp; setter</span></a></h3><p>使用方法可以实现<code>getter</code>和<code>setter</code>。</p><h3 id="_3-内嵌类型方法与继承" tabindex="-1"><a class="header-anchor" href="#_3-内嵌类型方法与继承"><span>(3) 内嵌类型方法与继承</span></a></h3><p>当一个匿名类型被内嵌在结构体中时，匿名类型的可见方法也同样被内嵌，这在效果上等同于外层类型<strong>继承</strong>了这些方法：</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/*引擎*/</span></span>
<span class="line"><span class="token keyword">type</span> engine <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 引擎启动</span></span>
<span class="line"><span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>engine<span class="token punctuation">)</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;星露谷物语，启动！&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 引擎关闭</span></span>
<span class="line"><span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>engine<span class="token punctuation">)</span> <span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;星露谷物语，关闭！&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/*汽车*/</span></span>
<span class="line"><span class="token keyword">type</span> car <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token operator">*</span>engine</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	e <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>engine<span class="token punctuation">)</span></span>
<span class="line">	e<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	car <span class="token operator">:=</span> car<span class="token punctuation">{</span>e<span class="token punctuation">}</span></span>
<span class="line">	car<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),l=[t];function i(c,o){return a(),s("div",null,l)}const d=n(p,[["render",i],["__file","7-结构体与方法.html.vue"]]),r=JSON.parse('{"path":"/dev/go/go_basic/7-%E7%BB%93%E6%9E%84%E4%BD%93%E4%B8%8E%E6%96%B9%E6%B3%95.html","title":"七、结构体与方法","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1、结构体定义","slug":"_1、结构体定义","link":"#_1、结构体定义","children":[]},{"level":2,"title":"2、使用工厂方法创建结构体实例","slug":"_2、使用工厂方法创建结构体实例","link":"#_2、使用工厂方法创建结构体实例","children":[]},{"level":2,"title":"3、方法","slug":"_3、方法","link":"#_3、方法","children":[{"level":3,"title":"(1) 概念","slug":"_1-概念","link":"#_1-概念","children":[]},{"level":3,"title":"(2) getter & setter","slug":"_2-getter-setter","link":"#_2-getter-setter","children":[]},{"level":3,"title":"(3) 内嵌类型方法与继承","slug":"_3-内嵌类型方法与继承","link":"#_3-内嵌类型方法与继承","children":[]}]}],"git":{"updatedTime":1721491077000,"contributors":[{"name":"ZhangZiYi","email":"ecustzzy1@163.com","commits":1}]},"filePathRelative":"dev/go/go_basic/7-结构体与方法.md"}');export{d as comp,r as data};
