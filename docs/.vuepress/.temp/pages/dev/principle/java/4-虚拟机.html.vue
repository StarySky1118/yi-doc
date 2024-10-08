<template><div><h1 id="_4-虚拟机" tabindex="-1"><a class="header-anchor" href="#_4-虚拟机"><span>4. 虚拟机</span></a></h1>
<h2 id="介绍一下-jvm-tlab" tabindex="-1"><a class="header-anchor" href="#介绍一下-jvm-tlab"><span>介绍一下 JVM TLAB</span></a></h2>
<p>TLAB 的全称是线程本地分配缓冲区，这是一种 JVM 进行堆内存管理的机制。</p>
<p>当线程分配对象时，JVM 会分配给线程一小块区域，这一小块区域远大于对象占用的内存，线程就可以独享这一小块区域，在此区域分配对象无需额外的同步操作，不够再去申请。</p>
<p>与直接在堆内存上分配对象相比，这种方式减少了同步开销，提升了分配对象的效率。</p>
<h2 id="java-中的-jit-是什么" tabindex="-1"><a class="header-anchor" href="#java-中的-jit-是什么"><span>Java 中的 JIT 是什么？</span></a></h2>
<p>JVM 是通过解释的方式执行字节码的，JIT 允许 JVM 将热点代码编译为机器码，从而提高程序的执行效率。</p>
<h2 id="java-中的-aot-是什么" tabindex="-1"><a class="header-anchor" href="#java-中的-aot-是什么"><span>Java 中的 AOT 是什么？</span></a></h2>
<p>AOT 技术可以直接将字节码编译为目标平台的机器码，提高程序执行效率。</p>
<p>这种方式适用于需要快速启动的应用程序，如微服务、嵌入式等。</p>
<h2 id="java-中的逃逸分析是什么" tabindex="-1"><a class="header-anchor" href="#java-中的逃逸分析是什么"><span>Java 中的逃逸分析是什么？</span></a></h2>
<p>逃逸分析是一种优化技术，它允许在栈上分配仅被单一方法或线程所引用的对象，从而使该对象随栈分配、随栈消亡。</p>
</div></template>


