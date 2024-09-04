<template><div><h1 id="_2-线程模型" tabindex="-1"><a class="header-anchor" href="#_2-线程模型"><span>2. 线程模型</span></a></h1>
<h2 id="redis-为什么快" tabindex="-1"><a class="header-anchor" href="#redis-为什么快"><span>Redis 为什么快？</span></a></h2>
<p>Redis 速度快的原因包括基于内存、单线程模型和 I/O 多路复用。</p>
<p>首先，Redis 是基于内存的，并且采用了高效的数据结构。相比基于磁盘的方式要快得多。</p>
<p>其次，Redis 执行命令是单线程的，这就避免了多线程切换带来的额外开销。</p>
<p>最后，Redis 使用 I/O 多路复用机制，I/O 多路复用是指同一线程同时监听多个客户端连接，收到执行命令请求后交由 Server 执行。
避免了重复创建、断开连接带来的开销。</p>
<h2 id="redis-是单线程的吗" tabindex="-1"><a class="header-anchor" href="#redis-是单线程的吗"><span>Redis 是单线程的吗？</span></a></h2>
<p>Redis 执行命令时使用单线程模型，但 Redis 程序并不是单线程的。</p>
<p>Redis 程序本身还包括了多个后台线程，例如关闭文件、AOF 刷盘、释放内存、处理 I/O 请求等。
这些任务相对耗时，如果让这些任务共用执行命令的线程，执行命令任务可能会长时间阻塞。</p>
</div></template>


