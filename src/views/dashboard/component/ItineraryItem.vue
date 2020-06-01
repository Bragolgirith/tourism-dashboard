<template>
  <v-row align="center">
    <v-col cols="9">
      <div class="font-weight-light">
        <v-icon left class="drag-handle">
          mdi-drag-vertical
        </v-icon>
        <template v-if="itemInfo.type === TYPES.OTHERS">
          <v-icon left>
            {{ itemInfo.icon }}
          </v-icon>
          {{ itemInfo.name }}
        </template>
        <template v-else-if="itemInfo.type === TYPES.LOCATIONS">
          {{ itemInfo.id }} {{ itemInfo.name }} ({{ totalPrice }} лв.)
        </template>
        <template v-else>
          {{ JSON.stringify(itemInfo) }}
        </template>
      </div>
    </v-col>

    <v-col cols="3" class="text-right">
      <v-icon class="mx-1">
        mdi-pencil
      </v-icon>
      <v-icon
        color="error" class="mx-1"
        @click="removeItem"
      >
        mdi-close
      </v-icon>
    </v-col>
  </v-row>
</template>
<script>
  import { TYPES, AllItems } from '../../../constants/itinerary-items.js'
  import { mapGetters } from 'vuex'

  export default {
    name: 'ItineraryItem',
    props: {
      item: {
        type: Object,
        required: true,
      },
    },
    computed: {
      ...mapGetters(['group']),
      itemInfo: function () {
        return AllItems.find(item => this.item.id === item.id)
      },
      totalPrice: function () {
        // TODO: Add children/dogs/price modifiers. Extract to a util. "(4 възрастни * 20 лв.) + (2 деца * 10 лв.) + (1 куче * 5 лв.) = 105 лв."
        return this.group.adultsCount * this.itemInfo.pricePerAdult
      },
    },
    created () {
      this.TYPES = TYPES
    },
    methods: {
      // TODO: Add popup edit item (timeCorrection, travelTimeCorrection, travelMode, customNote, ...)
      removeItem: function () {
        this.$emit('removeItem')
      },
    },
  }
</script>
