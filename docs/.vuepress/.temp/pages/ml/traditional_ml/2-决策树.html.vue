<template><div><h1 id="二、决策树" tabindex="-1"><a class="header-anchor" href="#二、决策树"><span>二、决策树</span></a></h1>
<p>决策树算法是一种基于树形结构的监督学习算法。它通过对训练数据集进行递归的分割，生成一个树形结构，用于对新的输入数据进行分类或回归。</p>
<p>香农熵（Shannon entropy）是一种用于度量随机事件的不确定性或信息量的指标。它是由美国数学家克劳德·香农（Claude Shannon）在1948年提出的，被认为是信息论的基础。</p>
<p>香农熵通常用来表示一个随机事件或一个信源的平均信息量，它的计算方式是将事件的每种可能性的信息量加起来并取平均值。在这里，“信息量”指的是一个事件所提供的信息量大小，通常用该事件发生的概率的负对数来衡量。</p>
<p>具体来说，如果一个事件发生的概率是p，那么它的信息量就是-log2(p)。而香农熵就是将每种可能性的信息量加起来并取平均值，即H=-Σp(x)log2p(x)，其中x是事件的每种可能性，p(x)是该事件发生的概率。</p>
<p>香农熵越大，表示随机事件的不确定性越高，提供的信息量也就越大。反之，香农熵越小，表示随机事件的不确定性越小，提供的信息量也就越少。</p>
<h2 id="_1、算法步骤" tabindex="-1"><a class="header-anchor" href="#_1、算法步骤"><span>1、算法步骤</span></a></h2>
<p>决策树学习通常包括 3 个步骤: 特征选择、决策树的生成和决策树的修剪。</p>
<h2 id="_2、算法特点" tabindex="-1"><a class="header-anchor" href="#_2、算法特点"><span>2、算法特点</span></a></h2>
<p>决策树算法简单易懂，可解释性强，能够自动处理缺失值和异常值，但也存在过拟合、泛化能力差等问题，需要在实际应用中进行优化和改进。</p>
<h2 id="_3、sklearn-中的决策树" tabindex="-1"><a class="header-anchor" href="#_3、sklearn-中的决策树"><span>3、sklearn 中的决策树</span></a></h2>
<h3 id="_1-鸢尾花" tabindex="-1"><a class="header-anchor" href="#_1-鸢尾花"><span>(1) 鸢尾花</span></a></h3>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>datasets <span class="token keyword">import</span> load_iris</span>
<span class="line"><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>tree <span class="token keyword">import</span> DecisionTreeClassifier</span>
<span class="line"><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>model_selection <span class="token keyword">import</span> train_test_split</span>
<span class="line"><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>metrics <span class="token keyword">import</span> accuracy_score</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 加载数据集</span></span>
<span class="line">iris <span class="token operator">=</span> load_iris<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">X <span class="token operator">=</span> iris<span class="token punctuation">.</span>data</span>
<span class="line">y <span class="token operator">=</span> iris<span class="token punctuation">.</span>target</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 将数据集划分为训练集和测试集</span></span>
<span class="line">X_train<span class="token punctuation">,</span> X_test<span class="token punctuation">,</span> y_train<span class="token punctuation">,</span> y_test <span class="token operator">=</span> train_test_split<span class="token punctuation">(</span>X<span class="token punctuation">,</span> y<span class="token punctuation">,</span> test_size<span class="token operator">=</span><span class="token number">0.3</span><span class="token punctuation">,</span> random_state<span class="token operator">=</span><span class="token number">42</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建决策树分类器</span></span>
<span class="line">clf <span class="token operator">=</span> DecisionTreeClassifier<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 训练分类器</span></span>
<span class="line">clf<span class="token punctuation">.</span>fit<span class="token punctuation">(</span>X_train<span class="token punctuation">,</span> y_train<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 对测试集进行预测</span></span>
<span class="line">y_pred <span class="token operator">=</span> clf<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>X_test<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 计算分类器的准确率</span></span>
<span class="line">accuracy <span class="token operator">=</span> accuracy_score<span class="token punctuation">(</span>y_test<span class="token punctuation">,</span> y_pred<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Accuracy:"</span><span class="token punctuation">,</span> accuracy<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-隐形眼镜" tabindex="-1"><a class="header-anchor" href="#_2-隐形眼镜"><span>(2) 隐形眼镜</span></a></h3>
<h4 id="_1-项目概述和数据集概述" tabindex="-1"><a class="header-anchor" href="#_1-项目概述和数据集概述"><span>1. 项目概述和数据集概述</span></a></h4>
<p>隐形眼镜类型包括硬材质、软材质以及不适合佩戴隐形眼镜。我们需要使用决策树预测患者需要佩戴的隐形眼镜类型。
数据集如下：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">young	myope	no	reduced	no lenses</span>
<span class="line">young	myope	no	normal	soft</span>
<span class="line">young	myope	yes	reduced	no lenses</span>
<span class="line">young	myope	yes	normal	hard</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-具体代码" tabindex="-1"><a class="header-anchor" href="#_2-具体代码"><span>2. 具体代码</span></a></h4>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>tree <span class="token keyword">import</span> DecisionTreeClassifier</span>
<span class="line"><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>model_selection <span class="token keyword">import</span> train_test_split</span>
<span class="line"><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>metrics <span class="token keyword">import</span> accuracy_score</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">file2matrix</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">"""</span>
<span class="line">    读取文本文件，返回特征矩阵和标签向量</span>
<span class="line">    :param filename: 文件路径</span>
<span class="line">    :return:特征矩阵和标签向量</span>
<span class="line">    """</span></span>
<span class="line">    <span class="token comment"># 加载隐形眼镜相关的 文本文件 数据</span></span>
<span class="line">    fr <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment"># 标签向量</span></span>
<span class="line">    labels <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    label_mapping <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"no lenses"</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"soft"</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"hard"</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment"># 特征描述与离散值的映射</span></span>
<span class="line">    feature_mapping <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span><span class="token string">"young"</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"pre"</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"presbyopic"</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span><span class="token string">"myope"</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"hyper"</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span><span class="token string">"yes"</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"no"</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span><span class="token string">"reduced"</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"normal"</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">    <span class="token comment"># 特征矩阵</span></span>
<span class="line">    features <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">for</span> line <span class="token keyword">in</span> fr<span class="token punctuation">.</span>readlines<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token comment"># 该行的特征向量</span></span>
<span class="line">        feature_in_line <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">        features_and_labels <span class="token operator">=</span> line<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">'\t'</span><span class="token punctuation">)</span></span>
<span class="line">        labels<span class="token punctuation">.</span>append<span class="token punctuation">(</span>label_mapping<span class="token punctuation">[</span>features_and_labels<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>features_and_labels<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">            feature_in_line<span class="token punctuation">.</span>append<span class="token punctuation">(</span>feature_mapping<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>features_and_labels<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">        features<span class="token punctuation">.</span>append<span class="token punctuation">(</span>feature_in_line<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> features<span class="token punctuation">,</span> labels</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">create_data_set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">"""</span>
<span class="line">    创建虚拟数据集</span>
<span class="line">    :return:</span>
<span class="line">    """</span></span>
<span class="line">    data_set <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span></span>
<span class="line">    labels <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">return</span> data_set<span class="token punctuation">,</span> labels</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">"__main__"</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 加载数据集</span></span>
<span class="line">    X<span class="token punctuation">,</span> y <span class="token operator">=</span> file2matrix<span class="token punctuation">(</span><span class="token string">'./data/lenses.txt'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment"># X, y = create_data_set()</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 将数据集划分为训练集和测试集</span></span>
<span class="line">    X_train<span class="token punctuation">,</span> X_test<span class="token punctuation">,</span> y_train<span class="token punctuation">,</span> y_test <span class="token operator">=</span> train_test_split<span class="token punctuation">(</span>X<span class="token punctuation">,</span> y<span class="token punctuation">,</span> test_size<span class="token operator">=</span><span class="token number">0.3</span><span class="token punctuation">,</span> random_state<span class="token operator">=</span><span class="token number">42</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 创建决策树分类器</span></span>
<span class="line">    clf <span class="token operator">=</span> DecisionTreeClassifier<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 训练分类器</span></span>
<span class="line">    clf<span class="token punctuation">.</span>fit<span class="token punctuation">(</span>X_train<span class="token punctuation">,</span> y_train<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 对测试集进行预测</span></span>
<span class="line">    y_pred <span class="token operator">=</span> clf<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>X_test<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 计算分类器的准确率</span></span>
<span class="line">    accuracy <span class="token operator">=</span> accuracy_score<span class="token punctuation">(</span>y_test<span class="token punctuation">,</span> y_pred<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Accuracy:"</span><span class="token punctuation">,</span> accuracy<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


