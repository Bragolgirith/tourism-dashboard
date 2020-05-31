<template>
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
<script>
  export default {
    name: 'ItineraryDayItem',
    props: {
      item: {
        type: Object,
        default: () => ({
          id: '-id-',
          name: '-name-',
        }),
      },
    },
  }
</script>
