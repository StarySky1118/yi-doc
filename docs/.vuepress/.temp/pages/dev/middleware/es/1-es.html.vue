<template><div><h1 id="分布式搜索" tabindex="-1"><a class="header-anchor" href="#分布式搜索"><span>分布式搜索</span></a></h1>
<h2 id="_1、elasticsearch-介绍" tabindex="-1"><a class="header-anchor" href="#_1、elasticsearch-介绍"><span>1、ElasticSearch 介绍</span></a></h2>
<h3 id="_1-es-和-elk" tabindex="-1"><a class="header-anchor" href="#_1-es-和-elk"><span>(1) ES 和 ELK</span></a></h3>
<p>Elasticsearch 是一款非常强大的开源搜索引擎，可以帮助我们从海量数据中快速找到需要的内容。
Elasticsearch 结合 kibana、Logstash、Beats，也就是 Elastic stack（ELK）。被广泛应用在日志数据分析、实时监控等领域。
Elasticsearch 是 elastic stack 的核心，负责存储、搜索、分析数据。
<img src="@source/dev/middleware/es/img.png" alt="img.png"></p>
<h3 id="_2-倒排索引" tabindex="-1"><a class="header-anchor" href="#_2-倒排索引"><span>(2) 倒排索引</span></a></h3>
<p>相关概念：</p>
<ul>
<li>文档(document)：每条记录就是一个文档。</li>
<li>词条(term)：文档按语义分成的词语。</li>
</ul>
<p>正向索引：传统数据库(MySQL)采用，基于文档 id 创建索引。查询词条时必须先找到文档，而后判断是否包含词条。</p>
<p><img src="@source/dev/middleware/es/img_1.png" alt="img_1.png"></p>
<p>倒排索引：对文档内容分词，对词条创建索引，并记录词条所在文档的信息。查询时先根据词条查询到文档 id，而后获取到文档。</p>
<p><img src="@source/dev/middleware/es/img_2.png" alt="img_2.png"></p>
<h3 id="_3-mysql-与-es" tabindex="-1"><a class="header-anchor" href="#_3-mysql-与-es"><span>(3) MySQL 与 ES</span></a></h3>
<p>概念对比
<img src="@source/dev/middleware/es/img_3.png" alt="img_3.png">
MySQL 更擅长事务类型操作，可以确保数据的安全和一致性；
Elasticsearch 擅长海量数据的搜索、分析、计算。
<img src="@source/dev/middleware/es/img_4.png" alt="img_4.png"></p>
<h3 id="_4-安装-es、kibana" tabindex="-1"><a class="header-anchor" href="#_4-安装-es、kibana"><span>(4) 安装 ES、kibana</span></a></h3>
<p>因为还需要部署 kibana 容器，因此需要让 es 和 kibana 容器互联。这里先创建一个网络：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">docker</span> network create es-net</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="安装-es" tabindex="-1"><a class="header-anchor" href="#安装-es"><span>安装 ES</span></a></h4>
<p>拉取镜像：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">docker</span> pull elasticsearch:7.12.1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>创建容器</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">docker run <span class="token operator">-</span>d \</span>
<span class="line">	<span class="token operator">--</span>name es \</span>
<span class="line">    <span class="token operator">-</span>e <span class="token string">"ES_JAVA_OPTS=-Xms512m -Xmx512m"</span> \</span>
<span class="line">    <span class="token operator">-</span>e <span class="token string">"discovery.type=single-node"</span> \</span>
<span class="line">    <span class="token operator">-</span>v es<span class="token operator">-</span>data<span class="token operator">:</span><span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>elasticsearch<span class="token operator">/</span>data \</span>
<span class="line">    <span class="token operator">-</span>v es<span class="token operator">-</span>plugins<span class="token operator">:</span><span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>elasticsearch<span class="token operator">/</span>plugins \</span>
<span class="line">    <span class="token operator">--</span>privileged \</span>
<span class="line">    <span class="token operator">--</span>network es<span class="token operator">-</span>net \</span>
<span class="line">    <span class="token operator">-</span>p <span class="token number">9200</span><span class="token operator">:</span><span class="token number">9200</span> \</span>
<span class="line">    <span class="token operator">-</span>p <span class="token number">9300</span><span class="token operator">:</span><span class="token number">9300</span> \</span>
<span class="line">elasticsearch<span class="token operator">:</span><span class="token number">7.12</span><span class="token number">.1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令解释：</p>
<ul>
<li>-e &quot;cluster.name=es-docker-cluster&quot;：设置集群名称</li>
<li>-e &quot;http.host=0.0.0.0&quot;：监听的地址，可以外网访问</li>
<li>-e &quot;ES_JAVA_OPTS=-Xms512m -Xmx512m&quot;：内存大小</li>
<li>-e &quot;discovery.type=single-node&quot;：非集群模式</li>
<li>-v es-data:/usr/share/elasticsearch/data：挂载逻辑卷，绑定es的数据目录</li>
<li>-v es-logs:/usr/share/elasticsearch/logs：挂载逻辑卷，绑定es的日志目录</li>
<li>-v es-plugins:/usr/share/elasticsearch/plugins：挂载逻辑卷，绑定es的插件目录</li>
<li>--privileged：授予逻辑卷访问权</li>
<li>--network es-net ：加入一个名为es-net的网络中</li>
<li>-p 9200:9200：端口映射配置</li>
</ul>
<p>在浏览器中输入：http://ip:9200 即可看到 elasticsearch 的响应结果：
<img src="@source/dev/middleware/es/img_5.png" alt="img_5.png"></p>
<h4 id="安装-kibana" tabindex="-1"><a class="header-anchor" href="#安装-kibana"><span>安装 Kibana</span></a></h4>
<p>拉取镜像：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">docker</span> pull kibana:7.12.1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>创建并启动容器：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\</span></span>
<span class="line"><span class="token parameter variable">--name</span> kibana <span class="token punctuation">\</span></span>
<span class="line"><span class="token parameter variable">-e</span> <span class="token assign-left variable">ELASTICSEARCH_HOSTS</span><span class="token operator">=</span>http://es:9200 <span class="token punctuation">\</span></span>
<span class="line"><span class="token parameter variable">--network</span><span class="token operator">=</span>es-net <span class="token punctuation">\</span></span>
<span class="line"><span class="token parameter variable">-p</span> <span class="token number">5601</span>:5601  <span class="token punctuation">\</span></span>
<span class="line">kibana:7.12.1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>--network es-net</code> ：加入一个名为es-net的网络中，与elasticsearch在同一个网络中</li>
<li><code v-pre>-e ELASTICSEARCH_HOSTS=http://es:9200&quot;</code>：设置elasticsearch的地址，因为kibana已经与elasticsearch在一个网络，因此可以用容器名直接访问elasticsearch</li>
<li><code v-pre>-p 5601:5601</code>：端口映射配置</li>
</ul>
<p>kibana 启动一般比较慢，需要多等待一会，可以通过命令：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">docker</span> logs <span class="token parameter variable">-f</span> kibana</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>查看运行日志，当查看到下面的日志，说明成功：
<img src="@source/dev/middleware/es/img_6.png" alt="img_6.png">
访问浏览器：http://192.168.18.129:5601，出现如下界面：
<img src="@source/dev/middleware/es/img_7.png" alt="img_7.png"></p>
<h4 id="安装-ik-分词器" tabindex="-1"><a class="header-anchor" href="#安装-ik-分词器"><span>安装 ik 分词器</span></a></h4>
<p>ES 默认分词对中文不友好。</p>
<ol>
<li>查看数据卷目录</li>
</ol>
<p>安装插件需要知道elasticsearch的plugins目录位置，而我们用了数据卷挂载，因此需要查看elasticsearch的数据卷目录，通过下面命令查看：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">docker</span> volume inspect es-plugins</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>显示结果：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">"CreatedAt"</span><span class="token builtin class-name">:</span> <span class="token string">"2022-05-06T10:06:34+08:00"</span>,</span>
<span class="line">        <span class="token string">"Driver"</span><span class="token builtin class-name">:</span> <span class="token string">"local"</span>,</span>
<span class="line">        <span class="token string">"Labels"</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">        <span class="token string">"Mountpoint"</span><span class="token builtin class-name">:</span> <span class="token string">"/var/lib/docker/volumes/es-plugins/_data"</span>,</span>
<span class="line">        <span class="token string">"Name"</span><span class="token builtin class-name">:</span> <span class="token string">"es-plugins"</span>,</span>
<span class="line">        <span class="token string">"Options"</span><span class="token builtin class-name">:</span> null,</span>
<span class="line">        <span class="token string">"Scope"</span><span class="token builtin class-name">:</span> <span class="token string">"local"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>解压分词器安装包</li>
</ol>
<p><img src="@source/dev/middleware/es/img_8.png" alt="img_8.png"></p>
<ol start="3">
<li>上传到 es 容器的插件数据卷中</li>
</ol>
<p>也就是<code v-pre>/var/lib/docker/volumes/es-plugins/_data</code>：
<img src="@source/dev/middleware/es/img_9.png" alt="img_9.png"></p>
<ol start="4">
<li>重启容器</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 4、重启容器</span></span>
<span class="line"><span class="token function">docker</span> restart es</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看es日志</span></span>
<span class="line"><span class="token function">docker</span> logs <span class="token parameter variable">-f</span> es</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>IK分词器包含两种模式：</p>
<ul>
<li><code v-pre>ik_smart</code>：最少切分</li>
<li><code v-pre>ik_max_word</code>：最细切分</li>
</ul>
<p>使用测试如下：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">POST /_analyze</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"analyzer"</span><span class="token operator">:</span> <span class="token string">"ik_smart"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"text"</span><span class="token operator">:</span> <span class="token string">"任何邪恶终将绳之以法！"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"tokens"</span> <span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"token"</span> <span class="token operator">:</span> <span class="token string">"任何"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"start_offset"</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"end_offset"</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"type"</span> <span class="token operator">:</span> <span class="token string">"CN_WORD"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"position"</span> <span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"token"</span> <span class="token operator">:</span> <span class="token string">"邪恶"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"start_offset"</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"end_offset"</span> <span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"type"</span> <span class="token operator">:</span> <span class="token string">"CN_WORD"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"position"</span> <span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"token"</span> <span class="token operator">:</span> <span class="token string">"终将"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"start_offset"</span> <span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"end_offset"</span> <span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"type"</span> <span class="token operator">:</span> <span class="token string">"CN_WORD"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"position"</span> <span class="token operator">:</span> <span class="token number">2</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"token"</span> <span class="token operator">:</span> <span class="token string">"绳之以法"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"start_offset"</span> <span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"end_offset"</span> <span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"type"</span> <span class="token operator">:</span> <span class="token string">"CN_WORD"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"position"</span> <span class="token operator">:</span> <span class="token number">3</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-ik-分词器配置" tabindex="-1"><a class="header-anchor" href="#_5-ik-分词器配置"><span>(5) IK 分词器配置</span></a></h3>
<p>可以向 IK 分词器中添加或删除词汇。
要拓展 IK 分词器的词库，只需要修改一个 IK 分词器目录中的 config 目录中的<code v-pre>IkAnalyzer.cfg.xml</code>文件：</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre v-pre><code><span class="line"><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span></span>
<span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">properties</span> <span class="token name">SYSTEM</span> <span class="token string">"http://java.sun.com/dtd/properties.dtd"</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>comment</span><span class="token punctuation">></span></span>IK Analyzer 扩展配置<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>comment</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token comment">&lt;!--用户可以在这里配置自己的扩展字典 --></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>entry</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ext_dict<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>ext.dic<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>entry</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token comment">&lt;!--用户可以在这里配置自己的扩展停止词字典--></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>entry</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ext_stopwords<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>stopword.dic<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>entry</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token comment">&lt;!--用户可以在这里配置远程扩展字典 --></span></span>
<span class="line">  <span class="token comment">&lt;!-- &lt;entry key="remote_ext_dict">words_location&lt;/entry> --></span></span>
<span class="line">  <span class="token comment">&lt;!--用户可以在这里配置远程扩展停止词字典--></span></span>
<span class="line">  <span class="token comment">&lt;!-- &lt;entry key="remote_ext_stopwords">words_location&lt;/entry> --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在名为<code v-pre>ext.dic</code>的文件中，添加想要拓展的词语即可。
在名为<code v-pre>stopword.dic</code>的文件中，添加想要删除的词语即可。</p>
<h2 id="_2、索引库-表-操作" tabindex="-1"><a class="header-anchor" href="#_2、索引库-表-操作"><span>2、索引库(表)操作</span></a></h2>
<h3 id="_1-mapping" tabindex="-1"><a class="header-anchor" href="#_1-mapping"><span>(1) Mapping</span></a></h3>
<p><img src="@source/dev/middleware/es/img_10.png" alt="img_10.png"></p>
<h3 id="_2-增删改查" tabindex="-1"><a class="header-anchor" href="#_2-增删改查"><span>(2) 增删改查</span></a></h3>
<h4 id="增" tabindex="-1"><a class="header-anchor" href="#增"><span>增</span></a></h4>
<p>ES 中通过 Restful 请求操作索引库、文档。请求内容用 DSL 语句来表示。创建索引库和 mapping 的 DSL 示例代码如下：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">PUT /zzy</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"mappings"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"properties"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"info"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"text"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"analyzer"</span><span class="token operator">:</span> <span class="token string">"ik_smart"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"email"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"keyword"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"index"</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"properties"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"firstName"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"keyword"</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"lastName"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"keyword"</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查" tabindex="-1"><a class="header-anchor" href="#查"><span>查</span></a></h4>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">GET /zzy</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="删" tabindex="-1"><a class="header-anchor" href="#删"><span>删</span></a></h4>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">DELETE /zzy</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="改" tabindex="-1"><a class="header-anchor" href="#改"><span>改</span></a></h4>
<p>索引库和 mapping 一旦创建无法修改，只能增加字段，使用案例：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">PUT /zzy/_mapping</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"properties"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"age"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"integer"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、文档-记录-操作" tabindex="-1"><a class="header-anchor" href="#_3、文档-记录-操作"><span>3、文档(记录)操作</span></a></h2>
<h3 id="_1-增删改查" tabindex="-1"><a class="header-anchor" href="#_1-增删改查"><span>(1) 增删改查</span></a></h3>
<h4 id="增-1" tabindex="-1"><a class="header-anchor" href="#增-1"><span>增</span></a></h4>
<p>新增文档的 DSL 语法如下：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">POST /索引库名/_doc/文档id</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"字段1"</span><span class="token operator">:</span> <span class="token string">"值1"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"字段2"</span><span class="token operator">:</span> <span class="token string">"值2"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"字段3"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"子属性1"</span><span class="token operator">:</span> <span class="token string">"值3"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"子属性2"</span><span class="token operator">:</span> <span class="token string">"值4"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用案例：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">POST /zzy/_doc/<span class="token number">1</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"age"</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"Xiabeize@qq.com"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"info"</span><span class="token operator">:</span> <span class="token string">"下北泽最臭的田所"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"firstName"</span><span class="token operator">:</span> <span class="token string">"浩二"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"lastName"</span><span class="token operator">:</span> <span class="token string">"田所"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查-1" tabindex="-1"><a class="header-anchor" href="#查-1"><span>查</span></a></h4>
<p>查询文档语法：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">GET /索引库名/_doc/文档id </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>使用案例：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">GET /zzy/_doc/<span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="删-1" tabindex="-1"><a class="header-anchor" href="#删-1"><span>删</span></a></h4>
<p>删除文档语法：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">DELETE /索引库名/_doc/文档id </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>使用案例：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">DELETE /zzy/_doc/<span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="改-1" tabindex="-1"><a class="header-anchor" href="#改-1"><span>改</span></a></h4>
<p>全量修改</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"># 语法</span>
<span class="line">PUT /索引库名/_doc/文档id</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"字段1"</span><span class="token operator">:</span> <span class="token string">"值1"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"字段2"</span><span class="token operator">:</span> <span class="token string">"值2"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// ... 略</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"># 使用案例</span>
<span class="line">PUT /zzy/_doc/<span class="token number">1</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"age"</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"Xiabeize@qq.com"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"info"</span><span class="token operator">:</span> <span class="token string">"下北泽最臭的田所"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"firstName"</span><span class="token operator">:</span> <span class="token string">"浩二"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"lastName"</span><span class="token operator">:</span> <span class="token string">"田所"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>增量修改</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"># 语法</span>
<span class="line">POST /索引库名/_update/文档id</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"doc"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">         <span class="token property">"字段名"</span><span class="token operator">:</span> <span class="token string">"新的值"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"># 使用案例</span>
<span class="line">POST /zzy/_update/<span class="token number">1</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"doc"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"24211@163.com"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、restclient-操作索引库" tabindex="-1"><a class="header-anchor" href="#_4、restclient-操作索引库"><span>4、RestClient 操作索引库</span></a></h2>
<p>ES 官方提供了各种不同语言的客户端，用来操作 ES。这些客户端的本质就是组装 DSL 语句，通过 http 请求发送给 ES。</p>
<h3 id="_1-依赖引入与测试代码" tabindex="-1"><a class="header-anchor" href="#_1-依赖引入与测试代码"><span>(1) 依赖引入与测试代码</span></a></h3>
<p>引入依赖：</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre v-pre><code><span class="line"><span class="token comment">&lt;!--es依赖--></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.elasticsearch.client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>elasticsearch-rest-high-level-client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要覆盖默认的 ES 版本：</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>java.version</span><span class="token punctuation">></span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>java.version</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>elasticsearch.version</span><span class="token punctuation">></span></span>7.12.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>elasticsearch.version</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试代码：</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@SpringBootTest</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">HotelDemoApplicationTests</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">RestHighLevelClient</span> client<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>client<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@BeforeEach</span></span>
<span class="line">    <span class="token keyword">void</span> <span class="token function">setUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RestHighLevelClient</span><span class="token punctuation">(</span><span class="token class-name">RestClient</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span></span>
<span class="line">                <span class="token class-name">HttpHost</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">"http://192.168.18.129:9200"</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@AfterEach</span></span>
<span class="line">    <span class="token keyword">void</span> <span class="token function">tearDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line">        client<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-创建索引库" tabindex="-1"><a class="header-anchor" href="#_2-创建索引库"><span>(2) 创建索引库</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">    <span class="token comment">// 创建索引库</span></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">createIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 创建请求对象 -- PUT</span></span>
<span class="line">        <span class="token class-name">CreateIndexRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CreateIndexRequest</span><span class="token punctuation">(</span><span class="token string">"hotel"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 请求参数</span></span>
<span class="line">        request<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token constant">MAPPING_TEMPLATE</span><span class="token punctuation">,</span> <span class="token class-name">XContentType</span><span class="token punctuation">.</span><span class="token constant">JSON</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 发起请求</span></span>
<span class="line">        client<span class="token punctuation">.</span><span class="token function">indices</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-删除索引库" tabindex="-1"><a class="header-anchor" href="#_3-删除索引库"><span>(3) 删除索引库</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">    <span class="token comment">// 删除索引库</span></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deleteIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 创建请求对象 -- DELETE</span></span>
<span class="line">        <span class="token class-name">DeleteIndexRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DeleteIndexRequest</span><span class="token punctuation">(</span><span class="token string">"hotel"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 发起请求</span></span>
<span class="line">        client<span class="token punctuation">.</span><span class="token function">indices</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-判断索引库是否存在" tabindex="-1"><a class="header-anchor" href="#_4-判断索引库是否存在"><span>(4) 判断索引库是否存在</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">    <span class="token comment">// 判断索引库是否存在</span></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">indexExist</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 创建请求对象</span></span>
<span class="line">        <span class="token class-name">GetIndexRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GetIndexRequest</span><span class="token punctuation">(</span><span class="token string">"hotel"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 发起请求</span></span>
<span class="line">        <span class="token keyword">boolean</span> exists <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">indices</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>exists<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、restclient-操作文档" tabindex="-1"><a class="header-anchor" href="#_5、restclient-操作文档"><span>5、RestClient 操作文档</span></a></h2>
<h3 id="_1-新建文档" tabindex="-1"><a class="header-anchor" href="#_1-新建文档"><span>(1) 新建文档</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@SpringBootTest</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ElasticsearchDocumentTest</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">RestHighLevelClient</span> client<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@Resource</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">IHotelService</span> hotelService<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 新建文档</span></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 请求数据库中某条数据</span></span>
<span class="line">        <span class="token class-name">Hotel</span> hotel <span class="token operator">=</span> hotelService<span class="token punctuation">.</span><span class="token function">getById</span><span class="token punctuation">(</span><span class="token number">36934L</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">HotelDoc</span> hotelDoc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HotelDoc</span><span class="token punctuation">(</span>hotel<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 创建请求</span></span>
<span class="line">        <span class="token class-name">IndexRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IndexRequest</span><span class="token punctuation">(</span><span class="token string">"hotel"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">"36934"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 请求参数</span></span>
<span class="line">        request<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>hotelDoc<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">XContentType</span><span class="token punctuation">.</span><span class="token constant">JSON</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 发送请求</span></span>
<span class="line">        client<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@BeforeEach</span></span>
<span class="line">    <span class="token keyword">void</span> <span class="token function">setUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RestHighLevelClient</span><span class="token punctuation">(</span><span class="token class-name">RestClient</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span></span>
<span class="line">                <span class="token class-name">HttpHost</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">"http://192.168.18.129:9200"</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@AfterEach</span></span>
<span class="line">    <span class="token keyword">void</span> <span class="token function">tearDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line">        client<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-查询文档" tabindex="-1"><a class="header-anchor" href="#_2-查询文档"><span>(2) 查询文档</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">    <span class="token comment">// 查询文档</span></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getDocumentById</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 创建请求</span></span>
<span class="line">        <span class="token class-name">GetRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GetRequest</span><span class="token punctuation">(</span><span class="token string">"hotel"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">"36934"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 发起请求</span></span>
<span class="line">        <span class="token class-name">GetResponse</span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 反序列化为对象</span></span>
<span class="line">        <span class="token class-name">String</span> json <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">getSourceAsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">HotelDoc</span> hotelDoc <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parseObject</span><span class="token punctuation">(</span>json<span class="token punctuation">,</span> <span class="token class-name">HotelDoc</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>hotelDoc<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-更新文档" tabindex="-1"><a class="header-anchor" href="#_3-更新文档"><span>(3) 更新文档</span></a></h3>
<p>增量修改</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">    <span class="token comment">// 修改文档</span></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testUpdateDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 创建请求</span></span>
<span class="line">        <span class="token class-name">UpdateRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UpdateRequest</span><span class="token punctuation">(</span><span class="token string">"hotel"</span><span class="token punctuation">,</span> <span class="token string">"36934"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 设置请求参数</span></span>
<span class="line">        request<span class="token punctuation">.</span><span class="token function">doc</span><span class="token punctuation">(</span></span>
<span class="line">                <span class="token string">"brand"</span><span class="token punctuation">,</span> <span class="token string">"八天酒店"</span></span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 发送请求</span></span>
<span class="line">        client<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-删除文档" tabindex="-1"><a class="header-anchor" href="#_4-删除文档"><span>(4) 删除文档</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">    <span class="token comment">// 删除文档</span></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deleteDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 创建请求</span></span>
<span class="line">        <span class="token class-name">DeleteRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DeleteRequest</span><span class="token punctuation">(</span><span class="token string">"hotel"</span><span class="token punctuation">,</span> <span class="token string">"36934"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 发起请求</span></span>
<span class="line">        client<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-批量导入文档" tabindex="-1"><a class="header-anchor" href="#_5-批量导入文档"><span>(5) 批量导入文档</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">    <span class="token comment">// 批量导入文档</span></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testBulk</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 查询酒店数据</span></span>
<span class="line">        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Hotel</span><span class="token punctuation">></span></span> hotelList <span class="token operator">=</span> hotelService<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 创建批量导入请求</span></span>
<span class="line">        <span class="token class-name">BulkRequest</span> bulkRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BulkRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 向批量导入请求中添加请求</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Hotel</span> hotel <span class="token operator">:</span> hotelList<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">HotelDoc</span> hotelDoc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HotelDoc</span><span class="token punctuation">(</span>hotel<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            bulkRequest<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">IndexRequest</span><span class="token punctuation">(</span><span class="token string">"hotel"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span>hotelDoc<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>hotelDoc<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">XContentType</span><span class="token punctuation">.</span><span class="token constant">JSON</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 发送请求</span></span>
<span class="line">        client<span class="token punctuation">.</span><span class="token function">bulk</span><span class="token punctuation">(</span>bulkRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6、dsl-查询文档" tabindex="-1"><a class="header-anchor" href="#_6、dsl-查询文档"><span>6、DSL 查询文档</span></a></h2>
<h3 id="_1-dsl-查询分类" tabindex="-1"><a class="header-anchor" href="#_1-dsl-查询分类"><span>(1) DSL 查询分类</span></a></h3>
<p><img src="@source/dev/middleware/es/img_11.png" alt="img_11.png">
查询基本语法：
<img src="@source/dev/middleware/es/img_12.png" alt="img_12.png"></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">GET /hotel/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"match_all"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-全文检索查询" tabindex="-1"><a class="header-anchor" href="#_2-全文检索查询"><span>(2) 全文检索查询</span></a></h3>
<p>全文检索查询会对用户输入内容进行分词，然后去倒排索引库检索。分为 match 查询和 match_all 查询。</p>
<h4 id="match" tabindex="-1"><a class="header-anchor" href="#match"><span>match</span></a></h4>
<p>单个字段。</p>
<p><img src="@source/dev/middleware/es/img_13.png" alt="img_13.png"></p>
<p>使用案例：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"># 全文检索</span>
<span class="line">GET /hotel/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"match"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"all"</span><span class="token operator">:</span> <span class="token string">"如家"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="multi-match" tabindex="-1"><a class="header-anchor" href="#multi-match"><span>multi_match</span></a></h4>
<p>多个字段。</p>
<p><img src="@source/dev/middleware/es/img_14.png" alt="img_14.png"></p>
<p>推荐将多个字段 copy 到一个字段，使用 match 查询。</p>
<h3 id="_3-精确查询" tabindex="-1"><a class="header-anchor" href="#_3-精确查询"><span>(3) 精确查询</span></a></h3>
<p>精确查询一般是查找 keyword、数值、日期、boolean 等类型字段。所以<strong>不会对搜索条件分词</strong>。常见的有：</p>
<ul>
<li>term：根据词条精确值查询</li>
<li>range：根据值的范围查询</li>
</ul>
<h4 id="term-查询" tabindex="-1"><a class="header-anchor" href="#term-查询"><span>term 查询</span></a></h4>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token comment">// term查询</span></span>
<span class="line">GET /indexName/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"term"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"FIELD"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"VALUE"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"># term 精确查询</span>
<span class="line">GET /hotel/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"term"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"city"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"上海"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="range-查询" tabindex="-1"><a class="header-anchor" href="#range-查询"><span>range 查询</span></a></h4>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token comment">// range查询</span></span>
<span class="line">GET /indexName/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"range"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"FIELD"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"gte"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"lte"</span><span class="token operator">:</span> <span class="token number">20</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"># range 精确查询</span>
<span class="line">GET /hotel/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"range"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"price"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"gte"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"lte"</span><span class="token operator">:</span> <span class="token number">200</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-地理查询" tabindex="-1"><a class="header-anchor" href="#_4-地理查询"><span>(4) 地理查询</span></a></h3>
<p>根据经纬度进行查询。</p>
<h4 id="geo-bounding-box" tabindex="-1"><a class="header-anchor" href="#geo-bounding-box"><span><code v-pre>geo_bounding_box</code></span></a></h4>
<p>查询<code v-pre>geo_point</code>值落在某个矩形范围的所有文档。</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token comment">// geo_bounding_box查询</span></span>
<span class="line">GET /indexName/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"geo_bounding_box"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"FIELD"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"top_left"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"lat"</span><span class="token operator">:</span> <span class="token number">31.1</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"lon"</span><span class="token operator">:</span> <span class="token number">121.5</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"bottom_right"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"lat"</span><span class="token operator">:</span> <span class="token number">30.9</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"lon"</span><span class="token operator">:</span> <span class="token number">121.7</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="geo-distance" tabindex="-1"><a class="header-anchor" href="#geo-distance"><span><code v-pre>geo_distance</code></span></a></h4>
<p>查询到指定中心点小于某个距离值的所有文档。</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token comment">// geo_distance 查询</span></span>
<span class="line">GET /indexName/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"geo_distance"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"distance"</span><span class="token operator">:</span> <span class="token string">"15km"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"FIELD"</span><span class="token operator">:</span> <span class="token string">"31.21,121.5"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"># 地理查询</span>
<span class="line">GET /hotel/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"geo_distance"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"distance"</span><span class="token operator">:</span> <span class="token string">"10km"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"location"</span><span class="token operator">:</span> <span class="token string">"22.550183, 114.120771"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-复合查询" tabindex="-1"><a class="header-anchor" href="#_5-复合查询"><span>(5) 复合查询</span></a></h3>
<h4 id="算分函数查询" tabindex="-1"><a class="header-anchor" href="#算分函数查询"><span>算分函数查询</span></a></h4>
<p>当我们利用 match 查询时，文档结果会根据与搜索词条的关联度打分（_score），返回结果时按照分值降序排列。
词条在文档中出现的频率越高，越&quot;鹤立鸡群&quot;，关联度评分越高。
<img src="@source/dev/middleware/es/img_16.png" alt="img_16.png">
<img src="@source/dev/middleware/es/img_17.png" alt="img_17.png">
使用语法</p>
<p><img src="@source/dev/middleware/es/img_18.png" alt="img_18.png"></p>
<p>使用案例：提高如家酒店的相关性算法</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"># 提高如家酒店的相关性算分</span>
<span class="line">GET /hotel/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"function_score"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"term"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"city"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"上海"</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"functions"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"filter"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">"term"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">"brand"</span><span class="token operator">:</span> <span class="token string">"如家"</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token number">10</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"boost_mode"</span><span class="token operator">:</span> <span class="token string">"sum"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="布尔查询" tabindex="-1"><a class="header-anchor" href="#布尔查询"><span>布尔查询</span></a></h4>
<p>布尔查询是一个或多个查询子句的组合。子查询的组合方式有：</p>
<ul>
<li><code v-pre>must</code>：必须匹配每个子查询，类似“与”</li>
<li><code v-pre>should</code>：选择性匹配子查询，类似“或”</li>
<li><code v-pre>must_not</code>：必须不匹配，不参与算分，类似“非”</li>
<li><code v-pre>filter</code>：必须匹配，不参与算分</li>
</ul>
<p>语法</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">GET /hotel/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"bool"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"must"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span><span class="token property">"term"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"上海"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"should"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span><span class="token property">"term"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">"brand"</span><span class="token operator">:</span> <span class="token string">"皇冠假日"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span><span class="token property">"term"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">"brand"</span><span class="token operator">:</span> <span class="token string">"华美达"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"must_not"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token property">"range"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">"price"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">"lte"</span><span class="token operator">:</span> <span class="token number">500</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"filter"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token property">"range"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">"score"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">"gte"</span><span class="token operator">:</span> <span class="token number">45</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用案例
<img src="@source/dev/middleware/es/img_19.png" alt="img_19.png"></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"># 布尔查询</span>
<span class="line">GET /hotel/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"bool"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"must"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"term"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">"city"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"上海"</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"must_not"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"range"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">"price"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">"lte"</span><span class="token operator">:</span> <span class="token number">500</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"filter"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"geo_distance"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">"distance"</span><span class="token operator">:</span> <span class="token string">"10km"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"location"</span><span class="token operator">:</span> <span class="token string">"31.21, 121.5"</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-排序" tabindex="-1"><a class="header-anchor" href="#_6-排序"><span>(6) 排序</span></a></h3>
<p>Elasticsearch 支持对搜索结果排序，默认是根据相关度算分（<code v-pre>_score</code>）来排序。可以排序字段类型有：keyword 类型、数值类型、地理坐标类型、日期类型等。</p>
<h4 id="非地理坐标排序" tabindex="-1"><a class="header-anchor" href="#非地理坐标排序"><span>非地理坐标排序</span></a></h4>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">GET /indexName/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"match_all"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"sort"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"FIELD"</span><span class="token operator">:</span> <span class="token string">"desc"</span>  <span class="token comment">// 排序字段和排序方式ASC、DESC</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用案例：
<img src="@source/dev/middleware/es/img_20.png" alt="img_20.png"></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"># 非地理坐标排序</span>
<span class="line">GET /hotel/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"match_all"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"sort"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"score"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"order"</span><span class="token operator">:</span> <span class="token string">"desc"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"price"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"order"</span><span class="token operator">:</span> <span class="token string">"asc"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="地理坐标排序" tabindex="-1"><a class="header-anchor" href="#地理坐标排序"><span>地理坐标排序</span></a></h4>
<p>语法：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">GET /indexName/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"match_all"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"sort"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"_geo_distance"</span> <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"FIELD"</span> <span class="token operator">:</span> <span class="token string">"纬度，经度"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"order"</span> <span class="token operator">:</span> <span class="token string">"asc"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"unit"</span> <span class="token operator">:</span> <span class="token string">"km"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用案例：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"># 地理坐标排序</span>
<span class="line">GET /hotel/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"match_all"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"sort"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"_geo_distance"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"location"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"lat"</span><span class="token operator">:</span> <span class="token number">29.881672</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"lon"</span><span class="token operator">:</span> <span class="token number">121.905888</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"order"</span><span class="token operator">:</span> <span class="token string">"asc"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"unit"</span><span class="token operator">:</span> <span class="token string">"km"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-分页" tabindex="-1"><a class="header-anchor" href="#_7-分页"><span>(7) 分页</span></a></h3>
<h4 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用"><span>基本使用</span></a></h4>
<p>Elasticsearch 默认情况下只返回 Top10 的数据。而如果要查询更多数据就需要修改分页参数了。通过修改<code v-pre>from</code>、<code v-pre>size</code>参数来控制要返回的分页结果：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">GET /hotel/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"match_all"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"from"</span><span class="token operator">:</span> <span class="token number">990</span><span class="token punctuation">,</span> <span class="token comment">// 分页开始的位置，默认为0</span></span>
<span class="line">  <span class="token property">"size"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// 期望获取的文档总数</span></span>
<span class="line">  <span class="token property">"sort"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token property">"price"</span><span class="token operator">:</span> <span class="token string">"asc"</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用案例：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"># 分页查询</span>
<span class="line">GET /hotel/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"match_all"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"from"</span><span class="token operator">:</span> <span class="token number">191</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"size"</span><span class="token operator">:</span> <span class="token number">10</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="深度分页问题" tabindex="-1"><a class="header-anchor" href="#深度分页问题"><span>深度分页问题</span></a></h4>
<p>ES 是分布式的，所以会面临深度分页问题。例如按 price 排序后，获取 from = 990，size =10 的数据：</p>
<ol>
<li>在每个数据分片上都排序并查询前 1000 条文档；</li>
<li>将所有节点的结果聚合，在内存中重新排序选出前 1000 条文档</li>
<li>从这 1000 条中，选取从 990 开始的 10 条文档</li>
</ol>
<p>如果搜索页数过深，或者结果集（from + size）越大，对内存和 CPU 的消耗也越高。因此 ES 设定结果集查询的上限是10000。
针对深度分页，ES提供了解决方案<code v-pre>search after</code>，分页时需要排序，原理是从上一次的排序值开始，查询下一页数据。官方推荐使用的方式。
分页对比
<img src="@source/dev/middleware/es/img_21.png" alt="img_21.png"></p>
<h3 id="_8-高亮" tabindex="-1"><a class="header-anchor" href="#_8-高亮"><span>(8) 高亮</span></a></h3>
<p>高亮就是在搜索结果中把搜索关键字突出显示。
原理：</p>
<ol>
<li>将搜索结果中的关键字用标签(通常是<code v-pre>&lt;em /&gt;</code>)标记出来</li>
<li>在页面中给标签添加 css 样式</li>
</ol>
<p>语法：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">GET /hotel/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"match"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"FIELD"</span><span class="token operator">:</span> <span class="token string">"TEXT"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"highlight"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"fields"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 指定要高亮的字段</span></span>
<span class="line">      <span class="token property">"FIELD"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"pre_tags"</span><span class="token operator">:</span> <span class="token string">"&lt;em>"</span><span class="token punctuation">,</span>  <span class="token comment">// 用来标记高亮字段的前置标签</span></span>
<span class="line">        <span class="token property">"post_tags"</span><span class="token operator">:</span> <span class="token string">"&lt;/em>"</span> <span class="token comment">// 用来标记高亮字段的后置标签</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用案例：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"># 高亮查询</span>
<span class="line">GET /hotel/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"match"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"all"</span><span class="token operator">:</span> <span class="token string">"如家"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"highlight"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"fields"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"require_field_match"</span><span class="token operator">:</span> <span class="token string">"false"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7、restclient-查询文档" tabindex="-1"><a class="header-anchor" href="#_7、restclient-查询文档"><span>7、RestClient 查询文档</span></a></h2>
<h3 id="_1-入门案例-查询所有" tabindex="-1"><a class="header-anchor" href="#_1-入门案例-查询所有"><span>(1) 入门案例：查询所有</span></a></h3>
<p><img src="@source/dev/middleware/es/img_22.png" alt="img_22.png"></p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">    <span class="token comment">// 搜索全部</span></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testMatchAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 创建请求</span></span>
<span class="line">        <span class="token class-name">SearchRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token string">"hotel"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 请求参数</span></span>
<span class="line">        request<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">matchAllQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 发送请求</span></span>
<span class="line">        <span class="token class-name">SearchResponse</span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 解析结果</span></span>
<span class="line">        <span class="token class-name">SearchHits</span> hits <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 结果条数</span></span>
<span class="line">        <span class="token keyword">long</span> resultCount <span class="token operator">=</span> hits<span class="token punctuation">.</span><span class="token function">getTotalHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"结果条数："</span> <span class="token operator">+</span> resultCount<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 每一个文档</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">SearchHit</span> hit <span class="token operator">:</span> hits<span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">String</span> json <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">getSourceAsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-全文检索查询-1" tabindex="-1"><a class="header-anchor" href="#_2-全文检索查询-1"><span>(2) 全文检索查询</span></a></h3>
<p><img src="@source/dev/middleware/es/img_23.png" alt="img_23.png"></p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">    <span class="token comment">// 全文检索查询</span></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testMatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 创建请求</span></span>
<span class="line">        <span class="token class-name">SearchRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token string">"hotel"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 请求参数</span></span>
<span class="line">        <span class="token comment">// 单字段查询</span></span>
<span class="line"><span class="token comment">//        request.source().query(QueryBuilders.matchQuery("all", "如家"));</span></span>
<span class="line">        <span class="token comment">// 多字段查询</span></span>
<span class="line">        request<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">multiMatchQuery</span><span class="token punctuation">(</span><span class="token string">"如家"</span><span class="token punctuation">,</span> <span class="token string">"brand"</span><span class="token punctuation">,</span> <span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 发送请求</span></span>
<span class="line">        <span class="token class-name">SearchResponse</span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 解析结果</span></span>
<span class="line">        <span class="token class-name">SearchHits</span> hits <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 结果条数</span></span>
<span class="line">        <span class="token keyword">long</span> resultCount <span class="token operator">=</span> hits<span class="token punctuation">.</span><span class="token function">getTotalHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"结果条数："</span> <span class="token operator">+</span> resultCount<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 每一个文档</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">SearchHit</span> hit <span class="token operator">:</span> hits<span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">String</span> json <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">getSourceAsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-精确查询-1" tabindex="-1"><a class="header-anchor" href="#_3-精确查询-1"><span>(3) 精确查询</span></a></h3>
<p><img src="@source/dev/middleware/es/img_24.png" alt="img_24.png"></p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">    <span class="token comment">// 精确查询</span></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testTermQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 创建请求</span></span>
<span class="line">        <span class="token class-name">SearchRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token string">"hotel"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 请求参数</span></span>
<span class="line">        <span class="token comment">// term 查询</span></span>
<span class="line"><span class="token comment">//        request.source().query(QueryBuilders.termQuery("brand", "如家"));</span></span>
<span class="line">        <span class="token comment">// range 查询</span></span>
<span class="line">        request<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">rangeQuery</span><span class="token punctuation">(</span><span class="token string">"price"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">gte</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">lte</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 发送请求</span></span>
<span class="line">        <span class="token class-name">SearchResponse</span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 处理请求</span></span>
<span class="line">        <span class="token function">handleResponse</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-复合查询——布尔查询" tabindex="-1"><a class="header-anchor" href="#_4-复合查询——布尔查询"><span>(4) 复合查询——布尔查询</span></a></h3>
<p><img src="@source/dev/middleware/es/img_25.png" alt="img_25.png"></p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">    <span class="token comment">// 复合查询——bool</span></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testBool</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 创建请求</span></span>
<span class="line">        <span class="token class-name">SearchRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token string">"hotel"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 请求参数</span></span>
<span class="line">        <span class="token comment">// 创建布尔查询</span></span>
<span class="line">         <span class="token class-name">BoolQueryBuilder</span> boolQuery <span class="token operator">=</span> <span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">boolQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 添加must条件</span></span>
<span class="line">         boolQuery<span class="token punctuation">.</span><span class="token function">must</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">termQuery</span><span class="token punctuation">(</span><span class="token string">"city"</span><span class="token punctuation">,</span> <span class="token string">"杭州"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 添加filter条件</span></span>
<span class="line">         boolQuery<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">rangeQuery</span><span class="token punctuation">(</span><span class="token string">"price"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">lte</span><span class="token punctuation">(</span><span class="token number">250</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">         request<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>boolQuery<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 发送请求</span></span>
<span class="line">        <span class="token class-name">SearchResponse</span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 处理请求</span></span>
<span class="line">        <span class="token function">handleResponse</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-排序、分页" tabindex="-1"><a class="header-anchor" href="#_5-排序、分页"><span>(5) 排序、分页</span></a></h3>
<p><img src="@source/dev/middleware/es/img_26.png" alt="img_26.png"></p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">    <span class="token comment">// 排序与分页</span></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 创建请求</span></span>
<span class="line">        <span class="token class-name">SearchRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token string">"hotel"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 请求参数</span></span>
<span class="line">        request<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">matchAllQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 排序参数</span></span>
<span class="line">        request<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token string">"price"</span><span class="token punctuation">,</span> <span class="token class-name">SortOrder</span><span class="token punctuation">.</span><span class="token constant">DESC</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 分页参数</span></span>
<span class="line">        request<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 发送请求</span></span>
<span class="line">        <span class="token class-name">SearchResponse</span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 解析结果</span></span>
<span class="line">        <span class="token function">handleResponse</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-高亮" tabindex="-1"><a class="header-anchor" href="#_6-高亮"><span>(6) 高亮</span></a></h3>
<p><img src="@source/dev/middleware/es/img_27.png" alt="img_27.png"></p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">    <span class="token comment">// 高亮</span></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testHighlight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 创建请求</span></span>
<span class="line">        <span class="token class-name">SearchRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token string">"hotel"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 请求参数</span></span>
<span class="line">        request<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">matchQuery</span><span class="token punctuation">(</span><span class="token string">"all"</span><span class="token punctuation">,</span> <span class="token string">"如家"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 设置高亮</span></span>
<span class="line">        request<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">highlighter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">HighlightBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">requireFieldMatch</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 发送请求</span></span>
<span class="line">        <span class="token class-name">SearchResponse</span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 解析结果</span></span>
<span class="line">        <span class="token function">handleResponse</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">handleResponse</span><span class="token punctuation">(</span><span class="token class-name">SearchResponse</span> response<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 解析结果</span></span>
<span class="line">        <span class="token class-name">SearchHits</span> hits <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 结果条数</span></span>
<span class="line">        <span class="token keyword">long</span> resultCount <span class="token operator">=</span> hits<span class="token punctuation">.</span><span class="token function">getTotalHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"结果条数："</span> <span class="token operator">+</span> resultCount<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 每一个文档</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">SearchHit</span> hit <span class="token operator">:</span> hits<span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">String</span> json <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">getSourceAsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">HotelDoc</span> hotelDoc <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parseObject</span><span class="token punctuation">(</span>json<span class="token punctuation">,</span> <span class="token class-name">HotelDoc</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 获取 highlight</span></span>
<span class="line">            <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">HighlightField</span><span class="token punctuation">></span></span> highlightFields <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">getHighlightFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">CollectionUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>highlightFields<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token class-name">HighlightField</span> highlightField <span class="token operator">=</span> highlightFields<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>highlightField <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token class-name">String</span> name <span class="token operator">=</span> highlightField<span class="token punctuation">.</span><span class="token function">getFragments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    hotelDoc<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>hotelDoc<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8、es-提高" tabindex="-1"><a class="header-anchor" href="#_8、es-提高"><span>8、ES 提高</span></a></h2>
<h3 id="_1-数据聚合" tabindex="-1"><a class="header-anchor" href="#_1-数据聚合"><span>(1) 数据聚合</span></a></h3>
<h4 id="数据聚合分类" tabindex="-1"><a class="header-anchor" href="#数据聚合分类"><span>数据聚合分类</span></a></h4>
<p>聚合（aggregations）可以实现对文档数据的统计、分析、运算。聚合常见的有三类：</p>
<ol>
<li>桶（Bucket）聚合：用来对文档做分组</li>
</ol>
<ul>
<li>TermAggregation：按照文档字段值分组</li>
<li>Date Histogram：按照日期阶梯分组，例如一周为一组，或者一月为一组</li>
</ul>
<ol start="2">
<li>度量（Metric）聚合：用以计算一些值，比如：最大值、最小值、平均值等</li>
</ol>
<ul>
<li>Avg：求平均值</li>
<li>Max：求最大值</li>
<li>Min：求最小值</li>
<li>Stats：同时求max、min、avg、sum等</li>
</ul>
<ol start="3">
<li>管道（pipeline）聚合：其它聚合的结果为基础做聚合</li>
</ol>
<p>参与聚合的字段类型必须是：</p>
<ol>
<li>keyword</li>
<li>数值</li>
<li>日期</li>
<li>布尔</li>
</ol>
<h4 id="dsl-实现-bucket-聚合" tabindex="-1"><a class="header-anchor" href="#dsl-实现-bucket-聚合"><span>DSL 实现 bucket 聚合</span></a></h4>
<p>使用案例：根据酒店名称做聚合。</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"># 数据聚合</span>
<span class="line"><span class="token constant">GET</span> <span class="token operator">/</span>hotel<span class="token operator">/</span>_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">"size"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">"aggs"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">"brandAgg"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">"terms"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">"field"</span><span class="token operator">:</span> <span class="token string">"brand"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">"size"</span><span class="token operator">:</span> <span class="token number">20</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"># 数据聚合 <span class="token operator">--</span> 带有查询</span>
<span class="line"><span class="token constant">GET</span> <span class="token operator">/</span>hotel<span class="token operator">/</span>_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">"size"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">"range"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">"price"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">"lte"</span><span class="token operator">:</span> <span class="token number">300</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> </span>
<span class="line">  <span class="token string">"aggs"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">"brandAgg"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">"terms"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">"field"</span><span class="token operator">:</span> <span class="token string">"brand"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">"size"</span><span class="token operator">:</span> <span class="token number">20</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="dsl-实现-matrics-聚合" tabindex="-1"><a class="header-anchor" href="#dsl-实现-matrics-聚合"><span>DSL 实现 matrics 聚合</span></a></h4>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"># 数据聚合 <span class="token operator">--</span> 度量聚合</span>
<span class="line"><span class="token constant">GET</span> <span class="token operator">/</span>hotel<span class="token operator">/</span>_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">"size"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">"aggs"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">"brandAgg"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">"terms"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">"field"</span><span class="token operator">:</span> <span class="token string">"brand"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">"size"</span><span class="token operator">:</span> <span class="token number">10</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"aggs"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">"priceStat"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token string">"stats"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string">"field"</span><span class="token operator">:</span> <span class="token string">"price"</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="restclient-实现聚合" tabindex="-1"><a class="header-anchor" href="#restclient-实现聚合"><span>RestClient 实现聚合</span></a></h4>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 创建请求</span></span>
<span class="line">        <span class="token class-name">SearchRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token string">"hotel"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// DSL</span></span>
<span class="line">        request<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        request<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">aggregation</span><span class="token punctuation">(</span><span class="token class-name">AggregationBuilders</span></span>
<span class="line">                <span class="token punctuation">.</span><span class="token function">terms</span><span class="token punctuation">(</span><span class="token string">"brand_agg"</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">"brand"</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 发送请求</span></span>
<span class="line">        <span class="token class-name">SearchResponse</span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 解析结果</span></span>
<span class="line">        <span class="token function">resolveResponse</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 结果解析</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">resolveResponse</span><span class="token punctuation">(</span><span class="token class-name">SearchResponse</span> response<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 解析聚合结果</span></span>
<span class="line">        <span class="token class-name">Aggregations</span> aggregations <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">getAggregations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 根据名称获取聚合结果</span></span>
<span class="line">        <span class="token class-name">Terms</span> brandTerms <span class="token operator">=</span> aggregations<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"brand_agg"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 获取桶</span></span>
<span class="line">        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Terms<span class="token punctuation">.</span>Bucket</span><span class="token punctuation">></span></span> buckets <span class="token operator">=</span> brandTerms<span class="token punctuation">.</span><span class="token function">getBuckets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 遍历</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Terms<span class="token punctuation">.</span>Bucket</span> bucket <span class="token operator">:</span> buckets<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 获取key，也就是品牌信息</span></span>
<span class="line">            <span class="token class-name">String</span> brandName <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">getKeyAsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>brandName<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-自动补全" tabindex="-1"><a class="header-anchor" href="#_2-自动补全"><span>(2) 自动补全</span></a></h3>
<p>自动补全的原理是对文档进行拼音分词。使用拼音分词的<code v-pre>analyzer</code>。</p>
<h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h4>
<p>和 ik 分词器一样安装，使用测试：</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token constant">POST</span> <span class="token operator">/</span>_analyze</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">"text"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"天天吃八碗"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">"analyzer"</span><span class="token operator">:</span> <span class="token string">"pinyin"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">"tokens"</span> <span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">"token"</span> <span class="token operator">:</span> <span class="token string">"tian"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"start_offset"</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"end_offset"</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"type"</span> <span class="token operator">:</span> <span class="token string">"word"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"position"</span> <span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">"token"</span> <span class="token operator">:</span> <span class="token string">"ttcbw"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"start_offset"</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"end_offset"</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"type"</span> <span class="token operator">:</span> <span class="token string">"word"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"position"</span> <span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">"token"</span> <span class="token operator">:</span> <span class="token string">"tian"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"start_offset"</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"end_offset"</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"type"</span> <span class="token operator">:</span> <span class="token string">"word"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"position"</span> <span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">"token"</span> <span class="token operator">:</span> <span class="token string">"chi"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"start_offset"</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"end_offset"</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"type"</span> <span class="token operator">:</span> <span class="token string">"word"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"position"</span> <span class="token operator">:</span> <span class="token number">2</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">"token"</span> <span class="token operator">:</span> <span class="token string">"ba"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"start_offset"</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"end_offset"</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"type"</span> <span class="token operator">:</span> <span class="token string">"word"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"position"</span> <span class="token operator">:</span> <span class="token number">3</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">"token"</span> <span class="token operator">:</span> <span class="token string">"wan"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"start_offset"</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"end_offset"</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"type"</span> <span class="token operator">:</span> <span class="token string">"word"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"position"</span> <span class="token operator">:</span> <span class="token number">4</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自定义分词器" tabindex="-1"><a class="header-anchor" href="#自定义分词器"><span>自定义分词器</span></a></h4>
<p>ElasticSearch 中分词器（analyzer）的组成包含三部分：</p>
<ol>
<li><code v-pre>character filters</code>：在<code v-pre>tokenizer</code>之前对文本进行处理。例如删除字符、替换字符；</li>
<li><code v-pre>tokenizer</code>：将文本按照一定的规则切割成词条（term）。例如 keyword，就是不分词；还有 ik_smart；</li>
<li><code v-pre>tokenizer filter</code>：将 tokenizer 输出的词条做进一步处理。例如大小写转换、同义词处理、拼音处理等。</li>
</ol>
<p><img src="@source/dev/middleware/es/img_28.png" alt="img_28.png">
创建索引库时，通过<code v-pre>settings</code>来配置自定义分词器：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token comment">// 自定义拼音分词器</span></span>
<span class="line">PUT /test</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"settings"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"analysis"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"analyzer"</span><span class="token operator">:</span> <span class="token punctuation">{</span> </span>
<span class="line">        <span class="token property">"my_analyzer"</span><span class="token operator">:</span> <span class="token punctuation">{</span> </span>
<span class="line">          <span class="token property">"tokenizer"</span><span class="token operator">:</span> <span class="token string">"ik_max_word"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"filter"</span><span class="token operator">:</span> <span class="token string">"py"</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"filter"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"py"</span><span class="token operator">:</span> <span class="token punctuation">{</span> </span>
<span class="line">          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"pinyin"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"keep_full_pinyin"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"keep_joined_full_pinyin"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"keep_original"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"limit_first_letter_length"</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"remove_duplicated_term"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"none_chinese_pinyin_tokenize"</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>拼音分词器适合在创建倒排索引的时候使用，但不能在搜索的时候使用。否则在输入文字时会匹配拼音相同的无关文字。</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">PUT /test</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"settings"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"analysis"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"analyzer"</span><span class="token operator">:</span> <span class="token punctuation">{</span> </span>
<span class="line">        <span class="token property">"my_analyzer"</span><span class="token operator">:</span> <span class="token punctuation">{</span> </span>
<span class="line">          <span class="token property">"tokenizer"</span><span class="token operator">:</span> <span class="token string">"ik_max_word"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"filter"</span><span class="token operator">:</span> <span class="token string">"py"</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"filter"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"py"</span><span class="token operator">:</span> <span class="token punctuation">{</span> </span>
<span class="line">          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"pinyin"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"keep_full_pinyin"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"keep_joined_full_pinyin"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"keep_original"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"limit_first_letter_length"</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"remove_duplicated_term"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"none_chinese_pinyin_tokenize"</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"mappings"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"properties"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"text"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"analyzer"</span><span class="token operator">:</span> <span class="token string">"my_analyzer"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"search_analyzer"</span><span class="token operator">:</span> <span class="token string">"ik_smart"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用测试：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">POST /test/_doc/<span class="token number">1</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"狮子"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">POST /test/_doc/<span class="token number">2</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"虱子"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">GET /test/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"match"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"掉入狮子笼咋办"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="completion-suggester-查询" tabindex="-1"><a class="header-anchor" href="#completion-suggester-查询"><span>completion suggester 查询</span></a></h4>
<p><strong>DSL 实现</strong>
Elasticsearch 提供了 CompletionSuggester 查询来实现自动补全功能。这个查询会匹配以用户输入内容开头的词条并返回。为了提高补全查询的效率，对于文档中字段的类型有一些约束：</p>
<ul>
<li>参与补全查询的字段必须是 completion 类型</li>
<li>字段的内容一般是用来补全的多个词条形成的数组</li>
</ul>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">PUT /test2</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"mappings"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"properties"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"title"</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"completion"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"># 测试数据</span>
<span class="line">POST test2/_doc</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"title"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"Sony"</span><span class="token punctuation">,</span> <span class="token string">"WH-1000XM3"</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">POST test2/_doc</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"title"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"SK-II"</span><span class="token punctuation">,</span> <span class="token string">"PITERA"</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">POST test2/_doc</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"title"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"Nintendo"</span><span class="token punctuation">,</span> <span class="token string">"switch"</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token comment">// 自动补全查询</span></span>
<span class="line">POST /test/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"suggest"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"title_suggest"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"text"</span><span class="token operator">:</span> <span class="token string">"s"</span><span class="token punctuation">,</span> <span class="token comment">// 关键字</span></span>
<span class="line">      <span class="token property">"completion"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"field"</span><span class="token operator">:</span> <span class="token string">"title"</span><span class="token punctuation">,</span> <span class="token comment">// 补全字段</span></span>
<span class="line">        <span class="token property">"skip_duplicates"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 跳过重复的</span></span>
<span class="line">        <span class="token property">"size"</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token comment">// 获取前10条结果</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>RestAPI</strong></p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line">    <span class="token comment">// 自动补全查询测试</span></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testAutofill</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 1.准备请求</span></span>
<span class="line">        <span class="token class-name">SearchRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token string">"test2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 2.请求参数</span></span>
<span class="line">        request<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">suggest</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SuggestBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addSuggestion</span><span class="token punctuation">(</span><span class="token string">"mySuggestion"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token class-name">SuggestBuilders</span></span>
<span class="line">                        <span class="token punctuation">.</span><span class="token function">completionSuggestion</span><span class="token punctuation">(</span><span class="token string">"title"</span><span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">.</span><span class="token function">prefix</span><span class="token punctuation">(</span><span class="token string">"s"</span><span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">.</span><span class="token function">skipDuplicates</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 3.发送请求</span></span>
<span class="line">        <span class="token class-name">SearchResponse</span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 4.处理结果</span></span>
<span class="line">        <span class="token class-name">Suggest</span> suggest <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">getSuggest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 4.1.根据名称获取补全结果</span></span>
<span class="line">        <span class="token class-name">CompletionSuggestion</span> suggestion <span class="token operator">=</span> suggest<span class="token punctuation">.</span><span class="token function">getSuggestion</span><span class="token punctuation">(</span><span class="token string">"mySuggestion"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 4.2.获取options并遍历</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">CompletionSuggestion<span class="token punctuation">.</span>Entry<span class="token punctuation">.</span>Option</span> option <span class="token operator">:</span> suggestion<span class="token punctuation">.</span><span class="token function">getOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 4.3.获取一个option中的text，也就是补全的词条</span></span>
<span class="line">            <span class="token class-name">String</span> text <span class="token operator">=</span> option<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


