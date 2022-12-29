import{ac as n,A as s,B as a,ae as e}from"./framework.a879f165.js";const t={},p=e(`<p>在 C 中，所有以<code>#</code>开头的行都由预处理器处理，它是编译器调用的程序，简单来说就是预处理器接收一个 C 代码并生成另一个 C，然后再交给编译器处理，包括：<strong>文件包含，宏定义，条件编译</strong></p><h2 id="文件包含" tabindex="-1"><a class="header-anchor" href="#文件包含" aria-hidden="true">#</a> 文件包含</h2><p><code>#include</code>用来引入对应的头文件，非常简单就是将头文件的内容插入到命令的位置</p><p>有两种用法：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;my.h&quot;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>通过<code>&lt;&gt;</code>引入的头文件，会到系统路径下查找</li><li>通过<code>&quot;&quot;</code>引入的头文件，会到当前目录下寻找，如果没有找到就会到系统路径下寻找</li></ul><h2 id="宏定义" tabindex="-1"><a class="header-anchor" href="#宏定义" aria-hidden="true">#</a> 宏定义</h2><p>当对常量使用<code>#define</code>时，预处理器会搜索 C 中所有的匹配标记并替换为给定的表达式</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">foo</span> <span class="token expression"><span class="token number">100</span></span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 100</span>
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以使用类似参数的函数，他不会检查类型</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">increment</span><span class="token expression"><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">++</span>x</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token function">increment</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 11</span>
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在宏进行扩展之前，它是不会评估参数的</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">foo</span><span class="token expression"><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> a<span class="token operator">*</span>b</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token comment">// 实际上，它会被替换为 1 + 2 * 3 + 4，并不是 3 * 7</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token operator">+</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 11</span>
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是可以这么做</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">foo</span><span class="token expression"><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token operator">*</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span></span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token comment">// 现在它才是 (1 + 2) * (3 + 4)</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token operator">+</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token number">21</span>
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以使用<code>##</code>进行连接</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">foo</span><span class="token expression"><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> a</span><span class="token punctuation">##</span><span class="token expression">b</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token number">12</span>
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果一个宏当中有其他宏的名字，也是会被替换的</p><p>如果一个宏的值超过了一行，需要在末尾加<code>\\</code></p><p>一个宏定义可以没有值</p><p>C 还提供了一些预定义的宏</p><table><thead><tr><th>宏</th><th>描述</th></tr></thead><tbody><tr><td><code>__DATE__</code></td><td>当前源文件的编泽口期，用 “Mmm dd yyy”形式的字符串常量表示</td></tr><tr><td><code>__FILE__</code></td><td>当前源文件的名称，用字符串常量表示</td></tr><tr><td><code>__LINE__</code></td><td>当前源义件中的行号，用十进制整数常量表示，它可以随#line指令改变</td></tr><tr><td><code>__TIME__</code></td><td>当前源文件的最新编译吋间，用“hh:mm:ss”形式的宁符串常量表示</td></tr></tbody></table><h3 id="带参数的宏" tabindex="-1"><a class="header-anchor" href="#带参数的宏" aria-hidden="true">#</a> 带参数的宏</h3><ul><li>格式：#define 标识符(参数1,参数2) ((参数1)*(参数2))</li></ul><p>可以像函数一样携带参数，但原则是一切都要括号，整个值也要括号，参数出现的每一个地方都要括号，也可以嵌套其他宏</p><h2 id="条件编译" tabindex="-1"><a class="header-anchor" href="#条件编译" aria-hidden="true">#</a> 条件编译</h2><h2 id="标准库函数" tabindex="-1"><a class="header-anchor" href="#标准库函数" aria-hidden="true">#</a> 标准库函数</h2><h3 id="stdlib-h" tabindex="-1"><a class="header-anchor" href="#stdlib-h" aria-hidden="true">#</a> stdlib.h</h3><ul><li><p>srand</p></li><li><p>rand</p></li><li><p>exit</p></li><li><p>system</p></li></ul><h3 id="string-h" tabindex="-1"><a class="header-anchor" href="#string-h" aria-hidden="true">#</a> string.h</h3><ul><li>strcpy</li><li>strcmp</li><li>strlen</li></ul><h3 id="math-h" tabindex="-1"><a class="header-anchor" href="#math-h" aria-hidden="true">#</a> math.h</h3><ul><li>ceil</li><li>floor</li><li>sqrt</li><li>pow</li><li>abs</li></ul>`,33),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","preprocessing.html.vue"]]);export{d as default};
