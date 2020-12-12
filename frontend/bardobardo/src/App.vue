<template>
  <v-app>
    <!--
    <v-navigation-drawer app>
    </v-navigation-drawer>-->
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
            <v-tab :href="`/`">Home</v-tab>
            <v-tab :href="`/createproduct`">Cadastrar Jogos</v-tab>
            <v-tab :href="`/listproduct`">Listar Jogos</v-tab>
            <v-tab :href="`/createplataform`">Cadastrar Plataforma</v-tab>
            <v-tab :href="`/listplataform`">Listar Plataforma</v-tab>
            <v-tab :href="`/createuser`">Cadastrar usuário</v-tab>
            <v-tab :href="`/listuser`">Listar usuário</v-tab>
            <v-tab :href="`/listpedido`">Pedidos</v-tab>
            <v-tab :href="`/createinventario`">Cadastrar inventário</v-tab>
            <v-tab :href="`/listinventario`">Inventário</v-tab>
          </v-tabs>
        </v-spacer>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
  </v-card>

    <v-main>
      <v-container>
        <router-view>
        </router-view>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer style="background-color:#12b1ac;text-align:center;display:block;">
      <div>
        <p style="color:#FFF;padding-top:1%;">© Copyright 2020<br>Carlos - João - Matheus</p>
      </div>
    </v-footer>

  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>