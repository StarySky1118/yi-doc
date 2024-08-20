<template><div><h1 id="_5-集群篇" tabindex="-1"><a class="header-anchor" href="#_5-集群篇"><span>5. 集群篇</span></a></h1>
<h2 id="mysql-如何避免单点故障" tabindex="-1"><a class="header-anchor" href="#mysql-如何避免单点故障"><span>MySQL 如何避免单点故障？</span></a></h2>
<p>一般会使用一主多从的集群避免单点故障。采用读写分离策略，在主上写，在从上读。</p>
<h2 id="如何实现读写分离" tabindex="-1"><a class="header-anchor" href="#如何实现读写分离"><span>如何实现读写分离？</span></a></h2>
<p>可以使用中间件实现，例如 ShardingSphere。</p>
<h2 id="主从同步是如何实现的" tabindex="-1"><a class="header-anchor" href="#主从同步是如何实现的"><span>主从同步是如何实现的？</span></a></h2>
<p>MySQL 主从同步基于 binlog，默认采用异步的方式。流程如下：</p>
<p>主库修改后会写 binlog，推送给从库，从库接收后会将 binlog 写入 relay log，进行重放更新数据，更新完成后给主库一个响应。
当成功响应超过设置值，主库认为主从同步成功，响应客户端。</p>
</div></template>


