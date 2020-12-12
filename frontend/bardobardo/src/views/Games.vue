<template>
  <div class="games">
    <div>
      <img alt="Games banner" src="../assets/banner.png" style="top:0;position:absolute;left:0%;width:100%;">
    </div>

    <!-- Singleplayer -->
    <v-card class="mx-auto my-12" style="background-color: #F5F6FFcc;">

      <div class="row" style="padding-right: 2%;padding-left:2%;">
        <div class="col-md-12">
          <h2 style="text-align:center;color:#12b1ac;font-size:42px;">Singleplayer</h2>
        </div>
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
              <v-chip style="width: 65px">Pc</v-chip>
              <v-chip style="width: 65px">Ps4</v-chip>
              <v-chip style="width: 65px">XBox</v-chip>
            </v-chip-group>
          </v-card-text>
            <v-card-actions>
              <v-btn href="" color="deep-purple lighten-2" text @click="reserve">
                Adquira Já
              </v-btn>
            </v-card-actions>
          </v-card>
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
              <v-chip style="width: 65px">Pc</v-chip>
              <v-chip style="width: 65px">Ps4</v-chip>
              <v-chip style="width: 65px">XBox</v-chip>
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
              <v-chip style="width: 65px">Pc</v-chip>
              <v-chip style="width: 65px">Ps4</v-chip>
              <v-chip style="width: 65px">XBox</v-chip>
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
              <v-chip style="width: 65px">Pc</v-chip>
              <v-chip style="width: 65px">Ps4</v-chip>
              <v-chip style="width: 65px">XBox</v-chip>
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

    <!-- Online -->
    <v-card class="mx-auto my-12" style="background-color: #F5F6FFcc;">
      <div class="row" style="padding-right:2%;padding-left:2%;">
        <div class="col-md-12">
          <h2 style="text-align:center;color:#12b1ac;font-size:42px;">Online</h2>
        </div>
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
              <v-chip style="width: 65px">Pc</v-chip>
              <v-chip style="width: 65px">Ps4</v-chip>
              <v-chip style="width: 65px">XBox</v-chip>
            </v-chip-group>
          </v-card-text>
            <v-card-actions>
              <v-btn href="" color="deep-purple lighten-2" text @click="reserve">
                Adquira Já
              </v-btn>
            </v-card-actions>
          </v-card>
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
              <v-chip style="width: 65px">Pc</v-chip>
              <v-chip style="width: 65px">Ps4</v-chip>
              <v-chip style="width: 65px">XBox</v-chip>
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
              <v-chip style="width: 65px">Pc</v-chip>
              <v-chip style="width: 65px">Ps4</v-chip>
              <v-chip style="width: 65px">XBox</v-chip>
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
              <v-chip style="width: 65px">Pc</v-chip>
              <v-chip style="width: 65px">Ps4</v-chip>
              <v-chip style="width: 65px">XBox</v-chip>
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
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Games',
  components: {

}
}
</script>
