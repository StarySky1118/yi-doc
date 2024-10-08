<template><div><h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>Docker</span></a></h1>
<h2 id="_1、docker-介绍" tabindex="-1"><a class="header-anchor" href="#_1、docker-介绍"><span>1、Docker 介绍</span></a></h2>
<p>大型项目组件较多，运行环境也较为复杂，部署时会碰到一些问题：</p>
<ul>
<li>依赖关系复杂，容易出现兼容性问题</li>
<li>开发、测试、生产环境有差异</li>
</ul>
<p>Docker 如何解决依赖的兼容问题的？</p>
<ul>
<li>将应用的Libs（函数库）、Deps（依赖）、配置与应用一起打包</li>
<li>将每个应用放到一个隔离容器去运行，避免互相干扰</li>
</ul>
<p>操作系统结构：
<img src="@source/dev/container/docker/img.png" alt="img.png">
Docker是一个快速交付应用、运行应用的技术：</p>
<ol>
<li>可以将程序及其依赖、运行环境一起打包为一个镜像，可以迁移到任意 Linux 操作系统</li>
<li>运行时利用沙箱机制形成隔离容器，各个应用互不干扰</li>
<li>启动、移除都可以通过一行命令完成，方便快捷</li>
</ol>
<h2 id="_2、docker-与虚拟机" tabindex="-1"><a class="header-anchor" href="#_2、docker-与虚拟机"><span>2、Docker 与虚拟机</span></a></h2>
<p>Docker 和虚拟机的差异：</p>
<ol>
<li>docker 是一个系统进程，虚拟机是在操作系统中的操作系统；</li>
<li>docker 体积小、启动速度快、性能好，虚拟机体积大、启动速度慢、性能一般。</li>
</ol>
<h2 id="_3、镜像和容器" tabindex="-1"><a class="header-anchor" href="#_3、镜像和容器"><span>3、镜像和容器</span></a></h2>
<p>镜像（Image）：Docker 将应用程序及其所需的依赖、函数库、环境、配置等文件打包在一起，称为镜像。
容器（Container）：镜像中的应用程序运行后形成的进程就是容器，只是 Docker 会给容器做隔离，对外不可见。
DockerHub：DockerHub 是一个 Docker 镜像的托管平台。这样的平台称为 Docker Registry。国内也有类似于 DockerHub 的公开服务，比如网易云镜像服务、阿里云镜像库等。
Docker 是一个 CS 架构的程序，由两部分组成：</p>
<ul>
<li>服务端(server)：Docker 守护进程，负责处理 Docker 指令，管理镜像、容器等；</li>
<li>客户端(client)：通过命令或 RestAPI 向 Docker 服务端发送指令。可以在本地或远程向服务端发送。</li>
</ul>
<h2 id="_4、安装-docker" tabindex="-1"><a class="header-anchor" href="#_4、安装-docker"><span>4、安装 Docker</span></a></h2>
<p>安装步骤</p>
<ol>
<li>卸载旧版本</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">yum remove <span class="token function">docker</span> <span class="token punctuation">\</span></span>
<span class="line">                  docker-client <span class="token punctuation">\</span></span>
<span class="line">                  docker-client-latest <span class="token punctuation">\</span></span>
<span class="line">                  docker-common <span class="token punctuation">\</span></span>
<span class="line">                  docker-latest <span class="token punctuation">\</span></span>
<span class="line">                  docker-latest-logrotate <span class="token punctuation">\</span></span>
<span class="line">                  docker-logrotate <span class="token punctuation">\</span></span>
<span class="line">                  docker-selinux <span class="token punctuation">\</span></span>
<span class="line">                  docker-engine-selinux <span class="token punctuation">\</span></span>
<span class="line">                  docker-engine <span class="token punctuation">\</span></span>
<span class="line">                  docker-ce</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>安装 Docker</li>
</ol>
<p>安装 yum 工具：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils <span class="token punctuation">\</span></span>
<span class="line">           device-mapper-persistent-data <span class="token punctuation">\</span></span>
<span class="line">           lvm2 --skip-broken</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更新本地镜像源：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">yum-config-manager <span class="token punctuation">\</span></span>
<span class="line">    --add-repo <span class="token punctuation">\</span></span>
<span class="line">    https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</span>
<span class="line">    </span>
<span class="line"><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">'s/download.docker.com/mirrors.aliyun.com\/docker-ce/g'</span> /etc/yum.repos.d/docker-ce.repo</span>
<span class="line"></span>
<span class="line">yum makecache fast</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装 Docker：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">yum <span class="token function">install</span> <span class="token parameter variable">-y</span> docker-ce</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="3">
<li>启动 Docker</li>
</ol>
<p>Docker 应用需要用到各种端口，逐一去修改防火墙设置。这里直接关闭防火墙。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 关闭</span></span>
<span class="line">systemctl stop firewalld</span>
<span class="line"><span class="token comment"># 禁止开机启动防火墙</span></span>
<span class="line">systemctl disable firewalld</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动 Docker：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">systemctl start <span class="token function">docker</span>  <span class="token comment"># 启动docker服务</span></span>
<span class="line"></span>
<span class="line">systemctl stop <span class="token function">docker</span>  <span class="token comment"># 停止docker服务</span></span>
<span class="line"></span>
<span class="line">systemctl restart <span class="token function">docker</span>  <span class="token comment"># 重启docker服务</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看 Docker 版本：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">docker</span> <span class="token parameter variable">-v</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="4">
<li>配置镜像加速</li>
</ol>
<p>参考阿里云的镜像加速文档：
<a href="https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors" target="_blank" rel="noopener noreferrer">阿里云登录 - 欢迎登录阿里云，安全稳定的云计算服务平台</a></p>
<h2 id="_5、docker-基本操作" tabindex="-1"><a class="header-anchor" href="#_5、docker-基本操作"><span>5、Docker 基本操作</span></a></h2>
<h3 id="_1-镜像相关命令" tabindex="-1"><a class="header-anchor" href="#_1-镜像相关命令"><span>(1) 镜像相关命令</span></a></h3>
<p>镜像名称一般分两部分组成：<code v-pre>[repository]:[tag]</code>。在没有指定 tag 时，默认是 latest，代表最新版本的镜像。
<img src="@source/dev/container/docker/img_1.png" alt="img_1.png">
获取帮助：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token parameter variable">--help</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="实际案例1-从-dockerhub-拉取一个-nginx-镜像并查看" tabindex="-1"><a class="header-anchor" href="#实际案例1-从-dockerhub-拉取一个-nginx-镜像并查看"><span>实际案例1：从 DockerHub 拉取一个 nginx 镜像并查看</span></a></h4>
<ol>
<li>去镜像仓库查找镜像：<a href="https://hub.docker.com/" target="_blank" rel="noopener noreferrer">https://hub.docker.com/</a></li>
</ol>
<p><img src="@source/dev/container/docker/img_2.png" alt="img_2.png"></p>
<ol start="2">
<li>拉取镜像</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">docker</span> pull nginx</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="3">
<li>查看镜像</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">docker</span> images</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="实际案例2-将-nginx-镜像压缩为文件-再解压为镜像" tabindex="-1"><a class="header-anchor" href="#实际案例2-将-nginx-镜像压缩为文件-再解压为镜像"><span>实际案例2：将 nginx 镜像压缩为文件，再解压为镜像</span></a></h4>
<ol>
<li>将镜像压缩为<code v-pre>.tar</code>文件</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">docker</span> save <span class="token parameter variable">-o</span> nginx.tar nginx</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>解压为镜像</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">docker</span> load <span class="token parameter variable">-i</span> nginx.tar</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="实际案例3-拉取一个-redis-镜像-执行上述操作" tabindex="-1"><a class="header-anchor" href="#实际案例3-拉取一个-redis-镜像-执行上述操作"><span>实际案例3：拉取一个 redis 镜像，执行上述操作</span></a></h4>
<p><img src="@source/dev/container/docker/img_3.png" alt="img_3.png"></p>
<h3 id="_2-容器相关命令" tabindex="-1"><a class="header-anchor" href="#_2-容器相关命令"><span>(2) 容器相关命令</span></a></h3>
<p><img src="@source/dev/container/docker/img_4.png" alt="img_4.png"></p>
<h4 id="实际案例1-创建运行一个-nginx-容器" tabindex="-1"><a class="header-anchor" href="#实际案例1-创建运行一个-nginx-容器"><span>实际案例1：创建运行一个 nginx 容器</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">docker</span> run <span class="token parameter variable">--name</span> containerName <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token parameter variable">-d</span> nginx</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>命令解读：</p>
<ul>
<li><code v-pre>docker run</code>：创建并运行一个容器；</li>
<li><code v-pre>--name</code>：给容器起一个名字；</li>
<li><code v-pre>-p</code>：将宿主机端口与容器端口映射，冒号左侧是宿主机端口，右侧是容器端口；</li>
<li><code v-pre>-d</code>：后台运行容器；</li>
<li><code v-pre>nginx</code>：镜像名称，例如 nginx。</li>
</ul>
<h4 id="实际案例2-进入nginx容器-修改html文件内容-添加-传智教育欢迎您" tabindex="-1"><a class="header-anchor" href="#实际案例2-进入nginx容器-修改html文件内容-添加-传智教育欢迎您"><span>实际案例2：进入Nginx容器，修改HTML文件内容，添加“传智教育欢迎您”</span></a></h4>
<ol>
<li>进入容器</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> containerName <span class="token function">bash</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>命令解读：</p>
<ul>
<li><code v-pre>docker exec</code>：进入容器内部，执行一个命令；</li>
<li><code v-pre>-it</code>：给当前进入的容器创建一个标准输入、输出终端，允许我们与容器交互；</li>
<li><code v-pre>containerName</code>：要进入的容器的名称；</li>
<li><code v-pre>bash</code>：进入容器后执行的命令，bash 是一个 linux 终端交互命令。</li>
</ul>
<ol start="2">
<li>进入 nginx 的 HTML 所在目录<code v-pre>/usr/share/nginx/html</code></li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token builtin class-name">cd</span> /usr/share/nginx/html</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="3">
<li>修改<code v-pre>index.html</code>的内容</li>
</ol>
<p>不推荐修改容器内的文件内容。</p>
<h4 id="实际案例3-创建-redis-容器" tabindex="-1"><a class="header-anchor" href="#实际案例3-创建-redis-容器"><span>实际案例3：创建 redis 容器</span></a></h4>
<ol>
<li>搜索并拉取 redis 镜像</li>
<li>创建容器</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">docker</span> run <span class="token parameter variable">--name</span> some-redis <span class="token parameter variable">-p</span> <span class="token number">6380</span>:6379  <span class="token parameter variable">-d</span> redis redis-server <span class="token parameter variable">--save</span> <span class="token number">60</span> <span class="token number">1</span> <span class="token parameter variable">--loglevel</span> warning</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3-数据卷命令" tabindex="-1"><a class="header-anchor" href="#_3-数据卷命令"><span>(3) 数据卷命令</span></a></h3>
<p>数据卷(volume)是一个虚拟目录，指向宿主机文件系统中的某个目录。
数据卷的作用：将容器与数据分离，解耦合，方便操作容器内数据，保证数据安全。
数据卷操作的基本语法如下：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">docker</span> volume <span class="token punctuation">[</span>command<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><code v-pre>docker volume</code>命令是数据卷操作，根据命令后跟随的<code v-pre>command</code>来确定下一步的操作：</p>
<ul>
<li><code v-pre>create</code>创建一个 volume</li>
<li><code v-pre>inspect</code>显示一个或多个 volume 的信息</li>
<li><code v-pre>ls</code>列出所有的 volume</li>
<li><code v-pre>prune</code>删除未使用的 volume</li>
<li><code v-pre>rm</code>删除一个或多个指定的 volume</li>
</ul>
<p>运行容器时使用<code v-pre>-v</code>参数挂载数据卷。
<code v-pre>-v  volumeName: /targetContainerPath</code></p>
<h4 id="实际案例1-创建并运行一个-mysql-容器-将宿主机目录直接挂载到容器" tabindex="-1"><a class="header-anchor" href="#实际案例1-创建并运行一个-mysql-容器-将宿主机目录直接挂载到容器"><span>实际案例1：创建并运行一个 MySQL 容器，将宿主机目录直接挂载到容器</span></a></h4>
<p>提示：目录挂载与数据卷挂载的语法是类似的</p>
<ul>
<li><code v-pre>-v [宿主机目录]:[容器内目录]</code></li>
<li><code v-pre>-v [宿主机文件]:[容器内文件]</code></li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">docker</span> run <span class="token punctuation">\</span></span>
<span class="line"><span class="token parameter variable">--name</span> mysqlCon <span class="token punctuation">\</span></span>
<span class="line"><span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">991118</span> <span class="token punctuation">\</span></span>
<span class="line"><span class="token parameter variable">-v</span> /usr/local/mysql/conf/hmy.cnf:/etc/mysql/mysql.conf.d/hmy.cnf <span class="token punctuation">\</span></span>
<span class="line"><span class="token parameter variable">-v</span> /usr/local/mysql/data:/var/lib/mysql <span class="token punctuation">\</span></span>
<span class="line"><span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token punctuation">\</span></span>
<span class="line"><span class="token parameter variable">-d</span> <span class="token punctuation">\</span></span>
<span class="line">mysql:5.7.25 <span class="token punctuation">\</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、dockfile-自定义镜像" tabindex="-1"><a class="header-anchor" href="#_5、dockfile-自定义镜像"><span>5、Dockfile 自定义镜像</span></a></h2>
<h3 id="_1-镜像结构" tabindex="-1"><a class="header-anchor" href="#_1-镜像结构"><span>(1) 镜像结构</span></a></h3>
<p><img src="@source/dev/container/docker/img_5.png" alt="img_5.png"></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">docker</span> build <span class="token parameter variable">-t</span> javaweb:1.0</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-镜像构建" tabindex="-1"><a class="header-anchor" href="#_2-镜像构建"><span>(2) 镜像构建</span></a></h3>
<p>Dockerfile 就是一个文本文件，其中包含一个个的指令(Instruction)，用指令来说明要执行什么操作来构建镜像。每一个指令都会形成一层 Layer。
常见指令如下：
<img src="https://cdn.nlark.com/yuque/0/2023/png/34476449/1691464279625-908c9257-b3a3-4fe5-883e-e875dd5f7c09.png#averageHue=%23d0b7b7&amp;clientId=u5155c809-dd27-4&amp;from=paste&amp;height=326&amp;id=ub96ddd6c&amp;originHeight=408&amp;originWidth=1088&amp;originalType=binary&amp;ratio=1.25&amp;rotation=0&amp;showTitle=false&amp;size=40736&amp;status=done&amp;style=stroke&amp;taskId=u91f59fb6-aa73-4296-b126-4b100999ff2&amp;title=&amp;width=870.4" alt="image.png">
Dockerfile 的第一行必须是<code v-pre>FROM</code>，从一个基础镜像来构建。基础镜像可以是基本操作系统，如 Ubuntu。也可以是其他人制作好的镜像。</p>
<h2 id="_6、dockcompose" tabindex="-1"><a class="header-anchor" href="#_6、dockcompose"><span>6、DockCompose</span></a></h2>
<h3 id="_1-dockcompose-作用" tabindex="-1"><a class="header-anchor" href="#_1-dockcompose-作用"><span>(1) DockCompose 作用</span></a></h3>
<p>Docker Compose 可以基于 Compose 文件帮我们快速的部署分布式应用，而无需手动一个个创建和运行容器！
Compose 文件是一个文本文件，通过指令定义集群中的每个容器如何运行。</p>
<h2 id="_7、docker-镜像仓库" tabindex="-1"><a class="header-anchor" href="#_7、docker-镜像仓库"><span>7、Docker 镜像仓库</span></a></h2>
<p>镜像仓库（ Docker Registry）有公共的和私有的两种形式：
公共仓库：例如Docker官方的 Docker Hub，国内也有一些云服务商提供类似于 Docker Hub 的公开服务，比如<a href="https://c.163.com/hub" target="_blank" rel="noopener noreferrer">网易云镜像服务</a>、<a href="https://hub.daocloud.io/" target="_blank" rel="noopener noreferrer">DaoCloud</a><a href="https://hub.daocloud.io/" target="_blank" rel="noopener noreferrer">镜像服务</a>、<a href="https://cr.console.aliyun.com/" target="_blank" rel="noopener noreferrer">阿里云镜像服务</a>等。
除了使用公开仓库外，用户还可以在本地搭建私有 Docker Registry。企业自己的镜像最好是采用私有 Docker Registry 来实现。</p>
</div></template>


