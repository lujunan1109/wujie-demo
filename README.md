<!--
 * @Description: monorepo依赖架构搭建【高内聚，低耦合】
 * @Author: lujunan
 * @Date: 2024-01-09 19:14:00
 * @LastEditors: lujunan
 * @LastEditTime: 2024-01-09 21:34:38
-->
### monorepo
1. 这种架构会把公共的依赖放在main的node_modules
2. 对于common里面封装的公共的库和方法可以在其他模块进行，并且可以实时生效

### wujie
#### 文档：https://wujie-micro.github.io/doc/
1. 接入使用简单
2. 主应用和子应用需要部署在相同服务内，端口不一样既可，nginx代理完事
2. 子应用的vite.config需要配置base:./[相对路径，部署在那个项目就再哪里访问而不是绝对路径:/都在主应用拿资源] 
2. 主应用出现卡顿问题，查看是不是资源与预执行的时候阻塞主应用的渲染线程，主应用setupApp和preloadApp url传''
2. 处理公用登录的问题【https://rapidsu.cn/articles/4766】
3. 后续需要考察通信，请求，部署，静态资源访问，子应用为较复杂应用会带来哪些问题


#### 原理
 webcomponent 容器
利用shadowdom隔离css
js利用空的iframe隔离
通信用proxy实现[evntbus]

### 介绍
- https://zhuanlan.zhihu.com/p/551206945?utm_id=0

#### wujie优势[TX]
- 对比其他方案，比如乾坤来说对于项目入侵成本更低，功能也基本可以覆盖使用场景
- 对于vite支持度相对其他方案更优
- wujie有预加载策略，利于加载三维业务场景
- 文档清晰容易阅读，社区也一直在维护

### test
- 静态资源，图片
- 通信，props,window[同源],bus

