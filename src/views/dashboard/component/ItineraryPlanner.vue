<template>
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

    <v-btn
      absolute bottom right
      fab small color="primary"
      @click="addItineraryItem({id: '00', name: '-name-'})"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
  </base-material-card>
</template>
<script>
  import draggable from 'vuedraggable'
  import { mapMutations, mapState } from 'vuex'
  import ItineraryItem from './ItineraryItem'
  export default {
    name: 'ItineraryPlanner',
    components: {
      ItineraryItem,
      draggable,
    },
    data () {
      return {}
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
