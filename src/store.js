import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    days: [
      [
        {
          name: 'Вила Армира',
          id: 1,
        },
        {
          name: 'Joao',
          id: 2,
        },
        {
          name: 'Jean',
          id: 3,
        },
        {
          name: 'Gerard',
          id: 4,
        },
      ],
      [
        {
          name: 'Juan',
          id: 5,
        },
        {
          name: 'Edgard',
          id: 6,
        },
        {
          name: 'Johnson',
          id: 7,
        },
      ],
    ],
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    drawer: null,
  },
  mutations: {
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    ADD_DAY (state) {
      state.days.push([])
    },
    REMOVE_DAY (state, { index }) {
      // console.log('Removing day ', index)
      state.days.splice(index, 1)
    },
  },
  actions: {

  },
})
