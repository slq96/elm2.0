import Vue from 'vue'
//导入vuex模块
import Vuex from 'vuex'
//导入状态state.js模块
import state from './state' 
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
 })

  //导出存储对象store，给main.js使用
  export default store;