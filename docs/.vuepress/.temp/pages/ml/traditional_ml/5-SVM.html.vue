<template><div><h1 id="五、支持向量机" tabindex="-1"><a class="header-anchor" href="#五、支持向量机"><span>五、支持向量机</span></a></h1>
<p>介绍：<a href="https://zhuanlan.zhihu.com/p/49331510" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/49331510</a></p>
<h2 id="_1、代码实战" tabindex="-1"><a class="header-anchor" href="#_1、代码实战"><span>1、代码实战</span></a></h2>
<h3 id="_1-sklearn-svm-示例代码" tabindex="-1"><a class="header-anchor" href="#_1-sklearn-svm-示例代码"><span>(1) sklearn SVM 示例代码</span></a></h3>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">from</span> sklearn <span class="token keyword">import</span> datasets</span>
<span class="line"><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>model_selection <span class="token keyword">import</span> train_test_split</span>
<span class="line"><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>svm <span class="token keyword">import</span> SVC</span>
<span class="line"><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>metrics <span class="token keyword">import</span> accuracy_score</span>
<span class="line"><span class="token comment"># 加载Iris数据集</span></span>
<span class="line">iris <span class="token operator">=</span> datasets<span class="token punctuation">.</span>load_iris<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取特征和标签</span></span>
<span class="line">X <span class="token operator">=</span> iris<span class="token punctuation">.</span>data</span>
<span class="line">y <span class="token operator">=</span> iris<span class="token punctuation">.</span>target</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 将数据集分为训练集和测试集</span></span>
<span class="line">X_train<span class="token punctuation">,</span> X_test<span class="token punctuation">,</span> y_train<span class="token punctuation">,</span> y_test <span class="token operator">=</span> train_test_split<span class="token punctuation">(</span>X<span class="token punctuation">,</span> y<span class="token punctuation">,</span> test_size<span class="token operator">=</span><span class="token number">0.3</span><span class="token punctuation">,</span> random_state<span class="token operator">=</span><span class="token number">42</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 训练SVM分类器</span></span>
<span class="line">clf <span class="token operator">=</span> SVC<span class="token punctuation">(</span>kernel<span class="token operator">=</span><span class="token string">'linear'</span><span class="token punctuation">)</span></span>
<span class="line">clf<span class="token punctuation">.</span>fit<span class="token punctuation">(</span>X_train<span class="token punctuation">,</span> y_train<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 预测测试集</span></span>
<span class="line">y_pred <span class="token operator">=</span> clf<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>X_test<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 计算准确度</span></span>
<span class="line">acc <span class="token operator">=</span> accuracy_score<span class="token punctuation">(</span>y_test<span class="token punctuation">,</span> y_pred<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"准确度： {:.2f}%"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>acc<span class="token operator">*</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-手写字体识别-1和9" tabindex="-1"><a class="header-anchor" href="#_2-手写字体识别-1和9"><span>(2) 手写字体识别：1和9</span></a></h3>
<p>核函数使用径向基函数。</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">from</span> numpy <span class="token keyword">import</span> <span class="token operator">*</span></span>
<span class="line"><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>svm <span class="token keyword">import</span> SVC</span>
<span class="line"><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>metrics <span class="token keyword">import</span> accuracy_score</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">img2vector</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    returnVect <span class="token operator">=</span> zeros<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    fr <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        lineStr <span class="token operator">=</span> fr<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">            returnVect<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">32</span> <span class="token operator">*</span> i <span class="token operator">+</span> j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>lineStr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> returnVect</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">loadImages</span><span class="token punctuation">(</span>dirName<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">from</span> os <span class="token keyword">import</span> listdir</span>
<span class="line">    hwLabels <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span>dirName<span class="token punctuation">)</span></span>
<span class="line">    trainingFileList <span class="token operator">=</span> listdir<span class="token punctuation">(</span>dirName<span class="token punctuation">)</span>  <span class="token comment"># load the training set</span></span>
<span class="line">    m <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>trainingFileList<span class="token punctuation">)</span></span>
<span class="line">    trainingMat <span class="token operator">=</span> zeros<span class="token punctuation">(</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        fileNameStr <span class="token operator">=</span> trainingFileList<span class="token punctuation">[</span>i<span class="token punctuation">]</span></span>
<span class="line">        fileStr <span class="token operator">=</span> fileNameStr<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">'.'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>  <span class="token comment"># take off .txt</span></span>
<span class="line">        classNumStr <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>fileStr<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">'_'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">if</span> classNumStr <span class="token operator">==</span> <span class="token number">9</span><span class="token punctuation">:</span></span>
<span class="line">            hwLabels<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">            hwLabels<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">        trainingMat<span class="token punctuation">[</span>i<span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token punctuation">]</span> <span class="token operator">=</span> img2vector<span class="token punctuation">(</span><span class="token string">'%s/%s'</span> <span class="token operator">%</span> <span class="token punctuation">(</span>dirName<span class="token punctuation">,</span> fileNameStr<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> trainingMat<span class="token punctuation">,</span> hwLabels</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">"__main__"</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 加载数据集</span></span>
<span class="line">    X_train<span class="token punctuation">,</span> y_train <span class="token operator">=</span> loadImages<span class="token punctuation">(</span><span class="token string">'./data/trainingDigits'</span><span class="token punctuation">)</span></span>
<span class="line">    X_test<span class="token punctuation">,</span> y_test <span class="token operator">=</span> loadImages<span class="token punctuation">(</span><span class="token string">'./data/testDigits'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 训练SVM分类器</span></span>
<span class="line">    clf <span class="token operator">=</span> SVC<span class="token punctuation">(</span>kernel<span class="token operator">=</span><span class="token string">'rbf'</span><span class="token punctuation">)</span></span>
<span class="line">    clf<span class="token punctuation">.</span>fit<span class="token punctuation">(</span>X_train<span class="token punctuation">,</span> y_train<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 预测测试集</span></span>
<span class="line">    y_pred <span class="token operator">=</span> clf<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>X_test<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 计算准确度</span></span>
<span class="line">    acc <span class="token operator">=</span> accuracy_score<span class="token punctuation">(</span>y_test<span class="token punctuation">,</span> y_pred<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"准确度： {:.2f}%"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>acc<span class="token operator">*</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


