<template><div><h1 id="八、多数据源" tabindex="-1"><a class="header-anchor" href="#八、多数据源"><span>八、多数据源</span></a></h1>
<blockquote>
<p>多数据源的使用场景：纯粹多库、读写分离、一主多从、混合模式等等。</p>
</blockquote>
<h2 id="使用测试" tabindex="-1"><a class="header-anchor" href="#使用测试"><span>使用测试</span></a></h2>
<p><img src="@source/dev/java/mb_plus/img_40.png" alt="img_40.png"></p>
<h3 id="_1、数据库" tabindex="-1"><a class="header-anchor" href="#_1、数据库"><span>1、数据库</span></a></h3>
<blockquote>
<p>创建数据库和表</p>
</blockquote>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> <span class="token identifier"><span class="token punctuation">`</span>mybatis_plus_1<span class="token punctuation">`</span></span> <span class="token comment">/*!40100 DEFAULT CHARACTER SET utf8mb4 */</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token identifier"><span class="token punctuation">`</span>mybatis_plus_1<span class="token punctuation">`</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> t_product</span>
<span class="line"><span class="token punctuation">(</span></span>
<span class="line">  id <span class="token keyword">BIGINT</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'主键ID'</span><span class="token punctuation">,</span></span>
<span class="line">  name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'商品名称'</span><span class="token punctuation">,</span></span>
<span class="line">  price <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token number">0</span> <span class="token keyword">COMMENT</span> <span class="token string">'价格'</span><span class="token punctuation">,</span></span>
<span class="line">  version <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token number">0</span> <span class="token keyword">COMMENT</span> <span class="token string">'乐观锁版本号'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>添加测试数据</p>
</blockquote>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> product <span class="token punctuation">(</span>id<span class="token punctuation">,</span> NAME<span class="token punctuation">,</span> price<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'外星人笔记本'</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2、依赖引入" tabindex="-1"><a class="header-anchor" href="#_2、依赖引入"><span>2、依赖引入</span></a></h3>
<blockquote>
<p>Mybatis-plus 多数据源依赖</p>
</blockquote>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.baomidou<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>dynamic-datasource-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.5.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、配置多数据源" tabindex="-1"><a class="header-anchor" href="#_3、配置多数据源"><span>3、配置多数据源</span></a></h3>
<blockquote>
<p>在 application.yml 中配置多数据源信息</p>
</blockquote>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">spring</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token comment"># 配置数据源信息</span></span>
<span class="line">  <span class="token key atrule">datasource</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">dynamic</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token comment"># 设置默认的数据源或者数据源组,默认值即为master</span></span>
<span class="line">      <span class="token key atrule">primary</span><span class="token punctuation">:</span> master</span>
<span class="line">      <span class="token comment"># 严格匹配数据源,默认false.true未匹配到指定数据源时抛异常,false使用默认数据源</span></span>
<span class="line">      <span class="token key atrule">strict</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="line">      <span class="token key atrule">datasource</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">master</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/mybatis_plus<span class="token punctuation">?</span>characterEncoding=utf<span class="token punctuation">-</span>8<span class="token important">&amp;useSSL=false</span></span>
<span class="line">          <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver</span>
<span class="line">          <span class="token key atrule">username</span><span class="token punctuation">:</span> root</span>
<span class="line">          <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">991118</span></span>
<span class="line">        <span class="token key atrule">slave_1</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/mybatis_plus_1<span class="token punctuation">?</span>characterEncoding=utf<span class="token punctuation">-</span>8<span class="token important">&amp;useSSL=false</span></span>
<span class="line">          <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver</span>
<span class="line">          <span class="token key atrule">username</span><span class="token punctuation">:</span> root</span>
<span class="line">          <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">991118</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、创建用户-service-和商品-service" tabindex="-1"><a class="header-anchor" href="#_4、创建用户-service-和商品-service"><span>4、创建用户 Service 和商品 Service</span></a></h3>
<blockquote>
<p>UserService 操作 master 数据源</p>
</blockquote>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@DS</span><span class="token punctuation">(</span><span class="token string">"master"</span><span class="token punctuation">)</span> <span class="token comment">// 指定操作 master 数据源</span></span>
<span class="line"><span class="token annotation punctuation">@Service</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token keyword">extends</span> <span class="token class-name">ServiceImpl</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserMapper</span><span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token punctuation">></span></span> <span class="token keyword">implements</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>ProductService 操作 slave_1 数据源</p>
</blockquote>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@DS</span><span class="token punctuation">(</span><span class="token string">"slave_1"</span><span class="token punctuation">)</span> <span class="token comment">// 指定操作 slave_1 数据源</span></span>
<span class="line"><span class="token annotation punctuation">@Service</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProductServiceImpl</span> <span class="token keyword">extends</span> <span class="token class-name">ServiceImpl</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ProductMapper</span><span class="token punctuation">,</span> <span class="token class-name">Product</span><span class="token punctuation">></span></span> <span class="token keyword">implements</span> <span class="token class-name">ProductService</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


