<template><div><h1 id="六、通用枚举" tabindex="-1"><a class="header-anchor" href="#六、通用枚举"><span>六、通用枚举</span></a></h1>
<p>枚举类型可以有多个属性，可以使用 <code v-pre>@EnumValue</code>注解设置枚举类型注入的属性。</p>
<h2 id="使用案例" tabindex="-1"><a class="header-anchor" href="#使用案例"><span>使用案例</span></a></h2>
<p><strong>在表中添加 sex 字段</strong></p>
<p><img src="@source/dev/java/mb_plus/img_38.png" alt="img_38.png"></p>
<p><strong>创建通用枚举</strong></p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@Getter</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">SexEnum</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">MALE</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token char">'男'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">FEMALE</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token char">'女'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@EnumValue</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">Integer</span> sex<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">Character</span> sexName<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token class-name">SexEnum</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> sex<span class="token punctuation">,</span> <span class="token class-name">Character</span> sexName<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>sexName <span class="token operator">=</span> sexName<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在实体类中进行相应修改</strong></p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@Data</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">SexEnum</span> sex<span class="token punctuation">;</span></span>
<span class="line">    <span class="token annotation punctuation">@TableLogic</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">Integer</span> isDeleted<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用测试</strong></p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testEnum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        user<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"Nance"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        user<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        user<span class="token punctuation">.</span><span class="token function">setEmail</span><span class="token punctuation">(</span><span class="token string">"test6@baomidou.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        user<span class="token punctuation">.</span><span class="token function">setSex</span><span class="token punctuation">(</span><span class="token class-name">SexEnum</span><span class="token punctuation">.</span><span class="token constant">MALE</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">int</span> insert <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>insert<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成的 SQL 语句如下：
<img src="@source/dev/java/mb_plus/img_39.png" alt="img_39.png"></p>
</div></template>


