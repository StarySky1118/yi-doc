# 一、Gin 示例程序

## 1、搭建 Gin 服务器步骤

1. 初始化一个 Go 模块

```go
go mod init 模块名称
```

`go mod init`命令用于初始化一个 Go 模块，其作用如下：
1. 创建模块文件：命令会在当前目录下创建一个新的`go.mod`文件，该文件用于记录项目依赖关系和模块信息。
2. 定义模块名称：运行该命令需要提供一个模块名称作为参数。这个名称通常是一个包含项目的源代码的版本库的路径（例如，GitHub 或 GitLab 上的路径），它将成为您的项目的唯一标识符。
3. 初始化依赖关系：命令会初始化一个依赖关系图，它会随着添加和删除依赖包而变化。这个依赖关系图会记录项目中使用的外部包，以及它们的版本信息。

```go
go mod init gin-demo
```

2. 在 GoLand 中打开目录

配置 Go Module 代理地址：`https://goproxy.io`
![image.png](/images/dev/go/gin/moudle_proxy.png)

3. 创建`main.go`文件

```go
package main

import "github.com/gin-gonic/gin"

func main() {
	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	r.Run() // listen and serve on 0.0.0.0:8080
}
```

4. 获取`Gin`包

运行项目，根据提示使用`go get`命令获取`gin`包。

`go get`命令用于从远程代码仓库中获取并安装 Go 包（也称为模块），具体如下：

1. 下载和安装包：命令可以从指定的远程代码仓库中下载 Go 包，并将其安装到 `GOPATH` 中。
2. 自动导入包：一旦包被下载并安装，还会自动更新项目代码以导入和使用这些包。这使得可以方便地将其他人编写的 Go 代码集成到自己的项目中。
3. 版本管理：命令可以使用版本标签（tag）或分支（branch）信息，以确保获取的是特定版本的包。这有助于管理项目的依赖关系和确保构建的稳定性。
4. 更新依赖：如果之前使用该命令安装了某个包，并且想要更新该包以获取新的功能或修复错误，您可以再次运行命令来更新包。

   安装成功后，代码将不会再提示找不到包。
   运行即可：
   ![image.png](/images/dev/go/gin/gin_run.png)

## 2、接口参数获取

### (1) GET 请求获取路径参数和请求参数

路径参数和请求参数直接从`context`中获取。

```go
package main

import "github.com/gin-gonic/gin"

func main() {
	// 使用默认中间件创建一个gin路由器
	// logger and recovery (crash-free) 中间件
	r := gin.Default()

	// get 获取路径参数和请求参数
	r.GET("/getMsg/:name", func(c *gin.Context) {
		// 获取路径参数
		name := c.Param("name")

		// 获取请求参数
		username := c.DefaultQuery("username", "admin")
		password := c.Query("password")

		c.JSON(200, gin.H{
			"name":     name,
			"username": username,
			"password": password,
		})
	})
	r.Run(":8078") // listen and serve on 0.0.0.0:8078
}

```

**`gin.H{}`**

`gin.H{}`是一个用于创建并初始化一个`map[string]interface{}`类型的字典。`gin.H{}`通常用于构建 HTTP 响应的 JSON 数据或设置请求的参数。其作用如下：

1. 创建映射：`gin.H{}`创建了一个空的映射，可以在其中添加键值对，用于表示不同的数据。
2. 构建 JSON 响应：在 Gin 框架中，可以使用`gin.H{}`构建 HTTP 响应的 JSON 数据。可以向其中添加键值对，表示要返回的 JSON 数据的字段和值。

```go
c.JSON(http.StatusOK, gin.H{
    "message": "Hello, World!",
    "status":  "success",
})

```

### (2) POST 请求获取请求体中的参数

请求体使用结构体接收。

```go
package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

// PostParam 将 post 请求体与结构体绑定
type PostParam struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func main() {
	// 使用默认中间件创建一个gin路由器
	// logger and recovery (crash-free) 中间件
	r := gin.Default()

	// POST 获取请求体参数
	r.POST("/testBind", func(c *gin.Context) {
		var postParam PostParam

		// 出现错误
		if err := c.ShouldBindJSON(&postParam); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		c.JSON(200, postParam)
	})
	r.Run(":8078") // listen and serve on 0.0.0.0:8078
}

```

### (3) 文件的接收与返回

#### 接收文件

使用`form-data`接收文件，使用`SaveUploadedFile()`保存文件。

```go
package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

// PostParam 将 post 请求体与结构体绑定
type PostParam struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

// 存储文件路径
const dist string = "./"

func main() {
	// 使用默认中间件创建一个gin路由器
	// logger and recovery (crash-free) 中间件
	r := gin.Default()

	// 接收文件
	r.POST("/uploadFile", func(c *gin.Context) {
		// 接收单文件
		file, _ := c.FormFile("file")
		// 保存到服务器
		c.SaveUploadedFile(file, dist+file.Filename)
		c.JSON(http.StatusOK, gin.H{
			"status": "上传成功",
		})
	})
	r.Run(":8078") // listen and serve on 0.0.0.0:8078
}
```

请求：
![image.png](/images/dev/go/gin/interface_test.png)

#### 传送文件到前端

```go
package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

// PostParam 将 post 请求体与结构体绑定
type PostParam struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

// 存储文件路径
const dist string = "./"

func main() {
	// 使用默认中间件创建一个gin路由器
	// logger and recovery (crash-free) 中间件
	r := gin.Default()

	// 下载文件
	r.GET("/downloadFile", func(c *gin.Context) {
		filepath := "./1.jpg"
		c.File(filepath)
	})
	r.Run(":8078") // listen and serve on 0.0.0.0:8078
}

```

## 3、路由分组与中间件

#### 路由分组

使用路由分组代码结构更清晰、可维护，并且同一个路由分组会共享中间件。

```go
package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

// PostParam 将 post 请求体与结构体绑定
type PostParam struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

// 存储文件路径
const dist string = "./"

func main() {
	// 使用默认中间件创建一个gin路由器
	// logger and recovery (crash-free) 中间件
	r := gin.Default()
	// 创建路由分组
	api := r.Group("/api")
	{
		// GET 获取路径参数和请求参数
		api.GET("/getMsg/:name", func(c *gin.Context) {
			// 获取路径参数
			name := c.Param("name")

			// 获取请求参数
			username := c.DefaultQuery("username", "admin")
			password := c.Query("password")

			c.JSON(200, gin.H{
				"name":     name,
				"username": username,
				"password": password,
			})
		})
	}
	r.Run(":8078") // listen and serve on 0.0.0.0:8078
}

```

#### 中间件

Gin 中的中间件指请求到达路由之前或之后执行的操作，其执行顺序符合洋葱模型：
![image.png](/images/dev/go/gin/union.png)

在 Gin 框架中，中间件（Middleware）是一种在请求到达路由处理函数之前或之后执行的函数或操作。中间件用于对请求进行预处理、增加额外的功能、进行身份验证、记录日志、修改请求或响应等操作。它们是一种非常有用的机制，用于增强和扩展 Web 应用程序的功能。
以下是一些中间件的常见应用场景和概念：

1. **身份验证和授权**：中间件可以用于验证用户的身份并授权访问特定的路由或资源。例如，可以创建一个中间件来检查用户是否已登录，并根据其角色授权对某些路由的访问权限。
2. **日志记录**：中间件可以用于记录请求和响应的信息，以便进行调试和监控。可以记录请求的方法、路径、响应状态码等信息，并将其存储在日志文件或数据库中。
3. **跨域资源共享 (CORS)**：中间件可以帮助处理跨域请求，添加必要的响应头，以允许或限制跨域请求。
4. **压缩响应**：中间件可以用于压缩响应内容，减小传输数据的大小，提高性能。
5. **请求数据解析**：中间件可以用于解析请求的数据，例如 JSON、表单数据或查询参数，并将其转换为可用于处理的数据结构。
6. **缓存控制**：中间件可以添加响应头来控制客户端和代理服务器的缓存行为。
7. **错误处理**：中间件可以用于捕获处理函数中的错误，并返回适当的错误响应。这有助于统一的错误处理逻辑。
8. **安全性**：中间件可以帮助保护应用程序免受常见的 Web 攻击，如 CSRF（跨站请求伪造）和 XSS（跨站脚本攻击）。

自定义中间件、使用中间件：
定义中间件函数需要返回`gin.HandlerFunc`类型。使用中间件可以链式方式调用。

```go
package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
)

// PostParam 将 post 请求体与结构体绑定
type PostParam struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

// 存储文件路径
const dist string = "./"

// 自定义中间件1
func myMiddleware1() gin.HandlerFunc {
	return func(c *gin.Context) {
		// before request
		c.Set("mid1", "嘎嘎")
		fmt.Println("进入第一个中间件...")

		c.Next()

		// after request
		fmt.Println("离开第一个中间件...")
	}
}

func myMiddleware2() gin.HandlerFunc {
	return func(c *gin.Context) {
		// before request
		fmt.Println("进入第二个中间件...")
		fmt.Println(c.Get("mid1"))

		c.Next()

		// after request
		fmt.Println("离开第二个中间件...")
	}
}

func main() {
	// 使用默认中间件创建一个gin路由器
	// logger and recovery (crash-free) 中间件
	r := gin.Default()
	// 创建路由分组
	api := r.Group("/api").Use(myMiddleware1()).Use(myMiddleware2())
	{
		// GET 获取路径参数和请求参数
		api.GET("/getMsg/:name", func(c *gin.Context) {
			// 获取路径参数
			name := c.Param("name")

			// 获取请求参数
			username := c.DefaultQuery("username", "admin")
			password := c.Query("password")

			c.JSON(200, gin.H{
				"name":     name,
				"username": username,
				"password": password,
			})
		})

		// POST 获取请求体参数
		api.POST("/testBind", func(c *gin.Context) {
			var postParam PostParam

			// 出现错误
			if err := c.ShouldBindJSON(&postParam); err != nil {
				c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
				return
			}

			c.JSON(200, postParam)
		})

		// 接收文件
		api.POST("/uploadFile", func(c *gin.Context) {
			// 接收单文件
			file, _ := c.FormFile("file")
			// 保存到服务器
			fullFileName := dist + file.Filename
			c.SaveUploadedFile(file, fullFileName)
			c.JSON(http.StatusOK, gin.H{
				"status": "上传成功",
			})
		})

		// 下载文件
		api.GET("/downloadFile", func(c *gin.Context) {
			filepath := "./1.jpg"
			c.File(filepath)
		})
	}
	r.Run(":8078") // listen and serve on 0.0.0.0:8078
}

```

## 4、GORM

#### 使用步骤

1. 安装 GORM

```go
go get -u gorm.io/gorm
```

2. 安装 MySQL 驱动

```go
go get -u gorm.io/driver/mysql
```

3. 示例代码

在 GORM 中，结构体与表一一对应，使用结构体标识一张表。

```go
package main

import (
	"fmt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func main() {
	dsn := "root:991118@tcp(127.0.0.1:3306)/dytest?charset=utf8mb4&parseTime=True&loc=Local"
	_, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err == nil {
		fmt.Println("数据库连接成功")
	}
}

```

```go
package main

import (
	"fmt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

// GoUser 数据库表对应的结构体
type GoUser struct {
	gorm.Model
	Name   string
	Age    int
	Gender bool
}

func main() {
	dsn := "root:991118@tcp(localhost:3306)/dytest?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("无法连接到数据库: " + err.Error())
	} else {
		fmt.Println("连接数据库成功")
	}
	// 切换使用的数据库表
	db.AutoMigrate(&GoUser{})
	// 增
	user := &GoUser{Name: "张三", Age: 24, Gender: true}
	db.Create(user)

	// 查
	var userGot GoUser
	db.First(&userGot, 1)
	fmt.Println(userGot)

	// 改
	db.Model(&userGot).Update("age", 25)

	// 删
	db.Delete(&userGot)
}

```
