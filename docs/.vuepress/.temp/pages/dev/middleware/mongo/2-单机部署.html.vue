<template><div><h1 id="二、单机部署" tabindex="-1"><a class="header-anchor" href="#二、单机部署"><span>二、单机部署</span></a></h1>
<h2 id="_1、windows-中部署" tabindex="-1"><a class="header-anchor" href="#_1、windows-中部署"><span>1、Windows 中部署</span></a></h2>
<h3 id="_1-安装包下载" tabindex="-1"><a class="header-anchor" href="#_1-安装包下载"><span>(1) 安装包下载</span></a></h3>
<p><a href="https://www.mongodb.com/try/download/community" target="_blank" rel="noopener noreferrer">https://www.mongodb.com/try/download/community</a>
<img src="/images/dev/middleware/mongo/installer.png" alt="image.png"></p>
<blockquote>
<p>MongoDB 的版本命名规范如：<code v-pre>x.y.z</code></p>
<ul>
<li><code v-pre>y</code>为奇数时表示当前版本为开发版，如：1.5.2、4.1.13</li>
<li><code v-pre>y</code>为偶数时表示当前版本为稳定版，如：1.6.3、4.0.10</li>
<li><code v-pre>z</code>是修正版本号，数字越大越好。</li>
</ul>
</blockquote>
<h3 id="_2-解压" tabindex="-1"><a class="header-anchor" href="#_2-解压"><span>(2) 解压</span></a></h3>
<p>在解压目录中，手动建立一个目录用于存放数据文件，如<code v-pre>data</code>
<img src="/images/dev/middleware/mongo/unzip.png" alt="image.png"></p>
<h3 id="_3-编写配置文件并启动" tabindex="-1"><a class="header-anchor" href="#_3-编写配置文件并启动"><span>(3) 编写配置文件并启动</span></a></h3>
<p>在解压目录中新建<code v-pre>config</code>文件夹，该文件夹中新建配置文件<code v-pre>mongod.conf</code>，内容参考如下：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">storage:</span>
<span class="line"> <span class="token comment">#The directory where the mongod instance stores its data.Default Value is "\data\db" on Windows.</span></span>
<span class="line"> dbPath: D:<span class="token punctuation">\</span>software2<span class="token punctuation">\</span>MongoDB<span class="token punctuation">\</span>mongodb-win32-x86_64-2008plus-ssl-4.0.12<span class="token punctuation">\</span>data</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>配置文件中不能以Tab分割字段，使用空格。</p>
</blockquote>
<p>启动命令：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">mongod <span class="token parameter variable">-f</span> <span class="token punctuation">..</span>/config/mongod.conf</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="连接测试" tabindex="-1"><a class="header-anchor" href="#连接测试"><span>连接测试</span></a></h3>
<p>命令行输入：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">mongo</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="/images/dev/middleware/mongo/2-connect.png" alt="image.png">
使用 MongoDB Compass 也可。<a href="https://www.mongodb.com/try/download/compass" target="_blank" rel="noopener noreferrer">https://www.mongodb.com/try/download/compass</a></p>
<h2 id="_2、linux-中部署" tabindex="-1"><a class="header-anchor" href="#_2、linux-中部署"><span>2、Linux 中部署</span></a></h2>
<p>Linux 单机部署见文档。</p>
</div></template>


