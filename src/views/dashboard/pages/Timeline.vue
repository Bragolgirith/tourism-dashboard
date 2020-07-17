<template>
  <v-container fluid>
    <section class="mb-12 text-center">
      <v-btn
        text
        title="Отпечатай"
        @click="printItinerary"
      >
        <v-icon class="mr-2">
          mdi-printer
        </v-icon>
        Отпечатай
      </v-btn>
    </section>
    <div id="printable">
      <v-card>
        <v-card-title class="subheading font-weight-bold">
          Група
        </v-card-title>
        <v-divider />
        <v-list dense>
          <v-list-item>
            <v-list-item-content>Начална дата:</v-list-item-content>
            <v-list-item-content class="align-end">
              {{ group.startDate }}
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>Лице за контакти:</v-list-item-content>
            <v-list-item-content class="align-end">
              {{ group.name }}
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>Email:</v-list-item-content>
            <v-list-item-content class="align-end">
              {{ group.email }}
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>Възрастни:</v-list-item-content>
            <v-list-item-content class="align-end">
              {{ group.adultsCount }}
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>Деца:</v-list-item-content>
            <v-list-item-content class="align-end">
              {{ group.childrenCount }}
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>Домашни любимци:</v-list-item-content>
            <v-list-item-content class="align-end">
              {{ group.petsCount }}
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>Начин за пътуване:</v-list-item-content>
            <v-list-item-content class="align-end">
              {{ group.defaultTravelMode.text }}
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>Бележки:</v-list-item-content>
            <v-list-item-content class="align-end">
              {{ group.notes }}
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
      <hr class="hidden-screen-only">
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
              <span class="caption grey--text font-weight-light">Обща продължителност: {{
                $formatDuration(day.totalDurationInMinutes)
              }} ч.</span>
            </template>
          </base-material-card>
          <hr class="hidden-screen-only">
        </v-timeline-item>
      </v-timeline>
    </div>
  </v-container>
</template>
<script>
  import { mapGetters } from 'vuex'
  import { Printd } from 'printd'

  export default {
    name: 'Timeline',
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
            text: '',
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
    methods: {
      printItinerary () {
        const d = new Printd()
        d.print(document.getElementById('printable'))
      },
    },
  }
</script>
