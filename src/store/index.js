import { createStore } from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const store = createStore({
  state() {
    return {
      theme: 'dark',
    };
  },
  getters,
  mutations,
  actions,
});

export default store;
