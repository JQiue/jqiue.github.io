import{ac as e,A as d,B as c,ae as o}from"./framework.a879f165.js";const a={},r=o('<p>只需要继承<code>Thread</code>，重写<code>run</code>方法，把新线程要做的事写在<code>run</code>方法中,创建线程对象，开启新线程, 内部会自动执行<code>run</code>方法</p><p>或者定义类实现<code>Runnable</code>接口，创建自定义的<code>Runnable</code>的子类对象，创建<code>Thread</code>对象, 传入<code>Runnable</code>，调用<code>start()</code>开启新线程, 内部会自动调用<code>Runnable</code>的<code>run()</code>方法</p><p><code>Thread</code>代码简单，但如果已经有了父类，就不能用这种方法</p><p><code>Runnable</code>代码复杂，即使自己定义的线程类有了父类也没关系，因为有了父类也可以实现接口，而且接口是可以多实现的。坏处是不能直接使用<code>Thread</code>中的方法需要先获取到线程对象后,才能得到<code>Thread</code>的方法,代码复杂</p><h2 id="同步" tabindex="-1"><a class="header-anchor" href="#同步" aria-hidden="true">#</a> 同步</h2><h2 id="安全" tabindex="-1"><a class="header-anchor" href="#安全" aria-hidden="true">#</a> 安全</h2><p>多线程并发操作同一数据时, 就有可能出现线程安全问题，使用同步技术可以解决这种问题, 把操作数据的代码进行同步, 不要多个线程一起操作</p><p>Vector 是线程安全的,ArrayList是线程不安全的，StringBuffer是线程安全的,StringBuilder是线程不安全的，Hashtable是线程安全的,HashMap是线程不安全的</p>',8),n=[r];function t(h,i){return d(),c("div",null,n)}const l=e(a,[["render",t],["__file","multithreading.html.vue"]]);export{l as default};
