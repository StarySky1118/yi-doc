<template><div><h1 id="_1-数据类型" tabindex="-1"><a class="header-anchor" href="#_1-数据类型"><span>1. 数据类型</span></a></h1>
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
</div></template>


