# 六、Map

map 声明语法如下：

```go
var map1 map[keytype]valuetype
var map1 map[string]int

map1 := make(map[keyType]valueType, capacity)
```

key 可以是任意可以用`==`或者`!=`操作符比较的类型，比如`string`、`int`、`float`。如果要用结构体作为 key 可以提供`Key()`和`Hash()`方法，这样可以通过结构体的域计算出唯一的数字或者字符串的 key。

```go
// map 赋值
map1[key1] = val1
// map 取值，默认有零值
v := map1[key1]
// 获取键值对数量
len(map1)
```

## 1、判断键是否存在与删除元素

`map`获取值有两个返回值`value`和`isPresent`，`isPresent`是一个`bool`值，标识键是否存在。

```go
package main

import "fmt"

// 判断键是否存在
func main() {
	map1 := make(map[string]string)
	key := "波尔布特"
	map1[key] = "极端"

	if isKeyPresent(map1, key) {
		fmt.Println("键存在")
		delete(map1, key)
	}

	if (!isKeyPresent(map1, key)) {
		fmt.Println("键已删除")
	}
}

// 判断键是否存在
func isKeyPresent(datamap map[string]string, key string) bool {
	_, isPresent := datamap[key]
	return isPresent
}
```

## 2、for-range

`map`类型的`for-range`，第一个参数为`key`，第二个参数为`value`，没有`index`，因为是无序的。
使用案例：

```go
package main

import "fmt"

func main() {
	datamap := make(map[string]string)

	datamap["波尔布特"] = "极端"
	datamap["张伟"] = "大众"
	datamap["詹姆斯"] = "强大"

	for key, value := range datamap {
		fmt.Printf("键为:%s,值为:%s", key, value)
	}

}
```
