<template><div><h1 id="零、python-包使用" tabindex="-1"><a class="header-anchor" href="#零、python-包使用"><span>零、Python 包使用</span></a></h1>
<h2 id="_1、numpy" tabindex="-1"><a class="header-anchor" href="#_1、numpy"><span>1、Numpy</span></a></h2>
<h3 id="_1-tile-方法" tabindex="-1"><a class="header-anchor" href="#_1-tile-方法"><span>(1) <code v-pre>tile()</code>方法</span></a></h3>
<p>功能：沿各个方向复制数组。
语法：<code v-pre>numpy.tile(A, reps)</code></p>
<ul>
<li><code v-pre>A</code>：待复制数组</li>
<li><code v-pre>reps</code>：重复次数元组</li>
</ul>
<p>使用案例：</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np</span>
<span class="line"></span>
<span class="line">a <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># 行重复两次，列重复三次</span></span>
<span class="line">b <span class="token operator">=</span> np<span class="token punctuation">.</span>tile<span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line">array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">       <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">       <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">       <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-sum-方法" tabindex="-1"><a class="header-anchor" href="#_2-sum-方法"><span>(2) <code v-pre>sum()</code>方法</span></a></h3>
<p>功能：计算元素总和
使用案例：</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建一个 2x2 的数组</span></span>
<span class="line">arr <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 计算数组中所有元素的总和</span></span>
<span class="line">sum_all <span class="token operator">=</span> np<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 沿第一维（行）计算总和</span></span>
<span class="line"><span class="token comment"># 沿行压缩</span></span>
<span class="line">sum_axis0 <span class="token operator">=</span> np<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 沿第二维（列）计算总和</span></span>
<span class="line"><span class="token comment"># 沿列压缩</span></span>
<span class="line">sum_axis1 <span class="token operator">=</span> np<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>sum_all<span class="token punctuation">)</span>    <span class="token comment"># 输出：10</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>sum_axis0<span class="token punctuation">)</span>  <span class="token comment"># 输出：[4 6]</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>sum_axis1<span class="token punctuation">)</span>  <span class="token comment"># 输出：[3 7]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-argsort-方法" tabindex="-1"><a class="header-anchor" href="#_3-argsort-方法"><span>(3) <code v-pre>argsort()</code>方法</span></a></h3>
<p>功能：排序数组，生成一个索引数组，返回的索引是将原始数组的元素按升序排序后的索引。
使用案例：</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建一个包含 4 个整数的数组</span></span>
<span class="line">arr <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 对数组进行排序并获取每个元素的索引</span></span>
<span class="line">sorted_indices <span class="token operator">=</span> arr<span class="token punctuation">.</span>argsort<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>sorted_indices<span class="token punctuation">)</span>  <span class="token comment"># 输出：[3 1 2 0]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-min-方法" tabindex="-1"><a class="header-anchor" href="#_4-min-方法"><span>(4) <code v-pre>min()</code>方法</span></a></h3>
<p>功能：沿某一轴找到数组的最值。
使用案例：</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token comment"># 二维数组</span></span>
<span class="line">y <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">min_val <span class="token operator">=</span> np<span class="token punctuation">.</span><span class="token builtin">min</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>min_val<span class="token punctuation">)</span> <span class="token comment"># 输出1，因为1是y中的最小值</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 沿着行的最小值</span></span>
<span class="line">min_val <span class="token operator">=</span> np<span class="token punctuation">.</span><span class="token builtin">min</span><span class="token punctuation">(</span>y<span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>min_val<span class="token punctuation">)</span> <span class="token comment"># 输出[1, 4]，因为第一行的最小值是1，第二行的最小值是4</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 沿着列的最小值</span></span>
<span class="line">min_val <span class="token operator">=</span> np<span class="token punctuation">.</span><span class="token builtin">min</span><span class="token punctuation">(</span>y<span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>min_val<span class="token punctuation">)</span> <span class="token comment"># 输出[1, 2, 3]，因为第一列的最小值是1，第二列的最小值是2，第三列的最小值是3</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-nonzero-方法" tabindex="-1"><a class="header-anchor" href="#_5-nonzero-方法"><span>(5) <code v-pre>nonzero()</code>方法</span></a></h3>
<p>功能：返回一个数组中非零元素的索引。
使用案例：</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line">nonzero_arr <span class="token operator">=</span> np<span class="token punctuation">.</span>nonzero<span class="token punctuation">(</span>arr<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2、sklearn" tabindex="-1"><a class="header-anchor" href="#_2、sklearn"><span>2、sklearn</span></a></h2>
<h3 id="_1-train-test-split" tabindex="-1"><a class="header-anchor" href="#_1-train-test-split"><span>(1) <code v-pre>train_test_split()</code></span></a></h3>
<p>功能：将数据集划分为测试集和训练集。
使用语法：<code v-pre>train_test_split(*arrays, test_size=None, train_size=None, random_state=None, shuffle=True, stratify=None)</code></p>
<ul>
<li>*<strong>arrays</strong>：待划分的数据集。可以是numpy数组，Python列表或稀疏矩阵。如果有两个或多个数组传入，则它们必须具有相同的长度，用于指定相应的数据和标签。</li>
<li><strong>test_size</strong>：测试集的比例。默认值为0.25，即将数据集划分为75%的训练集和25%的测试集。可以使用一个浮点数或整数指定测试集的大小。如果指定为浮点数，则表示测试集的比例；如果指定为整数，则表示测试集的绝对大小。</li>
<li><strong>train_size</strong>：训练集的比例。默认值为<strong>None</strong>，即训练集的大小为数据集的补集（即1 - test_size）。可以使用一个浮点数或整数指定训练集的大小。如果指定为浮点数，则表示训练集的比例；如果指定为整数，则表示训练集的绝对大小。如果<strong>test_size</strong>和<strong>train_size</strong>都不为<strong>None</strong>，则将忽略<strong>test_size</strong>。</li>
<li><strong>random_state</strong>：随机数生成器的种子，用于控制随机数的生成。默认情况下，随机数生成器使用当前系统时间作为种子。如果想要再现相同的结果，可以指定一个整数种子值。</li>
<li><strong>shuffle</strong>：是否在划分前对数据集进行洗牌。默认值为True。如果设置为False，则不进行洗牌，划分结果将是按照原始顺序划分的。</li>
<li><strong>stratify</strong>：可选参数，指定类别标签（如果有的话）用于分层采样。默认情况下，不进行分层采样。</li>
</ul>
<p>使用案例：</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>model_selection <span class="token keyword">import</span> train_test_split</span>
<span class="line"><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>datasets <span class="token keyword">import</span> load_iris</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">iris <span class="token operator">=</span> load_iris<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">X <span class="token operator">=</span> iris<span class="token punctuation">.</span>data</span>
<span class="line">y <span class="token operator">=</span> iris<span class="token punctuation">.</span>target</span>
<span class="line">X_train<span class="token punctuation">,</span> X_test<span class="token punctuation">,</span> y_train<span class="token punctuation">,</span> y_test <span class="token operator">=</span> train_test_split<span class="token punctuation">(</span>X<span class="token punctuation">,</span> y<span class="token punctuation">,</span> test_size<span class="token operator">=</span><span class="token number">0.2</span><span class="token punctuation">,</span> random_state<span class="token operator">=</span><span class="token number">42</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-accuracy-score" tabindex="-1"><a class="header-anchor" href="#_2-accuracy-score"><span>(2) <code v-pre>accuracy_score()</code></span></a></h3>
<p>功能：计算分类器准确度。
使用语法：<code v-pre>accuracy_score(y_true, y_pred, normalize=True, sample_weight=None)</code></p>
<ul>
<li><strong>y_true</strong>：真实标签，通常是测试集的标签。</li>
<li><strong>y_pred</strong>：分类器预测的标签。</li>
<li><strong>normalize</strong>：一个布尔值，用于指定是否将结果归一化到0到1之间。默认为True，表示将结果归一化；如果设置为False，则返回正确分类的样本数。</li>
<li><strong>sample_weight</strong>：一个可选的数组，用于指定每个样本的权重。默认为None，表示所有样本的权重都为1。</li>
</ul>
<p>使用案例：</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line">accuracy <span class="token operator">=</span> accuracy_score<span class="token punctuation">(</span>y_test<span class="token punctuation">,</span> y_pred<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3-fit-transform" tabindex="-1"><a class="header-anchor" href="#_3-fit-transform"><span>(3) <code v-pre>fit_transform()</code></span></a></h3>
<p><code v-pre>fit_transform()</code>方法是 sklearn 中用于对数据进行预处理的方法之一。它是<code v-pre>fit()</code>和<code v-pre>transform()</code>方法的组合，因此可以一次性完成这两个步骤。
<code v-pre>fit()</code>方法用于计算训练数据的均值和标准差等参数，以便用于后续数据的标准化（scaling）或归一化（normalization）操作。同时，<code v-pre>fit()</code>方法还会对训练数据进行一些必要的数据清理和处理，以确保训练数据的质量。
<code v-pre>transform()</code>方法用于将原始数据转换为标准化或归一化后的数据。这个方法通常需要在<code v-pre>fit()</code>方法之后调用，以确保使用相同的均值和标准差进行转换。
<code v-pre>fit_transform()</code>方法可以将<code v-pre>fit()</code>和<code v-pre>transform()</code>两个步骤结合起来，方便用户一次性完成预处理操作，而不必多次调用<code v-pre>fit()</code>和<code v-pre>transform()</code>方法。同时，它也能够在保证训练数据质量的前提下，对数据进行标准化或归一化处理，提高后续机器学习算法的准确性。
使用案例1：使用 <code v-pre>fit_transform()</code>将文本数据转换为多行特征向量</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token comment"># 创建文本数据</span></span>
<span class="line">corpus <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'This is the first document.'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string">'This is the second second document.'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string">'And the third one.'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string">'Is this the first document?'</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 将文本数据转化为数值特征</span></span>
<span class="line">vectorizer <span class="token operator">=</span> CountVectorizer<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">X <span class="token operator">=</span> vectorizer<span class="token punctuation">.</span>fit_transform<span class="token punctuation">(</span>corpus<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>上述代码执行完毕，X 是一个稀疏矩阵，每一行是每篇文档的向量表示，每一列是单词的计数。</p>
</blockquote>
<h3 id="_4-各种数据集介绍" tabindex="-1"><a class="header-anchor" href="#_4-各种数据集介绍"><span>(4) 各种数据集介绍</span></a></h3>
<h4 id="_1-乳腺癌数据集" tabindex="-1"><a class="header-anchor" href="#_1-乳腺癌数据集"><span>1. 乳腺癌数据集</span></a></h4>
<p>乳腺癌数据集（Breast Cancer Dataset）是机器学习中常用的数据集之一，其包含了从乳腺组织细胞图像中提取出的 30 个特征，以及相应的良性（Benign）或恶性（Malignant）标签。该数据集共有 569 个样本，其中 357 个是良性乳腺肿瘤，212 个是恶性乳腺肿瘤。
该数据集的主要目的是通过对乳腺肿瘤的特征分析，以帮助医生进行早期乳腺癌的诊断和分类。因此，它经常被用来研究机器学习算法在二分类任务中的表现。同时，该数据集也是一个典型的高维数据集，因此也常用来研究降维和特征选择算法。
该数据集可以通过sklearn库中的<code v-pre>**load_breast_cancer()**</code>函数进行加载。</p>
<h4 id="_2-糖尿病数据集" tabindex="-1"><a class="header-anchor" href="#_2-糖尿病数据集"><span>2. 糖尿病数据集</span></a></h4>
<p>糖尿病数据集（Diabetes dataset）是一个用于回归分析的数据集，由美国国家糖尿病和消化和肾脏疾病研究所（National Institute of Diabetes and Digestive and Kidney Diseases）提供。该数据集包括 442 个病人的 10 个生理特征，以及病人随后一年内糖尿病进展的定量测量值。这些生理特征包括：</p>
<ol>
<li>年龄（Age）</li>
<li>性别（Sex）</li>
<li>体质指数（Body mass index）</li>
<li>血压（Average blood pressure）</li>
<li>6个血清指标（6 blood serum measurements）</li>
</ol>
<p>数据集的目标变量为每个病人在随访期间1年内疾病进展的测量值，该测量值是一个连续变量，表示疾病进展的定量度量。数据集用于糖尿病的回归预测建模问题。
在 scikit-learn 库中，糖尿病数据集可以使用<code v-pre>load_diabetes()</code>函数加载。该函数返回一个字典对象，包含数据、目标变量、特征名称等信息，可以用于训练和评估回归模型。</p>
<h2 id="_3、内置函数" tabindex="-1"><a class="header-anchor" href="#_3、内置函数"><span>3、内置函数</span></a></h2>
<h3 id="_1-randrange" tabindex="-1"><a class="header-anchor" href="#_1-randrange"><span>(1) <code v-pre>randrange()</code></span></a></h3>
<p><code v-pre>randrange()</code> 函数是 Python 中的一个内置函数，用于生成一个指定范围内的随机整数。它可以接受一个或两个参数，具体使用方法如下：</p>
<ol>
<li>当只有一个参数时，<code v-pre>randrange(stop)</code> 会返回一个在 0 到 stop-1 之间（包括0和stop-1）的随机整数。例如：</li>
</ol>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">import</span> random</span>
<span class="line"></span>
<span class="line">x <span class="token operator">=</span> random<span class="token punctuation">.</span>randrange<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>  <span class="token comment"># 可能输出 0 到 9 中的任意一个整数</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>当有两个参数时，<code v-pre>randrange(start, stop)</code> 会返回一个在 start 到 stop-1 之间（包括start和stop-1）的随机整数。例如：</li>
</ol>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">import</span> random</span>
<span class="line"></span>
<span class="line">x <span class="token operator">=</span> random<span class="token punctuation">.</span>randrange<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>  <span class="token comment"># 可能输出 1 到 6 中的任意一个整数</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：<code v-pre>randrange()</code> 函数不包括 stop 参数本身，因此如果要生成一个在 0 到 stop 之间（包括0和stop）的随机整数，可以使用 <code v-pre>randrange(stop+1)</code>。</p>
<h3 id="_2-map" tabindex="-1"><a class="header-anchor" href="#_2-map"><span>(2) <code v-pre>map()</code></span></a></h3>
<p><code v-pre>map()</code>是 Python 内置函数之一，它的作用是<strong>将一个函数应用到一个可迭代对象的所有元素上</strong>，然后返回一个新的可迭代对象，其中每个元素都是原始可迭代对象对应元素经过该函数处理后的结果。
<code v-pre>map()</code>函数的基本语法如下：</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token builtin">map</span><span class="token punctuation">(</span>function<span class="token punctuation">,</span> iterable<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>其中，<code v-pre>function</code>是接受一个参数的函数，它会被应用到<code v-pre>iterable</code>中的每个元素上，而<code v-pre>iterable</code>则是一个可迭代对象，可以是列表、元组、集合、字典等等。如果有多个<code v-pre>iterable</code>参数，那么 <strong>function</strong> 也必须能够接受相应数量的参数，然后将每个可迭代对象的相同位置的元素传递给函数。
下面是一个例子，展示了如何使用<code v-pre>map()</code>函数将一个列表中的所有元素转换为它们的平方：</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line">numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span></span>
<span class="line">squares <span class="token operator">=</span> <span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token operator">**</span><span class="token number">2</span><span class="token punctuation">,</span> numbers<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span>squares<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 输出 [1, 4, 9, 16, 25]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


