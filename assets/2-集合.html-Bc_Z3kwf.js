import{_ as e,c as a,o as c,a as o}from"./app-DNVZcai8.js";const d={},s=o('<h1 id="_2-集合" tabindex="-1"><a class="header-anchor" href="#_2-集合"><span>2. 集合</span></a></h1><h2 id="集合和数组有什么区别" tabindex="-1"><a class="header-anchor" href="#集合和数组有什么区别"><span>集合和数组有什么区别？</span></a></h2><p>集合和数组的区别主要在于<strong>长度是否可变</strong>、<strong>存储的数据类型</strong>以及<strong>访问方式</strong>。</p><p><strong>1. 长度是否可变</strong></p><p>数组一旦创建，长度便不可变；集合创建后，可按需扩容。</p><p><strong>2. 存储的数据类型</strong></p><p>数组能存储基本数据类型和对象，集合只能存储对象。</p><p><strong>3. 访问方式</strong></p><p>数组元素通过 <code>[]</code> 访问，集合中的元素通过方法访问。</p><h2 id="java-中有哪些集合类" tabindex="-1"><a class="header-anchor" href="#java-中有哪些集合类"><span>Java 中有哪些集合类？</span></a></h2><p>Java 中的集合类包括 Collection 和 Map。</p><p>Collection 存储对象，Map 存储键值对。 Collection 中有包括 List 和 Set。</p><p>List 的具体实现有 <code>ArrayList</code>、<code>LinkedList</code> 等； Set 的具体实现有 <code>HashSet</code>、<code>LinkedHashSet</code> 等； Map 的具体实现有 <code>HashMap</code>、<code>LinkedHashMap</code> 等。</p><h2 id="介绍一下-hashmap-的实现原理" tabindex="-1"><a class="header-anchor" href="#介绍一下-hashmap-的实现原理"><span>介绍一下 <code>HashMap</code> 的实现原理</span></a></h2><p><code>HashMap</code> 底层是通过数组+链表+红黑树实现的。</p><p>Java 使用数组表示哈希桶，一个 key 首先会输入一个哈希函数得到哈希值，这个哈希值与 <code>n-1</code> 进行与操作获取数组下标。 当出现哈希冲突时，使用拉链法链接出现冲突的结点，当拉链过长，会导致查询效率降低，<code>HashMap</code> 使用了树化与扩容机制。</p><p>树化是指，当单链元素超过 8 并且数组长度大于等于 64，该拉链会变成一棵红黑树，以加速查找。</p><p>扩容是指，当存储元素与数组长度的比值超过一定阈值，会使用一个更大数组作为哈希桶，并将元素都复制到新的数组中。</p><h2 id="hashmap-put-和-get-方法过程是怎样的" tabindex="-1"><a class="header-anchor" href="#hashmap-put-和-get-方法过程是怎样的"><span><code>HashMap</code> <code>put</code> 和 <code>get</code> 方法过程是怎样的？</span></a></h2><p><code>put</code> 是插入或修改。 首先，将 key 输入哈希函数，将哈希值与数组长度 <code>n-1</code> 进行与运算获取数组下标。 若指定位置处没有元素，则插入新的键值对。 若指定位置处有元素，则首先通过 <code>equals()</code> 方法查看是否存在相同 <code>key</code> 的键值对，若存在，则修改 <code>value</code>。 若不存在，则插入新的键值对。 插入后，按照规则进行树化或扩容操作。</p><p><code>get</code> 是获取 value。 首先，将 key 输入哈希函数获取哈希值，将哈希值与数组长度 <code>n-1</code> 进行与运算获取数组下标。 若指定位置没有元素，直接返回 <code>null</code>。 否则，使用 <code>equals()</code> 寻找 key 值相同的键值对。如果找到了，返回 value；否则返回 <code>null</code>。</p><h2 id="hashmap-一般使用什么作为-key" tabindex="-1"><a class="header-anchor" href="#hashmap-一般使用什么作为-key"><span><code>HashMap</code> 一般使用什么作为 key？</span></a></h2><p><code>HashMap</code> 一般使用不可变对象作为 key。 不可变对象是指，对象一旦被创建，其内部属性无法被修改。 这种特性保证了 <code>hashCode()</code> 方法和 <code>equals()</code> 方法的不变性。 如果 key 可变，键值对就要重新定位插入，引入不必要的复杂性。</p><h2 id="concurrenthashmap-是如何实现的" tabindex="-1"><a class="header-anchor" href="#concurrenthashmap-是如何实现的"><span><code>ConcurrentHashMap</code> 是如何实现的？</span></a></h2><p><code>ConcurrentHashMap</code> 底层是使用 CAS 锁和 <code>synchronized</code> 关键字实现的。</p><p>以添加元素为例，首先计算哈希桶位置，若桶中没有元素，则使用 CAS 锁添加元素。 若桶中有元素，则使用 <code>synchrozied</code> 关键字，首先获取首个元素的对象锁，再进行 <code>put</code> 操作。</p>',26),p=[s];function h(n,t){return c(),a("div",null,p)}const l=e(d,[["render",h],["__file","2-集合.html.vue"]]),i=JSON.parse('{"path":"/dev/principle/java/2-%E9%9B%86%E5%90%88.html","title":"2. 集合","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"集合和数组有什么区别？","slug":"集合和数组有什么区别","link":"#集合和数组有什么区别","children":[]},{"level":2,"title":"Java 中有哪些集合类？","slug":"java-中有哪些集合类","link":"#java-中有哪些集合类","children":[]},{"level":2,"title":"介绍一下 HashMap 的实现原理","slug":"介绍一下-hashmap-的实现原理","link":"#介绍一下-hashmap-的实现原理","children":[]},{"level":2,"title":"HashMap put 和 get 方法过程是怎样的？","slug":"hashmap-put-和-get-方法过程是怎样的","link":"#hashmap-put-和-get-方法过程是怎样的","children":[]},{"level":2,"title":"HashMap 一般使用什么作为 key？","slug":"hashmap-一般使用什么作为-key","link":"#hashmap-一般使用什么作为-key","children":[]},{"level":2,"title":"ConcurrentHashMap 是如何实现的？","slug":"concurrenthashmap-是如何实现的","link":"#concurrenthashmap-是如何实现的","children":[]}],"git":{"updatedTime":1728376556000,"contributors":[{"name":"ZhangZiYi","email":"ecustzzy1@163.com","commits":2}]},"filePathRelative":"dev/principle/java/2-集合.md"}');export{l as comp,i as data};
