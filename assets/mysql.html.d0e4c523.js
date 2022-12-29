import{ac as i,A as d,B as r,H as e,ad as t,z as s,M as a,ae as o,O as u}from"./framework.a879f165.js";const k={},v=s("div",{class:"custom-container info"},[s("p",{class:"custom-container-title"},"前置知识"),s("ul",null,[s("li",null,"SQL")])],-1),m=s("h2",{id:"安装和启动",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#安装和启动","aria-hidden":"true"},"#"),a(" 安装和启动")],-1),b=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"apt"),a(),s("span",{class:"token function"},"install"),a(` mysql-server
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),h=s("p",null,[a("通过"),s("code",null,"apt"),a("安装的"),s("code",null,"mysql"),a("是默认开启服务以及开机启动的，并且服务名叫"),s("code",null,"mysql"),a("，而不是"),s("code",null,"mysqld")],-1),y=o(`<h2 id="修改-root-密码" tabindex="-1"><a class="header-anchor" href="#修改-root-密码" aria-hidden="true">#</a> 修改 root 密码</h2><ol><li>进入数据库</li><li><code>ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED WITH mysql_native_password BY &#39;新密码&#39;;</code></li><li><code>FLUSH PRIVILEGES;</code>刷新权限</li></ol><h2 id="允许远程设备登录" tabindex="-1"><a class="header-anchor" href="#允许远程设备登录" aria-hidden="true">#</a> 允许远程设备登录</h2><p>如果要远程登录就必须创建一个允许远程访问的账户，为什么有两个<code>root</code>账户？这是因为其中的一个<code>root</code>账户的<code>host</code>为<code>localhost</code>，只允许从本地登录，而增加一个<code>%</code>表示可以从任意计算机上登录</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">user</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;%&#39;</span> identified <span class="token keyword">by</span> <span class="token string">&#39;账户密码&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> <span class="token keyword">ALL</span> <span class="token keyword">PRIVILEGES</span> <span class="token keyword">ON</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">TO</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;%&#39;</span> <span class="token keyword">WITH</span> <span class="token keyword">GRANT</span> <span class="token keyword">OPTION</span><span class="token punctuation">;</span>
FLUSH <span class="token keyword">PRIVILEGES</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以下面命令通过查看一下用户情况：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> use mysql
mysql<span class="token operator">&gt;</span> <span class="token keyword">select</span> host,user,authentication_string from user<span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> <span class="token keyword">select</span> host,user,authentication_string from user<span class="token punctuation">;</span>
+-----------+------------------+------------------------------------------------------------------------+
<span class="token operator">|</span> <span class="token function">host</span>      <span class="token operator">|</span> user             <span class="token operator">|</span> authentication_string                                                  <span class="token operator">|</span>
+-----------+------------------+------------------------------------------------------------------------+
<span class="token operator">|</span> %         <span class="token operator">|</span> root             <span class="token operator">|</span> <span class="token variable">$A</span><span class="token variable">$005</span><span class="token variable">$m</span><span class="token punctuation">]</span>QeCR<span class="token punctuation">{</span>dSh<span class="token operator">|</span>AZelCiG5j0JCQRPLB8kEnL/L3c8XbgfCUqOzrwvUnXT6ZWdw8 <span class="token operator">|</span>
<span class="token operator">|</span> localhost <span class="token operator">|</span> debian-sys-maint <span class="token operator">|</span> <span class="token variable">$A</span><span class="token variable">$005</span><span class="token variable">$9A</span>:JcO~LH<span class="token punctuation">{</span> <span class="token number">0</span>j<span class="token punctuation">{</span>oq.wFLCUBRmM9FUuOzSmqQHa1Pqw0JGw9l7HzqpaBNo3 <span class="token operator">|</span>
<span class="token operator">|</span> localhost <span class="token operator">|</span> mysql.infoschema <span class="token operator">|</span> <span class="token variable">$A</span><span class="token variable">$005</span><span class="token variable">$THISISACOMBINATIONOFINVALIDSALTANDPASSWORDTHATMUSTNEVERBRBEUSED</span> <span class="token operator">|</span>
<span class="token operator">|</span> localhost <span class="token operator">|</span> mysql.session    <span class="token operator">|</span> <span class="token variable">$A</span><span class="token variable">$005</span><span class="token variable">$THISISACOMBINATIONOFINVALIDSALTANDPASSWORDTHATMUSTNEVERBRBEUSED</span> <span class="token operator">|</span>
<span class="token operator">|</span> localhost <span class="token operator">|</span> mysql.sys        <span class="token operator">|</span> <span class="token variable">$A</span><span class="token variable">$005</span><span class="token variable">$THISISACOMBINATIONOFINVALIDSALTANDPASSWORDTHATMUSTNEVERBRBEUSED</span> <span class="token operator">|</span>
<span class="token operator">|</span> localhost <span class="token operator">|</span> root             <span class="token operator">|</span> *1501FA4196482BD9AD6ACD6CC58E5C070C4D1DD5                              <span class="token operator">|</span>
+-----------+------------------+------------------------------------------------------------------------+
<span class="token number">6</span> rows <span class="token keyword">in</span> <span class="token builtin class-name">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般情况下，MySQL 的配置文件是禁止了远程登录，所以需要去修改一下配置文件，编辑<code>sudo /etc/mysql/mysql.conf.d/mysqld.cnf</code>文件，将<code>bind-address = 127.0.0.1</code>使用<code>#</code>注释掉，然后<code>sudo service mysql restart</code>即可</p><h2 id="mariadb" tabindex="-1"><a class="header-anchor" href="#mariadb" aria-hidden="true">#</a> MariaDB</h2><p>MariaDB 是 MySQL 更好的替代者，是另一种 MySQL 实现，几乎和 MySQL 一样</p>`,10),g=s("ol",null,[s("li",null,[s("code",null,"pacman -S mariadb")]),s("li",null,[s("code",null,"mariadb-install-db --user=mysql --basedir=/usr --datadir=/var/lib/mysql")]),s("li",null,[s("code",null,"systemctl enable mariadb.service")]),s("li",null,[s("code",null,"systemctl start mariadb.service")])],-1),q=o(`<p>不需要密码，直接<code>mariadb -u root -p</code>登录</p><p>更改 root 密码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED BY <span class="token string">&#39;新密码&#39;</span><span class="token punctuation">;</span>
flush privileges<span class="token punctuation">;</span>
<span class="token builtin class-name">exit</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>允许远程登录步骤同 MySQL 一样</p><h2 id="存储引擎" tabindex="-1"><a class="header-anchor" href="#存储引擎" aria-hidden="true">#</a> 存储引擎</h2><table><thead><tr><th>引擎</th><th>特点</th></tr></thead><tbody><tr><td>MyISAM（5.5.5之前默认的引擎）</td><td>插入数据快，空间利用率高，功能少，不支持事务</td></tr><tr><td>InnoDB（5.5.5之后默认的引擎）</td><td>支持事务，外键，崩溃修复和并发控制</td></tr><tr><td>Memory</td><td>数据都在内存中，速度快，安全性差</td></tr><tr><td>Archive</td><td>数据压缩，空间利用率高，插入数据快，不支持索引，查询性能差</td></tr></tbody></table><h2 id="创建第一个数据库" tabindex="-1"><a class="header-anchor" href="#创建第一个数据库" aria-hidden="true">#</a> 创建第一个数据库</h2><p>当进入数据库系统后，就可以使用 SQL 语句来操作数据库了</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> db_test<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果没有例外，MySQL 会将<code>db_test</code>列出到数据库列表中，可以使用<code>show databases;</code>列出当前系统中所有的数据库，不要奇怪为什么还有除<code>db_test</code>以外的数据库，这些都是自带的，只需要关心自己创建的<code>db_test</code>就好</p><p>其实这个数据库是有问题的，因为它没有指定编码，可能会影响到后续的使用，为了指定编码，就应该先删除掉，然后再重新创建，结合<code>CHARACTER SET</code>语句重新创建一个指定编码的数据库</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">DATABASE</span> db_test<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> db_test <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来的操作就是如何选择一个数据库使用，进行后续的操作，使用<code>use</code>语句，它将进入到指定的数据库中，然后就可以进行表相关的操作</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">use</span> db_test<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><p>字段类型对于数据库优化特别重要</p><ul><li>double - 浮点型，如<code>double(5, 2)</code>表示最多5位，其中必须有两位小数</li><li>char - 定长字符串（空间固定），空的地方使用空格填充</li><li>varchar - 可变字符串</li><li>text - 长文本字符串</li><li>blob - 二进制</li><li>date - 日期</li><li>time - 时间</li><li>datetime - 日期时间</li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><p>在 MySQL 中，字符和日期都需要用单引号表示</p></div><h2 id="表的操作" tabindex="-1"><a class="header-anchor" href="#表的操作" aria-hidden="true">#</a> 表的操作</h2><p>在使用<code>use</code>选择了一个数据库后，就可以在这个数据库下创建一个表了，我们创建一个<code>t_student</code>表</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> t_student<span class="token punctuation">(</span> 
  id <span class="token keyword">INT</span><span class="token punctuation">,</span> 
  name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
  birthdate <span class="token keyword">DATE</span><span class="token punctuation">,</span> 
  gender <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
  class_id <span class="token keyword">INT</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不使用<code>use</code>指定数据库，也可以通过<code>database.table</code>这种语法来操作一个表，这对于忘记指定使用的数据库非常有用，它可以在任何需要引用表的地方使用</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> db_test<span class="token punctuation">.</span>t_student<span class="token punctuation">(</span> 
  id <span class="token keyword">INT</span><span class="token punctuation">,</span> 
  name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
  birthdate <span class="token keyword">DATE</span><span class="token punctuation">,</span> 
  gender <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
  class_id <span class="token keyword">INT</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>表中的每一个字段都要用<code>,</code>分隔，且每个字段必须指定一个数据类型，显然这张表做得很好，看起来没什么问题，但实际上这张表非常不完整，因为它缺少约束，非常不利于规范化，首先再次移除掉这张表，使用<code>drop</code></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> s_student<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后重新设计一下表，最好有主键，以及其他的相关约束</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> db_test<span class="token punctuation">.</span>t_student <span class="token punctuation">(</span>
  id <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
  name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  birthdate <span class="token keyword">date</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  gender <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  class_id <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字段约束" tabindex="-1"><a class="header-anchor" href="#字段约束" aria-hidden="true">#</a> 字段约束</h2><ul><li>主键约束：<code>PRIMARY KEY</code></li><li>外键约束：<code>FOREIGN KEY</code></li><li>非空约束：<code>NOT NULL</code>，数据不能为空</li><li>唯一约束：<code>UNIQUE</code>，数据不能重复</li><li>默认值：<code>DEFAULT</code>，指定默认数据</li><li>自动增长：<code>AUTO_INCREMENT</code>，只能用于主键</li><li>注释：<code>COMMENT</code></li><li>插入时间戳：</li><li>更新时间戳：</li></ul><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><p>MySQL 有一些内置函数共给使用</p><ul><li><code>count()</code> - 求次数</li><li><code>min()</code> - 求最小值</li><li><code>max()</code> - 求最大值</li><li><code>sum()</code> - 求和</li><li><code>sqrt()</code> - 求平方根</li><li><code>rand()</code> - 生成随机数</li><li><code>concat()</code> - 拼接字符串</li></ul><p>自定义函数</p><h2 id="关系模型" tabindex="-1"><a class="header-anchor" href="#关系模型" aria-hidden="true">#</a> 关系模型</h2><ul><li>主键</li><li>外键</li><li>索引</li></ul><h2 id="事务" tabindex="-1"><a class="header-anchor" href="#事务" aria-hidden="true">#</a> 事务</h2><h2 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h2><p>索引是数据库中对某一列或多个列的值进行预排序的数据结构。索引好比一本书的目录，能够快速定位到一些特定的值，从而加快数据查询的效率，如果不使用所有，就必须从最开始的地方进行扫描，直到把所有的数据扫描完，才能找到想要的数据</p><p>但是索引不是万能的，有时候反而会让效率变低，索引的价值就是在海量的数据中找到想要的数据，如果数据量较少，那么是否使用索引反而对结果的影响不大</p><p>索引有很多种类，从功能上来说，主要有 4 种：</p><ul><li>普通索引</li><li>唯一索引</li><li>主键索引</li><li>全文索引</li></ul><p>普通索引是基础的索引，没有任何约束，主要⽤于提⾼查询效率。唯⼀索引就是在普通索引的基础上增加了数据唯⼀性的约束，在⼀张数据表⾥可以有多个唯⼀索引。主键索引在唯⼀索引的基础上增加了不为空的约束，也就是NOT NULL+UNIQUE，⼀张表⾥最多只有⼀个主键索引。全⽂索引⽤的不多，MySQL ⾃带的全⽂索引只⽀持英⽂。通常可以采⽤专⻔的全⽂搜索引擎，⽐如 ES(ElasticSearch) 和 Solr</p><p>从物理存储上来分，有 2 种：</p><ul><li>聚集索引</li><li>非聚集索引</li></ul><p>聚集索引可以按照主键来排序存储数据，这样在查找⾏的时候⾮常有效。举个例⼦，如果是⼀本汉语字典，我们想要查找“数”这个字，直接在书中找汉语拼⾳的位置即可，也就是拼⾳“shu”。这样找到了索引的位置，在它后⾯就是我们想要找的数据⾏</p><p>在数据库系统会有单独的存储空间存放⾮聚集索引，这些索引项是按照顺序存储的，但索引项指向的内容是随机存储的。也就是说系统会进⾏两次查找，第⼀次先找到索引，第⼆次找到索引对应的位置取出数据⾏。⾮聚集索引不会把索引指向的内容像聚集索引⼀样直接放到索引的后⾯，⽽是维护单独的索引表（只维护索引，不维护索引指向的数据），为数据检索提供⽅便。我们还以汉语字典为例，如果想要查找“数”字，那么按照部⾸查找的⽅式，先找到“数”字的偏旁部⾸，然后这个⽬录会告诉我们“数”字存放到第多少⻚，再去指定的⻚码找这个字</p><h3 id="创建索引" tabindex="-1"><a class="header-anchor" href="#创建索引" aria-hidden="true">#</a> 创建索引</h3><p>创建普通索引：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">index</span> key_name <span class="token keyword">on</span> table_name<span class="token punctuation">(</span><span class="token keyword">column</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建唯一索引：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">unique</span> <span class="token keyword">index</span> key_name <span class="token keyword">on</span> table_name<span class="token punctuation">(</span><span class="token keyword">column</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建全文索引：</p><h3 id="删除索引" tabindex="-1"><a class="header-anchor" href="#删除索引" aria-hidden="true">#</a> 删除索引</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> key_name <span class="token keyword">ON</span> table_name<span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看索引" tabindex="-1"><a class="header-anchor" href="#查看索引" aria-hidden="true">#</a> 查看索引</h3><p>该语句会显示表中所有的索引</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">show</span> <span class="token keyword">index</span> <span class="token keyword">from</span> table_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这是查询后的一些参数：</p><table><thead><tr><th>参数</th><th>解释</th></tr></thead><tbody><tr><td>Table</td><td>表示创建索引的数据表名，这里是 tb_stu_info2 数据表</td></tr><tr><td>Non_unique</td><td>表示该索引是否是唯一索引。若不是唯一索引，则该列的值为 1；若是唯一索引，则该列的值为 0</td></tr><tr><td>Key_name</td><td>表示索引的名称</td></tr><tr><td>Seq_in_index</td><td>表示该列在索引中的位置，如果索引是单列的，则该列的值为 1；如果索引是组合索引，则该列的值为每列在索引定义中的顺序</td></tr><tr><td>Column_name</td><td>表示定义索引的列字段</td></tr><tr><td>Collation</td><td>表示列以何种顺序存储在索引中。在 MySQL 中，升序显示值“A”（升序），若显示为 NULL，则表示无分类</td></tr><tr><td>Cardinality</td><td>索引中唯一值数目的估计值。基数根据被存储为整数的统计数据计数，所以即使对于小型表，该值也没有必要是精确的。基数越大，当进行联合时，MySQL 使用该索引的机会就越大</td></tr><tr><td>Sub_part</td><td>表示列中被编入索引的字符的数量。若列只是部分被编入索引，则该列的值为被编入索引的字符的数目；若整列被编入索引，则该列的值为 NULL</td></tr><tr><td>Packed</td><td>指示关键字如何被压缩。若没有被压缩，值为 NULL</td></tr><tr><td>Null</td><td>用于显示索引列中是否包含 NULL。若列含有 NULL，该列的值为 YES。若没有，则该列的值为 NO</td></tr><tr><td>Index_type</td><td>显示索引使用的类型和方法（BTREE、FULLTEXT、HASH、RTREE）</td></tr><tr><td>Comment</td><td>显示评注</td></tr></tbody></table><h2 id="修改数据库密码" tabindex="-1"><a class="header-anchor" href="#修改数据库密码" aria-hidden="true">#</a> 修改数据库密码</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">use</span> mysql<span class="token punctuation">;</span>
<span class="token keyword">update</span> <span class="token keyword">user</span> <span class="token keyword">set</span> password<span class="token operator">=</span>password<span class="token punctuation">(</span><span class="token string">&#39;buxinga12345&#39;</span><span class="token punctuation">)</span> <span class="token keyword">where</span>  <span class="token keyword">user</span><span class="token operator">=</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">update</span> mysql<span class="token punctuation">.</span><span class="token keyword">user</span> <span class="token keyword">set</span> authentication_String<span class="token operator">=</span>password<span class="token punctuation">(</span><span class="token string">&#39;buxinga12345&#39;</span><span class="token punctuation">)</span> <span class="token keyword">where</span> <span class="token keyword">user</span><span class="token operator">=</span><span class="token string">&#39;root&#39;</span> <span class="token operator">and</span> host <span class="token operator">=</span><span class="token string">&#39;localhost&#39;</span><span class="token punctuation">;</span>
flush <span class="token keyword">privileges</span><span class="token punctuation">;</span>
mysqladmin <span class="token operator">-</span>u root <span class="token operator">-</span>p password buxinga12345<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="备份和还原" tabindex="-1"><a class="header-anchor" href="#备份和还原" aria-hidden="true">#</a> 备份和还原</h2><p>MySQL 本身提供了命令用于数据库的备份和还原</p><p><code>mysqldump</code>备份所有的数据和结构<code>-A</code>参数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysqldump <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span> <span class="token parameter variable">-A</span> <span class="token operator">&gt;</span> /data/mysqlDump/mydb.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>备份多个数据库的数据和结构</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysqldump <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span> <span class="token parameter variable">--databases</span> 数据库1 数据库2 <span class="token operator">&gt;</span> xxx.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>仅备份结构<code>-d</code>参数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysqldump <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span> mydb <span class="token parameter variable">-d</span> <span class="token operator">&gt;</span> /data/mysqlDump/mydb.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>仅备份数据<code>-t</code>参数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysqldump <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span> mydb <span class="token parameter variable">-t</span> <span class="token operator">&gt;</span> /data/mysqlDump/mydb.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>还原有两种方式，一种是通过 SHELL：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span> <span class="token operator">&lt;</span> mydb.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一种是进入 MySQL 命令行通过<code>source</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> <span class="token builtin class-name">source</span> mydb.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="在各种语言平台上使用" tabindex="-1"><a class="header-anchor" href="#在各种语言平台上使用" aria-hidden="true">#</a> 在各种语言平台上使用</h2><ul><li>Java</li><li>Node.js</li><li>Python</li></ul><p>在 Node.js 中使用需要先安装 MySQL 模块</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> mysql <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mysql&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 数据库配置</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span> 
  <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">database</span><span class="token operator">:</span> <span class="token string">&#39;mydb&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建连接对象</span>
<span class="token keyword">const</span> connection <span class="token operator">=</span> mysql<span class="token punctuation">.</span><span class="token function">createConnection</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 发送 SQL 语句并在回调中处理结果</span>
connection<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">insert into foo (name) value (&#39;zs&#39;)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Java 平台中，首先要导入一个驱动包，然后使用以下代码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Class<span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.mysql.jdbc.Driver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Connection connection <span class="token operator">=</span> DriverManager<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:mysql://localhost:3306/database_name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
Statement st <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
int row <span class="token operator">=</span> st<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token string">&quot;insert into foo (name) value (&#39;zs&#39;)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,82);function w(A,E){const n=u("Tabs");return d(),r("div",null,[v,m,e(n,{id:"12",data:[{title:"Ubuntu"}],active:0},{tab0:t(({title:p,value:l,isActive:c})=>[b,h]),_:1}),y,e(n,{id:"60",data:[{title:"Arch"}]},{tab0:t(({title:p,value:l,isActive:c})=>[g]),_:1}),q])}const _=i(k,[["render",w],["__file","mysql.html.vue"]]);export{_ as default};
