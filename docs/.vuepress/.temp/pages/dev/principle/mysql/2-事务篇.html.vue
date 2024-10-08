<template><div><h1 id="_2-事务篇" tabindex="-1"><a class="header-anchor" href="#_2-事务篇"><span>2. 事务篇</span></a></h1>
<h2 id="事务的特性" tabindex="-1"><a class="header-anchor" href="#事务的特性"><span>事务的特性</span></a></h2>
<p>为保证数据库一致性，科学家提出了事务的概念，事务满足 ACID 特性：</p>
<p><strong>1. 原子性（A）</strong></p>
<p>事务中的多个操作要么同时成功要么同时失败，不存在中间状态。</p>
<p><strong>2. 一致性（C）</strong></p>
<p>事务执行前后，数据库可以保证一致性。这也是提出事务的目的。</p>
<p><strong>3. 隔离性（I）</strong></p>
<p>事务之间相互隔离，有独立的数据空间，不会相互干扰。该特性为满足并发要求。</p>
<p><strong>4. 持久性（D）</strong></p>
<p>事务提交后，对数据的修改是永久的，不会因为故障消失。</p>
<h2 id="mysql-如何实现事务" tabindex="-1"><a class="header-anchor" href="#mysql-如何实现事务"><span>MySQL 如何实现事务</span></a></h2>
<p>实现事务的关键在于事务的 ACID 特性。</p>
<ol>
<li>
<p>MySQL 使用 <strong>Undo Log</strong> 来实现事务的原子性。</p>
</li>
<li>
<p>使用 <strong>MVCC</strong> 和<strong>锁机制</strong>来实现事务的隔离性。</p>
</li>
</ol>
<p>MVCC 实现查询的隔离性，锁实现修改的隔离性。</p>
<ol start="3">
<li>使用 <strong>redo log</strong> 实现事务的持久性。</li>
</ol>
<h2 id="undo-log" tabindex="-1"><a class="header-anchor" href="#undo-log"><span>Undo Log</span></a></h2>
<p>Undo Log 保存了记录的历史版本，通过指针形成版本链，用以实现事务的回滚和记录的可见性。</p>
<h2 id="mvcc" tabindex="-1"><a class="header-anchor" href="#mvcc"><span>MVCC</span></a></h2>
<p>MVCC 即多版本并发控制，它使用 ReadView 和 Undo Log 实现快照读的隔离性。</p>
<p>具体的实现方式是：根据不同的隔离级别，会在事务的不同阶段生成 ReadView。
这个 ReadView 是当前事务情况的快照，包括已提交事务、当前正在活跃的事务和将来可开启的事务。
在查询记录时，会查看记录的 <code v-pre>trx_id</code> 字段，若 <code v-pre>trx_id</code> 代表的事务是正在活跃的事务或将来可开启事务，则该条记录不可见，沿版本链 Undo Log
寻找可见的记录；
若 <code v-pre>trx_id</code> 代表的事务属于已经提交的事务，则该条记录可见。</p>
<p>若事务隔离级别是读已提交，则在每次执行 SQL 语句前生成 ReadView；
若隔离级别是可重复读，则在开启事务时生成 ReadView，在事务执行期间一直使用这个 ReadView。</p>
<h2 id="mysql-事务隔离级别" tabindex="-1"><a class="header-anchor" href="#mysql-事务隔离级别"><span>MySQL 事务隔离级别</span></a></h2>
<p>MySQL 实现了四种事务隔离级别。</p>
<p><strong>1. 读未提交</strong></p>
<p>事务可以读取到其他事务未提交的修改。会导致<strong>脏读</strong>现象。</p>
<p><strong>2. 读已提交</strong></p>
<p>事务只能读取到其他事务已提交的修改。会导致<strong>不可重复读</strong>现象。</p>
<p><strong>3. 可重复读</strong></p>
<p>事务执行期间，多次查询同一条记录结果是相同的。可能出现<strong>幻读</strong>现象。</p>
<p><strong>4. 串行化</strong></p>
<p>事务串行执行。</p>
<h2 id="锁机制" tabindex="-1"><a class="header-anchor" href="#锁机制"><span>锁机制</span></a></h2>
<p>MySQL 使用锁机制实现并发修改隔离。</p>
<p>根据锁的粒度，MySQL 中的锁可分为全局锁、表级锁和行级锁。</p>
<h3 id="全局锁" tabindex="-1"><a class="header-anchor" href="#全局锁"><span>全局锁</span></a></h3>
<p>全局锁锁的是整个数据库。</p>
<h3 id="表级锁" tabindex="-1"><a class="header-anchor" href="#表级锁"><span>表级锁</span></a></h3>
<p>表级锁包括元数据锁（MDL 锁）、意向锁和 AUTO-INC 锁。</p>
<p><strong>1. 元数据锁与意向锁</strong></p>
<p>元数据锁是表结构修改的写锁，意向锁是表结构读取的读锁。</p>
<p>在进行 CRUD 相关操作时，会读取表结构，因此 CRUD 操作会同时给表加意向锁。</p>
<p><strong>2. AUTO-INC 锁</strong></p>
<p>可以使用该锁获取自增主键值。</p>
<h3 id="行级锁" tabindex="-1"><a class="header-anchor" href="#行级锁"><span>行级锁</span></a></h3>
<p>行级锁包括记录锁、间隙锁和 next-key 锁。</p>
<p>记录锁锁的某条记录。</p>
<p>间隙锁锁的是开区间间隙，目的是解决可重复读隔离级别下的幻读问题。</p>
<p>next-key 锁锁的是左开右闭的区间。</p>
<p>默认加 next-key 锁，会根据实际情况退化。</p>
<p>例如，如下的数据表：</p>
<table>
<thead>
<tr>
<th>id</th>
<th>Name</th>
<th>Age</th>
<th>Occupation</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>John Doe</td>
<td>29</td>
<td>Software Engineer</td>
</tr>
<tr>
<td>2</td>
<td>Jane Smith</td>
<td>34</td>
<td>Data Scientist</td>
</tr>
<tr>
<td>3</td>
<td>Alice Wong</td>
<td>25</td>
<td>UX Designer</td>
</tr>
</tbody>
</table>
<p>如果 <code v-pre>update</code> 没有加条件，就会锁<code v-pre>(-,1]、(1,2]、(2,3]、(3,+)</code>来防幻读。因为 MySQL 假定，在更新之后就会读。</p>
<h2 id="redo-log" tabindex="-1"><a class="header-anchor" href="#redo-log"><span>Redo Log</span></a></h2>
<p>MySQL 使用 Redo Log 实现事务的持久化，内存中的脏页落盘前会先通过<strong>顺序写</strong>的方式写入 Redo Log，若数据修改写入 Redo Log，该次修改就具备了故障恢复能力。
之后才会使用<strong>随机写</strong>写入磁盘。</p>
</div></template>


