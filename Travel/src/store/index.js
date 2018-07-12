import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

// let defaultCity = '上海'
// try {
//   if (localStorage.city) {
//     defaultCity = localStorage.city
//   }
// } catch (e) {}

export default new Vuex.Store({
  // state: {
  //   // city: localStorage.city || '上海'
  //   city: defaultCity
  // },
  state: state,
  // actions: {
  //   changeCity (ctx, city) {
  //     console.log(city)
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations: mutations,
  // mutations: {
  //   changeCity (state, city) {
  //     state.city = city
  //     localStorage.city = city
  //   }
  // }
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})
