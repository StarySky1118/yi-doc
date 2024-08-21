<template><div><h1 id="_1-基础篇" tabindex="-1"><a class="header-anchor" href="#_1-基础篇"><span>1. 基础篇</span></a></h1>
<h2 id="java-语言有哪些优势" tabindex="-1"><a class="header-anchor" href="#java-语言有哪些优势"><span>Java 语言有哪些优势？</span></a></h2>
<p>Java 语言的优势主要有跨平台、自动垃圾回收和成熟的生态。</p>
<p><strong>跨平台</strong></p>
<p>跨平台是 Java 早期比较大的卖点。Java 针对不同的操作系统平台实现了不同的虚拟机，程序员只需要将源代码编译为字节码文件，
即可交由不同操作系统的虚拟机解释执行。实现“一次编译，到处运行”。</p>
<p><strong>自动垃圾回收</strong></p>
<p>Java 有自动垃圾回收机制，无需像 C/C++ 一样手动进行堆内存管理，极大方便了程序编写。</p>
<p><strong>生态</strong></p>
<p>Java 流行离不开成熟的生态，例如 Spring 相关框架大大简化了后端开发。</p>
<h2 id="如何理解-java-中的多态特性" tabindex="-1"><a class="header-anchor" href="#如何理解-java-中的多态特性"><span>如何理解 Java 中的多态特性？</span></a></h2>
<p>多态是多种形态，在 Java 中指同类或不同类的相同方法具有不同行为。</p>
<p>多态分为编译时多态和运行时多态。</p>
<p>编译时多态对应 Java 中的重载特性。如果同一个类中多个方法，方法名称相同，但参数不同（参数类型、数量不同），便构成了方法重载。
方法重载可使同一方法传入不同参数时表现出不同的行为。</p>
<p>运行时多态对应 Java 中的重写特性。子类可以重写父类中的同名方法，从而扩展功能。使用父类型引用指向子类型对象，调用父类方法时，
运行时实际会调用子类方法。</p>
<h2 id="接口和抽象类有什么区别" tabindex="-1"><a class="header-anchor" href="#接口和抽象类有什么区别"><span>接口和抽象类有什么区别？</span></a></h2>
<p>接口遵循的是一种<strong>自上而下</strong>的设计原则，它规定了一组<strong>行为规范</strong>；</p>
<p>抽象类遵循的是一种<strong>自下而上</strong>的设计原则，它提取了类的<strong>公共行为</strong>。</p>
<h2 id="java-中的不可变类是什么-如何实现一个不可变类" tabindex="-1"><a class="header-anchor" href="#java-中的不可变类是什么-如何实现一个不可变类"><span>Java 中的不可变类是什么？如何实现一个不可变类？</span></a></h2>
<p>不可变类的对象，一旦被创建，其内部属性便无法被修改。</p>
<p>要实现一个不可变类，需要将类添加 <code v-pre>final</code> 修饰，私有化属性，不对外暴露 <code v-pre>set</code> 方法。</p>
<h2 id="java-异常体系是怎样的" tabindex="-1"><a class="header-anchor" href="#java-异常体系是怎样的"><span>Java 异常体系是怎样的？</span></a></h2>
<p>Java 中的异常包括 Exception 和 Error。
Exception 是那些程序可以处理的异常，可以使用 <code v-pre>catch</code> 捕获；Error 是那些程序无法处理的错误，当出现 Error 时，虚拟机
通常会将线程终止。</p>
<p>Exception 分为受检异常和非受检异常。受检异常需要在代码中显式地使用 <code v-pre>try...catch</code> 处理，例如 IO 相关异常；
非受检异常则不要求，<code v-pre>RuntimeException</code> 及其子类都是非首检异常。</p>
<h2 id="面向对象和面向过程有什么区别" tabindex="-1"><a class="header-anchor" href="#面向对象和面向过程有什么区别"><span>面向对象和面向过程有什么区别？</span></a></h2>
<p>面向对象将对象作为编程的基本单元，将程序视为对象之间的交互；
面向过程将过程作为编程的基本单元。</p>
<p>面向对象更有利于程序扩展。</p>
<h2 id="string、stringbuffer-和-stringbuilder-有什么区别" tabindex="-1"><a class="header-anchor" href="#string、stringbuffer-和-stringbuilder-有什么区别"><span>String、StringBuffer 和 StringBuilder 有什么区别？</span></a></h2>
<p>String 是不可变类，因此字符串拼接需要产生大量无用的中间对象。为解决这个问题，就出现了 StringBuffer 和 StringBuilder。
二者均可以高效进行字符串拼接操作，不同之处在于 StringBuffer 是线程安全的，StringBuilder 不是。</p>
<h2 id="java-为什么会有包装类" tabindex="-1"><a class="header-anchor" href="#java-为什么会有包装类"><span>Java 为什么会有包装类？</span></a></h2>
<p>包装类让基本数据类型拥有了类的特性，添加属性和方法，丰富基本数据类型的操作。</p>
<h2 id="jre、jdk-有什么区别" tabindex="-1"><a class="header-anchor" href="#jre、jdk-有什么区别"><span>JRE、JDK 有什么区别？</span></a></h2>
<p>JRE 是 Java 运行环境，包括 JVM、核心类库等。</p>
<p>JDK 除了包含 JRE 外，还包括一些其他开发工具，例如编译工具 <code v-pre>javac</code>、生成堆转储工具 <code v-pre>jmap</code> 和生成栈追踪信息的 <code v-pre>jstack</code>。</p>
<h2 id="深拷贝和浅拷贝各是什么" tabindex="-1"><a class="header-anchor" href="#深拷贝和浅拷贝各是什么"><span>深拷贝和浅拷贝各是什么？</span></a></h2>
<p>深拷贝不仅拷贝基本类型，引用类型指向的对象也会拷贝。</p>
<p>浅拷贝只拷贝基本类型，引用类型指向的对象和源对象共享。</p>
<h2 id="java-integer-缓存池是什么" tabindex="-1"><a class="header-anchor" href="#java-integer-缓存池是什么"><span>Java Integer 缓存池是什么？</span></a></h2>
<p>Integer 缓存池中保存了指定数据范围内的 Integer 对象，当使用 <code v-pre>Integer.valueOf()</code> 方法获取对象时，若在指定数据范围内，
直接使用缓存池中的对象。</p>
<h2 id="java-类加载过程是怎样的" tabindex="-1"><a class="header-anchor" href="#java-类加载过程是怎样的"><span>Java 类加载过程是怎样的？</span></a></h2>
<p>Java 类加载过程主要包括加载、连接、初始化三步。</p>
<p>加载过程就是获取类的二进制字节流，并在方法区中生成类的 Class 对象。</p>
<p>连接过程主要是为类变量分配内存空间，又分为三步：验证、准备和解析。
验证就是对二进制字节流进行相关校验，例如 JVM 版本；
准备就是为各种类变量分配默认值；
解析阶段会将常量池的符号引用转换为直接引用。</p>
<p>初始化阶段执行静态代码块，为类变量赋真实值。</p>
</div></template>


