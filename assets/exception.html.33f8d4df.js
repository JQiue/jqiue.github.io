import{ac as n,A as s,B as a,ae as e}from"./framework.a879f165.js";const p={},t=e(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token number">1</span> <span class="token operator">/</span> <span class="token number">0</span> <span class="token comment"># 抛出 ZeroDivisionError</span>
<span class="token number">1</span> <span class="token operator">+</span> <span class="token string">&quot;2&quot;</span> <span class="token comment"># 抛出 TypeError</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment"># 抛出 NameError</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上是一些简单的错误类型示例，一般无需记住</p><p>当出现这种异常时，可以使用捕获异常的方式来处理，在让其他逻辑代码继续执行下去，这样程序的健壮性就大大的提升了</p><h2 id="try-except" tabindex="-1"><a class="header-anchor" href="#try-except" aria-hidden="true">#</a> try except</h2><p>Python 通过<code>try except</code>处理异常，比如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">try</span><span class="token punctuation">:</span>
  <span class="token number">1</span><span class="token operator">/</span><span class="token number">0</span>
<span class="token keyword">except</span> ZeroDivisionError<span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;division by zero&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>try 语句块中放入需要处理异常的语句，except 语句块用于捕获异常类型并处理，后面的变量代表捕获的异常类型，这个例子会输出<code>division by zero</code></p><p>改一下出错类型：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">try</span><span class="token punctuation">:</span>
  <span class="token number">1</span> <span class="token operator">+</span> <span class="token string">&quot;2&quot;</span>
<span class="token keyword">except</span> ZeroDivisionError<span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;division by zero&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然明知<code>1 + &quot;2&quot;</code>会抛出 TypeError 错误，但是并没有执行 except 代码块中的内容，反而是编译器抛出了错误，这是因为 except 后面的变量类型只能捕获该类型的错误，要想捕获 TypeError 错误，可以在 except 后使用多个异常类型，当捕获到其中某一个异常时，便会执行代码块中的内容</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">try</span><span class="token punctuation">:</span>
  <span class="token number">1</span> <span class="token operator">+</span> <span class="token string">&quot;2&quot;</span>
<span class="token keyword">except</span> <span class="token punctuation">(</span>ZeroDivisionError<span class="token punctuation">,</span> TypeError<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>except 也可以不带任何类型，只要发生了一场就会执行该代码块，但这不是一个好的方式</p><p>如果想要捕获所有的异常可以这么做：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">try</span><span class="token punctuation">:</span>
  <span class="token number">1</span> <span class="token operator">+</span> <span class="token string">&quot;2&quot;</span>
<span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Exception 可以捕获所有的异常，可以使用 as 关键字将所有进入到 Exception 异常起一个别名</p><h2 id="try-except-else" tabindex="-1"><a class="header-anchor" href="#try-except-else" aria-hidden="true">#</a> try except else</h2><p><code>try except</code>可以携带一个 else 子句，当没有发生异常的时候就会执行 else 中的代码块</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">try</span><span class="token punctuation">:</span>
  <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">1</span>
<span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;没有任何异常&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="try-except-else-finally" tabindex="-1"><a class="header-anchor" href="#try-except-else-finally" aria-hidden="true">#</a> try except else finally</h2><p>和 else 不同的是，无论是否异常，都会执行 finally 中的代码块</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">try</span><span class="token punctuation">:</span>
  <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">1</span>
<span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;无异常则执行&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">finally</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;有无异常都执行 finally 代码块&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),o=[t];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","exception.html.vue"]]);export{d as default};
