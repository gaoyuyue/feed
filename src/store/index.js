import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import actions from './actions';
import mutations from './mutations';

import home from './modules/home';

Vue.use(Vuex);

const defaultState = {
  userInfo: JSON.parse(
    window.sessionStorage.getItem('userInfo'),
  ),
};

export default new Vuex.Store({
  state: defaultState,
  getters,
  actions,
  mutations,
  modules: {
    home,
  },
});
