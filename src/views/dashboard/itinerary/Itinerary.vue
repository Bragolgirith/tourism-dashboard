<template>
  <v-container
    id="itinerary"
    fluid
    tag="section"
  >
    <section class="mb-12 text-center">
      <h1 class="font-weight-light mb-2 headline">
        {{ $i18n.t('itinerary') }}
      </h1>

      <span class="font-weight-light subtitle-1">
        Тук можете да конфигурирате маршрута
      </span>
    </section>

    <template v-for="(day, i) in days">
      <itinerary-day
        :key="`day-${i}`"
        :title="$i18n.t('day', [i+1])"
        :list="day"
      />
    </template>

    <v-row>
      <v-spacer />
      <v-btn class="my-3" fab dark color="primary">
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn>
    </v-row>

    <div class="py-3" />
  </v-container>
</template>
<script>
  import ItineraryDay from '../component/ItineraryDay'
  import { mapState } from 'vuex'

  export default {
    name: 'Itinerary',
    components: {
      ItineraryDay,
    },
    computed: {
      ...mapState(['days']),
    },
  }
</script>
