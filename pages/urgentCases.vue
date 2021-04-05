<template>
  <v-main class="dashboard mx-4 mb-4">
    
    <v-container class="my-15">

      <h1 class="subheading grey--text mb-5">Urgent Cases</h1>


      <v-row row justify-start class="ml-1 mb-3">
        <v-tooltip top>
          <v-btn small text color="grey" @click="sortBy('name')" slot="activator">
            <v-icon small left >mdi-alphabetical-variant </v-icon>
            <span class="caption text-lowercase">By patient name</span>
          </v-btn>
          <span>Sort by patient name</span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn small text color="grey" @click="sortBy('clinic')" slot="activator">
            <v-icon small left>mdi-office-building-marker </v-icon>
            <span class="caption text-lowercase">By Clinic</span>
          </v-btn>
          <span>Sort by patient author</span>
        </v-tooltip>
      </v-row>
      
      <v-card text v-for="patient in patients" :key="patient.name">
        <v-row row wrap :class="`ma-0 pa-3 patient ${patient.status}`">
          <v-flex d-flex flex-column mb-6>
            <div class="caption grey--text ">Patient name</div>
            <div>{{ patient.name }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text ">Clinic</div>
            <div>{{ patient.clinic }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text ">Due by</div>
            <div>{{ patient.entry }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2 >
            
            <v-chip 
             small
             class="right"
             :color="`${patient.status}`"
             :class="`${patient.status} white--text my-2 caption`">
             {{ patient.status }}
            </v-chip>
            
            <v-btn 
            class="ma-2"
            small 
            rounded
            outlined 
            target="_blank"
            href="../static/historia médica.pdf"
            download>
                Download DOC
            </v-btn>


          </v-flex>
        </v-row>
        <v-divider></v-divider>
      </v-card>

    </v-container>
   
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      patients: [
        { name: 'Ronald Blanco', clinic: 'Policlínica Maracaibo', entry: '20th Dec 2020', status: 'urgent'},
        { name: 'Jesús Portillo', clinic: 'Falcón', entry: '20th Feb 2021', status: 'urgent'},
      ]
    }
  },
  methods: {
    sortBy(prop) {
      this.patients.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  }
}
</script>

<style >

.patient.checked{
  border-left: 4px solid #3cd1c2;
}
.patient.regular{
  border-left: 4px solid #ffaa2c;
}
.patient.urgent{
  border-left: 4px solid #f83e70;
}
.v-chip.checked {
  background: #3cd1c2 !important; 
}
.v-chip.regular {
  background: #ffaa2c !important;
}
.v-chip.urgent {
  background: #f83e70 !important;
}

</style>