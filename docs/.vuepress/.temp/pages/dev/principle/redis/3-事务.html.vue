<template><div><h1 id="_3-事务" tabindex="-1"><a class="header-anchor" href="#_3-事务"><span>3. 事务</span></a></h1>
<p>事务的特性包括 ACID，即原子性、一致性、隔离性和持久性。</p>
<p>Redis 执行命令使用单线程模型，因此无需实现隔离性。
仅需实现原子性和持久性。</p>
<h2 id="原子性" tabindex="-1"><a class="header-anchor" href="#原子性"><span>原子性</span></a></h2>
<p>为实现事务原子性，可以使用 lua 脚本或 Redis 事务。</p>
<p>Redis 在接收到 lua 脚本后，会持续执行其中的命令直至结束，中间不会执行其他命令，因此 lua 脚本可以实现多命令执行的原子性。</p>
<p>Redis 事务通过 <code v-pre>MULTI-EXEC</code> 使用，也可以保证多条命令执行的原子性。</p>
<p>但两种方式都没有失败回滚机制。</p>
<h2 id="持久性" tabindex="-1"><a class="header-anchor" href="#持久性"><span>持久性</span></a></h2>
<p>Redis 有两种持久化机制：AOF 日志和 RDB 快照。</p>
<p>AOF 日志的原理是：每进行一次写操作，就将该命令以<strong>顺序写</strong>的方式写入 AOF 日志。
重启 Redis 时，就可以通过执行日志中的所有命令进行恢复。
该种方式与 MySQL Redo Log 十分类似。</p>
<p>RDB 快照的原理是：每隔一段时间，拍摄内存快照，重启时使用这个内存快照进行恢复。</p>
<p>两种方式各有优缺点。</p>
<p>AOF 日志可以通过配置，在每次写操作后都进行 AOF 写入，以实现可靠的持久性，但这样会降低写操作的执行效率。
同时，大量写操作后，AOF 日志中的内容会非常多，占用大量磁盘空间，并且恢复时十分耗时。</p>
<p>RDB 快照方式，如果拍摄快照间隔较大，持久性的可靠性就比较低。</p>
</div></template>


