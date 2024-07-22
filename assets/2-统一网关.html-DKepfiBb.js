import{_ as n,c as s,o as a,a as e}from"./app-zKhBrQ4K.js";const p="/yi-doc/assets/img_21-opddcDLe.png",t="/yi-doc/assets/img_22-B7j8EckP.png",l="/yi-doc/assets/img_23-BN-_F39R.png",c="/yi-doc/assets/img_24-BIk2jdt7.png",i="/yi-doc/assets/img_25-BROArcXk.png",o="/yi-doc/assets/img_26-B25mtjfL.png",u="/yi-doc/assets/img_27-C0fNEB5V.png",r="/yi-doc/assets/img_28-Bg2ImUm4.png",k="/yi-doc/assets/img_29-C-khOcq8.png",d="/yi-doc/assets/img_30-C1YTczHk.png",m="/yi-doc/assets/img_31-MEHHQvNs.png",v={},g=e('<h1 id="二、统一网关-gateway" tabindex="-1"><a class="header-anchor" href="#二、统一网关-gateway"><span>二、统一网关 Gateway</span></a></h1><h2 id="_1、网关的作用" tabindex="-1"><a class="header-anchor" href="#_1、网关的作用"><span>1、网关的作用</span></a></h2><ul><li>身份认证和校验</li><li><strong>服务路由(最基本作用)</strong>、负载均衡</li><li>请求限流</li></ul><h2 id="_2、网关的技术实现" tabindex="-1"><a class="header-anchor" href="#_2、网关的技术实现"><span>2、网关的技术实现</span></a></h2><p><img src="'+p+'" alt="img_21.png"><img src="'+t+`" alt="img_22.png"></p><h2 id="_3、快速入门" tabindex="-1"><a class="header-anchor" href="#_3、快速入门"><span>3、快速入门</span></a></h2><p>搭建步骤：</p><ol><li>创建新的 module，引入<code>SpringCloudGateway</code>的依赖和<code>nacos</code>的服务发现依赖</li></ol><div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre><code><span class="line"><span class="token comment">&lt;!--nacos服务注册发现依赖--&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-alibaba-nacos-discovery<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token comment">&lt;!--网关gateway依赖--&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-gateway<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>编写路由配置即 nacos 地址</li></ol><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">server</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">10010</span></span>
<span class="line"><span class="token key atrule">spring</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">application</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">name</span><span class="token punctuation">:</span> gateway</span>
<span class="line">  <span class="token key atrule">cloud</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">nacos</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">8850</span> <span class="token comment"># nacos地址</span></span>
<span class="line">    <span class="token key atrule">gateway</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">routes</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> user<span class="token punctuation">-</span>service <span class="token comment"># 路由标示，必须唯一</span></span>
<span class="line">          <span class="token key atrule">uri</span><span class="token punctuation">:</span> lb<span class="token punctuation">:</span>//userService <span class="token comment"># 路由的目标地址</span></span>
<span class="line">          <span class="token key atrule">predicates</span><span class="token punctuation">:</span> <span class="token comment"># 路由断言，判断请求是否符合规则</span></span>
<span class="line">            <span class="token punctuation">-</span> Path=/user/<span class="token important">**</span> <span class="token comment"># 路径断言，判断路径是否是以/user开头，如果是则符合</span></span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> order<span class="token punctuation">-</span>service</span>
<span class="line">          <span class="token key atrule">uri</span><span class="token punctuation">:</span> lb<span class="token punctuation">:</span>//orderService</span>
<span class="line">          <span class="token key atrule">predicates</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token punctuation">-</span> Path=/order/<span class="token important">**</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述两步即可完成搭建。</p><h2 id="_4、路由断言工厂-route-predicate-factory" tabindex="-1"><a class="header-anchor" href="#_4、路由断言工厂-route-predicate-factory"><span>4、路由断言工厂 Route Predicate Factory</span></a></h2><p><img src="`+l+'" alt="img_23.png"><img src="'+c+'" alt="img_24.png"></p><h2 id="_5、路由过滤器-gatewayfilter" tabindex="-1"><a class="header-anchor" href="#_5、路由过滤器-gatewayfilter"><span>5、路由过滤器 GatewayFilter</span></a></h2><p>可对进入网关的请求和微服务返回的响应做处理。 <img src="'+i+'" alt="img_25.png"> Spring 提供的路由过滤器工厂： <img src="'+o+`" alt="img_26.png"> 使用案例：</p><ol><li><strong>给单个路由添加请求头</strong></li></ol><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">server</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">10010</span></span>
<span class="line"><span class="token key atrule">logging</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">level</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">cn.itcast</span><span class="token punctuation">:</span> debug</span>
<span class="line">  <span class="token key atrule">pattern</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">dateformat</span><span class="token punctuation">:</span> MM<span class="token punctuation">-</span>dd HH<span class="token punctuation">:</span>mm<span class="token punctuation">:</span>ss<span class="token punctuation">:</span>SSS</span>
<span class="line"><span class="token key atrule">spring</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">application</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">name</span><span class="token punctuation">:</span> gateway</span>
<span class="line">  <span class="token key atrule">cloud</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">nacos</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">8850</span> <span class="token comment"># nacos地址</span></span>
<span class="line">    <span class="token key atrule">gateway</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">routes</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> user<span class="token punctuation">-</span>service <span class="token comment"># 路由标示，必须唯一</span></span>
<span class="line">          <span class="token key atrule">uri</span><span class="token punctuation">:</span> lb<span class="token punctuation">:</span>//userService <span class="token comment"># 路由的目标地址</span></span>
<span class="line">          <span class="token key atrule">predicates</span><span class="token punctuation">:</span> <span class="token comment"># 路由断言，判断请求是否符合规则</span></span>
<span class="line">            <span class="token punctuation">-</span> Path=/user/<span class="token important">**</span> <span class="token comment"># 路径断言，判断路径是否是以/user开头，如果是则符合</span></span>
<span class="line">          <span class="token comment"># 单个微服务过滤器</span></span>
<span class="line">          <span class="token key atrule">filters</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token punctuation">-</span> AddRequestHeader=Truth<span class="token punctuation">,</span>Zhang Ziyi is awesome<span class="token tag">!</span></span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> order<span class="token punctuation">-</span>service</span>
<span class="line">          <span class="token key atrule">uri</span><span class="token punctuation">:</span> lb<span class="token punctuation">:</span>//orderService</span>
<span class="line">          <span class="token key atrule">predicates</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token punctuation">-</span> Path=/order/<span class="token important">**</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><strong>给所有路由添加请求头</strong></li></ol><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">server</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">10010</span></span>
<span class="line"><span class="token key atrule">logging</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">level</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">cn.itcast</span><span class="token punctuation">:</span> debug</span>
<span class="line">  <span class="token key atrule">pattern</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">dateformat</span><span class="token punctuation">:</span> MM<span class="token punctuation">-</span>dd HH<span class="token punctuation">:</span>mm<span class="token punctuation">:</span>ss<span class="token punctuation">:</span>SSS</span>
<span class="line"><span class="token key atrule">spring</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">application</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">name</span><span class="token punctuation">:</span> gateway</span>
<span class="line">  <span class="token key atrule">cloud</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">nacos</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">8850</span> <span class="token comment"># nacos地址</span></span>
<span class="line">    <span class="token key atrule">gateway</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">routes</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> user<span class="token punctuation">-</span>service <span class="token comment"># 路由标示，必须唯一</span></span>
<span class="line">          <span class="token key atrule">uri</span><span class="token punctuation">:</span> lb<span class="token punctuation">:</span>//userService <span class="token comment"># 路由的目标地址</span></span>
<span class="line">          <span class="token key atrule">predicates</span><span class="token punctuation">:</span> <span class="token comment"># 路由断言，判断请求是否符合规则</span></span>
<span class="line">            <span class="token punctuation">-</span> Path=/user/<span class="token important">**</span> <span class="token comment"># 路径断言，判断路径是否是以/user开头，如果是则符合</span></span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> order<span class="token punctuation">-</span>service</span>
<span class="line">          <span class="token key atrule">uri</span><span class="token punctuation">:</span> lb<span class="token punctuation">:</span>//orderService</span>
<span class="line">          <span class="token key atrule">predicates</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token punctuation">-</span> Path=/order/<span class="token important">**</span></span>
<span class="line">      <span class="token comment"># 全局过滤器</span></span>
<span class="line">      <span class="token key atrule">default-filters</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token comment"># 添加请求头</span></span>
<span class="line">        <span class="token punctuation">-</span> AddRequestHeader=Truth<span class="token punctuation">,</span>Zhang Ziyi is awesome<span class="token tag">!</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6、全局过滤器-global-filter" tabindex="-1"><a class="header-anchor" href="#_6、全局过滤器-global-filter"><span>6、全局过滤器 Global Filter</span></a></h2><p><img src="`+u+`" alt="img_27.png"> 全局过滤器示例代码：</p><p>只有路径中带有<code>authorization=admin</code>的请求才会被放行。</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token keyword">package</span> <span class="token namespace">cn<span class="token punctuation">.</span>itcast<span class="token punctuation">.</span>gateway</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token annotation punctuation">@Order</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token annotation punctuation">@Component</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AuthorizeFilter</span> <span class="token keyword">implements</span> <span class="token class-name">GlobalFilter</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token annotation punctuation">@Override</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">Mono</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Void</span><span class="token punctuation">&gt;</span></span> <span class="token function">filter</span><span class="token punctuation">(</span><span class="token class-name">ServerWebExchange</span> exchange<span class="token punctuation">,</span> <span class="token class-name">GatewayFilterChain</span> chain<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 1.获取请求参数</span></span>
<span class="line">        <span class="token class-name">ServerHttpRequest</span> request <span class="token operator">=</span> exchange<span class="token punctuation">.</span><span class="token function">getRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">MultiValueMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> params <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getQueryParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 2.获取参数中的 authorization 参数</span></span>
<span class="line">        <span class="token class-name">String</span> auth <span class="token operator">=</span> params<span class="token punctuation">.</span><span class="token function">getFirst</span><span class="token punctuation">(</span><span class="token string">&quot;authorization&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 3.判断参数值是否等于 admin</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>auth<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 4.是，放行</span></span>
<span class="line">            <span class="token keyword">return</span> chain<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>exchange<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">// 5.否，拦截</span></span>
<span class="line">        <span class="token comment">// 5.1.设置状态码</span></span>
<span class="line">        exchange<span class="token punctuation">.</span><span class="token function">getResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setStatusCode</span><span class="token punctuation">(</span><span class="token class-name">HttpStatus</span><span class="token punctuation">.</span><span class="token constant">UNAUTHORIZED</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 5.2.拦截请求</span></span>
<span class="line">        <span class="token keyword">return</span> exchange<span class="token punctuation">.</span><span class="token function">getResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setComplete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7、过滤器执行顺序" tabindex="-1"><a class="header-anchor" href="#_7、过滤器执行顺序"><span>7、过滤器执行顺序</span></a></h2><p><img src="`+r+'" alt="img_28.png"><img src="'+k+'" alt="img_29.png"></p><h2 id="_8、跨域问题" tabindex="-1"><a class="header-anchor" href="#_8、跨域问题"><span>8、跨域问题</span></a></h2><p><img src="'+d+'" alt="img_30.png"><img src="'+m+`" alt="img_31.png"></p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">spring</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">cloud</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">gateway</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">globalcors</span><span class="token punctuation">:</span> <span class="token comment"># 全局的跨域处理</span></span>
<span class="line">        <span class="token key atrule">add-to-simple-url-handler-mapping</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 解决options请求被拦截问题</span></span>
<span class="line">        <span class="token key atrule">corsConfigurations</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">&#39;[/**]&#39;</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token key atrule">allowedOrigins</span><span class="token punctuation">:</span> <span class="token comment"># 允许哪些网站的跨域请求</span></span>
<span class="line">              <span class="token punctuation">-</span> <span class="token string">&quot;http://localhost:8090&quot;</span></span>
<span class="line">              <span class="token punctuation">-</span> <span class="token string">&quot;http://www.leyou.com&quot;</span></span>
<span class="line">            <span class="token key atrule">allowedMethods</span><span class="token punctuation">:</span> <span class="token comment"># 允许的跨域ajax的请求方式</span></span>
<span class="line">              <span class="token punctuation">-</span> <span class="token string">&quot;GET&quot;</span></span>
<span class="line">              <span class="token punctuation">-</span> <span class="token string">&quot;POST&quot;</span></span>
<span class="line">              <span class="token punctuation">-</span> <span class="token string">&quot;DELETE&quot;</span></span>
<span class="line">              <span class="token punctuation">-</span> <span class="token string">&quot;PUT&quot;</span></span>
<span class="line">              <span class="token punctuation">-</span> <span class="token string">&quot;OPTIONS&quot;</span></span>
<span class="line">            <span class="token key atrule">allowedHeaders</span><span class="token punctuation">:</span> <span class="token string">&quot;*&quot;</span> <span class="token comment"># 允许在请求中携带的头信息</span></span>
<span class="line">            <span class="token key atrule">allowCredentials</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 是否允许携带cookie</span></span>
<span class="line">            <span class="token key atrule">maxAge</span><span class="token punctuation">:</span> <span class="token number">360000</span> <span class="token comment"># 这次跨域检测的有效期</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),b=[g];function y(h,_){return a(),s("div",null,b)}const w=n(v,[["render",y],["__file","2-统一网关.html.vue"]]),x=JSON.parse('{"path":"/dev/sys_infras/micro_service/2-%E7%BB%9F%E4%B8%80%E7%BD%91%E5%85%B3.html","title":"二、统一网关 Gateway","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1、网关的作用","slug":"_1、网关的作用","link":"#_1、网关的作用","children":[]},{"level":2,"title":"2、网关的技术实现","slug":"_2、网关的技术实现","link":"#_2、网关的技术实现","children":[]},{"level":2,"title":"3、快速入门","slug":"_3、快速入门","link":"#_3、快速入门","children":[]},{"level":2,"title":"4、路由断言工厂 Route Predicate Factory","slug":"_4、路由断言工厂-route-predicate-factory","link":"#_4、路由断言工厂-route-predicate-factory","children":[]},{"level":2,"title":"5、路由过滤器 GatewayFilter","slug":"_5、路由过滤器-gatewayfilter","link":"#_5、路由过滤器-gatewayfilter","children":[]},{"level":2,"title":"6、全局过滤器 Global Filter","slug":"_6、全局过滤器-global-filter","link":"#_6、全局过滤器-global-filter","children":[]},{"level":2,"title":"7、过滤器执行顺序","slug":"_7、过滤器执行顺序","link":"#_7、过滤器执行顺序","children":[]},{"level":2,"title":"8、跨域问题","slug":"_8、跨域问题","link":"#_8、跨域问题","children":[]}],"git":{"updatedTime":1721653842000,"contributors":[{"name":"ZhangZiYi","email":"ecustzzy1@163.com","commits":1}]},"filePathRelative":"dev/sys_infras/micro_service/2-统一网关.md"}');export{w as comp,x as data};
