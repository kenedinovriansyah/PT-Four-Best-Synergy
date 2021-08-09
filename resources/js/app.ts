import Vue from 'vue';
import Basecomponent from './components/base.component.vue';
import router from './routes';
import store from './store';
import './static/kenedi.min.scss';
import InlineSvg from 'vue-inline-svg';

Vue.component('icons', InlineSvg);

const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(Basecomponent),
});
