<template>
  <div class="home">
    <div>
      <img alt="Home banner" src="../assets/banner.png" style="top:0;position:absolute;left:0%;width: 100%;">
    </div>

    <div class="content" style="margin-top:60%;">
      <!-- Início da lista de games -->
      <v-card :loading="loading" class="mx-auto my-12">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <div class="row">
          <div class="cold-md-3">
            <h3>Jogos Singleplayer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
              tempor incididunt ut. Quis ipsum ultrices gravida. Risus commodo
              viverra maecenas accumsan vel facilisis.
            </p>
            <a href="games.vue" class="button">
              <span>Visite a página</span>
            </a>
          </div>

          <!-- primeiro produto -->
          <div class="col-md-3">
            <v-img height="250" src="../assets/TheLastOfUs.jpg"></v-img>

            <v-card-title>The Last of Us</v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0"> </v-row>
              <div class="my-4 subtitle-1">Singleplayer</div>

              <div>Ação | Apocalipse</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>R$ 200,00 até 3x</v-card-title>

            <v-card-text>
              <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip style="width: 70px">Pc</v-chip>
                <v-chip style="width: 70px">Ps4</v-chip>
                <v-chip style="width: 70px">XBox</v-chip>
              </v-chip-group>
            </v-card-text>
          </div>
          <!-- produto2 -->
          <div class="col-md-3">
            <v-img height="250" src="../assets/TheLastOfUs.jpg"></v-img>

            <v-card-title>The Last of Us</v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0"> </v-row>
              <div class="my-4 subtitle-1">Singleplayer</div>

              <div>Ação | Apocalipse</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>R$ 200,00 até 3x</v-card-title>

            <v-card-text>
              <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip style="width: 70px">Pc</v-chip>
                <v-chip style="width: 70px">Ps4</v-chip>
                <v-chip style="width: 70px">XBox</v-chip>
              </v-chip-group>
            </v-card-text>
          </div>
          <!-- primeiro produto -->
          <div class="col-md-3">
            <v-img height="250" src="../assets/TheLastOfUs.jpg"></v-img>

            <v-card-title>The Last of Us</v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0"> </v-row>
              <div class="my-4 subtitle-1">Singleplayer</div>

              <div>Ação | Apocalipse</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>R$ 200,00 até 3x</v-card-title>

            <v-card-text>
              <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip style="width: 70px">Pc</v-chip>
                <v-chip style="width: 70px">Ps4</v-chip>
                <v-chip style="width: 70px">XBox</v-chip>
              </v-chip-group>
            </v-card-text>
          </div>
        </div>
        <v-card-actions>
          <v-btn color="deep-purple lighten-2" text @click="reserve">
            Adquira Já
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>
