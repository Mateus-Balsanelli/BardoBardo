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

        <v-toolbar-title>Bar Do Bardo</v-toolbar-title>
           
        <v-spacer>
          <template>
            <v-row justify="space-around">
              <v-menu
                v-for="([text, rounded], index) in btns"
                :key="text"
                :rounded="rounded"
                offset-y
              >
                <template v-slot:activator="{ attrs, on }">
                  <v-btn
                    :color="colors[index]"
                    class="white--text ma-5"
                    v-bind="attrs"
                    v-on="on"
                  >
                    {{ text }}
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item
                    v-for="item in items"
                    :key="item"
                    link
                  >
                    <v-list-item-title v-text="item"></v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-row>
          </template>

          <!-- 
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
          </v-tabs>-->
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
<script>
  export default {
    data: () => ({
      btns: [
        ['Home', 'lg'],
        ['Usuário', 'lg'],
        ['Jogos', 'lg'],
        ['Plataforma', 'lg'],
        ['Pedidos', 'lg'],
        ['Inventário', 'lg'],
      ],
      colors: ['teal darken-1','teal darken-1','teal darken-1','teal darken-1','teal darken-1','teal darken-1'],
      items: ['Listar Jogos','Cadastrar Jogos','Listar Usuários','Cadastrar Usuário','Listar Plataformas','Cadastrar Plataformas'],
      link: ['/createproduct']
    }),
  }
</script>
