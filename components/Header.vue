<template>
        <v-app-bar
      app
      color="#16aac4"
      flat
      
    >
      <v-container class="py-0 fill-height">
        <v-avatar
          class="mr-10"
          size="32"
          
          >
          <v-icon
           large
           color="white"
           >
           mdi-account-circle</v-icon>
        </v-avatar>

        <v-btn class="btn-link"
        text
        
        >
          <nuxt-link to="/dashboard">Dashboard</nuxt-link>
        </v-btn>
        <v-btn class="btn-link"
        text
        
        >
          <nuxt-link to="/profile">Profile</nuxt-link>
        </v-btn>
        <v-btn class="btn-link"
        text
        
        >
          <nuxt-link to="/patients">Patients</nuxt-link>
        </v-btn>
        <v-btn class="btn-link"
        text
        
        >
          <nuxt-link to="/urgentCases">Urgent Cases</nuxt-link>
        </v-btn>
        
        <v-spacer></v-spacer>

        
      </v-container>
    </v-app-bar>
</template>

<script>
export default {
   
}
</script>

<style scoped>

.btn-link a { 
   text-decoration: none !important;
  color: aliceblue !important;
  
}

</style>