<template><div><h1 id="十、typehandler类型转换器" tabindex="-1"><a class="header-anchor" href="#十、typehandler类型转换器"><span>十、TypeHandler类型转换器</span></a></h1>
<p>相关博客：
<a href="https://blog.csdn.net/winkadd/article/details/128653709" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/winkadd/article/details/128653709</a></p>
<h2 id="_1、使用案例" tabindex="-1"><a class="header-anchor" href="#_1、使用案例"><span>1、使用案例</span></a></h2>
<p>使用场景：
数据库中<code v-pre>time_interval</code>字段类型为<code v-pre>text</code>，存储数组：</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">"type"</span><span class="token operator">:</span><span class="token string">"sharp"</span><span class="token punctuation">,</span><span class="token string">"startTime"</span><span class="token operator">:</span><span class="token string">"00:00:00"</span><span class="token punctuation">,</span><span class="token string">"endTime"</span><span class="token operator">:</span><span class="token string">"6:00:00"</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string">"type"</span><span class="token operator">:</span><span class="token string">"peak"</span><span class="token punctuation">,</span><span class="token string">"startTime"</span><span class="token operator">:</span><span class="token string">"06:00:00"</span><span class="token punctuation">,</span><span class="token string">"endTime"</span><span class="token operator">:</span><span class="token string">"12:00:00"</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string">"type"</span><span class="token operator">:</span><span class="token string">"shoulder"</span><span class="token punctuation">,</span><span class="token string">"startTime"</span><span class="token operator">:</span><span class="token string">"12:00:00"</span><span class="token punctuation">,</span><span class="token string">"endTime"</span><span class="token operator">:</span><span class="token string">"18:00:00"</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string">"type"</span><span class="token operator">:</span><span class="token string">"off_peak"</span><span class="token punctuation">,</span><span class="token string">"startTime"</span><span class="token operator">:</span><span class="token string">"18:00:00"</span><span class="token punctuation">,</span><span class="token string">"endTime"</span><span class="token operator">:</span><span class="token string">"24:00:00"</span><span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Java 实体类相应的属性为<code v-pre>timeInterval</code>，类型为<code v-pre>List&lt;PriceIntervalEntity&gt;</code>。
需要解决类型转换问题。</p>
<p><strong>1. 添加自定义<code v-pre>typeHandler</code></strong></p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ElectricityPriceTypeHandler</span> <span class="token keyword">extends</span> <span class="token class-name">BaseTypeHandler</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">PriceIntervalEntity</span><span class="token punctuation">></span><span class="token punctuation">></span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * javaType -> jdbcType</span>
<span class="line">     * 解决 List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PriceIntervalEntity</span><span class="token punctuation">></span></span> -> text 数据库存储问题</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token parameter">preparedStatement</span></span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token parameter">i</span></span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token parameter">priceIntervalEntities</span></span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token parameter">jdbcType</span></span>
<span class="line">     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">SQLException</span></span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token annotation punctuation">@Override</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setNonNullParameter</span><span class="token punctuation">(</span><span class="token class-name">PreparedStatement</span> preparedStatement<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PriceIntervalEntity</span><span class="token punctuation">></span></span> priceIntervalEntities<span class="token punctuation">,</span> <span class="token class-name">JdbcType</span> jdbcType<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">String</span> listStr <span class="token operator">=</span> <span class="token class-name">JSONUtil</span><span class="token punctuation">.</span><span class="token function">toJsonStr</span><span class="token punctuation">(</span>priceIntervalEntities<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        preparedStatement<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> listStr<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * jdbcType -> javaType</span>
<span class="line">     * 解决 text -> List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PriceIntervalEntity</span><span class="token punctuation">></span></span> 数据库读取问题</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token parameter">resultSet</span></span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token parameter">s</span></span>
<span class="line">     * <span class="token keyword">@return</span></span>
<span class="line">     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">SQLException</span></span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token annotation punctuation">@Override</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PriceIntervalEntity</span><span class="token punctuation">></span></span> <span class="token function">getNullableResult</span><span class="token punctuation">(</span><span class="token class-name">ResultSet</span> resultSet<span class="token punctuation">,</span> <span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 结果集中的 json 字符串</span></span>
<span class="line">        <span class="token class-name">String</span> jsonStr <span class="token operator">=</span> resultSet<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token class-name">JSONUtil</span><span class="token punctuation">.</span><span class="token function">parseArray</span><span class="token punctuation">(</span>jsonStr<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token class-name">PriceIntervalEntity</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@Override</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PriceIntervalEntity</span><span class="token punctuation">></span></span> <span class="token function">getNullableResult</span><span class="token punctuation">(</span><span class="token class-name">ResultSet</span> resultSet<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">String</span> jsonStr <span class="token operator">=</span> resultSet<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token class-name">JSONUtil</span><span class="token punctuation">.</span><span class="token function">parseArray</span><span class="token punctuation">(</span>jsonStr<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token class-name">PriceIntervalEntity</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@Override</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PriceIntervalEntity</span><span class="token punctuation">></span></span> <span class="token function">getNullableResult</span><span class="token punctuation">(</span><span class="token class-name">CallableStatement</span> callableStatement<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">String</span> jsonStr <span class="token operator">=</span> callableStatement<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token class-name">JSONUtil</span><span class="token punctuation">.</span><span class="token function">parseArray</span><span class="token punctuation">(</span>jsonStr<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token class-name">PriceIntervalEntity</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要实现的四个方法如下：</p>
<ol>
<li><code v-pre>setNonNullParameter(PreparedStatement preparedStatement, int i, List&lt;PriceIntervalEntity&gt; priceIntervalEntities, JdbcType jdbcType) throws SQLException</code>：</li>
</ol>
<p>参数说明：</p>
<ul>
<li><code v-pre>preparedStatement</code>：预编译的 SQL 语句对象。</li>
<li><code v-pre>i</code>：参数在预编译 SQL 语句中的位置索引。</li>
<li><code v-pre>priceIntervalEntities</code>：需要设置的非空参数值列表，其中每个元素都是一个 PriceIntervalEntity 对象。</li>
<li><code v-pre>jdbcType</code>：参数在数据库中的类型。</li>
</ul>
<p>作用：将查询结果中的非空参数值设置到预编译的 SQL 语句中对应的位置，即<strong>数据库存储</strong>。</p>
<ol start="2">
<li><code v-pre>getNullableResult(ResultSet resultSet, String s) throws SQLException</code>：</li>
</ol>
<p>参数说明：</p>
<ul>
<li><code v-pre>resultSet</code>：数据库查询结果集对象。</li>
<li><code v-pre>s</code>：结果集中的列名。</li>
</ul>
<p>作用：从结果集中获取指定列的值，并将其转换为对应的实体对象列表，即<strong>数据库读取</strong>。</p>
<ol start="3">
<li><code v-pre>getNullableResult(ResultSet resultSet, int i) throws SQLException</code>：</li>
</ol>
<p>参数说明：</p>
<ul>
<li><code v-pre>resultSet</code>：数据库查询结果集对象。</li>
<li><code v-pre>i</code>：结果集中的列索引。</li>
</ul>
<p>作用：从结果集中获取指定列的值，并将其转换为对应的实体对象列表，也是<strong>数据库读取</strong>。</p>
<ol start="4">
<li><code v-pre>getNullableResult(CallableStatement callableStatement, int i) throws SQLException</code>：</li>
</ol>
<p>参数说明：</p>
<ul>
<li><code v-pre>callableStatement</code>：可调用的数据库预编译语句对象。</li>
<li><code v-pre>i</code>：参数在可调用的数据库预编译语句中的位置索引。</li>
</ul>
<p>作用：将查询结果中的参数值设置到可调用的数据库预编译语句中对应的位置，也是<strong>数据库读取</strong>。</p>
<p><strong>2. 实体类添加<code v-pre>@TableName(value =&quot;electricity_price&quot;, autoResultMap = true)</code>注解</strong></p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> *</span>
<span class="line"> * @TableName electricity_price</span>
<span class="line"> */</span></span>
<span class="line"><span class="token annotation punctuation">@TableName</span><span class="token punctuation">(</span>value <span class="token operator">=</span><span class="token string">"electricity_price"</span><span class="token punctuation">,</span> autoResultMap <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token annotation punctuation">@Data</span></span>
<span class="line"><span class="token annotation punctuation">@Schema</span><span class="token punctuation">(</span>title <span class="token operator">=</span> <span class="token string">"ElectricityPrice对象"</span><span class="token punctuation">,</span> description <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ElectricityPriceEntity</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 自增主键</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token annotation punctuation">@TableId</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">IdType</span><span class="token punctuation">.</span><span class="token constant">AUTO</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 区县编码</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> regionId<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 平、峰、谷、尖峰时段</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span>typeHandler <span class="token operator">=</span> <span class="token class-name">ElectricityPriceTypeHandler</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PriceIntervalEntity</span><span class="token punctuation">></span></span> timeInterval<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 尖峰电价和时间段</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">BigDecimal</span> sharp<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 峰电价和时间段</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">BigDecimal</span> peak<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 平电价和时间段</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">BigDecimal</span> shoulder<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 谷电价和时间段</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">BigDecimal</span> offPeak<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 生效月份</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">LocalDate</span> effectiveDate<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 创建人id</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">Long</span> createBy<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 更新人id</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">Long</span> updateBy<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 创建时间</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span>fill <span class="token operator">=</span> <span class="token class-name">FieldFill</span><span class="token punctuation">.</span><span class="token constant">INSERT</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">LocalDateTime</span> createTime<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 更新时间</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span>fill <span class="token operator">=</span> <span class="token class-name">FieldFill</span><span class="token punctuation">.</span><span class="token constant">INSERT_UPDATE</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">LocalDateTime</span> updateTime<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span>exist <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


