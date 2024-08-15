<template><div><h1 id="_3-使用篇" tabindex="-1"><a class="header-anchor" href="#_3-使用篇"><span>3. 使用篇</span></a></h1>
<h2 id="为什么不推荐使用外键" tabindex="-1"><a class="header-anchor" href="#为什么不推荐使用外键"><span>为什么不推荐使用外键？</span></a></h2>
<p>外键可以自动维护数据完整性约束，但实际使用中会出现性能和业务上的问题。</p>
<p><strong>性能问题</strong></p>
<p>性能问题主要包括：级联更新、额外检查和锁问题。</p>
<ol>
<li>级联更新</li>
</ol>
<p>更新被引表时，可能触发引用表的级联更新，增大数据库压力。</p>
<ol start="2">
<li>额外检查开销</li>
</ol>
<p>每次在引用表中修改、新增记录都要进行外键约束检查，增大性能开销。</p>
<ol start="3">
<li>锁问题</li>
</ol>
<p>级联更新可能导致锁相关问题。</p>
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
</div></template>


