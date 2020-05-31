<template>
  <v-row align="center">
    <v-col cols="9">
      <div class="font-weight-light">
        <v-icon left class="drag-handle">
          mdi-drag-vertical
        </v-icon>
        {{ itemInfo.id }} {{ itemInfo.name }}
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
  import ItineraryItems from '../../../constants/itinerary-items.js'

  export default {
    name: 'ItineraryItem',
    props: {
      item: {
        type: Object,
        required: true,
      },
    },
    computed: {
      itemInfo: function () {
        return ItineraryItems.find(item => this.item.id === item.id)
      },
      // TODO: computed - combine the itemInfo
      //  with the number of people (from store)
      //  and any price modifiers to calculate the total price
    },
    methods: {
      // TODO: Add popup edit item (timeCorrection, travelTimeCorrection, travelMode, customNote, ...)
      removeItem: function () {
        this.$emit('removeItem')
      },
    },
  }
</script>
