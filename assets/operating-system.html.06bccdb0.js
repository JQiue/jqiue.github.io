import{ac as e,A as i,B as a,ae as l}from"./framework.a879f165.js";const p={},r=l('<p>操作系统无疑是最为复杂的软件，对上为无数的用户和应用程序提供服务，从用户角度来看，操作系统是一个控制软件，用于管理和运行应用程序。对下操作系统是整个计算机硬件的资源分配器、管理外设、分配资源</p><p>现代计算机系统由一个或多个处理器、主存、磁盘、打印机、键盘、鼠标、显示器、网络接口以及各种其他输入/输出设备组成。一般而言，现代计算机系统是一个复杂的系统。如果每位应用程序员都不得不掌握系统所有的细节，那就不可能再编写代码了。而且，管理所有这些部件并加以优化使用，是一件挑战性极强的工作。所以计算机安装了一层软件，称为操作系统，它的任务是为用户程序提供一个更好、更简单、更清晰的计算机模型，并管理刚才提到的所有这些设备</p><p>操作系统的层次是在硬件之上、软件之下。虽然操作系统本身是一种软件，但是它为其他的软件提供服务支撑</p><p>Linux、Windows 的界面属于外壳（Shell），而不是内核（Kernel），对于操作系统更多的是站在内核的角度，内核底层更能看到操作系统里面的细节</p><p>Kernel - 操作系统内部组件：</p><ul><li>CPU 调度器</li><li>物理内存管理</li><li>虚拟内存管理</li><li>文件系统管理</li><li>中断处理与设备驱动</li><li>...</li></ul><p>Kernel 的特征：</p><ul><li>并发 - 计算机系统中同时存在多个运行的程序，需要 OS 管理和调度</li><li>共享 - “同时”访问、互斥共享</li><li>虚拟 - 利用多道程序设计技术，让每个用户都觉得一个计算机专门为它服务</li><li>异步 - 程序的执行不是一贯到底，而是走走停停，向前推进的速度不可预知，但只要运行环境相同，OS 需要保证程序运行的结果也要相同</li></ul><p>操作系统至今有三大家族：</p><ul><li>UNIX</li><li>Linux</li><li>Windows</li></ul><p>早期的计算机使用纸带传输程序和数据，操作系统只起到加载作用。随着 CPU 等硬件的发展，计算机的速度得到提升，性能未能得到充分利用。</p><p>随着内存越来越大，CPU 执行更多程序，为了更好的利用计算机资源，并且更好的和用户交互，出现了分时系统</p><p>随着网络的发展，出现了分布式系统</p><h2 id="进程" tabindex="-1"><a class="header-anchor" href="#进程" aria-hidden="true">#</a> 进程</h2><p>进程是操作系统中最核心的概念，进程是对正在运行程序的一个抽象。操作系统的其他所有内容都是围绕着进程的概念展开的</p><p>进程是非常抽象的概念，即使可以利用的 CPU 只有一个，但也支持（伪）并发操作能力，将一个单独的 CPU 变换为多个虚拟的 CPU</p><p>所有的现代计算机经常会在同一时间做许多件事，当启动系统时，会秘密启动许多进程，所以一个支持多进程的多道程序系统是非常有必要的</p><p>在任何多道程序设计系统中，CPU 由一个进程快速切换至另一个进程，使每个进程各运行几十或几百个毫秒。严格地说，在某一个瞬间，CPU 只能运行一个进程。但在 1 秒钟期间，它可能运行多个进程，这样就产生并行的错觉，伪并行就是这样的情况，以此来区分多处理系统（有两个或多个 CPU 共享一个物理内存）的真正并行。这种切换行为叫做上下文切换</p><p>在进程模型中，计算机上所有可运行的软件，通常也包括操作系统，被组织成若干顺序进程（sequential process），简称进程。一个进程就是一个正在执行程序的实例，包括程序计数器、寄存器和变量的当前值</p><p>从概念上说，每个进程拥有它自己的虚拟 CPU。当然，实际上真正的CPU在各进程之间来回切换，这种快速的切换称作多道程序设计</p><p>一个进程是某种类型的一个活动，它有程序、输入、输出以及状态。单个处理器可以被若干进程共享，它使用某种调度算法决定何时停止一个进程的工作，并转而为另一个进程提供服务</p><h2 id="线程" tabindex="-1"><a class="header-anchor" href="#线程" aria-hidden="true">#</a> 线程</h2><p>一个进程可以有多个线程的执行单元组成，每个线程运行在进程的上下文中，共享同样的数据，多线程相比多进程要更加的高效</p><h2 id="虚拟内存" tabindex="-1"><a class="header-anchor" href="#虚拟内存" aria-hidden="true">#</a> 虚拟内存</h2><p>虚拟内存是一个抽象的概念，它为每个进程提供了一个假象，也就是每个进程在独占的使用主存。每个进程看到的内存都是一致的，称之为虚拟地址空间</p><h2 id="文件" tabindex="-1"><a class="header-anchor" href="#文件" aria-hidden="true">#</a> 文件</h2><p>文件这个简单而精致的概念是非常强大的，因为它向应用程序提供了一个统一的视图，来看待系统中可能含有的所有的各式各样的 I/O 设备</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2><ul><li>现代操作系统（第3版）</li></ul>',29),n=[r];function h(t,d){return i(),a("div",null,n)}const c=e(p,[["render",h],["__file","operating-system.html.vue"]]);export{c as default};