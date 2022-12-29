import{ac as a,A as n,B as s,E as e,ae as t}from"./framework.a879f165.js";const p={},i=t(`<p>在浏览器中使用 JavaScript 处理音视频是困难的，Google 给出了 WebRTC 的答案</p><h2 id="音视频采集" tabindex="-1"><a class="header-anchor" href="#音视频采集" aria-hidden="true">#</a> 音视频采集</h2><ul><li>摄像头</li><li>帧率</li><li>分辨率</li><li>宽高比</li><li>麦克风</li><li>轨</li><li>流</li></ul><h2 id="调用摄像头和麦克风" tabindex="-1"><a class="header-anchor" href="#调用摄像头和麦克风" aria-hidden="true">#</a> 调用摄像头和麦克风</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>navigator<span class="token punctuation">.</span>mediaDevices<span class="token punctuation">.</span><span class="token function">getUserMedia</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">video</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">audio</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">mediastream</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// mediastream 是获得到的媒体流</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function o(c,l){return n(),s("div",null,[i,e(" to be updated ")])}const u=a(p,[["render",o],["__file","webrtc.html.vue"]]);export{u as default};
