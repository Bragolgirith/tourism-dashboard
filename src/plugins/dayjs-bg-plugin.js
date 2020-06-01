import * as dayjs from 'dayjs'
import * as localizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/bg'
import * as duration from 'dayjs/plugin/duration'

dayjs.extend(duration)
dayjs.extend(localizedFormat)
dayjs.locale('bg')

/**
 * Custom dayjs plugin that preloads the 'bg' locale
 * Usage 1: this.$dayjs(date).format('dddd, D MMMM, YYYY г.')
 * Usage 2: this.$formatDate(date)
 */
const DayjsBgPlugin = {
  install (Vue, options) {
    Vue.prototype.$dayjs = dayjs
    Vue.prototype.$formatDate = function (date) {
      return dayjs(date).format('dddd, D MMMM, YYYY г.')
    }
    Vue.prototype.$formatTime = function (date) {
      return dayjs(date).format('HH:mm')
    }
    Vue.prototype.$formatDuration = function (minutes) {
      // Ugly hack to get the duration to format
      const date = dayjs('2000-01-01').add(minutes, 'minutes')
      return date.format('H:mm')
    }
  },
}

export default DayjsBgPlugin
