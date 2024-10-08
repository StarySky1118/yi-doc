<template><div><h1 id="_3-并发" tabindex="-1"><a class="header-anchor" href="#_3-并发"><span>3. 并发</span></a></h1>
<h2 id="java-线程和操作系统线程是怎样的对应关系" tabindex="-1"><a class="header-anchor" href="#java-线程和操作系统线程是怎样的对应关系"><span>Java 线程和操作系统线程是怎样的对应关系？</span></a></h2>
<p>Java 线程和操作系统线程通常是一一对应的。</p>
<h2 id="多线程下通常有哪些问题" tabindex="-1"><a class="header-anchor" href="#多线程下通常有哪些问题"><span>多线程下通常有哪些问题？</span></a></h2>
<p>多线程下通常包括同步与互斥问题。</p>
<p>同步是指多个线程之间有严格的执行顺序。</p>
<p>互斥是指多个线程互斥地访问共享资源。</p>
<h2 id="java-线程有哪些状态" tabindex="-1"><a class="header-anchor" href="#java-线程有哪些状态"><span>Java 线程有哪些状态？</span></a></h2>
<p>Java 线程状态包括新建态、就绪态、阻塞态、等待态、时间等待态和终止态。</p>
<p>当 <code v-pre>Thread</code> 类被创建，调用 <code v-pre>start()</code> 方法前，线程处于<strong>新建态</strong>。</p>
<p>调用 <code v-pre>start()</code> 方法，线程进入<strong>可运行态</strong>。这种状态相当于进程状态中的就绪态+运行态。</p>
<p>线程获取监视器锁失败，会进入<strong>阻塞态</strong>。</p>
<p>线程等待其他线程执行特定操作，进入<strong>等待态</strong>。</p>
<p>具有等待时间的等待态为<strong>时间等待态</strong>。</p>
<p>线程执行完成，进入<strong>终止态</strong>。</p>
<h2 id="分别介绍一下-synchrinized-关键字和-reentrantlock" tabindex="-1"><a class="header-anchor" href="#分别介绍一下-synchrinized-关键字和-reentrantlock"><span>分别介绍一下 <code v-pre>synchrinized</code> 关键字和 <code v-pre>ReentrantLock</code></span></a></h2>
<p><code v-pre>synchorinized</code> 关键字和 <code v-pre>ReentrantLock</code> 都可以实现线程同步。
它们的底层实现原理不同，适用于不同的线程同步场景。</p>
<p><code v-pre>synchronized</code> 是一种内置锁，使用对象的监视器锁实现。</p>
<p><code v-pre>ReentrantLock</code> 底层使用 AQS 实现，AQS 是一个抽象类，提供了基本线程同步的框架，包括队列、状态值、获取与释放方法等。
使用不同含义的状态值，搭配不同的获取与释放方法实现，就可以满足不同的同步需求。</p>
<p><code v-pre>synchronized</code> 关键字适用于简单的线程同步场景，
但如果线程同步有更多需求，例如公平锁或使用条件变量协调线程之间的通信等，就需要 <code v-pre>ReentrantLock</code> 实现。</p>
<h2 id="什么是可重入锁-如何实现可重入锁" tabindex="-1"><a class="header-anchor" href="#什么是可重入锁-如何实现可重入锁"><span>什么是可重入锁？如何实现可重入锁？</span></a></h2>
<p>可重入锁是指线程获取锁后，可重复获取该锁，而不会产生死锁或其他问题。</p>
<p>可重入锁的实现原理是，锁内部包含一个计数器和线程标识。
当获取锁时，如果计数器为 0，则说明没有线程获取到锁，需要通过竞争的方式获取锁；
如果计数器大于 0，说明有线程获取到锁，再比较线程标识是否属于自己，如果属于自己，则可以直接获取到锁，并将计数器+1。
每次释放锁都要将计数器 -1。</p>
<h2 id="voliatile-关键字有何作用" tabindex="-1"><a class="header-anchor" href="#voliatile-关键字有何作用"><span><code v-pre>voliatile</code> 关键字有何作用？</span></a></h2>
<p><code v-pre>voliatile</code> 关键字可以保证在多线程环境下，变量的可见性和有序性。</p>
<p>首先可见性，对 <code v-pre>voliatile</code> 修饰变量的修改，会直接写到主存；对变量的读取也会直接从主存读，保证了修改的可见性。</p>
<p>其次有序性，通过禁止指令重排序避免多线程下可能会导致的问题。</p>
<h2 id="指令重排序是什么" tabindex="-1"><a class="header-anchor" href="#指令重排序是什么"><span>指令重排序是什么？</span></a></h2>
<p>指令重排序是一种性能优化技术。但需要满足两个条件：</p>
<ol>
<li>单线程条件下，不改变程序执行结果</li>
<li>存在数据依赖关系的语句不允许重排序</li>
</ol>
<p>因此，指令重排序技术可能破坏多线程的执行语义。</p>
<h2 id="公平锁和非公平锁的区别是什么" tabindex="-1"><a class="header-anchor" href="#公平锁和非公平锁的区别是什么"><span>公平锁和非公平锁的区别是什么？</span></a></h2>
<p>公平锁指按申请顺序获取锁，非公平锁使用竞争方式获取锁。</p>
<p>公平锁底层使用一个队列，线程获取锁之前，首先进入队列排队，并按照队列顺序获取锁。</p>
<h2 id="thread-sleep-和-thread-wait-有什么区别" tabindex="-1"><a class="header-anchor" href="#thread-sleep-和-thread-wait-有什么区别"><span><code v-pre>Thread.sleep()</code> 和 <code v-pre>Thread.wait()</code> 有什么区别？</span></a></h2>
<p><code v-pre>Thread.sleep()</code> 用于延迟线程的执行，不会释放对象锁；
<code v-pre>Thread.wait()</code> 用于实现线程同步，只能用于同步代码块内，会释放对象锁。</p>
</div></template>


