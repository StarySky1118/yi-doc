<template><div><h1 id="环境安装" tabindex="-1"><a class="header-anchor" href="#环境安装"><span>环境安装</span></a></h1>
<p><a href="https://golang.google.cn/dl/" target="_blank" rel="noopener noreferrer">https://golang.google.cn/dl/</a>
<img src="/images/dev/go/go_basic/go_installer.png" alt="image.png">
安装会自动将<code v-pre>Go/bin</code>添加到环境变量。</p>
<p><strong>测试</strong></p>
<p>在工作目录中创建<code v-pre>test.go</code>文件。</p>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">"fmt"</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Hello, World!"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开命令窗口，输入<code v-pre>go run test.go</code>
<img src="/images/dev/go/go_basic/hello_go.png" alt="image.png"></p>
</div></template>


