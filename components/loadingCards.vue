<template>
  <v-card
    :loading="loading"
    class="mx-auto my-3 "
    max-width="300"
  >
    <template slot="progress">
      <v-progress-linear
        color="green"
        height="5"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-card-title>Patient full name</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
      
      </v-row>

      <div class="my-4 subtitle-2" >
        Clinic
      </div>

      <div class="my-2">Diagnosis: COVID-19</div>

    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Color code</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="error white--text"
        column
      >
        <v-chip>Priority #1</v-chip>

        <v-chip>Priority #2</v-chip>

        <v-chip>Priority #3</v-chip>

      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="green lighten-2"
        text
        @click="Submit"
      >
        Submit
      </v-btn>
    </v-card-actions>
  </v-card>

  
</template>

<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
    }),
    methods: {
      Submit () {
        this.loading = true
        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>