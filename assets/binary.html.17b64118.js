import{ac as n,A as a,B as s,ae as t}from"./framework.a879f165.js";const e={},p=t(`<p>在处理创建，上传，下载的时候会经常遇到二进制数据，这些都可以通过 JavaScript 处理，在 JavaScript 中有很多二进制数据格式，比如<code>ArrayBuffer</code>, <code>Unit8Array</code>, <code>DataView</code>, <code>Blob</code>,<code>File</code>等等</p><h2 id="arraybuffer" tabindex="-1"><a class="header-anchor" href="#arraybuffer" aria-hidden="true">#</a> ArrayBuffer</h2><p>基本的二进制对象是<code>ArrayBuffer</code>—— 对固定长度的连续内存空间的引用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayBuffer</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建一个长度为 16 的 buffer</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>它会分配一个 16 字节的连续内存空间，并用 0 进行预填充</p><p>要知道的是，ArrayBuffer 不是某种东西的数组，它和数组没有共通的地方：</p><ul><li>长度固定</li><li>占用正好长度空间</li><li>访问某个字节，需要通过别的方式访问，而不是索引</li></ul><p>访问 ArrayBuffer 中的数据需要一个“眼镜”来解释其中的字节，这个就是类型数组，比如：</p><ul><li>Uint8Array —— 将 ArrayBuffer 中的每个字节视为 0 到 255 之间的单个数字（每个字节是 8 位，因此只能容纳那么多）。这称为 “8 位无符号整数</li><li>Uint16Array —— 将每 2 个字节视为一个 0 到 65535 之间的整数。这称为 “16 位无符号整数”</li><li>Uint32Array —— 将每 4 个字节视为一个 0 到 4294967295 之间的整数。这称为 “32 位无符号整数”</li><li>Float64Array —— 将每 8 个字节视为一个 5.0x10-324 到 1.8x10308 之间的浮点数</li></ul><p>因此一个 16 字节的 ArrayBuffer 可以被解释 16 个单元，或 8 个单元（每个 2 字节）,或 4 个单元（每个 4 字节）等等</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayBuffer</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建一个长度为 16 的 buffer</span>
<span class="token keyword">let</span> view <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint32Array</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将 buffer 视为一个 32 位整数的序列</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Uint32Array<span class="token punctuation">.</span><span class="token constant">BYTES_PER_ELEMENT</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 每个单元 4 个字节</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>view<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 单元长度</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>view<span class="token punctuation">.</span>byteLength<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 字节总大小</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文本的编码和解码" tabindex="-1"><a class="header-anchor" href="#文本的编码和解码" aria-hidden="true">#</a> 文本的编码和解码</h2><p>如果二进制正好是一个字符串，可以通过<code>TextDecoder(utfLabel)</code>将给定的 Buffer 和编码格式将其读取为字符串。<code>utfLabel</code>默认是<code>utf-8</code>，也可以是任何有效的编码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> uint8Array <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">228</span><span class="token punctuation">,</span> <span class="token number">189</span><span class="token punctuation">,</span> <span class="token number">160</span><span class="token punctuation">,</span> <span class="token number">229</span><span class="token punctuation">,</span> <span class="token number">165</span><span class="token punctuation">,</span> <span class="token number">189</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> decoder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TextDecoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> decoder<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>Unit8Array<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 你好</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>TextEncoder</code>则是做相反的事，将字符串转换为字节，只支持 UTF-8 编码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> encoder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TextEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> uint8Array <span class="token operator">=</span> encoder<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span><span class="token string">&quot;你好&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 228, 189, 160, 229, 165, 189</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="blob" tabindex="-1"><a class="header-anchor" href="#blob" aria-hidden="true">#</a> Blob</h2><p><code>Blob(array, options)</code> 是由一个可选的字符串类型（MIME）和 parts 组成，而 parts 表示一系列其他的 Blob 对象，字符串和 Buffer 组成的数组</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;&lt;html&gt;…&lt;/html&gt;&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;text/html&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Blob 是不可变的对象，这意味着无法原生修改，但可以通过<code>slice</code>获取 parts，创建新的 Blob</p><p>Blob 可以通过<code>URL.createObjectURL(blob)</code>转换为，<code>&lt;a&gt;</code>，<code>&lt;img&gt;</code>或其他标签的 URL。也可以下载/上传 Blob，在实际的网络请求中，<code>type</code>自然的变成了<code>Content-Type</code></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 这将会下载它 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">download</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello.txt<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>#<span class="token punctuation">&#39;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>link<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Download<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">let</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;Hello, world!&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;text/plain&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

link<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>URL.createObjectURL</code>取一个 Blob，并为其创建一个唯一的 URL，每个通过这种方式创建的 URL，都会映射到 Blob 中，但是 Blob 是放在内存中的，浏览器不能释放它，在文档推出时才会清除，如果文档的寿命很长，释放不会很快发生</p><p><code>URL.revokeObjectURL(url)</code>从内部映射中移除引用，因此允许 Blob 被删除（如果没有其他引用的话），并释放内存。在调用该方法后，该 URL 不会再起作用了</p><h2 id="file-和-filereader" tabindex="-1"><a class="header-anchor" href="#file-和-filereader" aria-hidden="true">#</a> File 和 FileReader</h2>`,25),o=[p];function c(l,u){return a(),s("div",null,o)}const r=n(e,[["render",c],["__file","binary.html.vue"]]);export{r as default};
