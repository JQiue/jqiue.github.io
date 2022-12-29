import{ac as n,A as s,B as a,ae as e}from"./framework.a879f165.js";const t={},p=e(`<p>模拟浏览器获取网页数据，需要具备基本的 HTML，CSS，JavaScript，HTTP，正则等知识</p><p>具体流程：</p><ol><li>发起请求（HTTP）-&gt; 得到响应（HTML源码） <ul><li>requests</li></ul></li><li>解析 HTML，得到想要的数据 <ul><li>正则</li><li>BS4</li><li>lxml</li></ul></li><li>静态请求，动态请求</li></ol><h2 id="发起请求" tabindex="-1"><a class="header-anchor" href="#发起请求" aria-hidden="true">#</a> 发起请求</h2><p>确定网页的 url 地址，使用<code>requests</code>库的<code>get</code>方法对百度发送请求，该方法会将响应内容封装成对象返回</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>url <span class="token operator">=</span> <span class="token string">&#39;https://www.baidu.com&#39;</span>
response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="响应内容" tabindex="-1"><a class="header-anchor" href="#响应内容" aria-hidden="true">#</a> 响应内容</h2><p>对象的<code>text</code>属性可以获取网页内容，根据 unicode 字符集进行解码</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>很不幸，打印网页内容后发现有乱码现象，Requests 会根据 HTTP 头部信息对响应的编码作出推测，它是<code>encoding</code>属性</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>response<span class="token punctuation">.</span>encoding <span class="token comment"># ISO-8859-1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但百度的网页源代码的编码是<code>utf-8</code>，所以要对<code>encoding</code>进行修改，使访问<code>text</code>时的编码内容得到正确的解析</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>response<span class="token punctuation">.</span>encoding <span class="token operator">=</span> <span class="token string">&#39;utf-8&#39;</span>
response<span class="token punctuation">.</span>text
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>响应对象也提供了以字节的方式访问响应体，对于非文本请求来说十分有用</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>response<span class="token punctuation">.</span>content
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>字节码也可以使用<code>decode</code>方法转换成字符串，但要注意编码</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>response<span class="token punctuation">.</span>content<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="伪造请求头" tabindex="-1"><a class="header-anchor" href="#伪造请求头" aria-hidden="true">#</a> 伪造请求头</h2><p>如果对知乎<code>https://www.zhihu.com</code>发送请求，你应该得到<code>403</code>响应码</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>url <span class="token operator">=</span> <span class="token string">&#39;https://www.zhihu.com&#39;</span>
response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>status_code<span class="token punctuation">)</span> <span class="token comment"># 403</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么浏览器请求可以，而使用 Python 请求就不可以呢？因为知乎有反爬机制，浏览器请求会被视为正常的请求，所以能够得到正确的响应，而浏览器的请求头中是携带一些信息的，知乎会根据这些信息判断来源是否为正常的请求来源，因此只要在请求程序中添加一些请求头模拟成浏览器就可以了</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>url <span class="token operator">=</span> <span class="token string">&#39;https://www.zhihu.com&#39;</span>
headers <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string">&quot;user-agent&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36&quot;</span>
<span class="token punctuation">}</span>
response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>status_code<span class="token punctuation">)</span> <span class="token comment"># 200</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>Requests 中没有设定<code>user-agent</code>时，默认为<code>python-requests</code>，这等于告诉服务器我是爬虫，自然访问不了大部分网页，所以要修改参数模拟浏览器进行请求，达到欺骗的目的</p></div><h2 id="带参数的-get-请求" tabindex="-1"><a class="header-anchor" href="#带参数的-get-请求" aria-hidden="true">#</a> 带参数的 GET 请求</h2><p>GET 请求的参数都是在 URL 上，所以将 URL 和查询参数进行拼接即可，这里以哔哩哔哩为例，搜索<code>python</code>关键字的视频</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>url <span class="token operator">=</span> <span class="token string">&#39;https://search.bilibili.com/all?keyword=python&#39;</span>
response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>status_code<span class="token punctuation">)</span> <span class="token comment"># 200</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然能正常请求，但不太好，后续如果要修改参数就很麻烦，Requests 使用字典来解决这种方式，它会将字典中的内容和 URL 进行拼接，这样灵活性就大大提高了</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>url <span class="token operator">=</span> <span class="token string">&#39;https://search.bilibili.com/all&#39;</span>
params <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;python&quot;</span>
<span class="token punctuation">}</span>
response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">,</span> params<span class="token operator">=</span>params<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>status_code<span class="token punctuation">)</span> <span class="token comment"># 200</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="下载图片" tabindex="-1"><a class="header-anchor" href="#下载图片" aria-hidden="true">#</a> 下载图片</h2><p>图片地址比较好爬取，图片地址在<code>img</code>标签中的<code>src</code>属性中，图片是字节码的形式，写入本地就行了</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>url <span class="token operator">=</span> <span class="token string">&#39;http://ossweb-img.qq.com/images/lol/wallpapers/Tristana_1680x1050.jpg&#39;</span>
response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>status_code<span class="token punctuation">)</span> <span class="token comment"># 200</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;./image.jpg&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
  <span class="token builtin">file</span><span class="token punctuation">.</span>write<span class="token punctuation">(</span>response<span class="token punctuation">.</span>content<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="下载视频" tabindex="-1"><a class="header-anchor" href="#下载视频" aria-hidden="true">#</a> 下载视频</h2><p>只要我们获得视频的地址，就可以请求下载，但是有些视频网站做的比较好，不允许下载视频，所以这里以”好看视频“为例，这家网站的视频是可以爬取的</p><p>首先要获得视频的播放地址，一般在<code>video</code>标签的<code>src</code>属性中，然后正常的发送 GET 请求</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>url <span class="token operator">=</span> <span class="token string">&#39;https://vd2.bdstatic.com/mda-mb2rqf9ixa4q4kiz/sc/cae_h264_clips/1612567054/mda-mb2rqf9ixa4q4kiz.mp4?auth_key=1620119921-0-0-b6d4f3f9e2959c0d2e4de86959fa2cd9&amp;bcevod_channel=searchbox_feed&amp;pd=1&amp;pt=3&amp;abtest=3000165_1&#39;</span>
response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>status_code<span class="token punctuation">)</span> <span class="token comment"># 200</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>视频是以流的方式进行传输的，且一般视频的资源较大，如果将全部资源请求过来会大量的占用内存空间，所以要一点一点的传输并写入到本地文件</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;./1.mp4&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
  <span class="token keyword">for</span> chunk <span class="token keyword">in</span> response<span class="token punctuation">.</span>iter_content<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">file</span><span class="token punctuation">.</span>write<span class="token punctuation">(</span>chunk<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>response.iter_content()</code>会将视频流看成一个可迭代类型，一段一段的访问，也可以接受一个参数用于指定数据块的大小，比如<code>iter_content(1024*10)</code>代表每一个数据块的大小是 10k，每次都以 10k 大小数据块进行遍历</p><p>当然，有的视频比较小，就没必要用这种方式写入本地，直接将整个<code>content</code>字节数据写入就行了</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;./2.mp4&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
  <span class="token builtin">file</span><span class="token punctuation">.</span>write<span class="token punctuation">(</span>response<span class="token punctuation">.</span>content<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="保存-html-页面" tabindex="-1"><a class="header-anchor" href="#保存-html-页面" aria-hidden="true">#</a> 保存 HTML 页面</h2><p>如果频繁的请求某个网站，会对该网站的服务器造成一定的压力，所以我们应该将爬取的网页保存到本地，然后进行分析</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="解析-html" tabindex="-1"><a class="header-anchor" href="#解析-html" aria-hidden="true">#</a> 解析 HTML</h2><p>如果想要下载一个图片，可以打开浏览器调试工具拿到链接并发送请求，这样就可以完成下载，但是如果想要全部的图片链接，这种方式就不可取了，没有人会傻到一个一个的复制黏贴图片地址去下载，我们可以通过分析保存的 HTML 页面，然后通过一些方式来分析出页面中的图片链接，这样效率就会大大提高</p><h3 id="正则" tabindex="-1"><a class="header-anchor" href="#正则" aria-hidden="true">#</a> 正则</h3><p>HTML 可以看做成一个字符串，那么正则表达式就派上用场了</p><h3 id="bs4" tabindex="-1"><a class="header-anchor" href="#bs4" aria-hidden="true">#</a> BS4</h3><h3 id="lxml" tabindex="-1"><a class="header-anchor" href="#lxml" aria-hidden="true">#</a> lxml</h3>`,49),o=[p];function i(c,l){return s(),a("div",null,o)}const u=n(t,[["render",i],["__file","spider.html.vue"]]);export{u as default};
