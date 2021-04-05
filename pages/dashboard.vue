<template>
  <div >

    <v-main class="#16aac4">
      <v-container>
        <v-row >
          <v-flex class="mt-2" xs12 md3 sm3>
            <v-shee8 rounded="lg">
               <v-card
                  class="mx-20"
                  max-width="300"
                  tile
                >
                  <v-list rounded>
                    <v-subheader>FILTER</v-subheader>
                    <v-list-item-group
                      v-model="selectedItem"
                      color="primary"
                    >
                      <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
                      >
                        <v-list-item-icon>
                          <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-card>
            </v-shee8>
          </v-flex>

          
          <v-flex class="mx-2 my-0" xs12 md8 sm8>
              <loadingCards />
          </v-flex>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import loadingCards from '../components/loadingCards'  

export default {
  components: { 
    loadingCards
  
  },
   data: () => ({
      selectedItem: 1,
      items: [
        { text: 'by patient', icon: 'mdi-alphabetical-variant' },
        { text: 'by clinic', icon: 'mdi-office-building-marker' },
        { text: 'by priority', icon: 'mdi-pulse' },
      ],
    }),
}
</script>