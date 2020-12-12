<template>
  <div class="form-inventario mt-3 mx-auto">
    <p class="headline">Adicionar Inventario</p>

    <div>
      <v-form v-model="formValidado">
        <v-text-field
          v-model="nome"
          :rules="[(v) => !!v || 'Nome é um campo obrigatório']"
          label="Nome"
          required>
        </v-text-field>

        <v-text-field
          v-model="aquisicao"
          :rules="[(v) => !!v || 'Aquisição é um campo obrigatório']"
          label="Aquisição"
          required>
        </v-text-field>

        <v-text-field
          v-model="valor"
          :rules="[(v) => !!v || 'Valor é um campo obrigatório']"
          type="number"
          label="Valor"
          required>
        </v-text-field>

        <v-btn
          :disabled="!formValidado"
          color="primary"
          class="mt-3"
          @click="adicionarInventario"
          >Salvar</v-btn>
      </v-form>

      <v-alert text
        v-if="msgSucesso != ''"
        color="teal"
        icon="mdi-account-check">
        {{ msgSucesso }}
      </v-alert>

      <v-alert v-if="msgErro != ''" text type="error" icon="mdi-account-remove">
        {{ msgErro }}
      </v-alert>
    </div>
  </div>
</template>

<script>
import InventarioService from '../../services/InventarioService.js'
export default {
    name:"create-inventario",
    data() {
        return {
            nome: "",
            aquisicao: "",
            valor: "",
            formValidado: "",
            msgSucesso: "",
            msgErro: ""
        }
    },
    methods: {
        adicionarInventario(){
            var inventario = {
                nome: this.nome,
                aquisicao: this.aquisicao,
                valor: this.valor
            }
            InventarioService.create(inventario)
            .then(response => {
                this.msgSucesso = "O inventário " +  response.data.nome + " foi criada com sucesso!";
                
            })
            .catch(e => {
                this.msgErro = e;
                console.log(e);
            })
        } 
    }
    
}
</script> 