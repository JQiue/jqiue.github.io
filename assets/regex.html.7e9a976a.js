import{ac as n,A as s,B as a,E as p,ae as e}from"./framework.a879f165.js";const t={},o=e(`<p>正则表达式在通过一定的搜索模式下进行一个或多个匹配（即 ASCII 或 unicode 字符的特定序列）从任何文本中提取信息时非常有用，应用领域从验证到解析/替换字符串，将数据转换为其他格式以及网络爬虫</p><h2 id="和" tabindex="-1"><a class="header-anchor" href="#和" aria-hidden="true">#</a> ^ 和 $</h2><ul><li><code>^start</code> - 匹配任意以<code>start</code>开头的字符串</li><li><code>end$</code> - 匹配任意以<code>end</code>结尾的字符串</li><li><code>^JQiue$</code> - 匹配<code>JQiue</code></li><li><code>the</code> - 匹配含有<code>the</code>的字符串</li></ul><h2 id="量词" tabindex="-1"><a class="header-anchor" href="#量词" aria-hidden="true">#</a> 量词</h2><ul><li><code>abc*</code></li></ul><h2 id="和-1" tabindex="-1"><a class="header-anchor" href="#和-1" aria-hidden="true">#</a> | 和 []</h2><h2 id="内置模式" tabindex="-1"><a class="header-anchor" href="#内置模式" aria-hidden="true">#</a> 内置模式</h2><h2 id="分组" tabindex="-1"><a class="header-anchor" href="#分组" aria-hidden="true">#</a> 分组</h2><h2 id="贪婪和惰性" tabindex="-1"><a class="header-anchor" href="#贪婪和惰性" aria-hidden="true">#</a> 贪婪和惰性</h2><h2 id="一些常用的正则" tabindex="-1"><a class="header-anchor" href="#一些常用的正则" aria-hidden="true">#</a> 一些常用的正则</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// html注释</span>
<span class="token operator">/</span><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">?</span><span class="token punctuation">)</span><span class="token operator">--</span><span class="token operator">&gt;</span>$<span class="token operator">/</span>

<span class="token comment">// x.y.z 格式的版本号</span>
<span class="token operator">/</span><span class="token operator">^</span>\\d<span class="token operator">+</span><span class="token punctuation">(</span>\\<span class="token punctuation">.</span>\\d<span class="token operator">+</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>$<span class="token operator">/</span>

<span class="token comment">// 图片链接地址</span>
<span class="token operator">/</span><span class="token operator">^</span>https<span class="token operator">?</span><span class="token operator">:</span>\\<span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/.*?(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span>

<span class="token comment">// 视频链接地址</span>
<span class="token operator">/</span><span class="token operator">^</span>https<span class="token operator">?</span><span class="token operator">:</span>\\<span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/.*?(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span>

<span class="token comment">// 24小时制时间（HH:mm:ss）</span>
<span class="token operator">/</span><span class="token operator">^</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">01</span><span class="token punctuation">]</span>\\d<span class="token operator">|</span><span class="token number">2</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">]</span>\\d<span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">]</span>\\d$<span class="token punctuation">)</span><span class="token operator">/</span>

<span class="token comment">// 中文姓名</span>
<span class="token operator">/</span><span class="token operator">^</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\\u4e00<span class="token operator">-</span>\\u9fa5·<span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">16</span><span class="token punctuation">}</span><span class="token punctuation">)</span>$<span class="token operator">/</span>

<span class="token comment">// 英文姓名</span>
<span class="token operator">/</span><span class="token punctuation">(</span><span class="token operator">^</span><span class="token punctuation">[</span>a<span class="token operator">-</span>zA<span class="token operator">-</span><span class="token constant">Z</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">[</span>a<span class="token operator">-</span>zA<span class="token operator">-</span><span class="token constant">Z</span>\\s<span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">[</span>a<span class="token operator">-</span>zA<span class="token operator">-</span><span class="token constant">Z</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>$<span class="token punctuation">)</span><span class="token operator">/</span>

<span class="token comment">// URL链接(网址)</span>
<span class="token operator">/</span><span class="token operator">^</span><span class="token punctuation">(</span><span class="token punctuation">(</span>https<span class="token operator">?</span><span class="token operator">|</span>ftp<span class="token operator">|</span>file<span class="token punctuation">)</span><span class="token operator">:</span>\\<span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/)?([\\da-z.-]+)\\.([a-z.]{2,6})(\\/\\w\\.-]*)*\\/?</span><span class="token regex-delimiter">/</span></span>

<span class="token comment">// 手机号(严谨), 根据工信部2019年最新公布的手机号段</span>
<span class="token operator">/</span><span class="token operator">^</span><span class="token number">1</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">[</span>\\d<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">|</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">|</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">|</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token operator">-</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">|</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token operator">-</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">|</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">[</span>\\d<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">|</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\\d<span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span>$<span class="token operator">/</span>

<span class="token comment">// 邮箱地址</span>
<span class="token operator">/</span><span class="token operator">^</span><span class="token punctuation">[</span>a<span class="token operator">-</span>zA<span class="token operator">-</span><span class="token constant">Z0</span><span class="token operator">-</span><span class="token number">9.</span><span class="token operator">!</span>#$<span class="token operator">%</span><span class="token operator">&amp;</span>&#39;<span class="token operator">*</span><span class="token operator">+</span>\\<span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">=?^_\`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$</span><span class="token regex-delimiter">/</span></span>

<span class="token comment">// 二代身份证号(18位数字)</span>
<span class="token operator">/</span><span class="token operator">^</span>\\d<span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token operator">|</span><span class="token number">19</span><span class="token operator">|</span><span class="token number">20</span><span class="token punctuation">)</span>\\d<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token number">0</span>\\d<span class="token operator">|</span><span class="token number">10</span><span class="token operator">|</span><span class="token number">11</span><span class="token operator">|</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span>\\d<span class="token operator">|</span><span class="token number">30</span><span class="token operator">|</span><span class="token number">31</span><span class="token punctuation">)</span>\\d<span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">(</span>\\d<span class="token operator">|</span><span class="token constant">X</span><span class="token operator">|</span>x<span class="token punctuation">)</span>$<span class="token operator">/</span>

<span class="token comment">// 是否为小数</span>
<span class="token operator">/</span><span class="token operator">^</span>\\d<span class="token operator">+</span>\\<span class="token punctuation">.</span>\\d<span class="token operator">+</span>$<span class="token operator">/</span>

<span class="token comment">// 是否为 HTML 标签</span>
<span class="token operator">/</span><span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">&lt;</span>\\<span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\1&gt;|&lt;(.*) \\/&gt;</span><span class="token regex-delimiter">/</span></span>

<span class="token comment">// ip-v4</span>
<span class="token operator">/</span><span class="token operator">^</span><span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">:</span><span class="token number">25</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token operator">|</span><span class="token number">2</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token operator">|</span><span class="token punctuation">[</span><span class="token number">01</span><span class="token punctuation">]</span><span class="token operator">?</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token operator">?</span><span class="token punctuation">)</span>\\<span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">:</span><span class="token number">25</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token operator">|</span><span class="token number">2</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token operator">|</span><span class="token punctuation">[</span><span class="token number">01</span><span class="token punctuation">]</span><span class="token operator">?</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token operator">?</span><span class="token punctuation">)</span>$<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function c(l,r){return s(),a("div",null,[o,p(" more ")])}const k=n(t,[["render",c],["__file","regex.html.vue"]]);export{k as default};
