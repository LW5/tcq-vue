import Vue from 'vue'
import Vuex from 'vuex'

import service from "./components/service/store.js"

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    service
  }
})
