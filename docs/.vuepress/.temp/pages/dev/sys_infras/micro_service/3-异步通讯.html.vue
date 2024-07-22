<template><div><h1 id="三、服务异步通讯" tabindex="-1"><a class="header-anchor" href="#三、服务异步通讯"><span>三、服务异步通讯</span></a></h1>
<h2 id="_1、mq-介绍" tabindex="-1"><a class="header-anchor" href="#_1、mq-介绍"><span>1、MQ 介绍</span></a></h2>
<h3 id="_1-同步调用与异步调用" tabindex="-1"><a class="header-anchor" href="#_1-同步调用与异步调用"><span>(1) 同步调用与异步调用</span></a></h3>
<p>同步调用：调用其他微服务后，等待其他微服务完成才会进行后续操作。例如，使用 Feign 调用其他微服务。
优点：</p>
<ul>
<li>时效性较强，可以立即得到结果</li>
</ul>
<p>缺点：</p>
<ul>
<li>耦合度高</li>
</ul>
<p>添加新需求后，需要更改原来的代码；
调用链中的一个微服务失效，链上的全部微服务失效，级联失败。</p>
<ul>
<li>性能下降、资源浪费</li>
</ul>
<p>调用微服务者阻塞等待，业务的响应时间是调用链中所有微服务响应时间之和。
异步调用：常见的一个实现是事件驱动模式。微服务消费者发布事件到经纪人 broker，微服务提供者订阅事件。
<img src="@source/dev/sys_infras/micro_service/img_32.png" alt="img_32.png">
优点：</p>
<ul>
<li>解耦</li>
</ul>
<p>添加新需求，可能不需要改动太多代码，发布事件即可；
没有调用链。</p>
<ul>
<li>性能提升，吞吐量提高</li>
<li>流量削峰</li>
</ul>
<p>由 broker 承担大流量而不是微服务承担巨大流量
<img src="@source/dev/sys_infras/micro_service/img_33.png" alt="img_33.png">
缺点：</p>
<ul>
<li>依赖于 broker 的可靠性、安全性和吞吐能力</li>
<li>业务流程追踪管理复杂</li>
</ul>
<h3 id="_2-消息队列-mq-message-queue" tabindex="-1"><a class="header-anchor" href="#_2-消息队列-mq-message-queue"><span>(2) 消息队列 MQ(Message Queue)</span></a></h3>
<p>消息队列(MQ)就是 broker。常见的 MQ 实现如下：
<img src="@source/dev/sys_infras/micro_service/img_34.png" alt="img_34.png">
RabbitMQ 优势在于高可用性、消息延迟小、消息可靠性高，在不需要定制协议、吞吐量要求不那么高的情况下，RabbitMQ 是较好的选择。</p>
<h2 id="_2、rabbitmq-入门" tabindex="-1"><a class="header-anchor" href="#_2、rabbitmq-入门"><span>2、RabbitMQ 入门</span></a></h2>
<p>RabbitMQ 是基于 Erlang 语言开发的开源消息通信<strong>中间件</strong>。</p>
<h3 id="_1-rabbitmq-安装" tabindex="-1"><a class="header-anchor" href="#_1-rabbitmq-安装"><span>(1) RabbitMQ 安装</span></a></h3>
<p>使用 Docker 在 Centos7 安装。</p>
<ol>
<li>镜像拉取</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">docker</span> pull rabbitmq:3-management</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>运行容器</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">docker</span> run <span class="token punctuation">\</span></span>
<span class="line"> <span class="token parameter variable">-e</span> <span class="token assign-left variable">RABBITMQ_DEFAULT_USER</span><span class="token operator">=</span>zhangziyi <span class="token punctuation">\</span></span>
<span class="line"> <span class="token parameter variable">-e</span> <span class="token assign-left variable">RABBITMQ_DEFAULT_PASS</span><span class="token operator">=</span><span class="token number">991118</span> <span class="token punctuation">\</span></span>
<span class="line"> <span class="token parameter variable">--name</span> mq <span class="token punctuation">\</span></span>
<span class="line"> <span class="token parameter variable">--hostname</span> mq1 <span class="token punctuation">\</span></span>
<span class="line"> <span class="token parameter variable">-p</span> <span class="token number">15672</span>:15672 <span class="token punctuation">\</span></span>
<span class="line"> <span class="token parameter variable">-p</span> <span class="token number">5672</span>:5672 <span class="token punctuation">\</span></span>
<span class="line"> <span class="token parameter variable">-d</span> <span class="token punctuation">\</span></span>
<span class="line"> rabbitmq:3-management</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在浏览器访问<code v-pre>http://ip:15672</code>，登录后：
<img src="@source/dev/sys_infras/micro_service/img_35.png" alt="img_35.png"></p>
<h3 id="_2-rabbitmq-结构" tabindex="-1"><a class="header-anchor" href="#_2-rabbitmq-结构"><span>(2) RabbitMQ 结构</span></a></h3>
<p>消息发布者 Publisher 通过管道 Channel 将消息发送给 broker，消息由 exchange 路由到队列 queue，消息的订阅者 consumer 从 queue 中获取消息。
<img src="@source/dev/sys_infras/micro_service/img_36.png" alt="img_36.png"></p>
<h3 id="_3-消息模型" tabindex="-1"><a class="header-anchor" href="#_3-消息模型"><span>(3) 消息模型</span></a></h3>
<h4 id="五个-demo" tabindex="-1"><a class="header-anchor" href="#五个-demo"><span>五个 demo</span></a></h4>
<p>MQ 的官方文档中给出了 5 个 MQ 的 Demo 示例，对应了几种不同的用法：</p>
<ol>
<li>基本消息队列（BasicQueue）</li>
</ol>
<p><img src="@source/dev/sys_infras/micro_service/img_37.png" alt="img_37.png"></p>
<ol start="2">
<li>工作消息队列（WorkQueue）</li>
</ol>
<p><img src="@source/dev/sys_infras/micro_service/img_38.png" alt="img_38.png"></p>
<ol start="3">
<li>发布订阅（Publish、Subscribe），又根据交换机类型不同分为三种：</li>
</ol>
<ul>
<li>Fanout Exchange：广播</li>
</ul>
<p><img src="@source/dev/sys_infras/micro_service/img_39.png" alt="img_39.png"></p>
<ul>
<li>Direct Exchange：路由</li>
</ul>
<p><img src="@source/dev/sys_infras/micro_service/img_40.png" alt="img_40.png"></p>
<ul>
<li>Topic Exchange：主题</li>
</ul>
<p><img src="@source/dev/sys_infras/micro_service/img_41.png" alt="img_41.png"></p>
<h4 id="hello-world-案例" tabindex="-1"><a class="header-anchor" href="#hello-world-案例"><span>Hello World 案例</span></a></h4>
<p>消息发布者 Publisher
流程：建立连接、创建 Channel、创建队列、发送消息、关闭通道、关闭连接。</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token keyword">package</span> <span class="token namespace">cn<span class="token punctuation">.</span>itcast<span class="token punctuation">.</span>mq<span class="token punctuation">.</span>helloworld</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>rabbitmq<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">Channel</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>rabbitmq<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">Connection</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>rabbitmq<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">ConnectionFactory</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">TimeoutException</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PublisherTest</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSendMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">TimeoutException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 1.建立连接</span></span>
<span class="line">        <span class="token class-name">ConnectionFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConnectionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 1.1.设置连接参数，分别是：主机名、端口号、vhost、用户名、密码</span></span>
<span class="line">        factory<span class="token punctuation">.</span><span class="token function">setHost</span><span class="token punctuation">(</span><span class="token string">"192.168.18.129"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        factory<span class="token punctuation">.</span><span class="token function">setPort</span><span class="token punctuation">(</span><span class="token number">5672</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        factory<span class="token punctuation">.</span><span class="token function">setVirtualHost</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        factory<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token string">"zhangziyi"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        factory<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">"991118"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 1.2.建立连接</span></span>
<span class="line">        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">newConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 2.创建通道Channel</span></span>
<span class="line">        <span class="token class-name">Channel</span> channel <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 3.创建队列</span></span>
<span class="line">        <span class="token class-name">String</span> queueName <span class="token operator">=</span> <span class="token string">"simple.queue"</span><span class="token punctuation">;</span></span>
<span class="line">        channel<span class="token punctuation">.</span><span class="token function">queueDeclare</span><span class="token punctuation">(</span>queueName<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 4.发送消息</span></span>
<span class="line">        <span class="token class-name">String</span> message <span class="token operator">=</span> <span class="token string">"hello, rabbitmq!"</span><span class="token punctuation">;</span></span>
<span class="line">        channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span> queueName<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> message<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"发送消息成功：【"</span> <span class="token operator">+</span> message <span class="token operator">+</span> <span class="token string">"】"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 5.关闭通道和连接</span></span>
<span class="line">        channel<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>消息消费者 Consumer
流程：建立连接、建立通道、建立队列、订阅消息。程序并不会立即执行完毕，而是等待有消息时执行回调函数<code v-pre>handleDelivery()</code>。</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token keyword">package</span> <span class="token namespace">cn<span class="token punctuation">.</span>itcast<span class="token punctuation">.</span>mq<span class="token punctuation">.</span>helloworld</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>rabbitmq<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">TimeoutException</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConsumerTest</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">TimeoutException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 1.建立连接</span></span>
<span class="line">        <span class="token class-name">ConnectionFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConnectionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 1.1.设置连接参数，分别是：主机名、端口号、vhost、用户名、密码</span></span>
<span class="line">        factory<span class="token punctuation">.</span><span class="token function">setHost</span><span class="token punctuation">(</span><span class="token string">"192.168.18.129"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        factory<span class="token punctuation">.</span><span class="token function">setPort</span><span class="token punctuation">(</span><span class="token number">5672</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        factory<span class="token punctuation">.</span><span class="token function">setVirtualHost</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        factory<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token string">"zhangziyi"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        factory<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">"991118"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 1.2.建立连接</span></span>
<span class="line">        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">newConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 2.创建通道Channel</span></span>
<span class="line">        <span class="token class-name">Channel</span> channel <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 3.创建队列</span></span>
<span class="line">        <span class="token class-name">String</span> queueName <span class="token operator">=</span> <span class="token string">"simple.queue"</span><span class="token punctuation">;</span></span>
<span class="line">        channel<span class="token punctuation">.</span><span class="token function">queueDeclare</span><span class="token punctuation">(</span>queueName<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 4.订阅消息</span></span>
<span class="line">        channel<span class="token punctuation">.</span><span class="token function">basicConsume</span><span class="token punctuation">(</span>queueName<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">DefaultConsumer</span><span class="token punctuation">(</span>channel<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token annotation punctuation">@Override</span></span>
<span class="line">            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handleDelivery</span><span class="token punctuation">(</span><span class="token class-name">String</span> consumerTag<span class="token punctuation">,</span> <span class="token class-name">Envelope</span> envelope<span class="token punctuation">,</span></span>
<span class="line">                                       <span class="token class-name">AMQP<span class="token punctuation">.</span>BasicProperties</span> properties<span class="token punctuation">,</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> body<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">// 5.处理消息</span></span>
<span class="line">                <span class="token class-name">String</span> message <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"接收到消息：【"</span> <span class="token operator">+</span> message <span class="token operator">+</span> <span class="token string">"】"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"等待接收消息。。。。"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、springamqp" tabindex="-1"><a class="header-anchor" href="#_3、springamqp"><span>3、SpringAMQP</span></a></h2>
<p>AMQP(Advanced Message Queue Protocol)：高级消息队列协议，用于在应用程序之间传递业务消息的开放标准。该协议与语言和平台无关，更符合微服务中独立性的要求。
Spring AMQP 是基于 AMQP 协议定义的一套 API 规范，提供了模板来发送和接收消息。包含两部分，其中 spring-amqp 是基础抽象，spring-rabbit 是底层的默认实现。</p>
<h3 id="_1-基本消息队列" tabindex="-1"><a class="header-anchor" href="#_1-基本消息队列"><span>(1) 基本消息队列</span></a></h3>
<p><img src="@source/dev/sys_infras/micro_service/img_42.png" alt="img_42.png">
实现步骤：</p>
<ol>
<li>引入 AMQP 依赖</li>
</ol>
<p>在父工程中引入该依赖</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre v-pre><code><span class="line"><span class="token comment">&lt;!--AMQP依赖，包含RabbitMQ--></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-amqp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>消息发布</li>
</ol>
<p>在消息发布者中添加 RabbitMQ 连接信息：</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">spring</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">rabbitmq</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">host</span><span class="token punctuation">:</span> 192.168.18.129</span>
<span class="line">    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">5672</span></span>
<span class="line">    <span class="token key atrule">virtual-host</span><span class="token punctuation">:</span> /</span>
<span class="line">    <span class="token key atrule">username</span><span class="token punctuation">:</span> zhangziyi</span>
<span class="line">    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">991118</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发布消息：</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@RunWith</span><span class="token punctuation">(</span><span class="token class-name">SpringRunner</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token annotation punctuation">@SpringBootTest</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringAMQPTest</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token annotation punctuation">@Resource</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">RabbitTemplate</span> rabbitTemplate<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testPublishMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">String</span> message <span class="token operator">=</span> <span class="token string">"你好，我是张子亿！"</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">String</span> queueName <span class="token operator">=</span> <span class="token string">"simple.queue"</span><span class="token punctuation">;</span></span>
<span class="line">        rabbitTemplate<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span>queueName<span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>消息订阅</li>
</ol>
<p>消息订阅者添加 RabbitMQ 连接信息，与发布者相同。
创建 bean，监听队列消息并规定回调方法。</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token keyword">package</span> <span class="token namespace">cn<span class="token punctuation">.</span>itcast<span class="token punctuation">.</span>mq<span class="token punctuation">.</span>listener</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>rabbit<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RabbitListener</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token annotation punctuation">@Component</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringRabbitListener</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>queues <span class="token operator">=</span> <span class="token string">"simple.queue"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">listenSimpleQueue</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"监听到消息！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注：RabbitMQ 消息阅后即焚，没有消息回溯功能。</p>
</blockquote>
<h3 id="_2-工作队列" tabindex="-1"><a class="header-anchor" href="#_2-工作队列"><span>(2) 工作队列</span></a></h3>
<p>工作队列，和基本队列大体一致，不同之处在于有多个消费者。可以提升消息处理速度，避免队列消息堆积。
<img src="@source/dev/sys_infras/micro_service/img_43.png" alt="img_43.png">
实现步骤：</p>
<ol>
<li>Publisher 在 1s 内推送 50 条消息</li>
</ol>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testWorkQueueSendMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">String</span> message <span class="token operator">=</span> <span class="token string">"你好，我是张子亿，今天可能会加班！重复："</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">String</span> queueName <span class="token operator">=</span> <span class="token string">"simple.queue"</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">50</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            rabbitTemplate<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span>queueName<span class="token punctuation">,</span> message <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注：Spring AMQP 不会自动创建队列，需要在浏览器中手动创建队列。</p>
</blockquote>
<ol start="2">
<li>两个 Consumer 合作接收消息</li>
</ol>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@Component</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringRabbitListener</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>queues <span class="token operator">=</span> <span class="token string">"simple.queue"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">listenWorkQueue1</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"消费者1监听到消息！"</span> <span class="token operator">+</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>queues <span class="token operator">=</span> <span class="token string">"simple.queue"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">listenWorkQueue2</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"消费者2监听到消息！"</span> <span class="token operator">+</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>消息队列有预取(prefetch)机制，会将消息提前存放到已存在 Consumer 的 Channel 中，这会导致处理消息能力不同的 Consumer 处理相同数量的消息。</p>
<ol start="3">
<li>配置 prefetch</li>
</ol>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">spring</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">rabbitmq</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">listener</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">simple</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">prefetch</span><span class="token punctuation">:</span> <span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>预取设置为 1，消息处理能力强的消费者将处理更多消息。</p>
<h3 id="_3-发布-publish-、订阅-subscribe" tabindex="-1"><a class="header-anchor" href="#_3-发布-publish-、订阅-subscribe"><span>(3) 发布(Publish)、订阅(Subscribe)</span></a></h3>
<p><img src="@source/dev/sys_infras/micro_service/img_44.png" alt="img_44.png">
发布、订阅模型中加入了交换机(exchange)，消息发布者不再关心队列，会将消息发送至交换机，交换机将消息投递到队列。根据 exchange 类型的不同，分为：</p>
<ul>
<li>Fanout：广播</li>
<li>Direct：路由</li>
<li>Topic：话题</li>
</ul>
<blockquote>
<p>注：交换机是无法缓存消息的，如果路由失效，消息会丢失。</p>
</blockquote>
<h4 id="fanout-广播" tabindex="-1"><a class="header-anchor" href="#fanout-广播"><span>Fanout 广播</span></a></h4>
<p>Fanout Exchange 会将消息广播到每一个与其绑定的队列中。
<img src="@source/dev/sys_infras/micro_service/img_45.png" alt="img_45.png">
实现步骤</p>
<ol>
<li>声明交换机，并将队列绑定到交换机</li>
</ol>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token keyword">package</span> <span class="token namespace">cn<span class="token punctuation">.</span>itcast<span class="token punctuation">.</span>mq<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">Binding</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">BindingBuilder</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">FanoutExchange</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">Queue</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token annotation punctuation">@Configuration</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FanoutConfig</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 声明一个交换机</span></span>
<span class="line">    <span class="token annotation punctuation">@Bean</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">FanoutExchange</span> <span class="token function">fanoutExchange</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">FanoutExchange</span><span class="token punctuation">(</span><span class="token string">"zzy.fanout"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 声明两个队列</span></span>
<span class="line">    <span class="token annotation punctuation">@Bean</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">Queue</span> <span class="token function">fanoutQueue1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token punctuation">(</span><span class="token string">"fanout.queue1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@Bean</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">Queue</span> <span class="token function">fanoutQueue2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token punctuation">(</span><span class="token string">"fanout.queue2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 将两个队列绑定到交换机</span></span>
<span class="line">    <span class="token annotation punctuation">@Bean</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">Binding</span> <span class="token function">bindingQueue1</span><span class="token punctuation">(</span><span class="token class-name">Queue</span> fanoutQueue1<span class="token punctuation">,</span> <span class="token class-name">FanoutExchange</span> fanoutExchange<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token class-name">BindingBuilder</span></span>
<span class="line">                <span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>fanoutQueue1<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">.</span><span class="token keyword">to</span><span class="token punctuation">(</span>fanoutExchange<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@Bean</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">Binding</span> <span class="token function">bindingQueue2</span><span class="token punctuation">(</span><span class="token class-name">Queue</span> fanoutQueue2<span class="token punctuation">,</span> <span class="token class-name">FanoutExchange</span> fanoutExchange<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token class-name">BindingBuilder</span></span>
<span class="line">                <span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>fanoutQueue2<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">.</span><span class="token keyword">to</span><span class="token punctuation">(</span>fanoutExchange<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>消费者监听队列</li>
</ol>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">    <span class="token comment">// 广播模式监听队列</span></span>
<span class="line">    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>queues <span class="token operator">=</span> <span class="token string">"fanout.queue1"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">listenFanoutQueue1</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"消费者1监听到消息！"</span> <span class="token operator">+</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>queues <span class="token operator">=</span> <span class="token string">"fanout.queue2"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">listenFanoutQueue2</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"消费者2监听到消息！"</span> <span class="token operator">+</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>发布者向交换机发送消息</li>
</ol>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">    <span class="token comment">// 向 Fanout 交换机发送消息</span></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testFanoutExchange</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">String</span> message <span class="token operator">=</span> <span class="token string">"大家好，我是张子亿，这是一条测试消息！"</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">String</span> exchangeName <span class="token operator">=</span> <span class="token string">"zzy.fanout"</span><span class="token punctuation">;</span></span>
<span class="line">        rabbitTemplate<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span>exchangeName<span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="direct-路由" tabindex="-1"><a class="header-anchor" href="#direct-路由"><span>Direct 路由</span></a></h4>
<p>Direct Exchange 会将接收到的消息按照规则路由到指定的队列。</p>
<ul>
<li>每个队列都有一个或多个<code v-pre>bindingKey</code></li>
<li>发布者发送消息时，指定消息的<code v-pre>routingKey</code></li>
<li>Exchange 将消息路由到<code v-pre>bindingKey</code>和<code v-pre>routingKey</code>一致的队列</li>
<li></li>
</ul>
<p><img src="@source/dev/sys_infras/micro_service/img_46.png" alt="img_46.png"></p>
<p>实现步骤</p>
<ol>
<li>使用<code v-pre>@RabbitListener</code>声明 exchange、queue 和 bindingKey，并监听相应队列</li>
</ol>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">    <span class="token comment">// 路由模式监听队列</span></span>
<span class="line">    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>bindings <span class="token operator">=</span> <span class="token annotation punctuation">@QueueBinding</span><span class="token punctuation">(</span></span>
<span class="line">            value <span class="token operator">=</span> <span class="token annotation punctuation">@Queue</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"direct.queue1"</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">            exchange <span class="token operator">=</span> <span class="token annotation punctuation">@Exchange</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"zzy.direct"</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">            key <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"3A大作"</span><span class="token punctuation">,</span> <span class="token string">"荒野大镖客2"</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">listenDirectQueue1</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"荒野大镖客2监听到消息："</span> <span class="token operator">+</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>bindings <span class="token operator">=</span> <span class="token annotation punctuation">@QueueBinding</span><span class="token punctuation">(</span></span>
<span class="line">            value <span class="token operator">=</span> <span class="token annotation punctuation">@Queue</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"direct.queue2"</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">            exchange <span class="token operator">=</span> <span class="token annotation punctuation">@Exchange</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"zzy.direct"</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">            key <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"3A大作"</span><span class="token punctuation">,</span> <span class="token string">"死亡搁浅"</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">listenDirectQueue2</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"死亡搁浅监听到消息："</span> <span class="token operator">+</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>消息发布者将消息发送至交换机，并指定<code v-pre>routingKey</code></li>
</ol>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">    <span class="token comment">// 向 Direct 交换机发送消息</span></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testDirectExchange</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">String</span> message <span class="token operator">=</span> <span class="token string">"你的音乐真好听！"</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">String</span> exchangeName <span class="token operator">=</span> <span class="token string">"zzy.direct"</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">String</span> routingKey <span class="token operator">=</span> <span class="token string">"死亡搁浅"</span><span class="token punctuation">;</span></span>
<span class="line">        rabbitTemplate<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span>exchangeName<span class="token punctuation">,</span> routingKey<span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="topic" tabindex="-1"><a class="header-anchor" href="#topic"><span>Topic</span></a></h4>
<p>Topic Exchange 和 Direct Exchange 都有<code v-pre>bindingKey</code>和<code v-pre>routingKey</code>的概念，区别在于 Topic Exchange 的 key 具有层级话题属性，使用<code v-pre>.</code>表示层级。例如：NBA 选秀消息<code v-pre>NBA.draft</code>，NBA 交易消息<code v-pre>NBA.transaction</code>。
<code v-pre>bindingKey</code>可以使用通配符，以达到不同层级话题绑定。</p>
<ul>
<li><code v-pre>#</code>：代指 0 个或多个单词</li>
<li><code v-pre>*</code>：代指一个单词</li>
</ul>
<p><img src="@source/dev/sys_infras/micro_service/img_47.png" alt="img_47.png">
实现步骤</p>
<ol>
<li>使用<code v-pre>@RabbitListener</code>注解声明交换机、绑定队列，监听队列</li>
</ol>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">    <span class="token comment">// Topic 监听队列</span></span>
<span class="line">    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>bindings <span class="token operator">=</span> <span class="token annotation punctuation">@QueueBinding</span><span class="token punctuation">(</span></span>
<span class="line">            exchange <span class="token operator">=</span> <span class="token annotation punctuation">@Exchange</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"zzy.topic"</span><span class="token punctuation">,</span> type <span class="token operator">=</span> <span class="token class-name">ExchangeTypes</span><span class="token punctuation">.</span><span class="token constant">TOPIC</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">            value <span class="token operator">=</span> <span class="token annotation punctuation">@Queue</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"topic.queue1"</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">            key <span class="token operator">=</span> <span class="token string">"NBA.#"</span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">listenTopicQueue1</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"NBA球迷收到消息："</span> <span class="token operator">+</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>bindings <span class="token operator">=</span> <span class="token annotation punctuation">@QueueBinding</span><span class="token punctuation">(</span></span>
<span class="line">            exchange <span class="token operator">=</span> <span class="token annotation punctuation">@Exchange</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"zzy.topic"</span><span class="token punctuation">,</span> type <span class="token operator">=</span> <span class="token class-name">ExchangeTypes</span><span class="token punctuation">.</span><span class="token constant">TOPIC</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">            value <span class="token operator">=</span> <span class="token annotation punctuation">@Queue</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"topic.queue2"</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">            key <span class="token operator">=</span> <span class="token string">"#.transaction"</span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">listenTopicQueue2</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"NBA经理人收到消息："</span> <span class="token operator">+</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>消息发布者发送消息</li>
</ol>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">    <span class="token comment">// 向 Topic 交换机发送消息</span></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testTopicExchange</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">String</span> message <span class="token operator">=</span> <span class="token string">"骑士球星特里斯坦·汤普森出轨！"</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">String</span> exchangeName <span class="token operator">=</span> <span class="token string">"zzy.topic"</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">String</span> routingKey <span class="token operator">=</span> <span class="token string">"NBA.news"</span><span class="token punctuation">;</span></span>
<span class="line">        rabbitTemplate<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span>exchangeName<span class="token punctuation">,</span> routingKey<span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-消息转换器" tabindex="-1"><a class="header-anchor" href="#_4-消息转换器"><span>(4) 消息转换器</span></a></h3>
<blockquote>
<p><strong>序列化和反序列化</strong>
序列化（Serialization）和反序列化（Deserialization）是指将数据结构或对象转换为可存储或传输的格式，以及将存储或传输的格式重新转换为原始数据结构或对象的过程。
<strong>序列化：</strong> 在计算机科学中，序列化是指将数据结构或对象转换为一种格式，通常是字节流或文本，以便将其存储在文件、数据库或通过网络传输。序列化将数据转换为一种能够被持久化存储或传输的形式，使得数据可以在不同的时间和地点重新还原。
<strong>反序列化：</strong> 反序列化是序列化的逆过程，它将存储或传输的格式重新转换为原始的数据结构或对象。通过反序列化，我们可以从文件、数据库或网络接收的数据中还原出原始的数据对象，以便在程序中进行处理或操作。
常见的用例包括将对象序列化后存储在磁盘上，以便在需要时进行读取和恢复；或者将对象序列化后通过网络传输，以便在不同的系统之间进行数据交换。
在编程中，序列化和反序列化通常涉及将对象的状态转换为字节流或类似的格式。这在各种编程语言和框架中都有相关的支持库，例如在 Java 中有 Java 序列化（Java Serialization）、在 Python 中有pickle 模块等。值得注意的是，不同的序列化方式可能有不同的性能、兼容性和安全性考虑，选择适合场景的序列化方式很重要。</p>
</blockquote>
<p>发布者发送消息，类型是<code v-pre>Object</code>，因此可以发送任意对象类型的消息，Spring AMQP 会帮我们序列化为字节后发送。
<img src="@source/dev/sys_infras/micro_service/img_48.png" alt="img_48.png">
Spring 的对消息对象的处理是由 <code v-pre>org.springframework.amqp.support.converter.MessageConverter</code>来处理的。而默认实现是<code v-pre>SimpleMessageConverter</code>，基于 jdk 的<code v-pre>ObjectOutputStream</code>完成序列化。JSON 序列化是更优选择。
使用步骤</p>
<ol>
<li>消息发布者配置 JSON 序列化</li>
</ol>
<p>添加 jackson 依赖：</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre v-pre><code><span class="line"><span class="token comment">&lt;!--jackson 依赖--></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.fasterxml.jackson.core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>jackson-databind<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注入消息转换器 bean：</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@Configuration</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MessageConverterConfig</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token annotation punctuation">@Bean</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">MessageConverter</span> <span class="token function">jsonMessageConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Jackson2JsonMessageConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发布消息：</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">    <span class="token comment">// 消息转换测试</span></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testMessageConvert</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> message <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        message<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"文班亚马"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        message<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"age"</span><span class="token punctuation">,</span> <span class="token string">"19"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">String</span> queueName <span class="token operator">=</span> <span class="token string">"object.queue"</span><span class="token punctuation">;</span></span>
<span class="line">        rabbitTemplate<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span>queueName<span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>消息接受者配置 JSON 反序列化</li>
</ol>
<p>添加依赖、注入消息转换器 bean。
监听队列：</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">    <span class="token comment">// 监听 object.queue</span></span>
<span class="line">    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>queues <span class="token operator">=</span> <span class="token string">"object.queue"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">listenObjectQueue</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"监听到对象："</span> <span class="token operator">+</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


