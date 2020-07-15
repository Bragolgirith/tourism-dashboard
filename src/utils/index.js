import * as dayjs from 'dayjs'
/**
 * Splits a list of itinerary items (left column) to a list of days (right column)
 * @param itineraryItems
 * @returns [{items:[]}]
 */
import { TYPES, AllItems } from '@/constants/itinerary-items'

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

function populateDaysWithStartLocation (days) {
  // No travel required for the first item
  let runningStartLocationId = null

  return days.map(day => {
    const startLocationId = runningStartLocationId
    // Update the running start location id to the last item
    runningStartLocationId = day.items.slice(-1)[0]?.id

    return {
      ...day,
      startLocationId,
    }
  })
}

/**
 * Adds some additional info (title, date, ...) to a list of days
 * @param items, e.g. [{id, timeCorrection, travelTimeCorrection, travelMode, customNote, pricingCorrection}]
 * @param group the group info (as fetched from the store), e.g. {startDate, name, email, adultsCount, childrenCount, petsCount, notes}
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
          (group.petsCount * itemInfo.pricePerAdult * 0.5)) *
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

// Adds the in-between travel items
function populateDaysWithTravelItems (days) {
  return days.map(day => {
    const items = day.items

    const updatedItems = []
    for (let i = 0; i < items.length; i++) {
      const currentItem = items[i]
      if (i === 0) {
        if (day.startLocationId) {
          const travelItem = buildTravelItem(day.startLocationId, currentItem.id, currentItem.travelTimeCorrection)
          updatedItems.push(travelItem)
        }
      } else {
        const previousItem = items[i - 1]
        const travelItem = buildTravelItem(previousItem.id, currentItem.id, currentItem.travelTimeCorrection)
        updatedItems.push(travelItem)
      }

      // Apply time correction
      currentItem.durationInMinutes = +currentItem.durationInMinutes + (+currentItem.timeCorrection || 0)

      updatedItems.push(currentItem)
    }

    // day.items.forEach((item, index) => {
    //   if (index > 0) {
    //     const travelItem = buildTravelItem()
    //
    //   }
    //   updatedItems.push(item)
    // })

    return {
      ...day,
      items: updatedItems,
    }
  })
}

// Adds a startTime to each items
function populateDaysWithSchedule (days) {
  return days.map(day => {
    // Start at 08:00 o'clock
    let runningDayTime = dayjs(0)
      .hour(8)
      .minute(0)
      .second(0)

    return {
      ...day,
      items: day.items.map(item => {
        const startTime = runningDayTime

        // Update the running time
        const itemDuration = +item.durationInMinutes
        // let correctedItemDuration
        // if (item.type === TYPES.TRAVELS) {
        //   correctedItemDuration = +item.durationInMinutes + (+item.travelTimeCorrection || 0)
        // } else {
        //   correctedItemDuration = +item.durationInMinutes + (+item.timeCorrection || 0)
        // }
        runningDayTime = runningDayTime.add(itemDuration, 'minute')

        return {
          ...item,
          startTime,
        }
      }),
    }
  })
}

function buildTravelItem (fromId, toId, travelTimeCorrection) {
  return {
    id: `TRAVEL_${fromId}_${toId}`,
    type: TYPES.TRAVELS,
    icon: 'mdi-train-car',
    // Apply time correction
    durationInMinutes: +30 + travelTimeCorrection,
    totalPrice: 10,
    name: `Път от ${fromId} до ${toId}`,
  }
}

export {
  splitIntoDays,
  populateDaysWithInfo,
  populateDaysWithStartLocation,
  populateItemsWithInfo,
  populateDaysWithTotals,
  populateDaysWithTravelItems,
  populateDaysWithSchedule,
}
