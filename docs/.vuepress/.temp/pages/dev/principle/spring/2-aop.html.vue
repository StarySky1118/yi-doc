<template><div><h1 id="_2-aop" tabindex="-1"><a class="header-anchor" href="#_2-aop"><span>2. AOP</span></a></h1>
<h2 id="spring-aop-是如何实现的" tabindex="-1"><a class="header-anchor" href="#spring-aop-是如何实现的"><span>Spring AOP 是如何实现的？</span></a></h2>
<p>Spring AOP 是基于动态代理实现的，包括 JDK 动态代理和 CGLIB 动态代理。</p>
<p>JDK 动态代理基于反射，适用于那些实现了接口的被代理类；</p>
<p>CGLIB 动态代理基于字节码操作，通过生成被代理类的子类实现代理。</p>
<p>SpringBoot 默认使用 CGLIB 动态代理。</p>
<h2 id="spring-事务有哪些传播行为-传播行为有什么用" tabindex="-1"><a class="header-anchor" href="#spring-事务有哪些传播行为-传播行为有什么用"><span>Spring 事务有哪些传播行为？传播行为有什么用？</span></a></h2>
<p>Spring 事务传播行为可以指定事务的边界。</p>
<p>传播行为可以设置的属性有 <code v-pre>REQUIRED</code>、<code v-pre>REQUIRED_NEW</code> 等。</p>
<h2 id="transactional-注解在什么场景下会失效" tabindex="-1"><a class="header-anchor" href="#transactional-注解在什么场景下会失效"><span><code v-pre>@Transactional</code> 注解在什么场景下会失效？</span></a></h2>
<p>失效场景分两类：</p>
<ol>
<li>实现本身带来的限制</li>
<li>使用不当</li>
</ol>
<p><strong>实现本身带来的限制</strong></p>
<ol>
<li>内部调用注解方法无效。内部调用不会使用代理类。</li>
<li>方法非 <code v-pre>public</code> 修饰</li>
</ol>
<p><strong>使用不当</strong></p>
<ol>
<li>注解有个 <code v-pre>rollBackFor</code> 属性，默认情况下，出现 Unchecked Exception 进行回滚，如果不进行指定，出现其他异常不会回滚</li>
<li>异常被捕获</li>
<li>数据库本身不支持事务</li>
</ol>
</div></template>


