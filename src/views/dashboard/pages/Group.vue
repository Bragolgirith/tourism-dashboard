<template>
  <v-container id="group" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Редактирай групата
            </div>

            <div class="subtitle-1 font-weight-light">
              Брой участници и допълнителна информация
            </div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.name"
                    label="Лице за контакти"
                  />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.email"
                    label="Email"
                  />
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model.number="form.adultsCount"
                    label="Възрастни"
                    type="number"
                  />
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model.number="form.childrenCount"
                    label="Деца"
                    type="number"
                  />
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model.number="form.petsCount"
                    label="Домашни любимци"
                    type="number"
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <v-select
                    v-model="form.defaultTravelMode"
                    :items="form.travelModes"
                    return-object
                    label="Начин за пътуване"
                    outlined
                  />
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    v-model="form.notes"
                    label="Бележки"
                  />
                </v-col>

                <v-col cols="12" class="text-right">
                  <v-btn color="success" class="mr-0" @click="submit">
                    Запиши
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Group',
    data () {
      return {}
    },
    computed: {
      ...mapState({
        // Bind the form values to the vuex store
        form: 'group',
      }),
    },
    methods: {
      submit () {
        // Commit state to the store.
        this.$store.commit('UPDATE_GROUP', this.form)
      },
      reset () {
        this.$store.commit('RESET_GROUP')
      },
    },
  }
</script>
