<template>
  <v-container
    id="itinerary"
    fluid
    tag="section"
  >
    <base-v-component heading="Itinerary" link="components/itinerary" />

    <base-material-card
      icon="mdi-clipboard-text"
      title="Day 1"
      class="px-5 py-3"
    >
      <draggable
        class="list-group"
        :list="list1"
        group="people"
        handle=".drag-handle"
        @change="log"
      >
        <div
          v-for="(element, index) in list1"
          :key="element.name"
          class="list-group-item"
        >
          <v-icon left class="drag-handle">
            mdi-drag-vertical
          </v-icon>
          {{ element.name }} {{ index }}
        </div>
      </draggable>
    </base-material-card>

    <base-material-card
      icon="mdi-clipboard-text"
      title="Day 2"
      class="px-5 py-3"
    >
      <draggable
        class="list-group"
        :list="list2"
        group="people"
        @change="log"
      >
        <div
          v-for="(element, index) in list2"
          :key="element.name"
          class="list-group-item"
        >
          {{ element.name }} {{ index }}
        </div>
      </draggable>
    </base-material-card>

    <div class="py-3" />
  </v-container>
</template>
<script>
  import draggable from 'vuedraggable'
  export default {
    name: 'TwoLists',
    display: 'Two Lists',
    order: 1,
    components: {
      draggable,
    },
    data () {
      return {
        list1: [
          { name: 'John', id: 1 },
          { name: 'Joao', id: 2 },
          { name: 'Jean', id: 3 },
          { name: 'Gerard', id: 4 },
        ],
        list2: [
          { name: 'Juan', id: 5 },
          { name: 'Edgard', id: 6 },
          { name: 'Johnson', id: 7 },
        ],
      }
    },
    methods: {
      add: function () {
        this.list.push({ name: 'Juan' })
      },
      replace: function () {
        this.list = [{ name: 'Edgard' }]
      },
      clone: function (el) {
        return {
          name: el.name + ' cloned',
        }
      },
      log: function (evt) {
        window.console.log(evt)
      },
    },
  }
</script>
