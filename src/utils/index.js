/**
 * Splits a list of itinerary items (left column) to a list of days (right column)
 * @param itineraryItems
 * @returns [{items:[]}]
 */
import { AllItems } from '@/constants/itinerary-items'

function splitIntoDays (itineraryItems) {
  return itineraryItems.reduce((arr, item) => {
    if (item.id === 'NEW_DAY') {
      arr.push({ items: [] }) // Add a new day
    } else {
      arr[arr.length - 1].items.push({ ...item }) // Append the item to the last day instead
    }
    return arr
  }, [{ items: [] }])
}

/**
 * Adds some additional info (title, date, ...) to a list of days
 * @param days, e.g. [{items:[]}]
 * @param startDate the start date (dayjs object)
 * @returns [{title, date, items:[]}]
 */
function populateDaysWithInfo (days, startDate) {
  let runningDate = startDate

  return days.map((day, index) => {
    const dayWithInfo = { ...day }
    dayWithInfo.title = `Ден ${index + 1}`
    dayWithInfo.date = runningDate
    runningDate = runningDate.add(1, 'day')
    return dayWithInfo
  })
}

/**
 * Adds some additional info (title, date, ...) to a list of days
 * @param items, e.g. [{id, timeCorrection, travelTimeCorrection, travelMode, customNote, pricingCorrection}]
 * @param startDate the start date (dayjs object)
 * @returns [{..., name, description, notes, address, location, price }]
 */
function populateItemsWithInfo (items, startDate) {
  let runningDate = startDate

  return items.map((item) => {
    const itemInfo = AllItems.find(element => item.id === element.id)
    const startTime = runningDate
    const test = { ...item, ...itemInfo, startTime }

    runningDate = runningDate.add(itemInfo.durationInMinutes, 'minute')

    return test
  })
}

export {
  splitIntoDays,
  populateDaysWithInfo,
  populateItemsWithInfo,
}
