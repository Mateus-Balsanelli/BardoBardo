<template>
  <v-layout flex align-center justify-center fill-height>
    <v-flex xs12 sm4 align-center justify-center>
      <v-card>
        <v-card-text class="pt-2">
          <v-form v-model="formValido">
            <v-text-field
              label="E-mail"
              v-model="email"
              required
            >
            </v-text-field>
            <v-text-field
              label="Senha"
              v-model="senha"
              min="8"
              counter
              type="password"
              required
            >
            </v-text-field>

            <v-btn
              :disabled="!formValido"
              @click="login"
              color="primary"
              >Login</v-btn
            >
          </v-form>
        </v-card-text>
        <v-alert v-if="msgErro != ''" text prominent type="error" icon="mdi-account-remove">
        {{msgErro}}
        </v-alert>
      </v-card>
      <v-card>
            <v-toolbar
                color="#12b1ac"
                dark
                flat
            >                
                <v-tabs
                    v-model="model"
                    right
                    slider-color="#black"
                    background-color="#12b1ac"
                >
                    <v-tab :href="`/listuser`">Listar usuários</v-tab>
                    <v-tab :href="`/createuser`"> Cadastrar usuários</v-tab>
                </v-tabs>

            </v-toolbar>
        </v-card>
    </v-flex>
  </v-layout>
</template>
<script>

</script>