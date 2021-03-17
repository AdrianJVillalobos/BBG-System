<template>
  <div >

    <v-main class="#16aac4">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
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
            </v-sheet>
          </v-col>

          <v-row  
            v-for="n in 3"
            :key="n"
            class="mx-2 my-0"
            row="2"
          >
            <div >
              <loadingCards />
              <loadingCards />
              <loadingCards />
              
              <!-- content -->
            </div>
          </v-row>
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
        { text: 'By Alphabet', icon: 'mdi-alphabetical-variant' },
        { text: 'By Clinic', icon: 'mdi-office-building-marker' },
        { text: 'By Priority', icon: 'mdi-pulse' },
      ],
    }),
}
</script>

