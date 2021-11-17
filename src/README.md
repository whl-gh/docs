---
home: true
heroImage: /images/logo.svg
heroText: WHL Blog
tagline: 春有百花秋有叶，夏有凉风冬有雪
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: 半轮沧海上，一苇大江东
---

<template>
<div class="container">
  <h1>Hello Home Index</h1>  
</div>
</template>

<style lang="scss" scoped>
.container {
  font-size: 14px;
  color: red;
  h1 {
    font-size: 12px;
  }
}
</style>

<script>
export default{
  //...do something
  created () {
    console.log('hello world.')
  }
}
</script>

# Hello