<template><div><h1 id="四、unittest-框架" tabindex="-1"><a class="header-anchor" href="#四、unittest-框架"><span>四、UnitTest 框架</span></a></h1>
<h2 id="_1、unittest-基本使用" tabindex="-1"><a class="header-anchor" href="#_1、unittest-基本使用"><span>1、UnitTest 基本使用</span></a></h2>
<p>UnitTest 是 python 自带的测试框架，用于单元测试。
UnitTest 核心要素：</p>
<ul>
<li>TestCase：测试用例</li>
<li>TestSuite：测试套件</li>
<li>TextTestRunner：测试用例与测试套件执行器</li>
<li>TestLoader：测试套件加载器</li>
</ul>
<h3 id="_1-testcase" tabindex="-1"><a class="header-anchor" href="#_1-testcase"><span>(1) TestCase</span></a></h3>
<p>继承<code v-pre>unittest.TestCase</code>的类为测试类，测试类中以<code v-pre>test</code>开头的方法为测试方法，调用<code v-pre>unittest.main()</code>执行测试类中的所有方法。
<img src="@source/dev/test/web_test/img_60.png" alt="img_60.png"></p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">import</span> unittest</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 求和函数</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">return</span> x <span class="token operator">+</span> y</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 定义测试类：继承 unittest.TestCase</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Test02</span><span class="token punctuation">(</span>unittest<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 定义测试方法</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">test_add</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span>add<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">test_add01</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span>add<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 定义非测试方法</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">idiot_add</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span>add<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span></span>
<span class="line">    unittest<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-testsuite" tabindex="-1"><a class="header-anchor" href="#_2-testsuite"><span>(2) TestSuite</span></a></h3>
<p>多个测试用例(<code v-pre>TestCase</code>)集合在一起组成<code v-pre>TestSuite</code>。</p>
<p><img src="@source/dev/test/web_test/img_61.png" alt="img_61.png"></p>
<p><code v-pre>TestSuite</code>需要配合<code v-pre>TestRunner</code>才能被执行。</p>
<p><img src="@source/dev/test/web_test/img_62.png" alt="img_62.png"></p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token comment"># 导入单元测试</span></span>
<span class="line"><span class="token keyword">import</span> unittest</span>
<span class="line"><span class="token comment"># 导入测试用例</span></span>
<span class="line"><span class="token keyword">from</span> demo02 <span class="token keyword">import</span> Test02</span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 创建测试套件实例</span></span>
<span class="line">    suite <span class="token operator">=</span> unittest<span class="token punctuation">.</span>TestSuite<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 向测试套件中添加测试用例</span></span>
<span class="line">    <span class="token comment"># suite.addTest(Test02("test_add"))</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 向测试套件中添加所有测试方法</span></span>
<span class="line">    suite<span class="token punctuation">.</span>addTest<span class="token punctuation">(</span>unittest<span class="token punctuation">.</span>makeSuite<span class="token punctuation">(</span>Test02<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 执行测试套件</span></span>
<span class="line">    runner <span class="token operator">=</span> unittest<span class="token punctuation">.</span>TextTestRunner<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    runner<span class="token punctuation">.</span>run<span class="token punctuation">(</span>suite<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-testloader" tabindex="-1"><a class="header-anchor" href="#_3-testloader"><span>(3) <code v-pre>TestLoader</code></span></a></h3>
<p>批量将<code v-pre>TestCase</code>加载到<code v-pre>TestSuite</code>，加载符合条件的测试用例，封装成为测试套件。</p>
<p><img src="@source/dev/test/web_test/img_63.png" alt="img_63.png"></p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">import</span> unittest</span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 将目录下所有测试用例封装到测试套件中</span></span>
<span class="line">    suite <span class="token operator">=</span> unittest<span class="token punctuation">.</span>defaultTestLoader<span class="token punctuation">.</span>discover<span class="token punctuation">(</span><span class="token string">'../testIdiot'</span><span class="token punctuation">,</span> pattern<span class="token operator">=</span><span class="token string">'*Test.py'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 执行测试套件</span></span>
<span class="line">    runner <span class="token operator">=</span> unittest<span class="token punctuation">.</span>TextTestRunner<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    runner<span class="token punctuation">.</span>run<span class="token punctuation">(</span>suite<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code v-pre>TestSuite**</code>与<code v-pre>TestLoader</code></strong></p>
<p><code v-pre>TestSuite</code>是手动封装测试套件，可以指定封某个测试用例的某个测试方法；<code v-pre>TestLoader</code>可以批量封装测试套件，但只能封装<code v-pre>test</code>开头的测试方法。</p>
<h2 id="_2、fixture" tabindex="-1"><a class="header-anchor" href="#_2、fixture"><span>2、<code v-pre>Fixture</code></span></a></h2>
<p><code v-pre>Fixture</code>：对一个测试环境的初始化和销毁就是一个<code v-pre>Fixture</code>。
<code v-pre>Fixture</code>控制级别：</p>
<ul>
<li>方法</li>
<li>类</li>
<li>模块</li>
</ul>
<h3 id="_1-方法级别" tabindex="-1"><a class="header-anchor" href="#_1-方法级别"><span>(1) 方法级别</span></a></h3>
<p><img src="@source/dev/test/web_test/img_64.png" alt="img_64.png"></p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">import</span> unittest</span>
<span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">return</span> x <span class="token operator">+</span> y</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 定义测试用例</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">FixtureTest01</span><span class="token punctuation">(</span>unittest<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 前置处理</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">setUp</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token boolean">None</span><span class="token punctuation">:</span></span>
<span class="line">        self<span class="token punctuation">.</span>start_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 后置处理</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">tearDown</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token boolean">None</span><span class="token punctuation">:</span></span>
<span class="line">        execution_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> self<span class="token punctuation">.</span>start_time</span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"Execution time: </span><span class="token interpolation"><span class="token punctuation">{</span>execution_time<span class="token punctuation">}</span></span><span class="token string"> seconds"</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 测试方法</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">test_add</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span>add<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">test_add01</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span>add<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 封装测试套件</span></span>
<span class="line">    suite <span class="token operator">=</span> unittest<span class="token punctuation">.</span>TestSuite<span class="token punctuation">(</span>unittest<span class="token punctuation">.</span>makeSuite<span class="token punctuation">(</span>FixtureTest01<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment"># 执行测试套件</span></span>
<span class="line">    runner <span class="token operator">=</span> unittest<span class="token punctuation">.</span>TextTestRunner<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    runner<span class="token punctuation">.</span>run<span class="token punctuation">(</span>suite<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-类级别" tabindex="-1"><a class="header-anchor" href="#_2-类级别"><span>(2) 类级别</span></a></h3>
<p><img src="@source/dev/test/web_test/img_65.png" alt="img_65.png"></p>
<p><strong>使用案例</strong></p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">import</span> unittest</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 测试用例</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">FixtureTest01</span><span class="token punctuation">(</span>unittest<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 前置方法：类级别</span></span>
<span class="line">    <span class="token decorator annotation punctuation">@classmethod</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">setUpClass</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token boolean">None</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'测试类创建！'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 后置方法：类级别</span></span>
<span class="line">    <span class="token decorator annotation punctuation">@classmethod</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">tearDownClass</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token boolean">None</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'测试类销毁！'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">test_idiot1</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'测试方法1执行！'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">test_idiot2</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'测试方法2执行！'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 创建测试套件</span></span>
<span class="line">    suite <span class="token operator">=</span> unittest<span class="token punctuation">.</span>TestSuite<span class="token punctuation">(</span>unittest<span class="token punctuation">.</span>makeSuite<span class="token punctuation">(</span>FixtureTest01<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment"># 执行测试套件</span></span>
<span class="line">    runner <span class="token operator">=</span> unittest<span class="token punctuation">.</span>TextTestRunner<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    runner<span class="token punctuation">.</span>run<span class="token punctuation">(</span>suite<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Python 的<code v-pre>unittest</code>模块中，<code v-pre>@classmethod</code>是一个装饰器，用于声明类方法。类方法是定义在类上而不是实例上的方法，可以通过类本身直接调用，而无需创建类的实例。
在<code v-pre>unittest</code>中，<code v-pre>@classmethod</code>装饰器通常用于定义测试类中的类方法，即针对整个测试类而不是特定实例的方法。这些类方法常用于执行一些在整个测试类生命周期中只需要执行一次的操作，例如设置和清理测试环境。</p>
<blockquote>
<p>总结：
<code v-pre>setUp()</code>一般做初始化工作，如实例化浏览器驱动对象、最大化浏览器、设置隐式等待等
<code v-pre>tearDown()</code>一般做结束工作，如关闭浏览器驱动对象、退出登录等</p>
</blockquote>
<h2 id="_3、断言" tabindex="-1"><a class="header-anchor" href="#_3、断言"><span>3、断言</span></a></h2>
<p>断言：让程序判断执行结果是否符合预期。</p>
<p><code v-pre>unittest</code>常用的断言方法：</p>
<p><img src="@source/dev/test/web_test/img_66.png" alt="img_66.png"></p>
<p><img src="@source/dev/test/web_test/img_67.png" alt="img_67.png"></p>
<p>断言方法已经在<code v-pre>unittest.TestCase</code>类中定义好了，而且我们自定义的测试类已经继承了<code v-pre>TestCase</code>，所以在测试方法中直接调用即可。</p>
<h2 id="_4、综合案例" tabindex="-1"><a class="header-anchor" href="#_4、综合案例"><span>4、综合案例</span></a></h2>
<p><img src="@source/dev/test/web_test/img_68.png" alt="img_68.png"></p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">import</span> time</span>
<span class="line"><span class="token keyword">import</span> unittest</span>
<span class="line"><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver</span>
<span class="line"><span class="token keyword">from</span> datetime <span class="token keyword">import</span> datetime</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">TestLogin</span><span class="token punctuation">(</span>unittest<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 前置操作</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">setUp</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token boolean">None</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token comment"># 创建浏览器驱动对象</span></span>
<span class="line">        self<span class="token punctuation">.</span>browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token comment"># 打开指定 url</span></span>
<span class="line">        self<span class="token punctuation">.</span>browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">'https://www.tp-shop.cn/'</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token comment"># 最大化窗口</span></span>
<span class="line">        self<span class="token punctuation">.</span>browser<span class="token punctuation">.</span>maximize_window<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 后置操作</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">tearDown</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token boolean">None</span><span class="token punctuation">:</span></span>
<span class="line">        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line">        self<span class="token punctuation">.</span>browser<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">testLogin</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token comment"># 点击登录</span></span>
<span class="line">        login_btn <span class="token operator">=</span> self<span class="token punctuation">.</span>browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">'body > div.header.wi100 > div.nav > div > div.nav-list > ul > div > a:nth-child(1)'</span><span class="token punctuation">)</span></span>
<span class="line">        login_btn<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment"># 输入账号</span></span>
<span class="line">        self<span class="token punctuation">.</span>browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">'#loginform > div.login-name > input[type=text]'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">'zhangsan'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment"># 输入密码</span></span>
<span class="line">        self<span class="token punctuation">.</span>browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">'#loginform > div.login-password > input[type=password]'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">'123456'</span><span class="token punctuation">)</span></span>
<span class="line">        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment"># 直接点击登录</span></span>
<span class="line">        self<span class="token punctuation">.</span>browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">'#loginform > div.login-btn > input[type=submit]'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment"># 获取提示信息</span></span>
<span class="line">        prompt <span class="token operator">=</span> self<span class="token punctuation">.</span>browser\</span>
<span class="line">            <span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">'#layui-layer1 > div.layui-layer-content.layui-layer-padding'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>text</span>
<span class="line"></span>
<span class="line">        <span class="token comment"># 断言：提示信息是否为“验证码不能为空”</span></span>
<span class="line">        <span class="token keyword">try</span><span class="token punctuation">:</span></span>
<span class="line">            self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span>prompt<span class="token punctuation">,</span> <span class="token string">"验证码不能为空!"</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">except</span> AssertionError <span class="token keyword">as</span> e<span class="token punctuation">:</span></span>
<span class="line">            <span class="token comment"># 出现错误保存截图</span></span>
<span class="line">            self<span class="token punctuation">.</span>browser<span class="token punctuation">.</span>get_screenshot_as_file<span class="token punctuation">(</span><span class="token string">'D:\\learning\\softwareTest\\img\\test02.png'</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token comment"># 显式引发异常</span></span>
<span class="line">            <span class="token keyword">raise</span> e</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 封装测试套件</span></span>
<span class="line">    suite <span class="token operator">=</span> unittest<span class="token punctuation">.</span>TestSuite<span class="token punctuation">(</span>unittest<span class="token punctuation">.</span>makeSuite<span class="token punctuation">(</span>TestLogin<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment"># 执行测试套件</span></span>
<span class="line">    runner <span class="token operator">=</span> unittest<span class="token punctuation">.</span>TextTestRunner<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    runner<span class="token punctuation">.</span>run<span class="token punctuation">(</span>suite<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、参数化" tabindex="-1"><a class="header-anchor" href="#_5、参数化"><span>5、参数化</span></a></h2>
<p>通过参数化可以给同一测试方法传递不同测试数据，不同测试数据将分别用于测试。<code v-pre>unittest</code>测试框架，本身不支持参数化，但是可以通过安装<code v-pre>unittest</code>扩展插件<code v-pre>parameterized</code>来实现。</p>
<p><strong>使用方式</strong>
<img src="@source/dev/test/web_test/img_70.png" alt="img_70.png">
<img src="@source/dev/test/web_test/img_69.png" alt="img_69.png"></p>
<p><strong>使用案例</strong></p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">import</span> unittest</span>
<span class="line"><span class="token keyword">from</span> parameterized <span class="token keyword">import</span> parameterized</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">return</span> x<span class="token operator">+</span>y</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 测试用例</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">ParamTest</span><span class="token punctuation">(</span>unittest<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">    <span class="token decorator annotation punctuation">@parameterized<span class="token punctuation">.</span>expand</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">test_add</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> expect<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        result <span class="token operator">=</span> add<span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span></span>
<span class="line">        self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span>result<span class="token punctuation">,</span> expect<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 创建测试套件</span></span>
<span class="line">    suite <span class="token operator">=</span> unittest<span class="token punctuation">.</span>TestSuite<span class="token punctuation">(</span>unittest<span class="token punctuation">.</span>makeSuite<span class="token punctuation">(</span>ParamTest<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment"># 执行测试套件</span></span>
<span class="line">    runner <span class="token operator">=</span> unittest<span class="token punctuation">.</span>TextTestRunner<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    runner<span class="token punctuation">.</span>run<span class="token punctuation">(</span>suite<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6、跳过" tabindex="-1"><a class="header-anchor" href="#_6、跳过"><span>6、跳过</span></a></h2>
<p>跳过某些测试类和测试函数。</p>
<p><img src="@source/dev/test/web_test/img_72.png" alt="img_72.png"></p>
<p><strong>使用案例</strong></p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">import</span> unittest</span>
<span class="line"></span>
<span class="line">version <span class="token operator">=</span> <span class="token number">30</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">return</span> x<span class="token operator">+</span>y</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">sub</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">return</span> x<span class="token operator">-</span>y</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 测试用例</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">ParamTest</span><span class="token punctuation">(</span>unittest<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token decorator annotation punctuation">@unittest<span class="token punctuation">.</span>skip</span><span class="token punctuation">(</span><span class="token string">'代码未完成'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">test_add</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        result <span class="token operator">=</span> add<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line">        self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span>result<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token decorator annotation punctuation">@unittest<span class="token punctuation">.</span>skipIf</span><span class="token punctuation">(</span>version <span class="token operator">></span> <span class="token number">35</span><span class="token punctuation">,</span> <span class="token string">'版本过高，无法测试！'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">test_sub</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        result <span class="token operator">=</span> sub<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">        self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span>result<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 创建测试套件</span></span>
<span class="line">    suite <span class="token operator">=</span> unittest<span class="token punctuation">.</span>TestSuite<span class="token punctuation">(</span>unittest<span class="token punctuation">.</span>makeSuite<span class="token punctuation">(</span>ParamTest<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment"># 执行测试套件</span></span>
<span class="line">    runner <span class="token operator">=</span> unittest<span class="token punctuation">.</span>TextTestRunner<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    runner<span class="token punctuation">.</span>run<span class="token punctuation">(</span>suite<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


