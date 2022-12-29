import{ac as o,A as r,B as i,z as e,M as n,H as s,ae as t,O as c}from"./framework.a879f165.js";const l={},d=t(`<h2 id="推荐全局安装的包" tabindex="-1"><a class="header-anchor" href="#推荐全局安装的包" aria-hidden="true">#</a> 推荐全局安装的包</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i npm-check-updates nrm rimraf nodemon <span class="token function">pnpm</span> pm2 <span class="token function">yarn</span> <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),p={id:"npm-check-updates",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#npm-check-updates","aria-hidden":"true"},"#",-1),m={href:"https://github.com/raineorshine/npm-check-updates",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,[n("检查 package.json 依赖项升级最新版本，只是修改 package.json 文件，需要执行"),e("code",null,"npm install"),n("更新已安装的包")],-1),u={id:"nrm",tabindex:"-1"},b=e("a",{class:"header-anchor",href:"#nrm","aria-hidden":"true"},"#",-1),v={href:"https://github.com/Pana/nrm",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,"是一个注册表管理器，用于快速切换下载源",-1),k={id:"nodemon",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#nodemon","aria-hidden":"true"},"#",-1),x={href:"https://github.com/remy/nodemon",target:"_blank",rel:"noopener noreferrer"},N=e("p",null,"监听 Node.js 应用程序的更改，并自动重启服务器",-1),j={id:"concurrently",tabindex:"-1"},y=e("a",{class:"header-anchor",href:"#concurrently","aria-hidden":"true"},"#",-1),A={href:"https://github.com/open-cli-tools/concurrently",target:"_blank",rel:"noopener noreferrer"},w=e("p",null,"同时执行多个 NPM 命令",-1),E={id:"live-server",tabindex:"-1"},G=e("a",{class:"header-anchor",href:"#live-server","aria-hidden":"true"},"#",-1),P={href:"https://github.com/tapio/live-server",target:"_blank",rel:"noopener noreferrer"},L=e("p",null,"是一个具有实时重新加载功能的小型开发服务器",-1),M={id:"rimraf",tabindex:"-1"},B=e("a",{class:"header-anchor",href:"#rimraf","aria-hidden":"true"},"#",-1),C={href:"https://github.com/isaacs/rimraf",target:"_blank",rel:"noopener noreferrer"},H=e("p",null,[n("是一个类似于 UNIX command"),e("code",null,"rm rf"),n("命令的包，能大大加快移除文件的速度，可以快速的移除"),e("code",null,"node_modules"),n("了")],-1),O={id:"anywhere",tabindex:"-1"},S=e("a",{class:"header-anchor",href:"#anywhere","aria-hidden":"true"},"#",-1),V={href:"https://github.com/JacksonTian/anywhere",target:"_blank",rel:"noopener noreferrer"},I=e("p",null,"快速启动一个静态的文件服务器",-1),T={id:"lodash",tabindex:"-1"},J=e("a",{class:"header-anchor",href:"#lodash","aria-hidden":"true"},"#",-1),U={href:"https://github.com/lodash/lodash",target:"_blank",rel:"noopener noreferrer"},z=e("p",null,"现代 JavaScript 实用工具库",-1),R={id:"progress",tabindex:"-1"},X=e("a",{class:"header-anchor",href:"#progress","aria-hidden":"true"},"#",-1),q={href:"https://github.com/visionmedia/node-progress",target:"_blank",rel:"noopener noreferrer"},D=e("p",null,"终端进度条",-1),F={id:"chalk",tabindex:"-1"},K=e("a",{class:"header-anchor",href:"#chalk","aria-hidden":"true"},"#",-1),Q={href:"https://github.com/chalk/chalk",target:"_blank",rel:"noopener noreferrer"},W=e("p",null,"为终端进行着色",-1),Y={id:"nodemailer",tabindex:"-1"},Z=e("a",{class:"header-anchor",href:"#nodemailer","aria-hidden":"true"},"#",-1),$={href:"https://github.com/nodemailer/nodemailer",target:"_blank",rel:"noopener noreferrer"},ee=e("p",null,"发送邮件",-1),ne={id:"glob",tabindex:"-1"},ae=e("a",{class:"header-anchor",href:"#glob","aria-hidden":"true"},"#",-1),se={href:"https://github.com/isaacs/node-glob",target:"_blank",rel:"noopener noreferrer"},te=e("p",null,"模式匹配目录文件",-1),oe={id:"commitlint",tabindex:"-1"},re=e("a",{class:"header-anchor",href:"#commitlint","aria-hidden":"true"},"#",-1),ie={href:"https://github.com/conventional-changelog/commitlint",target:"_blank",rel:"noopener noreferrer"},ce=e("p",null,"规范 Git 提交信息",-1),le={id:"json-server",tabindex:"-1"},de=e("a",{class:"header-anchor",href:"#json-server","aria-hidden":"true"},"#",-1),pe={href:"https://github.com/typicode/json-server",target:"_blank",rel:"noopener noreferrer"},he=e("p",null,"快速启动一个 REST APi Server",-1),me={id:"pm2",tabindex:"-1"},_e=e("a",{class:"header-anchor",href:"#pm2","aria-hidden":"true"},"#",-1),ue={href:"https://github.com/Unitech/pm2",target:"_blank",rel:"noopener noreferrer"},be=t(`<p>Node.js 进程管理</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pm2 start app.js <span class="token parameter variable">--watch</span> <span class="token comment"># 以实时监控 app.js 启动，文件发生改动后会自动 reload</span>
pm2 start <span class="token parameter variable">--name</span> <span class="token operator">&lt;</span>AppName<span class="token operator">&gt;</span> app.js  <span class="token comment">#  app.js 启动，以 AppName 命名该进程</span>
pm2 start <span class="token parameter variable">--name</span> <span class="token operator">&lt;</span>AppName<span class="token operator">&gt;</span> <span class="token function">npm</span> -- start  <span class="token comment"># 启动 npm start 项目</span>
pm2 start <span class="token parameter variable">--name</span> <span class="token operator">&lt;</span>AppName<span class="token operator">&gt;</span>  <span class="token function">npm</span> -- run <span class="token operator">&lt;</span>scripts<span class="token operator">&gt;</span> <span class="token parameter variable">-n</span>  <span class="token comment"># 启动 npm run 项目</span>
pm2 start pm2confg.json <span class="token comment"># 以配置文件形式启动</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>pm2 状态</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pm2 list                <span class="token comment"># 显示所有应用状态</span>
PM2 show <span class="token operator">&lt;</span>id<span class="token operator">|</span>appname<span class="token operator">&gt;</span>   <span class="token comment"># 显示某个应用的详细信息</span>
pm2 monit               <span class="token comment"># 监视所有应用</span>
pm2 log                 <span class="token comment"># 显示所有进程日志</span>
pm2 log <span class="token operator">&lt;</span>id<span class="token operator">|</span>appname<span class="token operator">&gt;</span>    <span class="token comment"># 显示某个进程日志</span>
pm2 stop <span class="token operator">&lt;</span>id<span class="token operator">|</span>appname<span class="token operator">&gt;</span>   <span class="token comment"># 停止某个应用</span>
pm2 stop all            <span class="token comment"># 停止所有应用</span>
pm2 restart all         <span class="token comment"># 重启所有应用</span>
pm2 stop <span class="token operator">&lt;</span>id<span class="token operator">|</span>appname<span class="token operator">&gt;</span>   <span class="token comment"># 重启某个应用</span>
pm2 stop all            <span class="token comment"># 停止所有应用</span>
PM2 delete all          <span class="token comment"># 杀死并删除所有应用</span>
PM2 delete <span class="token operator">&lt;</span>id<span class="token operator">|</span>appname<span class="token operator">&gt;</span> <span class="token comment"># 杀死并删除某个应用</span>
pm2 startup             <span class="token comment"># 设置开机自启动</span>
pm2 unstartup           <span class="token comment"># 禁用开机自启动</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),ve={id:"conventional-changelog",tabindex:"-1"},ge=e("a",{class:"header-anchor",href:"#conventional-changelog","aria-hidden":"true"},"#",-1),ke={href:"https://github.com/conventional-changelog/conventional-changelog",target:"_blank",rel:"noopener noreferrer"},fe=t(`<p>根据 commit 自动生成 CHANGELOG.md</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>conventional-changelog <span class="token parameter variable">-p</span> angular <span class="token parameter variable">-i</span> CHANGELOG.md <span class="token parameter variable">-s</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),xe={id:"standard-version",tabindex:"-1"},Ne=e("a",{class:"header-anchor",href:"#standard-version","aria-hidden":"true"},"#",-1),je={href:"https://github.com/conventional-changelog/standard-version",target:"_blank",rel:"noopener noreferrer"},ye=e("p",null,"发布版本控制，standard-version 会做以下事情：",-1),Ae=e("ol",null,[e("li",null,"创建一个新的 commit，并更新 CHANGELOG.md"),e("li",null,"根据 pacakge.json 创建一个新的 tag")],-1);function we(Ee,Ge){const a=c("ExternalLinkIcon");return r(),i("div",null,[d,e("h2",p,[h,n(),e("a",m,[n("npm-check-updates"),s(a)])]),_,e("h2",u,[b,n(),e("a",v,[n("nrm"),s(a)])]),g,e("h2",k,[f,n(),e("a",x,[n("nodemon"),s(a)])]),N,e("h2",j,[y,n(),e("a",A,[n("concurrently"),s(a)])]),w,e("h2",E,[G,n(),e("a",P,[n("live-server"),s(a)])]),L,e("h2",M,[B,n(),e("a",C,[n("rimraf"),s(a)])]),H,e("h2",O,[S,n(),e("a",V,[n("anywhere"),s(a)])]),I,e("h2",T,[J,n(),e("a",U,[n("lodash"),s(a)])]),z,e("h2",R,[X,n(),e("a",q,[n("Progress"),s(a)])]),D,e("h2",F,[K,n(),e("a",Q,[n("chalk"),s(a)])]),W,e("h2",Y,[Z,n(),e("a",$,[n("nodemailer"),s(a)])]),ee,e("h2",ne,[ae,n(),e("a",se,[n("glob"),s(a)])]),te,e("h2",oe,[re,n(),e("a",ie,[n("commitlint"),s(a)])]),ce,e("h2",le,[de,n(),e("a",pe,[n("json-server"),s(a)])]),he,e("h2",me,[_e,n(),e("a",ue,[n("pm2"),s(a)])]),be,e("h2",ve,[ge,n(),e("a",ke,[n("conventional-changelog"),s(a)])]),fe,e("h2",xe,[Ne,n(),e("a",je,[n("standard-version"),s(a)])]),ye,Ae])}const Le=o(l,[["render",we],["__file","awesome-npm.html.vue"]]);export{Le as default};