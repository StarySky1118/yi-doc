<template><div><h1 id="计算机网络" tabindex="-1"><a class="header-anchor" href="#计算机网络"><span>计算机网络</span></a></h1>
<h2 id="https-中间人攻击" tabindex="-1"><a class="header-anchor" href="#https-中间人攻击"><span>HTTPS 中间人攻击</span></a></h2>
<p>HTTPS 中间人攻击是指在客户端与服务端之间，出现了一个中间人，他通过伪造证书冒充服务端，与客户端建立加密连接，同时与服务端建立加密连接，进行恶意操作。</p>
<p>为防止 HTTPS 中间人攻击，要保证证书是可信任的证书颁发机构颁发的。还可以对应用层数据作进一步加密。</p>
<h2 id="http-常见的状态码有哪些" tabindex="-1"><a class="header-anchor" href="#http-常见的状态码有哪些"><span>HTTP 常见的状态码有哪些？</span></a></h2>
<p>HTTP 状态码分为五类，分别以 1~5 开头。</p>
<ol>
<li>1xx</li>
</ol>
<p>表示提示信息，开发过程中很少用到</p>
<ol start="2">
<li>2xx</li>
</ol>
<p>表示服务端成功处理请求。
<code v-pre>200 OK</code>表示一切正常；<code v-pre>204 No Conent</code>表示响应体中没有数据；<code v-pre>206 Patial Content</code>表示响应体中包含了一部分数据，通常用于分块下载和断点续传。</p>
<ol start="3">
<li>3xx</li>
</ol>
<p>表示客户端请求的资源发生了变动，需要重定向。
<code v-pre>301 Moved Permanently</code>表示永久重定向，客户端需要访问新的 URL 获取资源。
<code v-pre>302 Found</code>表示临时重定向，暂时需要访问新的 URL 获取资源。
301 和 302 都会在响应头中使用字段 <code v-pre>Location</code>，指明后续要跳转的 URL，浏览器会自动进行重定向。
<code v-pre>304 Not Modified</code>表示资源未修改，浏览器可以继续使用缓存。</p>
<ol start="4">
<li>4xx</li>
</ol>
<p>表示浏览器发送的报文有误，服务器无法处理。
<code v-pre>400 Bad Request</code>表示客户端请求的报文有错误。
<code v-pre>403 Forbidden</code>表示服务器禁止访问资源。
<code v-pre>404 Not Found</code>表示请求的资源在服务器上未找到。</p>
<ol start="5">
<li>5xx</li>
</ol>
<p>表示服务器内部出现了错误。
<code v-pre>500 Internal Server Error</code>表示服务器内部错误。
<code v-pre>501 Not Implemented</code>表示功能未实现。
<code v-pre>502 Bad Gateway</code>通常是网关相关的错误。例如配置错误，网关无法与后端服务器正确连接。
<code v-pre>503 Service Unavailable</code>：表示服务器当前无法提供服务。</p>
<h2 id="dns-解析的过程是怎样的" tabindex="-1"><a class="header-anchor" href="#dns-解析的过程是怎样的"><span>DNS 解析的过程是怎样的？</span></a></h2>
<p>首先需要查询缓存，包括浏览器缓存、操作系统缓存和 hosts 文件，若命中则返回；然后查询本地 DNS 服务器，若命中则返回；然后将向 DNS 系统发送 DNS 请求，DNS 系统是一个有层次关系的分布式数据库系统，高层次 DNS 服务器拥有低层次 DNS 服务器 IP，每个 DNS 服务器都有根域名服务器 IP，本地 DNS 服务器首先向根域名服务器发送 DNS 请求，通过在 DNS 系统中的流转获取到正确的 IP。流转方式是：若高层次 DNS 服务器没有域名对应的 IP，则返回低层次 DNS 服务器的 IP，由本地 DNS 服务器向低层次 DNS 服务器继续发送 DNS 查询请求，直到查询到正确的 IP。最后，根据需要更新缓存。</p>
<h2 id="从键入-url-到显示网页-中间发生了什么" tabindex="-1"><a class="header-anchor" href="#从键入-url-到显示网页-中间发生了什么"><span>从键入 URL 到显示网页，中间发生了什么？</span></a></h2>
<h3 id="_1-url-解析与-http-请求生成" tabindex="-1"><a class="header-anchor" href="#_1-url-解析与-http-请求生成"><span>1. URL 解析与 HTTP 请求生成</span></a></h3>
<p>浏览器输入的 URL 通常分为三部分：协议名称、Web Server 地址和资源路径。URL 就是去指定的 Web Server 获取指定资源。
URL 解析完毕，浏览器就可以根据这些信息生成 HTTP 请求。</p>
<h3 id="_2-dns-查询" tabindex="-1"><a class="header-anchor" href="#_2-dns-查询"><span>2. DNS 查询</span></a></h3>
<p>如果在 URL 中，Web Server 地址信息使用域名，就需要使用 DNS 服务进行域名解析，获取域名对应的 IP 地址。
域名是分层的，越靠近右侧层级越高，与此相对应，DNS 系统也是一个分层级的分布式数据库，高层 DNS 服务器拥有低层 DNS 服务器 IP，为保证每次查询都能从根域名服务器逐步向下，每个 DNS 服务器都保存了根域名服务器的 IP。
查询过程如下：</p>
<ol>
<li>查询缓存</li>
</ol>
<p>包括浏览器缓存、操作系统缓存、hosts 文件</p>
<ol start="2">
<li>查询本地 DNS 服务器</li>
<li>在 DNS 服务器中流转 DNS 请求：</li>
</ol>
<p>若命中，返回域名对应的 IP；否则返回子层级的 DNS 服务器 IP</p>
<ol start="4">
<li>缓存更新</li>
</ol>
<p>获取到最终 IP 后，需要按需更新本地 DNS 服务器、浏览器和操作系统缓存</p>
<h3 id="_3-tcp-连接" tabindex="-1"><a class="header-anchor" href="#_3-tcp-连接"><span>3. TCP 连接</span></a></h3>
<p>获取到服务器 IP 地址后，浏览器通过三次握手过程与服务器建立 TCP 连接。</p>
<h3 id="_4-发送-http-请求" tabindex="-1"><a class="header-anchor" href="#_4-发送-http-请求"><span>4. 发送 HTTP 请求</span></a></h3>
<p>建立 TCP 连接后，浏览器向服务端发送 HTTP 请求。</p>
<h3 id="_5-服务端处理请求" tabindex="-1"><a class="header-anchor" href="#_5-服务端处理请求"><span>5. 服务端处理请求</span></a></h3>
<p>服务端接收到请求后，获取请求路径指定的资源，将其放到 HTTP 响应中，返回给客户端。</p>
<h3 id="_6-浏览器渲染页面" tabindex="-1"><a class="header-anchor" href="#_6-浏览器渲染页面"><span>6. 浏览器渲染页面</span></a></h3>
<p>浏览器解析 HTML、CSS、JavaScript，并渲染页面。</p>
<h2 id="tcp-ip-网络模型有哪几层-各自有什么作用" tabindex="-1"><a class="header-anchor" href="#tcp-ip-网络模型有哪几层-各自有什么作用"><span>TCP/IP 网络模型有哪几层，各自有什么作用？</span></a></h2>
<h3 id="为什么要分层" tabindex="-1"><a class="header-anchor" href="#为什么要分层"><span>为什么要分层</span></a></h3>
<p>TCP/IP 网络模型有四层，分别是应用层、传输层、网络层和链路层。每层专注于实现各自的功能，上层只需要使用底层提供的功能而不必关心底层的具体实现。这样有助于故障隔离、减小冗余、利于扩展。</p>
<h3 id="各层的作用" tabindex="-1"><a class="header-anchor" href="#各层的作用"><span>各层的作用</span></a></h3>
<p>应用层专注于为用户提供应用功能，例如 HTTP、SSH、TELNET 等。</p>
<p>传输层提供应用进程之间的数据传输服务，主要包括 TCP 和 UDP 协议，TCP 面向连接、提供可靠的数据传输；UDP 无连接，提供不可靠的数据传输，但效率高。</p>
<p>网络层负责在网络间传输数据包，主要包括 IP 协议、ICMP 协议等。</p>
<p>链路层负责物理网络上的数据传输和网络接口管理。主要包括以太网、ARP 等。</p>
<h2 id="tcp-的流量控制和拥塞控制" tabindex="-1"><a class="header-anchor" href="#tcp-的流量控制和拥塞控制"><span>TCP 的流量控制和拥塞控制</span></a></h2>
<p>TCP 协议会使用流量控制和拥塞控制保证数据传输的可靠性。</p>
<p>TCP 使用滑动窗口机制来进行流量控制，其机制是发送方和接收方都维护一个滑动窗口，发送方根据接收方接收窗口大小、网络拥塞情况、自身发送能力确定发送窗口大小，接收方的接收窗口大小根据自身的接收能力确定，并且可以通过 TCP 报文的窗口字段来通知发送方。</p>
<p>TCP 使用拥塞控制算法动态调整数据传输速率。拥塞控制算法主要包括慢启动、拥塞避免、快速重传与快速恢复。慢启动是指刚建立连接时，拥塞窗口是一个比较小的值，随着数据成功传输次数的增加，拥塞窗口大小指数级增大。当拥塞窗口大小到达一定阈值，就使用拥塞避免算法，随着数据成功传输次数的增加，拥塞窗口线性增大。当发送方收到三次重复确认，这时出现了丢包，但仍能接收到多次确认包，说明网络拥塞不是非常严重，发送方会进行快速重传，并进入快速恢复算法，拥塞窗口减小一半，慢启动阈值减小一半，进行拥塞避免阶段。</p>
<p>总之，TCP 使用流量控制和拥塞控制来保证数据传输的可靠性。</p>
<h2 id="tcp-协议的特点" tabindex="-1"><a class="header-anchor" href="#tcp-协议的特点"><span>TCP 协议的特点</span></a></h2>
<p>TCP 协议位于 TCP/IP 网络模型的传输层，它是一种面向连接、基于字节流、可靠、无私的协议。</p>
<p>首先它是面向连接的，若服务端与客户端希望通过 TCP 连接进行数据传输，首先要通过三次握手过程建立连接，通信结束后，需要通过四次挥手释放连接。</p>
<p>第二，基于字节流，应用层需要自行处理数据的分段与重组。</p>
<p>第三，可靠。TCP 协议通过序列号、确认号、超时重传、流量控制保证来保证数据的可靠传输。</p>
<p>第四，无私。TCP 会使用拥塞窗口机制避免网络拥塞。</p>
<p>第五，全双工。数据传输方向：双，全：能够同时进行。</p>
</div></template>


