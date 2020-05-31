<template>
  <base-material-card
    icon="mdi-clipboard-text"
    :title="title"
    class="px-5 py-3"
  >
    <draggable
      class="list-group"
      :list="list"
      group="itinerary"
      handle=".drag-handle"
      @end="dragEnd"
      @change="log"
    >
      <template v-for="(item, i) in list">
        <v-row :key="i" align="center">
          <v-col cols="9">
            <div class="font-weight-light">
              <v-icon left class="drag-handle">
                mdi-drag-vertical
              </v-icon>
              {{ item.id }} {{ item.name }}
            </div>
          </v-col>

          <v-col cols="3" class="text-right">
            <v-icon class="mx-1">
              mdi-pencil
            </v-icon>
            <v-icon color="error" class="mx-1">
              mdi-close
            </v-icon>
          </v-col>
        </v-row>
      </template>
    </draggable>
    <v-btn
      absolute bottom right
      fab small color="warning"
      @click="removeDay"
    >
      <v-icon dark>
        mdi-minus
      </v-icon>
    </v-btn>
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
    data () {
      return {}
    },
    methods: {
      removeDay: function () {
        this.$emit('removeDay')
      },
      log: function (evt) {
        window.console.log(evt)
      },
      dragEnd: function (evt) {
        window.console.log('Move')
        return false
      },
    },
  }
</script>
<style>
  .drag-handle {
    cursor: move;
  }
</style>
