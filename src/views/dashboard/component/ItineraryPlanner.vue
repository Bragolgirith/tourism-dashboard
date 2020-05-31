<template>
  <div style="display: contents">
    <base-material-card
      icon="mdi-clipboard-text"
      title="Маршрутен план"
      class="px-5 py-3"
    >
      <draggable
        class="list-group"
        :list="itineraryItems"
        group="itinerary"
        handle=".drag-handle"
        @change="log"
      >
        <template v-for="(item, i) in itineraryItems">
          <itinerary-item
            :key="i"
            :item="item"
            @removeItem="removeItineraryItem(i)"
          />
        </template>
      </draggable>

      <v-divider class="mx-4" />

      <v-card-text>
        <v-btn
          text
          @click="addNewDay"
        >
          <v-icon left>
            mdi-weather-sunset
          </v-icon>
          Нов ден
        </v-btn>
        <v-autocomplete
          ref="inputAddItem"
          v-model="currentItem"
          :items="items"
          :filter="customFilter"
          :item-text="formatInput"
          item-value="id"
          label="Добави локация"
          placeholder="Започнете да пишете за търсене"
          prepend-icon="mdi-database-search"
          return-object
          clearable
          @input="onItemInput"
        />
      </v-card-text>
    </base-material-card>
  </div>
</template>
<script>
  import draggable from 'vuedraggable'
  import { mapMutations, mapState } from 'vuex'
  import ItineraryItem from './ItineraryItem'
  import ItineraryItems from '../../../constants/itinerary-items.js'

  export default {
    name: 'ItineraryPlanner',
    components: {
      ItineraryItem,
      draggable,
    },
    data () {
      return {
        currentItem: null,
        items: ItineraryItems,
      }
    },
    computed: {
      ...mapState(['itineraryItems']),
    },
    methods: {
      ...mapMutations({
        // TODO: WORKING HERE! Add a popup "SelectItineraryItem"
        addItineraryItem: 'ADD_ITINERARY_ITEM',
        removeItineraryItem: 'REMOVE_ITINERARY_ITEM',
      }),
      addNewDay: function () {
        this.addItineraryItem({ id: 'NEW_DAY' })
      },
      customFilter (item, queryText, itemText) {
        const textOne = item.id.toLowerCase()
        const textTwo = item.name.toLowerCase()
        const searchText = queryText.toLowerCase()

        return textOne.indexOf(searchText) > -1 ||
          textTwo.indexOf(searchText) > -1
      },
      onItemInput: function (item) {
        if (item != null) {
          this.addItineraryItem({ id: item.id })
        }
      },
      formatInput: function (item) { return `${item.id} ${item.name}` },
      log: function (evt) {
        window.console.log(evt)
      },
    },
  }
</script>
<style>
  .drag-handle {
    cursor: move;
  }
</style>
