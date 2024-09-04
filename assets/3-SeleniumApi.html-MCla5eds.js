import{_ as n,c as s,o as a,a as e}from"./app-CfWMsw_m.js";const p="/yi-doc/assets/img_2-EwTEb8eg.png",l="/yi-doc/assets/img_3-gmRnY2J6.png",i="/yi-doc/assets/img_4-CHcgoq7-.png",t="/yi-doc/assets/img_5-D8OXpJMS.png",c="/yi-doc/assets/img_6-nLiVb1Ft.png",o="/yi-doc/assets/img_8-DGRIWxTU.png",u="/yi-doc/assets/img_9-CCRL1BWJ.png",r="/yi-doc/assets/img_10-B3tK-Kvc.png",d="/yi-doc/assets/img_11-BhPdu_Wl.png",m="/yi-doc/assets/img_12-CKWtoiDY.png",v="/yi-doc/assets/img_13-DJaDQzft.png",k="/yi-doc/assets/img_14-CjHYAZhM.png",b="/yi-doc/assets/img_15-JUdODn3b.png",E="/yi-doc/assets/img_16-Cw8K_oL9.png",_="/yi-doc/assets/img_17-Djg7c7S-.png",A="/yi-doc/assets/img_18-B-do7iqu.png",g="/yi-doc/assets/img_19-W2qWSfFy.png",h="/yi-doc/assets/img_20-BKYGojIx.png",B="/yi-doc/assets/img_21-BopIUMX5.png",w="/yi-doc/assets/img_22-Cprb13Ui.png",y="/yi-doc/assets/img_23-CBEg7iDh.png",f="/yi-doc/assets/img_24-DztW0eOY.png",C="/yi-doc/assets/img_25-JchOgC_0.png",x="/yi-doc/assets/img_26-riPKs4nU.png",D="/yi-doc/assets/img_27-D4alCJuX.png",q="/yi-doc/assets/img_28-CmcPmWXj.png",F="/yi-doc/assets/img_29-D8J_3qBn.png",j="/yi-doc/assets/img_30-CcdXnH9H.png",S="/yi-doc/assets/img_31-B_jY60iq.png",I="/yi-doc/assets/img_31-B_jY60iq.png",W="/yi-doc/assets/img_34-Los7dv2N.png",z="/yi-doc/assets/img_33-CaYYcmq1.png",T="/yi-doc/assets/img_35-Df4m2S0U.png",X="/yi-doc/assets/img_36-Dn6RyfZk.png",L="/yi-doc/assets/img_37-BMjKs4FN.png",K="/yi-doc/assets/img_38-BpYjxBF6.png",O="/yi-doc/assets/img_39--w7feqRV.png",R="/yi-doc/assets/img_40-sZ0cLpMy.png",J="/yi-doc/assets/img_41-DJ2XI-S9.png",M="/yi-doc/assets/img_42-G-8EpxAq.png",U="/yi-doc/assets/img_43-Cow0W6RN.png",Y="/yi-doc/assets/img_44-S_WFRmtO.png",Z="/yi-doc/assets/img_45-rHROay55.png",H="/yi-doc/assets/img_46-C-DQWT1D.png",N="/yi-doc/assets/img_47-DQkIOUSI.png",P="/yi-doc/assets/img_48-IoJf7oHz.png",G="/yi-doc/assets/img_49-BWWUDdb6.png",Q="/yi-doc/assets/img_50-CBDq7x5Z.png",V="/yi-doc/assets/img_51-CmU781p9.png",$="/yi-doc/assets/img_52-BwmhB1gR.png",nn="/yi-doc/assets/img_53-CqL_3UqO.png",sn="/yi-doc/assets/img_54-C2Ea4cf6.png",an="/yi-doc/assets/img_55-BNPbBBf5.png",en="/yi-doc/assets/img_56-BK80lnIP.png",pn="/yi-doc/assets/img_57-CD8ZpCKi.png",ln="/yi-doc/assets/img_58-CDrZR1_Y.png",tn="/yi-doc/assets/img_59-BGjkmk1-.png",cn={},on=e('<h1 id="三、selenium-api" tabindex="-1"><a class="header-anchor" href="#三、selenium-api"><span>三、Selenium-API</span></a></h1><h2 id="_1、元素定位" tabindex="-1"><a class="header-anchor" href="#_1、元素定位"><span>1、元素定位</span></a></h2><p>元素定位：通过元素的属性信息和元素的层级信息进行定位。 Selenium 提供了八种元素定位方式：</p><ol><li>id</li><li>name</li><li>class_name：类名</li><li>tag_name：标签名</li><li>link_text：定位超链接</li><li>partial_link_text：定位超链接，模糊</li><li>Xpath：基于元素路径定位</li><li>css：基于元素选择器定位</li></ol><h3 id="_1-id-定位" tabindex="-1"><a class="header-anchor" href="#_1-id-定位"><span>(1) id 定位</span></a></h3><p>使用前提：元素有 id 属性。 语法：<code>element = browser.find_element_by_id(元素id)</code></p><p><strong>使用案例</strong></p><p><img src="'+p+`" alt="img_2.png"></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line"><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取浏览器对象</span></span>
<span class="line">browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 打开所需页面</span></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;file:///D:/%E5%AD%A6%E4%B9%A0/8%E5%A4%A9web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%A5%97%E6%B5%8B%E8%AF%95%E2%80%94%E8%B5%84%E6%96%99/web%E8%87%AA%E5%8A%A8%E5%8C%96_day01_%E8%AF%BE%E4%BB%B6+%E7%AC%94%E8%AE%B0+%E8%B5%84%E6%96%99+%E4%BB%A3%E7%A0%81/02_%E5%85%B6%E4%BB%96%E8%B5%84%E6%96%99/%E6%B3%A8%E5%86%8CA.html&#39;</span></span>
<span class="line">browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 找到账号和密码输入框</span></span>
<span class="line">usernameInput <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element_by_id<span class="token punctuation">(</span><span class="token string">&#39;userA&#39;</span><span class="token punctuation">)</span></span>
<span class="line">passwordInput <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element_by_id<span class="token punctuation">(</span><span class="token string">&#39;passwordA&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 向账号和密码中填入内容</span></span>
<span class="line">usernameInput<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span></span>
<span class="line">passwordInput<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;123456&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 休眠三秒</span></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 退出页面</span></span>
<span class="line">browser<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Selenium 中，<code>send_keys()</code>方法用于向输入框或可编辑的元素发送文本，它模拟用户在键盘上输入文本的操作。 使用语法：<code>element.send_keys(*value)</code></p><h3 id="_2-name-定位" tabindex="-1"><a class="header-anchor" href="#_2-name-定位"><span>(2) name 定位</span></a></h3><p>使用前提：元素有 name 属性。 注意：HTML 中的 name 属性是可以重复的。 语法：<code>driver.find_element_by_name(name)</code></p><p><strong>使用案例</strong></p><p><img src="`+l+`" alt="img_3.png"></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver</span>
<span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建浏览器对象</span></span>
<span class="line">driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 打开指定地址</span></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;file:///D:/%E5%AD%A6%E4%B9%A0/8%E5%A4%A9web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%A5%97%E6%B5%8B%E8%AF%95%E2%80%94%E8%B5%84%E6%96%99/web%E8%87%AA%E5%8A%A8%E5%8C%96_day01_%E8%AF%BE%E4%BB%B6+%E7%AC%94%E8%AE%B0+%E8%B5%84%E6%96%99+%E4%BB%A3%E7%A0%81/02_%E5%85%B6%E4%BB%96%E8%B5%84%E6%96%99/%E6%B3%A8%E5%86%8CA.html&#39;</span></span>
<span class="line">driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用 name 定位元素</span></span>
<span class="line">username <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_element_by_name<span class="token punctuation">(</span><span class="token string">&#39;userA&#39;</span><span class="token punctuation">)</span></span>
<span class="line">password <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_element_by_name<span class="token punctuation">(</span><span class="token string">&#39;passwordA&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 向输入框填充内容</span></span>
<span class="line">username<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span></span>
<span class="line">password<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;123456&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 等待 3 秒</span></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 退出浏览器</span></span>
<span class="line">driver<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-class-name-定位" tabindex="-1"><a class="header-anchor" href="#_3-class-name-定位"><span>(3) class_name 定位</span></a></h3><p>说明：使用 HTML 元素类名进行定位。多个 HTML 元素可以有相同的类名。</p><p>语法：<code>browser.find_element_by_class_name(class_name)</code></p><p><strong>使用案例</strong></p><p><img src="`+i+`" alt="img_4.png"></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line"><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建浏览器对象</span></span>
<span class="line">browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 访问指定 url</span></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;file:///D:/%E5%AD%A6%E4%B9%A0/8%E5%A4%A9web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%A5%97%E6%B5%8B%E8%AF%95%E2%80%94%E8%B5%84%E6%96%99/web%E8%87%AA%E5%8A%A8%E5%8C%96_day01_%E8%AF%BE%E4%BB%B6+%E7%AC%94%E8%AE%B0+%E8%B5%84%E6%96%99+%E4%BB%A3%E7%A0%81/02_%E5%85%B6%E4%BB%96%E8%B5%84%E6%96%99/%E6%B3%A8%E5%86%8CA.html&#39;</span></span>
<span class="line">browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用类名进行定位</span></span>
<span class="line">telephone <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element_by_class_name<span class="token punctuation">(</span><span class="token string">&#39;telA&#39;</span><span class="token punctuation">)</span></span>
<span class="line">email <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element_by_id<span class="token punctuation">(</span><span class="token string">&#39;emailA&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 向元素填充内容</span></span>
<span class="line">telephone<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;18611111111&#39;</span><span class="token punctuation">)</span></span>
<span class="line">email<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;123@qq.com&#39;</span><span class="token punctuation">)</span></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 退出</span></span>
<span class="line">browser<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-tag-name-定位" tabindex="-1"><a class="header-anchor" href="#_4-tag-name-定位"><span>(4) tag_name 定位</span></a></h3><p>说明：通过元素标签名进行定位，不方便进行精准定位，很少使用。</p><p>如果有多个元素，只会定位第一个。</p><p>语法：<code>driver.find_element_by_tag_name(tag_name)</code></p><p><strong>使用案例</strong></p><p><img src="`+t+`" alt="img_5.png"></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line"><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建浏览器对象</span></span>
<span class="line">browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 访问指定 url</span></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;file:///D:/%E5%AD%A6%E4%B9%A0/8%E5%A4%A9web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%A5%97%E6%B5%8B%E8%AF%95%E2%80%94%E8%B5%84%E6%96%99/web%E8%87%AA%E5%8A%A8%E5%8C%96_day01_%E8%AF%BE%E4%BB%B6+%E7%AC%94%E8%AE%B0+%E8%B5%84%E6%96%99+%E4%BB%A3%E7%A0%81/02_%E5%85%B6%E4%BB%96%E8%B5%84%E6%96%99/%E6%B3%A8%E5%86%8CA.html&#39;</span></span>
<span class="line">browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用标签定位元素</span></span>
<span class="line">username <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element_by_tag_name<span class="token punctuation">(</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 向元素中填充内容</span></span>
<span class="line">username<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 退出</span></span>
<span class="line">browser<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-link-text-定位" tabindex="-1"><a class="header-anchor" href="#_5-link-text-定位"><span>(5) link_text 定位</span></a></h3><p>专门用于定位超链接元素(<code>&lt;a&gt;</code>标签)，根据超链接文本内容定位元素。</p><p>语法：<code>element = driver.find_element_by_link_text(link_text)</code></p><ul><li><code>link_text</code>为超链接全部文本内容</li></ul><p><strong>使用案例</strong></p><p><img src="`+c+`" alt="img_6.png"></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line"><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建浏览器对象</span></span>
<span class="line">browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 打开指定 url</span></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;file:///D:/%E5%AD%A6%E4%B9%A0/8%E5%A4%A9web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%A5%97%E6%B5%8B%E8%AF%95%E2%80%94%E8%B5%84%E6%96%99/web%E8%87%AA%E5%8A%A8%E5%8C%96_day01_%E8%AF%BE%E4%BB%B6+%E7%AC%94%E8%AE%B0+%E8%B5%84%E6%96%99+%E4%BB%A3%E7%A0%81/02_%E5%85%B6%E4%BB%96%E8%B5%84%E6%96%99/%E6%B3%A8%E5%86%8CA.html&#39;</span></span>
<span class="line">browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用 link_text 定位超链接</span></span>
<span class="line">element <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element_by_link_text<span class="token punctuation">(</span><span class="token string">&#39;访问 新浪 网站&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 点击超链接</span></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line">element<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 退出</span></span>
<span class="line">browser<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>click()</code>方法会触发元素的单击事件。</p></blockquote><h3 id="_6-partial-link-text-定位" tabindex="-1"><a class="header-anchor" href="#_6-partial-link-text-定位"><span>(6) partial_link_text 定位</span></a></h3><p>说明：partial_link_text 定位是对 link_text 定位的补充，模糊匹配。</p><p>语法：<code>element = driver.find_element_by_partial_link_text(partial_link_text)</code></p><p><strong>使用案例</strong></p><p><img src="`+o+`" alt="img_8.png"></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line"><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建浏览器对象</span></span>
<span class="line">browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 访问指定 url</span></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;file:///D:/%E5%AD%A6%E4%B9%A0/8%E5%A4%A9web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%A5%97%E6%B5%8B%E8%AF%95%E2%80%94%E8%B5%84%E6%96%99/web%E8%87%AA%E5%8A%A8%E5%8C%96_day01_%E8%AF%BE%E4%BB%B6+%E7%AC%94%E8%AE%B0+%E8%B5%84%E6%96%99+%E4%BB%A3%E7%A0%81/02_%E5%85%B6%E4%BB%96%E8%B5%84%E6%96%99/%E6%B3%A8%E5%86%8CA.html&#39;</span></span>
<span class="line">browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用 partial_link_text 定位超链接</span></span>
<span class="line">link <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element_by_partial_link_text<span class="token punctuation">(</span><span class="token string">&#39;新浪&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 点击超链接</span></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line">link<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 退出</span></span>
<span class="line">browser<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-定位一组元素" tabindex="-1"><a class="header-anchor" href="#_7-定位一组元素"><span>(7) 定位一组元素</span></a></h3><p>返回所有定位到的元素列表。</p><p>语法：<code>find_elements_by_xxx()</code></p><p><strong>使用案例</strong></p><p><img src="`+u+`" alt="img_9.png"></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line"><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建浏览器对象</span></span>
<span class="line">browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 访问指定 url</span></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;file:///D:/%E5%AD%A6%E4%B9%A0/8%E5%A4%A9web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%A5%97%E6%B5%8B%E8%AF%95%E2%80%94%E8%B5%84%E6%96%99/web%E8%87%AA%E5%8A%A8%E5%8C%96_day01_%E8%AF%BE%E4%BB%B6+%E7%AC%94%E8%AE%B0+%E8%B5%84%E6%96%99+%E4%BB%A3%E7%A0%81/02_%E5%85%B6%E4%BB%96%E8%B5%84%E6%96%99/%E6%B3%A8%E5%86%8CA.html&#39;</span></span>
<span class="line">browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用标签定位所有输入框</span></span>
<span class="line">input_list <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_elements_by_tag_name<span class="token punctuation">(</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 向第二个输入框中填充内容</span></span>
<span class="line">input_list<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;123456&#39;</span><span class="token punctuation">)</span></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 退出</span></span>
<span class="line">browser<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-xpath-定位" tabindex="-1"><a class="header-anchor" href="#_8-xpath-定位"><span>(8) Xpath 定位</span></a></h3><p>出现原因：很多元素无法通过<code>id</code>、<code>name</code>或<code>class_name</code>定位，如：</p><p><img src="`+r+'" alt="img_10.png"></p><p>语法：<code>element = driver.find_element_by_xpath(xpath)</code></p><h4 id="_1-何为-xpath" tabindex="-1"><a class="header-anchor" href="#_1-何为-xpath"><span>1.何为 Xpath？</span></a></h4><p>Xpath 是 XML path 的简称，HTML 是 XML 的一种实现，Xpath 定位就是通过 XML 语言进行定位。</p><h4 id="_2-xpath-定位方法" tabindex="-1"><a class="header-anchor" href="#_2-xpath-定位方法"><span>2.Xpath 定位方法</span></a></h4><ol><li>路径定位（绝对路径、相对路径）</li></ol><p>绝对路径：从最外层元素到指定元素之间所有经过元素层级的路径。</p><p><img src="'+d+'" alt="img_11.png"></p><p>相对路径：匹配任意层级的元素，不限制元素的位置。</p><p><img src="'+m+'" alt="img_12.png"></p><p><strong>使用案例</strong></p><p><img src="'+v+`" alt="img_13.png"></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line"><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建浏览器对象</span></span>
<span class="line">browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 访问指定 url</span></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;file:///D:/%E5%AD%A6%E4%B9%A0/8%E5%A4%A9web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%A5%97%E6%B5%8B%E8%AF%95%E2%80%94%E8%B5%84%E6%96%99/web%E8%87%AA%E5%8A%A8%E5%8C%96_day01_%E8%AF%BE%E4%BB%B6+%E7%AC%94%E8%AE%B0+%E8%B5%84%E6%96%99+%E4%BB%A3%E7%A0%81/02_%E5%85%B6%E4%BB%96%E8%B5%84%E6%96%99/%E6%B3%A8%E5%86%8CA.html&#39;</span></span>
<span class="line">browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用绝对定位定位用户名输入框</span></span>
<span class="line">Xpath <span class="token operator">=</span> <span class="token string">&#39;/html/body/form/div/fieldset/p[1]/input&#39;</span></span>
<span class="line">username <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element_by_xpath<span class="token punctuation">(</span>Xpath<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 向用户名输入框输入 &#39;admin&#39;</span></span>
<span class="line">username<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 清除输入框内容</span></span>
<span class="line">username<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用相对定位定位用户名输入框</span></span>
<span class="line">Xpath <span class="token operator">=</span> <span class="token string">&#39;//*[@id=&quot;userA&quot;]&#39;</span></span>
<span class="line">username <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element_by_xpath<span class="token punctuation">(</span>Xpath<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 向用户名输入框输入 &#39;123&#39;</span></span>
<span class="line">username<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 退出</span></span>
<span class="line">browser<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>clear()</code>方法可以清除元素的内容。</p></blockquote><ol start="2"><li>利用元素属性</li></ol><p>通过元素的属性信息来定位元素。 格式：<code>//input[@id=&#39;userA&#39;]</code>或<code>//#[@id=&#39;userA&#39;]</code></p><p><strong>使用案例</strong></p><p><img src="`+k+`" alt="img_14.png"></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line"><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建浏览器对象</span></span>
<span class="line">browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 访问指定 url</span></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;file:///D:/%E5%AD%A6%E4%B9%A0/8%E5%A4%A9web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%A5%97%E6%B5%8B%E8%AF%95%E2%80%94%E8%B5%84%E6%96%99/web%E8%87%AA%E5%8A%A8%E5%8C%96_day01_%E8%AF%BE%E4%BB%B6+%E7%AC%94%E8%AE%B0+%E8%B5%84%E6%96%99+%E4%BB%A3%E7%A0%81/02_%E5%85%B6%E4%BB%96%E8%B5%84%E6%96%99/%E6%B3%A8%E5%86%8CA.html&#39;</span></span>
<span class="line">browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用元素属性定位输入框</span></span>
<span class="line">xpath <span class="token operator">=</span> <span class="token string">&#39;//*[@id=&quot;userA&quot;]&#39;</span></span>
<span class="line">browser<span class="token punctuation">.</span>find_element_by_xpath<span class="token punctuation">(</span>xpath<span class="token punctuation">)</span><span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 退出</span></span>
<span class="line">browser<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>属性与逻辑结合</li></ol><p>使用多个属性，解决多个元素属性不匹配的问题。 格式：<code>//*[@name=&quot;tel&quot; and @class=&quot;tel&quot;]</code></p><p><strong>使用案例</strong></p><p><img src="`+b+`" alt="img_15.png"></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line"><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建浏览器对象</span></span>
<span class="line">browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 访问指定 url</span></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;file:///D:/%E5%AD%A6%E4%B9%A0/8%E5%A4%A9web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%A5%97%E6%B5%8B%E8%AF%95%E2%80%94%E8%B5%84%E6%96%99/web%E8%87%AA%E5%8A%A8%E5%8C%96_day01_%E8%AF%BE%E4%BB%B6+%E7%AC%94%E8%AE%B0+%E8%B5%84%E6%96%99+%E4%BB%A3%E7%A0%81/02_%E5%85%B6%E4%BB%96%E8%B5%84%E6%96%99/%E6%B3%A8%E5%86%8CA.html&#39;</span></span>
<span class="line">browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用元素属性和逻辑定位输入框</span></span>
<span class="line">xpath <span class="token operator">=</span> <span class="token string">&#39;//input[@id=&quot;telA&quot; and @class=&quot;telA&quot;]&#39;</span></span>
<span class="line">browser<span class="token punctuation">.</span>find_element_by_xpath<span class="token punctuation">(</span>xpath<span class="token punctuation">)</span><span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 退出</span></span>
<span class="line">browser<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>层级和属性结合</li></ol><p>灵活使用层级、属性进行定位。</p><p>语法：<code>//*[@id=&#39;p1&#39;]/input</code></p><p><strong>使用案例</strong></p><p><img src="`+E+`" alt="img_16.png"></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line"><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建浏览器对象</span></span>
<span class="line">browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 访问指定 url</span></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;file:///D:/%E5%AD%A6%E4%B9%A0/8%E5%A4%A9web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%A5%97%E6%B5%8B%E8%AF%95%E2%80%94%E8%B5%84%E6%96%99/web%E8%87%AA%E5%8A%A8%E5%8C%96_day01_%E8%AF%BE%E4%BB%B6+%E7%AC%94%E8%AE%B0+%E8%B5%84%E6%96%99+%E4%BB%A3%E7%A0%81/02_%E5%85%B6%E4%BB%96%E8%B5%84%E6%96%99/%E6%B3%A8%E5%86%8CA.html&#39;</span></span>
<span class="line">browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 定位用户名输入框</span></span>
<span class="line">xpath <span class="token operator">=</span> <span class="token string">&#39;//p[@id=&quot;p1&quot;]/input[@name=&quot;userA&quot;]&#39;</span></span>
<span class="line">browser<span class="token punctuation">.</span>find_element_by_xpath<span class="token punctuation">(</span>xpath<span class="token punctuation">)</span><span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 退出</span></span>
<span class="line">browser<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>知识拓展：Xpath 定位其他方式</strong><img src="`+_+'" alt="img_17.png"></p><h3 id="_9-css-定位" tabindex="-1"><a class="header-anchor" href="#_9-css-定位"><span>(9) css 定位</span></a></h3><p>在 selenium 中推荐使用 css 定位，它比 xpath 定位要快。 语法：<code>element = driver.find_element_by_css_selector(css_selector)</code> css 常用的定位方式：</p><ul><li>id 选择器：<code>#id</code></li><li>class 选择器：<code>.class</code></li><li>元素选择器：<code>element</code></li><li>属性选择器：<code>element[attribute=value]</code></li><li>层级选择器：</li></ul><p>直接子元素：<code>element_father &gt; element_son</code></p><p>后代元素：<code>element_ancestor element_descendant</code></p><p><img src="'+A+'" alt="img_18.png"></p><p><strong>使用案例</strong></p><p><img src="'+g+`" alt="img_19.png"></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line"><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建浏览器对象</span></span>
<span class="line">browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 访问指定 url</span></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;file:///D:/%E5%AD%A6%E4%B9%A0/8%E5%A4%A9web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%A5%97%E6%B5%8B%E8%AF%95%E2%80%94%E8%B5%84%E6%96%99/web%E8%87%AA%E5%8A%A8%E5%8C%96_day01_%E8%AF%BE%E4%BB%B6+%E7%AC%94%E8%AE%B0+%E8%B5%84%E6%96%99+%E4%BB%A3%E7%A0%81/02_%E5%85%B6%E4%BB%96%E8%B5%84%E6%96%99/%E6%B3%A8%E5%86%8CA.html&#39;</span></span>
<span class="line">browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 向用户名输入框输入 admin</span></span>
<span class="line">browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&#39;#userA&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 向密码输入框输入 123456</span></span>
<span class="line">browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&#39;input[type=&quot;password&quot;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;123456&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 向电话号码输入框输入 18600000000</span></span>
<span class="line">browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&#39;.telA&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;18600000000&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 点击注册按钮</span></span>
<span class="line">browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&#39;#zc &gt; fieldset &gt; button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 退出</span></span>
<span class="line">browser<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>拓展知识：css 其他定位方式</strong><img src="`+h+`" alt="img_20.png"></p></blockquote><h2 id="_2、元素操作与浏览器操作" tabindex="-1"><a class="header-anchor" href="#_2、元素操作与浏览器操作"><span>2、元素操作与浏览器操作</span></a></h2><h3 id="_1-元素常用操作方法" tabindex="-1"><a class="header-anchor" href="#_1-元素常用操作方法"><span>(1) 元素常用操作方法</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># 单击元素</span></span>
<span class="line">click<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 模拟输入</span></span>
<span class="line">send_keys<span class="token punctuation">(</span>value<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 清除文本</span></span>
<span class="line">clear<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用案例</strong></p><p><img src="`+B+`" alt="img_21.png"></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line"><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建浏览器对象</span></span>
<span class="line">browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 访问指定 url</span></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;file:///D:/%E5%AD%A6%E4%B9%A0/8%E5%A4%A9web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%A5%97%E6%B5%8B%E8%AF%95%E2%80%94%E8%B5%84%E6%96%99/web%E8%87%AA%E5%8A%A8%E5%8C%96_day01_%E8%AF%BE%E4%BB%B6+%E7%AC%94%E8%AE%B0+%E8%B5%84%E6%96%99+%E4%BB%A3%E7%A0%81/02_%E5%85%B6%E4%BB%96%E8%B5%84%E6%96%99/%E6%B3%A8%E5%86%8CA.html&#39;</span></span>
<span class="line">browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 输入用户名：admin</span></span>
<span class="line">browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&#39;#userA&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 输入密码：123456</span></span>
<span class="line">browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&#39;#passwordA&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;123456&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 电话号码：18611111111</span></span>
<span class="line">telephone <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&#39;#telA&#39;</span><span class="token punctuation">)</span></span>
<span class="line">telephone<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;18611111111&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 电子邮箱：123@qq.com</span></span>
<span class="line">browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&#39;#emailA&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;123@qq.com&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 修改电话号码为：18600000000</span></span>
<span class="line">telephone<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">telephone<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;18600000000&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 点击注册</span></span>
<span class="line">browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&#39;#zc &gt; fieldset &gt; button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 退出</span></span>
<span class="line">browser<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-浏览器操作" tabindex="-1"><a class="header-anchor" href="#_2-浏览器操作"><span>(2) 浏览器操作</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># 最大化浏览器</span></span>
<span class="line">maximize_window<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置浏览器窗口大小</span></span>
<span class="line">set_window_size<span class="token punctuation">(</span>width<span class="token punctuation">,</span> height<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置浏览器窗口位置</span></span>
<span class="line">set_window_position<span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 后退</span></span>
<span class="line">back<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 前进</span></span>
<span class="line">forward<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 刷新</span></span>
<span class="line">refresh<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 关闭当前窗口</span></span>
<span class="line">close<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 关闭浏览器驱动对象</span></span>
<span class="line">quit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取页面标题</span></span>
<span class="line">title</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取当前页面的 url 地址</span></span>
<span class="line">current_url</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-获取元素信息" tabindex="-1"><a class="header-anchor" href="#_3-获取元素信息"><span>(3) 获取元素信息</span></a></h3><p><img src="`+w+'" alt="img_22.png"></p><p><strong>使用案例</strong></p><p><img src="'+y+`" alt="img_23.png"></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line"><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建浏览器对象</span></span>
<span class="line">browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 访问指定 url</span></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;file:///D:/%E5%AD%A6%E4%B9%A0/8%E5%A4%A9web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%A5%97%E6%B5%8B%E8%AF%95%E2%80%94%E8%B5%84%E6%96%99/web%E8%87%AA%E5%8A%A8%E5%8C%96_day01_%E8%AF%BE%E4%BB%B6+%E7%AC%94%E8%AE%B0+%E8%B5%84%E6%96%99+%E4%BB%A3%E7%A0%81/02_%E5%85%B6%E4%BB%96%E8%B5%84%E6%96%99/%E6%B3%A8%E5%86%8CA.html&#39;</span></span>
<span class="line">browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取用户名输入框的大小</span></span>
<span class="line">username <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&#39;#userA&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>username<span class="token punctuation">.</span>size<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取页面上第一个超链接的文本内容</span></span>
<span class="line">first_link <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_elements_by_tag_name<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;超链接文本内容为：&#39;</span> <span class="token operator">+</span> first_link<span class="token punctuation">.</span>text<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取页面上第一个超链接的地址</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;第一个超链接地址：&#39;</span> <span class="token operator">+</span> first_link<span class="token punctuation">.</span>get_attribute<span class="token punctuation">(</span><span class="token string">&#39;href&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 判断页面中的 span 标签是否可见</span></span>
<span class="line">span_tag <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element_by_tag_name<span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>span_tag<span class="token punctuation">.</span>is_displayed<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 判断页面上的取消按钮是否可用</span></span>
<span class="line">cancelBtn <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&#39;#cancelA&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>cancelBtn<span class="token punctuation">.</span>is_enabled<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 判断页面中 “旅游” 对应的复选框是否选中</span></span>
<span class="line">lyCheckbox <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&#39;#lyA&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>lyCheckbox<span class="token punctuation">.</span>is_selected<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 退出</span></span>
<span class="line">browser<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、鼠标和键盘操作" tabindex="-1"><a class="header-anchor" href="#_3、鼠标和键盘操作"><span>3、鼠标和键盘操作</span></a></h2><h3 id="_1-鼠标操作" tabindex="-1"><a class="header-anchor" href="#_1-鼠标操作"><span>(1) 鼠标操作</span></a></h3><p>在 Selenium 中，将操作鼠标的方法封装在<code>ActionChains</code>（动作链）类中。 实例化对象：<code>action = ActionChains(driver)</code> 使用到的方法：</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># 右击</span></span>
<span class="line">context_click<span class="token punctuation">(</span>element<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 双击</span></span>
<span class="line">double_click<span class="token punctuation">(</span>element<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 拖动</span></span>
<span class="line">drag_and_drop<span class="token punctuation">(</span>source<span class="token punctuation">,</span> target<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 悬停</span></span>
<span class="line">move_to_element<span class="token punctuation">(</span>element<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 执行</span></span>
<span class="line">perform<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><code>perform()</code></li></ol><p>上述四个方法调用时，动作按顺序存储到了<code>ActionChains</code>实例对象中，调用<code>perform()</code>方法后，才会真正执行动作。</p><ol start="2"><li><code>context_click()</code></li></ol><p>鼠标右击后，如果弹出浏览器默认菜单，selenium 未提供操作默认菜单的方法；如果弹出自定义菜单，则可根据元素定位操作自定义菜单。</p><p><strong>使用案例</strong></p><p><img src="`+f+`" alt="img_24.png"></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line"><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver</span>
<span class="line"><span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver <span class="token keyword">import</span> ActionChains</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建浏览器对象</span></span>
<span class="line">browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 访问指定 url</span></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;file:///D:/%E5%AD%A6%E4%B9%A0/8%E5%A4%A9web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%A5%97%E6%B5%8B%E8%AF%95%E2%80%94%E8%B5%84%E6%96%99/web%E8%87%AA%E5%8A%A8%E5%8C%96_day01_%E8%AF%BE%E4%BB%B6+%E7%AC%94%E8%AE%B0+%E8%B5%84%E6%96%99+%E4%BB%A3%E7%A0%81/02_%E5%85%B6%E4%BB%96%E8%B5%84%E6%96%99/%E6%B3%A8%E5%86%8CA.html&#39;</span></span>
<span class="line">browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 右击账号输入框</span></span>
<span class="line">action <span class="token operator">=</span> ActionChains<span class="token punctuation">(</span>browser<span class="token punctuation">)</span></span>
<span class="line">username <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&#39;#userA&#39;</span><span class="token punctuation">)</span></span>
<span class="line">action<span class="token punctuation">.</span>context_click<span class="token punctuation">(</span>username<span class="token punctuation">)</span></span>
<span class="line">action<span class="token punctuation">.</span>perform<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 退出</span></span>
<span class="line">browser<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><code>double_click()</code></li></ol><p><strong>使用案例</strong></p><p><img src="`+C+`" alt="img_25.png"></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line"><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver</span>
<span class="line"><span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver <span class="token keyword">import</span> ActionChains</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建浏览器对象</span></span>
<span class="line">browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 访问指定 url</span></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;file:///D:/%E5%AD%A6%E4%B9%A0/8%E5%A4%A9web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%A5%97%E6%B5%8B%E8%AF%95%E2%80%94%E8%B5%84%E6%96%99/web%E8%87%AA%E5%8A%A8%E5%8C%96_day01_%E8%AF%BE%E4%BB%B6+%E7%AC%94%E8%AE%B0+%E8%B5%84%E6%96%99+%E4%BB%A3%E7%A0%81/02_%E5%85%B6%E4%BB%96%E8%B5%84%E6%96%99/%E6%B3%A8%E5%86%8CA.html&#39;</span></span>
<span class="line">browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 输入账号：admin</span></span>
<span class="line">usernameInput <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&#39;#userA&#39;</span><span class="token punctuation">)</span></span>
<span class="line">usernameInput<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 双击账号输入框</span></span>
<span class="line">action <span class="token operator">=</span> ActionChains<span class="token punctuation">(</span>browser<span class="token punctuation">)</span></span>
<span class="line">action<span class="token punctuation">.</span>double_click<span class="token punctuation">(</span>usernameInput<span class="token punctuation">)</span></span>
<span class="line">action<span class="token punctuation">.</span>perform<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 退出</span></span>
<span class="line">browser<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><code>drag_and_drop()</code></li></ol><p><strong>使用案例</strong></p><p><img src="`+x+`" alt="img_26.png"></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line"><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver</span>
<span class="line"><span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver <span class="token keyword">import</span> ActionChains</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建浏览器对象</span></span>
<span class="line">browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 访问指定 url</span></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;file:///D:/%E5%AD%A6%E4%B9%A0/8%E5%A4%A9web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%A5%97%E6%B5%8B%E8%AF%95%E2%80%94%E8%B5%84%E6%96%99/web%E8%87%AA%E5%8A%A8%E5%8C%96_day01_%E8%AF%BE%E4%BB%B6+%E7%AC%94%E8%AE%B0+%E8%B5%84%E6%96%99+%E4%BB%A3%E7%A0%81/02_%E5%85%B6%E4%BB%96%E8%B5%84%E6%96%99/drop.html&#39;</span></span>
<span class="line">browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 将红色方框拖拽到蓝色方框</span></span>
<span class="line">source <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&#39;#div1&#39;</span><span class="token punctuation">)</span></span>
<span class="line">target <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&#39;#div2&#39;</span><span class="token punctuation">)</span></span>
<span class="line">action <span class="token operator">=</span> ActionChains<span class="token punctuation">(</span>browser<span class="token punctuation">)</span></span>
<span class="line">action<span class="token punctuation">.</span>drag_and_drop<span class="token punctuation">(</span>source<span class="token punctuation">,</span> target<span class="token punctuation">)</span></span>
<span class="line">action<span class="token punctuation">.</span>perform<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 退出</span></span>
<span class="line">browser<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li><code>move_to_element()</code></li></ol><p><img src="`+D+`" alt="img_27.png"></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line"><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver</span>
<span class="line"><span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver <span class="token keyword">import</span> ActionChains</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建浏览器对象</span></span>
<span class="line">browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 访问指定 url</span></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;file:///D:/%E5%AD%A6%E4%B9%A0/8%E5%A4%A9web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%A5%97%E6%B5%8B%E8%AF%95%E2%80%94%E8%B5%84%E6%96%99/web%E8%87%AA%E5%8A%A8%E5%8C%96_day01_%E8%AF%BE%E4%BB%B6+%E7%AC%94%E8%AE%B0+%E8%B5%84%E6%96%99+%E4%BB%A3%E7%A0%81/02_%E5%85%B6%E4%BB%96%E8%B5%84%E6%96%99/%E6%B3%A8%E5%86%8CA.html&#39;</span></span>
<span class="line">browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line">browser<span class="token punctuation">.</span>maximize_window<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 将鼠标悬停在注册按钮上</span></span>
<span class="line">registerBtn <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&#39;#zc &gt; fieldset &gt; button&#39;</span><span class="token punctuation">)</span></span>
<span class="line">action <span class="token operator">=</span> ActionChains<span class="token punctuation">(</span>browser<span class="token punctuation">)</span><span class="token punctuation">.</span>move_to_element<span class="token punctuation">(</span>registerBtn<span class="token punctuation">)</span></span>
<span class="line">action<span class="token punctuation">.</span>move_to_element<span class="token punctuation">(</span>registerBtn<span class="token punctuation">)</span></span>
<span class="line">action<span class="token punctuation">.</span>perform<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 退出</span></span>
<span class="line">browser<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-键盘操作" tabindex="-1"><a class="header-anchor" href="#_2-键盘操作"><span>(2) 键盘操作</span></a></h3><p>Selenium 将键盘按键封装在<code>Keys</code>中。</p><p>常用键盘操作：</p><p><img src="`+q+'" alt="img_28.png"></p><p><strong>使用案例</strong></p><p><img src="'+F+`" alt="img_29.png"></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line"><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver</span>
<span class="line"><span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver <span class="token keyword">import</span> ActionChains</span>
<span class="line"><span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>common<span class="token punctuation">.</span>keys <span class="token keyword">import</span> Keys</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建浏览器对象</span></span>
<span class="line">browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 访问指定 url</span></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;file:///D:/%E5%AD%A6%E4%B9%A0/8%E5%A4%A9web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%A5%97%E6%B5%8B%E8%AF%95%E2%80%94%E8%B5%84%E6%96%99/web%E8%87%AA%E5%8A%A8%E5%8C%96_day01_%E8%AF%BE%E4%BB%B6+%E7%AC%94%E8%AE%B0+%E8%B5%84%E6%96%99+%E4%BB%A3%E7%A0%81/02_%E5%85%B6%E4%BB%96%E8%B5%84%E6%96%99/%E6%B3%A8%E5%86%8CA.html&#39;</span></span>
<span class="line">browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line">browser<span class="token punctuation">.</span>maximize_window<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 输入用户名 admin1</span></span>
<span class="line">usernameInput <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&#39;#userA&#39;</span><span class="token punctuation">)</span></span>
<span class="line">usernameInput<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;admin1&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除1</span></span>
<span class="line">usernameInput<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span>Keys<span class="token punctuation">.</span>BACK_SPACE<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 全选用户名</span></span>
<span class="line">usernameInput<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span>Keys<span class="token punctuation">.</span>CONTROL<span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 复制用户名</span></span>
<span class="line">usernameInput<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span>Keys<span class="token punctuation">.</span>CONTROL <span class="token operator">+</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 粘贴到密码</span></span>
<span class="line">password <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&#39;#passwordA&#39;</span><span class="token punctuation">)</span></span>
<span class="line">password<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span>Keys<span class="token punctuation">.</span>CONTROL <span class="token operator">+</span> <span class="token string">&#39;v&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 退出</span></span>
<span class="line">browser<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、元素等待" tabindex="-1"><a class="header-anchor" href="#_4、元素等待"><span>4、元素等待</span></a></h2><p>元素等待：定位元素时未找到，在指定时间内一直等待。</p><p>设置元素等待的原因：</p><p><img src="`+j+'" alt="img_30.png"></p><p>selenium 有两种元素等待类型：</p><ul><li>显式等待</li><li>隐式等待</li></ul><h3 id="_1-隐式等待" tabindex="-1"><a class="header-anchor" href="#_1-隐式等待"><span>(1) 隐式等待</span></a></h3><p><img src="'+S+'" alt="img_31.png"></p><p>隐式等待将为 driver 配置了最大等待时间，没有明显地设置了某个元素的最大等待时间。</p><p>语法：<code>driver.implicitly_wait(timeout)</code></p><ul><li><code>timeout</code>为等待最大时长，单位：秒</li></ul><p>隐式等待为全局配置，作用于驱动。</p><p><strong>使用案例</strong></p><p><img src="'+I+`" alt="img_32.png"></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line"><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver</span>
<span class="line"><span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver <span class="token keyword">import</span> ActionChains</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建浏览器对象</span></span>
<span class="line">browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 配置隐式等待时长：3秒</span></span>
<span class="line">browser<span class="token punctuation">.</span>implicitly_wait<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 访问指定 url</span></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;file:///D:/%E5%AD%A6%E4%B9%A0/8%E5%A4%A9web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%A5%97%E6%B5%8B%E8%AF%95%E2%80%94%E8%B5%84%E6%96%99/web%E8%87%AA%E5%8A%A8%E5%8C%96_day01_%E8%AF%BE%E4%BB%B6+%E7%AC%94%E8%AE%B0+%E8%B5%84%E6%96%99+%E4%BB%A3%E7%A0%81/02_%E5%85%B6%E4%BB%96%E8%B5%84%E6%96%99/%E6%B3%A8%E5%86%8CA.html&#39;</span></span>
<span class="line">browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line">browser<span class="token punctuation">.</span>maximize_window<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 输入用户名：admin</span></span>
<span class="line">usernameInput <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&#39;#userA&#39;</span><span class="token punctuation">)</span></span>
<span class="line">usernameInput<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 退出</span></span>
<span class="line">browser<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-显式等待" tabindex="-1"><a class="header-anchor" href="#_2-显式等待"><span>(2) 显式等待</span></a></h3><p><img src="`+W+'" alt="img_34.png"></p><p>显式等待很明显可以看出等待找寻某个特定元素。</p><p>Selenium 中将显示等待的相关方法封装在<code>WebDriverWait</code>类中。</p><p><img src="'+z+'" alt="img_33.png"></p><p><strong>使用案例</strong></p><p><img src="'+T+`" alt="img_35.png"></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line"><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver</span>
<span class="line"><span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>support<span class="token punctuation">.</span>wait <span class="token keyword">import</span> WebDriverWait</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建浏览器对象</span></span>
<span class="line">browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 访问指定 url</span></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;file:///D:/%E5%AD%A6%E4%B9%A0/8%E5%A4%A9web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%A5%97%E6%B5%8B%E8%AF%95%E2%80%94%E8%B5%84%E6%96%99/web%E8%87%AA%E5%8A%A8%E5%8C%96_day01_%E8%AF%BE%E4%BB%B6+%E7%AC%94%E8%AE%B0+%E8%B5%84%E6%96%99+%E4%BB%A3%E7%A0%81/02_%E5%85%B6%E4%BB%96%E8%B5%84%E6%96%99/%E6%B3%A8%E5%86%8CA.html&#39;</span></span>
<span class="line">browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line">browser<span class="token punctuation">.</span>maximize_window<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 输入用户名：admin</span></span>
<span class="line">usernameInput <span class="token operator">=</span> WebDriverWait<span class="token punctuation">(</span>browser<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>until<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&#39;#userA&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">usernameInput<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 退出</span></span>
<span class="line">browser<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-显式等待和隐式等待区别" tabindex="-1"><a class="header-anchor" href="#_3-显式等待和隐式等待区别"><span>(3) 显式等待和隐式等待区别</span></a></h3><p><img src="`+X+'" alt="img_36.png"></p><h2 id="_5、下拉选择框、弹出框和滚动条操作" tabindex="-1"><a class="header-anchor" href="#_5、下拉选择框、弹出框和滚动条操作"><span>5、下拉选择框、弹出框和滚动条操作</span></a></h2><h3 id="_1-下拉选择框" tabindex="-1"><a class="header-anchor" href="#_1-下拉选择框"><span>(1) 下拉选择框</span></a></h3><p>下拉选择框就是 HTML 中的<code>&lt;select&gt;</code>元素。</p><p>selenium 为操作<code>&lt;select&gt;</code>标签封装了<code>Select</code>类。</p><p><img src="'+L+'" alt="img_37.png"></p><p><img src="'+K+'" alt="img_38.png"></p><p><strong>使用案例</strong></p><p><img src="'+O+`" alt="img_39.png"></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line"><span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>support<span class="token punctuation">.</span>select <span class="token keyword">import</span> Select</span>
<span class="line"><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver</span>
<span class="line"><span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>support<span class="token punctuation">.</span>wait <span class="token keyword">import</span> WebDriverWait</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建浏览器对象</span></span>
<span class="line">browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 访问指定 url</span></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;file:///D:/%E5%AD%A6%E4%B9%A0/8%E5%A4%A9web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%A5%97%E6%B5%8B%E8%AF%95%E2%80%94%E8%B5%84%E6%96%99/web%E8%87%AA%E5%8A%A8%E5%8C%96_day01_%E8%AF%BE%E4%BB%B6+%E7%AC%94%E8%AE%B0+%E8%B5%84%E6%96%99+%E4%BB%A3%E7%A0%81/02_%E5%85%B6%E4%BB%96%E8%B5%84%E6%96%99/%E6%B3%A8%E5%86%8CA.html&#39;</span></span>
<span class="line">browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line">browser<span class="token punctuation">.</span>maximize_window<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 选择&quot;广州&quot;</span></span>
<span class="line">selectElement <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&#39;#selectA&#39;</span><span class="token punctuation">)</span></span>
<span class="line">selectTag <span class="token operator">=</span> Select<span class="token punctuation">(</span>selectElement<span class="token punctuation">)</span></span>
<span class="line">selectTag<span class="token punctuation">.</span>select_by_value<span class="token punctuation">(</span><span class="token string">&#39;gz&#39;</span><span class="token punctuation">)</span></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 选择“上海”</span></span>
<span class="line">selectTag<span class="token punctuation">.</span>select_by_value<span class="token punctuation">(</span><span class="token string">&#39;sh&#39;</span><span class="token punctuation">)</span></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 选择“北京”</span></span>
<span class="line">selectTag<span class="token punctuation">.</span>select_by_value<span class="token punctuation">(</span><span class="token string">&#39;bj&#39;</span><span class="token punctuation">)</span></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 退出</span></span>
<span class="line">browser<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-弹出框处理" tabindex="-1"><a class="header-anchor" href="#_2-弹出框处理"><span>(2) 弹出框处理</span></a></h3><p><img src="`+R+'" alt="img_40.png"></p><p>selenium 中的弹出框处理方法：</p><p><img src="'+J+'" alt="img_41.png"></p><p><strong>使用案例</strong></p><p><img src="'+M+`" alt="img_42.png"></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line"><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建浏览器对象</span></span>
<span class="line">browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 访问指定 url</span></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;file:///D:/%E5%AD%A6%E4%B9%A0/8%E5%A4%A9web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%A5%97%E6%B5%8B%E8%AF%95%E2%80%94%E8%B5%84%E6%96%99/web%E8%87%AA%E5%8A%A8%E5%8C%96_day01_%E8%AF%BE%E4%BB%B6+%E7%AC%94%E8%AE%B0+%E8%B5%84%E6%96%99+%E4%BB%A3%E7%A0%81/02_%E5%85%B6%E4%BB%96%E8%B5%84%E6%96%99/%E6%B3%A8%E5%86%8CA.html&#39;</span></span>
<span class="line">browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line">browser<span class="token punctuation">.</span>maximize_window<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 点击 alert 按钮</span></span>
<span class="line">alertBtn <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&#39;#alerta&#39;</span><span class="token punctuation">)</span></span>
<span class="line">alertBtn<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 关闭警告框</span></span>
<span class="line">alert <span class="token operator">=</span> browser<span class="token punctuation">.</span>switch_to<span class="token punctuation">.</span>alert</span>
<span class="line">alert<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 输入用户名：admin</span></span>
<span class="line">usernameInput <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&#39;#userA&#39;</span><span class="token punctuation">)</span></span>
<span class="line">usernameInput<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 退出</span></span>
<span class="line">browser<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-滚动条操作" tabindex="-1"><a class="header-anchor" href="#_3-滚动条操作"><span>(3) 滚动条操作</span></a></h3><p>Selenium 中并无直接操作滚动条方法，其操作滚动条的实现是通过执行 js 脚本。</p><p><img src="`+U+'" alt="img_43.png"></p><p><strong>使用案例</strong></p><p><img src="'+Y+`" alt="img_44.png"></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line"><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建浏览器对象</span></span>
<span class="line">browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 访问指定 url</span></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;file:///D:/%E5%AD%A6%E4%B9%A0/8%E5%A4%A9web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%A5%97%E6%B5%8B%E8%AF%95%E2%80%94%E8%B5%84%E6%96%99/web%E8%87%AA%E5%8A%A8%E5%8C%96_day01_%E8%AF%BE%E4%BB%B6+%E7%AC%94%E8%AE%B0+%E8%B5%84%E6%96%99+%E4%BB%A3%E7%A0%81/02_%E5%85%B6%E4%BB%96%E8%B5%84%E6%96%99/%E6%B3%A8%E5%86%8CA.html&#39;</span></span>
<span class="line">browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line">browser<span class="token punctuation">.</span>maximize_window<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 将滚动条划至底部的 js 脚本</span></span>
<span class="line">scrollToBottom_js <span class="token operator">=</span> <span class="token string">&#39;window.scrollTo(0,10000)&#39;</span></span>
<span class="line">browser<span class="token punctuation">.</span>execute_script<span class="token punctuation">(</span>scrollToBottom_js<span class="token punctuation">)</span></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 退出</span></span>
<span class="line">browser<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6、frame-切换、多窗口切换" tabindex="-1"><a class="header-anchor" href="#_6、frame-切换、多窗口切换"><span>6、frame 切换、多窗口切换</span></a></h2><h3 id="_1-frame-切换" tabindex="-1"><a class="header-anchor" href="#_1-frame-切换"><span>(1) frame 切换</span></a></h3><p>frame 简介：</p><p><img src="`+Z+'" alt="img_45.png"></p><p>Selenium 对 frame 切换的封装：</p><p><img src="'+H+'" alt="img_46.png"></p><p><strong>使用案例</strong></p><p><img src="'+N+`" alt="img_47.png"></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line"><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建浏览器对象</span></span>
<span class="line">browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 访问指定 url</span></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;file:///D:/%E5%AD%A6%E4%B9%A0/8%E5%A4%A9web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%A5%97%E6%B5%8B%E8%AF%95%E2%80%94%E8%B5%84%E6%96%99/web%E8%87%AA%E5%8A%A8%E5%8C%96_day01_%E8%AF%BE%E4%BB%B6+%E7%AC%94%E8%AE%B0+%E8%B5%84%E6%96%99+%E4%BB%A3%E7%A0%81/02_%E5%85%B6%E4%BB%96%E8%B5%84%E6%96%99/%E6%B3%A8%E5%86%8C%E5%AE%9E%E4%BE%8B.html&#39;</span></span>
<span class="line">browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line">browser<span class="token punctuation">.</span>maximize_window<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 填写主页面用户名</span></span>
<span class="line">browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&#39;#user&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 填写注册页面 A 的用户名</span></span>
<span class="line">browser<span class="token punctuation">.</span>switch_to<span class="token punctuation">.</span>frame<span class="token punctuation">(</span><span class="token string">&#39;idframe1&#39;</span><span class="token punctuation">)</span></span>
<span class="line">browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&#39;#userA&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;adminA&#39;</span><span class="token punctuation">)</span></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">browser<span class="token punctuation">.</span>switch_to<span class="token punctuation">.</span>default_content<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 填写注册页面 B 的用户名</span></span>
<span class="line">browser<span class="token punctuation">.</span>switch_to<span class="token punctuation">.</span>frame<span class="token punctuation">(</span><span class="token string">&#39;myframe2&#39;</span><span class="token punctuation">)</span></span>
<span class="line">browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&#39;#userB&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;adminB&#39;</span><span class="token punctuation">)</span></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 退出</span></span>
<span class="line">browser<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-多窗口切换" tabindex="-1"><a class="header-anchor" href="#_2-多窗口切换"><span>(2) 多窗口切换</span></a></h3><p><img src="`+P+'" alt="img_48.png"></p><p><img src="'+G+'" alt="img_49.png"></p><p><strong>使用案例</strong></p><p><img src="'+Q+`" alt="img_50.png"></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line"><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建浏览器对象</span></span>
<span class="line">browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 访问指定 url</span></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;file:///D:/%E5%AD%A6%E4%B9%A0/8%E5%A4%A9web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%A5%97%E6%B5%8B%E8%AF%95%E2%80%94%E8%B5%84%E6%96%99/web%E8%87%AA%E5%8A%A8%E5%8C%96_day01_%E8%AF%BE%E4%BB%B6+%E7%AC%94%E8%AE%B0+%E8%B5%84%E6%96%99+%E4%BB%A3%E7%A0%81/02_%E5%85%B6%E4%BB%96%E8%B5%84%E6%96%99/%E6%B3%A8%E5%86%8C%E5%AE%9E%E4%BE%8B.html&#39;</span></span>
<span class="line">browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line">browser<span class="token punctuation">.</span>maximize_window<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取“注册实例.html”当前窗口句柄</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>browser<span class="token punctuation">.</span>current_window_handle<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 点击“注册A网页”</span></span>
<span class="line">browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&#39;#ZCA&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取所有窗口句柄</span></span>
<span class="line">handleList <span class="token operator">=</span> browser<span class="token punctuation">.</span>window_handles</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 切换到注册 A 网页窗口</span></span>
<span class="line">browser<span class="token punctuation">.</span>switch_to<span class="token punctuation">.</span>window<span class="token punctuation">(</span>handleList<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 注册 A 网页中用户名填 admin</span></span>
<span class="line">browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&#39;#userA&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 退出</span></span>
<span class="line">browser<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7、窗口截图、验证码处理" tabindex="-1"><a class="header-anchor" href="#_7、窗口截图、验证码处理"><span>7、窗口截图、验证码处理</span></a></h2><h3 id="_1-窗口截图" tabindex="-1"><a class="header-anchor" href="#_1-窗口截图"><span>(1) 窗口截图</span></a></h3><p><img src="`+V+'" alt="img_51.png"></p><p><strong>使用案例</strong></p><p><img src="'+$+`" alt="img_52.png"></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line"><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建浏览器对象</span></span>
<span class="line">browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 访问指定 url</span></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;file:///D:/%E5%AD%A6%E4%B9%A0/8%E5%A4%A9web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%A5%97%E6%B5%8B%E8%AF%95%E2%80%94%E8%B5%84%E6%96%99/web%E8%87%AA%E5%8A%A8%E5%8C%96_day01_%E8%AF%BE%E4%BB%B6+%E7%AC%94%E8%AE%B0+%E8%B5%84%E6%96%99+%E4%BB%A3%E7%A0%81/02_%E5%85%B6%E4%BB%96%E8%B5%84%E6%96%99/%E6%B3%A8%E5%86%8CA.html&#39;</span></span>
<span class="line">browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line">browser<span class="token punctuation">.</span>maximize_window<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 填写注册信息</span></span>
<span class="line">browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&#39;#userA&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span></span>
<span class="line">browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&#39;#passwordA&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;123456&#39;</span><span class="token punctuation">)</span></span>
<span class="line">browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&#39;#telA&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;13511111111&#39;</span><span class="token punctuation">)</span></span>
<span class="line">browser<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&#39;#emailA&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;123@qq.com&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 截图保存</span></span>
<span class="line">browser<span class="token punctuation">.</span>get_screenshot_as_file<span class="token punctuation">(</span><span class="token string">&#39;D:\\\\learning\\\\softwareTest\\\\img\\\\test01.png&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 退出</span></span>
<span class="line">browser<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-验证码处理" tabindex="-1"><a class="header-anchor" href="#_2-验证码处理"><span>(2) 验证码处理</span></a></h3><h4 id="_1-验证码的处理方式" tabindex="-1"><a class="header-anchor" href="#_1-验证码的处理方式"><span>1.验证码的处理方式</span></a></h4><p><img src="`+nn+'" alt="img_53.png"><img src="'+sn+'" alt="img_54.png"></p><h4 id="_2-cookie-介绍" tabindex="-1"><a class="header-anchor" href="#_2-cookie-介绍"><span>2.Cookie 介绍</span></a></h4><p><img src="'+an+'" alt="img_55.png"><img src="'+en+'" alt="img_56.png"> 总结：Cookie 是 Web 服务器颁发的，存储在客户端浏览器中的，用于标识用户状态的小文本文件。 应用场景：</p><ul><li>实现会话跟踪，记录用户登录状态</li><li>实现记住密码和自动登录功能</li><li>用户未登录情况下，记录购物车中的商品</li></ul><h4 id="_3-selenium-操作-cookie" tabindex="-1"><a class="header-anchor" href="#_3-selenium-操作-cookie"><span>3.Selenium 操作 cookie</span></a></h4><p><img src="'+pn+'" alt="img_57.png"></p><p><strong>使用案例</strong></p><p><img src="'+ln+'" alt="img_58.png"></p><p><img src="'+tn+`" alt="img_59.png"></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line"><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建浏览器对象</span></span>
<span class="line">browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 访问指定 url</span></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;https://www.baidu.com&#39;</span></span>
<span class="line">browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line">browser<span class="token punctuation">.</span>maximize_window<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 添加 cookie</span></span>
<span class="line">cookie_dict <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;BDUSS&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;value&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;5sUHJScEg1YjMtTjByUWhSWVJWazBGQmE4OWNXSGxlYmVEZFJBeDFwRmgtTTFrSVFBQUFBJCQAAAAAAAAAAAEAAACon6vpVG9tQmx1ZXMxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGFrpmRha6ZkZ0&#39;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">browser<span class="token punctuation">.</span>add_cookie<span class="token punctuation">(</span>cookie_dict<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 刷新页面</span></span>
<span class="line">browser<span class="token punctuation">.</span>refresh<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 退出</span></span>
<span class="line">browser<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,213),un=[on];function rn(dn,mn){return a(),s("div",null,un)}const kn=n(cn,[["render",rn],["__file","3-SeleniumApi.html.vue"]]),bn=JSON.parse('{"path":"/dev/test/web_test/3-SeleniumApi.html","title":"三、Selenium-API","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1、元素定位","slug":"_1、元素定位","link":"#_1、元素定位","children":[{"level":3,"title":"(1) id 定位","slug":"_1-id-定位","link":"#_1-id-定位","children":[]},{"level":3,"title":"(2) name 定位","slug":"_2-name-定位","link":"#_2-name-定位","children":[]},{"level":3,"title":"(3) class_name 定位","slug":"_3-class-name-定位","link":"#_3-class-name-定位","children":[]},{"level":3,"title":"(4) tag_name 定位","slug":"_4-tag-name-定位","link":"#_4-tag-name-定位","children":[]},{"level":3,"title":"(5) link_text 定位","slug":"_5-link-text-定位","link":"#_5-link-text-定位","children":[]},{"level":3,"title":"(6) partial_link_text 定位","slug":"_6-partial-link-text-定位","link":"#_6-partial-link-text-定位","children":[]},{"level":3,"title":"(7) 定位一组元素","slug":"_7-定位一组元素","link":"#_7-定位一组元素","children":[]},{"level":3,"title":"(8) Xpath 定位","slug":"_8-xpath-定位","link":"#_8-xpath-定位","children":[]},{"level":3,"title":"(9) css 定位","slug":"_9-css-定位","link":"#_9-css-定位","children":[]}]},{"level":2,"title":"2、元素操作与浏览器操作","slug":"_2、元素操作与浏览器操作","link":"#_2、元素操作与浏览器操作","children":[{"level":3,"title":"(1) 元素常用操作方法","slug":"_1-元素常用操作方法","link":"#_1-元素常用操作方法","children":[]},{"level":3,"title":"(2) 浏览器操作","slug":"_2-浏览器操作","link":"#_2-浏览器操作","children":[]},{"level":3,"title":"(3) 获取元素信息","slug":"_3-获取元素信息","link":"#_3-获取元素信息","children":[]}]},{"level":2,"title":"3、鼠标和键盘操作","slug":"_3、鼠标和键盘操作","link":"#_3、鼠标和键盘操作","children":[{"level":3,"title":"(1) 鼠标操作","slug":"_1-鼠标操作","link":"#_1-鼠标操作","children":[]},{"level":3,"title":"(2) 键盘操作","slug":"_2-键盘操作","link":"#_2-键盘操作","children":[]}]},{"level":2,"title":"4、元素等待","slug":"_4、元素等待","link":"#_4、元素等待","children":[{"level":3,"title":"(1) 隐式等待","slug":"_1-隐式等待","link":"#_1-隐式等待","children":[]},{"level":3,"title":"(2) 显式等待","slug":"_2-显式等待","link":"#_2-显式等待","children":[]},{"level":3,"title":"(3) 显式等待和隐式等待区别","slug":"_3-显式等待和隐式等待区别","link":"#_3-显式等待和隐式等待区别","children":[]}]},{"level":2,"title":"5、下拉选择框、弹出框和滚动条操作","slug":"_5、下拉选择框、弹出框和滚动条操作","link":"#_5、下拉选择框、弹出框和滚动条操作","children":[{"level":3,"title":"(1) 下拉选择框","slug":"_1-下拉选择框","link":"#_1-下拉选择框","children":[]},{"level":3,"title":"(2) 弹出框处理","slug":"_2-弹出框处理","link":"#_2-弹出框处理","children":[]},{"level":3,"title":"(3) 滚动条操作","slug":"_3-滚动条操作","link":"#_3-滚动条操作","children":[]}]},{"level":2,"title":"6、frame 切换、多窗口切换","slug":"_6、frame-切换、多窗口切换","link":"#_6、frame-切换、多窗口切换","children":[{"level":3,"title":"(1) frame 切换","slug":"_1-frame-切换","link":"#_1-frame-切换","children":[]},{"level":3,"title":"(2) 多窗口切换","slug":"_2-多窗口切换","link":"#_2-多窗口切换","children":[]}]},{"level":2,"title":"7、窗口截图、验证码处理","slug":"_7、窗口截图、验证码处理","link":"#_7、窗口截图、验证码处理","children":[{"level":3,"title":"(1) 窗口截图","slug":"_1-窗口截图","link":"#_1-窗口截图","children":[]},{"level":3,"title":"(2) 验证码处理","slug":"_2-验证码处理","link":"#_2-验证码处理","children":[]}]}],"git":{"updatedTime":1721739933000,"contributors":[{"name":"ZhangZiYi","email":"ecustzzy1@163.com","commits":1}]},"filePathRelative":"dev/test/web_test/3-SeleniumApi.md"}');export{kn as comp,bn as data};
