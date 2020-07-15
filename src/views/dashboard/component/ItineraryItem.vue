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
          {{ itemInfo.id }} {{ itemInfo.name }}
        </template>
        <template v-else>
          {{ JSON.stringify(itemInfo) }}
        </template>

        <v-chip v-if="item.timeCorrection" small class="mx-1" title="Времева корекция (минути)">
          <v-icon small>
            mdi-clock-outline
          </v-icon>
          {{ (item.timeCorrection > 0 ? '+' : '') + item.timeCorrection }} мин.
        </v-chip>
        <v-chip v-if="item.travelTimeCorrection" small class="mx-1" title="Времева корекция път (минути)">
          <v-icon small>
            mdi-map-clock-outline
          </v-icon>
          {{ (item.travelTimeCorrection > 0 ? '+' : '') + item.travelTimeCorrection }} мин.
        </v-chip>
        <v-chip v-if="item.travelMode.value !== group.defaultTravelMode.value" small class="mx-1" :title="item.travelMode.text">
          <v-icon small>
            {{ item.travelMode.icon }}
          </v-icon>
        </v-chip>
      </div>
    </v-col>

    <v-col cols="3" class="text-right">
      <v-icon class="mx-1" @click.stop="editItem">
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
  import { TYPES, AllItems } from '@/constants/itinerary-items'
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
    },
    created () {
      this.TYPES = TYPES
    },
    methods: {
      editItem: function () {
        this.$emit('editItem')
      },
      removeItem: function () {
        this.$emit('removeItem')
      },
    },
  }
</script>
