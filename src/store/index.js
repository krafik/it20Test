import Vue from 'vue'
import Vuex from 'vuex'
// import axios  from 'axios';
import quest from './modules/quest'
Vue.use(Vuex)

export default new Vuex.Store({
 
  modules: {
    quest
  }
})
