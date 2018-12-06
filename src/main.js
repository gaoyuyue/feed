// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VModal from 'vue-js-modal';
import 'normalize.css';
import 'bootswatch/dist/cosmo/bootstrap.min.css';
import App from './App';
import router from './router';
import store from './store';

Vue.use(VModal, { dynamic: true, injectModalsContainer: true });

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
