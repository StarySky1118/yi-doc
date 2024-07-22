# 十、TypeHandler类型转换器

相关博客：
[https://blog.csdn.net/winkadd/article/details/128653709](https://blog.csdn.net/winkadd/article/details/128653709)

## 1、使用案例

使用场景：
数据库中`time_interval`字段类型为`text`，存储数组：
```java
[{"type":"sharp","startTime":"00:00:00","endTime":"6:00:00"},{"type":"peak","startTime":"06:00:00","endTime":"12:00:00"},{"type":"shoulder","startTime":"12:00:00","endTime":"18:00:00"},{"type":"off_peak","startTime":"18:00:00","endTime":"24:00:00"}]
```
Java 实体类相应的属性为`timeInterval`，类型为`List<PriceIntervalEntity>`。
需要解决类型转换问题。

**1. 添加自定义`typeHandler`**

```java
public class ElectricityPriceTypeHandler extends BaseTypeHandler<List<PriceIntervalEntity>> {
    /**
     * javaType -> jdbcType
     * 解决 List<PriceIntervalEntity> -> text 数据库存储问题
     * @param preparedStatement
     * @param i
     * @param priceIntervalEntities
     * @param jdbcType
     * @throws SQLException
     */
    @Override
    public void setNonNullParameter(PreparedStatement preparedStatement, int i, List<PriceIntervalEntity> priceIntervalEntities, JdbcType jdbcType) throws SQLException {
        String listStr = JSONUtil.toJsonStr(priceIntervalEntities);
        preparedStatement.setString(i, listStr);
    }

    /**
     * jdbcType -> javaType
     * 解决 text -> List<PriceIntervalEntity> 数据库读取问题
     * @param resultSet
     * @param s
     * @return
     * @throws SQLException
     */
    @Override
    public List<PriceIntervalEntity> getNullableResult(ResultSet resultSet, String s) throws SQLException {
        // 结果集中的 json 字符串
        String jsonStr = resultSet.getString(s);
        return JSONUtil.parseArray(jsonStr).toList(PriceIntervalEntity.class);
    }

    @Override
    public List<PriceIntervalEntity> getNullableResult(ResultSet resultSet, int i) throws SQLException {
        String jsonStr = resultSet.getString(i);
        return JSONUtil.parseArray(jsonStr).toList(PriceIntervalEntity.class);
    }

    @Override
    public List<PriceIntervalEntity> getNullableResult(CallableStatement callableStatement, int i) throws SQLException {
        String jsonStr = callableStatement.getString(i);
        return JSONUtil.parseArray(jsonStr).toList(PriceIntervalEntity.class);
    }
}
```

需要实现的四个方法如下：
1. `setNonNullParameter(PreparedStatement preparedStatement, int i, List<PriceIntervalEntity> priceIntervalEntities, JdbcType jdbcType) throws SQLException`：

参数说明：

- `preparedStatement`：预编译的 SQL 语句对象。
- `i`：参数在预编译 SQL 语句中的位置索引。
- `priceIntervalEntities`：需要设置的非空参数值列表，其中每个元素都是一个 PriceIntervalEntity 对象。
- `jdbcType`：参数在数据库中的类型。

作用：将查询结果中的非空参数值设置到预编译的 SQL 语句中对应的位置，即**数据库存储**。

2. `getNullableResult(ResultSet resultSet, String s) throws SQLException`：

参数说明：

- `resultSet`：数据库查询结果集对象。
- `s`：结果集中的列名。

作用：从结果集中获取指定列的值，并将其转换为对应的实体对象列表，即**数据库读取**。

3. `getNullableResult(ResultSet resultSet, int i) throws SQLException`：

参数说明：

- `resultSet`：数据库查询结果集对象。
- `i`：结果集中的列索引。

作用：从结果集中获取指定列的值，并将其转换为对应的实体对象列表，也是**数据库读取**。

4. `getNullableResult(CallableStatement callableStatement, int i) throws SQLException`：

参数说明：

- `callableStatement`：可调用的数据库预编译语句对象。
- `i`：参数在可调用的数据库预编译语句中的位置索引。

作用：将查询结果中的参数值设置到可调用的数据库预编译语句中对应的位置，也是**数据库读取**。

**2. 实体类添加`@TableName(value ="electricity_price", autoResultMap = true)`注解**
```java
/**
 *
 * @TableName electricity_price
 */
@TableName(value ="electricity_price", autoResultMap = true)
@Data
@Schema(title = "ElectricityPrice对象", description = "")
public class ElectricityPriceEntity implements Serializable {
    /**
     * 自增主键
     */
    @TableId(type = IdType.AUTO)
    private Long id;

    /**
     * 区县编码
     */
    private String regionId;

    /**
     * 平、峰、谷、尖峰时段
     */
    @TableField(typeHandler = ElectricityPriceTypeHandler.class)
    private List<PriceIntervalEntity> timeInterval;

    /**
     * 尖峰电价和时间段
     */
    private BigDecimal sharp;

    /**
     * 峰电价和时间段
     */
    private BigDecimal peak;

    /**
     * 平电价和时间段
     */
    private BigDecimal shoulder;

    /**
     * 谷电价和时间段
     */
    private BigDecimal offPeak;

    /**
     * 生效月份
     */
    private LocalDate effectiveDate;

    /**
     * 创建人id
     */
    private Long createBy;

    /**
     * 更新人id
     */
    private Long updateBy;

    /**
     * 创建时间
     */
    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createTime;

    /**
     * 更新时间
     */
    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updateTime;

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;
}
```
