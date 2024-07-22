<template><div><h1 id="三、常用注解" tabindex="-1"><a class="header-anchor" href="#三、常用注解"><span>三、常用注解</span></a></h1>
<h2 id="_1、-tablename" tabindex="-1"><a class="header-anchor" href="#_1、-tablename"><span>1、<code v-pre>@TableName</code></span></a></h2>
<blockquote>
<p>Mybatis-plus 在默认情况下，将实体类和表名按驼峰命名规则进行对应。如果表名有前缀，则需要手动进行配置。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@Data</span></span>
<span class="line"><span class="token annotation punctuation">@TableName</span><span class="token punctuation">(</span><span class="token string">"t_user"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>如果大量表名都是一样的前缀，可以进行全局配置。</p>
</blockquote>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">mybatis-plus</span><span class="token punctuation">:</span></span>
<span class="line">	<span class="token key atrule">global-config</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">db-config</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">table-prefix</span><span class="token punctuation">:</span> t_</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、-tableid" tabindex="-1"><a class="header-anchor" href="#_2、-tableid"><span>2、<code v-pre>@TableId</code></span></a></h2>
<blockquote>
<p>Mybatis-plus 使用雪花算法生成主键 id，如果表的主键不是 id，需要在实体类中进行指定。这样便可以以雪花算法生成主键。</p>
</blockquote>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line">@Data</span>
<span class="line">public class User <span class="token punctuation">{</span></span>
<span class="line">    @TableId</span>
<span class="line">    private Long id;</span>
<span class="line">    private String name;</span>
<span class="line">    private Integer age;</span>
<span class="line">    private String email;</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该注解还有两个属性：</p>
<p><img src="@source/dev/java/mb_plus/img_19.png" alt="img_19.png"></p>
<ol>
<li><strong>value</strong></li>
</ol>
<p>基本上不会使用。如果实体类属性和字段无法使用驼峰命名规则对应，使用 <code v-pre>value</code>属性进行对应。</p>
<ol start="2">
<li><strong>type</strong></li>
</ol>
<p>设置主键生成策略，常用的主键生成策略如下：</p>
<p><img src="@source/dev/java/mb_plus/img_20.png" alt="img_20.png"></p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@Data</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token annotation punctuation">@TableId</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">IdType</span><span class="token punctuation">.</span><span class="token constant">AUTO</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要进行全局配置：</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">mybatis-plus</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">global-config</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">db-config</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">id-type</span><span class="token punctuation">:</span> auto</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>雪花算法
背景：数据规模不断增长，需要扩展数据库。扩展数据库的三种方式：业务分库、主从复制和数据库分表。
如果对单表进行差分，可以使用垂直分表和水平分表。
<img src="@source/dev/java/mb_plus/img_21.png" alt="img_21.png">
垂直分表将不常用的字段拆分到别的表中。
水平分表更加复杂，处理全局唯一的主键是一个复杂问题。雪花算法就是 Twitter 公司公布的分布式主键生成算法，它能够保证不同表的主键的不重复性，以及相同表的主键的有序性。<br>
<img src="@source/dev/java/mb_plus/img_22.png" alt="img_22.png">
优点： 整体上按照时间自增排序，并且整个分布式系统内不会产生ID碰撞，并且效率较高。</p>
</blockquote>
<h2 id="_3、-tablefiled" tabindex="-1"><a class="header-anchor" href="#_3、-tablefiled"><span>3、<code v-pre>@TableFiled</code></span></a></h2>
<blockquote>
<p>如果实体类属性使用驼峰命名风格，数据库字段使用下划线命名风格，Mybatis-plus 可以自动进行对应，无需额外配置。
如果属性和字段不按上述方式进行对应，则需要在属性上添加 <code v-pre>@TableFiled</code>注解。</p>
</blockquote>
<p><img src="@source/dev/java/mb_plus/img_23.png" alt="img_23.png"></p>
<p>此注解基本不会使用。</p>
<h2 id="_4、-tablelogic" tabindex="-1"><a class="header-anchor" href="#_4、-tablelogic"><span>4、<code v-pre>@TableLogic</code></span></a></h2>
<blockquote>
<p>物理删除：将记录从数据库中删除。
逻辑删除：将记录的 &quot;已删除&quot; 字段置为 1。
使用逻辑删除可以进行数据恢复。</p>
</blockquote>
<p><strong>使用逻辑删除的步骤</strong></p>
<ol>
<li><strong>表中添加 &quot;已删除&quot; 字段，将其默认值设置为 0</strong></li>
</ol>
<p><img src="@source/dev/java/mb_plus/img_24.png" alt="img_24.png"></p>
<ol start="2">
<li><strong>在实体类添加 &quot;已删除&quot; 属性，添加 <code v-pre>@TableLogic</code>注解</strong></li>
</ol>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@Data</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span></span>
<span class="line">    <span class="token annotation punctuation">@TableLogic</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">Integer</span> isDeleted<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>测试</strong>
进行删除时，将不会使用 delete，而是 update。</p>
<p><img src="@source/dev/java/mb_plus/img_25.png" alt="img_25.png"></p>
<p>进行查询时，附带 <code v-pre>is_deleted=0</code>条件。</p>
<p><img src="@source/dev/java/mb_plus/img_26.png" alt="img_26.png"></p>
</div></template>


