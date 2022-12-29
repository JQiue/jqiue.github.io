import{ac as n,A as s,B as a,ae as p}from"./framework.a879f165.js";const t={},e=p(`<p>队列和栈类似，但是采用的是先进先出原则，只能从尾部添加新元素，并从顶部移除元素</p><h2 id="数组实现" tabindex="-1"><a class="header-anchor" href="#数组实现" aria-hidden="true">#</a> 数组实现</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;stdio.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;stdlib.h&quot;</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">OK</span> <span class="token expression"><span class="token number">1</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">ERROR</span> <span class="token expression"><span class="token number">0</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">CAPACITY</span> <span class="token expression"><span class="token number">10</span></span></span>

<span class="token keyword">typedef</span> <span class="token keyword">int</span> Status<span class="token punctuation">;</span>
<span class="token keyword">typedef</span> <span class="token keyword">int</span> ElementType<span class="token punctuation">;</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">Queue</span>
<span class="token punctuation">{</span>
  ElementType <span class="token operator">*</span>array<span class="token punctuation">;</span>
  <span class="token keyword">int</span> front<span class="token punctuation">,</span> rear<span class="token punctuation">;</span>
  <span class="token keyword">int</span> capacity<span class="token punctuation">;</span>
  <span class="token keyword">int</span> size<span class="token punctuation">;</span>
<span class="token punctuation">}</span> Queue<span class="token punctuation">;</span>

Status <span class="token function">initQueue</span><span class="token punctuation">(</span>Queue <span class="token operator">*</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Status <span class="token function">isEmpty</span><span class="token punctuation">(</span>Queue <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Status <span class="token function">isFull</span><span class="token punctuation">(</span>Queue <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Status <span class="token function">enQueue</span><span class="token punctuation">(</span>Queue <span class="token operator">*</span><span class="token punctuation">,</span> ElementType<span class="token punctuation">)</span><span class="token punctuation">;</span>
Status <span class="token function">deQueue</span><span class="token punctuation">(</span>Queue <span class="token operator">*</span><span class="token punctuation">,</span> ElementType <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 初始化队列 */</span>
Status <span class="token function">initQueue</span><span class="token punctuation">(</span>Queue <span class="token operator">*</span><span class="token operator">*</span>q<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token comment">// 开辟队列空间</span>
  <span class="token punctuation">(</span><span class="token operator">*</span>q<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span>Queue <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>Queue<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">*</span>q <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> ERROR<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 初始化容量</span>
  <span class="token punctuation">(</span><span class="token operator">*</span>q<span class="token punctuation">)</span><span class="token operator">-&gt;</span>capacity <span class="token operator">=</span> CAPACITY<span class="token punctuation">;</span>
  <span class="token comment">// 开辟连续的元素存储空间</span>
  <span class="token punctuation">(</span><span class="token operator">*</span>q<span class="token punctuation">)</span><span class="token operator">-&gt;</span>array <span class="token operator">=</span> <span class="token punctuation">(</span>ElementType <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">*</span>q<span class="token punctuation">)</span><span class="token operator">-&gt;</span>capacity <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>ElementType<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 初始化队头，队尾，长度</span>
  <span class="token punctuation">(</span><span class="token operator">*</span>q<span class="token punctuation">)</span><span class="token operator">-&gt;</span>front <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">*</span>q<span class="token punctuation">)</span><span class="token operator">-&gt;</span>size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token comment">// 非常关键的一个赋值，影响入队的操作</span>
  <span class="token punctuation">(</span><span class="token operator">*</span>q<span class="token punctuation">)</span><span class="token operator">-&gt;</span>rear <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">*</span>q<span class="token punctuation">)</span><span class="token operator">-&gt;</span>capacity <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> OK<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 判断队列是否为空 */</span>
Status <span class="token function">isEmpty</span><span class="token punctuation">(</span>Queue <span class="token operator">*</span>q<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>q<span class="token operator">-&gt;</span>size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Queqe is empty\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> OK<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> ERROR<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 判断队列是否满了 */</span>
Status <span class="token function">isFull</span><span class="token punctuation">(</span>Queue <span class="token operator">*</span>q<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token comment">// 当长度等于容量就代表满了</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>q<span class="token operator">-&gt;</span>size <span class="token operator">==</span> q<span class="token operator">-&gt;</span>capacity<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Queqe is full\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> OK<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> ERROR<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 入队 */</span>
Status <span class="token function">enQueue</span><span class="token punctuation">(</span>Queue <span class="token operator">*</span>q<span class="token punctuation">,</span> ElementType e<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token comment">// 判断是否满了</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isFull</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">return</span> ERROR<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 算出队尾的位置，这里的取模计算永远使队尾在固定的范围移动</span>
  q<span class="token operator">-&gt;</span>rear <span class="token operator">=</span> <span class="token punctuation">(</span>q<span class="token operator">-&gt;</span>rear <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> q<span class="token operator">-&gt;</span>capacity<span class="token punctuation">;</span>
  <span class="token comment">// 插入元素</span>
  q<span class="token operator">-&gt;</span>array<span class="token punctuation">[</span>q<span class="token operator">-&gt;</span>rear<span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>
  <span class="token comment">// 增加长度</span>
  q<span class="token operator">-&gt;</span>size<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d enqueued to queue\\n&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> OK<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 出队 */</span>
Status <span class="token function">deQueue</span><span class="token punctuation">(</span>Queue <span class="token operator">*</span>q<span class="token punctuation">,</span> ElementType <span class="token operator">*</span>e<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token comment">// 判断是否为空</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">return</span> ERROR<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 将当前队头的元素返回出去</span>
  <span class="token operator">*</span>e <span class="token operator">=</span> q<span class="token operator">-&gt;</span>array<span class="token punctuation">[</span>q<span class="token operator">-&gt;</span>front<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">// 移动队头，同样通过取模计算出队头的合理位置</span>
  q<span class="token operator">-&gt;</span>front <span class="token operator">=</span> <span class="token punctuation">(</span>q<span class="token operator">-&gt;</span>front <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> q<span class="token operator">-&gt;</span>capacity<span class="token punctuation">;</span>
  <span class="token comment">// 长度减少</span>
  q<span class="token operator">-&gt;</span>size<span class="token operator">--</span><span class="token punctuation">;</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d dequeued from queue\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> OK<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Queue</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>lowestCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">enQueue</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> element<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">deQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>lowestCount<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">delete</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>lowestCount<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>lowestCount<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lowestCount <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lowestCount<span class="token punctuation">;</span> <span class="token comment">// 相减即可得到元素数量</span>
  <span class="token punctuation">}</span>
  <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>lowestCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="链式实现" tabindex="-1"><a class="header-anchor" href="#链式实现" aria-hidden="true">#</a> 链式实现</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;stdio.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;stdlib.h&quot;</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">OK</span> <span class="token expression"><span class="token number">1</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">ERROR</span> <span class="token expression"><span class="token number">0</span></span></span>

<span class="token keyword">typedef</span> <span class="token keyword">int</span> Status<span class="token punctuation">;</span>
<span class="token keyword">typedef</span> <span class="token keyword">int</span> DataType<span class="token punctuation">;</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">Node</span>
<span class="token punctuation">{</span>
  DataType data<span class="token punctuation">;</span>
  <span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span> Node<span class="token punctuation">;</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">Queue</span>
<span class="token punctuation">{</span>
  Node <span class="token operator">*</span>front<span class="token punctuation">;</span>
  Node <span class="token operator">*</span>rear<span class="token punctuation">;</span>
  <span class="token keyword">int</span> size<span class="token punctuation">;</span>
<span class="token punctuation">}</span> Queue<span class="token punctuation">,</span> <span class="token operator">*</span>LinkedQueue<span class="token punctuation">;</span>

Status <span class="token function">initQueue</span><span class="token punctuation">(</span>LinkedQueue <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Status <span class="token function">isEmpty</span><span class="token punctuation">(</span>LinkedQueue<span class="token punctuation">)</span><span class="token punctuation">;</span>
Status <span class="token function">enQueue</span><span class="token punctuation">(</span>LinkedQueue<span class="token punctuation">,</span> DataType data<span class="token punctuation">)</span><span class="token punctuation">;</span>
Status <span class="token function">deQueue</span><span class="token punctuation">(</span>LinkedQueue<span class="token punctuation">,</span> DataType <span class="token operator">*</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 初始化队列 */</span>
Status <span class="token function">initQueue</span><span class="token punctuation">(</span>LinkedQueue <span class="token operator">*</span>q<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token comment">// 开辟描述队列结构体的空间</span>
  <span class="token operator">*</span>q <span class="token operator">=</span> <span class="token punctuation">(</span>Queue <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>Queue<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 判断开辟空间是否失败</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">*</span>q <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> ERROR<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 创建一个头节点</span>
  Node <span class="token operator">*</span>head <span class="token operator">=</span> <span class="token punctuation">(</span>Node <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>Node<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 初始化头节点</span>
  head<span class="token operator">-&gt;</span>data <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  head<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
  <span class="token comment">// 初始化队头，队尾，长度</span>
  <span class="token punctuation">(</span><span class="token operator">*</span>q<span class="token punctuation">)</span><span class="token operator">-&gt;</span>front <span class="token operator">=</span> head<span class="token punctuation">;</span>
  <span class="token punctuation">(</span><span class="token operator">*</span>q<span class="token punctuation">)</span><span class="token operator">-&gt;</span>rear <span class="token operator">=</span> head<span class="token punctuation">;</span>
  <span class="token punctuation">(</span><span class="token operator">*</span>q<span class="token punctuation">)</span><span class="token operator">-&gt;</span>size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> OK<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 判断队列是否为空 */</span>
Status <span class="token function">isEmpty</span><span class="token punctuation">(</span>LinkedQueue q<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// 当队头和队尾相等时即为空</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>q<span class="token operator">-&gt;</span>front <span class="token operator">==</span> q<span class="token operator">-&gt;</span>rear<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Queue is empty\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
    <span class="token keyword">return</span> OK<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> ERROR<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 入队 */</span>
Status <span class="token function">enQueue</span><span class="token punctuation">(</span>LinkedQueue q<span class="token punctuation">,</span> DataType data<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// 创建一个节点</span>
  Node <span class="token operator">*</span>node <span class="token operator">=</span> <span class="token punctuation">(</span>Node <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>Node<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 初始化节点</span>
  node<span class="token operator">-&gt;</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span>
  node<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
  <span class="token comment">// 将节点插入队尾位置</span>
  q<span class="token operator">-&gt;</span>rear<span class="token operator">-&gt;</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span>
  <span class="token comment">// 移动队尾</span>
  q<span class="token operator">-&gt;</span>rear <span class="token operator">=</span> node<span class="token punctuation">;</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d enqueued to queue\\n&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> OK<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 出队 */</span>
Status <span class="token function">deQueue</span><span class="token punctuation">(</span>LinkedQueue q<span class="token punctuation">,</span> DataType <span class="token operator">*</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 判断是否为空</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> ERROR<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 创建一个临时的节点，存储队头元素的地址（不是头结点），稍后释放该节点的空间</span>
  Node <span class="token operator">*</span>tempNode <span class="token operator">=</span> q<span class="token operator">-&gt;</span>front<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
  <span class="token comment">// 返回队头元素的数据（此时队头指向头节点）</span>
  <span class="token operator">*</span>data <span class="token operator">=</span> tempNode<span class="token operator">-&gt;</span>data<span class="token punctuation">;</span>
  <span class="token comment">// 修改头结点的指针，相对于移动了队头</span>
  q<span class="token operator">-&gt;</span>front<span class="token operator">-&gt;</span>next <span class="token operator">=</span> tempNode<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d dequeued from queue\\n&quot;</span><span class="token punctuation">,</span> tempNode<span class="token operator">-&gt;</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 释放节点空间</span>
  <span class="token function">free</span><span class="token punctuation">(</span>tempNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> OK<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="双端队列" tabindex="-1"><a class="header-anchor" href="#双端队列" aria-hidden="true">#</a> 双端队列</h2><p>双端队列是一种允许从队头和队尾同时添加或移除元素的特殊队列</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Deque</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>front <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>rear <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">addFront</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addBack</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>front <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span><span class="token operator">--</span><span class="token keyword">this</span><span class="token punctuation">.</span>front<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>rear<span class="token punctuation">;</span> i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>rear<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>front <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> element<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">addBack</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>rear<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> element<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">removeFront</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>front<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">delete</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>front<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>front<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">removeBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>rear <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">delete</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span><span class="token operator">--</span><span class="token keyword">this</span><span class="token punctuation">.</span>rear<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>front<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>rear <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>front<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>rear <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>front <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>front <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>rear <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="循环队列" tabindex="-1"><a class="header-anchor" href="#循环队列" aria-hidden="true">#</a> 循环队列</h2><p>当队列的长度是固定的时候，会出现队尾追队头的现象，因为只能在有限的空间上进行入队操作</p><h2 id="优先级队列" tabindex="-1"><a class="header-anchor" href="#优先级队列" aria-hidden="true">#</a> 优先级队列</h2><p>普通队列的元素都会被插入到队尾，优先级队列的元素再插入的同时会考虑该元素的优先级来决定它的位置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Element</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> priority</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>priority <span class="token operator">=</span> priority<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">PriorityQueue</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>lowestCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">enQueue</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> priority</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> element <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Element</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> priority<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> element<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> added <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lowestCount<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>priority <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>priority<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> element<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
          added <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
          <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>added<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> element<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">deQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>lowestCount<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">delete</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>lowestCount<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>lowestCount<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lowestCount <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lowestCount<span class="token punctuation">;</span> <span class="token comment">// 相减即可得到元素数量</span>
  <span class="token punctuation">}</span>
  <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>lowestCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="阻塞队列" tabindex="-1"><a class="header-anchor" href="#阻塞队列" aria-hidden="true">#</a> 阻塞队列</h2><h2 id="并发队列" tabindex="-1"><a class="header-anchor" href="#并发队列" aria-hidden="true">#</a> 并发队列</h2><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><ul><li>循环队列</li><li>回文检查器</li><li>JavaScript 任务队列</li></ul>`,18),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","queue.html.vue"]]);export{k as default};
