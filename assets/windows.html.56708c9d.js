import{ac as a,A as o,B as s,z as e,M as n,H as i,ae as t,O as d}from"./framework.a879f165.js";const c={},r=t(`<h2 id="cmd-和-powershell" tabindex="-1"><a class="header-anchor" href="#cmd-和-powershell" aria-hidden="true">#</a> CMD 和 PowerShell</h2><p>shell 是运行在终端上的文本互动程序，对于 Windows 来说，它有<code>cmd</code>和<code>powershell</code>两种终端程序</p><ul><li><code>tasklist</code>：显示所有进程</li><li><code>tasklist | findstr &quot;StudentMain&quot;</code>：在所有进程中查询包含<code>StudentMain</code>的进程</li><li><code>taskkill /im StudentMain.exe /f</code>：杀掉<code>StudentMain.exe</code>进程</li><li><code>tasklist /pid 1488</code>：杀掉 PID 为<code>1488</code>的进程</li><li><code>tree /f</code>：树形输出文件</li></ul><h2 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h2><p>环境变量是操作系统的概念，用具解决编程中的硬编码情况，一般通过界面的方式来设置环境变量，但可以通过命令维护一套属于自己的环境变量配置</p><p>在 CMD 中使用<code>set</code>命令会显示所有的环境变量，如果要修改环境变量，<code>set [variable]=[value]</code>则是基本的操作，但是这种做法会将原有的值覆盖掉，可以通过<code>%variable%new_Value</code>的方式来实现追加，这种设置方式是临时的，在本次对话结束后就会消失，也不会共享给其他对话</p><p><code>setx</code> 是一个永久性的环境变量设置工具</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>setx <span class="token environment constant">PATH</span> <span class="token string">&quot;%PATH%;[new_path;]&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这是使用 PowerShell 的例子</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Environment<span class="token punctuation">]</span>::SetEnvironmentVariable<span class="token punctuation">(</span><span class="token string">&quot;Path&quot;</span>, <span class="token string">&quot;<span class="token variable">$env</span>:Path;C:\\Python27\\;C:\\Python27\\Scripts<span class="token entity" title="\\&quot;">\\&quot;</span>, &quot;</span>User&quot;<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="封装系统" tabindex="-1"><a class="header-anchor" href="#封装系统" aria-hidden="true">#</a> 封装系统</h2><p>准备工作：</p><ul><li>虚拟机</li><li>系统镜像</li><li>常用软件</li></ul><p>创建虚拟机步骤：</p><ol><li>创建新的虚拟机</li><li>稍后安装操作系统</li><li>选择客户机操作系统版本</li><li>酌情分配虚拟机配置</li><li>不使用网络连接</li><li>创建磁盘容量为 40GB，存储为单个文件</li><li>移除声卡，虚拟机硬件</li><li>设置虚拟机的 CD/DVD 来源为系统镜像</li></ol><p>安装系统：</p><ol><li>选择进入固件方式启动虚拟机</li><li>将 BOOT 启动项设置为 CD-ROM，F10 保存并重启</li><li>开始进入系统的安装</li></ol><p>启动系统：</p>`,18),p=e("code",null,"CTRL+SHIFT+F3",-1),u={href:"https://docs.microsoft.com/zh-cn/windows-hardware/manufacture/desktop/boot-windows-to-audit-mode-or-oobe?view=windows-10",target:"_blank",rel:"noopener noreferrer"},h=e("li",null,"启用超级管理员模式",-1),m=e("p",null,"封装系统：",-1),_=e("ol",null,[e("li",null,"使用封装系统工具对系统进行封装"),e("li",null,"使用微 PE 生成可启动的 ISO，进入 PE"),e("li",null,"使用 Dism ++ 进行系统备份，一定要勾选可启动，并且不要存在系统所在的分区")],-1);function v(k,b){const l=d("ExternalLinkIcon");return o(),s("div",null,[r,e("ol",null,[e("li",null,[n("在 OOBE 界面中按下"),p,n("进入部署模式，详见"),e("a",u,[n("微软文档"),i(l)])]),h]),m,_])}const f=a(c,[["render",v],["__file","windows.html.vue"]]);export{f as default};