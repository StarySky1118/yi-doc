<template><div><h1 id="三、基本命令" tabindex="-1"><a class="header-anchor" href="#三、基本命令"><span>三、基本命令</span></a></h1>
<h2 id="_1、数据库操作" tabindex="-1"><a class="header-anchor" href="#_1、数据库操作"><span>1、数据库操作</span></a></h2>
<h3 id="_1-选择与创建数据库" tabindex="-1"><a class="header-anchor" href="#_1-选择与创建数据库"><span>(1) 选择与创建数据库</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">use 数据库名</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>数据库不存在时会自动创建到内存，当数据库有了集合，则被持久化到磁盘。集合也是一样，当集合有了文档，才会持久化。</p>
</blockquote>
<h3 id="_2-查看所有的数据库" tabindex="-1"><a class="header-anchor" href="#_2-查看所有的数据库"><span>(2) 查看所有的数据库</span></a></h3>
<p>查看所有有权限查看的、持久化的数据库</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">show dbs</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3-查看当前正在使用的数据库" tabindex="-1"><a class="header-anchor" href="#_3-查看当前正在使用的数据库"><span>(3) 查看当前正在使用的数据库</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">db</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>MongoDB 中默认的数据库为 test，如果你没有选择数据库，集合将存放在 test 数据库中。</p>
</blockquote>
<p><strong>补充信息</strong></p>
<ol>
<li><strong>数据库命名</strong></li>
</ol>
<p>数据库名可以是满足以下条件的任意 UTF-8 字符串：</p>
<ul>
<li>不能是空字符串（&quot;&quot;)；</li>
<li>不得含有' '（空格)、.、$、/、\和\0 (空字符)；</li>
<li>应全部小写；</li>
<li>最多64字节。</li>
</ul>
<ol start="2">
<li><strong>保留的数据库名</strong></li>
</ol>
<p>有一些数据库名是保留的，可以直接访问这些有特殊作用的数据库。
<code v-pre>admin</code>：从权限的角度来看，这是&quot;root&quot;数据库。要是将一个用户添加到这个数据库，这个用户自动继承所有数据库的权限。一些特定的服务器端命令也只能从这个数据库运行，比如列出所有的数据库或者关闭服务器。
<code v-pre>local</code>：这个数据永远不会被复制，可以用来存储限于本地单台服务器的任意集合。
<code v-pre>config</code>：当 Mongo 用于分片设置时，config 数据库在内部使用，用于保存分片的相关信息。</p>
<h3 id="_4-删除数据库" tabindex="-1"><a class="header-anchor" href="#_4-删除数据库"><span>(4) 删除数据库</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">db.dropDatabase<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2、集合操作" tabindex="-1"><a class="header-anchor" href="#_2、集合操作"><span>2、集合操作</span></a></h2>
<h3 id="_1-显式创建集合" tabindex="-1"><a class="header-anchor" href="#_1-显式创建集合"><span>(1) 显式创建集合</span></a></h3>
<p>当向一个集合中插入一个文档的时候，如果集合不存在，则会自动创建集合，这种集合的创建方式为隐式创建，直接使用隐式创建即可。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">db.createCollection<span class="token punctuation">(</span>集合名称<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">例如：</span>
<span class="line">db.createCollection<span class="token punctuation">(</span><span class="token string">"my"</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>集合命名规范</strong></p>
<ol>
<li>集合名不能是空字符串&quot;&quot;；</li>
<li>集合名不能含有<code v-pre>\0</code>字符（空字符)，这个字符表示集合名的结尾：</li>
<li>集合名不能以<code v-pre>system.</code>开头，这是为系统集合保留的前缀。</li>
<li>用户创建的集合名字不能含有保留字符。有些驱动程序的确支持在集合名里面包含，这是因为某些系统生成的集合中包含该字符。除非你要访问这种系统创建的集合，否则千万不要在名字里出现<code v-pre>$</code>。</li>
</ol>
<h3 id="_2-查看所有集合" tabindex="-1"><a class="header-anchor" href="#_2-查看所有集合"><span>(2) 查看所有集合</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">show collections</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3-删除集合" tabindex="-1"><a class="header-anchor" href="#_3-删除集合"><span>(3) 删除集合</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">db.集合名.drop<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">例如：</span>
<span class="line">db.my.drop<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、文档操作" tabindex="-1"><a class="header-anchor" href="#_3、文档操作"><span>3、文档操作</span></a></h2>
<h3 id="_1-文档插入" tabindex="-1"><a class="header-anchor" href="#_1-文档插入"><span>(1) 文档插入</span></a></h3>
<h4 id="单个文档" tabindex="-1"><a class="header-anchor" href="#单个文档"><span>单个文档</span></a></h4>
<p>语法格式：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">db.集合名.insert<span class="token punctuation">(</span><span class="token punctuation">{</span>BSON<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>使用案例：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"> db.user.insert<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"易建联"</span>, <span class="token string">"age"</span><span class="token builtin class-name">:</span> <span class="token number">24</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"> db.comment.insert<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"articleid"</span><span class="token builtin class-name">:</span><span class="token string">"100000"</span>,<span class="token string">"content"</span><span class="token builtin class-name">:</span><span class="token string">"今天天气真好，阳光明媚"</span>,<span class="token string">"userid"</span><span class="token builtin class-name">:</span><span class="token string">"1001"</span>,<span class="token string">"nickname"</span><span class="token builtin class-name">:</span><span class="token string">"Rose"</span>,<span class="token string">"createdatetime"</span>:new Date<span class="token punctuation">(</span><span class="token punctuation">)</span>,<span class="token string">"likenum"</span>:NumberInt<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>,<span class="token string">"state"</span>:null<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>说明</strong></p>
<ol>
<li>集合如果不存在，会隐式创建</li>
<li>mongo 中的数字，默认情况下是<code v-pre>double</code>类型，如果要存整型，必须使用函数<code v-pre>NumberInt(整型数字)</code>，否则取出来就有问题了</li>
<li>插入当前日期使用<code v-pre>new Date()</code></li>
<li>插入的数据没有指定<code v-pre>_id</code>，会自动生成主键值</li>
<li>如果某字段没值，可以赋值为<code v-pre>null</code>，或不写该字段</li>
</ol>
<p><strong>注意</strong></p>
<ol>
<li>文档中的键/值对是有序的；</li>
<li>文档中的值不仅可以是在双引号里面的字符串，还可以是其他几种数据类型（甚至可以是整个嵌入的文档)；</li>
<li>MongoDB 区分类型和大小写；</li>
<li>MongoDB 的文档不能有重复的键；</li>
<li>文档的键是字符串。除了少数例外情况，键可以使用任意UTF-8字符。</li>
</ol>
<p><strong>文档键命名规范</strong>：</p>
<ol>
<li>键不能含有<code v-pre>\0</code>(空字符)，这个字符用来表示键的结尾；</li>
<li><code v-pre>.</code>和<code v-pre>$</code>有特别的意义，只有在特定环境下才能使用；</li>
<li>以下划线<code v-pre>_</code>开头的键是保留的(不是严格要求的)。</li>
</ol>
<h4 id="批量插入" tabindex="-1"><a class="header-anchor" href="#批量插入"><span>批量插入</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">db.集合名.insertMany<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>说明</strong></p>
<ol>
<li>插入时指定了<code v-pre>_id</code>，则主键就是该值。</li>
<li>如果某条数据插入失败，将会终止插入，但已经插入成功的数据不会回滚掉。因为批量插入由于数据较多容易出现失败，因此，可以使用<code v-pre>try catch</code>进行异常捕捉处理，测试的时候可以不处理。如：</li>
</ol>
<p><img src="/images/dev/middleware/mongo/3-batchinsert.png" alt="image.png"></p>
<h3 id="_2-文档基本查询" tabindex="-1"><a class="header-anchor" href="#_2-文档基本查询"><span>(2) 文档基本查询</span></a></h3>
<p>语法：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">db.集合名.find<span class="token punctuation">(</span><span class="token operator">&lt;</span>query<span class="token operator">></span>, <span class="token operator">&lt;</span>Projection<span class="token operator">></span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="/images/dev/middleware/mongo/3-document_query.png" alt="image.png">
使用案例：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">db.user.find<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"易建联"</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">db.user.findOne<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"易建联"</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">db.user.find<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"姚明"</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span><span class="token string">"age"</span><span class="token builtin class-name">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-文档更新" tabindex="-1"><a class="header-anchor" href="#_3-文档更新"><span>(3) 文档更新</span></a></h3>
<p>基本语法：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">db.集合名.update<span class="token punctuation">(</span><span class="token operator">&lt;</span>query<span class="token operator">></span>, <span class="token operator">&lt;</span>updateValue<span class="token operator">></span>, <span class="token operator">&lt;</span>options<span class="token operator">></span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="/images/dev/middleware/mongo/3-update.png" alt="image.png">
<img src="/images/dev/middleware/mongo/3-update1.png" alt="image.png"></p>
<h4 id="覆盖修改" tabindex="-1"><a class="header-anchor" href="#覆盖修改"><span>覆盖修改</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">db.user.update<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"姚明"</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span><span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"大姚"</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>使用<code v-pre>&lt;update&gt;</code>Bson 直接替代原来的 Bson。</p>
<h4 id="局部修改" tabindex="-1"><a class="header-anchor" href="#局部修改"><span>局部修改</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">db.user.update<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"易建联"</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span><span class="token variable">$set</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"太空易"</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>只会修改部分字段。</p>
<h4 id="批量修改" tabindex="-1"><a class="header-anchor" href="#批量修改"><span>批量修改</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">//默认只修改第一条数据</span>
<span class="line">db.comment.update<span class="token punctuation">(</span><span class="token punctuation">{</span>userid:<span class="token string">"1003"</span><span class="token punctuation">}</span>,<span class="token punctuation">{</span><span class="token variable">$set</span>:<span class="token punctuation">{</span>nickname:<span class="token string">"凯撒2"</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">//修改所有符合条件的数据</span>
<span class="line">db.comment.update<span class="token punctuation">(</span><span class="token punctuation">{</span>userid:<span class="token string">"1003"</span><span class="token punctuation">}</span>,<span class="token punctuation">{</span><span class="token variable">$set</span>:<span class="token punctuation">{</span>nickname:<span class="token string">"凯撒大帝"</span><span class="token punctuation">}</span><span class="token punctuation">}</span>,<span class="token punctuation">{</span>multi:true<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="字段值增长修改" tabindex="-1"><a class="header-anchor" href="#字段值增长修改"><span>字段值增长修改</span></a></h4>
<p>如果我们想实现对某字段值在原有值的基础上进行增加或减少，可以使用<code v-pre>$inc</code>运算符来实现。
使用案例：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">db.user.update<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"太空易"</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span><span class="token variable">$inc</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">"age"</span><span class="token builtin class-name">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_4-删除文档" tabindex="-1"><a class="header-anchor" href="#_4-删除文档"><span>(4) 删除文档</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">db.集合名.remove<span class="token punctuation">(</span><span class="token operator">&lt;</span>query<span class="token operator">></span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_5-文档的分页查询" tabindex="-1"><a class="header-anchor" href="#_5-文档的分页查询"><span>(5) 文档的分页查询</span></a></h3>
<h4 id="统计条数" tabindex="-1"><a class="header-anchor" href="#统计条数"><span>统计条数</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">db.集合名.count<span class="token punctuation">(</span><span class="token operator">&lt;</span>query<span class="token operator">></span>, <span class="token operator">&lt;</span>options<span class="token operator">></span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>使用案例：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">db.comment.count<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">db.comment.count<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"userid"</span><span class="token builtin class-name">:</span> <span class="token string">"1003"</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分页列表" tabindex="-1"><a class="header-anchor" href="#分页列表"><span>分页列表</span></a></h4>
<p>使用<code v-pre>limit()</code>方法来读取指定数量的数据，使用<code v-pre>skip()</code>方法来跳过指定数量的数据。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">db.集合名.find<span class="token punctuation">(</span><span class="token punctuation">)</span>.limit<span class="token punctuation">(</span>number<span class="token punctuation">)</span>.skip<span class="token punctuation">(</span>number<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="/images/dev/middleware/mongo/3-page.png" alt="image.png"></p>
<h4 id="排序" tabindex="-1"><a class="header-anchor" href="#排序"><span>排序</span></a></h4>
<p><code v-pre>sort()</code>方法对数据进行排序，<code v-pre>sort()</code>方法可以通过参数指定排序的字段，并使用<code v-pre>1</code>和<code v-pre>-1</code>来指定排序的方式，其中<code v-pre>1</code>为<strong>升序</strong>排列，而<code v-pre>-1</code>是用于<strong>降序</strong>排列。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">db.集合名.sort<span class="token punctuation">(</span><span class="token punctuation">{</span>KEY:0/1<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>使用案例：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">db.comment.find<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span><span class="token string">"userid"</span><span class="token builtin class-name">:</span> <span class="token number">1</span>, <span class="token string">"likenum"</span><span class="token builtin class-name">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span>.sort<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"userid"</span><span class="token builtin class-name">:</span> <span class="token number">1</span>, <span class="token string">"likenum"</span><span class="token builtin class-name">:</span> -1<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>注意</strong></p>
<p><code v-pre>skip()</code>、<code v-pre>limilt()</code>和<code v-pre>sort()</code>三个放在一起执行的时候，执行的顺序是先<code v-pre>sort()</code>，然后是<code v-pre>skip()</code>，最后是显示的<code v-pre>limit()</code>，和命令编写顺序无关。</p>
<h3 id="_6-复杂查询" tabindex="-1"><a class="header-anchor" href="#_6-复杂查询"><span>(6) 复杂查询</span></a></h3>
<h4 id="正则的复杂条件查询" tabindex="-1"><a class="header-anchor" href="#正则的复杂条件查询"><span>正则的复杂条件查询</span></a></h4>
<p>MongoDB 的模糊查询是通过正则表达式的方式实现的，语法：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">db.集合名.find<span class="token punctuation">(</span><span class="token punctuation">{</span>字段: /正则表达式/<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>使用案例：
找到所有以&quot;专家&quot;开头的评论。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">db.comment.find<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"content"</span><span class="token builtin class-name">:</span> /^专家/<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="比较查询" tabindex="-1"><a class="header-anchor" href="#比较查询"><span>比较查询</span></a></h4>
<p>语法格式：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">db.集合名称.find<span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string">"field"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token variable">$gt</span><span class="token builtin class-name">:</span> value <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span> // 大于: field <span class="token operator">></span> value</span>
<span class="line">db.集合名称.find<span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string">"field"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token variable">$lt</span><span class="token builtin class-name">:</span> value <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span> // 小于: field <span class="token operator">&lt;</span> value</span>
<span class="line">db.集合名称.find<span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string">"field"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token variable">$gte</span><span class="token builtin class-name">:</span> value <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span> // 大于等于: field <span class="token operator">>=</span> value</span>
<span class="line">db.集合名称.find<span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string">"field"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token variable">$lte</span><span class="token builtin class-name">:</span> value <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span> // 小于等于: field <span class="token operator">&lt;=</span> value</span>
<span class="line">db.集合名称.find<span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string">"field"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token variable">$ne</span><span class="token builtin class-name">:</span> value <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span> // 不等于: field <span class="token operator">!=</span> value</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用案例：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">db.comment.find<span class="token punctuation">(</span><span class="token punctuation">{</span>likenum: <span class="token punctuation">{</span><span class="token variable">$gt</span><span class="token builtin class-name">:</span> NumberInt<span class="token punctuation">(</span><span class="token number">700</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="包含查询" tabindex="-1"><a class="header-anchor" href="#包含查询"><span>包含查询</span></a></h4>
<p>包含使用<code v-pre>$in</code>操作符，不包含使用<code v-pre>$nin</code>操作符。
使用案例：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">db.comment.find<span class="token punctuation">(</span><span class="token punctuation">{</span>userid: <span class="token punctuation">{</span><span class="token variable">$in</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">"1003"</span>, <span class="token string">"1004"</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span>userid: <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="条件连接查询" tabindex="-1"><a class="header-anchor" href="#条件连接查询"><span>条件连接查询</span></a></h4>
<p>语法格式：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token variable">$and</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token variable">$or</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用案例：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">db.comment.find<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token variable">$and</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>likenum: <span class="token punctuation">{</span><span class="token variable">$gt</span><span class="token builtin class-name">:</span> NumberInt<span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span>likenum: <span class="token punctuation">{</span><span class="token variable">$lte</span><span class="token builtin class-name">:</span> NumberInt<span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


