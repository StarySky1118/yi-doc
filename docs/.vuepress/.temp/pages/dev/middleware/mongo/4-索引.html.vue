<template><div><h1 id="四、索引" tabindex="-1"><a class="header-anchor" href="#四、索引"><span>四、索引</span></a></h1>
<h2 id="_1、概述" tabindex="-1"><a class="header-anchor" href="#_1、概述"><span>1、概述</span></a></h2>
<p>索引支持在 MongoDB 中高效地执行查询。如果没有索引，MongoDB必须执行全集合扫描，即扫描集合中的每个文档，以选择与查询语句匹配的文档。这种扫描全集合的查询效率是非常低的，特别在处理大量的数据时，查询可以要花费几十秒甚至几分钟，这对网站的性能是非常致命的。如果查询存在适当的索引，MongoDB 可以使用该索引限制必须检查的文档数。 索引是特殊的数据结构，它以易于遍历的形式存储集合数据集的一小部分。索引存储特定字段或一组字段的值，按字段值排序。索引项的排序支持有效的相等匹配和基于范围的查询操作。此外，MongoDB 还可以使用索引中的排序返回排序结果。</p>
<h2 id="_2、索引的类型" tabindex="-1"><a class="header-anchor" href="#_2、索引的类型"><span>2、索引的类型</span></a></h2>
<h3 id="_1-单字段索引" tabindex="-1"><a class="header-anchor" href="#_1-单字段索引"><span>(1) 单字段索引</span></a></h3>
<p>MongoDB 支持在文档的单个字段上创建用户定义的升序/降序索引，称为单字段索引（Single Field Index）。 对于单个字段索引和排序操作，索引键的排序顺序（即升序或降序）并不重要，因为 MongoDB 可以在任何方向上遍历索引。
<img src="/images/dev/middleware/mongo/single_field_index.png" alt="image.png"></p>
<h3 id="_2-多字段索引" tabindex="-1"><a class="header-anchor" href="#_2-多字段索引"><span>(2) 多字段索引</span></a></h3>
<p>MongoDB 还支持多个字段的用户定义索引，即复合索引（Compound Index）。复合索引中列出的字段顺序具有重要意义。例如，如果复合索引由<code v-pre>{ userid: 1, score: -1 }</code>组成，则索引首先按<code v-pre>userid</code>正序排序，然后 在每个<code v-pre>userid</code>的值内，再按<code v-pre>score</code>倒序排序。<br>
<img src="/images/dev/middleware/mongo/4-multi_field_index.png" alt="image.png"></p>
<h3 id="_3-其他索引" tabindex="-1"><a class="header-anchor" href="#_3-其他索引"><span>(3) 其他索引</span></a></h3>
<p>MongoDB 中还有如下索引：</p>
<ol>
<li>地理空间索引（Geospatial Index）</li>
</ol>
<p>为了支持对地理空间坐标数据的有效查询，MongoDB 提供了两种特殊的索引：返回结果时使用平面几何的二维索引和返回结果时使用球面几何的二维球面索引。</p>
<ol start="2">
<li>文本索引（Text Indexes）</li>
</ol>
<p>MongoDB 提供了一种文本索引类型，支持在集合中搜索字符串内容。这些文本索引不存储特定于语言的停止词（例如<code v-pre>the</code>、<code v-pre>a</code>、<code v-pre>or</code>），而将集合中的词作为词干，只存储根词。</p>
<ol start="3">
<li>哈希索引（Hashed Indexes）</li>
</ol>
<p>为了支持基于散列的分片，MongoDB 提供了散列索引类型，它对字段值的散列进行索引。这些索引在其范围内的值分布更加随机，但只支持相等匹配，不支持基于范围的查询。</p>
<h2 id="_3、索引的管理操作" tabindex="-1"><a class="header-anchor" href="#_3、索引的管理操作"><span>3、索引的管理操作</span></a></h2>
<h3 id="_1-查看所有索引" tabindex="-1"><a class="header-anchor" href="#_1-查看所有索引"><span>(1) 查看所有索引</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">db.集合名.getIndexes<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>使用案例：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">db.comment.getIndexes<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>MongoDB 会自动创建主键的索引：
<img src="/images/dev/middleware/mongo/4-key_index.png" alt="image.png"></p>
<h3 id="_2-创建索引" tabindex="-1"><a class="header-anchor" href="#_2-创建索引"><span>(2) 创建索引</span></a></h3>
<p>语法：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">db.集合名.createIndex<span class="token punctuation">(</span>keys, option<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="/images/dev/middleware/mongo/4-index_param.png" alt="image.png">
<code v-pre>options</code>列表：
<img src="/images/dev/middleware/mongo/4-index_opton.png" alt="image.png">
使用案例：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 单字段索引</span></span>
<span class="line">db.comment.createIndex<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"userid"</span><span class="token builtin class-name">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 复合索引</span></span>
<span class="line">db.comment.createIndex<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"userid"</span><span class="token builtin class-name">:</span> <span class="token number">1</span>, <span class="token string">"nickname"</span><span class="token builtin class-name">:</span> -1<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-删除索引" tabindex="-1"><a class="header-anchor" href="#_3-删除索引"><span>(3) 删除索引</span></a></h3>
<h4 id="删除指定索引" tabindex="-1"><a class="header-anchor" href="#删除指定索引"><span>删除指定索引</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">db.集合名.dropIndex<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>使用案例：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">db.comment.dropIndex<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"userid"</span><span class="token builtin class-name">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="删除所有索引" tabindex="-1"><a class="header-anchor" href="#删除所有索引"><span>删除所有索引</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">db.集合名.dropIndexes<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>注：<code v-pre>_id</code>的索引无法删除。</p>
</blockquote>
<h2 id="_4、索引使用" tabindex="-1"><a class="header-anchor" href="#_4、索引使用"><span>4、索引使用</span></a></h2>
<h3 id="_1-执行计划" tabindex="-1"><a class="header-anchor" href="#_1-执行计划"><span>(1) 执行计划</span></a></h3>
<p>通常使用执行计划(Explain Plan)分析查询性能，如查询耗费的时间、是否基于索引查询等。语法如下：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">db.collection.find<span class="token punctuation">(</span>query,options<span class="token punctuation">)</span>.explain<span class="token punctuation">(</span>options<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>使用 Compass 可视化查看。
<img src="/images/dev/middleware/mongo/4-Compass.png" alt="image.png">
使用索引前：
<img src="/images/dev/middleware/mongo/4-before_index.png" alt="image.png">
使用索引后：
<img src="/images/dev/middleware/mongo/4-after_index.png" alt="image.png"></p>
</div></template>


