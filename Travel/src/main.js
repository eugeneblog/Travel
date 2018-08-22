// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
/*
  fastClick:用于解决移动端click事件相应300ms的问题，因为移动端需要检查有没有双击，在webapp上我们不需要双击事件
  reset.css:用于一些标签的初始化
  border.css:用于解决px像素在移动端肉眼显示不一样的问题,需要适配成类似于pt的绝对单位
 */

Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
