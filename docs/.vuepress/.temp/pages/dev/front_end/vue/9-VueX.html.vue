<template><div><h1 id="五、vuex" tabindex="-1"><a class="header-anchor" href="#五、vuex"><span>五、<code v-pre>Vuex</code></span></a></h1>
<h2 id="_1、介绍" tabindex="-1"><a class="header-anchor" href="#_1、介绍"><span>1、介绍</span></a></h2>
<p><code v-pre>vuex</code>是 vue 的一个状态(数据)管理工具，帮助我们管理 vue 通用的数据(多组件共享的数据)。</p>
<p>例如，个人信息只需要维护一份，使用组件通信机制太麻烦。</p>
<p><img src="@source/dev/front_end/vue/img_138.png" alt="img_138.png">
使用<code v-pre>vuex</code>可以：</p>
<ul>
<li>集中管理数据</li>
<li>响应式变化</li>
</ul>
<h2 id="_2、state-数据-状态" tabindex="-1"><a class="header-anchor" href="#_2、state-数据-状态"><span>2、<code v-pre>state</code>：数据/状态</span></a></h2>
<p><code v-pre>state</code>提供唯一的公共数据源，所有共享数据需要放到<code v-pre>store</code>中的<code v-pre>state</code>。</p>
<h3 id="_1-数据定义" tabindex="-1"><a class="header-anchor" href="#_1-数据定义"><span>(1) 数据定义</span></a></h3>
<p><img src="@source/dev/front_end/vue/img_139.png" alt="img_139.png"></p>
<h3 id="_2-数据使用" tabindex="-1"><a class="header-anchor" href="#_2-数据使用"><span>(2) 数据使用</span></a></h3>
<h4 id="通过store直接访问" tabindex="-1"><a class="header-anchor" href="#通过store直接访问"><span>通过<code v-pre>store</code>直接访问</span></a></h4>
<p><img src="@source/dev/front_end/vue/img_140.png" alt="img_140.png"></p>
<h4 id="通过辅助函数mapstate" tabindex="-1"><a class="header-anchor" href="#通过辅助函数mapstate"><span>通过辅助函数<code v-pre>mapState</code></span></a></h4>
<p><code v-pre>mapState</code>可以帮助将<code v-pre>store</code>中的数据自动映射到组件的<strong>计算属性</strong>中。</p>
<p><img src="@source/dev/front_end/vue/img_141.png" alt="img_141.png"></p>
<h2 id="_3、mutations数据-状态转变" tabindex="-1"><a class="header-anchor" href="#_3、mutations数据-状态转变"><span>3、<code v-pre>mutations</code>数据/状态转变</span></a></h2>
<p>用于修改<code v-pre>state</code>中的数据。</p>
<p><img src="@source/dev/front_end/vue/img_142.png" alt="img_142.png"></p>
<p><img src="@source/dev/front_end/vue/img_143.png" alt="img_143.png"></p>
<p>辅助函数<code v-pre>mapMutations</code>：将<code v-pre>mutations</code>中的方法提取出来，映射到组件的<code v-pre>methods</code>中。</p>
<p><img src="@source/dev/front_end/vue/img_144.png" alt="img_144.png"></p>
<p><strong>知识链接：js 中的 <code v-pre>...</code></strong></p>
<p>在 JavaScript 中，&quot;...&quot;表示剩余参数（Rest Parameters）或扩展操作符（Spread Operator）。</p>
<ol>
<li>剩余参数（Rest Parameters）：当在函数定义中使用<code v-pre>...</code>时，它表示接受任意数量的参数，并将它们作为数组存储在变量中。这样可以处理不确定数量的函数参数。</li>
</ol>
<p>使用案例如下：</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line">// 计算所有数字之和</span>
<span class="line">function sum(...numbers) {</span>
<span class="line">  let total = 0;</span>
<span class="line">  for (let number of numbers) {</span>
<span class="line">    total += number;</span>
<span class="line">  }</span>
<span class="line">  return total;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">console.log(sum(1, 2, 3, 4)); // 输出: 10</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<ol start="2">
<li>扩展操作符（Spread Operator）：当在函数调用或数组/对象字面量中使用<code v-pre>...</code>时，它可以将数组或对象展开为单独的值。这在创建新的数组、合并数组或传递多个参数时非常有用。</li>
</ol>
<p>使用案例如下：</p>
</blockquote>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line">// 创建新数组</span>
<span class="line">const array1 = [1, 2, 3];</span>
<span class="line">const array2 = [...array1, 4, 5, 6];</span>
<span class="line">console.log(array2); // 输出: [1, 2, 3, 4, 5, 6]</span>
<span class="line"></span>
<span class="line">// 合并数组</span>
<span class="line">const array3 = [7, 8, 9];</span>
<span class="line">const mergedArray = [...array1, ...array3];</span>
<span class="line">console.log(mergedArray); // 输出: [1, 2, 3, 7, 8, 9]</span>
<span class="line"></span>
<span class="line">// 函数调用中的参数传递</span>
<span class="line">function greet(name, age) {</span>
<span class="line">  console.log(`Hello ${name}! You are ${age} years old.`);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const person = ['Alice', 25];</span>
<span class="line">greet(...person); // 输出: Hello Alice! You are 25 years old.</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、actions-异步操作" tabindex="-1"><a class="header-anchor" href="#_4、actions-异步操作"><span>4、<code v-pre>actions</code>：异步操作</span></a></h2>
<p><img src="@source/dev/front_end/vue/img_145.png" alt="img_145.png"></p>
<p>使用<code v-pre>mapActions</code>辅助函数将<code v-pre>actions</code>中的方法提取出来，映射到组件<code v-pre>methods</code>中。</p>
<p><img src="@source/dev/front_end/vue/img_146.png" alt="img_146.png"></p>
<p><strong>知识链接：JS 中的箭头函数</strong></p>
<p>在 JavaScript 中，箭头函数（Arrow Functions）是一种简化函数表达式的语法形式。箭头函数提供了一种更简洁的方式来定义函数，并且在某些情况下可以改变函数内部的<code v-pre>this</code>的行为。
箭头函数的语法形式如下：</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line">(param1, param2, ..., paramN) => {</span>
<span class="line">  // 函数体</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>箭头函数的特点如下：</p>
<ol>
<li>简洁的语法：箭头函数使用箭头(<code v-pre>=&gt;</code>)来表示函数，省略了<code v-pre>function</code>关键字和函数体中的<code v-pre>return</code>关键字（如果函数体只有一行表达式）。</li>
<li>隐式返回：如果函数体只有一条表达式，箭头函数会自动将该表达式的结果作为返回值，例如：</li>
</ol>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line">// 传统函数表达式</span>
<span class="line">const add = function(a, b) {</span>
<span class="line">  return a + b;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">// 箭头函数</span>
<span class="line">const add = (a, b) => a + b;</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>没有自己的<code v-pre>**this**</code>：箭头函数没有自己的<code v-pre>this</code>值，它会继承外部作用域的<code v-pre>this</code>值。这意味着箭头函数内部的<code v-pre>this</code>与外部作用域的<code v-pre>this</code>是相同的，不会因为函数的调用方式而改变。</li>
</ol>
<p>总的来说，箭头函数提供了一种简洁的语法形式来定义函数，并且在处理函数作用域和<code v-pre>this</code>值时具有特殊的行为。但请注意，箭头函数并不适用于所有场景，特别是在需要动态绑定<code v-pre>this</code>的情况下，传统函数表达式仍然是更好的选择。</p>
<h2 id="_5、getters-vuex-中的计算属性" tabindex="-1"><a class="header-anchor" href="#_5、getters-vuex-中的计算属性"><span>5、<code v-pre>getters</code>：vuex 中的计算属性</span></a></h2>
<p><img src="@source/dev/front_end/vue/img_147.png" alt="img_147.png"></p>
<h2 id="_6、模块化" tabindex="-1"><a class="header-anchor" href="#_6、模块化"><span>6、模块化</span></a></h2>
<p>在<code v-pre>store</code>中使用单一<code v-pre>state</code>会很庞大：</p>
<p><img src="@source/dev/front_end/vue/img_148.png" alt="img_148.png"></p>
<p>将<code v-pre>state</code>中的结点进行模块化拆分：
<img src="@source/dev/front_end/vue/img_149.png" alt="img_149.png">
<img src="@source/dev/front_end/vue/img_150.png" alt="img_150.png">
<img src="@source/dev/front_end/vue/img_151.png" alt="img_151.png">
<img src="@source/dev/front_end/vue/img_152.png" alt="img_152.png">
<img src="@source/dev/front_end/vue/img_153.png" alt="img_153.png"></p>
</div></template>


