import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const initialGroupState = () => {
  return {
    name: '',
    email: '',
    adultsCount: 4,
    childrenCount: 2,
    dogsCount: 1,
    notes: '',
  }
}

export default new Vuex.Store({
  state: {
    group: initialGroupState(),
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
  getters: {
    group: state => state.group,
    itineraryItems: state => state.itineraryItems,
  },
  mutations: {
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    UPDATE_GROUP (state, newValue) {
      console.log('Updating group: ', newValue)
      state.group = newValue
    },
    RESET_GROUP (state) {
      console.log('Resetting group')
      state.group = initialGroupState()
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
  plugins: [createPersistedState()],
})
