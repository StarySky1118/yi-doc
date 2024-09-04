<template><div><h1 id="redis" tabindex="-1"><a class="header-anchor" href="#redis"><span>Redis</span></a></h1>
<h2 id="介绍一下-redis-常用的数据类型-有哪些应用场景-底层是如何实现的" tabindex="-1"><a class="header-anchor" href="#介绍一下-redis-常用的数据类型-有哪些应用场景-底层是如何实现的"><span>介绍一下 Redis 常用的数据类型，有哪些应用场景？底层是如何实现的？</span></a></h2>
<p>Redis 中最常用的数据类型有五种：String、List、Set、Hash 和 ZSet。</p>
<h3 id="string" tabindex="-1"><a class="header-anchor" href="#string"><span>String</span></a></h3>
<p>String 可以存储字符串或数字。适用的场景有自增计数与分布式锁。</p>
<p>Redis 是一种单线程设计，并且原生支持 INCR 命令进行自增，非常适合自增计数。</p>
<p>Redis 的 set 命令有个 <code v-pre>NX</code> 选项，表示不存在时插入，该命令非常适合实现分布式锁。
可以使用 <code v-pre>set</code> 命令附带 <code v-pre>nx</code> 选项实现加锁操作，value 可以存储客户端标识。
解锁需要使用 lua 脚本，先判断锁属于自己，再删除。这样就可以避免，在判断与删除之间，锁过期，其他线程获取到锁导致的误删。</p>
<p>String 底层是使用简单动态字符串实现的。
相比 C 语言中的字符数组，它有维护自动长度属性、动态扩容的优势。</p>
<h3 id="list" tabindex="-1"><a class="header-anchor" href="#list"><span>List</span></a></h3>
<p>List 是列表，列表元素有序、可重复。</p>
<p>List 底层是使用 quicklist 实现的。
quicklist 是一个链表，链表的每个结点都是一个压缩列表。
压缩列表使用连续的内存区域存储元素，利用遍历的方式操作，由于元素数量较少，遍历操作的方式开销反而是最小的。</p>
<h3 id="set" tabindex="-1"><a class="header-anchor" href="#set"><span>Set</span></a></h3>
<p>Set 是集合，集合元素无序、不可重复。</p>
<p>Set 适用于实现唯一性操作、共同关注、抽奖活动等。</p>
<p>Set 有随机获取元素的命令，可用于实现抽奖活动。</p>
<p>Set 底层实现包括整数集合和 Hash。</p>
<p>当元素数量比较少并且元素都为整数时，使用整数集合；当元素数量较多时，使用哈希表。
整数集合使用连续的内存区域，并且支持整数类型升级。
哈希表使用拉链法实现。使用数组表示哈希桶，当出现哈希冲突时，使用链表链接。
当哈希冲突过于严重，链表会非常长，遍历性能不佳，因此 Redis 引入了 Rehash 机制。
Redis 定义了 load factor，其定义为存储结点与数组长度的比值。比值越大，哈希冲突越严重。
当 load factor 到达一定阈值，会进行 rehash，即将数据拷贝到长度更大的数组。</p>
<h3 id="hash" tabindex="-1"><a class="header-anchor" href="#hash"><span>Hash</span></a></h3>
<p>Hash 可以存储多个键值对，适用于缓存对象。</p>
<p>Hash 底层是使用压缩列表或哈希表实现的。
当键值对数量较少，使用压缩列表实现，当键值对数量超过一定阈值，使用哈希表实现。</p>
<h3 id="zset" tabindex="-1"><a class="header-anchor" href="#zset"><span>ZSet</span></a></h3>
<p>ZSet 是具有排序属性的 Set，能够自动维护顺序。非常适合实现排行榜功能。</p>
<p>ZSet 底层使用压缩列表或跳表实现。
当元素数量较少时，使用压缩列表；否则使用跳表。
跳表是一种多层有序链表，可以实现跨越式的遍历，将元素定位时间复杂度降为对数级。</p>
<h2 id="为什么-lua-脚本可以保证原子性" tabindex="-1"><a class="header-anchor" href="#为什么-lua-脚本可以保证原子性"><span>为什么 Lua 脚本可以保证原子性</span></a></h2>
<p>Redis 在执行命令时是单线程的，Redis 在接收到 Lua 脚本后，会持续执行脚本中的命令直至结束，期间不会执行其他命令，这样保证了 Lua 脚本命令的原子性。</p>
<h2 id="mysql-和-redis-数据同步方式" tabindex="-1"><a class="header-anchor" href="#mysql-和-redis-数据同步方式"><span>MySQL 和 Redis 数据同步方式</span></a></h2>
<p>MySQL 和 Redis 数据同步可以使用旁路缓存策略。这个策略分为两部分：读策略和写策略。在读策略中，首先读取缓存，缓存不命中则读取数据库并写入缓存。在写策略中，首先更新数据库，再删除缓存。</p>
<p>之所以删除缓存而不是更新缓存，是因为缓存内容可能使用了复杂的查询操作，更新缓存比删除困难。</p>
<p>如果先删缓存，再更新数据库，由于数据库更新操作比较耗时，在两个操作之间有其他线程读，就会导致缓存旧数据，导致数据不一致。如果先更新数据库再删缓存，就不会出现上述问题。</p>
<h2 id="缓存雪崩、缓存击穿、缓存穿透" tabindex="-1"><a class="header-anchor" href="#缓存雪崩、缓存击穿、缓存穿透"><span>缓存雪崩、缓存击穿、缓存穿透</span></a></h2>
<p>缓存雪崩是指在同一时间内大量 key 同时过期，大量请求打到数据库，导致数据库压力骤增。解决方案是给过期时间都加上一个随机数，保证数据不会在同一时间过期。</p>
<p>缓存击穿是指某些热点 key 突然失效，导致大量请求访问数据库，导致数据库压力骤增。解决方案是不给 key 显式设置过期时间，而是手动操作缓存。</p>
<p>缓存穿透是指用户访问的数据既不在缓存中，也不在 MySQL 中，大量请求到达数据库，导致数据库压力骤增。缓存穿透解决方案：</p>
<ol>
<li>限制非法请求</li>
</ol>
<p>例如不合法请求参数直接返回错误</p>
<ol start="2">
<li>缓存空值或默认值</li>
</ol>
<p>在线上业务发现缓存穿透现象时，可以针对查询数据，在缓存中设置空值。</p>
<ol start="3">
<li>使用布隆过滤器快速判断数据不存在</li>
</ol>
<p>布隆过滤器使用到了一个位图数组和多个哈希函数，每当数据库存储一个数据，就将该数据输入多个哈希函数，对位图数组长度取模，指定位置 1。查询布隆过滤器得知数据不存在，则数据库中一定不存在该数据。</p>
<h2 id="redis-有哪些过期策略" tabindex="-1"><a class="header-anchor" href="#redis-有哪些过期策略"><span>Redis 有哪些过期策略？</span></a></h2>
<p>Redis 有主动过期和被动过期两种策略。</p>
<p>主动过期是指 Redis 使用异步线程主动扫描键，将过期的键值对删除。</p>
<p>被动过期是指当客户端访问某个键值对时，首先判断其是否过期，过期则删除。</p>
<h2 id="redis-大-key-有什么问题" tabindex="-1"><a class="header-anchor" href="#redis-大-key-有什么问题"><span>Redis 大 key 有什么问题？</span></a></h2>
<p>Redis 大 key 是指存储大量数据的单个建。对大 key 的操作比较耗时，可能会阻塞其他操作。为了避免大 key 引发的问题，需要合理设计数据结构，将大 key 进行拆分，如果大 key 无法拆分，需要保证设置合适的过期时间，确保数据及时删除，避免长时间占用内存。</p>
</div></template>


