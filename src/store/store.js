import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    showMask: false,
      showMessage: false
  },
  mutations: {
    setShowMask(state,val){
      state.showMask=val;
    },
      setShowMessage(state,val){
        state.showMessage=val;
      }
  }
});
export default store;
