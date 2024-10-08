<template><div><h1 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span>MySQL</span></a></h1>
<h2 id="mysql-慢查询" tabindex="-1"><a class="header-anchor" href="#mysql-慢查询"><span>MySQL 慢查询</span></a></h2>
<p>MySQL 慢查询是指查询时间超过阈值的查询语句。MySQL 提供了慢查询日志记录这些超过阈值的查询。</p>
<p>可以使用 <code v-pre>explain</code>命令查询语句的执行计划，比较重要的字段是 <code v-pre>type</code>和 <code v-pre>extra</code>。<code v-pre>type</code> 表示查询方式，常见值有 <code v-pre>ALL</code>（全表扫描）、<code v-pre>index</code>（对二级索引进行遍历）、<code v-pre>range</code>（索引范围）、<code v-pre>ref</code>（非唯一索引多个）、<code v-pre>eq_ref</code>（通常出现在多表联查，唯一索引）和 <code v-pre>const</code>（主键查、唯一索引查）。</p>
<p>可以使用 <code v-pre>type</code>判断索引是否对查询起到了优化作用。</p>
<p><code v-pre>extra</code>值有 <code v-pre>Using filesort</code>（无法使用索引排序，使用了排序算法进行排序）、<code v-pre>Using index</code>从使用了覆盖索引无需回表、<code v-pre>Using Temporary</code>使用临时表存储中间结果。</p>
<h2 id="mysql-一张表能存放多少数据" tabindex="-1"><a class="header-anchor" href="#mysql-一张表能存放多少数据"><span>MySQL 一张表能存放多少数据</span></a></h2>
<p>MySQL InnoDB 引擎一条记录最大字节长度为 65535，即 64KB。若硬盘大小为 64G，则最多存储 100 万条记录。</p>
<h2 id="说说-mysql-事务-幻读是什么-何时出现幻读" tabindex="-1"><a class="header-anchor" href="#说说-mysql-事务-幻读是什么-何时出现幻读"><span>说说 MySQL 事务？幻读是什么？何时出现幻读？</span></a></h2>
<p>MySQL InnoDB 存储引擎是支持事务的，默认隔离级别是可重复读，即在一个事务中，多次查询同一条记录得到的结果是一致的。</p>
<p>幻读是指在事务中，符合条件的记录数改变了。</p>
<p>当事务期间其他事务 <code v-pre>insert</code>，本事务 <code v-pre>update</code>时，本事务并不会根据 MVCC 的可见性判断记录是否可见，而是直接修改该记录，多出了一条自己修改的记录，导致幻读。</p>
<h2 id="索引有哪些优点或缺点" tabindex="-1"><a class="header-anchor" href="#索引有哪些优点或缺点"><span>索引有哪些优点或缺点？</span></a></h2>
<p>索引优点：</p>
<ol>
<li>提高查询速度</li>
</ol>
<p>缺点：</p>
<ol>
<li>占用物理存储空间</li>
<li>在插入、删除、更新数据时会增加额外开销</li>
</ol>
<h2 id="mysql-中的三大日志及作用" tabindex="-1"><a class="header-anchor" href="#mysql-中的三大日志及作用"><span>MySQL 中的三大日志及作用</span></a></h2>
<p>MySQL 中的三大日志包括 Undo Log、Redo Log 和 binlog。</p>
<p>Undo Log 存储了记录修改之前的状态，该日志对实现事务的原子性和隔离性起到了重要作用。</p>
<p>Redo Log 记录了数据页的修改操作，通过 Redo Log 可以将修改数据写入磁盘，实现持久性。</p>
<p>binlog 是一种逻辑日志，记录了 SQL 语句的内容，可以使用 binlog 实现数据备份、主从复制和数据恢复。</p>
<h2 id="常见索引失效场景" tabindex="-1"><a class="header-anchor" href="#常见索引失效场景"><span>常见索引失效场景</span></a></h2>
<ol>
<li>对索引使用函数或表达式</li>
</ol>
<p>如果对索引使用函数或表达式，索引会失效。</p>
<ol start="2">
<li>
<p>对索引字段使用左模糊或左右模糊匹配</p>
</li>
<li>
<p>where 子句中使用了 or，并且某个条件无法使用索引</p>
</li>
<li>
<p>使用联合索引，没有遵循最左匹配原则，因为记录会根据联合索引中从左到右出现的每个字段进行排序</p>
</li>
</ol>
<h2 id="jdbc-executeupdate" tabindex="-1"><a class="header-anchor" href="#jdbc-executeupdate"><span>JDBC <code v-pre>executeUpdate()</code></span></a></h2>
<p>执行 <code v-pre>ps.executeUpdate()</code> 方法的返回值是一个 <code v-pre>int</code> 类型的值，表示受影响的行数，即成功插入或更新的记录数量。
在这种情况下，如果一切顺利且没有异常，返回值将是插入成功的记录数，通常是 1（因为一次插入一条数据）。</p>
</div></template>


