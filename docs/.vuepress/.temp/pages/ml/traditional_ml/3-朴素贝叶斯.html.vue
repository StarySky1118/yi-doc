<template><div><h1 id="三、朴素贝叶斯" tabindex="-1"><a class="header-anchor" href="#三、朴素贝叶斯"><span>三、朴素贝叶斯</span></a></h1>
<h2 id="_1、算法简介" tabindex="-1"><a class="header-anchor" href="#_1、算法简介"><span>1、算法简介</span></a></h2>
<p>朴素贝叶斯算法是一种基于贝叶斯定理的分类算法。它假设特征之间是<strong>相互独立</strong>的（朴素假设），并且通过统计样本中特征与类别之间的关系，来计算一个样本属于每个类别的概率，选择概率最大的类别作为样本所属的类别。</p>
<p>推导：</p>
<p><img src="@source/ml/traditional_ml/img_13.png" alt="img_13.png"></p>
<h2 id="_2、代码实战" tabindex="-1"><a class="header-anchor" href="#_2、代码实战"><span>2、代码实战</span></a></h2>
<h3 id="_1-屏蔽社区留言板中的侮辱性言论" tabindex="-1"><a class="header-anchor" href="#_1-屏蔽社区留言板中的侮辱性言论"><span>(1) 屏蔽社区留言板中的侮辱性言论</span></a></h3>
<h4 id="_1-项目概述和数据集概述" tabindex="-1"><a class="header-anchor" href="#_1-项目概述和数据集概述"><span>1. 项目概述和数据集概述</span></a></h4>
<p>数据集和标签创建如下：</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">def</span> <span class="token function">loadDataSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">"""</span>
<span class="line">    创建数据集</span>
<span class="line">    :return: 单词列表postingList, 所属类别classVec</span>
<span class="line">    """</span></span>
<span class="line">    postingList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">'my'</span><span class="token punctuation">,</span> <span class="token string">'dog'</span><span class="token punctuation">,</span> <span class="token string">'has'</span><span class="token punctuation">,</span> <span class="token string">'flea'</span><span class="token punctuation">,</span> <span class="token string">'problems'</span><span class="token punctuation">,</span> <span class="token string">'help'</span><span class="token punctuation">,</span> <span class="token string">'please'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">#[0,0,1,1,1......]</span></span>
<span class="line">                   <span class="token punctuation">[</span><span class="token string">'maybe'</span><span class="token punctuation">,</span> <span class="token string">'not'</span><span class="token punctuation">,</span> <span class="token string">'take'</span><span class="token punctuation">,</span> <span class="token string">'him'</span><span class="token punctuation">,</span> <span class="token string">'to'</span><span class="token punctuation">,</span> <span class="token string">'dog'</span><span class="token punctuation">,</span> <span class="token string">'park'</span><span class="token punctuation">,</span> <span class="token string">'stupid'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                   <span class="token punctuation">[</span><span class="token string">'my'</span><span class="token punctuation">,</span> <span class="token string">'dalmation'</span><span class="token punctuation">,</span> <span class="token string">'is'</span><span class="token punctuation">,</span> <span class="token string">'so'</span><span class="token punctuation">,</span> <span class="token string">'cute'</span><span class="token punctuation">,</span> <span class="token string">'I'</span><span class="token punctuation">,</span> <span class="token string">'love'</span><span class="token punctuation">,</span> <span class="token string">'him'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                   <span class="token punctuation">[</span><span class="token string">'stop'</span><span class="token punctuation">,</span> <span class="token string">'posting'</span><span class="token punctuation">,</span> <span class="token string">'stupid'</span><span class="token punctuation">,</span> <span class="token string">'worthless'</span><span class="token punctuation">,</span> <span class="token string">'garbage'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                   <span class="token punctuation">[</span><span class="token string">'mr'</span><span class="token punctuation">,</span> <span class="token string">'licks'</span><span class="token punctuation">,</span> <span class="token string">'ate'</span><span class="token punctuation">,</span> <span class="token string">'my'</span><span class="token punctuation">,</span> <span class="token string">'steak'</span><span class="token punctuation">,</span> <span class="token string">'how'</span><span class="token punctuation">,</span> <span class="token string">'to'</span><span class="token punctuation">,</span> <span class="token string">'stop'</span><span class="token punctuation">,</span> <span class="token string">'him'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                   <span class="token punctuation">[</span><span class="token string">'quit'</span><span class="token punctuation">,</span> <span class="token string">'buying'</span><span class="token punctuation">,</span> <span class="token string">'worthless'</span><span class="token punctuation">,</span> <span class="token string">'dog'</span><span class="token punctuation">,</span> <span class="token string">'food'</span><span class="token punctuation">,</span> <span class="token string">'stupid'</span><span class="token punctuation">]</span><span class="token punctuation">]</span></span>
<span class="line">    classVec <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>  <span class="token comment"># 1 is abusive, 0 not</span></span>
<span class="line">    <span class="token keyword">return</span> postingList<span class="token punctuation">,</span> classVec</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-具体代码" tabindex="-1"><a class="header-anchor" href="#_2-具体代码"><span>2. 具体代码</span></a></h4>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">def</span> <span class="token function">testingNB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">"""</span>
<span class="line">    测试朴素贝叶斯算法</span>
<span class="line">    """</span></span>
<span class="line">    <span class="token comment"># 1. 加载数据集</span></span>
<span class="line">    listOPosts<span class="token punctuation">,</span> listClasses <span class="token operator">=</span> loadDataSet<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment"># 2. 创建单词集合</span></span>
<span class="line">    myVocabList <span class="token operator">=</span> createVocabList<span class="token punctuation">(</span>listOPosts<span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment"># 3. 计算单词是否出现并创建数据矩阵</span></span>
<span class="line">    trainMat <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">for</span> postinDoc <span class="token keyword">in</span> listOPosts<span class="token punctuation">:</span></span>
<span class="line">        <span class="token comment"># 返回m*len(myVocabList)的矩阵， 记录的都是0，1信息</span></span>
<span class="line">        trainMat<span class="token punctuation">.</span>append<span class="token punctuation">(</span>setOfWords2Vec<span class="token punctuation">(</span>myVocabList<span class="token punctuation">,</span> postinDoc<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment"># 4. 训练数据</span></span>
<span class="line">    p0V<span class="token punctuation">,</span> p1V<span class="token punctuation">,</span> pAb <span class="token operator">=</span> trainNB0<span class="token punctuation">(</span>array<span class="token punctuation">(</span>trainMat<span class="token punctuation">)</span><span class="token punctuation">,</span> array<span class="token punctuation">(</span>listClasses<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment"># 5. 测试数据</span></span>
<span class="line">    testEntry <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'love'</span><span class="token punctuation">,</span> <span class="token string">'my'</span><span class="token punctuation">,</span> <span class="token string">'dalmation'</span><span class="token punctuation">]</span></span>
<span class="line">    thisDoc <span class="token operator">=</span> array<span class="token punctuation">(</span>setOfWords2Vec<span class="token punctuation">(</span>myVocabList<span class="token punctuation">,</span> testEntry<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span>testEntry<span class="token punctuation">,</span> <span class="token string">'classified as: '</span><span class="token punctuation">,</span> classifyNB<span class="token punctuation">(</span>thisDoc<span class="token punctuation">,</span> p0V<span class="token punctuation">,</span> p1V<span class="token punctuation">,</span> pAb<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    testEntry <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'stupid'</span><span class="token punctuation">,</span> <span class="token string">'garbage'</span><span class="token punctuation">]</span></span>
<span class="line">    thisDoc <span class="token operator">=</span> array<span class="token punctuation">(</span>setOfWords2Vec<span class="token punctuation">(</span>myVocabList<span class="token punctuation">,</span> testEntry<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span>testEntry<span class="token punctuation">,</span> <span class="token string">'classified as: '</span><span class="token punctuation">,</span> classifyNB<span class="token punctuation">(</span>thisDoc<span class="token punctuation">,</span> p0V<span class="token punctuation">,</span> p1V<span class="token punctuation">,</span> pAb<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取数据集中出现的所有单词，形成一个集合。</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">def</span> <span class="token function">createVocabList</span><span class="token punctuation">(</span>dataSet<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">"""</span>
<span class="line">    获取所有单词的集合</span>
<span class="line">    :param dataSet: 数据集</span>
<span class="line">    :return: 所有单词的集合(即不含重复元素的单词列表)</span>
<span class="line">    """</span></span>
<span class="line">    vocabSet <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># create empty set</span></span>
<span class="line">    <span class="token keyword">for</span> document <span class="token keyword">in</span> dataSet<span class="token punctuation">:</span></span>
<span class="line">        <span class="token comment"># 操作符 | 用于求两个集合的并集</span></span>
<span class="line">        vocabSet <span class="token operator">=</span> vocabSet <span class="token operator">|</span> <span class="token builtin">set</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span>  <span class="token comment"># union of the two sets</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token builtin">list</span><span class="token punctuation">(</span>vocabSet<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>形成每条留言的特征向量。</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">def</span> <span class="token function">setOfWords2Vec</span><span class="token punctuation">(</span>vocabList<span class="token punctuation">,</span> inputSet<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">"""</span>
<span class="line">    遍历查看该单词是否出现，出现该单词则将该单词置1</span>
<span class="line">    :param vocabList: 所有单词集合列表</span>
<span class="line">    :param inputSet: 输入数据集</span>
<span class="line">    :return: 匹配列表[0,1,0,1...]，其中 1与0 表示词汇表中的单词是否出现在输入的数据集中</span>
<span class="line">    """</span></span>
<span class="line">    <span class="token comment"># 创建一个和词汇表等长的向量，并将其元素都设置为0</span></span>
<span class="line">    returnVec <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token builtin">len</span><span class="token punctuation">(</span>vocabList<span class="token punctuation">)</span><span class="token comment"># [0,0......]</span></span>
<span class="line">    <span class="token comment"># 遍历文档中的所有单词，如果出现了词汇表中的单词，则将输出的文档向量中的对应值设为1</span></span>
<span class="line">    <span class="token keyword">for</span> word <span class="token keyword">in</span> inputSet<span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">if</span> word <span class="token keyword">in</span> vocabList<span class="token punctuation">:</span></span>
<span class="line">            returnVec<span class="token punctuation">[</span>vocabList<span class="token punctuation">.</span>index<span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">        <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"the word: %s is not in my Vocabulary!"</span> <span class="token operator">%</span> word<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> returnVec</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>计算相关概率</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">def</span> <span class="token function">_trainNB0</span><span class="token punctuation">(</span>trainMatrix<span class="token punctuation">,</span> trainCategory<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">"""</span>
<span class="line">    训练数据原版</span>
<span class="line">    :param trainMatrix: 文件单词矩阵 [[1,0,1,1,1....],[],[]...]</span>
<span class="line">    :param trainCategory: 文件对应的类别[0,1,1,0....]，列表长度等于单词矩阵数，其中的1代表对应的文件是侮辱性文件，0代表不是侮辱性矩阵</span>
<span class="line">    :return:</span>
<span class="line">    """</span></span>
<span class="line">    <span class="token comment"># 文件数</span></span>
<span class="line">    numTrainDocs <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>trainMatrix<span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment"># 单词数</span></span>
<span class="line">    numWords <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>trainMatrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment"># 侮辱性文件的出现概率，即trainCategory中所有的1的个数，</span></span>
<span class="line">    <span class="token comment"># 代表的就是多少个侮辱性文件，与文件的总数相除就得到了侮辱性文件的出现概率</span></span>
<span class="line">    pAbusive <span class="token operator">=</span> <span class="token builtin">sum</span><span class="token punctuation">(</span>trainCategory<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token builtin">float</span><span class="token punctuation">(</span>numTrainDocs<span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment"># 构造单词出现次数列表</span></span>
<span class="line">    p0Num <span class="token operator">=</span> zeros<span class="token punctuation">(</span>numWords<span class="token punctuation">)</span> <span class="token comment"># [0,0,0,.....]</span></span>
<span class="line">    p1Num <span class="token operator">=</span> zeros<span class="token punctuation">(</span>numWords<span class="token punctuation">)</span> <span class="token comment"># [0,0,0,.....]</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 整个数据集单词出现总数</span></span>
<span class="line">    p0Denom <span class="token operator">=</span> <span class="token number">0.0</span></span>
<span class="line">    p1Denom <span class="token operator">=</span> <span class="token number">0.0</span></span>
<span class="line">    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>numTrainDocs<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token comment"># 遍历所有的文件，如果是侮辱性文件，就计算此侮辱性文件中出现的侮辱性单词的个数</span></span>
<span class="line">        <span class="token keyword">if</span> trainCategory<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span></span>
<span class="line">            p1Num <span class="token operator">+=</span> trainMatrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token comment">#[0,1,1,....]->[0,1,1,...]</span></span>
<span class="line">            p1Denom <span class="token operator">+=</span> <span class="token builtin">sum</span><span class="token punctuation">(</span>trainMatrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token comment"># 如果不是侮辱性文件，则计算非侮辱性文件中出现的侮辱性单词的个数</span></span>
<span class="line">            p0Num <span class="token operator">+=</span> trainMatrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span></span>
<span class="line">            p0Denom <span class="token operator">+=</span> <span class="token builtin">sum</span><span class="token punctuation">(</span>trainMatrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment"># 类别1，即侮辱性文档的[P(F1|C1),P(F2|C1),P(F3|C1),P(F4|C1),P(F5|C1)....]列表</span></span>
<span class="line">    <span class="token comment"># 即 在1类别下，每个单词出现次数的占比</span></span>
<span class="line">    p1Vect <span class="token operator">=</span> p1Num <span class="token operator">/</span> p1Denom<span class="token comment"># [1,2,3,5]/90->[1/90,...]</span></span>
<span class="line">    <span class="token comment"># 类别0，即正常文档的[P(F1|C0),P(F2|C0),P(F3|C0),P(F4|C0),P(F5|C0)....]列表</span></span>
<span class="line">    <span class="token comment"># 即 在0类别下，每个单词出现次数的占比</span></span>
<span class="line">    p0Vect <span class="token operator">=</span> p0Num <span class="token operator">/</span> p0Denom</span>
<span class="line">    <span class="token keyword">return</span> p0Vect<span class="token punctuation">,</span> p1Vect<span class="token punctuation">,</span> pAbusive</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据概率结果分类</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">def</span> <span class="token function">classifyNB</span><span class="token punctuation">(</span>vec2Classify<span class="token punctuation">,</span> p0Vec<span class="token punctuation">,</span> p1Vec<span class="token punctuation">,</span> pClass1<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">"""</span>
<span class="line">    使用算法:</span>
<span class="line">        # 将乘法转换为加法</span>
<span class="line">        乘法: P(C|F1F2...Fn) = P(F1F2...Fn|C)P(C)/P(F1F2...Fn)</span>
<span class="line">        加法: P(F1|C)*P(F2|C)....P(Fn|C)P(C) -> log(P(F1|C))+log(P(F2|C))+....+log(P(Fn|C))+log(P(C))</span>
<span class="line">    :param vec2Classify: 待测数据[0,1,1,1,1...]，即要分类的向量</span>
<span class="line">    :param p0Vec: 类别0，即正常文档的[log(P(F1|C0)),log(P(F2|C0)),log(P(F3|C0)),log(P(F4|C0)),log(P(F5|C0))....]列表</span>
<span class="line">    :param p1Vec: 类别1，即侮辱性文档的[log(P(F1|C1)),log(P(F2|C1)),log(P(F3|C1)),log(P(F4|C1)),log(P(F5|C1))....]列表</span>
<span class="line">    :param pClass1: 类别1，侮辱性文件的出现概率</span>
<span class="line">    :return: 类别1 or 0</span>
<span class="line">    """</span></span>
<span class="line">    <span class="token comment"># 计算公式  log(P(F1|C))+log(P(F2|C))+....+log(P(Fn|C))+log(P(C))</span></span>
<span class="line">    <span class="token comment"># 使用 NumPy 数组来计算两个向量相乘的结果，这里的相乘是指对应元素相乘，即先将两个向量中的第一个元素相乘，然后将第2个元素相乘，以此类推。</span></span>
<span class="line">    <span class="token comment"># 我的理解是: 这里的 vec2Classify * p1Vec 的意思就是将每个词与其对应的概率相关联起来</span></span>
<span class="line">    <span class="token comment"># 可以理解为 1.单词在词汇表中的条件下，文件是good 类别的概率 也可以理解为 2.在整个空间下，文件既在词汇表中又是good类别的概率</span></span>
<span class="line">    p1 <span class="token operator">=</span> <span class="token builtin">sum</span><span class="token punctuation">(</span>vec2Classify <span class="token operator">*</span> p1Vec<span class="token punctuation">)</span> <span class="token operator">+</span> log<span class="token punctuation">(</span>pClass1<span class="token punctuation">)</span></span>
<span class="line">    p0 <span class="token operator">=</span> <span class="token builtin">sum</span><span class="token punctuation">(</span>vec2Classify <span class="token operator">*</span> p0Vec<span class="token punctuation">)</span> <span class="token operator">+</span> log<span class="token punctuation">(</span><span class="token number">1.0</span> <span class="token operator">-</span> pClass1<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span> p1 <span class="token operator">></span> p0<span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token number">0</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、sklearn-中的朴素贝叶斯分类器" tabindex="-1"><a class="header-anchor" href="#_3、sklearn-中的朴素贝叶斯分类器"><span>3、sklearn 中的朴素贝叶斯分类器</span></a></h2>
<p><strong>词袋向量/词频向量</strong>
词袋向量是一种文本表示方法，它将文本中的每个单词都看作一个特征，并根据单词在文本中出现的频率来构造一个向量。它不考虑单词出现的顺序和上下文，只关注每个单词出现的次数或者频率，因此也被称为“词频向量”。</p>
<p>词袋向量的构造过程可以分为两个步骤：</p>
<ol>
<li>
<p>词汇表构建：遍历文本数据集，统计出现的所有单词，构建一个词汇表。在 Scikit-learn 中，可以使用<code v-pre>CountVectorizer</code>类来实现词汇表构建和词袋向量化的过程。</p>
</li>
<li>
<p>向量化：将每篇文本表示成一个向量，向量的长度等于词汇表的大小，每个维度表示词汇表中的一个单词在该文本中出现的次数或者频率。在 Scikit-learn 中，可以使用<code v-pre>transform()</code>方法将文本数据集转换为词袋向量表示。</p>
</li>
</ol>
<p>词袋向量是一种简单有效的文本表示方法，广泛应用于文本分类、信息检索、自然语言处理等领域。但是，它也存在一些缺点，比如无法处理词序信息和语义信息，容易受到停用词、词形变化和拼写错误的影响等。因此，在实际应用中需要根据具体任务和数据集选择适合的文本表示方法。</p>
<p><strong>sklearn 中朴素贝叶斯分类器的种类</strong></p>
<p>在 Scikit-learn 中，朴素贝叶斯分类器包括高斯朴素贝叶斯分类器（GaussianNB）、多项式朴素贝叶斯分类器（MultinomialNB）和伯努利朴素贝叶斯分类器（BernoulliNB），它们的主要区别在于假设的概率分布不同。</p>
<ol>
<li>高斯朴素贝叶斯分类器（GaussianNB）假设特征的概率分布为高斯分布（正态分布）。</li>
<li>多项式朴素贝叶斯分类器（MultinomialNB）假设特征的概率分布为多项式分布，常用于文本分类任务中。</li>
<li>伯努利朴素贝叶斯分类器（BernoulliNB）假设特征的概率分布为伯努利分布，即特征只有两种取值（例如文本分类任务中，每个词要么出现要么不出现）。</li>
</ol>
<p>因此，在选择朴素贝叶斯分类器时，需要根据具体的问题和数据特点选择适当的分类器。例如，在文本分类问题中，通常使用多项式朴素贝叶斯分类器或伯努利朴素贝叶斯分类器，而在连续特征的分类问题中，通常使用高斯朴素贝叶斯分类器。</p>
<h3 id="_1-示例代码" tabindex="-1"><a class="header-anchor" href="#_1-示例代码"><span>(1) 示例代码</span></a></h3>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>naive_bayes <span class="token keyword">import</span> MultinomialNB</span>
<span class="line"><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>feature_extraction<span class="token punctuation">.</span>text <span class="token keyword">import</span> CountVectorizer</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建文本数据</span></span>
<span class="line">corpus <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'This is the first document.'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string">'This is the second second document.'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string">'And the third one.'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string">'Is this the first document?'</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 将文本数据转化为数值特征</span></span>
<span class="line">vectorizer <span class="token operator">=</span> CountVectorizer<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">X <span class="token operator">=</span> vectorizer<span class="token punctuation">.</span>fit_transform<span class="token punctuation">(</span>corpus<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建标签</span></span>
<span class="line">y <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建朴素贝叶斯分类器</span></span>
<span class="line">clf <span class="token operator">=</span> MultinomialNB<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 训练分类器</span></span>
<span class="line">clf<span class="token punctuation">.</span>fit<span class="token punctuation">(</span>X<span class="token punctuation">,</span> y<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 预测新的文本</span></span>
<span class="line">new_doc <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'This is the fourth document.'</span><span class="token punctuation">]</span></span>
<span class="line">X_new <span class="token operator">=</span> vectorizer<span class="token punctuation">.</span>transform<span class="token punctuation">(</span>new_doc<span class="token punctuation">)</span></span>
<span class="line">predicted <span class="token operator">=</span> clf<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>X_new<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>predicted<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


