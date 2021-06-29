import Vue from 'vue'
import Vuex from 'vuex'

import { auth } from "./auth.module";
import { cv } from "./cv.module";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    cv
  }
})
