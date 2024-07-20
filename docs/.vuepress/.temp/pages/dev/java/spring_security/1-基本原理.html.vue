<template><div><h1 id="基本原理" tabindex="-1"><a class="header-anchor" href="#基本原理"><span>基本原理</span></a></h1>
<p>Spring Security 基本原理是在 HTTP 请求打到 Spring MVC 的 DispatcherServlet 之前建立一层防护。
<img src="/images/dev/java/spring_security/principle.png" alt="image.png">
Spring Security 有 Filter Chain、Authentication Manager、Authentication Provider 和 User Details Service 组件。
请求经过 Filter Chain，若被符合条件的 Filter 捕获，会生成一个 Authentication Token 并传递给 Authentication Manager 验证，这个验证管理器会获取所有的 Authentication Provider，认证提供者通过 User Details Service 实例获取认证信息，只要有一个验证提供者认证通过，则这个 Authentication Token 就是有效的，这是一个合法请求。若通过了所有 Filter Chain，生成的 Authentication Token 仍是非法的，那么认证失败。
<img src="/images/dev/java/spring_security/filterchain.png" alt="image.png"></p>
</div></template>


