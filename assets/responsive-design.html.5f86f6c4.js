import{ac as n,A as a,B as s,ae as e}from"./framework.a879f165.js";const t={},p=e(`<p>随着设备的丰富，网站已经不只是出现在电脑显示器上，而是出现在各种尺寸的设备上，比如智能手机、平板等。这导致网站需要让访问的人以各种不同的设备来访问，因此，响应式 Web 设计因此而生，响应式 Web 设计并不是单独的技术，是用来描述 Web 设计的一种方式</p><p>响应式页面的主要方式是以下三点：</p><ul><li>可随环境缩放的图像和媒体</li><li>灵活的，基于网格的布局，元素的尺寸都是相对单位</li><li>使用媒体查询根据媒体类型应用不同的样式</li></ul><h2 id="可伸缩的图像" tabindex="-1"><a class="header-anchor" href="#可伸缩的图像" aria-hidden="true">#</a> 可伸缩的图像</h2><p>在默认情况下，图像会按照原有的尺寸进行展示，除此之外，还可以通过<code>width</code>和<code>height</code>控制。当涉及到有限的设备尺寸时，按照原始的尺寸来显示图像就不合适了</p><p>且为了图片的等比例缩放，只应该设置一个属性，很明显设置<code>max-width: 100%</code>最为合适，这样图片会根据父元素的尺寸进行缩放。不使用<code>width: 100%</code>的原因是因为这个属性会让图像尽可能地填充父容器，导致了父容器宽度比图像宽时，图片会放大超过本来的尺寸，非常难看</p><h2 id="弹性布局网格" tabindex="-1"><a class="header-anchor" href="#弹性布局网格" aria-hidden="true">#</a> 弹性布局网格</h2><p>一定定宽容器的网页非常死板，如果桌面宽度小于页面宽度就会出现横向滚动条，这对于响应式布局来说并不合适</p><p>如果页面能像图像一样缩放，正好适应浏览器宽度，这个问题就解决了，这就是流式布局</p><p>很显然，也需要百分比来实现，元素的百分比宽度基于父元素的可用宽度，它和可伸缩图像原理是一样的</p><p><code>指定宽度/容器宽度 = 百分数</code>这种公式就适用于定宽布局，比如某个父元素的可用宽度为<code>960px</code>，而子元素需要<code>600px</code>的空间，计算一下得到<code>0.625</code>，将它换算为百分比作为<code>width</code>的值就可以实现宽度的自适应</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>在使用公式计算前，应该注意元素所处于的上下文</p></div><h2 id="媒体查询" tabindex="-1"><a class="header-anchor" href="#媒体查询" aria-hidden="true">#</a> 媒体查询</h2><p>CSS3 新增了媒体查询对媒体类型进行了增强，虽然根据媒体类型可以应用不同的 CSS，但是对于不同的尺寸，媒体类型就无论为力了</p><p>这是在媒体类型上增强的语法：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> logic type <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">feature</span><span class="token punctuation">:</span> value<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>logic：是可选的，其值为<code>only</code>时，可以确定旧浏览器不会读取余下的媒体查询，同时忽略链接的样式，为<code>not</code>时会对媒体查询的结果进行取反，比如<code>not screen</code>表示媒体除了<code>screen</code>以外的类型应用样式</li><li>type：媒体类型</li><li>feature：也是可选的，一旦使用它们就必须用括号包裹，并在前面加上<code>and</code>，feature 是预定的媒体特性，如<code>min-width</code></li></ul><p>这是一些媒体特性：</p><ul><li>width</li><li>height</li><li>device-width</li><li>device-height</li><li>color</li></ul><p>通过媒体查询，可以根据设备的属性应用不同的属性</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>媒体查询<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 480px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
  <span class="token selector">.container</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述代码中，会发生这样的事情，当<code>width</code>至少在<code>480px</code>以上像素时就会应用媒体查询中的样式</p><h2 id="视觉区域" tabindex="-1"><a class="header-anchor" href="#视觉区域" aria-hidden="true">#</a> 视觉区域</h2><p>对于 pc 端来说，视觉区域与浏览器中的窗口宽度保持一致，但是对于移动端来说，就有点不一样了，浏览器中的视觉区域假如是 960px，但移动设备的宽度为 480px，而大多数移动厂商将视觉区域像素设置为 960px，这导致了移动设备为了显示整个网页不得不缩放</p><p>这对用户来说就像网页缩小了一样，不利于阅读，通常会放大浏览，为了解决这个问题，浏览器厂商引进了“veiwport”的概念，让用户无需进行缩放</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码的重点是<code>width=device-width</code>，当设置了该语句后，浏览器计算像素时，会根据设备的宽度进行计算，而不是预设的视觉区域像素宽，另外，这段代码只对移动端有效</p>`,28),c=[p];function i(o,l){return a(),s("div",null,c)}const u=n(t,[["render",i],["__file","responsive-design.html.vue"]]);export{u as default};