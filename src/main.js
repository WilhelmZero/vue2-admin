import Vue from 'vue';
import { Button, Row } from 'element-ui';
import App from './App.vue';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'

Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
