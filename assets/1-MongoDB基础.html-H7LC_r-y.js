import{_ as o,c as i,o as e,a as l}from"./app-BqHSaCQ3.js";const a="/yi-doc/images/dev/middleware/mongo/datatype.png",n="/yi-doc/images/dev/middleware/mongo/mongomysql.png",t={},s=l('<h1 id="一、mongodb-基础" tabindex="-1"><a class="header-anchor" href="#一、mongodb-基础"><span>一、MongoDB 基础</span></a></h1><h2 id="_1、业务场景" tabindex="-1"><a class="header-anchor" href="#_1、业务场景"><span>1、业务场景</span></a></h2><p>传统的关系型数据库无法满足数据操作&quot;三高&quot;需求：高并发、高性能、高可用</p><ul><li>High Performance: 对数据库的<strong>高并发读写</strong>的要求</li><li>High Storage: 对<strong>海量数据</strong>的高效率存储和访问的需求</li><li>High Scalability &amp;&amp; High Available: 对数据的<strong>高扩展性</strong>和高可用性的需求</li></ul><p>MongoDB 可以满足&quot;三高&quot;需求，在如下应用场景下最为有效：</p><ol><li>数据量大</li><li>写入操作频繁</li><li>价值较低的数据, 对<strong>事务性</strong>要求不高</li><li>应用不需要事务及复杂 JOIN 支持</li><li>新应用, 需求会变, 数据模型无法确定, 想快速迭代开发</li><li>应用需要 2000 - 3000 以上的读写QPS（更高也可以）</li><li>应用需要 TB 甚至 PB 级别数据存储</li><li>应用发展迅速, 需要能快速水平扩展</li><li>应用要求存储的数据不丢失</li><li>应用需要 99.999% 高可用</li><li>应用需要大量的地理位置查询, 文本查询</li></ol><h2 id="_2、简介" tabindex="-1"><a class="header-anchor" href="#_2、简介"><span>2、简介</span></a></h2><p>MongoDB 是一个开源、高性能、无模式(没有显式的字段)的文档型数据库，是 NoSQL 中最像关系型数据库的。它支持的数据结构非常松散，是一种类似于 JSON 的 格式叫 BSON。</p><blockquote><p>BSON（Binary Serialized Document Format）是一种类 json 的一种二进制形式的存储格式，简称 Binary JSON。BSON 和 JSON 一样，支持内嵌的文档对象和数组对象，但是 BSON 有 JSON 没有的一些数据类型，如 Date 和BinData 类型。 BSON 采用了类似于 C 语言结构体的名称、对表示方法，支持内嵌的文档对象和数组对象，具有轻量性、可遍历性、高效性的三个特点，可以有效描述非结构化数据和结构化数据。这种格式的优点是灵活性高，但它的缺点是空间利用率不是很理想。</p></blockquote><p>BSON 数据类型列表： <img src="'+a+'" alt="image.png"></p><h3 id="mongodb-与-mysql-概念对比" tabindex="-1"><a class="header-anchor" href="#mongodb-与-mysql-概念对比"><span>MongoDB 与 MySQL 概念对比</span></a></h3><p><img src="'+n+'" alt="image.png"></p>',12),r=[s];function g(m,d){return e(),i("div",null,r)}const h=o(t,[["render",g],["__file","1-MongoDB基础.html.vue"]]),p=JSON.parse('{"path":"/dev/middleware/mongo/1-MongoDB%E5%9F%BA%E7%A1%80.html","title":"一、MongoDB 基础","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1、业务场景","slug":"_1、业务场景","link":"#_1、业务场景","children":[]},{"level":2,"title":"2、简介","slug":"_2、简介","link":"#_2、简介","children":[{"level":3,"title":"MongoDB 与 MySQL 概念对比","slug":"mongodb-与-mysql-概念对比","link":"#mongodb-与-mysql-概念对比","children":[]}]}],"git":{"updatedTime":1721524834000,"contributors":[{"name":"ZhangZiYi","email":"ecustzzy1@163.com","commits":1}]},"filePathRelative":"dev/middleware/mongo/1-MongoDB基础.md"}');export{h as comp,p as data};
