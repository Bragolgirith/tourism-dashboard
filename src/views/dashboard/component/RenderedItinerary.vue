<template>
  <v-timeline align-top dense>
    <v-timeline-item
      v-for="(day, i) in days"
      :key="i"
      icon="mdi-calendar-today"
      fill-dot
      large
    >
      <base-material-card
        class="px-5 py-3"
      >
        <template v-slot:heading :day="day">
          <div class="display-2 font-weight-light">
            {{ day.title }}
          </div>

          <div class="subtitle-1 font-weight-light">
            {{ $formatDate(startDate) }}
          </div>
        </template>
        <v-card-text>
          <v-data-table
            hide-default-footer
            :headers="headers"
            :items="day.items"
          />
        </v-card-text>
      </base-material-card>
    </v-timeline-item>
  </v-timeline>
</template>
<script>

  import { mapGetters } from 'vuex'
  // import RenderedItineraryDay from './RenderedItineraryDay'

  export default {
    name: 'RenderedItinerary',
    components: {
      // RenderedItineraryDay,
    },
    data () {
      return {
        startDate: new Date(),
        headers: [
          {
            sortable: false,
            text: 'Време',
            value: 'time',
          },
          {
            sortable: false,
            text: 'Име',
            value: 'name',
          },
          {
            sortable: false,
            text: 'Цена',
            value: 'totalPrice',
            align: 'right',
          },
        ],
      }
    },
    computed: {
      ...mapGetters(['group', 'itineraryItems']),
      days: function () {
        return [{
          id: 1,
          color: 'red',
          title: 'Ден 1',
          text: 'teeeeext',
          subtext: 'subteeeeext',
        }, {
          id: 2,
          color: 'green',
          title: 'Ден 2',
          text: 'teeeeext',
          subtext: 'subteeeeext',
        }]
      },
    },
  }
</script>
