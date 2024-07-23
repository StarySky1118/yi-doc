<template><div><h1 id="一、布局" tabindex="-1"><a class="header-anchor" href="#一、布局"><span>一、布局</span></a></h1>
<h2 id="_1、flex-布局" tabindex="-1"><a class="header-anchor" href="#_1、flex-布局"><span>1、Flex 布局</span></a></h2>
<h3 id="_1-相关概念" tabindex="-1"><a class="header-anchor" href="#_1-相关概念"><span>(1) 相关概念</span></a></h3>
<p>Flexible Box 模型，通常被称为 flexbox，是一种一维的布局模型。
flexbox 有两根轴：主轴和交叉轴。主轴由<code v-pre>flex-direction</code>定义，另一根轴垂直于它。</p>
<h4 id="主轴与交叉轴" tabindex="-1"><a class="header-anchor" href="#主轴与交叉轴"><span>主轴与交叉轴</span></a></h4>
<p>主轴由<code v-pre>flex-direction</code>指定。<code v-pre>flex-direction</code>可取 4 个值：</p>
<ul>
<li><code v-pre>row</code></li>
<li><code v-pre>row-reverse</code></li>
</ul>
<p><img src="@source/dev/front_end/css/img.png" alt="img.png"></p>
<ul>
<li><code v-pre>column</code></li>
<li><code v-pre>column-reverse</code></li>
</ul>
<p><img src="@source/dev/front_end/css/img_1.png" alt="img_1.png"></p>
<p>交叉轴垂直于主轴。</p>
<h3 id="_2-创建-flex-容器" tabindex="-1"><a class="header-anchor" href="#_2-创建-flex-容器"><span>(2) 创建 flex 容器</span></a></h3>
<p>文档中采用了 flexbox 的区域就叫做 flex 容器。通过<code v-pre>display: flex</code>创建 flex 容器。完成这一步之后，容器中的<strong>直系子元素</strong>就会变为 flex 元素。所有 CSS 属性都会有一个初始值，所以 flex 容器中的所有 flex 元素都会有下列行为：</p>
<ul>
<li>元素排列为一行 (<code v-pre>flex-direction</code>属性的初始值是<code v-pre>row</code>)。</li>
<li>元素从主轴的起始线开始。</li>
<li>元素不会在主维度方向拉伸，但是可以缩小。</li>
<li>元素被拉伸来填充交叉轴大小。</li>
<li><code v-pre>flex-basis</code>属性为<code v-pre>auto</code>，即元素大小尺寸。</li>
<li><code v-pre>flex-wrap</code>属性为<code v-pre>nowrap</code>，即不换行。</li>
</ul>
<h3 id="_3-使用flex-wrap换行" tabindex="-1"><a class="header-anchor" href="#_3-使用flex-wrap换行"><span>(3) 使用<code v-pre>flex-wrap</code>换行</span></a></h3>
<p>给属性<code v-pre>flex-wrap</code>添加一个属性值<code v-pre>wrap</code>实现多行效果。现在，如果您的项目太大而无法全部显示在一行中，则会换行显示。若将其设置为<code v-pre>nowrap</code>，这也是初始值，它们将会缩小以适应容器，因为它们使用的是允许缩小的初始 Flexbox 值。如果项目的子元素无法缩小，使用<code v-pre>nowrap</code>会导致溢出，或者缩小程度还不够小。
<img src="@source/dev/front_end/css/img_2.png" alt="img_2.png">
<img src="@source/dev/front_end/css/img_3.png" alt="img_3.png">
简写属性<code v-pre>flex-flow</code>=<code v-pre>flex-direction</code>, <code v-pre>flex-wrap</code></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.box</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">flex-flow</span><span class="token punctuation">:</span> row wrap<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/dev/front_end/css/img_4.png" alt="img_4.png"></p>
<h3 id="_4-flex-元素大小控制" tabindex="-1"><a class="header-anchor" href="#_4-flex-元素大小控制"><span>(4) flex 元素大小控制</span></a></h3>
<p>flex 元素的大小控制</p>
<ul>
<li><code v-pre>flex-grow</code></li>
<li><code v-pre>flex-shrink</code></li>
<li><code v-pre>flex-basis</code></li>
</ul>
<p>这几个 flex 属性的作用其实就是改变了 flex 容器中的可用空间(available space)的行为。
<code v-pre>flex-basis</code>定义了该元素的空间大小（the size of that item in terms of the space），flex 容器里除了元素所占的空间以外的富余空间就是可用空间。该属性的默认值是<code v-pre>auto</code>。此时，浏览器会检测这个元素是否具有确定的尺寸。在上面的例子中，所有元素都设定了宽度为 100px，所以<code v-pre>flex-basis</code>的值为 100px。如果没有给元素设定尺寸，<code v-pre>flex-basis</code>的值采用元素内容的尺寸。这就解释了：我们给只要给 flex 元素的父元素声明<code v-pre>display: flex</code>，所有子元素就会排成一行，且自动分配小大以充分展示元素的内容。
<code v-pre>flex-grow</code>若被赋值为一个正整数，flex 元素会以<code v-pre>flex-basis</code>为基础，沿主轴方向增长尺寸。这会使该元素延展，并占据此方向轴上的可用空间。如果有其他元素也被允许延展，那么他们会各自占据可用空间的一部分。如果我们给上例中的所有元素设定<code v-pre>flex-grow</code>值为 1，容器中的可用空间会被这些元素平分。它们会延展以填满容器主轴方向上的空间。<code v-pre>flex-grow</code>属性可以按比例分配空间。如果第一个元素 <code v-pre>flex-grow</code>值为 2，其他元素值为 1，则第一个元素将占有 2/4（上例中，即为 200px 中的 100px）, 另外两个元素各占有 1/4（各 50px）。
<code v-pre>flex-grow</code>属性是处理 flex 元素在主轴上增加空间的问题，相反<code v-pre>flex-shrink</code>属性是处理 flex 元素收缩的问题。如果我们的容器中没有足够排列 flex 元素的空间，那么可以把 flex 元素<code v-pre>flex-shrink</code>属性设置为正整数来缩小它所占空间到<code v-pre>flex-basis</code>以下。与<code v-pre>flex-grow</code>属性一样，可以赋予不同的值来控制 flex 元素收缩的程度 —— 给<code v-pre>flex-shrink</code>属性赋予更大的数值可以比赋予小数值的同级元素收缩程度更大。
在计算 flex 元素收缩的大小时，它的最小尺寸也会被考虑进去，就是说实际上<code v-pre>flex-shrink</code>属性可能会和<code v-pre>flex-grow</code>属性表现的不一致。
flex 属性简写：<code v-pre>flex-grow</code>, <code v-pre>flex-shrink</code>, <code v-pre>flex-basis</code>
<img src="@source/dev/front_end/css/img_5.png" alt="img_5.png"></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.box</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.one</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">flex</span><span class="token punctuation">:</span> 2 1 auto<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.two</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">flex</span><span class="token punctuation">:</span> 1 1 auto<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.three</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">flex</span><span class="token punctuation">:</span> 1 1 auto<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>预定义值</p>
<ul>
<li><code v-pre>flex: initial</code></li>
<li><code v-pre>flex: auto</code></li>
<li><code v-pre>flex: none</code></li>
<li><code v-pre>flex: &lt;positive-number&gt;</code></li>
</ul>
<p><code v-pre>flex: initial</code>是把 flex 元素重置为 Flexbox 的初始值，它相当于<code v-pre>flex: 0 1 auto</code>。在这里<code v-pre>flex-grow</code>的值为 0，所以 flex 元素不会超过它们<code v-pre>flex-basis</code>的尺寸。<code v-pre>flex-shrink</code>的值为 1, 所以可以缩小 flex 元素来防止它们溢出。<code v-pre>flex-basis</code>的值为<code v-pre>auto</code>。Flex 元素尺寸可以是在主维度上设置的，也可以是根据内容自动得到的。
<code v-pre>flex: auto</code>等同于<code v-pre>flex: 1 1 auto</code>；和上面的<code v-pre>flex:initial</code>基本相同，但是这种情况下，flex 元素在需要的时候既可以拉伸也可以收缩。
<code v-pre>flex: none</code>可以把 flex 元素设置为不可伸缩。它和设置为<code v-pre>flex: 0 0 auto</code>是一样的。元素既不能拉伸或者收缩，但是元素会按具有<code v-pre>flex-basis: auto</code>属性的 flexbox 进行布局。
你在教程中常看到的<code v-pre>flex: 1</code>或者<code v-pre>flex: 2</code>等等。它相当于<code v-pre>flex: 1 1 0</code>或者<code v-pre>flex: 2 1 0</code>。元素可以在<code v-pre>flex-basis 为 0</code>的基础上伸缩。
<img src="@source/dev/front_end/css/img_6.png" alt="img_6.png"></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.box</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.one</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">flex</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.two</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.three</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-元素间的对齐和空间分配" tabindex="-1"><a class="header-anchor" href="#_5-元素间的对齐和空间分配"><span>(5) 元素间的对齐和空间分配</span></a></h3>
<h4 id="交叉轴对齐align-items" tabindex="-1"><a class="header-anchor" href="#交叉轴对齐align-items"><span>交叉轴对齐<code v-pre>align-items</code></span></a></h4>
<p><code v-pre>align-items</code>属性可以使元素在交叉轴方向对齐。
这个属性的初始值为<code v-pre>stretch</code>，因此 flex 元素会默认被拉伸到最高元素的高度。</p>
<ul>
<li><code v-pre>stretch</code></li>
<li><code v-pre>flex-start</code></li>
<li><code v-pre>flex-end</code></li>
<li><code v-pre>center</code></li>
</ul>
<p><img src="@source/dev/front_end/css/img_7.png" alt="img_7.png">
<img src="@source/dev/front_end/css/img_8.png" alt="img_8.png">
<img src="@source/dev/front_end/css/img_9.png" alt="img_9.png">
<img src="@source/dev/front_end/css/img_10.png" alt="img_10.png"></p>
<h4 id="主轴对齐justify-content" tabindex="-1"><a class="header-anchor" href="#主轴对齐justify-content"><span>主轴对齐<code v-pre>justify-content</code></span></a></h4>
<p><code v-pre>justify-content</code>属性用来使元素在主轴方向上对齐</p>
<ul>
<li><code v-pre>stretch</code></li>
<li><code v-pre>flex-start</code></li>
<li><code v-pre>flex-end</code></li>
<li><code v-pre>center</code></li>
<li><code v-pre>space-around</code></li>
<li><code v-pre>space-between</code></li>
</ul>
<p><img src="@source/dev/front_end/css/img_11.png" alt="img_11.png">
<img src="@source/dev/front_end/css/img_12.png" alt="img_12.png">
<img src="@source/dev/front_end/css/img_13.png" alt="img_13.png">
<img src="@source/dev/front_end/css/img_14.png" alt="img_14.png">
<img src="@source/dev/front_end/css/img_15.png" alt="img_15.png"></p>
<h2 id="_2、grid-布局" tabindex="-1"><a class="header-anchor" href="#_2、grid-布局"><span>2、Grid 布局</span></a></h2>
<p><a href="https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html" target="_blank" rel="noopener noreferrer">CSS Grid 网格布局教程 - 阮一峰的网络日志</a></p>
</div></template>


