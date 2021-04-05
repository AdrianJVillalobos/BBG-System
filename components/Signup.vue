<template>
  <div >
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center" class="mt-10 mr-0 mb-0 ml-0">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-10">
                        <h1
                          class="text-center display-2 teal--text text--accent-3"
                        >Sign in to BBG System</h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>mdi-google</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4">Ensure your email for registration</h4>
                        <v-form @submit.prevent="handleSubmit">
                          <v-text-field
                            label="Email"
                           
                            prepend-icon="mdi-email"
                            type="text"
                            color="teal accent-3"
                          />

                          <v-text-field
                            id="password"
                            label="Password"
                            
                            prepend-icon="mdi-lock"
                            type="password"
                            color="teal accent-3"

                          />
                          <div class="text-center my-3">
                            <v-btn rounded color="teal accent-3" dark>SIGN IN</v-btn>
                          </div>
                        </v-form>
                        <h4 class="text-center mt-4">Forgot your password ?</h4>
                      </v-card-text>
                      
                        
                      
                    </v-col>
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Hello There!</h1>
                        <h5
                          class="text-center my-3"
                        >Enter your personal details and start working with us</h5>
                      </v-card-text>
                      <div class="text-center my-3">
                        <v-btn rounded outlined dark @click="step++">SIGN UP</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Welcome Back!</h1>
                        <h5
                          class="text-center my-3"
                        >To Keep connected with us please login with your personal info</h5>
                      </v-card-text>
                      <div class="text-center my-3">
                        <v-btn rounded outlined dark @click="step--">Sign in</v-btn>
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 teal--text text--accent-3">Create Account</h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>mdi-google</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4">Ensure your email for registration</h4>
                        <v-form @submit.prevent="handleSubmit">
                          <v-text-field
                            label="Name"
                            v-model="displayName"
                            prepend-icon="mdi-account-check"
                            type="text"
                            color="teal accent-3"
                          />
                          <v-text-field
                            label="Email"
                            v-model="email"
                            prepend-icon="mdi-email"
                            type="text"
                            color="teal accent-3"
                          />

                          <v-text-field
                            id="password"
                            label="Password"
                            v-model="password"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="teal accent-3"
                          />
                          <div class="error">{{error}}</div>
                          <div class="text-center my-3">
                            <v-btn rounded color="teal accent-3" dark>SIGN UP</v-btn>
                          </div> 
                        </v-form>
                      </v-card-text>
                      
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import useSignup from '../composable/useSignup'
import '../plugins/installCompositionApi'
import {ref} from "@vue/composition-api"

export default {
  setup() {
    const { error, signup } = useSignup()


    const displayName = ref('')
    const email = ref('')
    const password = ref('')
    //const emailIn = ref('')
    //const passwordIn = ref('')  

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value)
      console.log('user signed up')
    }

    return {displayName, email, password, handleSubmit, error}

  },
  data: () => ({
    step: 1
  }),
 
};
</script>