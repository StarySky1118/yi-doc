# 3. Spring MVC
## Spring MVC 是如何处理请求的？
HTTP 请求会首先到达 DispatcherServlet，DispatcherServlet 会通过 HandlerMapping 获取到指定的 Handler，
由于 DispatcherServlet 现在只有 HTTP 请求，因此使用 HandlerAdapter 适配器对请求进行相应处理，并调用 Handler。
经过 HandlerAdapter 的调用，DispatcherServlet 可以获取到 HTTP 响应，返回给前端。

## `@RequestBody` 和 `@ResponseBody` 各有什么作用？
`@RequestBody` 可以将 HTTP 请求的请求体映射为 Java 对象。

`@ResponseBody` 可以将 Controller 方法的返回值封装为响应体。

## `@PathVariable` 注解有何作用？
该注解可以提取 URL 路径中的变量值，将其注入到控制器方法的参数中。

## Spring MVC 如何进行全局异常处理？
定义一个类作为全局异常处理类，添加 `@ControllerAdvice` 注解。
类中方法使用 `@ExceptionHandler` 修饰，定义出现指定异常时的处理逻辑。

## 什么是 Restful 风格的接口？
简单来讲就是使用 URL 定位资源，使用 HTTP 动作描述对资源的行为。
