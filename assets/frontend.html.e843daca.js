import{ac as a,A as e,B as p,E as s,ae as n}from"./framework.a879f165.js";const t={},o=n(`<p>这里主要记录前端开发中的所有工程技术</p><h2 id="lint" tabindex="-1"><a class="header-anchor" href="#lint" aria-hidden="true">#</a> Lint</h2><p>在计算机科学中，lint 是一种工具的名称，用来标记代码中，某些可疑的，不具有结构性的语句，是一种静态程序分析工具</p><p>Lint 工具的优势：</p><ul><li>避免低级bug，找出可能发生的语法错误</li><li>提示删除多余的代码</li><li>确保代码遵循最佳实践</li><li>统一团队的代码风格</li></ul><h3 id="javascriptlint" tabindex="-1"><a class="header-anchor" href="#javascriptlint" aria-hidden="true">#</a> JavaScriptLint</h3><p>在 JavaScript 发展的过程中出现过很多很多 lint 工具，比如：</p><ul><li>JSLint</li><li>JSHint</li><li>ESLint</li></ul><p>JSLint 可以说是最早出现的 JavaScript 的 lint 工具，但是它及其具有个人风格，这让自由的人很难接受，虽然它仍然还在更新。由于 JSLint 的规则让人无法接受，所以基于 JSLint 的 JSHint 出现了，在 JSLint 的基础上增加了很多配置项，给了开发者很大的自由</p><p>ESLint 是下一代 JS Linter 工具，但是速度远远不如 JSLint。随着 ES6 的出现，由于 JSLint 短期内无法提供支持，而 ESLint 只需要有合适的解析器就能进行语法检查，这时 Babel 为 ESLint 提供了支持，让 ESLint 最快的成为了支持 ES6 语法的 lint 工具</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> eslint
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在项目中使用<code>eslint --init</code>，一问一答后就会在根目录中生成<code>.eslintrc.js</code>文件</p><p>此时使用<code>ESlint &lt;file/folder&gt;</code>可对目录中的代码进行检查</p><h3 id="csslint" tabindex="-1"><a class="header-anchor" href="#csslint" aria-hidden="true">#</a> CSSLint</h3><h2 id="prettier" tabindex="-1"><a class="header-anchor" href="#prettier" aria-hidden="true">#</a> prettier</h2><p>是一款代码格式化工具，它不同于 Lint，只是做一些代码风格检查</p><h2 id="css-预处理器" tabindex="-1"><a class="header-anchor" href="#css-预处理器" aria-hidden="true">#</a> CSS 预处理器</h2><p>众所周知，CSS 具有大量重复的代码，这看起来很不优雅，CSS 预处理器帮忙做到了简化，常见的预处理器有：</p><ul><li>Sass</li><li>Less</li></ul><p>Sass 是最成熟的预处理器，它的后缀文件一般为<code>scss</code>或<code>sass</code>，<code>sass</code>以严格的缩进语法来书写，省略了大括号和分号，而<code>scss</code>和平常的<code>css</code>类似</p><p>嵌套规则：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">/* css */</span>
<span class="token selector">.header span </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* scss */</span>
<span class="token selector">.header </span><span class="token punctuation">{</span>
  <span class="token selector">span </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* sass */</span>
.header
  span
    <span class="token property">color</span><span class="token punctuation">:</span> red
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在嵌套规则中引用父选择器</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">/* css */</span>
<span class="token selector">.header span </span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">.header span:active </span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">.header span:hover </span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">/* scss */</span>
<span class="token selector">.header </span><span class="token punctuation">{</span>
  <span class="token selector">span </span><span class="token punctuation">{</span>
    <span class="token selector"><span class="token parent important">&amp;</span>:active </span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* sass */</span>
.header
  span
    &amp;<span class="token punctuation">:</span>active
    &amp;<span class="token punctuation">:</span>hover
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变量 - 任何符合 CSS 取值都可以定义，甚至能参与表达式计算</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">/* css */</span>
<span class="token selector">.title </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.subtitle </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.titletitle </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* scss */</span>
<span class="token property"><span class="token variable">$text-color</span></span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span>
<span class="token selector">.title </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$text-color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.subtitle </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$text-color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.titletitle </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$text-color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当一个代码很大的时候，可以被拆分一个单独的 Sass 文件引入，文件最好以<code>_</code>开头，否则会单独编译出一个 CSS 文件，通过<code>@import</code>语法导入</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">/* foo.scss */</span>
<span class="token selector">span </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引入时不需要加<code>_</code></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">&#39;foo&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>混入 - 抽取公共的代码样式</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">/* scss */</span>
<span class="token keyword">@mixin</span> <span class="token selector">singleline-ellipsis </span><span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.text </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
  <span class="token keyword">@include</span> singleline-ellipsis<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.content-text </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span>
  <span class="token keyword">@include</span> singleline-ellipsis<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* css */</span>
<span class="token selector">.text </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.content-text </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>且支持传参，使用<code>$</code>定义</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">/* scss */</span>
<span class="token keyword">@mixin</span> <span class="token function">singleline-ellipsis</span><span class="token punctuation">(</span><span class="token variable">$width</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$width</span><span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.text </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">singleline-ellipsis</span><span class="token punctuation">(</span>600px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.content-text </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">singleline-ellipsis</span><span class="token punctuation">(</span>1000px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* css */</span>
<span class="token selector">.text </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.content-text </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以搭配<code>@content</code>语法，它在被导入的时候被内容所填充</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">/* scss */</span>
<span class="token keyword">@mixin</span> <span class="token selector">ipad </span><span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@media</span> screen <span class="token function">and</span><span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">@content</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.text </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token keyword">@include</span> <span class="token selector">ipad </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* css */</span>
<span class="token selector">.text </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> screen <span class="token operator">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.text </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="babel" tabindex="-1"><a class="header-anchor" href="#babel" aria-hidden="true">#</a> babel</h2><p>Babel 是一个 JavaScript 转义器，它将使用了最新的 ECMAScript 特性代码转换成了使用最广泛支持的 ES5 特性的等价代码，让开发人员享受新特性带来的爽点同时，避免了大部分兼容性问题</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev @babel/core @babel/cli @babel/preset-env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>babel.config.json</code>文件配置</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>babel src --out-dir dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> webpack</h2><p>模块化虽然解决了代码了维护性和复用性，但是由于导入资源变多了，请求次数变多了，网页性能也就变差了，因此需要一个打包工具将所有的模块合并到一个文件中，再引入到网页中去，而 webpack 恰恰就是这样的工具</p><p>webpack 是一套基于 Node.js 的&quot;模块打包工具&quot;，在刚推出的时候就是一个单纯的 JS 模块打包工具，可以将多个模块的 JS 文件合并打包到一个文件中，但是随着时间的推移、众多开发者的追捧和众多开发者的贡献，现在 webpack 不仅仅能够打包 JS 模块, 还可以打包 CSS/LESS/SCSS/图片等其它文件</p><p>不推荐全局安装 webpack，在使用不同版本的 webpack 版本打包的项目中，这可能会导致构建失败</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i webpack webpack-cli --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>webpack 4+ 版本后，需要额外的安装 CLI</p></div><p>webpack 处理模块时，它递归构建一个关系图，其中包含应用程序需要的每个模块，然后将这些模块打包成一个或多个 bundle，但是仍需告诉 webpack 该从哪里开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点依赖的，每个依赖项随即被处理，最后输出到称之为 bundles 的文件中</p><p>这里需要理解四个核心概念：</p><ul><li>模式 - 模式会应用不同的打包优化</li><li>入口 - 入口指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始</li><li>loader - 通过 loader 也可以打包非 JavaScript 文件</li><li>插件 - 插件可以用于执行更为广泛的任务，比如打包优化和压缩，可以处理各种各样的任务</li><li>输出 - 出口告诉 webpack 应该在哪里输出它创建的 bundle，以及如何命名这些文件</li></ul><blockquote><p>假设已经初始化了一个项目，且安装好了 webpack</p></blockquote><p>在项目中创建一个<code>src/index.js</code>文件，随便写点代码，终端中直接执行<code>npx webpack</code>，不用理会终端中的信息，此时 webpack 会在根目录创建一个<code>dist</code>文件夹，里面是一个打包好的<code>main.js</code>文件，这个文件和<code>src/index.js</code>中的代码是一样的</p><p>然而还没完，webpack 可是一个模块打包器，才打包一个文件根本看不出来什么，继续在<code>src</code>中创建一个<code>foo.js</code>文件，随便写点代码，在<code>src/index.js</code>中使用模块语法引入，在进行一次打包，此时发现还是生成了一个<code>dist/main.js</code>文件，然后创建一个<code>src/index.html</code>，写好 HTML 基本结构，并引入<code>main.js</code>就可以看到代码效果了</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>Webpack 支持 ES module, CommonJS, AMD 等模块化规范，随便使用</p></div><p>上面是默认的配置，如果不按照默认的配置进行创建文件，就无法打包成功。而 webpack 提供了一个配置文件用来控制打包行为，执行<code>npx webpack</code>首先会看根目录是否有<code>webpack.config.js</code>文件，如果有就按照配置打包，没有就按照默认的方式进行打包</p><p><code>webpack.config.js</code>掌控着 webpack 的一切行为，这里可以配置入口，输出，loader，插件，模式：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;main.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于<code>mode</code>来说用来控制开发环境和生产环境的打包策略，具有两种取值<code>development/production</code></p><p><code>entry</code>则告知入口文件的位置，相对于配置文件。<code>output</code>控制输出目录以及打包后的文件，这里使用的 Node.js 的<code>path</code>模块来进行路径拼接</p><p>loader 让 webpack 处理非 JS 文件的模块，有各种各样的 loader，有官方开发的，社区开发的等等，所以每个 loader 都是一个独立的模块需要被安装，webpack 会根据<code>module</code>中的规则来匹配对应的 loader，并应用它。假如想要在 webpack 中使用 babel，则可以使用 babel-loader</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/main.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;main.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>rules</code>通过<code>test</code>来匹配对应文件，并应用对应的 loader 程序，<code>exclude</code>是排除 loader 对一些文件的操作</p><p>插件比 loader 的范围更加广泛，有官方插件和社区插件等，都是独立的模块，一般插件都是提供的构造函数，插件的用法要看具体的插件文档。比如打包完成后通常需要手动引入 js 文件到 HTML 中，而一些插件，比如<code>html-webpack-plugin</code>会自动完成这些工作</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/main.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;main.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./index.html&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>webpack 允许多个入口，比如说有两个 HTML 文件，配合<code>html-webpack-plugin</code>应该这么用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 配置多个入口</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token string">&#39;./src/page.js&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].js&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 自动生成对应的文件名</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 第一个 HTML 文件所需要的选项</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;index.html&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;index.html&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 输出的文件名</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">]</span> <span class="token comment">// 指定某个入口合并在 HTML 中</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 第二个 HTML 文件所需要的选项</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;page.html&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;page.html&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">]</span> 
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每次手动输入<code>webpack</code>打包太繁琐，虽然可以直接配置<code>script</code>用来简化操作，但这仍然解决不了需要手动进行打包的过程。webpack 提供了一个<code>--watch</code>的额外参数用来监听文件的改变，一旦发生改变就会自动打包，这很是方便，已经实现打包自动化。但这仍然需要手动刷新网页查看效果，此时就需要用到<code>webpack-dev-server</code>，不仅具备自动打包功能，还能自动打开生成的<code>index.html</code>，同时能够实时重新加载，而不必按下 f5 刷新网页，需要进行额外的安装</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev webpack<span class="token operator">-</span>dev<span class="token operator">-</span>server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行<code>npx webpack-dev-server --open</code>即可，为了避免手动输入，在 package.json 的<code>script</code>项配置<code>&quot;serve&quot;: &quot;webpack-dev-server --open&quot;</code>即可</p><h3 id="很棒的-plugins" tabindex="-1"><a class="header-anchor" href="#很棒的-plugins" aria-hidden="true">#</a> 很棒的 plugins</h3>`,72),c=n(`<h2 id="swc" tabindex="-1"><a class="header-anchor" href="#swc" aria-hidden="true">#</a> swc</h2><p>SWC 是一个基于 Rust 编写的高性能 JavaScript 转义器，它对标 Babel，比 Babel 要快很多</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @swc/cli @swc/core

npx swc ./file.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="esbuild" tabindex="-1"><a class="header-anchor" href="#esbuild" aria-hidden="true">#</a> esbuild</h2><p>esbuild 是新一代打包器，它对标于 Webpack，速度与之更快</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> esbuild <span class="token parameter variable">-D</span>

npx esbuild app.js <span class="token parameter variable">--bundle</span> <span class="token parameter variable">--outfile</span><span class="token operator">=</span>out.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mock" tabindex="-1"><a class="header-anchor" href="#mock" aria-hidden="true">#</a> mock</h2><p>常见的 Mock 方案：</p><ul><li>代码侵入 - 写死数据，切换真实的环境非常麻烦</li><li>请求拦截 - 生成随机数据，但无法模拟增删改查的情况，只支持 XMLHttpRequest</li></ul><p>Mock.js 是一种模拟 JSON 数据的前端技术，目的是为了解决后端 API 没有上线，而前端没有数据进行填充的问题，使用 Mock 可以生成大量的测试数据，让前端专注于自己</p><p>两种安装方式：</p><ul><li>浏览器环境：引入<code>mock.js</code>库</li><li>Node.js 环境：<code>npm i mockjs</code></li></ul><h3 id="生成数据" tabindex="-1"><a class="header-anchor" href="#生成数据" aria-hidden="true">#</a> 生成数据</h3><p><code>Mock</code>是 Mock.js 提供的全局对象，使用它来做一些工作，按照官方的示例来看一看会生成什么样的数据</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> data <span class="token operator">=</span> Mock<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string-property property">&#39;list|1-10&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token string-property property">&#39;id|+1&#39;</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 
生成的数据如下：

{
  &quot;list&quot;: [
    {
      &quot;id&quot;: 1
    },
    {
      &quot;id&quot;: 2
    }
  ]
}

*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这看起来很简单，<code>Mock.mock()</code>会根据传入的模板对象来生成数据对象，模板对象中的每一个属性都由 3 个部分组成：属性名、生成规则、属性值，<code>&#39;name|rule&#39;: value</code></p><p><code>&#39;list|1-10&#39;</code>表示生成 1 ~ 10 条数据，而<code>&#39;id|+1&#39;: 1</code>表示每条数据的属性名为<code>id</code>，且从<code>1</code>开始自增长</p><p>生成规则是可选的，如果没有则默认生成一条，且值不会具有变化</p><p>生成规则有 7 种格式可选：</p><ol><li><code>&#39;name|min-max&#39;: value</code></li><li><code>&#39;name|count&#39;: value</code></li><li><code>&#39;name|min-max.dmin-dmax&#39;: value</code></li><li><code>&#39;name|min-max.dcount&#39;: value</code></li><li><code>&#39;name|count.dmin-dmax&#39;: value</code></li><li><code>&#39;name|count.dcount&#39;: value</code></li><li><code>&#39;name|+step&#39;: value</code></li></ol><p>虽然有这么多生成规则，但是具体的生成含义是根据属性值来确定的</p><p>当属性值为字符串时：</p><ul><li><code>&#39;name|min-max&#39;: string</code>：重复拼接 min ~ max 次字符串</li><li><code>&#39;name|count&#39;: string</code>：重复拼接 count 次字符串</li></ul><p>当属性值为数字时：</p><ul><li><code>&#39;name|+1&#39;: number</code>：属性值自动加 1，初始值为 number。</li><li><code>&#39;name|min-max&#39;: number</code>：生成 min ~ max 之间的整数</li><li><code>&#39;name|min-max.dmin-dmax&#39;: number</code>：生成 min ~ max 之间的整数且小数部分保留 dmin ~ dmax 位</li></ul><p>当属性值为布尔值时：</p><ul><li><code>&#39;name|1&#39;: boolean</code>：随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2</li><li><code>&#39;name|min-max&#39;: value</code>：随机生成一个布尔值，值为 value 的概率是 min / (min + max)，值为 !value 的概率是 max / (min + max)</li></ul><p>当属性值为对象时：</p><ul><li><code>&#39;name|count&#39;: object</code>：从对象中随机选取 count 个属性</li><li><code>&#39;name|min-max&#39;: object</code>：从对象中随机选取 min ~ max 个属性</li></ul><p>当属性值为数组时：</p><ul><li><code>&#39;name|1&#39;: array</code>：从数组中随机选取 1 个元素</li><li><code>&#39;name|+1&#39;: array</code>：按照顺序选取 1 个元素</li><li><code>&#39;name|min-max&#39;: array</code>：重复数组元素拼接 min ~ max 次数组</li><li><code>&#39;name|count&#39;: array</code>：重复书元素拼接 count 次数组</li></ul><p>当属性值为函数时：</p><ul><li><code>&#39;name&#39;: function</code>：执行函数，返回值为最终值</li></ul><p>当属性值为正则时：</p><ul><li><code>&#39;name&#39;: regexp</code>：根据正则生成字符串</li></ul><h3 id="占位符" tabindex="-1"><a class="header-anchor" href="#占位符" aria-hidden="true">#</a> 占位符</h3><p>属性值中还可以使用占位符，使用<code>@</code>标记后面的字符串，占位符本质上引用的是<code>Mock.random</code>中的方法</p><h3 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h3><h3 id="拦截" tabindex="-1"><a class="header-anchor" href="#拦截" aria-hidden="true">#</a> 拦截</h3>`,39),l=n(`<h2 id="multirepo-和-monorepo" tabindex="-1"><a class="header-anchor" href="#multirepo-和-monorepo" aria-hidden="true">#</a> Multirepo 和 Monorepo</h2><p>Monorepo 可以理解为：利用单一仓库来管理多个 packages 的一种策略或手段，与其相对的是我们接触最多的 Multirepo</p><p>可以看项目结构来区分：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># monorepo目录结构</span>
<span class="token operator">|</span>-- monorepo-demo              
<span class="token operator">|</span>   <span class="token operator">|</span>-- packages                  <span class="token comment"># packages目录</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- compiler              <span class="token comment"># compiler子包</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- package.json      <span class="token comment"># compiler子包特有的依赖</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- reactivity            <span class="token comment"># reactivity子包</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- package.json      <span class="token comment"># reactivity子包特有的依赖</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- shared                <span class="token comment"># shared子包</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- package.json      <span class="token comment"># shared子包特有的依赖</span>
<span class="token operator">|</span>   <span class="token operator">|</span>-- package.json              <span class="token comment"># 所有子包都公共的依赖</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># multirepo-a 目录结构</span>
<span class="token operator">|</span>-- multirepo-a
<span class="token operator">|</span>   <span class="token operator">|</span>-- src 
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- feature1              <span class="token comment"># feature1 目录</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- feature2              <span class="token comment"># featrue2 目录</span>
<span class="token operator">|</span>   <span class="token operator">|</span>-- package.json              <span class="token comment"># 整个项目依赖</span>

<span class="token comment"># multirepo-b 目录结构</span>
<span class="token operator">|</span>-- multirepo-b
<span class="token operator">|</span>   <span class="token operator">|</span>-- src 
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- feature3              <span class="token comment"># feature3 目录</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- feature4              <span class="token comment"># featrue4 目录</span>
<span class="token operator">|</span>   <span class="token operator">|</span>-- package.json              <span class="token comment"># 整个项目依赖</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以很清楚的看到它们之间的差异：</p><ul><li>Monorepo 目录中除了会有公共的 package.json 依赖以外，在每个 sub-package 子包下面，也会有其特有的 package.json 依赖</li><li>Multirepo 更倾向与在项目制中，将一个个项目使用不同的仓库进行隔离，每一个项目下使用独有的 package.json 来管理依赖</li></ul><p>目前，搭建 Monorepo 项目主要有两种方式：</p><ul><li>Lerna + yarn workspace</li><li>pnpm</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">|</span>-- monorepo-demo              
<span class="token operator">|</span>   <span class="token operator">|</span>-- packages                  <span class="token comment"># packages 目录</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- compiler              <span class="token comment"># compiler 子包</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- reactivity            <span class="token comment"># reactivity 子包</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- shared                <span class="token comment"># shared 子包</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>随后，在根目录以及每一个子包目录下都执行一遍 npm init -y 命令，让其创建一个 package.json 文件到</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">|</span>-- monorepo-demo              
<span class="token operator">|</span>   <span class="token operator">|</span>-- packages                  <span class="token comment"># packages 目录</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- compiler              <span class="token comment"># compiler 子包</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- package.json      <span class="token comment"># compiler 子包特有的依赖</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- reactivity            <span class="token comment"># reactivity 子包</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- package.json      <span class="token comment"># reactivity 子包特有的依赖</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- shared                <span class="token comment"># shared 子包</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- package.json      <span class="token comment"># shared 子包特有的依赖</span>
<span class="token operator">|</span>   <span class="token operator">|</span>-- package.json              <span class="token comment"># 所有子包都公共的依赖</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着，修改根目录下的 package.json 文件：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;MyVue&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 避免pnpm安装时重名</span>
  <span class="token property">&quot;private&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// 标记私有，防止意外发布</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入到每一个子包中，依次修改 package.json</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@MyVue/compiler&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 避免安装时跟@vue/* 重名</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@MyVue/compiler&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后回到根目录，创建pnpm-workspace.yaml文件，并撰写如下内容：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">packages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token string">&#39;packages/*&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>至此，Monorepo 项目结构已经初步搭建完毕，此时的目录结构如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">|</span>-- monorepo-demo              
<span class="token operator">|</span>   <span class="token operator">|</span>-- packages                  <span class="token comment"># packages目录</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- compiler              <span class="token comment"># compiler子包</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- package.json      <span class="token comment"># compiler子包特有的依赖</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- reactivity            <span class="token comment"># reactivity子包</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- package.json      <span class="token comment"># reactivity子包特有的依赖</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- shared                <span class="token comment"># shared子包</span>
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>-- package.json      <span class="token comment"># shared子包特有的依赖</span>
<span class="token operator">|</span>   <span class="token operator">|</span>-- package.json              <span class="token comment"># 所有子包都公共的依赖</span>
<span class="token operator">|</span>   <span class="token operator">|</span>-- pnpm-workspace.yaml       <span class="token comment"># pnpm配置文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>依赖分为两部分，第一部分是公共依赖，第二部分是特有依赖</p><p>公共依赖是所有子包都使用的包，在根目录安装即可</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">install</span> eslint typescript <span class="token parameter variable">-w</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>特有依赖是子包只有自身依赖的包：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">install</span> lodash <span class="token parameter variable">-r</span> <span class="token parameter variable">--filter</span> @MyVue/shared
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p><code>-r</code>表示在 workspace 区执行命令，<code>--filter</code> 表示在在哪个包下执行</p></div><p>Monorepo 相比 Multirepo 就像把鸡蛋都装到一个篮子里</p>`,27);function i(r,u){return e(),p("div",null,[o,s(" more "),c,s(" more "),l])}const k=a(t,[["render",i],["__file","frontend.html.vue"]]);export{k as default};
