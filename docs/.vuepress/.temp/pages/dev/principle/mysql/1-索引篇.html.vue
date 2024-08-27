<template><div><h1 id="_1-索引篇" tabindex="-1"><a class="header-anchor" href="#_1-索引篇"><span>1. 索引篇</span></a></h1>
<p>索引是什么？怎么实现的？怎么用？</p>
<p>数据库索引利用额外的数据结构来组织数据，以空间换时间，加快查询速度。</p>
<h2 id="mysql-索引是使用什么数据结构实现的" tabindex="-1"><a class="header-anchor" href="#mysql-索引是使用什么数据结构实现的"><span>MySQL 索引是使用什么数据结构实现的？</span></a></h2>
<p>MySQL InnoDB 存储引擎使用 B+ 树作为索引的数据结构，B+ 树是一种自平衡的多叉树，非叶子节点只存储索引，叶子节点存储数据。
并且叶子节点通过双向链表连接。
得益于这种数据结构，查询的时间复杂度为对数级，并且支持高效的范围查询。</p>
<h2 id="b-树查询数据的全过程是怎样的" tabindex="-1"><a class="header-anchor" href="#b-树查询数据的全过程是怎样的"><span>B+ 树查询数据的全过程是怎样的？</span></a></h2>
<p>查询数据时，首先经过非叶子结点的索引抵达叶子结点。</p>
<p>叶子结点并非只有一条记录，而是一页记录，例如 16K，这是为满足空间局部性原理所做的一种配置。
一页记录有许多条记录，可以使用页目录，利用二分法查找记录所在分组。
再在分组中使用遍历的方式查找到指定记录。</p>
<h2 id="索引的类型" tabindex="-1"><a class="header-anchor" href="#索引的类型"><span>索引的类型</span></a></h2>
<p>可以根据使用的数据结构、字段性质划分以及字段个数进行划分。</p>
<p>根据使用的数据结构划分，可以分为 B+ 树索引、哈希索引、倒排索引和 R 树索引。</p>
<p>根据字段性质划分，可以分为主键索引、普通索引、唯一索引等。</p>
<p>根据字段个数划分，可以分为单字段索引和联合索引。</p>
<h2 id="聚簇索引和非聚簇索引有什么区别" tabindex="-1"><a class="header-anchor" href="#聚簇索引和非聚簇索引有什么区别"><span>聚簇索引和非聚簇索引有什么区别</span></a></h2>
<p>聚簇索引的索引字段是主键字段，非聚簇索引的索引字段是非主键字段。</p>
<p>聚簇索引的叶子结点存放完整记录，而非聚簇索引叶子结点仅存放索引列和主键值。</p>
<h2 id="mysql-中的回表是什么" tabindex="-1"><a class="header-anchor" href="#mysql-中的回表是什么"><span>MySQL 中的回表是什么</span></a></h2>
<p>回表是指使用非聚簇索引进行查询时，由于非聚簇索引叶子结点仅存储了索引列和主键值，当需要获取其他字段的值，需要使用主键利用主键索引查询真实记录。</p>
<h2 id="mysql-中覆盖索引是什么" tabindex="-1"><a class="header-anchor" href="#mysql-中覆盖索引是什么"><span>MySQL 中覆盖索引是什么</span></a></h2>
<p>覆盖索引是指非聚簇索引包含了查询所需的所有字段，不需要回表即可完成查询。</p>
<h2 id="最左前缀匹配原则" tabindex="-1"><a class="header-anchor" href="#最左前缀匹配原则"><span>最左前缀匹配原则</span></a></h2>
<p>最左前缀匹配原则是针对联合索引的一个原则，如果希望联合索引生效，那么查询条件必须符合联合索引的最左前缀。
例如 <code v-pre>(name, age)</code> 联合索引，查询条件 <code v-pre>name=xxx</code> 或 <code v-pre>name=xxx and age=xxx</code> 均可生效。<code v-pre>age=xxx</code> 无法生效。</p>
<h2 id="mysql-中索引下推是什么" tabindex="-1"><a class="header-anchor" href="#mysql-中索引下推是什么"><span>MySQL 中索引下推是什么？</span></a></h2>
<p>MySQL 索引下推是一种通过减少回表提高查询效率的技术。该技术针对联合索引，如果符合最左前缀匹配规则并且查询条件字段均包含在索引字段中，
就可以无需回表，直接在非聚簇索引中进行过滤。</p>
<h2 id="索引使用注意事项" tabindex="-1"><a class="header-anchor" href="#索引使用注意事项"><span>索引使用注意事项</span></a></h2>
<p>何时使用？何时不使用？</p>
<ol>
<li>频繁作为查询条件的字段适合建立索引</li>
<li>经常出现在 <code v-pre>order by</code>、<code v-pre>group by</code> 等后面出现的字段适合建立索引</li>
<li>数据量比较小的时候，添加索引可能得不偿失</li>
<li>有大量重复值的字段不适合建立索引，若有大量重复值，即使建立索引，也会和全表扫描一样遍历差不多的记录数，同时带来额外开销，得不偿失</li>
</ol>
<h2 id="如何查看索引是否生效" tabindex="-1"><a class="header-anchor" href="#如何查看索引是否生效"><span>如何查看索引是否生效？</span></a></h2>
<p>在 MySQL 中可以使用 <code v-pre>explain</code> 命令查看查询的执行计划。</p>
<p>结果中比较关键的字段是 <code v-pre>type</code>，常见值包括 <code v-pre>const</code>、<code v-pre>eq_ref</code>、<code v-pre>ref</code>、<code v-pre>range</code>、<code v-pre>index</code>、<code v-pre>ALL</code>。</p>
<p>从主键索引唯一记录直至全表扫描。</p>
<h2 id="索引在什么情况下会失效" tabindex="-1"><a class="header-anchor" href="#索引在什么情况下会失效"><span>索引在什么情况下会失效？</span></a></h2>
<ol>
<li>对索引进行了运算或函数运算</li>
<li>对索引使用左模糊或左右模糊匹配</li>
<li>使用 <code v-pre>or</code> 连接查询条件时，某个条件无法使用索引</li>
<li>使用联合索引没有遵循最左前缀匹配</li>
</ol>
</div></template>


