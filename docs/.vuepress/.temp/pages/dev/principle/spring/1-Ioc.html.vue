<template><div><h1 id="_1-ioc" tabindex="-1"><a class="header-anchor" href="#_1-ioc"><span>1. IoC</span></a></h1>
<h2 id="spring-ioc-是使用依赖注入实现的-什么是依赖注入" tabindex="-1"><a class="header-anchor" href="#spring-ioc-是使用依赖注入实现的-什么是依赖注入"><span>Spring IoC 是使用依赖注入实现的，什么是依赖注入？</span></a></h2>
<p>依赖注入是指，在程序的运行阶段，容器会寻找被依赖的对象，进行注入，这样就可以将对象的<strong>依赖关系推迟</strong>到运行阶段确定，无需在编码阶段指定。</p>
<h2 id="什么是-spring-bean" tabindex="-1"><a class="header-anchor" href="#什么是-spring-bean"><span>什么是 Spring Bean？</span></a></h2>
<p>Spring Bean 就是容器可以进行依赖关系和生命周期管理的对象。</p>
<h2 id="beanfactory-是什么" tabindex="-1"><a class="header-anchor" href="#beanfactory-是什么"><span>BeanFactory 是什么？</span></a></h2>
<p>BeanFactory 是一个 Factory，是 IoC 的底层容器。</p>
<p>本质是一个接口，包含 <code v-pre>getBean</code> 方法，可以通过该方法获取 Bean。</p>
<h2 id="spring-applicationcontext-是什么" tabindex="-1"><a class="header-anchor" href="#spring-applicationcontext-是什么"><span>Spring ApplicationContext 是什么？</span></a></h2>
<p>Application Context 是一个进行了功能扩展的容器。
除了基础的管理对象依赖关系和生命周期外，还提供了事件发布、资源获取、环境信息获取等功能。</p>
<h2 id="spring-bean-有哪些作用域" tabindex="-1"><a class="header-anchor" href="#spring-bean-有哪些作用域"><span>Spring Bean 有哪些作用域？</span></a></h2>
<p>Spring Bean 的作用域有 singleton、prototype、request、session、application 和 websocket。
其中 singleton 是最常使用的作用域。</p>
<h2 id="spring-bean-有哪些注入方式" tabindex="-1"><a class="header-anchor" href="#spring-bean-有哪些注入方式"><span>Spring Bean 有哪些注入方式？</span></a></h2>
<p>Spring Bean 的注入方式有构造器注入、字段注入、方法注入等。</p>
<h2 id="spring-bean-生命周期是怎样的" tabindex="-1"><a class="header-anchor" href="#spring-bean-生命周期是怎样的"><span>Spring Bean 生命周期是怎样的？</span></a></h2>
<p>Spring Bean 生命周期节点包括实例化、属性注入、初始化、使用和销毁。</p>
<p>实例化阶段创建这个 Bean 实例。</p>
<p>属性注入阶段会注入 Bean 的属性。例如使用 <code v-pre>@Resource</code> 或 <code v-pre>@Autowire</code> 注解注入。</p>
<p>初始化阶段属性注入完毕。可以使用 <code v-pre>@PostConstruct</code> 注解或实现 <code v-pre>initializingBean</code> 接口在此阶段执行相应逻辑。</p>
<p>销毁阶段可以使用 <code v-pre>@PreDestroy</code> 注解或实现 <code v-pre>disposableBean</code> 接口在此阶段执行相应逻辑。</p>
<h2 id="spring-ioc-容器初始化过程是怎样的" tabindex="-1"><a class="header-anchor" href="#spring-ioc-容器初始化过程是怎样的"><span>Spring IoC 容器初始化过程是怎样的？</span></a></h2>
<p>容器的初始化过程包括容器实例化、Bean 定义注册、Bean 实例化属性注入初始化。</p>
<p>容器实例化会根据配置创建 IoC 容器。</p>
<p>Bean 定义注册会将 BeanDefinition 注册到容器中。BeanDefinition 中包含了管理 Bean 所需的全部信息，包括名称、作用域、
依赖关系、生命周期方法等。</p>
<p>最后根据 BeanDefinition 进行 Bean 的实例化、属性注入与初始化。</p>
<h2 id="spring-bean-注册到容器中有哪几种方式" tabindex="-1"><a class="header-anchor" href="#spring-bean-注册到容器中有哪几种方式"><span>Spring Bean 注册到容器中有哪几种方式？</span></a></h2>
<p>最常使用的两种 Bean 注册方式为：<code v-pre>@Component</code> 及其衍生注解和 <code v-pre>@Configuration</code> + <code v-pre>@Bean</code>。</p>
<p><code v-pre>@Component</code> 及其衍生注解包括 <code v-pre>@Controller</code>、<code v-pre>@Service</code> 等，可使用此注解将自定义类声明为 Bean。</p>
<p><code v-pre>@Configuration</code> + <code v-pre>@Bean</code>，将 <code v-pre>@Configuration</code> 加到配置类上，<code v-pre>@Bean</code> 修饰方法，方法的返回值会被声明为 Bean。
这种方式可以将第三方类声明为 Bean。</p>
<h2 id="spring-装配方式有哪些" tabindex="-1"><a class="header-anchor" href="#spring-装配方式有哪些"><span>Spring 装配方式有哪些？</span></a></h2>
<p>Spring 装配方式包括按名称和按类型装配。</p>
<p>按名称装配会去容器中寻找指定名称的 Bean 进行装配，
按类型装配会去容器中寻找指定类型的 Bean 进行装配，该装配方式要求容器中仅有一个符合要求的 Bean。</p>
<h2 id="如果-bytype-装配方式出现多个符合条件的-bean-如何消除歧义" tabindex="-1"><a class="header-anchor" href="#如果-bytype-装配方式出现多个符合条件的-bean-如何消除歧义"><span>如果 byType 装配方式出现多个符合条件的 Bean，如何消除歧义？</span></a></h2>
<p>可以使用 <code v-pre>@qualifier</code> 或 <code v-pre>@primary</code> 注解消除歧义。</p>
<p>可以使用 <code v-pre>@qualifier</code> 注解指定注入 bean 的名称。</p>
<p><code v-pre>@primary</code> 注解可以指定若存在多个候选 Bean，优先选择哪一个。</p>
<h2 id="spring-bean-是否有并发安全问题-如果有-如何保证" tabindex="-1"><a class="header-anchor" href="#spring-bean-是否有并发安全问题-如果有-如何保证"><span>Spring Bean 是否有并发安全问题？如果有，如何保证？</span></a></h2>
<p>Spring 中的 Bean 大部分是单例的，如果 Bean 无状态，则没有并发安全问题；
如果 Bean 有状态，可以使用 <code v-pre>synchronized</code> 关键字、线程安全的数据结构或 JUC 中其他并发工具类保证线程安全。</p>
<h2 id="spring-value-注解有何作用" tabindex="-1"><a class="header-anchor" href="#spring-value-注解有何作用"><span>Spring <code v-pre>@value</code> 注解有何作用？</span></a></h2>
<p><code v-pre>@value</code> 可以将外部化的配置注入到 Spring Bean 中，例如配置文件、系统属性、环境变量等。</p>
<h2 id="什么是循环依赖-如何解决" tabindex="-1"><a class="header-anchor" href="#什么是循环依赖-如何解决"><span>什么是循环依赖？如何解决？</span></a></h2>
<p>循环依赖是指多个 Bean 形成了封闭的依赖链，这些 Bean 都无法正确创建。</p>
<p>解决循环依赖的基本思想是提前暴露未完全创建完毕的 Bean。</p>
<p>具体到 Spring 中，Spring 要求这些 Bean 不全是构造器注入，并且 beanName 字母序在前的 Bean 不能使用构造器注入。</p>
</div></template>


