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
              Se adventure em mundos incríveis em uma experiência Singleplayer imperdível. <br>
              Escolha seu gênero favorito e divirta-se nas histórias envolventes e frenéticas que estas grandes empresas desenvolveram em pró da sua satisfação.
            </p>
            <a href="/listproduct" class="button" style="background-color:#E96B34;border-radius:25px;padding:5%;text-decoration:none;color:#FFF;text-align:center;margin:auto;display:block;width:160px;">

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


            <v-card-title>R$ 70,00 à Vista </v-card-title>
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
                <v-btn href="/listproduct" color="deep-purple lighten-2" text @click="reserve">
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
            <v-img height="150" src="../assets/cyberpunk.jpg"></v-img>

            <v-card-title>CyberPunk 2077</v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0"> </v-row>
              <div class="my-4 subtitle-1">Singleplayer</div>

              <div>RPG | ação | Mundo aberto</div>
              
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
                <v-btn href="/listproduct" color="deep-purple lighten-2" text @click="reserve">
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
            <v-img height="150" src="../assets/shadowOfTheColossus.jpg"></v-img>

            <v-card-title>Shadow of the Colossus</v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0"> </v-row>
              <div class="my-4 subtitle-1">Singleplayer</div>

              <div>ação | aventura | Puzzle</div>

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
              <v-btn href="/listproduct" color="deep-purple lighten-2" text @click="reserve">

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
              Jogue junto com seus amigos ou outros jogadores random, participe de batalhas únicas do gênero de seu maior gosto.<br>
              Faça sua trilha em grandes MMO's RPG estilo action e torne-se o número 1 de seu servidor.
            </p>
            <a href="/listproduct" class="button" style="background-color:#E96B34;border-radius:25px;padding:5%;text-decoration:none;color:#FFF;text-align:center;margin:auto;display:block;width:160px;">
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

              <div>Ação | MMO-RPG</div>

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
                <v-btn href="/listproduct" color="deep-purple lighten-2" text @click="reserve">

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
            <v-img height="150" src="../assets/CoD.jpg"></v-img>

            <v-card-title>Call of Duty</v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0"> </v-row>
              <div class="my-4 subtitle-1">Multiplayer</div>

              <div>Shooter em 1ª Pessoa</div>

            </v-card-text>

            <v-divider class="mx-4"></v-divider>


            <v-card-title>R$ 99,00 até 2x</v-card-title>
            
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
                <v-btn href="/listproduct" color="deep-purple lighten-2" text @click="reserve">

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

            <v-img height="150" src="../assets/fallGuys.jpg"></v-img>

            <v-card-title>Fall Guys</v-card-title>


            <v-card-text>
              <v-row align="center" class="mx-0"> </v-row>
              <div class="my-4 subtitle-1">Singleplayer</div>
              
              <div>Competitivo | MMO | Gincana</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>R$ 39,90 à Vista</v-card-title>

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
              <v-btn href="/listproduct" color="deep-purple lighten-2" text @click="reserve">

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