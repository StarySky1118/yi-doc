<template><div><h1 id="二、selenium-安装" tabindex="-1"><a class="header-anchor" href="#二、selenium-安装"><span>二、Selenium 安装</span></a></h1>
<h2 id="_1、selenium-介绍" tabindex="-1"><a class="header-anchor" href="#_1、selenium-介绍"><span>1、Selenium 介绍</span></a></h2>
<p><strong>特点</strong></p>
<p><img src="@source/dev/test/web_test/img.png" alt="img.png"></p>
<h2 id="_2、环境搭建" tabindex="-1"><a class="header-anchor" href="#_2、环境搭建"><span>2、环境搭建</span></a></h2>
<p>基于 Python 环境搭建</p>
<h3 id="_1-python-开发环境" tabindex="-1"><a class="header-anchor" href="#_1-python-开发环境"><span>(1) Python 开发环境</span></a></h3>
<p>安装 anaconda，并将如下三个路径添加到环境变量</p>
<p><code v-pre>D:\Users\Dy-sl\anaconda3\Library\bin</code>
<code v-pre>D:\development\Python\anaconda3\Scripts</code>：<code v-pre>conda.exe</code>所在地。</p>
<p>pycharm 配置 conda 环境：</p>
<p><img src="@source/dev/test/web_test/img_1.png" alt="img_1.png"></p>
<p>找到<code v-pre>conda.exe</code></p>
<h3 id="_2-安装-selenium-包" tabindex="-1"><a class="header-anchor" href="#_2-安装-selenium-包"><span>(2) 安装 selenium 包</span></a></h3>
<p><code v-pre>conda install selenium</code></p>
<h3 id="_3-安装浏览器" tabindex="-1"><a class="header-anchor" href="#_3-安装浏览器"><span>(3) 安装浏览器</span></a></h3>
<h3 id="_4-安装浏览器驱动" tabindex="-1"><a class="header-anchor" href="#_4-安装浏览器驱动"><span>(4) 安装浏览器驱动</span></a></h3>
<p>谷歌浏览器驱动：ChromeDriver
下载地址：<a href="https://sites.google.com/a/chromium.org/chromedriver/downloads" target="_blank" rel="noopener noreferrer">https://sites.google.com/a/chromium.org/chromedriver/downloads</a></p>
<p>ChromeDriver 是一个用于自动化控制和操作 Google Chrome 浏览器的开源工具。它是 Chrome 浏览器和 Selenium WebDriver 之间的桥接程序，允许开发人员使用各种编程语言（如 Python、Java、C# 等）与 Chrome 浏览器进行交互。</p>
<p>下载后解压，将驱动的可执行文件所在的目录添加到环境变量 path 中。
测试程序：</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver</span>
<span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建浏览器对象</span></span>
<span class="line">browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 浏览器打开指定 url</span></span>
<span class="line">browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">'https://www.baidu.com'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 休眠</span></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 关闭浏览器</span></span>
<span class="line">browser<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>出现问题</strong></p>
<p>描述：ValueError: Timeout value connect was ＜...＞, but it must be an int, float or None.
原因：Selenium版本和 urllib3 版本不兼容问题。
解决：
更换urllib3版本
<code v-pre>pip uninstall urllib3</code>
<code v-pre>pip install urllib3==1.26.2</code></p>
</div></template>


