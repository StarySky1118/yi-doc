import{_ as e,c as i,o as s,a}from"./app-DNVZcai8.js";const l={},d=a('<h1 id="redis" tabindex="-1"><a class="header-anchor" href="#redis"><span>Redis</span></a></h1><h2 id="mysql-和-redis-数据同步方式" tabindex="-1"><a class="header-anchor" href="#mysql-和-redis-数据同步方式"><span>MySQL 和 Redis 数据同步方式</span></a></h2><p>MySQL 和 Redis 数据同步可以使用旁路缓存策略。这个策略分为两部分：读策略和写策略。在读策略中，首先读取缓存，缓存不命中则读取数据库并写入缓存。在写策略中，首先更新数据库，再删除缓存。</p><p>之所以删除缓存而不是更新缓存，是因为缓存内容可能使用了复杂的查询操作，更新缓存比删除困难，仅在读策略中更新缓存。</p><p>如果先删缓存，再更新数据库，由于数据库更新操作比较耗时，在两个操作之间有其他线程读，就会导致缓存旧数据，导致数据不一致。如果先更新数据库再删缓存，就不会出现上述问题。</p><h2 id="缓存雪崩、缓存击穿、缓存穿透" tabindex="-1"><a class="header-anchor" href="#缓存雪崩、缓存击穿、缓存穿透"><span>缓存雪崩、缓存击穿、缓存穿透</span></a></h2><p>缓存雪崩是指在同一时间内大量 key 同时过期，大量请求打到数据库，导致数据库压力骤增。 解决方案是给过期时间都加上一个随机数，避免缓存在同一时间过期。</p><p>缓存击穿是指某些热点 key 突然失效，导致大量请求访问数据库，导致数据库压力骤增。 解决方案是不给 key 显式设置过期时间，而是根据业务手动操作缓存。</p><p>缓存穿透是指用户访问的数据既不在缓存中，也不在 MySQL 中，大量请求到达数据库，导致数据库压力骤增。缓存穿透解决方案：</p><ol><li>限制非法请求</li></ol><p>例如不合法请求参数直接返回错误</p><ol start="2"><li>缓存空值或默认值</li></ol><p>在线上业务发现缓存穿透现象时，可以针对查询数据，在缓存中设置空值。</p><ol start="3"><li>使用布隆过滤器快速判断数据不存在</li></ol><p>布隆过滤器使用到了一个位图数组和多个哈希函数，每当数据库存储一个数据，就将该数据输入多个哈希函数，对位图数组长度取模，指定位置 1。 查询布隆过滤器得知数据不存在，则数据库中一定不存在该数据，对这样的数据，可以直接返回空。</p><h2 id="redis-大-key-有什么问题" tabindex="-1"><a class="header-anchor" href="#redis-大-key-有什么问题"><span>Redis 大 key 有什么问题？</span></a></h2><p>Redis 大 key 是指存储大量数据的单个建。 对大 key 的操作比较耗时，可能会阻塞其他操作。 为了避免大 key 引发的问题，需要合理设计数据结构，将大 key 进行拆分，如果大 key 无法拆分，需要保证设置合适的过期时间，确保数据及时删除，避免长时间占用内存。</p>',17),t=[d];function r(n,p){return s(),i("div",null,t)}const h=e(l,[["render",r],["__file","4-Redis.html.vue"]]),o=JSON.parse('{"path":"/dev/principle/4-Redis.html","title":"Redis","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"MySQL 和 Redis 数据同步方式","slug":"mysql-和-redis-数据同步方式","link":"#mysql-和-redis-数据同步方式","children":[]},{"level":2,"title":"缓存雪崩、缓存击穿、缓存穿透","slug":"缓存雪崩、缓存击穿、缓存穿透","link":"#缓存雪崩、缓存击穿、缓存穿透","children":[]},{"level":2,"title":"Redis 大 key 有什么问题？","slug":"redis-大-key-有什么问题","link":"#redis-大-key-有什么问题","children":[]}],"git":{"updatedTime":1728376556000,"contributors":[{"name":"ZhangZiYi","email":"ecustzzy1@163.com","commits":5}]},"filePathRelative":"dev/principle/4-Redis.md"}');export{h as comp,o as data};
