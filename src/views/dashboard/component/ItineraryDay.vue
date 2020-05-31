<template>
  <base-material-card
    icon="mdi-clipboard-text"
    title="Ден 1"
    class="px-5 py-3"
  >
    <draggable
      class="list-group"
      :list="list"
      group="people"
      handle=".drag-handle"
      @change="log"
    >
      <template v-for="(element, i) in list">
        <v-row :key="i" align="center">
          <v-col cols="9">
            <div class="font-weight-light">
              <v-icon left class="drag-handle">
                mdi-drag-vertical
              </v-icon>
              {{ i }} {{ element.name }}
            </div>
          </v-col>

          <v-col
            cols="3"
            class="text-right"
          >
            <v-icon class="mx-1">
              mdi-pencil
            </v-icon>
            <v-icon
              color="error"
              class="mx-1"
            >
              mdi-close
            </v-icon>
          </v-col>
        </v-row>
      </template>
    </draggable>
  </base-material-card>
</template>
<script>
  import draggable from 'vuedraggable'
  export default {
    name: 'ItineraryDay',
    components: {
      draggable,
    },
    props: {
      title: {
        type: String,
        default: () => ('-No title-'),
      },
      list: {
        type: Array,
        default: () => ([]),
      },
    },
    data () {},
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
<style>
  .drag-handle {
    cursor: move;
  }
</style>
