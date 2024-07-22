import{_ as n,c as s,o as a,a as p}from"./app-zKhBrQ4K.js";const t="/yi-doc/assets/img_35-CByB-nL7.png",e="/yi-doc/assets/img_36-CcPgI3T-.png",c="/yi-doc/assets/img_37-CXV0HIfu.png",o={},l=p(`<h1 id="五、插件" tabindex="-1"><a class="header-anchor" href="#五、插件"><span>五、插件</span></a></h1><h2 id="_1、分页插件" tabindex="-1"><a class="header-anchor" href="#_1、分页插件"><span>1、分页插件</span></a></h2><h3 id="_1-基本使用" tabindex="-1"><a class="header-anchor" href="#_1-基本使用"><span>(1) 基本使用</span></a></h3><p><strong>创建 Mybatis-plus 配置类</strong></p><blockquote><p>添加分页拦截器</p></blockquote><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token annotation punctuation">@Configuration</span></span>
<span class="line"><span class="token comment">// SpringBoot 配置类中无需此注解</span></span>
<span class="line"><span class="token annotation punctuation">@MapperScan</span><span class="token punctuation">(</span><span class="token string">&quot;com.zzy.introduction.mapper&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MybatisPlusConfig</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@Bean</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">MybatisPlusInterceptor</span> <span class="token function">mybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">MybatisPlusInterceptor</span> interceptor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        interceptor<span class="token punctuation">.</span><span class="token function">addInnerInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PaginationInnerInterceptor</span><span class="token punctuation">(</span><span class="token class-name">DbType</span><span class="token punctuation">.</span><span class="token constant">MYSQL</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> interceptor<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用测试</strong></p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testPagePlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//设置分页参数</span></span>
<span class="line">        <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> page <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        userMapper<span class="token punctuation">.</span><span class="token function">selectPage</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//获取当前页数据</span></span>
<span class="line">        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> page<span class="token punctuation">.</span><span class="token function">getRecords</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;当前页：&quot;</span> <span class="token operator">+</span> page<span class="token punctuation">.</span><span class="token function">getCurrent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;每页显示的条数：&quot;</span> <span class="token operator">+</span> page<span class="token punctuation">.</span><span class="token function">getSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;总记录数：&quot;</span> <span class="token operator">+</span> page<span class="token punctuation">.</span><span class="token function">getTotal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;总页数：&quot;</span> <span class="token operator">+</span> page<span class="token punctuation">.</span><span class="token function">getPages</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;是否有上一页：&quot;</span> <span class="token operator">+</span> page<span class="token punctuation">.</span><span class="token function">hasPrevious</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;是否有下一页：&quot;</span> <span class="token operator">+</span> page<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-自定义-sql-中使用分页插件" tabindex="-1"><a class="header-anchor" href="#_2-自定义-sql-中使用分页插件"><span>(2) 自定义 SQL 中使用分页插件</span></a></h3><p><strong>Mapper 接口</strong></p><blockquote><p><code>IPage</code>和 <code>Page</code>的实现关系如下：</p><p><img src="`+t+`" alt="img_35.png"></p><p>因此返回值为 <code>Ipage</code>类型。</p></blockquote><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token annotation punctuation">@Repository</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token keyword">extends</span> <span class="token class-name">BaseMapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">IPage</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token function">selectPageDiy</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;page&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> page<span class="token punctuation">,</span> <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Mapper 映射文件</strong></p><div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectPageDiy<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  select * from t_user where age &gt; #{age}</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>由于使用了类型别名，需要在 application.yml 中设置别名包。</p></blockquote><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">mybatis-plus</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">configuration</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">log-impl</span><span class="token punctuation">:</span> org.apache.ibatis.logging.stdout.StdOutImpl</span>
<span class="line">  <span class="token key atrule">global-config</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">db-config</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">table-prefix</span><span class="token punctuation">:</span> t_</span>
<span class="line">  <span class="token key atrule">type-aliases-package</span><span class="token punctuation">:</span> com.zzy.introduction.pojo</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用测试</strong></p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testPageDiy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//设置分页参数</span></span>
<span class="line">        <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> page <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        userMapper<span class="token punctuation">.</span><span class="token function">selectPageDiy</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//获取当前页数据</span></span>
<span class="line">        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> page<span class="token punctuation">.</span><span class="token function">getRecords</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;当前页：&quot;</span> <span class="token operator">+</span> page<span class="token punctuation">.</span><span class="token function">getCurrent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;每页显示的条数：&quot;</span> <span class="token operator">+</span> page<span class="token punctuation">.</span><span class="token function">getSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;总记录数：&quot;</span> <span class="token operator">+</span> page<span class="token punctuation">.</span><span class="token function">getTotal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;总页数：&quot;</span> <span class="token operator">+</span> page<span class="token punctuation">.</span><span class="token function">getPages</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;是否有上一页：&quot;</span> <span class="token operator">+</span> page<span class="token punctuation">.</span><span class="token function">hasPrevious</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;是否有下一页：&quot;</span> <span class="token operator">+</span> page<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、乐观锁" tabindex="-1"><a class="header-anchor" href="#_2、乐观锁"><span>2、乐观锁</span></a></h2><blockquote><p>乐观锁与悲观锁 悲观锁：同一时刻只能有一人操作数据库。 乐观锁：基于版本号对数据库操作顺序进行控制，根据版本号判断现在是否可以修改数据。 乐观锁使用步骤：</p><ol><li>查询数据库得到版本号</li><li>根据得到的版本号生成更新的 SQL 语句</li></ol></blockquote><h3 id="使用步骤" tabindex="-1"><a class="header-anchor" href="#使用步骤"><span>使用步骤</span></a></h3><p><strong>配置类中添加乐观锁拦截器</strong><img src="`+e+'" alt="img_36.png"><strong>表中添加 version 字段</strong></p><p><strong>实体类添加 version 属性并添加 <code>@version</code>注解</strong></p><p><img src="'+c+'" alt="img_37.png"></p>',24),i=[l];function u(k,r){return a(),s("div",null,i)}const m=n(o,[["render",u],["__file","5-插件.html.vue"]]),g=JSON.parse('{"path":"/dev/java/mb_plus/5-%E6%8F%92%E4%BB%B6.html","title":"五、插件","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1、分页插件","slug":"_1、分页插件","link":"#_1、分页插件","children":[{"level":3,"title":"(1) 基本使用","slug":"_1-基本使用","link":"#_1-基本使用","children":[]},{"level":3,"title":"(2) 自定义 SQL 中使用分页插件","slug":"_2-自定义-sql-中使用分页插件","link":"#_2-自定义-sql-中使用分页插件","children":[]}]},{"level":2,"title":"2、乐观锁","slug":"_2、乐观锁","link":"#_2、乐观锁","children":[{"level":3,"title":"使用步骤","slug":"使用步骤","link":"#使用步骤","children":[]}]}],"git":{"updatedTime":1721653842000,"contributors":[{"name":"ZhangZiYi","email":"ecustzzy1@163.com","commits":1}]},"filePathRelative":"dev/java/mb_plus/5-插件.md"}');export{m as comp,g as data};
