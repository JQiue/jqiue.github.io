import{ac as a,A as n,B as e,ae as s}from"./framework.a879f165.js";const t={},c=s(`<h2 id="输入和输出" tabindex="-1"><a class="header-anchor" href="#输入和输出" aria-hidden="true">#</a> 输入和输出</h2><p><code>System.out.println()</code>会将信息打印在控制台上并换行，而<code>System.out.printf()</code>则不会缓缓</p><p>如果想要通过控制台输入，就必须构造<code>Scanner</code>对象，同时与标准输入流<code>System.in</code>关联</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Scanner</span> sc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在就可以通过<code>Scanner</code>类的各种方法来实现输入操作</p><ul><li>next()</li><li>nextLine()</li><li>nextInt()</li><li>nextFloat()</li><li>nextBoolean()</li></ul><p><code>Scanner</code>类定义在<code>java.util</code>包中，当使用的类不是定义在基本的<code>java.lang</code>包中时，必须使用<code>import</code>关键字将包导入</p><p>Java 沿用了 C 语言库函数中的<code>printf()</code>，因此可以通过格式占位符来控制输出的格式</p><p>Scanner 也可以读取文件，需要用 File 类将一个文件构造成 Scanner 对象，这样就可以将文本中所有的内容加载到</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Scanner</span> sc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">Paths</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;text.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>值得一提的是，这个操作必须处理异常，否则无法通过编译</p><h2 id="文件处理" tabindex="-1"><a class="header-anchor" href="#文件处理" aria-hidden="true">#</a> 文件处理</h2><p>使用<code>File(String path)</code>构造一个文件对象</p><h2 id="io" tabindex="-1"><a class="header-anchor" href="#io" aria-hidden="true">#</a> IO</h2><p>Java 可以操作用流的方式操作数据，<code>InputStream()</code>和<code>OutputStream()</code>分别是输入流和输出流的构造方式</p><p>Java 还提供了字符流<code>Reader</code>和<code>Writer</code>，只能操作字符数据</p>`,16),o=[c];function p(d,i){return n(),e("div",null,o)}const r=a(t,[["render",p],["__file","standard.html.vue"]]);export{r as default};
