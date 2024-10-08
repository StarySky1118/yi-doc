<template><div><h1 id="_3-使用篇" tabindex="-1"><a class="header-anchor" href="#_3-使用篇"><span>3. 使用篇</span></a></h1>
<h2 id="为什么不推荐使用外键" tabindex="-1"><a class="header-anchor" href="#为什么不推荐使用外键"><span>为什么不推荐使用外键？</span></a></h2>
<p>外键可以自动维护数据完整性约束，但实际使用中会出现性能和业务上的问题。</p>
<p><strong>性能问题</strong></p>
<p>性能问题主要包括：级联更新和额外检查。</p>
<ol>
<li>级联更新</li>
</ol>
<p>更新被引表时，可能触发引用表的级联更新，增大数据库压力，并且可能导致锁问题。</p>
<ol start="2">
<li>额外检查开销</li>
</ol>
<p>每次在引用表中修改、新增记录都要进行外键约束检查，增大性能开销。</p>
<p><strong>业务问题</strong></p>
<ol>
<li>缺乏灵活性</li>
</ol>
<p>强制外键约束缺乏灵活性，通常无法满足需求。</p>
<ol start="2">
<li>分库条件下失效</li>
</ol>
<p>分库条件下无法使用外键约束。</p>
<p>因此，实际使用中不会使用物理外键，而是通过业务代码进行相关约束。</p>
<h2 id="为什么使用逻辑删除" tabindex="-1"><a class="header-anchor" href="#为什么使用逻辑删除"><span>为什么使用逻辑删除</span></a></h2>
<p>逻辑删除是将记录标记为删除，而不是物理删除。
使用逻辑删除可以方便地进行数据恢复，便于审计与追溯。</p>
<h2 id="有哪些常见的性能优化方案" tabindex="-1"><a class="header-anchor" href="#有哪些常见的性能优化方案"><span>有哪些常见的性能优化方案</span></a></h2>
<p>主要包括 SQL 语句优化、库表设计优化和配置优化。</p>
<p><strong>SQL 语句优化</strong></p>
<p>SQL 语句优化是指使用 IO 和 CPU 成本更低的 SQL 语句。例如，避免使用 <code v-pre>select *</code>，仅选择必要的列、合理使用多表联查等</p>
<p><strong>库表设计优化</strong></p>
<p>库表设计优化包括合理使用索引、分库分表等。</p>
<p><strong>配置优化</strong></p>
<p>配置优化是指根据硬件条件与工作负载合理设置配置参数，例如连接池、日志参数等。</p>
<h2 id="如何实现数据库不停服迁移" tabindex="-1"><a class="header-anchor" href="#如何实现数据库不停服迁移"><span>如何实现数据库不停服迁移？</span></a></h2>
<p>不停服迁移可以使用双写策略。</p>
<p>首先将新库作为旧库的从库，进行数据同步；
然后在业务代码中编写双写逻辑，即既写主库又写从库，双写操作要求能够使用配置实时开关；
数据同步完成后，在业务低峰期，开启双写；
持续进行数据核对；
确认双写代码无误，进入灰度切流状态，例如先将 1% 的读请求切到从库，逐步扩大，直到 100%；
继续保留双写，确保新库没有问题，关闭双写。</p>
<h2 id="mysql-中-wal-技术的实现" tabindex="-1"><a class="header-anchor" href="#mysql-中-wal-技术的实现"><span>MySQL 中 WAL 技术的实现？</span></a></h2>
<p>WAL 是一种数据库日志管理技术，它的原理是在数据真正落盘之前，首先记录数据修改日志，这样一来，即使系统崩溃，
数据库仍能通过这个日志进行数据恢复。</p>
<p>MySQL 中 Redo Log 就是对 WAL 技术的一种实现，其工作流程是，数据修改落盘之前，先通过<strong>顺序写</strong>的方式在 Redo Log 中记录数据修改；
再经过<strong>随机写</strong>落盘。只要能够保证 Redo Log 成功落盘，该次数据修改就具备了崩溃恢复能力。</p>
<h2 id="varchar-n-中的-n-指什么" tabindex="-1"><a class="header-anchor" href="#varchar-n-中的-n-指什么"><span><code v-pre>varchar(n)</code> 中的 <code v-pre>n</code> 指什么？</span></a></h2>
<p>字符数目上限。</p>
<h2 id="数据库三大范式是什么" tabindex="-1"><a class="header-anchor" href="#数据库三大范式是什么"><span>数据库三大范式是什么？</span></a></h2>
<p>数据库第一范式确保字段都是原子值。该范式在实际业务开发中是遵守的。
第二范式在第一范式基础上，消除部分依赖。实际业务开发中表主键只有一个，该范式也是遵守的。
第三范式在第二范式基础上，消除传递依赖。在实际开发中，通常会采用冗余的方式减少多表联查，有时不会遵守该范式。</p>
<h2 id="datetime-和-timestamp-类型有什么区别" tabindex="-1"><a class="header-anchor" href="#datetime-和-timestamp-类型有什么区别"><span>DATETIME 和 TIMESTAMP 类型有什么区别？</span></a></h2>
<p>DATETIME 是日期时间，只是单纯存储日期时间；
TIMESTAMP 是时间戳，表示从 1970-1-1 0:0:0 开始的毫秒数，会根据时区显示不同的日期时间。</p>
<h2 id="mysql-中如何解决深度分页问题" tabindex="-1"><a class="header-anchor" href="#mysql-中如何解决深度分页问题"><span>MySQL 中如何解决深度分页问题？</span></a></h2>
<p>深度分页问题是指：当数据量非常大时，按分页访问后面的数据，需要首先跳过大量数据，然后只取小部分数据，查询速度显著变慢。</p>
<p>为解决深度分页问题，可以首先使用主键索引快速定位起始记录，再获取该页数据。这种解决方案只适合自增主键。</p>
<h2 id="mysql-中-inner-join、left-join-和-right-join-有什么区别" tabindex="-1"><a class="header-anchor" href="#mysql-中-inner-join、left-join-和-right-join-有什么区别"><span>MySQL 中 Inner join、Left join 和 right join 有什么区别？</span></a></h2>
<p>Inner join 返回两表符合连接条件的交集。</p>
<p>Left join 返回左表中的每条记录，并将右表中符合连接条件的记录填入；若无，相应字段为 null。</p>
<p>Right join 返回右表中的每条记录，并将左表中符合连接条件的记录填入；若无，相应字段为 null。</p>
<h2 id="drop、delete-和-truncate-有什么区别" tabindex="-1"><a class="header-anchor" href="#drop、delete-和-truncate-有什么区别"><span>drop、delete 和 truncate 有什么区别？</span></a></h2>
<p>drop 删表、delete 删记录、truncate 删表中所有记录。</p>
<h2 id="多表联查选择驱动表时-应选择小表还是大表" tabindex="-1"><a class="header-anchor" href="#多表联查选择驱动表时-应选择小表还是大表"><span>多表联查选择驱动表时，应选择小表还是大表？</span></a></h2>
<p>应选择小表作为驱动表。</p>
<p>由于驱动表需要全表扫描，被驱动表可以使用索引。因此将小表作为驱动表可以降低开销。</p>
<h2 id="mysql-本身有缓存机制吗" tabindex="-1"><a class="header-anchor" href="#mysql-本身有缓存机制吗"><span>MySQL 本身有缓存机制吗？</span></a></h2>
<p>MySQL 使用 Buffer Pool 作为缓存，缓存表和索引。</p>
<p>读取数据时，首先读取 Buffer Pool 中的数据，缓存不命中再读取磁盘，并更新缓存；
修改数据时，首先修改 Buffer Pool 中的数据，等待时机落盘。</p>
</div></template>


