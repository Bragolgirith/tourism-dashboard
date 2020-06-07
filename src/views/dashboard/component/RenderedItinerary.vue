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
            <template v-slot:header.startTime="{header}">
              <v-icon class="mr-1" small :title="header.text">
                mdi-clock-outline
              </v-icon>
            </template>
            <template v-slot:header.durationInMinutes="{header}">
              <v-icon class="mr-1" small :title="header.text">
                mdi-timer-sand
              </v-icon>
            </template>
            <template v-slot:header.totalPrice="{header}">
              <v-icon class="mr-1" small :title="header.text">
                mdi-cash-multiple
              </v-icon>
            </template>

            <template v-slot:item.startTime="{ item }">
              <span>{{ item.startTime.format('HH:mm') }}</span>
            </template>
            <template v-slot:item.durationInMinutes="{ item }">
              <span v-if="item.durationInMinutes">{{ $formatDuration(item.durationInMinutes) }}</span>
            </template>
            <template v-slot:item.totalPrice="{ item }">
              <span>{{ item.totalPrice + ' лв.' }}</span>
            </template>
          </v-data-table>
        </v-card-text>
        <template v-slot:actions :day="day">
          <v-icon class="mr-1" small :color="day.totalDurationInMinutes > 719 ? 'red' : null">
            mdi-clock-outline
          </v-icon>
          <span class="caption grey--text font-weight-light">Обща продължителност: {{ $formatDuration(day.totalDurationInMinutes) }} ч.</span>
        </template>
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
        headers: [
          {
            sortable: false,
            text: 'Начало',
            value: 'startTime',
            align: 'center',
          },
          {
            sortable: false,
            text: 'Времетраене',
            value: 'durationInMinutes',
            align: 'center',
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
      ...mapGetters(['group', 'days']),
    },
  }
</script>
