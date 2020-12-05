<template>
  <v-app>
    <!-- 
    <v-navigation-drawer app>

    </v-navigation-drawer>
    -->
    <v-card>
      <v-toolbar
        color="#12b1ac"
        dark
        flat
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>BarDo Bardo</v-toolbar-title>

        <v-spacer>
          <v-tabs
            v-model="model"
            right
            slider-color="#black"
            background-color="#12b1ac"
          >
            <v-tab :href="`#tab-`">Home</v-tab>
            <v-tab :href="`#tab-`">Jogos</v-tab>
            <v-tab :href="`#tab-`">Plataformas</v-tab>
            <v-tab :href="`#tab-`">Contato</v-tab>
            <v-tab :href="`#tab-`">Login</v-tab>
          </v-tabs>
        </v-spacer>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

      </v-toolbar>
  </v-card>

    <v-main>
      <v-container>
        <router-view></router-view>

      </v-container>
    </v-main>

    <v-footer>
      
    </v-footer>

  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    
  },

};

</script>
