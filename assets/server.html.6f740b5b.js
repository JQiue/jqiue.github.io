import{ac as i,A as l,B as c,z as a,M as n,H as t,E as p,ae as s,O as d}from"./framework.a879f165.js";const o="/assets/tomcat-1.252ff6f7.jpeg",r={},u=s('<h2 id="tomcat" tabindex="-1"><a class="header-anchor" href="#tomcat" aria-hidden="true">#</a> Tomcat</h2><div class="custom-container info"><p class="custom-container-title">前置知识</p><ul><li>HTML</li><li>CSS</li><li>JavaScript</li><li>Java</li><li>HTTP</li></ul></div><p>Tomcat 是 Apache 公司开发的一款免费的 Web 应用服务器，虽然它为 HTML 页面提供服务，但实际上运行的是 JSP 和 Servlet。因为处理静态 HTML 的能力不如其他服务器，所以它只能算是一个运行 JSP 和 Servlet 的容器，能够单独处理 HTML 页面</p>',3),v={href:"https://tomcat.apache.org/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://tomcat.apache.org/whichversion.html",target:"_blank",rel:"noopener noreferrer"},b=a("code",null,"JAVA_HOME",-1),k=s('<p>在<code>bin</code>目录下，找到<code>startup.bat</code>（如果是 Windows）双击它，会弹出一个终端窗口启动 Tomcat（如果没有问题）。这时不要关闭它，打开浏览器输入<code>localhost:8080</code>访问，出现下图就代表 Tomcat 以及相关配置没有问题</p><p><img src="'+o+`" alt="tomcat-1"></p><p>不要直接关闭打开中的终端来停止 Tomcat，应该双击<code>bin</code>目录下的<code>shutdown.bat</code>来处理</p><p>掌握 Tomcat 的一些目录是非常有必要的</p><ul><li>bin：存放一些可执行命令，比如启动服务器和关闭服务器</li><li>conf：存放服务器启动时相关的配置，核心配置文件<code>server.xml</code></li><li>lib：运行时依赖的库</li><li>logs：存放执行日志信息的目录</li><li>temps：临时文件夹目录</li><li>webapps：发布应用的目录</li><li>work：处理 JSP 的工作目录</li></ul><p>最重要的是<code>webapps</code>，通过网址访问的路径都是这个目录下的应用，如果打开这个目录，会发现 Tomcat 自带几个 Web 应用，通过<code>localhost:8080</code>会默认指向<code>ROOT</code>目录中的应用</p><p>一个 Web 应用的目录结构是这样的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>WebName
│  index.jsp
│  ...
└─WEB-INF
    │  web.xml # 当前整个 Web 应用的核心配置文件
    │
    ├─classes # 编译后的 java 字节码文件
    └─lib # jar 包
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">警告</p><p><code>host-manager</code>、<code>manager</code>、<code>ROOT</code>这三个项目最好不要删，其它的都可以删掉以增加启动速度</p></div><h3 id="核心配置" tabindex="-1"><a class="header-anchor" href="#核心配置" aria-hidden="true">#</a> 核心配置</h3><p><code>server.xml</code>是 Tomcat 的核心配置文件</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Server</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Service</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>catalina<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Connector</span> <span class="token attr-name">connectionTimeout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20000<span class="token punctuation">&quot;</span></span> <span class="token attr-name">port</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8080<span class="token punctuation">&quot;</span></span> <span class="token attr-name">protocol</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>HTTP/1.1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">redirectPort</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8443<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Connector</span> <span class="token attr-name">port</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8009<span class="token punctuation">&quot;</span></span> <span class="token attr-name">protocol</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>AJP/1.3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">redirectPort</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8443<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Engine</span> <span class="token attr-name">defaultHost</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Localhost<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>catalina<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Host</span> <span class="token attr-name">appBase</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>webapps<span class="token punctuation">&quot;</span></span> <span class="token attr-name">autoDeploy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>LocaLhost<span class="token punctuation">&quot;</span></span> <span class="token attr-name">unpackwARs</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Context</span> <span class="token attr-name">docBase</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>project1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span> /project1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">reloadable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Context</span> <span class="token attr-name">docBase</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>project2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/project2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">reloadable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Host</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Host</span> <span class="token attr-name">appBase</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>webapps<span class="token punctuation">&quot;</span></span> <span class="token attr-name">autoDeploy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>m. myxq.com<span class="token punctuation">&quot;</span></span> <span class="token attr-name">unpackWARs</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Context</span> <span class="token attr-name">docBase</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>project1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/project1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">reloadable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Context</span> <span class="token attr-name">docBase</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>project2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/project2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">reloadable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Host</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Engine</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Service</span><span class="token punctuation">&gt;</span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Server</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Server - 整个Server容器组合，可以包含一个或者多个 Service</li><li>Service - 由一个或者多个 Connector 组成，以及一个 Engine，负责处理所有的 Connector 所获得的客户请求</li><li>Connector - 客户端与程序交互组件，负责接受请求以及向客户端返回响应</li><li>Engine - 处理连接器接受到请求</li><li>Host - 虚拟主机</li><li>Context - 一个 Context 对应一个 Web Application</li></ul><h4 id="虚拟目录" tabindex="-1"><a class="header-anchor" href="#虚拟目录" aria-hidden="true">#</a> 虚拟目录</h4><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Context</span> <span class="token attr-name">docBase</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">reloadable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">source</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>docBase：Web 应用的文件目录</li><li>path：URL 入口</li><li>reloadable：字节码改变时是否重新加载</li></ul><h3 id="servlet" tabindex="-1"><a class="header-anchor" href="#servlet" aria-hidden="true">#</a> Servlet</h3><p>Servlet 提供处理处理请求和响应的 API，由<code>servlet-api.jar</code>提供对应的接口，每一个实现该接口的 Java 类都是一个 Servlet 处理程序。在运行对应的 Servlet 时，不需要<code>main</code>方法，会被编译成字节码文件放入<code>WEB-INF -&gt; classes</code>目录下根据请求去执行对应的 Servlet 程序</p><p>Tomcat 启动时会将网页中的 URL 映射成 webapps 中的应用目录，一个 URL 对应一个 Servlet，当请求这个 URL 时，会执行<code>&lt;servlet&gt;</code>标签中对应的 java 程序，这个程序是编译过的字节码文件，存放在<code>classes</code>目录，但是无法访问 WEB-INF 目录下的文件</p><p>如果想要将 URL 映射成对应的 Servlet 程序，则应该在<code>web.xml</code>中进行配置，比如：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>web-app</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">&gt;</span></span>hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-class</span><span class="token punctuation">&gt;</span></span>HelloServlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-class</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-mapping</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">&gt;</span></span>hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url-pattern</span><span class="token punctuation">&gt;</span></span>/hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url-pattern</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-mapping</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>web-app</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此一个标准的目录是这样的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├── src（java 源码）
├── WEB-INF（提供 Tomcat 执行的信息）
│   ├── classes（编译后的字节码文件）
├── ├── lib（依赖的库）
├── ├── web.xml（应用配置项）
├── index.jsp（页面）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>工作的流程：</p><ol><li>编写 Servlet 程序</li><li>编译成字节码放入 classes</li><li>导入依赖库</li><li>配置 web.xml 中的映射关系</li><li>发布到 webapps 目录下</li><li>启动 Tomcat</li><li>访问对应 Web 应用</li></ol><h3 id="部署方式" tabindex="-1"><a class="header-anchor" href="#部署方式" aria-hidden="true">#</a> 部署方式</h3><ul><li>直接将 war 放入<code>webapps</code>文件夹中</li><li>指定虚拟目录</li></ul><p>使用<code>jar -cvf &lt;outnname.war&gt; [file1, file2, ...]</code>命令，比如<code>jar -cvf test.war *</code>会将当前目录所有的文件打包成<code>test.war</code>文件，丢到<code>webapps</code>启动时，会在当前目录下解压出来部署</p>`,28),g=s(`<h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h2><p>是一款开源免费，高性能的 Web 服务器，一般用于静态服务和负载均衡以及反向代理，可作为：</p><ul><li>作为 Web 服务器：相比 Apache，Nginx 占用更少的资源，支持更多的并发连接，体现更高的效率，这点使 Nginx 尤其受到虚拟主机提供商的欢迎。能够支持高达 50,000 个并发连接数的响应</li><li>作为负载均衡服务器：Nginx 既可以在内部直接支持 Rails 和 PHP，也可以支持作为 HTTP代理服务器 对外进行服务。Nginx 用 C 编写, 不论是系统资源开销还是 CPU 使用效率都比 Perl 要好的多</li><li>作为邮件代理服务器: Nginx 同时也是一个非常优秀的邮件代理服务器（最早开发这个产品的目的之一也是作为邮件代理服务器），Last.fm 描述了成功并且美妙的使用经验</li></ul><p>在 Linux 中安装：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 Ubuntu 中安装后的目录结构大致如下：</p><ul><li>程序执行在<code>/usr/sbin/nginx</code></li><li>所有的配置文件在<code>/etc/nginx</code></li><li>日志文件在<code>/var/log/nginx</code></li><li>默认的虚拟主机目录在<code>/var/www</code>或<code>/var/www/html</code></li></ul><p>在 Windows 中目录结构大致如下：</p><ul><li>程序文件在安装的根目录</li><li>配置文件在<code>conf</code></li><li>日志文件在<code>logs</code></li><li>默认的虚拟主机目录在<code>html</code></li></ul><p>这是一些常用到的命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token comment"># 启动</span>
nginx <span class="token parameter variable">-v</span> <span class="token comment"># 查看版本号</span>
nginx <span class="token parameter variable">-t</span> <span class="token comment"># 检查配置文件语法错误</span>
nginx <span class="token parameter variable">-s</span> reload <span class="token comment"># 重新应用配置文件</span>
nginx <span class="token parameter variable">-s</span> stop <span class="token comment"># 快速关闭</span>
nginx <span class="token parameter variable">-s</span> quit <span class="token comment"># 等待工作进程处理完成后关闭</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Nginx 采用的是简单文件格式的配置文件，下面是指令的一些特性</p><ul><li>注释 - 以<code>#</code>开头</li><li>简单指令 - 以分号结尾</li><li>块指令 - 以<code>{}</code>包围</li><li>包含指令 - <code>include</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>events 
{
  # ... 
}
http  
{
  server
  { 
    location path
    {
      # ...
    }
    location path
    {
     # ...
    }
  }
  server
  {
    # ...
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="虚拟主机" tabindex="-1"><a class="header-anchor" href="#虚拟主机" aria-hidden="true">#</a> 虚拟主机</h3><p>虚拟主机是一种特殊的软硬件技术，它可以将网络上的每一台计算机分成多个虚拟主机，每个虚拟主机可以独立对外提供 Web 服务，这样就可以实现一台主机对外提供多个 Web 服务，每个虚拟主机之间是独立的，互不影响</p><p>nginx 支持 3 种类型的虚拟主机配置</p><ol><li>基于域名的虚拟主机，server_name 来区分虚拟主机——应用：web 网站</li><li>基于ip的虚拟主机，一个主机绑定多个 ip 地址</li><li>基于端口的虚拟主机，端口来区分虚拟主机——应用：公司内部网站，外部网站的管理后台</li></ol><h3 id="托管静态资源" tabindex="-1"><a class="header-anchor" href="#托管静态资源" aria-hidden="true">#</a> 托管静态资源</h3><p>很简单，这是是一个基于域名的虚拟主机</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server
{ 
  listen 80;
  server_name one.com;
  location / {
    root /dist;
    index index.html, index.htm
  }
}
server
{ 
  listen 80;
  server_name two.com;
  location / {
    root /dist;
    index index.html, index.htm
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基于 IP 的主机</p><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>server
{ 
  listen 80;
  server_name 192.168.2.0;
  location / {
    root /dist;
    index index.html, index.htm
  }
}
server
{ 
  listen 80;
  server_name 192.168.2.1;
  location / {
    root /dist;
    index index.html, index.htm
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基于端口的主机：</p><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>server
{ 
  listen 80;
  server_name one.com;
  location / {
    root /dist;
    index index.html, index.htm
  }
}
server
{ 
  listen 8000;
  server_name one.com;
  location / {
    root /dist;
    index index.html, index.htm
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内置变量" tabindex="-1"><a class="header-anchor" href="#内置变量" aria-hidden="true">#</a> 内置变量</h3><table><thead><tr><th>变量名</th><th>功能</th></tr></thead><tbody><tr><td><code>$host</code></td><td>请求信息中的 Host，如果请求中没有 Host 行，则等于设置的服务器名</td></tr><tr><td><code>$request_method</code></td><td>客户端请求类型，如 GET、POST</td></tr><tr><td><code>$remote_addr</code></td><td>客户端的 IP 地址</td></tr><tr><td><code>$args</code></td><td>请求中的参数</td></tr><tr><td><code>$content_length</code></td><td>请求头中的 Content-length 字段</td></tr><tr><td><code>$http_user_agent</code></td><td>客户端 agent 信息</td></tr><tr><td><code>$http_cookie</code></td><td>客户端 cookie 信息</td></tr><tr><td><code>$remote_addr</code></td><td>客户端的 IP 地址</td></tr><tr><td><code>$remote_port</code></td><td>客户端的端口</td></tr><tr><td><code>$server_protocol</code></td><td>请求使用的协议，如 HTTP/1.0、HTTP/1.1</td></tr><tr><td><code>$server_addr</code></td><td>服务器地址</td></tr><tr><td><code>$server_name</code></td><td>服务器名称</td></tr><tr><td><code>$server_port</code></td><td>服务器的端口号</td></tr></tbody></table><h3 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理" aria-hidden="true">#</a> 反向代理</h3><p>正向代理是为客户端服务的，客户端可以通过正向代理访问它本身无法访问到的服务器。对于服务端来说，服务端无法区分是否来自代理访问还是真实客户端访问</p><p>反向代理是为服务端服务的，反向代理可以帮助服务端接受请求，进行请求转发，负载均衡等。反向代理隐藏了真实的服务端，这对于客户端来说是没有感知的，就像拨打<code>10086</code>一样，每次接电话的客服并不是同一个人，而是由<code>10086</code>分配一个客服，<code>10086</code>就承担着反向代理的角色</p><p>nginx 反向代理靠<code>proxy_pass</code>项来完成，比如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
  listen 80;
  server_name jinqiu.wang;
  location / {
    proxy_pass http://127.0.0.1:8888;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个配置就是说，将来自<code>jinqiu.wang:80</code>端口的请求，代理到<code>http://127.0.0.1:8888</code>上面，由<code>http://127.0.0.1:8888</code>处理真正的请求</p><p>在使用反向代理的时候，每次请求的 IP 都是本地 IP，这是因为 Nginx 所在的运行环境所致，导致处理方永远获得的都是 Nginx 的地址，如果有获取用户 IP 的需求，可以增加配置项</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
  listen 80;
  server_name jinqiu.wang;
  location / {
    proxy_pass http://127.0.0.1:8888;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>意思是说，Nginx 将请求方的地址添加到请求头中，因此真正处理请求的机器，可以通过这个请求头来获取请求方的真实 IP</p><div class="custom-container danger"><p class="custom-container-title">警告</p><p>Nginx 无法分辨请求方的 IP 是否真实，也可能是伪造的</p></div><h3 id="设置响应头" tabindex="-1"><a class="header-anchor" href="#设置响应头" aria-hidden="true">#</a> 设置响应头</h3><p>比如跨域请求可使用<code>add_header</code>进行添加跨域头来允许</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
  listen 80;
  server_name httptest.jinqiu.wang;
  location / {
    proxy_pass http://127.0.0.1:8888;
    add_header Access-Control-Allow-Origin *;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求体大小" tabindex="-1"><a class="header-anchor" href="#请求体大小" aria-hidden="true">#</a> 请求体大小</h3><p>如果上传的文件过大，会返回 413 错误，Nginx 默认是 1m 大小的限制，但是可以添加<code>client_max_body_size</code>进行修改</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
  listen 80;
  server_name space.jinqiu.wang;
  location / {
    client_max_body_size 50m;
    proxy_pass http://127.0.0.1:8889;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="带宽速率限制" tabindex="-1"><a class="header-anchor" href="#带宽速率限制" aria-hidden="true">#</a> 带宽速率限制</h3><p>默认情况下，有多少带宽，Nginx 就能消耗掉多少，Nginx 允许限制来自 HTTP 连接所使用的最大速率，比如使用<code>limit_rate</code>就可以限制下载速度：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
  listen 80;
  server_name space.jinqiu.wang;
  location / {
    limit_rate 100k;
    client_max_body_size 50m;
    proxy_pass http://127.0.0.1:8889;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>甚至可以优化一下，比如前 10m 不限速，超过后开始限速：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
  listen 80;
  server_name space.jinqiu.wang;
  location / {
    limit_rate_after 10m;
    limit_rate 100k;
    client_max_body_size 50m;
    proxy_pass http://127.0.0.1:8889;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置-gzip-压缩传输" tabindex="-1"><a class="header-anchor" href="#配置-gzip-压缩传输" aria-hidden="true">#</a> 配置 gzip 压缩传输</h3><p>gzip 压缩能够提高网站速度节约网站流量，开启 gzip 之后的网站加载速度几乎是未开启的两倍，所以非常推荐开启，将下面的内容添加到配置文件，重启 nginx</p><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>gzip on;
gzip_disable &quot;msie6&quot;;
gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_buffers 16 8k;
gzip_http_version 1.1;
gzip_min_length 256;
gzip_types application/atom+xml application/geo+json application/javascript application/x-javascript application/json application/ld+json application/manifest+json application/rdf+xml application/rss+xml application/xhtml+xml application/xml font/eot font/otf font/ttf image/svg+xml text/css text/javascript text/plain text/xml;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>gzip_comp_level</code>表示压缩等级，越小压缩比越低，取值为<code>0-9</code>，一般取<code>6</code></p><p>只需要检查响应头是否包含<code>content-encoding: gzip</code>即可</p><h3 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡" aria-hidden="true">#</a> 负载均衡</h3><p>负载均衡是为了解决某一个服务挂掉不能访问，而影响用户的体验，一般来说 nginx 的配置会将请求分发到同一个服务，如果挂掉了话仍然会分发给这个服务，这时候就需要负载均衡</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream youngfitapp { 
  server 192.168.1.0:8080;
  server 192.168.1.1:8080;
}
server {
  listen 80;
  server_name localhost;
  location / {         
    proxy_pass  http://youngfitapp;
    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>upstream</code>有四种负载均衡调度算法：</p><ol><li>轮询 - 每个请求按时间顺序逐一分配到不同的后端服务器，这是默认的</li><li>ip_hash - 每个请求按访问 IP 的 hash 结果分配，同一个 IP 客户端固定访问一个后端服务器。可以保证来自同一 IP 的请求被打到固定的机器上，可以解决 session 问题</li><li>url_hash - 按访问 url 的 hash 结果来分配请求，使每个 url 定向到同一个后端服务器</li><li>fair - 依据页面大小和加载时间长短智能地进行负载均衡，也就是根据后端服务器的响应时间来分配请求，响应时间短的优先分配</li></ol><p>默认情况下就是轮询，此时权重都为 1，分发顺序为：ABABABABAB...</p><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>upstream youngfitapp { 
  server 192.168.1.0:8080;
  server 192.168.1.1:8080;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以更改权重，比如下面的顺序为：ABBABBABBABB...</p><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>upstream youngfitapp { 
  server 192.168.1.0:8080 weight=1;
  server 192.168.1.1:8080 weight=2;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ip_hash</p><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>upstream youngfitapp {
  ip_hash;
  server 192.168.62.157:8080; 
  server 192.168.62.158:8080;   
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>url_hash</p><p>upstream youngfitapp { url_hash; server 192.168.62.157:8080; server 192.168.62.158:8080; }</p><p>可以为指定的服务器设置状态：</p><ul><li>down - 暂时不参与负载均衡</li><li>backup - 预留的备份机器，只有当所有的非 backup 挂掉或者忙的时候，才会请求</li></ul><p>可以指定某个服务器为热备，当其他服务器挂掉时才使用该服务器提供服务</p><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>upstream youngfitapp { 
  server 192.168.1.0:8080;
  server 192.168.1.1:8080;
  server 192.168.1.2:8080 down;
  server 192.168.1.3:8080 backup;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="location" tabindex="-1"><a class="header-anchor" href="#location" aria-hidden="true">#</a> location</h3><table><thead><tr><th>修饰符</th><th>含义</th></tr></thead><tbody><tr><td>=</td><td>表示精确匹配，优先级也是最高的</td></tr><tr><td>^~</td><td>表示 url 以某个常规字符串开头,理解为匹配 url 路径即可</td></tr><tr><td>~</td><td>表示区分大小写的正则匹配</td></tr><tr><td>~*</td><td>表示不区分大小写的正则匹配</td></tr><tr><td>!~</td><td>表示区分大小写不匹配的正则</td></tr><tr><td>!~*</td><td>表示不区分大小写不匹配的正则</td></tr><tr><td>/</td><td>通用匹配，任何请求都会匹配到</td></tr></tbody></table><p>示例</p><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>location / {
　　# 匹配任何以 / 开始的查询，但是正则表达式与一些较长的字符串将被首先匹配
}
location = / {
　　# 只匹配 / 的查询
}
location ^~ /images/ {
　　# 匹配任何以 /images/ 开始的查询并且停止搜索，不检查正则表达式
}
location ~* \\.(gif|jpg|jpeg)$ {
　　# 匹配任何以 gif, jpg, or jpeg 结尾的文件
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置-https" tabindex="-1"><a class="header-anchor" href="#配置-https" aria-hidden="true">#</a> 配置 HTTPS</h3><p>必须先有 SSL 证书，通常在第三方申请，下载私钥和证书在 nginx 中配置</p><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>server {
  listen 443 ssl;
  server_name jinqiu.wang;

  # ssl on;
  ssl_certificate   jinqiu.wang.pem;
  ssl_certificate_key  jinqiu.wang.key;
  ssl_session_timeout 5m;
  ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
  ssl_ciphers  ALL:!ADH:!EXPORT56:RC4+RSA:+HIGH:+MEDIUM:+LOW:+SSLv2:+EXP;
  ssl_prefer_server_ciphers on;

  location / {
    root  /dist;
    index index.html index.htm;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="地址重写" tabindex="-1"><a class="header-anchor" href="#地址重写" aria-hidden="true">#</a> 地址重写</h3><h3 id="动静分离" tabindex="-1"><a class="header-anchor" href="#动静分离" aria-hidden="true">#</a> 动静分离</h3>`,79);function h(x,_){const e=d("ExternalLinkIcon");return l(),c("div",null,[u,a("p",null,[n("从"),a("a",v,[n("官网"),t(e)]),n("下载它，Tomcat 依赖于 Java 运行，在"),a("a",m,[n("这里"),t(e)]),n("查看匹配当前 Java 版本的 Tomcat。如果没有配置"),b,n("系统环境变量，一定要配置，它为 Tomcat 指明 Java 所在的目录，否则启动时只能看到一闪而过的窗口")]),k,p(" more "),g])}const f=i(r,[["render",h],["__file","server.html.vue"]]);export{f as default};
