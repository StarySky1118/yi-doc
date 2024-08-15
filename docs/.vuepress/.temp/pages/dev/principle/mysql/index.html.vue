<template><div><h1 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h1>
<p>MySQL 有两部分重要内容：索引与事务。</p>
<p>索引可以加快查询。事务则是维护数据一致性的方式。</p>
<p>索引与事务也是 InnoDB 存储引擎和 MyISAM 存储引擎的重要区别。</p>
<h2 id="innodb-存储引擎和-myisam-存储引擎有什么区别" tabindex="-1"><a class="header-anchor" href="#innodb-存储引擎和-myisam-存储引擎有什么区别"><span>InnoDB 存储引擎和 MyISAM 存储引擎有什么区别？</span></a></h2>
<p>二者的区别主要在事务和索引方面。</p>
<p><strong>事务</strong></p>
<p>MyISAM 存储引擎不支持事务，没有行级锁；而 InnoDB 存储引擎支持四种隔离级别的事务，为实现事务的隔离性，使用 MVCC，支持行级锁。</p>
<p>MyISAM 不支持故障恢复，而 InnoDB 使用 Redo Log 实现事务的持久性，支持崩溃恢复。</p>
<p><strong>索引</strong></p>
<p>二者索引采用的数据结构都为 B+ 树。不同之处在于，InnoDB 存储引擎 B+ 树叶子结点存储真实数据，
MyISAM 存储引擎 B+ 只存放索引，数据独立存储。</p>
<h2 id="mysql-是如何执行一条-sql-语句的" tabindex="-1"><a class="header-anchor" href="#mysql-是如何执行一条-sql-语句的"><span>MySQL 是如何执行一条 SQL 语句的？</span></a></h2>
<p>一条 SQL 语句会经过 MySQL 的 Server 层和存储引擎层得到执行。</p>
<p>Server 层主要包括连接器、解析器、优化器和执行器。</p>
<p>连接器用于管理客户端连接和权限校验。</p>
<p>解析器会对 SQL 语句进行语法分析和词法分析。SQL 语句出现语法错误时会在此阶段报错。</p>
<p>优化器对针对解析结果生成多个执行计划，并选择其中最优的。例如调整查询条件顺序以满足最左前缀匹配原则。</p>
<p>执行器会与存储引擎层交互，获取结果并返回给客户端。</p>
</div></template>


