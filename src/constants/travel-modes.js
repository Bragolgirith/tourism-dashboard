const TRAVEL_MODES = Object.freeze({
  DRIVING: {
    icon: 'mdi-car',
    text: 'Шофиране',
    value: 'DRIVING',
  },
  BICYCLING: {
    icons: 'mdi-bike',
    text: 'Колоездене',
    value: 'BICYCLING',
  },
  TRANSIT: {
    icons: 'mdi-bus',
    text: 'Обществен транспорт',
    value: 'TRANSIT',
  },
  WALKING: {
    icons: 'mdi-walk',
    text: 'Пеша',
    value: 'WALKING',
  },
})

const TRAVEL_MODES_VALUES = Object.values(TRAVEL_MODES)

export {
  TRAVEL_MODES,
  TRAVEL_MODES_VALUES,
}
