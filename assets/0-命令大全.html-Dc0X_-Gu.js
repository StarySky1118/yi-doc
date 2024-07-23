import{_ as t,c as e,o as d,a}from"./app-B6JmyODB.js";const n={},s=a(`<h1 id="零、常用命令" tabindex="-1"><a class="header-anchor" href="#零、常用命令"><span>零、常用命令</span></a></h1><table><thead><tr><th>命令</th><th>功能</th><th>语法格式</th></tr></thead><tbody><tr><td><code>ls</code></td><td>列出文件夹信息</td><td><code>ls [-a/-l/-h] [路径]</code></td></tr><tr><td><code>cd</code></td><td>切换工作目录</td><td><code>cd [路径]</code></td></tr><tr><td><code>pwd</code></td><td>打印工作目录</td><td><code>pwd</code></td></tr><tr><td><code>mkdir</code></td><td>创建目录</td><td><code>mkdir [-p] 目录名</code></td></tr><tr><td><code>touch</code></td><td>创建文件</td><td><code>touch Linux路径</code></td></tr><tr><td><code>rm</code></td><td>删除文件/文件夹</td><td><code>rm [-r -f] Linux路径</code></td></tr><tr><td><code>cat</code></td><td>查看文件</td><td><code>cat Linux路径</code></td></tr><tr><td><code>more</code></td><td>分页显示文件内容</td><td><code>more Linux路径</code></td></tr><tr><td><code>cp</code></td><td>复制文件/文件夹</td><td><code>cp [-r] 源 目标</code></td></tr><tr><td><code>mv</code></td><td>移动文件/文件夹</td><td><code>mv 源 目标</code></td></tr><tr><td><code>which</code></td><td>查看命令存放位置</td><td><code>which 命令</code></td></tr><tr><td><code>find</code></td><td>查找文件</td><td><code>find 起始路径 -name &quot;文件名称&quot;</code>或 <code>find 起始路径 -size +/-n[kMG]</code></td></tr><tr><td><code>grep</code></td><td>列出文件中包含关键字的行</td><td><code>grep [-n] 关键字 文件路径</code></td></tr><tr><td><code>wc</code></td><td>统计文件的行数、字数等信息</td><td><code>wc [-w -l..] 文件路径</code></td></tr><tr><td><code>&amp;#124;</code></td><td>将左侧命令结果作为右侧命令的输入</td><td>管道符</td></tr><tr><td><code>echo</code></td><td>在命令行输出指定内容</td><td><code>echo &quot;输出内容&quot;</code></td></tr><tr><td><code>&gt;</code>或 <code>&gt;&gt;</code></td><td>将命令左侧结果覆盖或追加到右侧文件中</td><td>重定向符</td></tr><tr><td><code>tail</code></td><td>查看文件尾部内容</td><td><code>tail [-f -num] 文件路径</code></td></tr><tr><td><code>su</code></td><td>切换用户</td><td><code>su [-] 用户名</code></td></tr></tbody></table><h2 id="_1、netstat-lnp" tabindex="-1"><a class="header-anchor" href="#_1、netstat-lnp"><span>1、<code>netstat -lnp</code></span></a></h2><p><strong>netstat -lnp</strong> 是一个 Linux 命令，用于列出当前系统上所有的网络连接信息和监听端口信息。</p><ul><li><strong>netstat</strong>: 这是一个用于显示网络连接和路由表的命令。</li><li><strong>-l</strong>: 该选项表示只显示监听（listening）状态的端口。</li><li><strong>-n</strong>: 该选项表示以数字形式显示 IP 地址和端口号，而不进行主机名和服务名的解析。</li><li><strong>-p</strong>: 该选项表示显示与每个连接关联的程序或进程的 PID (Process ID) 和名称。</li></ul><p>显示信息如下：</p><ul><li>&quot;Proto&quot; 列：显示网络协议类型，如 TCP 或 UDP。</li><li>&quot;Recv-Q&quot; 和 &quot;Send-Q&quot; 列：显示接收队列和发送队列的长度。</li><li>&quot;Local Address&quot; 列：显示监听的 IP 地址和端口号。</li><li>&quot;Foreign Address&quot; 列：显示与本地地址建立连接的远程 IP 地址和端口号。</li><li>&quot;State&quot; 列：显示连接的状态，如 ESTABLISHED、LISTENING、TIME_WAIT 等。</li><li>&quot;PID/Program name&quot; 列：显示与每个连接关联的进程的 PID 和程序名称。</li></ul><h2 id="_2、telnet-ip-port" tabindex="-1"><a class="header-anchor" href="#_2、telnet-ip-port"><span>2、<code>telnet ip port</code></span></a></h2><p>检查指定的ip和端口是否可达。 Telnet 是一种用于远程登录和操作的网络协议，它允许用户在本地计算机上通过网络与远程主机进行交互。 通过 telnet 命令，你可以测试目标主机上特定端口的连通性，以及查看目标主机上的服务是否在指定端口上正在监听。如果连接成功，你将看到一个类似于 Telnet 客户端的命令行界面。你可以在该界面上输入命令与目标主机进行交互。</p><h2 id="_3、ps-aux-grep-nginx" tabindex="-1"><a class="header-anchor" href="#_3、ps-aux-grep-nginx"><span>3、<code>ps aux | grep nginx</code></span></a></h2><p>检查指定的进程是否存在。 用于在 Unix 和类 Unix 系统（如 Linux）中查看当前运行的进程信息。</p><h2 id="_4、curl-url" tabindex="-1"><a class="header-anchor" href="#_4、curl-url"><span>4、<code>curl url</code></span></a></h2><p>在Linux中，<strong>curl</strong>命令是一个用于与URL相关的数据传输工具。它可以通过各种协议（如HTTP、HTTPS、FTP、SCP、SFTP等）进行数据传输。<strong>curl</strong>命令可以用于从命令行下载文件、发送HTTP请求、上传文件等。</p><ol><li>下载文件</li></ol><p>从指定的URL下载文件到本地计算机。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-O</span> http://example.com/file.zip</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>发送 HTTP 请求</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">curl</span> http://example.com/api/data <span class="token parameter variable">-X</span> POST <span class="token parameter variable">-d</span> <span class="token string">&#39;param1=value1&amp;param2=value2&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="3"><li>上传文件</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-F</span> <span class="token string">&quot;file=@/path/to/file.txt&quot;</span> http://example.com/upload</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_5、wget" tabindex="-1"><a class="header-anchor" href="#_5、wget"><span>5、<code>wget</code></span></a></h2><p><strong>wget</strong> 是一个在 Linux 和类 Unix 系统中广泛使用的命令行工具，用于从网络上下载文件。它支持 HTTP、HTTPS 和 FTP 协议，并提供了丰富的下载选项和功能。 <strong>wget</strong> 命令的作用是通过指定的 URL 下载文件到本地计算机。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">wget</span> http://example.com/file.txt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,23),l=[s];function o(r,c){return d(),e("div",null,l)}const p=t(n,[["render",o],["__file","0-命令大全.html.vue"]]),u=JSON.parse('{"path":"/dev/other/linux/0-%E5%91%BD%E4%BB%A4%E5%A4%A7%E5%85%A8.html","title":"零、常用命令","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1、netstat -lnp","slug":"_1、netstat-lnp","link":"#_1、netstat-lnp","children":[]},{"level":2,"title":"2、telnet ip port","slug":"_2、telnet-ip-port","link":"#_2、telnet-ip-port","children":[]},{"level":2,"title":"3、ps aux | grep nginx","slug":"_3、ps-aux-grep-nginx","link":"#_3、ps-aux-grep-nginx","children":[]},{"level":2,"title":"4、curl url","slug":"_4、curl-url","link":"#_4、curl-url","children":[]},{"level":2,"title":"5、wget","slug":"_5、wget","link":"#_5、wget","children":[]}],"git":{"updatedTime":1721739933000,"contributors":[{"name":"ZhangZiYi","email":"ecustzzy1@163.com","commits":1}]},"filePathRelative":"dev/other/linux/0-命令大全.md"}');export{p as comp,u as data};
