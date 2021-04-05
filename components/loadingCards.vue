<template>
  <v-container class="card-grid pa-0">
  <v-flex xs12 md4 sm6 v-for="patient in patients" :key="patient.name"
   style="max-width: 300px;">
    <v-card
      :loading="loading"
      class="mx-2 my-3 "
      max-width="300"
    >
      <template slot="progress">
        <v-progress-linear
          color="teal lighten-1"
          height="5"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-card-title>{{ patient.name }}</v-card-title>

      <v-card-text>
        <v-row 
          align="center"
          class="mx-0"
        >
        
        </v-row>

        <div class="my-4 subtitle-2" >
          {{ patient.clinic }}
        </div>

        <div class="my-2">{{ patient.diagnosis }}</div>

      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      

      <v-card-text>
        <v-chip-group
          v-model="selection"
          small
          column
        >
          <v-chip 
              small
              class="right"
              :color="`${patient.status}`"
              :class="`${patient.status} white--text my-2 caption`">
              {{ patient.status }}
              </v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions>
        <v-btn
          color="teal lighten-1"
          text
          @click="Submit"
        >
          Submit
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>

  </v-container>
</template>

<script>
  export default {
    // data: () => ({
    //   loading: false,
    //   selection: 1,
    // }),
    data() {
    return {
      patients: [
        { name: 'María Cárdenas', clinic: 'Clínica: Sagrada Familia', diagnosis: 'Diagnóstico: Extrasístole Ventricular', status: 'regular'},
        { name: 'Ernesto Gotera', clinic: 'Clínica: Paraíso', diagnosis: 'Diagnóstico: Sinusitis ', status: 'checked'},
        { name: 'Ronald Blanco', clinic: 'Policlínica: Maracaibo', diagnosis: 'Diagnóstico: Pancitopenia', status: 'urgent'},
        { name: 'Jesús Portillo', clinic: 'Clínica: Falcón', diagnosis: 'Diagnóstico: Hipertensión Pulmonar', status: 'urgent'},
        { name: 'Diego Torrealba', clinic: 'Clínica: Sucre', diagnosis: 'Diagnóstico: Diabetes', status: 'regular'},
        { name: 'Claudia Infante', clinic: 'Clínica: Madre Rafols', diagnosis: 'Diagnóstico: Hipertensión', status: 'regular'},
      ]
    }
  },
    methods: {
      Submit () {
        this.loading = true
        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>

<style scoped>
  
  .card-grid {
    flex: none;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: center;
  }  
</style>

