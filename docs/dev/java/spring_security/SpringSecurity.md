#  基本原理

Spring Security 基本原理是在 HTTP 请求打到 Spring MVC 的 DispatcherServlet 之前建立一层防护。
![](https://cdn.nlark.com/yuque/0/2024/png/34476449/1711075197024-d32e78a4-fda5-492e-b0ef-55144d4d1a17.png#averageHue=%23f1f0f0&clientId=u47202ae3-b14a-4&from=paste&id=uecb513a6&originHeight=896&originWidth=1948&originalType=url&ratio=1.25&rotation=0&showTitle=false&status=done&style=stroke&taskId=u228c206e-fd13-45b0-831b-fcf8b7566ab&title=)
Spring Security 有 Filter Chain、Authentication Manager、Authentication Provider 和 User Details Service 组件。
请求经过 Filter Chain，若被符合条件的 Filter 捕获，会生成一个 Authentication Token 并传递给 Authentication Manager 验证，这个验证管理器会获取所有的 Authentication Provider，认证提供者通过 User Details Service 实例获取认证信息，只要有一个验证提供者认证通过，则这个 Authentication Token 就是有效的，这是一个合法请求。若通过了所有 Filter Chain，生成的 Authentication Token 仍是非法的，那么认证失败。
![](https://cdn.nlark.com/yuque/0/2024/png/34476449/1711075496601-31152063-c49c-49d3-bffa-1e17625b2eef.png#averageHue=%23f5f4f4&clientId=u47202ae3-b14a-4&from=paste&id=ue75a30ec&originHeight=764&originWidth=2198&originalType=url&ratio=1.25&rotation=0&showTitle=false&status=done&style=stroke&taskId=u8e1080ba-9a13-4e5b-b948-6fbbcc01f7e&title=)

# 认证接口

对于认证接口，例如登录、注册等，无需经过 Spring Security，直接打到 DispatcherServlet。在校验通过后返回 token。

## 登录接口

```java
/**
 * @author Zhang Ziyi
 */
@Api(tags = "认证管理")
@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthenticationManager authenticationManager;

    @PostMapping("/login")
    @ApiOperation(value = "登录")
    public CommonResponse<String> add(@RequestBody @Valid LoginDTO loginDTO) {
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(loginDTO.getUsername(), loginDTO.getPassword());
        authenticationManager.authenticate(authenticationToken);


        String token = JWT.create()
//                .setExpiresAt(new Date(System.currentTimeMillis() + (1000 * 30)))
                .setPayload("username", loginDTO.getUsername())
                .setKey(SystemConstant.JWT_KEY.getBytes(StandardCharsets.UTF_8))
                .sign();

        return CommonResponseUtil.success(token);
    }
}
```

> 代码说明：
> 虽然登录接口不需要经过 Spring Security，但仍然使用了 Filter Chain 之后的组件。
> 使用用户名和密码生成了 `UsernamePasswordAuthenticationToken`实例，使用 `AuthenticationManager`校验。代码中使用默认的`authenticationManager`Bean。

## 自定义 Provider

当登录接口中调用`authenticationManager.authenticate(authenticationToken)`，`authenticationManager`会获取所有的 `Authentication Provider`，下面就是我们实现的一个 Provider。
这个 Provider 使用 `userDetailsService`进行校验，校验通过后会返回一个新的 `UsernamePasswordAuthenticationToken`，这个 Token 接收三个参数。

```java
package cn.edu.ecust.ecs.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;


public class JwtAuthenticationProvider implements AuthenticationProvider {

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UserDetailsService userDetailsService;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String username = String.valueOf(authentication.getPrincipal());
        String password = String.valueOf(authentication.getCredentials());

        UserDetails userDetails = userDetailsService.loadUserByUsername(username);
        if(passwordEncoder.matches(password,userDetails.getPassword())){
            return new UsernamePasswordAuthenticationToken(username, password, userDetails.getAuthorities());
        }

        throw new BadCredentialsException("Error!!");
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return UsernamePasswordAuthenticationToken.class.equals(authentication);
    }
}

```

## 自定义 `UserDetails`和`userDetailsService`

`UserDetailsImpl`既要包含认证信息（用户名、密码）又要包含授权信息（角色）。

```java
package cn.edu.ecust.ecs.security;

import cn.edu.ecust.ecs.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.stream.Collectors;

/**
 * spring security 需要
 */

@RequiredArgsConstructor
public class UserDetailsImpl implements UserDetails {

    private final User user;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
//        return user.getRoles()
//                .stream()
//                .map(role -> new SimpleGrantedAuthority(role.getRoleType().getRoleName()))
//                .collect(Collectors.toList());
        return null;
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getUsername();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}

```

```java
package cn.edu.ecust.ecs.security;

import cn.edu.ecust.ecs.domain.User;
import cn.edu.ecust.ecs.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {
    private final UserService userService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userService.getUserByName(username);
        return new UserDetailsImpl(user);
    }
}
```

# 其他资源接口

访问其他资源，需要经过 Spring Security 校验，首先经过 Filter Chain，我们自己定义了一个 Filter，当 token 验证通过，添加一个有效的 `UsernamePasswordAuthenticationToken`到 `SecurityContextHolder`中。

```java
package cn.edu.ecust.ecs.security;

import cn.edu.ecust.ecs.constant.SystemConstant;
import cn.edu.ecust.ecs.util.JWTUtils;
import cn.hutool.jwt.JWTUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Objects;

/**
 * 添加到 SpringSecurity UsernamePasswordAuthenticationFilter 之前的过滤器，若请求头添加了 Token，
 * @author Zhang Ziyi
 */
@Slf4j
@RequiredArgsConstructor
public class JwtAuthenticationTokenFilter extends OncePerRequestFilter {
    private final static String AUTH_HEADER = "Authorization";
    private final static String AUTH_HEADER_TYPE = "Bearer";

    private final UserDetailsService userDetailsService;

    private final JWTUtils jwtUtils;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        // 从 Header 中获取 token:  Authorization: Bearer <token>
        String authHeader = request.getHeader(AUTH_HEADER);
        if (Objects.isNull(authHeader) || !authHeader.startsWith(AUTH_HEADER_TYPE)){
            filterChain.doFilter(request,response);
            return;
        }

        // 验证 token
        String authToken = authHeader.split(" ")[1];
        if (!jwtUtils.validate(authToken)) {
            filterChain.doFilter(request,response);
            return;
        }


        String username = jwtUtils.getUsername(authToken);
        UserDetails userDetails = userDetailsService.loadUserByUsername(username);
        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetails.getUsername(), userDetails.getPassword(), userDetails.getAuthorities());
        authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        filterChain.doFilter(request, response);
    }
}

```
