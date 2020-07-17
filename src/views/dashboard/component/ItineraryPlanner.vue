<template>
  <div style="display: contents">
    <edit-itinerary-item-modal v-if="editModalVisible" :item="editModalItem" @update="onItemUpdate" @close="closeModal" />

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
        @change="onDragChange"
      >
        <template v-for="(item, i) in itineraryItems">
          <itinerary-item
            :key="i"
            :item="item"
            @editItem="openModal(i)"
            @removeItem="removeItineraryItem(i)"
          />
        </template>
      </draggable>

      <v-divider class="mt-8" />

      <v-card-text>
        <v-autocomplete
          ref="inputAddItem"
          v-model="currentItem"
          :items="items"
          :filter="customFilter"
          :item-text="formatInput"
          item-value="id"
          placeholder="Добави локация"
          prepend-icon="mdi-sign-direction-plus"
          return-object
          clearable
          @input="onAddItem"
        />
        <v-btn text class="ml-n6" @click="addNewDay">
          <v-icon left>
            mdi-weather-sunset
          </v-icon>
          Добави ден
        </v-btn>
      </v-card-text>
    </base-material-card>
  </div>
</template>
<script>
  import draggable from 'vuedraggable'
  import { mapMutations, mapState } from 'vuex'
  import ItineraryItem from './ItineraryItem'
  import { AllItems } from '@/constants/itinerary-items'
  import EditItineraryItemModal from './EditItineraryItemModal'

  export default {
    name: 'ItineraryPlanner',
    components: {
      EditItineraryItemModal,
      ItineraryItem,
      draggable,
    },
    data () {
      return {
        currentItem: null,
        items: AllItems,
        editModalVisible: false,
        editModalItem: null,
      }
    },
    computed: {
      ...mapState(['itineraryItems']),
    },
    methods: {
      ...mapMutations({
        addItineraryItem: 'ADD_ITINERARY_ITEM',
        removeItineraryItem: 'REMOVE_ITINERARY_ITEM',
        updateItineraryItem: 'UPDATE_ITINERARY_ITEM',
        updateItineraryItems: 'UPDATE_ITINERARY_ITEMS',
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
      onAddItem: function (item) {
        if (item != null) {
          this.addItineraryItem({ id: item.id })
          // A workaround to clear the input after a selection
          this.$nextTick(() => {
            this.currentItem = null
          })
        }
      },
      formatInput: function (item) {
        return `${item.id} ${item.name}`
      },
      onDragChange: function (evt) {
        this.updateItineraryItems(this.itineraryItems)
      },
      openModal (i) {
        this.editModalItem = { ...this.itineraryItems[i] }
        this.editModalVisible = true
      },
      onItemUpdate (item) {
        this.updateItineraryItem(item)
        this.editModalVisible = false
      },
      closeModal: function () {
        this.editModalVisible = false
      },
    },
  }
</script>
<style>
  .drag-handle {
    cursor: move;
  }
</style>
