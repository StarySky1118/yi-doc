<template><div><h1 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h1>
<p>Spring 框架有两点核心：IoC 和 Aop。</p>
<p>IoC 是控制反转，它是指将对象之间的<strong>依赖关系</strong>和对象的<strong>生命周期</strong>交由容器管理，而非程序员手动控制，这种方式降低了程序的耦合性，方便了代码编写。
Spring IoC 是通过依赖注入的方式实现的。
在使用时，只需要进行相关配置，就可以将对象之间的依赖关系和对象的生命周期交由容器管理。</p>
<p>Aop 是面向切面编程，它是指将那些业务流程无关，但被大量业务流程共享的非业务模块（例如事务管理、日志等）提取出来，从而减少代码重复编写。
Spring Aop 是使用动态代理实现的，包括 JDK 动态代理和 CGLIB 动态代理。
在使用时，需要首先定义切面，选择方法作为切点，对切点织入通知，实现功能增强。</p>
<p>掌握了 IoC 和 Aop，就把握住了 Spring 框架的主线。</p>
<p>通常会将 SpringBoot 作为后端使用，Spring MVC 也是 Spring 框架的重点之一。</p>
<h2 id="spring-用到了那些设计模式" tabindex="-1"><a class="header-anchor" href="#spring-用到了那些设计模式"><span>Spring 用到了那些设计模式？</span></a></h2>
<p>IoC：工厂模式、单例模式</p>
<p>AOP：代理模式</p>
<p>MVC：适配器模式</p>
</div></template>


