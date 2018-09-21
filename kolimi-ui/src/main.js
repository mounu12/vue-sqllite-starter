import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(BootstrapVue);
Vue.use(VueRouter)

const router=new VueRouter({
  routes:Routes,
  mode:'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
