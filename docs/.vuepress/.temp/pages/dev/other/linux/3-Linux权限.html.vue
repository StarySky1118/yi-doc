<template><div><h1 id="三、linux-权限" tabindex="-1"><a class="header-anchor" href="#三、linux-权限"><span>三、Linux 权限</span></a></h1>
<p>普通用户权限，在其 Home 目录内是不受限的。</p>
<h2 id="_1、切换用户与返回-su和-exit" tabindex="-1"><a class="header-anchor" href="#_1、切换用户与返回-su和-exit"><span>1、切换用户与返回：<code v-pre>su</code>和 <code v-pre>exit</code></span></a></h2>
<p>英文：Switch User
语法：<code v-pre>su [-] 用户名</code></p>
<ul>
<li><code v-pre>-</code>：切换的同时加载环境变量</li>
<li>用户名不填默认 root</li>
</ul>
<h2 id="_2、临时切换-root-执行某条命令-sudo" tabindex="-1"><a class="header-anchor" href="#_2、临时切换-root-执行某条命令-sudo"><span>2、临时切换 root 执行某条命令：<code v-pre>sudo</code></span></a></h2>
<p>语法：<code v-pre>sudo 其他命令</code>
并不是所用普通用户都有使用 <code v-pre>sudo</code>的权限，需要给普通用户配置 <code v-pre>sudo</code>认证。</p>
<p><strong>认证步骤</strong></p>
<ol>
<li>切换到 root 用户，输入 <code v-pre>visudo</code>；</li>
<li>在文件最后一行添加 <code v-pre>用户名 ALL=(ALL)	NOPASSWD: ALL</code>；</li>
<li>保存并退出。</li>
</ol>
<h2 id="_3、用户与用户组" tabindex="-1"><a class="header-anchor" href="#_3、用户与用户组"><span>3、用户与用户组</span></a></h2>
<h3 id="_1-用户组管理" tabindex="-1"><a class="header-anchor" href="#_1-用户组管理"><span>(1) 用户组管理</span></a></h3>
<p><strong>添加用户组</strong></p>
<p>语法：<code v-pre>groupadd 用户组名</code></p>
<p><strong>删除用户组</strong></p>
<p>语法：<code v-pre>groupdel 用户组名</code></p>
<h3 id="_2-用户管理" tabindex="-1"><a class="header-anchor" href="#_2-用户管理"><span>(2) 用户管理</span></a></h3>
<p><strong>创建用户</strong></p>
<p>语法：<code v-pre>useradd [-g -d] 用户名</code></p>
<ul>
<li><code v-pre>-g</code>：指定用户组，不指定默认创建用户同名组</li>
<li><code v-pre>-d</code>：指定用户 Home 路径，默认 <code v-pre>/home/用户名/</code></li>
</ul>
<p><strong>删除用户</strong></p>
<p>语法：<code v-pre>userdel [-r] 用户名</code></p>
<ul>
<li><code v-pre>-r</code>：表示删除 home/用户名 目录</li>
</ul>
<p><strong>查看用户所在组</strong></p>
<p>语法：<code v-pre>id [用户名]</code></p>
<ul>
<li>不填用户名表示查看当前用户</li>
</ul>
<p><strong>修改用户所属组</strong></p>
<p>功能：将用户添加到用户组
语法：<code v-pre>usermod -aG 用户组 用户名</code></p>
<p><strong>查看系统中的用户</strong>
语法：<code v-pre>getent passwd</code></p>
<p>呈现结果</p>
<p><img src="@source/dev/other/linux/img_13.png" alt="img_13.png">
<img src="@source/dev/other/linux/img_14.png" alt="img_14.png"></p>
<p><strong>查看系统中的组</strong></p>
<p>语法：<code v-pre>getent group</code></p>
<p><img src="@source/dev/other/linux/img_15.png" alt="img_15.png">
<img src="@source/dev/other/linux/img_16.png" alt="img_16.png"></p>
<h2 id="_4、权限控制信息" tabindex="-1"><a class="header-anchor" href="#_4、权限控制信息"><span>4、权限控制信息</span></a></h2>
<p><img src="@source/dev/other/linux/img_17.png" alt="img_17.png">
<img src="@source/dev/other/linux/img_18.png" alt="img_18.png">
<img src="@source/dev/other/linux/img_19.png" alt="img_19.png"></p>
<h2 id="_5、修改权限控制-chmod-chown" tabindex="-1"><a class="header-anchor" href="#_5、修改权限控制-chmod-chown"><span>5、修改权限控制：<code v-pre>chmod/chown</code></span></a></h2>
<h3 id="_1-chomod" tabindex="-1"><a class="header-anchor" href="#_1-chomod"><span>(1) <code v-pre>chomod</code></span></a></h3>
<p>权限信息是可以修改的，只有文件/文件夹所属用户和 root 用户可以修改权限信息。
语法：<code v-pre>chomod [-R] 权限 文件/文件夹</code></p>
<ul>
<li><code v-pre>-R</code>：对文件夹内的全部内容应用相同操作</li>
</ul>
<p>权限的数字序号：</p>
<p><img src="@source/dev/other/linux/img_20.png" alt="img_20.png"></p>
<p>常用权限：7(rwx)、5(r-x)、1(--x)</p>
<h3 id="_2-chown" tabindex="-1"><a class="header-anchor" href="#_2-chown"><span>(2) <code v-pre>chown</code></span></a></h3>
<p>功能：修改文件/文件夹所属用户和用户组</p>
<blockquote>
<p>此命令只能 root 用户使用。</p>
</blockquote>
<p>语法：<code v-pre>chown [-R] [用户] [:] [用户组] 文件或文件夹</code>
使用案例：
<img src="@source/dev/other/linux/img_21.png" alt="img_21.png"></p>
</div></template>


