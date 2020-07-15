const TRAVEL_MODES = Object.freeze({
  DRIVING: {
    icon: 'mdi-car',
    text: 'Шофиране',
    value: 'DRIVING',
  },
  BICYCLING: {
    icon: 'mdi-bike',
    text: 'Колоездене',
    value: 'BICYCLING',
  },
  TRANSIT: {
    icon: 'mdi-bus',
    text: 'Обществен транспорт',
    value: 'TRANSIT',
  },
  WALKING: {
    icon: 'mdi-walk',
    text: 'Пеша',
    value: 'WALKING',
  },
})

const TRAVEL_MODES_VALUES = Object.values(TRAVEL_MODES)

export {
  TRAVEL_MODES,
  TRAVEL_MODES_VALUES,
}
