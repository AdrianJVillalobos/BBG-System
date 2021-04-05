<template>
  <div >
    <v-main>
      <v-container fluid>
        <v-row align="center" justify="center" class="mt-10 mr-0 mb-0 ml-0">
            <v-card width="560" class="elevation-12">
                  <v-row align="center" justify="center" >
                    <v-col cols="8" md="8">
                      <v-card-text class="mt-10">
                        <h2
                          class="text-center display-2 teal--text text--accent-3"
                        >Edit profile</h2>
                        <div class="text-center mt-4">
                          <v-flex class="mb-4">
                            <v-avatar rounded size="140" class="ma-4">
                                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="Avatar">
                            </v-avatar> 
                          </v-flex>
                          <v-layout column>
                              <v-card outlined flat color="teal lighten-4">
                                  <v-card-text>
                                      
                                      <v-text-field color="teal lighten-1" 
                                          v-model="form.firstName"
                                          label="First Name"></v-text-field>
                                      <v-text-field color="teal lighten-1"
                                          v-model="form.lastName"
                                          label="Last Name"></v-text-field>
                                      <v-text-field color="teal lighten-1"
                                          v-model="form.medicalDegree"
                                          label="Medical Degree"></v-text-field>
                                  </v-card-text>
                                  <v-card-actions >
                                      <v-btn 
                                      rounded
                                      class="teal--text text--accent-3 " 
                                      :loading="loading" >
                                          <v-icon left dark>mdi-account-check</v-icon>
                                          Save 
                                      </v-btn>
                                  </v-card-actions>
                              </v-card>
                          </v-layout>
                        </div>
                      </v-card-text>
                    </v-col>
                  </v-row>
            </v-card>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
    
    export default {
        pageTitle: 'Edit Profile',
        
        data () {
            return {
                loading: false,
                form: {
                    firstName: 'Luis',
                    lastName: 'Espinoza',
                    medicalDegree: 'Traumatology', 
                },
            }
        }, 
    }
</script>