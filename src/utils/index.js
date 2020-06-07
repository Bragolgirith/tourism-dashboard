import * as dayjs from 'dayjs'
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
 * @returns [{title, date, items:[], totalDurationInMinutes}]
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
 * @param group the group info (as fetched from the store), e.g. {startDate, name, email, adultsCount, childrenCount, dogsCount, notes}
 * @returns [{..., name, description, notes, address, location, totalPrice }]
 */
function populateItemsWithInfo (items, group) {
  let runningDate = dayjs(this.group.startDate)
    .hour(8)
    .minute(0)
    .second(0)

  return items.map((item) => {
    const startTime = runningDate

    const itemInfo = AllItems.find(element => item.id === element.id)

    // Price calculation + rounding
    const totalPrice =
      Math.round(
        ((group.adultsCount * itemInfo.pricePerAdult) +
          (group.childrenCount * itemInfo.pricePerAdult * 0.5) +
          (group.dogsCount * itemInfo.pricePerAdult * 0.5)) *
        100,
      ) / 100

    const test = {
      ...item,
      ...itemInfo,
      startTime,
      totalPrice,
    }

    // Update the running date
    runningDate = runningDate.add(itemInfo.durationInMinutes, 'minute')

    return test
  })
}

function populateDaysWithTotals (days) {
  return days.map(day => {
    // Calculate the total duration in minutes
    const totalDurationInMinutes = day.items.reduce((prev, item) => {
      return prev + item.durationInMinutes
    }, 0)

    // Calculate the total price
    const totalPrice = day.items.reduce((prev, item) => {
      return prev + item.totalPrice
    }, 0)

    return {
      ...day,
      totalDurationInMinutes,
      totalPrice,
    }
  })
}

// Adds a startTime to each items
function populateDaysWithSchedule (days) {
  return days.map(day => {
    let dayTime = dayjs(0)
      .hour(8)
      .minute(0)
      .second(0)

    return {
      ...day,
      items: day.items.map(item => {
        const startTime = dayTime

        // Update the running time
        dayTime = dayTime.add(item.durationInMinutes, 'minute')

        return {
          ...item,
          startTime,
        }
      }),
    }
  })

  // return days.map(day => {
  //   return {
  //     ...day,
  //     items: day.items.map(item => {
  //       return {
  //         ...item,
  //         startTime: runningTime,
  //       }
  //     }),
  //   }
  // })
}

export {
  splitIntoDays,
  populateDaysWithInfo,
  populateItemsWithInfo,
  populateDaysWithTotals,
  populateDaysWithSchedule,
}
