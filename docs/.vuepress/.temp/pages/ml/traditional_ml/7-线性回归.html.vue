<template><div><h1 id="七、线性回归" tabindex="-1"><a class="header-anchor" href="#七、线性回归"><span>七、线性回归</span></a></h1>
<h2 id="_1、基本线性回归-lr" tabindex="-1"><a class="header-anchor" href="#_1、基本线性回归-lr"><span>1、基本线性回归(LR)</span></a></h2>
<h3 id="_1-算法介绍" tabindex="-1"><a class="header-anchor" href="#_1-算法介绍"><span>(1) 算法介绍</span></a></h3>
<p>线性回归是一种广泛使用的统计学习方法，旨在建立输入变量和输出变量之间的线性关系。它是一种监督学习算法，通常用于预测数值型输出变量。</p>
<p><img src="@source/ml/traditional_ml/img_18.png" alt="img_18.png"></p>
<h3 id="_2-源码分析——线性回归与可视化" tabindex="-1"><a class="header-anchor" href="#_2-源码分析——线性回归与可视化"><span>(2) 源码分析——线性回归与可视化</span></a></h3>
<p>使用的数据集格式如下：</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token number">1.000000</span>	<span class="token number">0.067732</span>	<span class="token number">3.176513</span></span>
<span class="line"><span class="token number">1.000000</span>	<span class="token number">0.427810</span>	<span class="token number">3.816464</span></span>
<span class="line"><span class="token number">1.000000</span>	<span class="token number">0.995731</span>	<span class="token number">4.550095</span></span>
<span class="line"><span class="token number">1.000000</span>	<span class="token number">0.738336</span>	<span class="token number">4.256571</span></span>
<span class="line"><span class="token number">1.000000</span>	<span class="token number">0.981083</span>	<span class="token number">4.560815</span></span>
<span class="line"><span class="token number">1.000000</span>	<span class="token number">0.526171</span>	<span class="token number">3.929515</span></span>
<span class="line"><span class="token number">1.000000</span>	<span class="token number">0.378887</span>	<span class="token number">3.526170</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有两个特征，但第一个特征全为 1，标签为连续型数值。</p>
<p><strong>程序入口</strong></p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token comment"># test for standRegression</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">regression1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    xArr<span class="token punctuation">,</span> yArr <span class="token operator">=</span> loadDataSet<span class="token punctuation">(</span><span class="token string">"./data/data.txt"</span><span class="token punctuation">)</span></span>
<span class="line">    xMat <span class="token operator">=</span> mat<span class="token punctuation">(</span>xArr<span class="token punctuation">)</span></span>
<span class="line">    yMat <span class="token operator">=</span> mat<span class="token punctuation">(</span>yArr<span class="token punctuation">)</span></span>
<span class="line">    ws <span class="token operator">=</span> standRegres<span class="token punctuation">(</span>xArr<span class="token punctuation">,</span> yArr<span class="token punctuation">)</span></span>
<span class="line">    fig <span class="token operator">=</span> plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    ax <span class="token operator">=</span> fig<span class="token punctuation">.</span>add_subplot<span class="token punctuation">(</span></span>
<span class="line">        <span class="token number">111</span><span class="token punctuation">)</span>  <span class="token comment"># add_subplot(349)函数的参数的意思是，将画布分成3行4列图像画在从左到右从上到下第9块</span></span>
<span class="line">    ax<span class="token punctuation">.</span>scatter<span class="token punctuation">(</span></span>
<span class="line">        <span class="token punctuation">[</span>xMat<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>flatten<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">[</span>yMat<span class="token punctuation">.</span>T<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>flatten<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>A<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># scatter 的x是xMat中的第二列，y是yMat的第一列</span></span>
<span class="line">    xCopy <span class="token operator">=</span> xMat<span class="token punctuation">.</span>copy<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    xCopy<span class="token punctuation">.</span>sort<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">    yHat <span class="token operator">=</span> xCopy <span class="token operator">*</span> ws</span>
<span class="line">    ax<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>xCopy<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> yHat<span class="token punctuation">)</span></span>
<span class="line">    plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">"__main__"</span><span class="token punctuation">:</span></span>
<span class="line">    regression1<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>加载数据集</strong></p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">def</span> <span class="token function">loadDataSet</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">""" 加载数据</span>
<span class="line">        解析以tab键分隔的文件中的浮点数</span>
<span class="line">    Returns:</span>
<span class="line">        dataMat :   feature 对应的数据集</span>
<span class="line">        labelMat :  feature 对应的分类标签，即类别标签</span>
<span class="line">    """</span></span>
<span class="line">    <span class="token comment"># 获取样本特征的总数，不算最后的目标变量</span></span>
<span class="line">    numFeat <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span><span class="token builtin">open</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span><span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">'\t'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">    dataMat <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    labelMat <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    fr <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">for</span> line <span class="token keyword">in</span> fr<span class="token punctuation">.</span>readlines<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token comment"># 读取每一行</span></span>
<span class="line">        lineArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">        <span class="token comment"># 删除一行中以tab分隔的数据前后的空白符号</span></span>
<span class="line">        curLine <span class="token operator">=</span> line<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">'\t'</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token comment"># i 从0到2，不包括2</span></span>
<span class="line">        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>numFeat<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token comment"># 将数据添加到lineArr List中，每一行数据测试数据组成一个行向量</span></span>
<span class="line">            lineArr<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token builtin">float</span><span class="token punctuation">(</span>curLine<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token comment"># 将测试数据的输入数据部分存储到dataMat 的List中</span></span>
<span class="line">        dataMat<span class="token punctuation">.</span>append<span class="token punctuation">(</span>lineArr<span class="token punctuation">)</span></span>
<span class="line">        <span class="token comment"># 将每一行的最后一个数据，即类别，或者叫目标变量存储到labelMat List中</span></span>
<span class="line">        labelMat<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token builtin">float</span><span class="token punctuation">(</span>curLine<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> dataMat<span class="token punctuation">,</span> labelMat</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>线性回归</strong></p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">def</span> <span class="token function">standRegres</span><span class="token punctuation">(</span>xArr<span class="token punctuation">,</span> yArr<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">'''</span>
<span class="line">    Description:</span>
<span class="line">        线性回归</span>
<span class="line">    Args:</span>
<span class="line">        xArr : 输入的样本数据，包含每个样本数据的 feature</span>
<span class="line">        yArr : 对应于输入数据的类别标签，也就是每个样本对应的目标变量</span>
<span class="line">    Returns:</span>
<span class="line">        ws: 回归系数</span>
<span class="line">    '''</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># mat()函数将xArr，yArr转换为矩阵 mat().T 代表的是对矩阵进行转置操作</span></span>
<span class="line">    xMat <span class="token operator">=</span> mat<span class="token punctuation">(</span>xArr<span class="token punctuation">)</span></span>
<span class="line">    yMat <span class="token operator">=</span> mat<span class="token punctuation">(</span>yArr<span class="token punctuation">)</span><span class="token punctuation">.</span>T</span>
<span class="line">    <span class="token comment"># 矩阵乘法的条件是左矩阵的列数等于右矩阵的行数</span></span>
<span class="line">    xTx <span class="token operator">=</span> xMat<span class="token punctuation">.</span>T <span class="token operator">*</span> xMat</span>
<span class="line">    <span class="token comment"># 因为要用到xTx的逆矩阵，所以事先需要确定计算得到的xTx是否可逆，条件是矩阵的行列式不为0</span></span>
<span class="line">    <span class="token comment"># linalg.det() 函数是用来求得矩阵的行列式的，如果矩阵的行列式为0，则这个矩阵是不可逆的，就无法进行接下来的运算</span></span>
<span class="line">    <span class="token keyword">if</span> linalg<span class="token punctuation">.</span>det<span class="token punctuation">(</span>xTx<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0.0</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"This matrix is singular, cannot do inverse"</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">return</span></span>
<span class="line">    <span class="token comment"># 最小二乘法</span></span>
<span class="line">    <span class="token comment"># http://cwiki.apachecn.org/pages/viewpage.action?pageId=5505133</span></span>
<span class="line">    <span class="token comment"># 书中的公式，求得w的最优解</span></span>
<span class="line">    ws <span class="token operator">=</span> xTx<span class="token punctuation">.</span>I <span class="token operator">*</span> <span class="token punctuation">(</span>xMat<span class="token punctuation">.</span>T <span class="token operator">*</span> yMat<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> ws</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-sklearn-示例代码" tabindex="-1"><a class="header-anchor" href="#_3-sklearn-示例代码"><span>(3) sklearn 示例代码</span></a></h3>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>linear_model <span class="token keyword">import</span> LinearRegression</span>
<span class="line"><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 构造数据</span></span>
<span class="line">X <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">y <span class="token operator">=</span> np<span class="token punctuation">.</span>dot<span class="token punctuation">(</span>X<span class="token punctuation">,</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">3</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 初始化线性回归模型</span></span>
<span class="line">model <span class="token operator">=</span> LinearRegression<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 训练模型</span></span>
<span class="line">model<span class="token punctuation">.</span>fit<span class="token punctuation">(</span>X<span class="token punctuation">,</span> y<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 预测新的数据</span></span>
<span class="line">X_test <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">y_pred <span class="token operator">=</span> model<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>X_test<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>y_pred<span class="token punctuation">)</span>  <span class="token comment"># 输出预测结果</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、局部加权线性回归-lwlr" tabindex="-1"><a class="header-anchor" href="#_2、局部加权线性回归-lwlr"><span>2、局部加权线性回归(LWLR)</span></a></h2>
<h3 id="_1-算法介绍-1" tabindex="-1"><a class="header-anchor" href="#_1-算法介绍-1"><span>(1) 算法介绍</span></a></h3>
<p><img src="@source/ml/traditional_ml/img_19.png" alt="img_19.png"></p>
<p><img src="@source/ml/traditional_ml/img_20.png" alt="img_20.png"></p>
<h3 id="_2-源码分析" tabindex="-1"><a class="header-anchor" href="#_2-源码分析"><span>(2) 源码分析</span></a></h3>
<p>仍然采用和基本线性回归一样的数据集。</p>
<p><strong>程序入口</strong></p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">"__main__"</span><span class="token punctuation">:</span></span>
<span class="line">    regression2<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">def</span> <span class="token function">regression2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    xArr<span class="token punctuation">,</span> yArr <span class="token operator">=</span> loadDataSet<span class="token punctuation">(</span><span class="token string">"./data/data.txt"</span><span class="token punctuation">)</span></span>
<span class="line">    yHat <span class="token operator">=</span> lwlrTest<span class="token punctuation">(</span>xArr<span class="token punctuation">,</span> xArr<span class="token punctuation">,</span> yArr<span class="token punctuation">,</span> <span class="token number">0.01</span><span class="token punctuation">)</span></span>
<span class="line">    xMat <span class="token operator">=</span> mat<span class="token punctuation">(</span>xArr<span class="token punctuation">)</span></span>
<span class="line">    srtInd <span class="token operator">=</span> xMat<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>argsort<span class="token punctuation">(</span></span>
<span class="line">        <span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment">#argsort()函数是将x中的元素从小到大排列，提取其对应的index(索引)，然后输出</span></span>
<span class="line">    xSort <span class="token operator">=</span> xMat<span class="token punctuation">[</span>srtInd<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token punctuation">]</span></span>
<span class="line">    fig <span class="token operator">=</span> plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    ax <span class="token operator">=</span> fig<span class="token punctuation">.</span>add_subplot<span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span></span>
<span class="line">    ax<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>xSort<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> yHat<span class="token punctuation">[</span>srtInd<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    ax<span class="token punctuation">.</span>scatter<span class="token punctuation">(</span></span>
<span class="line">        <span class="token punctuation">[</span>xMat<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>flatten<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>A<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>mat<span class="token punctuation">(</span>yArr<span class="token punctuation">)</span><span class="token punctuation">.</span>T<span class="token punctuation">.</span>flatten<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>A<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        s<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">        c<span class="token operator">=</span><span class="token string">'red'</span><span class="token punctuation">)</span></span>
<span class="line">    plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>局部加权线性回归</strong></p>
<p>对数据集中的每个点进行预测</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">def</span> <span class="token function">lwlrTest</span><span class="token punctuation">(</span>testArr<span class="token punctuation">,</span> xArr<span class="token punctuation">,</span> yArr<span class="token punctuation">,</span> k<span class="token operator">=</span><span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">'''</span>
<span class="line">        Description:</span>
<span class="line">            测试局部加权线性回归，对数据集中每个点调用 lwlr() 函数</span>
<span class="line">        Args:</span>
<span class="line">            testArr: 测试所用的所有样本点</span>
<span class="line">            xArr: 样本的特征数据，即 feature</span>
<span class="line">            yArr: 每个样本对应的类别标签，即目标变量</span>
<span class="line">            k: 控制核函数的衰减速率</span>
<span class="line">        Returns:</span>
<span class="line">            yHat: 预测点的估计值</span>
<span class="line">    '''</span></span>
<span class="line">    <span class="token comment"># 得到样本点的总数</span></span>
<span class="line">    m <span class="token operator">=</span> shape<span class="token punctuation">(</span>testArr<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token comment"># 构建一个全部都是 0 的 1 * m 的矩阵</span></span>
<span class="line">    yHat <span class="token operator">=</span> zeros<span class="token punctuation">(</span>m<span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment"># 循环所有的数据点，并将lwlr运用于所有的数据点</span></span>
<span class="line">    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        yHat<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> lwlr<span class="token punctuation">(</span>testArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> xArr<span class="token punctuation">,</span> yArr<span class="token punctuation">,</span> k<span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment"># 返回估计值</span></span>
<span class="line">    <span class="token keyword">return</span> yHat</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token comment"># 局部加权线性回归</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">lwlr</span><span class="token punctuation">(</span>testPoint<span class="token punctuation">,</span> xArr<span class="token punctuation">,</span> yArr<span class="token punctuation">,</span> k<span class="token operator">=</span><span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">'''</span>
<span class="line">        Description:</span>
<span class="line">            局部加权线性回归，在待预测点附近的每个点赋予一定的权重，在子集上基于最小均方差来进行普通的回归。</span>
<span class="line">        Args:</span>
<span class="line">            testPoint: 样本点</span>
<span class="line">            xArr: 样本的特征数据，即 feature</span>
<span class="line">            yArr: 每个样本对应的类别标签，即目标变量</span>
<span class="line">            k:关于赋予权重矩阵的核的一个参数，与权重的衰减速率有关</span>
<span class="line">        Returns:</span>
<span class="line">            testPoint * ws: 数据点与具有权重的系数相乘得到的预测点</span>
<span class="line">        Notes:</span>
<span class="line">            这其中会用到计算权重的公式，w = e^((x^((i))-x) / -2k^2)</span>
<span class="line">            理解: x为某个预测点，x^((i))为样本点，样本点距离预测点越近，贡献的误差越大（权值越大），越远则贡献的误差越小（权值越小）。</span>
<span class="line">            关于预测点的选取，在我的代码中取的是样本点。其中k是带宽参数，控制w（钟形函数）的宽窄程度，类似于高斯函数的标准差。</span>
<span class="line">            算法思路: 假设预测点取样本点中的第i个样本点（共m个样本点），遍历1到m个样本点（含第i个），算出每一个样本点与预测点的距离，</span>
<span class="line">            也就可以计算出每个样本贡献误差的权值，可以看出w是一个有m个元素的向量（写成对角阵形式）。</span>
<span class="line">    '''</span></span>
<span class="line">    <span class="token comment"># mat() 函数是将array转换为矩阵的函数， mat().T 是转换为矩阵之后，再进行转置操作</span></span>
<span class="line">    xMat <span class="token operator">=</span> mat<span class="token punctuation">(</span>xArr<span class="token punctuation">)</span></span>
<span class="line">    yMat <span class="token operator">=</span> mat<span class="token punctuation">(</span>yArr<span class="token punctuation">)</span><span class="token punctuation">.</span>T</span>
<span class="line">    <span class="token comment"># 获得xMat矩阵的行数</span></span>
<span class="line">    m <span class="token operator">=</span> shape<span class="token punctuation">(</span>xMat<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token comment"># eye()返回一个对角线元素为1，其他元素为0的二维数组，创建权重矩阵weights，该矩阵为每个样本点初始化了一个权重</span></span>
<span class="line">    weights <span class="token operator">=</span> mat<span class="token punctuation">(</span>eye<span class="token punctuation">(</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token comment"># testPoint 的形式是 一个行向量的形式</span></span>
<span class="line">        <span class="token comment"># 计算 testPoint 与输入样本点之间的距离，然后下面计算出每个样本贡献误差的权值</span></span>
<span class="line">        diffMat <span class="token operator">=</span> testPoint <span class="token operator">-</span> xMat<span class="token punctuation">[</span>j<span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token punctuation">]</span></span>
<span class="line">        <span class="token comment"># k控制衰减的速度</span></span>
<span class="line">        weights<span class="token punctuation">[</span>j<span class="token punctuation">,</span> j<span class="token punctuation">]</span> <span class="token operator">=</span> exp<span class="token punctuation">(</span>diffMat <span class="token operator">*</span> diffMat<span class="token punctuation">.</span>T <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2.0</span> <span class="token operator">*</span> k<span class="token operator">**</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment"># 根据矩阵乘法计算 xTx ，其中的 weights 矩阵是样本点对应的权重矩阵</span></span>
<span class="line">    xTx <span class="token operator">=</span> xMat<span class="token punctuation">.</span>T <span class="token operator">*</span> <span class="token punctuation">(</span>weights <span class="token operator">*</span> xMat<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span> linalg<span class="token punctuation">.</span>det<span class="token punctuation">(</span>xTx<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0.0</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"This matrix is singular, cannot do inverse"</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">return</span></span>
<span class="line">    <span class="token comment"># 计算出回归系数的一个估计</span></span>
<span class="line">    ws <span class="token operator">=</span> xTx<span class="token punctuation">.</span>I <span class="token operator">*</span> <span class="token punctuation">(</span>xMat<span class="token punctuation">.</span>T <span class="token operator">*</span> <span class="token punctuation">(</span>weights <span class="token operator">*</span> yMat<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> testPoint <span class="token operator">*</span> ws</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-存在问题" tabindex="-1"><a class="header-anchor" href="#_3-存在问题"><span>(3) 存在问题</span></a></h3>
<p>对每条记录进行预测时，需要使用数据集中的全部数据，计算量极大。</p>
<h2 id="_3、岭回归-ridge-regression" tabindex="-1"><a class="header-anchor" href="#_3、岭回归-ridge-regression"><span>3、岭回归(<strong>Ridge Regression</strong>)</span></a></h2>
<p><strong>中心化和标准化</strong></p>
<p>在回归问题和一些机器学习算法中，通常要对原始数据进行中心化和标准化处理，也就是需要将数据的均值调整到0，标准差调整为1, 计算过程很简单就是将所有数据减去平均值后再除以标准差：</p>
<p><img src="@source/ml/traditional_ml/img_21.png" alt="img_21.png"></p>
<p>中心化其实就是个平移过程，将所有数据的中心平移到原点。而标准化则是使得所有数据的不同特征都有相同的尺度 Scale, 这样在使用梯度下降法以及其他方法优化的时候不同特征参数的影响程度就会一致了。</p>
<h3 id="_1-基本介绍" tabindex="-1"><a class="header-anchor" href="#_1-基本介绍"><span>(1) 基本介绍</span></a></h3>
<h4 id="_1-原理" tabindex="-1"><a class="header-anchor" href="#_1-原理"><span>1. 原理</span></a></h4>
<p><img src="@source/ml/traditional_ml/img_22.png" alt="img_22.png"></p>
<h4 id="_2-性质" tabindex="-1"><a class="header-anchor" href="#_2-性质"><span>2. 性质</span></a></h4>
<p><img src="@source/ml/traditional_ml/img_23.png" alt="img_23.png"></p>
<h4 id="_3-岭迹图" tabindex="-1"><a class="header-anchor" href="#_3-岭迹图"><span>3. 岭迹图</span></a></h4>
<p><img src="@source/ml/traditional_ml/img_25.png" alt="img_25.png"></p>
<p><img src="@source/ml/traditional_ml/img_24.png" alt="img_24.png"></p>
<h3 id="_2-源码分析-1" tabindex="-1"><a class="header-anchor" href="#_2-源码分析-1"><span>(2) 源码分析</span></a></h3>
<p><strong>数据集概述</strong></p>
<p>使用 8 个特征预测鲍鱼年龄，数据集中共 4000 多条数据。</p>
<p><img src="@source/ml/traditional_ml/img_26.png" alt="img_26.png"></p>
<p><strong>程序入口</strong></p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token comment"># test for ridgeRegression</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">regression3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    abX<span class="token punctuation">,</span> abY <span class="token operator">=</span> loadDataSet<span class="token punctuation">(</span><span class="token string">"./data/abalone.txt"</span><span class="token punctuation">)</span></span>
<span class="line">    ridgeWeights <span class="token operator">=</span> ridgeTest<span class="token punctuation">(</span>abX<span class="token punctuation">,</span> abY<span class="token punctuation">)</span></span>
<span class="line">    fig <span class="token operator">=</span> plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    ax <span class="token operator">=</span> fig<span class="token punctuation">.</span>add_subplot<span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span></span>
<span class="line">    ax<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>ridgeWeights<span class="token punctuation">)</span></span>
<span class="line">    plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">"__main__"</span><span class="token punctuation">:</span></span>
<span class="line">    regression3<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>岭回归</strong></p>
<p>选定<img src="@source/ml/traditional_ml/img_27.png" alt="img_27.png">，分别计算岭回归系数。</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">def</span> <span class="token function">ridgeRegres</span><span class="token punctuation">(</span>xMat<span class="token punctuation">,</span> yMat<span class="token punctuation">,</span> lam<span class="token operator">=</span><span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">'''</span>
<span class="line">        Desc:</span>
<span class="line">            这个函数实现了给定 lambda 下的岭回归求解。</span>
<span class="line">            如果数据的特征比样本点还多，就不能再使用上面介绍的的线性回归和局部线性回归了，因为计算 (xTx)^(-1)会出现错误。</span>
<span class="line">            如果特征比样本点还多（n > m），也就是说，输入数据的矩阵x不是满秩矩阵。非满秩矩阵在求逆时会出现问题。</span>
<span class="line">            为了解决这个问题，我们下边讲一下: 岭回归，这是我们要讲的第一种缩减方法。</span>
<span class="line">        Args:</span>
<span class="line">            xMat: 样本的特征数据，即 feature</span>
<span class="line">            yMat: 每个样本对应的类别标签，即目标变量，实际值</span>
<span class="line">            lam: 引入的一个λ值，使得矩阵非奇异</span>
<span class="line">        Returns:</span>
<span class="line">            经过岭回归公式计算得到的回归系数</span>
<span class="line">    '''</span></span>
<span class="line"></span>
<span class="line">    xTx <span class="token operator">=</span> xMat<span class="token punctuation">.</span>T <span class="token operator">*</span> xMat</span>
<span class="line">    <span class="token comment"># 岭回归就是在矩阵 xTx 上加一个 λI 从而使得矩阵非奇异，进而能对 xTx + λI 求逆</span></span>
<span class="line">    denom <span class="token operator">=</span> xTx <span class="token operator">+</span> eye<span class="token punctuation">(</span>shape<span class="token punctuation">(</span>xMat<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">*</span> lam</span>
<span class="line">    <span class="token comment"># 检查行列式是否为零，即矩阵是否可逆，行列式为0的话就不可逆，不为0的话就是可逆。</span></span>
<span class="line">    <span class="token keyword">if</span> linalg<span class="token punctuation">.</span>det<span class="token punctuation">(</span>denom<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0.0</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"This matrix is singular, cannot do inverse"</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">return</span></span>
<span class="line">    ws <span class="token operator">=</span> denom<span class="token punctuation">.</span>I <span class="token operator">*</span> <span class="token punctuation">(</span>xMat<span class="token punctuation">.</span>T <span class="token operator">*</span> yMat<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> ws</span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">ridgeTest</span><span class="token punctuation">(</span>xArr<span class="token punctuation">,</span> yArr<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">'''</span>
<span class="line">        Desc:</span>
<span class="line">            函数 ridgeTest() 用于在一组 λ 上测试结果</span>
<span class="line">        Args:</span>
<span class="line">            xArr: 样本数据的特征，即 feature</span>
<span class="line">            yArr: 样本数据的类别标签，即真实数据</span>
<span class="line">        Returns:</span>
<span class="line">            wMat: 将所有的回归系数输出到一个矩阵并返回</span>
<span class="line">    '''</span></span>
<span class="line"></span>
<span class="line">    xMat <span class="token operator">=</span> mat<span class="token punctuation">(</span>xArr<span class="token punctuation">)</span></span>
<span class="line">    yMat <span class="token operator">=</span> mat<span class="token punctuation">(</span>yArr<span class="token punctuation">)</span><span class="token punctuation">.</span>T</span>
<span class="line">    <span class="token comment"># 计算Y的均值</span></span>
<span class="line">    yMean <span class="token operator">=</span> mean<span class="token punctuation">(</span>yMat<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment"># Y的所有的特征减去均值</span></span>
<span class="line">    yMat <span class="token operator">=</span> yMat <span class="token operator">-</span> yMean</span>
<span class="line">    <span class="token comment"># 标准化 x，计算 xMat 平均值</span></span>
<span class="line">    xMeans <span class="token operator">=</span> mean<span class="token punctuation">(</span>xMat<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment"># 然后计算 X的方差</span></span>
<span class="line">    xVar <span class="token operator">=</span> var<span class="token punctuation">(</span>xMat<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment"># 所有特征都减去各自的均值并除以方差</span></span>
<span class="line">    xMat <span class="token operator">=</span> <span class="token punctuation">(</span>xMat <span class="token operator">-</span> xMeans<span class="token punctuation">)</span> <span class="token operator">/</span> xVar</span>
<span class="line">    <span class="token comment"># 可以在 30 个不同的 lambda 下调用 ridgeRegres() 函数。</span></span>
<span class="line">    numTestPts <span class="token operator">=</span> <span class="token number">30</span></span>
<span class="line">    <span class="token comment"># 创建30 * m 的全部数据为0 的矩阵</span></span>
<span class="line">    wMat <span class="token operator">=</span> zeros<span class="token punctuation">(</span><span class="token punctuation">(</span>numTestPts<span class="token punctuation">,</span> shape<span class="token punctuation">(</span>xMat<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>numTestPts<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token comment"># exp() 返回 e^x</span></span>
<span class="line">        ws <span class="token operator">=</span> ridgeRegres<span class="token punctuation">(</span>xMat<span class="token punctuation">,</span> yMat<span class="token punctuation">,</span> exp<span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">        wMat<span class="token punctuation">[</span>i<span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token punctuation">]</span> <span class="token operator">=</span> ws<span class="token punctuation">.</span>T</span>
<span class="line">    <span class="token keyword">return</span> wMat</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-sklearn-中的岭回归" tabindex="-1"><a class="header-anchor" href="#_3-sklearn-中的岭回归"><span>(3) sklearn 中的岭回归</span></a></h3>
<p><img src="@source/ml/traditional_ml/img_28.png" alt="img_28.png"></p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>linear_model <span class="token keyword">import</span> Ridge</span>
<span class="line"><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>model_selection <span class="token keyword">import</span> train_test_split</span>
<span class="line"><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>metrics <span class="token keyword">import</span> mean_squared_error</span>
<span class="line"><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>datasets <span class="token keyword">import</span> load_boston</span>
<span class="line"><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 加载波士顿房价数据集</span></span>
<span class="line">boston <span class="token operator">=</span> load_boston<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 将数据集分为训练集和测试集</span></span>
<span class="line">X_train<span class="token punctuation">,</span> X_test<span class="token punctuation">,</span> y_train<span class="token punctuation">,</span> y_test <span class="token operator">=</span> train_test_split<span class="token punctuation">(</span>boston<span class="token punctuation">.</span>data<span class="token punctuation">,</span> boston<span class="token punctuation">.</span>target<span class="token punctuation">,</span> test_size<span class="token operator">=</span><span class="token number">0.2</span><span class="token punctuation">,</span> random_state<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建一个岭回归模型</span></span>
<span class="line">ridge <span class="token operator">=</span> Ridge<span class="token punctuation">(</span>alpha<span class="token operator">=</span><span class="token number">1.0</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 在训练数据上拟合模型</span></span>
<span class="line">ridge<span class="token punctuation">.</span>fit<span class="token punctuation">(</span>X_train<span class="token punctuation">,</span> y_train<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 在测试数据上预测</span></span>
<span class="line">y_pred <span class="token operator">=</span> ridge<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>X_test<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 计算均方误差</span></span>
<span class="line">mse <span class="token operator">=</span> mean_squared_error<span class="token punctuation">(</span>y_test<span class="token punctuation">,</span> y_pred<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Mean squared error: "</span><span class="token punctuation">,</span> mse<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、lasso-方法" tabindex="-1"><a class="header-anchor" href="#_4、lasso-方法"><span>4、LASSO 方法</span></a></h2>
<h3 id="_1-基本介绍-1" tabindex="-1"><a class="header-anchor" href="#_1-基本介绍-1"><span>(1) 基本介绍</span></a></h3>
<p><img src="@source/ml/traditional_ml/img_29.png" alt="img_29.png"></p>
<p><img src="@source/ml/traditional_ml/img_30.png" alt="img_30.png"></p>
<h3 id="_2-sklearn-lasso-回归示例代码" tabindex="-1"><a class="header-anchor" href="#_2-sklearn-lasso-回归示例代码"><span>(2) sklearn lasso 回归示例代码</span></a></h3>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>linear_model <span class="token keyword">import</span> Lasso</span>
<span class="line"><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>datasets <span class="token keyword">import</span> load_boston</span>
<span class="line"><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>model_selection <span class="token keyword">import</span> train_test_split</span>
<span class="line"><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>metrics <span class="token keyword">import</span> mean_squared_error</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 加载波士顿房价数据集</span></span>
<span class="line">boston <span class="token operator">=</span> load_boston<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">X<span class="token punctuation">,</span> y <span class="token operator">=</span> boston<span class="token punctuation">.</span>data<span class="token punctuation">,</span> boston<span class="token punctuation">.</span>target</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 将数据集分成训练集和测试集</span></span>
<span class="line">X_train<span class="token punctuation">,</span> X_test<span class="token punctuation">,</span> y_train<span class="token punctuation">,</span> y_test <span class="token operator">=</span> train_test_split<span class="token punctuation">(</span>X<span class="token punctuation">,</span> y<span class="token punctuation">,</span> test_size<span class="token operator">=</span><span class="token number">0.2</span><span class="token punctuation">,</span> random_state<span class="token operator">=</span><span class="token number">42</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建Lasso回归模型</span></span>
<span class="line">lasso <span class="token operator">=</span> Lasso<span class="token punctuation">(</span>alpha<span class="token operator">=</span><span class="token number">0.1</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 训练模型</span></span>
<span class="line">lasso<span class="token punctuation">.</span>fit<span class="token punctuation">(</span>X_train<span class="token punctuation">,</span> y_train<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 对测试集进行预测</span></span>
<span class="line">y_pred <span class="token operator">=</span> lasso<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>X_test<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 计算均方误差（Mean Squared Error, MSE）</span></span>
<span class="line">mse <span class="token operator">=</span> mean_squared_error<span class="token punctuation">(</span>y_test<span class="token punctuation">,</span> y_pred<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"均方误差（MSE）："</span><span class="token punctuation">,</span> mse<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


