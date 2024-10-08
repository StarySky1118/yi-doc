<template><div><h1 id="四、逻辑回归" tabindex="-1"><a class="header-anchor" href="#四、逻辑回归"><span>四、逻辑回归</span></a></h1>
<p><strong>Numpy 矩阵和 Python 二维列表区别</strong>
NumPy 矩阵和 Python 二维列表在很多方面都有所不同，其中一些区别如下：</p>
<ol>
<li>数据类型</li>
</ol>
<p>NumPy 矩阵是同质的，即矩阵中的所有元素必须具有相同的数据类型。例如，一个NumPy矩阵可以只包含整数或只包含浮点数。而 Python 二维列表可以包含不同类型的元素。</p>
<ol start="2">
<li>内存管理</li>
</ol>
<p>NumPy 矩阵被设计成更高效地使用内存。它们被存储为连续的内存块，并且不需要在每个元素之间存储额外的指针。相比之下，Python 二维列表可能会使用不连续的内存块来存储数据，因此可能会占用更多的内存。</p>
<ol start="3">
<li>数学操作</li>
</ol>
<p>NumPy矩阵提供了一些高级的数学操作，例如矩阵乘法、逆矩阵和行列式。相比之下，对于 Python 二维列表，必须手动编写代码来执行这些操作。</p>
<ol start="4">
<li>编程语言</li>
</ol>
<p>NumPy 是一个 Python 扩展库，它使用 C 语言编写了一些底层操作，因此 NumPy 矩阵比 Python 二维列表更快。但是，这也意味着使用 NumPy 需要安装 NumPy 库，而 Python 二维列表不需要。
总之，NumPy 矩阵和 Python 二维列表都有其优点和缺点，具体取决于应用程序的要求和使用场景。</p>
<h2 id="_1、算法简介" tabindex="-1"><a class="header-anchor" href="#_1、算法简介"><span>1、算法简介</span></a></h2>
<p>逻辑回归是一种经典的分类算法，常用于预测二元分类问题（即输出为0或1）。其基本思想是将输入特征线性组合后通过一个特殊的函数（称为sigmoid函数）映射到[0,1]区间内，然后根据映射值来判断样本属于哪个类别。</p>
<p><img src="@source/ml/traditional_ml/img_14.png" alt="img_14.png"></p>
<h2 id="_2、代码实战" tabindex="-1"><a class="header-anchor" href="#_2、代码实战"><span>2、代码实战</span></a></h2>
<h3 id="_1-sklearn-逻辑回归分类器示例代码" tabindex="-1"><a class="header-anchor" href="#_1-sklearn-逻辑回归分类器示例代码"><span>(1) sklearn 逻辑回归分类器示例代码</span></a></h3>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>linear_model <span class="token keyword">import</span> LogisticRegression</span>
<span class="line"><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>datasets <span class="token keyword">import</span> load_breast_cancer</span>
<span class="line"><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>model_selection <span class="token keyword">import</span> train_test_split</span>
<span class="line"><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>metrics <span class="token keyword">import</span> accuracy_score</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 加载数据集</span></span>
<span class="line">data <span class="token operator">=</span> load_breast_cancer<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">X <span class="token operator">=</span> data<span class="token punctuation">.</span>data</span>
<span class="line">y <span class="token operator">=</span> data<span class="token punctuation">.</span>target</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 将数据集划分为训练集和测试集</span></span>
<span class="line">X_train<span class="token punctuation">,</span> X_test<span class="token punctuation">,</span> y_train<span class="token punctuation">,</span> y_test <span class="token operator">=</span> train_test_split<span class="token punctuation">(</span>X<span class="token punctuation">,</span> y<span class="token punctuation">,</span> test_size<span class="token operator">=</span><span class="token number">0.3</span><span class="token punctuation">,</span> random_state<span class="token operator">=</span><span class="token number">42</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建逻辑回归分类器对象</span></span>
<span class="line">clf <span class="token operator">=</span> LogisticRegression<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 训练分类器</span></span>
<span class="line">clf<span class="token punctuation">.</span>fit<span class="token punctuation">(</span>X_train<span class="token punctuation">,</span> y_train<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 在测试集上评估分类器性能</span></span>
<span class="line">y_pred <span class="token operator">=</span> clf<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>X_test<span class="token punctuation">)</span></span>
<span class="line">accuracy <span class="token operator">=</span> accuracy_score<span class="token punctuation">(</span>y_test<span class="token punctuation">,</span> y_pred<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Accuracy:"</span><span class="token punctuation">,</span> accuracy<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


