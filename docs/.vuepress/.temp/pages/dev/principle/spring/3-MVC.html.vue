<template><div><h1 id="_3-spring-mvc" tabindex="-1"><a class="header-anchor" href="#_3-spring-mvc"><span>3. Spring MVC</span></a></h1>
<h2 id="spring-mvc-是如何处理请求的" tabindex="-1"><a class="header-anchor" href="#spring-mvc-是如何处理请求的"><span>Spring MVC 是如何处理请求的？</span></a></h2>
<p>HTTP 请求会首先到达 DispatcherServlet，DispatcherServlet 会通过 HandlerMapping 获取到指定的 Handler，
由于 DispatcherServlet 现在只有 HTTP 请求，因此使用 HandlerAdapter 适配器对请求进行相应处理，并调用 Handler。
经过 HandlerAdapter 的调用，DispatcherServlet 可以获取到 HTTP 响应，返回给前端。</p>
<h2 id="requestbody-和-responsebody-各有什么作用" tabindex="-1"><a class="header-anchor" href="#requestbody-和-responsebody-各有什么作用"><span><code v-pre>@RequestBody</code> 和 <code v-pre>@ResponseBody</code> 各有什么作用？</span></a></h2>
<p><code v-pre>@RequestBody</code> 可以将 HTTP 请求的请求体映射为 Java 对象。</p>
<p><code v-pre>@ResponseBody</code> 可以将 Controller 方法的返回值封装为响应体。</p>
<h2 id="pathvariable-注解有何作用" tabindex="-1"><a class="header-anchor" href="#pathvariable-注解有何作用"><span><code v-pre>@PathVariable</code> 注解有何作用？</span></a></h2>
<p>该注解可以提取 URL 路径中的变量值，将其注入到控制器方法的参数中。</p>
<h2 id="spring-mvc-如何进行全局异常处理" tabindex="-1"><a class="header-anchor" href="#spring-mvc-如何进行全局异常处理"><span>Spring MVC 如何进行全局异常处理？</span></a></h2>
<p>定义一个类作为全局异常处理类，添加 <code v-pre>@ControllerAdvice</code> 注解。
类中方法使用 <code v-pre>@ExceptionHandler</code> 修饰，定义出现指定异常时的处理逻辑。</p>
<h2 id="什么是-restful-风格的接口" tabindex="-1"><a class="header-anchor" href="#什么是-restful-风格的接口"><span>什么是 Restful 风格的接口？</span></a></h2>
<p>简单来讲就是使用 URL 定位资源，使用 HTTP 动作描述对资源的行为。</p>
</div></template>


