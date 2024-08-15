<template><div><h1 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始"><span>快速开始</span></a></h1>
<h2 id="_1-安装软件" tabindex="-1"><a class="header-anchor" href="#_1-安装软件"><span>1. 安装软件</span></a></h2>
<h3 id="python-3-10" tabindex="-1"><a class="header-anchor" href="#python-3-10"><span>Python 3.10</span></a></h3>
<p>最好使用 conda 虚拟环境。</p>
<h3 id="ffmepg" tabindex="-1"><a class="header-anchor" href="#ffmepg"><span>FFMEPG</span></a></h3>
<p>一个开源多媒体处理工具包，处理视频、音频等。</p>
<p><a href="https://ffmpeg.org/download.html" target="_blank" rel="noopener noreferrer">官网</a></p>
<p><img src="@source/ai_application/deep_live_cam/img.png" alt="img.png"></p>
<p><img src="@source/ai_application/deep_live_cam/img_1.png" alt="img_1.png"></p>
<p>下载后解压，将<code v-pre>bin</code>目录添加到环境变量<code v-pre>path</code>。</p>
<p>验证安装：<code v-pre>ffmpeg -version</code>。</p>
<h3 id="visual-studio-2022-runtimes" tabindex="-1"><a class="header-anchor" href="#visual-studio-2022-runtimes"><span>visual studio 2022 runtimes</span></a></h3>
<p><a href="https://visualstudio.microsoft.com/visual-cpp-build-tools/" target="_blank" rel="noopener noreferrer">官网</a></p>
<p>下载 C++ 相关工具即可。</p>
<h2 id="_2-克隆仓库" tabindex="-1"><a class="header-anchor" href="#_2-克隆仓库"><span>2. 克隆仓库</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">git</span> clone https://github.com/hacksider/Deep-Live-Cam.git</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_3-下载模型" tabindex="-1"><a class="header-anchor" href="#_3-下载模型"><span>3. 下载模型</span></a></h2>
<p>下载如下两个模型到 <code v-pre>models</code> 文件夹下。</p>
<p><a href="https://huggingface.co/hacksider/deep-live-cam/resolve/main/GFPGANv1.4.pth" target="_blank" rel="noopener noreferrer">GFPGANv1.4</a></p>
<p><a href="https://huggingface.co/hacksider/deep-live-cam/resolve/main/inswapper_128_fp16.onnx" target="_blank" rel="noopener noreferrer">inswapper_128_fp16.onnx</a></p>
<h2 id="_4-安装依赖" tabindex="-1"><a class="header-anchor" href="#_4-安装依赖"><span>4. 安装依赖</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">pip <span class="token function">install</span> <span class="token parameter variable">-r</span> requirements.txt</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_5-gpu-cuda-加速" tabindex="-1"><a class="header-anchor" href="#_5-gpu-cuda-加速"><span>5. GPU Cuda 加速</span></a></h2>
<p><strong>1. 安装 Cuda</strong></p>
<p>深度学习笔记中有。</p>
<p><strong>2. 安装依赖</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">pip uninstall onnxruntime onnxruntime-gpu</span>
<span class="line">pip <span class="token function">install</span> onnxruntime-gpu<span class="token operator">==</span><span class="token number">1.16</span>.3</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3. 运行</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">python run.py --execution-provider cuda</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-使用及注意事项" tabindex="-1"><a class="header-anchor" href="#_6-使用及注意事项"><span>6. 使用及注意事项</span></a></h2>
<p><img src="@source/ai_application/deep_live_cam/img_2.png" alt="img_2.png"></p>
<p>图片名称不能为中文。</p>
</div></template>


