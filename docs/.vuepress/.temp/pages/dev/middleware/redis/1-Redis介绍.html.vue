<template><div><h1 id="一、简介与入门" tabindex="-1"><a class="header-anchor" href="#一、简介与入门"><span>一、简介与入门</span></a></h1>
<h2 id="_1、sql-与-nosql" tabindex="-1"><a class="header-anchor" href="#_1、sql-与-nosql"><span>1、SQL 与 NoSQL</span></a></h2>
<p><img src="@source/dev/middleware/redis/img.png" alt="img.png">
<img src="@source/dev/middleware/redis/img_1.png" alt="img_1.png"></p>
<h2 id="_2、redis" tabindex="-1"><a class="header-anchor" href="#_2、redis"><span>2、Redis</span></a></h2>
<p>Redis(Remote Dictionary Server, 远程词典服务器)：是一个基于内存的键值型 NoSQL 数据库。
<img src="@source/dev/middleware/redis/img_2.png" alt="img_2.png"></p>
<h2 id="_3、安装-redis" tabindex="-1"><a class="header-anchor" href="#_3、安装-redis"><span>3、安装 Redis</span></a></h2>
<p>大多数企业都是基于Linux服务器来部署项目，而且Redis官方也没有提供Windows版本的安装包。</p>
<h3 id="_1-单机安装-redis" tabindex="-1"><a class="header-anchor" href="#_1-单机安装-redis"><span>(1) 单机安装 Redis</span></a></h3>
<h4 id="_1-安装redis依赖" tabindex="-1"><a class="header-anchor" href="#_1-安装redis依赖"><span>1. 安装Redis依赖</span></a></h4>
<p>Redis是基于C语言编写的，因此首先需要安装Redis所需要的gcc依赖：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">yum <span class="token function">install</span> <span class="token parameter variable">-y</span> gcc tcl</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="_2-上传安装包并解压" tabindex="-1"><a class="header-anchor" href="#_2-上传安装包并解压"><span>2. 上传安装包并解压</span></a></h4>
<p>然后将课前资料提供的Redis安装包上传到虚拟机的任意目录：</p>
<p><img src="@source/dev/middleware/redis/img_3.png" alt="img_3.png"></p>
<p>例如，我放到了/usr/local/src 目录：</p>
<p><img src="@source/dev/middleware/redis/img_4.png" alt="img_4.png"></p>
<p>解压缩：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">tar</span> <span class="token parameter variable">-zvxf</span> redis-6.2.6.tar.gz</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>解压后：
<img src="@source/dev/middleware/redis/img_5.png" alt="img_5.png"></p>
<p>进入redis目录：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token builtin class-name">cd</span> redis-6.2.6</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>运行编译命令：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>如果没有出错，应该就安装成功了。
默认的安装路径是在 <code v-pre>/usr/local/bin</code>目录下：</p>
<p><img src="@source/dev/middleware/redis/img_6.png" alt="img_6.png"></p>
<p>该目录以及默认配置到环境变量，因此可以在任意目录下运行这些命令。其中：</p>
<ul>
<li>redis-cli：是redis提供的命令行客户端</li>
<li>redis-server：是redis的服务端启动脚本</li>
<li>redis-sentinel：是redis的哨兵启动脚本</li>
</ul>
<h4 id="_3-启动" tabindex="-1"><a class="header-anchor" href="#_3-启动"><span>3. 启动</span></a></h4>
<p><strong>默认启动</strong>
任意目录下，输入：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">redis-server</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="@source/dev/middleware/redis/img_7.png" alt="img_7.png"></p>
<p>此为前台启动。
<strong>指定配置启动</strong>
修改Redis配置文件，就在我们之前解压的redis安装包下（/usr/local/src/redis-6.2.6），名字叫<code v-pre>redis.conf</code>：</p>
<p><img src="@source/dev/middleware/redis/img_8.png" alt="img_8.png"></p>
<p>我们先将这个配置文件备份一份：
<code v-pre>cp redis.conf redis.conf.bck</code>
然后修改redis.conf文件中的一些配置：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 允许访问的地址，默认是127.0.0.1，会导致只能在本地访问。修改为0.0.0.0则可以在任意IP访问，生产环境不要设置为0.0.0.0</span></span>
<span class="line"><span class="token builtin class-name">bind</span> <span class="token number">0.0</span>.0.0</span>
<span class="line"><span class="token comment"># 守护进程，修改为yes后即可后台运行</span></span>
<span class="line">daemonize <span class="token function">yes</span> </span>
<span class="line"><span class="token comment"># 密码，设置后访问Redis必须输入密码</span></span>
<span class="line">requirepass <span class="token number">123321</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Redis的其它常见配置：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 监听的端口</span></span>
<span class="line">port <span class="token number">6379</span></span>
<span class="line"><span class="token comment"># 工作目录，默认是当前目录，也就是运行redis-server时的命令，日志、持久化等文件会保存在这个目录</span></span>
<span class="line"><span class="token function">dir</span> <span class="token builtin class-name">.</span></span>
<span class="line"><span class="token comment"># 数据库数量，设置为1，代表只使用1个库，默认有16个库，编号0~15</span></span>
<span class="line">databases <span class="token number">1</span></span>
<span class="line"><span class="token comment"># 设置redis能够使用的最大内存</span></span>
<span class="line">maxmemory 512mb</span>
<span class="line"><span class="token comment"># 日志文件，默认为空，不记录日志，可以指定日志文件名</span></span>
<span class="line">logfile <span class="token string">"redis.log"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动Redis：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 进入redis安装目录 </span></span>
<span class="line"><span class="token builtin class-name">cd</span> /usr/local/src/redis-6.2.6</span>
<span class="line"><span class="token comment"># 启动</span></span>
<span class="line">redis-server redis.conf</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>停止服务：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 利用redis-cli来执行 shutdown 命令，即可停止 Redis 服务，</span></span>
<span class="line"><span class="token comment"># 因为之前配置了密码，因此需要通过 -u 来指定密码</span></span>
<span class="line">redis-cli <span class="token parameter variable">-u</span> <span class="token number">123321</span> <span class="token function">shutdown</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>开机自启</strong></p>
<p>我们也可以通过配置来实现开机自启。
首先，新建一个系统服务文件：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">vi</span> /etc/systemd/system/redis.service</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>内容如下：</p>
<div class="language-nginx line-numbers-mode" data-highlighter="prismjs" data-ext="nginx" data-title="nginx"><pre v-pre><code><span class="line">[Unit]</span>
<span class="line">Description=redis-server</span>
<span class="line">After=network.target</span>
<span class="line"></span>
<span class="line">[Service]</span>
<span class="line">Type=forking</span>
<span class="line">ExecStart=/usr/local/bin/redis-server /usr/local/src/redis-6.2.6/redis.conf</span>
<span class="line">PrivateTmp=true</span>
<span class="line"></span>
<span class="line">[Install]</span>
<span class="line">WantedBy=multi-user.target</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后重载系统服务：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">systemctl daemon-reload</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>现在，我们可以用下面这组命令来操作redis了：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 启动</span></span>
<span class="line">systemctl start redis</span>
<span class="line"><span class="token comment"># 停止</span></span>
<span class="line">systemctl stop redis</span>
<span class="line"><span class="token comment"># 重启</span></span>
<span class="line">systemctl restart redis</span>
<span class="line"><span class="token comment"># 查看状态</span></span>
<span class="line">systemctl status redis</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行下面的命令，可以让redis开机自启：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">systemctl <span class="token builtin class-name">enable</span> redis</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-redis-客户端" tabindex="-1"><a class="header-anchor" href="#_2-redis-客户端"><span>(2) Redis 客户端</span></a></h3>
<p><strong>命令行客户端</strong></p>
<p>Redis安装完成后就自带了命令行客户端：redis-cli，使用方式如下：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">redis-cli <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span>commonds<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>其中常见的options有：</p>
<ul>
<li><code v-pre>-h 127.0.0.1</code>：指定要连接的redis节点的IP地址，默认是127.0.0.1</li>
<li><code v-pre>-p 6379</code>：指定要连接的redis节点的端口，默认是6379</li>
<li><code v-pre>-a 123321</code>：指定redis的访问密码</li>
</ul>
<p>其中的commonds就是Redis的操作命令，例如：</p>
<ul>
<li><code v-pre>ping</code>：与redis服务端做心跳测试，服务端正常会返回<code v-pre>pong</code></li>
</ul>
<p>不指定commond时，会进入<code v-pre>redis-cli</code>的交互控制台：</p>
<p><img src="@source/dev/middleware/redis/img_9.png" alt="img_9.png"></p>
<p><strong>图形化 Redis 客户端</strong></p>
<p>在下面这个仓库可以找到安装包：<a href="https://github.com/lework/RedisDesktopManager-Windows/releases" target="_blank" rel="noopener noreferrer">https://github.com/lework/RedisDesktopManager-Windows/releases</a>
首先需要开放 6379 端口。</p>
</div></template>


