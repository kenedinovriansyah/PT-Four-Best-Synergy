import Vue from 'vue';
import Vuex from 'vuex';
import DefaultModules from './modules/default.module';

Vue.use(Vuex);

export default new Vuex.Store({ modules: { DefaultModules } });
