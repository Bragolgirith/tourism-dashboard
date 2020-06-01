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
        Тук можете да планирате маршрута
      </span>
    </section>
    <v-row>
      <v-col cols="12" md="6">
        <itinerary-planner />
      </v-col>
      <v-col cols="12" md="6">
        <rendered-itinerary />
      </v-col>
    </v-row>
    <div class="py-3" />
  </v-container>
</template>
<script>
  import ItineraryPlanner from '../component/ItineraryPlanner'
  import RenderedItinerary from '../component/RenderedItinerary'

  export default {
    name: 'Itinerary',
    components: {
      RenderedItinerary,
      ItineraryPlanner,
    },
  }
</script>
