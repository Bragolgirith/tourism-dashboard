import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itineraryItems: [
      {
        id: '0А',
      },
      {
        id: '0Б',
      },
      {
        id: '1А',
      },
      {
        id: '1Б',
      },
      {
        id: 'NEW_DAY',
      },
      {
        id: '1В',
      },
      {
        id: '1Г',
      },
      {
        id: '1Д',
      },
    ],
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    drawer: null,
  },
  mutations: {
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    ADD_ITINERARY_ITEM (state, item) {
      console.log('Adding itinerary item: ', item)
      state.itineraryItems.push(item)
    },
    REMOVE_ITINERARY_ITEM (state, index) {
      console.log('Removing itinerary item at index: ', index)
      state.itineraryItems.splice(index, 1)
    },
  },
  actions: {},
})
