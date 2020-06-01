import * as dayjs from 'dayjs'
import * as localizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/bg'

dayjs.extend(localizedFormat)
dayjs.locale('bg')

/**
 * Custom dayjs plugin that preloads the 'bg' locale
 * Usage 1: this.$dayjs(date).format('dddd, D MMMM, YYYY г.')
 * Usage 2: this.$formatDate(date)
 */
const DayJsBgPlugin = {
  install (Vue, options) {
    Vue.prototype.$dayjs = dayjs
    Vue.prototype.$formatDate = function (date) {
      return dayjs(date).format('dddd, D MMMM, YYYY г.')
    }
  },
}

export default DayJsBgPlugin
