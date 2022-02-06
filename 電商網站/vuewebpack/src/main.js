// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay';
    
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap'
import { ValidationObserver, ValidationProvider, extend, localize, configure } from 'vee-validate';
import TW from 'vee-validate/dist/locale/zh_TW.json'
import * as rules from 'vee-validate/dist/rules';
import App from './App'
import router from './router'
import './bus'
import currencyFilter from './filters/currency'


Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(Vuex);
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

localize('zh_TW', TW);

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
});

Vue.component('Loading',Loading);
Vue.filter('currency',currencyFilter);
axios.default.withCredentials = true;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.APIPATH}/api/user/check`;
    
    axios.post(api).then((response) => {
      if (response.data.success) {
          next();
          
      }else{
        next({
          path:'/layout/login',
        });
      }
    });
  }else{
    next();
  }
})


