<template>
  <v-dialog v-model="visible" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">Корекция</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-col cols="12">
            <v-text-field
              v-model.number="internalValue.timeCorrection"
              label="Времева корекция (минути)"
              type="number"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model.number="internalValue.travelTimeCorrection"
              label="Времева корекция път (минути)"
              type="number"
            />
          </v-col>
          <v-col cols="12">
            <v-select
              v-model="internalValue.travelMode"
              :items="TRAVEL_MODES_VALUES"
              return-object
              label="Начин за пътуване"
              outlined
            />
          </v-col>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="blue darken-1" text @click="closeModal()">
          Затвори
        </v-btn>
        <v-btn color="blue darken-1" text @click="updateValue()">
          Запиши
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
  import { TRAVEL_MODES_VALUES } from '@/constants/travel-modes'

  export default {
    name: 'EditItineraryItemModal',
    props: {
      item: {
        type: Object,
        required: true,
      },
    },
    data () {
      return {
        visible: true,
        internalValue: { ...this.item },
      }
    },
    created () {
      this.TRAVEL_MODES_VALUES = TRAVEL_MODES_VALUES
    },
    methods: {
      updateValue: function () {
        this.$emit('update', this.internalValue)
        this.$emit('close')
      },
      closeModal: function () {
        this.$emit('close')
      },
    },
  }
</script>
