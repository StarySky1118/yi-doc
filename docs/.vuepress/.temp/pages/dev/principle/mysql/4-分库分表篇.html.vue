<template><div><h1 id="_4-分库分表" tabindex="-1"><a class="header-anchor" href="#_4-分库分表"><span>4. 分库分表</span></a></h1>
<h2 id="什么是分库分表" tabindex="-1"><a class="header-anchor" href="#什么是分库分表"><span>什么是分库分表</span></a></h2>
<p>分库分表是一种策略，通过将请求分发到不同库表，来解决单库单表处理请求能力有限的问题。</p>
<h2 id="分库分表有哪些策略" tabindex="-1"><a class="header-anchor" href="#分库分表有哪些策略"><span>分库分表有哪些策略？</span></a></h2>
<p>分库分表都分为水平和垂直方向。</p>
<p>水平分库/分表中，库中表、表中字段无修改；
垂直分库/分表中，库中表、表中字段根据业务逻辑进行划分。</p>
<h2 id="分库分表有哪些问题" tabindex="-1"><a class="header-anchor" href="#分库分表有哪些问题"><span>分库分表有哪些问题？</span></a></h2>
<p>分库分表可能导致事务、多表联查、ID 唯一性问题。</p>
<p><strong>事务</strong></p>
<p>分库后，无法跨库使用单机事务。可能会使用分布式事务。</p>
<p><strong>多表联查</strong></p>
<p>分库后，无法跨库使用多表联查。</p>
<p><strong>ID 唯一性</strong></p>
<p>分库分表后，可能无法使用自增主键保证 ID 唯一。需要使用雪花算法或其他唯一性 ID 生成器获取唯一 ID。</p>
</div></template>


