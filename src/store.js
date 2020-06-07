import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { AllItems } from '@/constants/itinerary-items'
import { populateDaysWithInfo, populateDaysWithSchedule, populateDaysWithTotals, splitIntoDays } from './utils'

Vue.use(Vuex)

const initialGroupState = () => {
  return {
    startDate: new Date(),
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
    itineraryItemsWithDetails: state => {
      // let runningTime = Vue.prototype.$dayjs(1)
      //   .hour(8)
      //   .minute(0)
      //   .second(0)

      const group = state.group
      return state.itineraryItems.map(item => {
        const itemInfo = AllItems.find(element => item.id === element.id)

        // Price calculation + rounding
        const totalPrice =
          Math.round(
            ((group.adultsCount * itemInfo.pricePerAdult) +
              (group.childrenCount * itemInfo.pricePerAdult * 0.5) +
              (group.dogsCount * itemInfo.pricePerAdult * 0.5)) *
            100,
          ) / 100

        // [{id, type, icon, durationInMinutes, infos, link, name, notes, priceConstant, pricePerAdult, startTime, totalPrice}, ...]
        return {
          ...itemInfo,
          totalPrice,
        }
      })
    },
    days: (state, getters) => {
      const startDate = Vue.prototype.$dayjs(state.group.startDate)

      // TODO: WORKING HERE! Add totalPricePerDay
      // TODO: WORKING HERE! Add travelling (this will be fun)
      // TODO: WORKING HERE! Add accommodation for the night (this will be fun)
      const days = splitIntoDays(getters.itineraryItemsWithDetails)
      const daysWithInfo = populateDaysWithInfo(days, startDate)
      const daysWithInfoWithTotals = populateDaysWithTotals(daysWithInfo)
      const daysWithInfoWithDurationWithSchedule = populateDaysWithSchedule(daysWithInfoWithTotals)

      console.log(daysWithInfoWithDurationWithSchedule)
      // [{date, items, title, totalDurationInMinutes, totalPrice}, ...]
      return daysWithInfoWithDurationWithSchedule
    },
  },
  mutations: {
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    UPDATE_GROUP (state, newValue) {
      state.group = newValue
    },
    RESET_GROUP (state) {
      state.group = initialGroupState()
    },
    UPDATE_ITINERARY_ITEMS (state, items) {
      state.itineraryItems = items
    },
    ADD_ITINERARY_ITEM (state, item) {
      state.itineraryItems.push(item)
    },
    REMOVE_ITINERARY_ITEM (state, index) {
      state.itineraryItems.splice(index, 1)
    },
  },
  actions: {},
  plugins: [createPersistedState()],
})
