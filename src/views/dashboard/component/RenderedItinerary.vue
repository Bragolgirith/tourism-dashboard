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
            {{ $formatDate(day.date) }}
          </div>
        </template>
        <v-card-text>
          <v-data-table
            hide-default-footer
            :headers="headers"
            :items="day.items"
          >
            <template v-slot:item.startTime="{ item }">
              <span>{{ item.startTime.format('HH:mm') }}</span>
            </template>
            <template v-slot:item.durationInMinutes="{ item }">
              <span>{{ $formatDuration(item.durationInMinutes) }}</span>
            </template>
          </v-data-table>
        </v-card-text>
      </base-material-card>
    </v-timeline-item>
  </v-timeline>
</template>
<script>
  import { mapGetters } from 'vuex'
  import { populateDaysWithInfo, populateItemsWithInfo, splitIntoDays } from '@/utils'

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
            text: 'Час',
            value: 'startTime',
          },
          {
            sortable: false,
            text: '',
            value: 'durationInMinutes',
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
      /* {} */
      days: function () {
        const startDate = this.$dayjs(this.startDate)
          .hour(8)
          .minute(0)
          .second(0)

        const days = splitIntoDays(this.itineraryItems)
        const daysWithInfo = populateDaysWithInfo(days, startDate)
        const daysWithItemsWithInfo = daysWithInfo.map(day => {
          const itemsWithInfo = populateItemsWithInfo(day.items, startDate)

          return {
            ...day,
            items: itemsWithInfo,
          }
        })

        console.log(daysWithItemsWithInfo)
        return daysWithItemsWithInfo
      },
    },
  }
</script>
