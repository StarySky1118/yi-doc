# 一、MongoDB 基础

## 1、业务场景

传统的关系型数据库无法满足数据操作"三高"需求：高并发、高性能、高可用

- High Performance: 对数据库的**高并发读写**的要求
- High Storage: 对**海量数据**的高效率存储和访问的需求
- High Scalability && High Available: 对数据的**高扩展性**和高可用性的需求

MongoDB 可以满足"三高"需求，在如下应用场景下最为有效：

1. 数据量大
2. 写入操作频繁
3. 价值较低的数据, 对**事务性**要求不高
4. 应用不需要事务及复杂 JOIN 支持
5. 新应用, 需求会变, 数据模型无法确定, 想快速迭代开发
6. 应用需要 2000 - 3000 以上的读写QPS（更高也可以）
7. 应用需要 TB 甚至 PB 级别数据存储
8. 应用发展迅速, 需要能快速水平扩展
9. 应用要求存储的数据不丢失
10. 应用需要 99.999% 高可用
11. 应用需要大量的地理位置查询, 文本查询

## 2、简介

MongoDB 是一个开源、高性能、无模式(没有显式的字段)的文档型数据库，是 NoSQL 中最像关系型数据库的。它支持的数据结构非常松散，是一种类似于 JSON 的 格式叫 BSON。
> BSON（Binary Serialized Document Format）是一种类 json 的一种二进制形式的存储格式，简称 Binary JSON。BSON 和 JSON 一样，支持内嵌的文档对象和数组对象，但是 BSON 有 JSON 没有的一些数据类型，如 Date 和BinData 类型。 BSON 采用了类似于 C 语言结构体的名称、对表示方法，支持内嵌的文档对象和数组对象，具有轻量性、可遍历性、高效性的三个特点，可以有效描述非结构化数据和结构化数据。这种格式的优点是灵活性高，但它的缺点是空间利用率不是很理想。
> 
BSON 数据类型列表：
![image.png](/images/dev/middleware/mongo/datatype.png)

### MongoDB 与 MySQL 概念对比

![image.png](/images/dev/middleware/mongo/mongomysql.png)
