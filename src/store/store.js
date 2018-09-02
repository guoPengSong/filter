import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    showMask: false,
  },
  mutations: {
    setShowMask(state,val){
      state.showMask=val;
    }
  }
});
export default store;
