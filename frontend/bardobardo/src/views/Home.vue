<template>
  <div class="home">
    <div style="text-align:center;">
      <img alt="Home banner" src="../assets/background-home.jpg" style="top:0;position:absolute;left:0%;width:100%;">
      <h1 style="z-index:9999;position:absolute;margin-top:-15%;color:#FFF;margin-left:11%;font-size:70px;">Sua QuestLine Inicia Aqui!</h1>
    </div>
    <div class="content" style="margin-top:40%;">
      <!-- Início da lista de games -->
      <v-card class="mx-auto my-12" style="background-color: #F5F6FFcc;z-index:9999;">

        <div class="row" style="padding:0% 2% 0% 2%;">
          <div class="col-md-3" style="padding:6% 0% 0% 2%;">
            <h3 style="color:#12b1ac;padding-bottom:7%;font-size:35px;">Jogos <br>Singleplayer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
              tempor incididunt ut. Quis ipsum ultrices gravida. Risus commodo
              viverra maecenas accumsan vel facilisis.
            </p>
            <a href="Games.vue" class="button" style="background-color:#E96B34;border-radius:25px;padding:5%;text-decoration:none;color:#FFF;text-align:center;margin:auto;display:block;width:160px;">
              <span>Visite a página</span>  
            </a>
          </div>

          <!-- primeiro produto -->
          <div class="col-md-3">
            <v-card :loading="loading" class="mx-auto my-12" style="background-color: #ffffffcc;">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>
            <v-img height="150" src="../assets/TheLastOfUs.jpg"></v-img>

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
                v-model="selection1"
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip style="width: 68px">Pc</v-chip>
                <v-chip style="width: 68px">Ps4</v-chip>
                <v-chip style="width: 68px">XBox</v-chip>
              </v-chip-group>
            </v-card-text>
              <v-card-actions>
                <v-btn href="" color="deep-purple lighten-2" text @click="reserve">
                  Adquira Já
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
          <!-- produto2 -->
          <div class="col-md-3">
            <v-card :loading="loading" class="mx-auto my-12" style="background-color: #ffffffcc;">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
              </template>
            <v-img height="150" src="../assets/TheLastOfUs.jpg"></v-img>

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
                v-model="selection2"
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip style="width: 68px">Pc</v-chip>
                <v-chip style="width: 68px">Ps4</v-chip>
                <v-chip style="width: 68px">XBox</v-chip>
              </v-chip-group>
            </v-card-text>
              <v-card-actions>
                <v-btn href="" color="deep-purple lighten-2" text @click="reserve">
                  Adquira Já
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
          <!-- produto3 -->
          <div class="col-md-3">
            <v-card :loading="loading" class="mx-auto my-12" style="background-color: #ffffffcc;">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>
            <v-img height="150" src="../assets/TheLastOfUs.jpg"></v-img>

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
                v-model="selection3"
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip style="width: 68px">Pc</v-chip>
                <v-chip style="width: 68px">Ps4</v-chip>
                <v-chip style="width: 68px">XBox</v-chip>
              </v-chip-group>
            </v-card-text>
            <v-card-actions>
              <v-btn href="" color="deep-purple lighten-2" text @click="reserve">
                Adquira Já
              </v-btn>
             </v-card-actions>
            </v-card>
          </div>
        </div>
      </v-card>

<!-- segunda parte -->
      <v-card class="mx-auto my-12" style="background-color: #F5F6FFcc;">
        <div class="row" style="padding:0% 2% 0% 2%;">
          <div class="col-md-3" style="padding:6% 0% 0% 2%;">
            <h3 style="color:#12b1ac;padding-bottom:7%;font-size:35px;">Jogos <br>Online</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
              tempor incididunt ut. Quis ipsum ultrices gravida. Risus commodo
              viverra maecenas accumsan vel facilisis.
            </p>
            <a href="games.vue" class="button" style="background-color:#E96B34;border-radius:25px;padding:5%;text-decoration:none;color:#FFF;text-align:center;margin:auto;display:block;width:160px;">
              <span>Visite a página</span>  
            </a>
          </div>

          <!-- primeiro produto -->
          <div class="col-md-3">
            <v-card :loading="loading" class="mx-auto my-12" style="background-color: #ffffffcc;">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>
            <v-img height="150" src="../assets/bless-online.jpg"></v-img>

            <v-card-title>Bless Online</v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0"> </v-row>
              <div class="my-4 subtitle-1">Multiplayer</div>

              <div>Ação | RPG</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>R$ 150,00 até 3x</v-card-title>

            <v-card-text>
              <v-chip-group
                v-model="selection1"
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip style="width: 68px">Pc</v-chip>
                <v-chip style="width: 68px">Ps4</v-chip>
                <v-chip style="width: 68px">XBox</v-chip>
              </v-chip-group>
            </v-card-text>
              <v-card-actions>
                <v-btn href="" color="deep-purple lighten-2" text @click="reserve">
                  Adquira Já
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
          <!-- produto2 -->
          <div class="col-md-3">
            <v-card :loading="loading" class="mx-auto my-12" style="background-color: #ffffffcc;">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
              </template>
            <v-img height="150" src="../assets/bless-online.jpg"></v-img>

            <v-card-title>Bless Online</v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0"> </v-row>
              <div class="my-4 subtitle-1">Multiplayer</div>

              <div>Ação | RPG</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>R$ 150,00 até 3x</v-card-title>

            <v-card-text>
              <v-chip-group
                v-model="selection2"
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip style="width: 68px">Pc</v-chip>
                <v-chip style="width: 68px">Ps4</v-chip>
                <v-chip style="width: 68px">XBox</v-chip>
              </v-chip-group>
            </v-card-text>
              <v-card-actions>
                <v-btn href="" color="deep-purple lighten-2" text @click="reserve">
                  Adquira Já
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
          <!-- produto3 -->
          <div class="col-md-3">
            <v-card :loading="loading" class="mx-auto my-12" style="background-color: #ffffffcc;">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>
            <v-img height="150" src="../assets/bless-online.jpg"></v-img>

            <v-card-title>Bless Online</v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0"> </v-row>
              <div class="my-4 subtitle-1">Singleplayer</div>

              <div>Ação | RPG</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>R$ 150,00 até 3x</v-card-title>

            <v-card-text>
              <v-chip-group
                v-model="selection3"
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip style="width: 68px">Pc</v-chip>
                <v-chip style="width: 68px">Ps4</v-chip>
                <v-chip style="width: 68px">XBox</v-chip>
              </v-chip-group>
            </v-card-text>
            <v-card-actions>
              <v-btn href="" color="deep-purple lighten-2" text @click="reserve">
                Adquira Já
              </v-btn>
             </v-card-actions>
            </v-card>
          </div>
        </div>
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