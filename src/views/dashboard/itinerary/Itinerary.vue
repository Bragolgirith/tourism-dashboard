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
        Тук можете да конфигурирате локациите и тяхното разпределение по дни
      </span>
    </section>

    <itinerary-day title="Ден 1" :list="list1" />

    <itinerary-day title="Ден 2" :list="list2" />

    <div class="py-3" />
  </v-container>
</template>
<script>
  import ItineraryDay from '../component/ItineraryDay'

  export default {
    name: 'Itinerary',
    components: {
      ItineraryDay,
    },
    data () {
      return {
        list1: [
          {
            name: 'Вила Армира',
            id: 1,
          },
          {
            name: 'Joao',
            id: 2,
          },
          {
            name: 'Jean',
            id: 3,
          },
          {
            name: 'Gerard',
            id: 4,
          },
        ],
        list2: [
          {
            name: 'Juan',
            id: 5,
          },
          {
            name: 'Edgard',
            id: 6,
          },
          {
            name: 'Johnson',
            id: 7,
          },
        ],
      }
    },
  }
</script>
