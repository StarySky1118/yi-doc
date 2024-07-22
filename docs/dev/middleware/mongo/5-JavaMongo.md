# 五、Java 操作 MongoDB

## 1、使用`MongoRepository`

### (1) 使用步骤

1. 依赖引入

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-mongodb</artifactId>
</dependency>
```

2. 连接配置

```yaml
spring:
  data:
    mongodb:
      uri: mongodb://localhost:27017/dytest
```

3. 创建持久层接口

![image.png](/images/dev/middleware/mongo/5-1.png)

`T`为实体类，`ID`为主键类型。

```java
@Repository
public interface UserRepository extends MongoRepository<UserMongo, String> {
}
```

其中包含一些基本查询和操作方法：
![image.png](/images/dev/middleware/mongo/5-2.png)

4. 测试代码

```java
@SpringBootTest
public class UserRepositoryTest {
    @Resource
    private UserRepository userRepository;

    @Test
    public void testRepo() {
        userRepository.findAll().stream().forEach(System.out::println);
    }
}
```

### (2) 示例代码

```java
    @Override
    public boolean addUserMongo(UserMongo user) {
        userRepository.save(user);
        return true;
    }

    @Override
    public boolean deleteUserByIdMongo(String id) {
        userRepository.deleteById(id);
        return true;
    }

    @Override
    public boolean updateUserMongo(UserMongo user) {
        userRepository.save(user);
        return true;
    }

    @Override
    public List<UserMongo> listMongo() {
        return userRepository.findAll();
    }
```

## 2、使用`MongoTemplate`

```java
    /**
     * 插入文档
     */
    @Test
    public void testMongoInsert() {
        UserMongo userMongo = new UserMongo();
        userMongo.setName("乔丹·克拉克森");
        userMongo.setAge(25);
        userMongo.setDescription("亚洲第一后卫");

        mongoTemplate.insert(userMongo);
    }

    /**
     * 批量插入
     */
    @Test
    public void testMongoInsertAll() {
        List<UserMongo> list = new ArrayList<>();
        for (int i = 1; i <= 5; i++) {
            UserMongo userMongo = new UserMongo();
            userMongo.setName("范志毅" + i);
            userMongo.setAge(20 + i);
            userMongo.setDescription("水晶宫队长" + i);
            list.add(userMongo);
        }
        mongoTemplate.insertAll(list);
    }

    /**
     * 文档基本查询
     */
    @Test
    public void testMongoBasicQuery() {
        // 查询条件
        Query query = new Query();

        List<UserMongo> userMongos = mongoTemplate.find(query, UserMongo.class);
        userMongos.stream().forEach(System.out::println);
    }

    /**
     * 更新单个文档
     */
    @Test
    public void testMongoUpdateOne() {
        // 查询条件
        Query query = new Query();
        query.addCriteria(Criteria.where("name").is("范志毅1"));

        // 更新条件
        Update update = new Update();
        update.set("name", "范大将军");

        UpdateResult updateResult = mongoTemplate.updateFirst(query, update, UserMongo.class);
        System.out.println(updateResult);
    }

    /**
     * 更新多个文档
     */
    @Test
    public void testMongoUpdateMulti() {
        // 查询条件
        Query query = new Query();
        query.addCriteria(Criteria.where("name").regex(".*范志毅.*"));

        // 更新字段
        Update update = new Update();
        update.set("name", "范大将军");

        // 执行更新
        mongoTemplate.updateMulti(query, update, UserMongo.class);
    }

    /**
     * 字段值增长的修改
     */
    @Test
    public void testIncrease() {
        // 查询条件
        Query query = new Query();
        query.addCriteria(Criteria.where("name").is("易建联1"));

        // 更新字段
        Update update = new Update();
        update.inc("age", 1);

        // 执行更新
        System.out.println(mongoTemplate.updateMulti(query, update, UserMongo.class));
    }

    /**
     * 删除文档
     */
    @Test
    public void testRemoveDocument() {
        // 查询条件
        Query query = new Query();
        query.addCriteria(Criteria.where("name").is("范大将军"));

        // 执行删除
        System.out.println(mongoTemplate.remove(query, UserMongo.class));
    }

    /**
     * 统计文档数量
     */
    @Test
    public void testCount() {
        // 查询条件
        Query query = new Query();
        query.addCriteria(Criteria.where("name").is("乔丹·克拉克森"));

        // 统计数量
        System.out.println(mongoTemplate.count(query, UserMongo.class));
    }

    /**
     * 分页查询
     */
    @Test
    public void testPage() {
        // 查询条件
        Pageable pageable = PageRequest.of(0, 2);
        Query query = new Query().with(pageable);

        // 运行分页查询
        List<UserMongo> userMongos = mongoTemplate.find(query, UserMongo.class);
        userMongos.stream().forEach(System.out::println);
    }

    /**
     * 排序
     */
    @Test
    public void testSort() {
        // 查询条件
        Query query = new Query();
        // 排序条件
        Sort sort = Sort.by(Sort.Order.asc("age"), Sort.Order.desc("description"));
        query.with(sort);

        // 执行排序查询
        List<UserMongo> userMongos = mongoTemplate.find(query, UserMongo.class);
        userMongos.stream().forEach(System.out::println);
    }

    /**
     * 比较查询
     */
    @Test
    public void testQueryCompare() {
        // 查询条件
        Query query = new Query();
        query.addCriteria(Criteria.where("age").gte(33));

        // 执行查询
        List<UserMongo> userMongos = mongoTemplate.find(query, UserMongo.class);
        userMongos.stream().forEach(System.out::println);
    }

    /**
     * 包含查询
     */
    @Test
    public void testQueryContain() {
        Query query = new Query();
        // 列表
        List<String> strList = Arrays.asList("乔丹·克拉克森", "吉米·巴特勒");
//        query.addCriteria(Criteria.where("name").in(strList));
        query.addCriteria(Criteria.where("name").nin(strList));

        // 执行查询
        List<UserMongo> userMongos = mongoTemplate.find(query, UserMongo.class);
        userMongos.stream().forEach(System.out::println);
    }

    /**
     * 多条件查询
     */
    @Test
    public void testMultiCondition() {
        // 查询条件
        Query query = new Query();
        Criteria criteria = new Criteria();
        criteria.and("name").regex(".*乔丹.*");
        criteria.and("age").nin(Arrays.asList(12, 13, 25));
        query.addCriteria(criteria);

        // 执行查询
        List<UserMongo> userMongos = mongoTemplate.find(query, UserMongo.class);
        userMongos.stream().forEach(System.out::println);
    }
```
