import{ac as n,A as s,B as a,ae as t}from"./framework.a879f165.js";const p={},e=t(`<div class="custom-container tip"><p class="custom-container-title">前置知识</p><ul><li>HTML，CSS，JavaScript</li><li>Node.js</li></ul></div><p>Electron 是一个使用 JavaScript、HTML 和 CSS 构建桌面应用程序的框架，基于Chromium 和 Node.js 实现的，这就使得前端程序员可以使用 JavaScript、HTML 和 CSS 轻松构建跨平台的桌面应用。为了弥补 Node.js 和前端技术访问系统 API 方面的不足，Electron 对系统 API 做了封装，比如系统对话框、系统托盘、系统菜单、剪切板等。开发者基于 Electron 开发应用时，可以直接使用 JavaScript 访问这些 API</p><h2 id="hello-world" tabindex="-1"><a class="header-anchor" href="#hello-world" aria-hidden="true">#</a> Hello, World</h2><p><code>yarn init</code>初始化项目，pacakge.json 配置如下</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-app&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;main.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;JQiue&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;MIT&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;electron .&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装 Electron 依赖</p><div class="custom-container danger"><p class="custom-container-title">警告</p><p>一定要先给<code>.npmrc</code>添加<code>electron_mirror=&quot;https://npm.taobao.org/mirrors/electron/&quot;</code></p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">--dev</span> electron
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建<code>main.js</code>主进程文件，内容如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> app<span class="token punctuation">,</span> BrowserWindow <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;electron&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">createWindow</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> win <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BrowserWindow</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>
    <span class="token literal-property property">webPreferences</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">preload</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;preload.js&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  win<span class="token punctuation">.</span><span class="token function">loadFile</span><span class="token punctuation">(</span><span class="token string">&#39;index.html&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

app<span class="token punctuation">.</span><span class="token function">whenReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">createWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;window-all-closed&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>platform <span class="token operator">!==</span> <span class="token string">&#39;darwin&#39;</span><span class="token punctuation">)</span> app<span class="token punctuation">.</span><span class="token function">quit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建<code>index.html</code></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Content-Security-Policy<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>default-src &#39;self&#39;; script-src &#39;self&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Hello World!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Hello World!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    We are using Node.js <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>node-version<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>,
    Chromium <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chrome-version<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>,
    and Electron <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>electron-version<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建预加载文件<code>preload.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;DOMContentLoaded&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">replaceText</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">selector<span class="token punctuation">,</span> text</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">)</span> element<span class="token punctuation">.</span>innerText <span class="token operator">=</span> text
  <span class="token punctuation">}</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> dependency <span class="token keyword">of</span> <span class="token punctuation">[</span><span class="token string">&#39;chrome&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;node&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;electron&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">replaceText</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>dependency<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-version</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> process<span class="token punctuation">.</span>versions<span class="token punctuation">[</span>dependency<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后运行<code>yarn run start</code>即可运行</p><h2 id="主进程和渲染进程" tabindex="-1"><a class="header-anchor" href="#主进程和渲染进程" aria-hidden="true">#</a> 主进程和渲染进程</h2><p>主进程负责完成监听应用程序的生命周期事件、启动第一个窗口、加载index.html页面、应用程序关闭后回收资源、退出程序等工作。渲染进程负责完成渲染界面、接收用户输入、响应用户的交互等工作</p><p>一个Electron应用只有一个主进程，但可以有多个渲染进程。一个BrowserWindow实例就代表着一个渲染进程。当BrowserWindow实例被销毁后，渲染进程也跟着终结</p><p>主进程负责管理所有的窗口及其对应的渲染进程。每个渲染进程都是独立的，它只关心所运行的Web页面。在开启nodeIntegration配置后，渲染进程也有能力访问Node.js的API</p><p>在Electron中，GUI相关的模块仅在主进程中可用。如果想在渲染进程中完成创建窗口、创建菜单等操作，可以让渲染进程给主进程发送消息，主进程接到消息后再完成相应的操作；也可以通过渲染进程的remote模块来完成相应操作。这两种方法背后的实现机制是一样的</p><p>主进程和渲染进程之间的通信通常使用<code>ipcRender</code>和<code>ipcMain</code></p><h2 id="结合-vue" tabindex="-1"><a class="header-anchor" href="#结合-vue" aria-hidden="true">#</a> 结合 Vue</h2><p>先安装 Vue 脚手架</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i @vue/cli <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建项目：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>vue create electron-vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进入项目中，添加插件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>vue <span class="token function">add</span> electron-builder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="发布" tabindex="-1"><a class="header-anchor" href="#发布" aria-hidden="true">#</a> 发布</h2><p>安装 Electron Forge</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">--dev</span> @electron-forge/cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>并执行<code>npx electron-forge import</code></p><p>然后使用<code>make</code>命令发布程序</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2><ul><li>Electron 实战</li></ul>`,35),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","electron.html.vue"]]);export{r as default};
