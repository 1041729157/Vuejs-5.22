// 引入 vue.js 的默认值
import Vue from 'vue'
// 引入 App.vue 的默认值
import App from './App'

// 设置 false 以阻止 Vue 在启动时生成生产提示
Vue.config.productionTip = false

// 创建一个新的Vue实例
new Vue({
  // render函数用于描述DOM，h是createElement的简写，h => h(App)应该是固定写法（箭头函数）。
  // createElement()接收三个参数，第一个参数必填，其他可选。返回的东西由传入的对象决定，我也不懂，看文档。
  render: h => h(App),
  // $mount()手动挂载。这里是将上面的方法挂载到id=app的dom元素上
}).$mount('#app')