<template><div><h1 id="一、基本概念" tabindex="-1"><a class="header-anchor" href="#一、基本概念"><span>一、基本概念</span></a></h1>
<p><img src="/images/dev/middleware/tdengine/basic.png" alt="image.png"></p>
<h2 id="_1、采集量-metric" tabindex="-1"><a class="header-anchor" href="#_1、采集量-metric"><span>1、采集量(Metric)</span></a></h2>
<p>传感器、设备或其他类型采集点采集的物理量，随时间变化。</p>
<h2 id="_2、标签-tag" tabindex="-1"><a class="header-anchor" href="#_2、标签-tag"><span>2、标签(Tag)</span></a></h2>
<p>传感器、设备或其他类型采集点的静态属性，不随时间变化的。</p>
<h2 id="_3、数据采集点-data-collection-point" tabindex="-1"><a class="header-anchor" href="#_3、数据采集点-data-collection-point"><span>3、数据采集点(Data Collection Point)</span></a></h2>
<p>按照预设时间周期或受事件触发采集物理量的硬件或软件。</p>
<h2 id="_4、表" tabindex="-1"><a class="header-anchor" href="#_4、表"><span>4、表</span></a></h2>
<p>一个数据采集点一张表，用来存储这个数据采集点所采集的时序数据。
优势：</p>
<ol>
<li>一张表只有一个写入者，可采用无锁方式来写，<strong>写入速度</strong>就能大幅提升；</li>
<li>对于一个数据采集点而言，其产生的数据是按照时间排序的，因此写的操作可用追加的方式实现，进一步大幅提高数据<strong>写入速度</strong>；</li>
<li>一个数据采集点的数据是以块为单位连续存储的。如果读取一个时间段的数据，它能大幅减少随机读取操作，成数量级的提升<strong>读取和查询速度</strong>。</li>
</ol>
<p>采用一个数据采集点一张表的方式，能最大程度的保证单个数据采集点的插入和查询的性能是最优的。
TDengine 建议用数据采集点的名字（如上表中的 d1001）来做表名。每个数据采集点可能同时采集多个采集量（如上表中的 current、voltage 和 phase），每个采集量对应一张表中的一列，数据类型可以是整型、浮点型、字符串等。除此之外，表的第一列必须是时间戳，即数据类型为 Timestamp。对采集量，TDengine 将自动按照时间戳建立索引，但对采集量本身不建任何索引。</p>
<h2 id="_5、超级表-stable" tabindex="-1"><a class="header-anchor" href="#_5、超级表-stable"><span>5、超级表(STable)</span></a></h2>
<p>超级表是指某一特定类型的数据采集点的集合。同一类型的数据采集点，其表的结构是完全一样的，但每个表（数据采集点）的静态属性（标签）是不一样的。描述一个超级表（某一特定类型的数据采集点的集合），除需要定义采集量的表结构之外，还需要定义其标签的 Schema，标签的数据类型可以是整数、浮点数、字符串、JSON，标签可以有多个，可以事后增加、删除或修改。如果整个系统有 N 个不同类型的数据采集点，就需要建立 N 个超级表。
<strong>超级表——数据采集点类，子表表——数据采集点实例。</strong></p>
<h2 id="_6、子表-subtable" tabindex="-1"><a class="header-anchor" href="#_6、子表-subtable"><span>6、子表(Subtable)</span></a></h2>
<p>当为某个具体数据采集点创建表时，用户可以使用超级表的定义做模板，同时指定该具体采集点（表）的具体标签值来创建该表。<strong>通过超级表创建的表称之为子表</strong>。
针对超级表的查询，TDengine 将把所有子表中的数据视为一个整体数据集进行处理，会先把满足标签过滤条件的表从超级表中找出来，然后再扫描这些表的时序数据，进行聚合操作，这样需要扫描的数据集会大幅减少，从而显著提高查询的性能。本质上，TDengine 通过对超级表查询的支持，实现了多个同类数据采集点的高效聚合。</p>
<h2 id="_7、库-database" tabindex="-1"><a class="header-anchor" href="#_7、库-database"><span>7、库(Database)</span></a></h2>
<p>TDengine 建议将不同数据特征的超级表创建在不同的库里。</p>
</div></template>


