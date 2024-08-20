# 1. IoC
## Spring IoC 是使用依赖注入实现的，什么是依赖注入？
依赖注入是指，在程序的运行阶段，容器会寻找被依赖的对象，进行注入，这样就可以将对象的**依赖关系推迟**到运行阶段确定，无需在编码阶段指定。

## 什么是 Spring Bean？
Spring Bean 就是容器可以进行依赖关系和生命周期管理的对象。

## BeanFactory 是什么？
BeanFactory 是一个 Factory，是 IoC 的底层容器。

本质是一个接口，包含 `getBean` 方法，可以通过该方法获取 Bean。

## Spring ApplicationContext 是什么？
Application Context 是一个进行了功能扩展的容器。
除了基础的管理对象依赖关系和生命周期外，还提供了事件发布、资源获取、环境信息获取等功能。

## Spring Bean 有哪些作用域？
Spring Bean 的作用域有 singleton、prototype、request、session、application 和 websocket。
其中 singleton 是最常使用的作用域。

## Spring Bean 有哪些注入方式？
Spring Bean 的注入方式有构造器注入、字段注入、方法注入等。

## Spring Bean 生命周期是怎样的？
Spring Bean 生命周期节点包括实例化、属性注入、初始化、使用和销毁。

实例化阶段创建这个 Bean 实例。

属性注入阶段会注入 Bean 的属性。例如使用 `@Resource` 或 `@Autowire` 注解注入。

初始化阶段属性注入完毕。可以使用 `@PostConstruct` 注解或实现 `initializingBean` 接口在此阶段执行相应逻辑。

销毁阶段可以使用 `@PreDestroy` 注解或实现 `disposableBean` 接口在此阶段执行相应逻辑。

## Spring IoC 容器初始化过程是怎样的？
容器的初始化过程包括容器实例化、Bean 定义注册、Bean 实例化属性注入初始化。

容器实例化会根据配置创建 IoC 容器。

Bean 定义注册会将 BeanDefinition 注册到容器中。BeanDefinition 中包含了管理 Bean 所需的全部信息，包括名称、作用域、
依赖关系、生命周期方法等。

最后根据 BeanDefinition 进行 Bean 的实例化、属性注入与初始化。

## Spring Bean 注册到容器中有哪几种方式？
最常使用的两种 Bean 注册方式为：`@Component` 及其衍生注解和 `@Configuration` + `@Bean`。

`@Component` 及其衍生注解包括 `@Controller`、`@Service` 等，可使用此注解将自定义类声明为 Bean。

`@Configuration` + `@Bean`，将 `@Configuration` 加到配置类上，`@Bean` 修饰方法，方法的返回值会被声明为 Bean。
这种方式可以将第三方类声明为 Bean。

## Spring 装配方式有哪些？
Spring 装配方式包括按名称和按类型装配。

按名称装配会去容器中寻找指定名称的 Bean 进行装配，
按类型装配会去容器中寻找指定类型的 Bean 进行装配，该装配方式要求容器中仅有一个符合要求的 Bean。

## 如果 byType 装配方式出现多个符合条件的 Bean，如何消除歧义？
可以使用 `@qualifier` 或 `@primary` 注解消除歧义。

可以使用 `@qualifier` 注解指定注入 bean 的名称。

`@primary` 注解可以指定若存在多个候选 Bean，优先选择哪一个。

## Spring Bean 是否有并发安全问题？如果有，如何保证？
Spring 中的 Bean 大部分是单例的，如果 Bean 无状态，则没有并发安全问题；
如果 Bean 有状态，可以使用 `synchronized` 关键字、线程安全的数据结构或 JUC 中其他并发工具类保证线程安全。

## Spring `@value` 注解有何作用？
`@value` 可以将外部化的配置注入到 Spring Bean 中，例如配置文件、系统属性、环境变量等。

## 什么是循环依赖？如何解决？
循环依赖是指多个 Bean 形成了封闭的依赖链，这些 Bean 都无法正确创建。

解决循环依赖的基本思想是提前暴露未完全创建完毕的 Bean。

具体到 Spring 中，Spring 要求这些 Bean 不全是构造器注入，并且 beanName 字母序在前的 Bean 不能使用构造器注入。
