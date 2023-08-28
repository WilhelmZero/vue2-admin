import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'

Vue.use(ElementUI);
// Vue.component(Button.name, Button);
// Vue.component(Row.name, Row);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
});
