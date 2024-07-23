<template><div><h1 id="二、linux-基础命令" tabindex="-1"><a class="header-anchor" href="#二、linux-基础命令"><span>二、Linux 基础命令</span></a></h1>
<p>快捷键</p>
<p><code v-pre>Ctrl + l</code>：清屏</p>
<h2 id="_1、linux-目录结构" tabindex="-1"><a class="header-anchor" href="#_1、linux-目录结构"><span>1、Linux 目录结构</span></a></h2>
<p>Linux 系统没有盘符的概念，只有一个根目录 <code v-pre>/</code>。</p>
<p><img src="@source/dev/other/linux/img_5.png" alt="img_5.png"></p>
<p>例如：<code v-pre>/usr/tmp</code>，开头斜杠表示根目录，后面斜杠表示层级关系。</p>
<h2 id="_2、linux-命令入门" tabindex="-1"><a class="header-anchor" href="#_2、linux-命令入门"><span>2、Linux 命令入门</span></a></h2>
<h3 id="_1-linux-命令基础格式" tabindex="-1"><a class="header-anchor" href="#_1-linux-命令基础格式"><span>(1) Linux 命令基础格式</span></a></h3>
<p>Linux 命令通用格式：<code v-pre>command [-options] [parameter]</code></p>
<ul>
<li><code v-pre>command</code>：命令</li>
<li><code v-pre>-options</code>：命令选项，控制命令的行为细节</li>
<li><code v-pre>parameter</code>：命令参数，对命令指向目标进行控制</li>
</ul>
<h3 id="_2-ls" tabindex="-1"><a class="header-anchor" href="#_2-ls"><span>(2) ls</span></a></h3>
<p>英文：List
功能：列出文件夹信息
语法：<code v-pre>ls [-l -h -a] [Linux 路径]</code></p>
<ul>
<li>Linux 路径：被查看的文件夹，不提供表示查看当前工作目录</li>
<li><code v-pre>-l</code>：以列表形式查看，显示更多细节</li>
<li><code v-pre>-h</code>：配合 <code v-pre>-l</code>，以更加人性化的方式显示文件大小</li>
<li><code v-pre>-a</code>：显示隐藏文件
:::info
工作目录与 HOME 目录
<img src="https://cdn.nlark.com/yuque/0/2023/png/34476449/1678782592676-044442fe-32c9-4194-ae41-3341b4777510.png#averageHue=%23d4d3d0&amp;clientId=ue86d3167-5a56-4&amp;from=paste&amp;height=506&amp;id=u60c24a41&amp;originHeight=633&amp;originWidth=1158&amp;originalType=binary&amp;ratio=1.25&amp;rotation=0&amp;showTitle=false&amp;size=253199&amp;status=done&amp;style=none&amp;taskId=u943cd85c-8b79-47dd-983e-9715e4f65c7&amp;title=&amp;width=926.4" alt="image.png">
:::</li>
</ul>
<h2 id="_3、目录切换命令-cd-pwd" tabindex="-1"><a class="header-anchor" href="#_3、目录切换命令-cd-pwd"><span>3、目录切换命令：<code v-pre>cd</code>/<code v-pre>pwd</code></span></a></h2>
<h3 id="_1-cd" tabindex="-1"><a class="header-anchor" href="#_1-cd"><span>(1) cd</span></a></h3>
<p>英文：Change Directory
功能：切换工作目录
语法：<code v-pre>cd [工作目录]</code></p>
<ul>
<li>工作目录不提供会切换到默认工作目录，即当前登录用户的 HOME 目录</li>
</ul>
<p>特殊路径符：<code v-pre>~</code>表示当前用户的 HOME 目录。</p>
<h3 id="_2-pwd" tabindex="-1"><a class="header-anchor" href="#_2-pwd"><span>(2) pwd</span></a></h3>
<p>英文：Print Working Directory
功能：打印当前工作目录
语法：<code v-pre>pwd</code></p>
<h2 id="_4、创建目录指令-mkdir" tabindex="-1"><a class="header-anchor" href="#_4、创建目录指令-mkdir"><span>4、创建目录指令：<code v-pre>mkdir</code></span></a></h2>
<p>英文：Make Directory
功能：创建新文件夹
语法：<code v-pre>mkdir [-p] 路径</code></p>
<ul>
<li><code v-pre>-p</code>：自动创建不存在的父目录</li>
</ul>
<blockquote>
<p>注：创建文件夹需要权限。</p>
</blockquote>
<h2 id="_5、文件操作命令" tabindex="-1"><a class="header-anchor" href="#_5、文件操作命令"><span>5、文件操作命令</span></a></h2>
<h3 id="_1-创建文件-touch" tabindex="-1"><a class="header-anchor" href="#_1-创建文件-touch"><span>(1) 创建文件：touch</span></a></h3>
<p>功能：创建文件
语法：<code v-pre>touch Linux路径</code></p>
<h3 id="_2-查看文件-cat" tabindex="-1"><a class="header-anchor" href="#_2-查看文件-cat"><span>(2) 查看文件：cat</span></a></h3>
<p>功能：查看文件
语法：<code v-pre>cat Linux路径</code></p>
<h3 id="_3-查看文件-more" tabindex="-1"><a class="header-anchor" href="#_3-查看文件-more"><span>(3) 查看文件：more</span></a></h3>
<p>功能：分页显示文件内容
语法：<code v-pre>more Linux路径</code></p>
<h3 id="_4-复制文件-cp" tabindex="-1"><a class="header-anchor" href="#_4-复制文件-cp"><span>(4) 复制文件：cp</span></a></h3>
<p>英文：copy
功能：复制文件/文件夹
语法：<code v-pre>cp [-r] 源 目标</code></p>
<ul>
<li><code v-pre>-r</code>：复制文件夹时使用，表示递归</li>
</ul>
<h3 id="_5-移动文件-文件夹-mv" tabindex="-1"><a class="header-anchor" href="#_5-移动文件-文件夹-mv"><span>(5) 移动文件/文件夹：mv</span></a></h3>
<p>英文：move
功能：移动文件/文件夹
语法：<code v-pre>mv 源 目标</code></p>
<h3 id="_6-删除文件-文件夹-rm" tabindex="-1"><a class="header-anchor" href="#_6-删除文件-文件夹-rm"><span>(6) 删除文件/文件夹：rm</span></a></h3>
<p>英文：remove
功能：删除文件/文件夹
语法：<code v-pre>rm [-r -f] 删除文件1 删除文件2...</code></p>
<ul>
<li><code v-pre>-r</code>：在删除文件夹时使用，表示递归</li>
<li><code v-pre>-f</code>：强制删除(不会弹出提示确认信息)</li>
</ul>
<blockquote>
<p>rm 命令支持通配符 <code v-pre>*</code>，表示零个或多个，用来做模糊匹配。</p>
</blockquote>
<blockquote>
<p>在超级管理员状态，rm 是一个危险的指令，如下命令，不要使用：
<code v-pre>rm -rf /</code>
相当于在 Windows 系统中格式化了 C 盘</p>
</blockquote>
<h2 id="_6、查找命令" tabindex="-1"><a class="header-anchor" href="#_6、查找命令"><span>6、查找命令</span></a></h2>
<h3 id="_1-查找命令-which" tabindex="-1"><a class="header-anchor" href="#_1-查找命令-which"><span>(1) 查找命令：which</span></a></h3>
<p>功能：查看命令存放的位置
语法：<code v-pre>which 命令</code></p>
<h3 id="_2-查找文件-find" tabindex="-1"><a class="header-anchor" href="#_2-查找文件-find"><span>(2) 查找文件：find</span></a></h3>
<p>功能：搜索指定文件
<strong>按文件名查找</strong>
语法：<code v-pre>find 起始路径 -name &quot;被查找文件名&quot;</code></p>
<ul>
<li>起始路径不填表示从当前路径查找</li>
</ul>
<blockquote>
<p>也可以使用通配符 <code v-pre>*</code>。</p>
</blockquote>
<p><strong>按文件大小查找</strong>
语法：<code v-pre>find 起始路径 -size +/-n[kMG]</code></p>
<ul>
<li><code v-pre>+/-</code>表示大于/小于</li>
<li>n 表示大小数字</li>
<li>kMG 表示大小单位，k 表示 KB，M 表示 MB，G 表示 GB</li>
</ul>
<h2 id="_7、grep、wc-和管道符" tabindex="-1"><a class="header-anchor" href="#_7、grep、wc-和管道符"><span>7、grep、wc 和管道符</span></a></h2>
<h3 id="_1-grep" tabindex="-1"><a class="header-anchor" href="#_1-grep"><span>(1) grep</span></a></h3>
<p>功能：从文件中通过关键字过滤文件行
语法：<code v-pre>grep [-n] 关键字 文件路径</code></p>
<ul>
<li><code v-pre>-n</code>：在结果中显示匹配行的行号</li>
<li>文件路径：被统计的文件，可作为<strong>内容输入端口</strong></li>
</ul>
<h3 id="_2-wc" tabindex="-1"><a class="header-anchor" href="#_2-wc"><span>(2) wc</span></a></h3>
<p>功能：对文件行数、字数等做数量统计
语法：<code v-pre>wc [-c -m -l -w] 文件路径</code></p>
<ul>
<li><code v-pre>-c</code>：统计 bytes 数量</li>
<li><code v-pre>-m</code>：统计字符数量</li>
<li><code v-pre>-l</code>：统计行数</li>
<li><code v-pre>-w</code>：统计单词数量</li>
<li>文件路径：被统计的文件，可作为<strong>内容输入端口</strong></li>
</ul>
<h3 id="_3-管道符" tabindex="-1"><a class="header-anchor" href="#_3-管道符"><span>(3) 管道符</span></a></h3>
<p><code v-pre>|</code>将左侧命令的结果作为右侧命令的输入。
例：<code v-pre>cat test.txt | wc -w</code></p>
<h2 id="_8、echo、tail-和重定向符" tabindex="-1"><a class="header-anchor" href="#_8、echo、tail-和重定向符"><span>8、echo、tail 和重定向符</span></a></h2>
<h3 id="_1-echo" tabindex="-1"><a class="header-anchor" href="#_1-echo"><span>(1) echo</span></a></h3>
<p>功能：在命令行内输出指定内容
格式：<code v-pre>echo &quot;输出内容&quot;</code></p>
<blockquote>
<p>使用反引号 ` 包裹的内容将作为命令执行。</p>
</blockquote>
<h3 id="_2-重定向符" tabindex="-1"><a class="header-anchor" href="#_2-重定向符"><span>(2) 重定向符</span></a></h3>
<p>作用是将符号左边的结果，输出到右边指定的文件中去，包括 <code v-pre>&gt;</code>和 <code v-pre>&gt;&gt;</code>。
<code v-pre>&gt;</code>：覆盖输出
<code v-pre>&gt;&gt;</code>：追加输出</p>
<h3 id="_3-tail" tabindex="-1"><a class="header-anchor" href="#_3-tail"><span>(3) tail</span></a></h3>
<p>功能：查看文件尾部内容
语法：<code v-pre>tail [-f -num] Linux路径</code></p>
<ul>
<li><code v-pre>-f</code>：持续跟踪</li>
<li><code v-pre>-num</code>：查看尾部多少行，默认 10 行</li>
</ul>
<h2 id="_9、vi-vim-编辑器" tabindex="-1"><a class="header-anchor" href="#_9、vi-vim-编辑器"><span>9、vi/vim 编辑器</span></a></h2>
<h3 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>(1) 简介</span></a></h3>
<p><img src="@source/dev/other/linux/img_6.png" alt="img_6.png">
vi/vim 有三种工作模式：
其中，命令模式是中转站。
<img src="@source/dev/other/linux/img_7.png" alt="img_7.png"></p>
<h3 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>(2) 使用</span></a></h3>
<p><strong>基本使用流程</strong></p>
<ol>
<li>使用 <code v-pre>vim 文件</code>进入编辑器命令模式。</li>
<li>在命令模式下，按下 i 键便进入输入模式。</li>
<li>输入完成，按 ESC 返回命令模式。</li>
<li>命令模式下，按 : 进入底线命令模式。</li>
<li>在底线命令模式下，输入 <code v-pre>wq</code>后回车，保存并退出。</li>
</ol>
<p><strong>命令模式常用快捷键</strong>
<img src="@source/dev/other/linux/img_8.png" alt="img_8.png">
<img src="@source/dev/other/linux/img_9.png" alt="img_9.png">
<img src="@source/dev/other/linux/img_10.png" alt="img_10.png"></p>
<p><strong>底线命令模式常用快捷键</strong>
<img src="@source/dev/other/linux/img_11.png" alt="img_11.png"></p>
</div></template>


