# 概述
MySQL 有两部分重要内容：索引与事务。

索引可以加快查询。事务则是维护数据一致性的方式。

索引与事务也是 InnoDB 存储引擎和 MyISAM 存储引擎的重要区别。

## InnoDB 存储引擎和 MyISAM 存储引擎有什么区别？
二者的区别主要在事务和索引方面。

**事务**

MyISAM 存储引擎不支持事务，InnoDB 存储引擎支持四种隔离级别的事务。

为实现事务的隔离性，InnoDB 存储引擎使用 MVCC 和行级锁机制；MyISAM 存储引擎不支持行级锁。

为实现事务的持久性，InnoDB 存储引擎使用 Redo Log 机制，支持崩溃恢复；MyISAM 不支持崩溃恢复。

**索引**

二者索引采用的数据结构都为 B+ 树。不同之处在于，InnoDB 存储引擎 B+ 树叶子结点存储真实数据，
MyISAM 存储引擎 B+ 树只存放索引，数据独立存储。


## MySQL 是如何执行一条 SQL 语句的？
一条 SQL 语句会经过 MySQL 的 Server 层和存储引擎层得到执行。

Server 层主要包括连接器、解析器、优化器和执行器。

连接器用于管理客户端连接和权限校验。

解析器会对 SQL 语句进行语法分析和词法分析。SQL 语句出现语法错误时会在此阶段报错。

优化器对针对解析结果生成多个执行计划，并选择其中最优的。例如调整查询条件顺序以满足最左前缀匹配原则。

执行器会将执行计划发送给存储引擎，获取结果并返回给客户端。
