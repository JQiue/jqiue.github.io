import{ac as i,A as e,B as a,ae as d}from"./framework.a879f165.js";const r={},n=d(`<p>Android 官方编程语言是 Java 和 Kotlin</p><h2 id="应用特色" tabindex="-1"><a class="header-anchor" href="#应用特色" aria-hidden="true">#</a> 应用特色</h2><ul><li>四大组件</li><li>系统控件</li><li>SQLite</li><li>多媒体</li></ul><p>Android系统四大组件分别是Activity、Service、BroadcastReceiver和 ContentProvider。其中Activity是所有Android应用程序的门面，凡是在应用中你看得到 的东西，都是放在Activity中的。而Service就比较低调了，你无法看到它，但它会在后台 默默地运行，即使用户退出了应用，Service仍然是可以继续运行的。 BroadcastReceiver允许你的应用接收来自各处的广播消息，比如电话、短信等，当然， 你的应用也可以向外发出广播消息。ContentProvider则为应用程序之间共享数据提供了 可能，比如你想要读取系统通讯录中的联系人，就需要通过ContentProvider来实现</p><p>Android系统还自带了这种轻量级、运算速度极快的嵌入式关系型数据库。它不仅支持标准 的SQL语法，还可以通过Android封装好的API进行操作，让存储和读取数据变得非常方 便。</p><p>Android系统还提供了丰富的多媒体服务，如音乐、视频、录音、拍照等，这一切你都可以 在程序中通过代码进行控制，让你的应用变得更加丰富多彩。</p><h2 id="配置环境" tabindex="-1"><a class="header-anchor" href="#配置环境" aria-hidden="true">#</a> 配置环境</h2><ul><li>JDK 或者 Kotlin</li><li>Android studio</li><li>SDK</li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><p>推荐使用 WIFI 在真机上调试，减少开发机的负担</p></div><h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h2><p>项目结构</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─.gradle                      Android Studio 自动生成的一些文件
├─.idea                        Android Studio 自动生成的一些文件
├─app                          项目中的代码
├─build                        编译时自动生成的文件
├─gradle                       包含了 gradle wrapper 的配置文件
├─build.gradle                 全局的 gradle 构建脚本
├─gradle.properties            是全局的 gradle 配置文件
├─gradlew                      命令行工具（Linux 和 Mac）
├─gradlew.bat                  命令行工具（Widnows）
├─local.properties             指定本机中的 Android SDK 路径
└─settings.gradle              指定项目中所有引入的模块
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>app 目录结构</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─build
├─libs                          第三方jar包
├─src
│   ├─androidTest               来编写Android Test测试用例
│   ├─main
│   │  ├─java                   所有Java代码
│   │  └─res                    静态资源
│   └─test                      编写Unit Test测试用例的
├─build.gradle                  这是app模块的gradle构建脚本
└─proguard-rules.pro            目代码的混淆规则
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建页面的步骤" tabindex="-1"><a class="header-anchor" href="#创建页面的步骤" aria-hidden="true">#</a> 创建页面的步骤</h2><ul><li>在 layout 目录下创建 XML 文件</li><li>创建与之对应的代码文件</li><li>在 AndroidManifest.xml 中注册配置</li></ul><h2 id="activity" tabindex="-1"><a class="header-anchor" href="#activity" aria-hidden="true">#</a> Activity</h2><h2 id="控件" tabindex="-1"><a class="header-anchor" href="#控件" aria-hidden="true">#</a> 控件</h2><h2 id="广播" tabindex="-1"><a class="header-anchor" href="#广播" aria-hidden="true">#</a> 广播</h2><p>为了便于进行系统级别的消息通知，Android 也引入了一套类似的广播消息机制</p><h2 id="持久化" tabindex="-1"><a class="header-anchor" href="#持久化" aria-hidden="true">#</a> 持久化</h2><ul><li>文件存储</li><li>SharedPreferences 存储</li><li>SQLite</li></ul><h2 id="跨应用共享数据" tabindex="-1"><a class="header-anchor" href="#跨应用共享数据" aria-hidden="true">#</a> 跨应用共享数据</h2><h2 id="多媒体" tabindex="-1"><a class="header-anchor" href="#多媒体" aria-hidden="true">#</a> 多媒体</h2><h2 id="网络请求" tabindex="-1"><a class="header-anchor" href="#网络请求" aria-hidden="true">#</a> 网络请求</h2>`,25),l=[n];function s(t,c){return e(),a("div",null,l)}const o=i(r,[["render",s],["__file","android.html.vue"]]);export{o as default};
