<template>
  <div class="form-inventario mt-3 mx-auto">
    <p class="headline">Alterar Inventario</p>

    <div>
      <v-form v-model="formValidado">
        <v-text-field
          v-model="inventario.nome"
          :rules="[(v) => !!v || 'Nome é um campo obrigatório']"
          label="Nome"
          required>
        </v-text-field>

        <v-text-field
          v-model="inventario.aquisicao"
          :rules="[(v) => !!v || 'Aquisição é um campo obrigatório']"
          label="Aquisição"
          required>
        </v-text-field>

        <v-text-field
          v-model="inventario.valor"
          :rules="[(v) => !!v || 'Valor é um campo obrigatório']"
          type="number"
          label="Valor"
          required>
        </v-text-field>

        <v-divider class="my-5"></v-divider>

        <v-btn color="error" small class="mr-2" @click="deletarInventario">
            Excluir
        </v-btn>

        <v-btn color="success" small @click="atualizarInventario">
            Atualizar 
        </v-btn>

        <v-alert text
            v-if="msgSucesso != ''"
            color="teal"
            icon="mdi-account-check">
            {{ msgSucesso }}
        </v-alert>

        <v-alert v-if="msgErro != ''" text type="error" icon="mdi-account-remove">
            {{ msgErro }}
        </v-alert>

      </v-form>
    </div>
  </div>
    
</template>

<script>
import InventarioService from "../../services/InventarioService.js";
export default {
    data() {
        return {
            inventario: null,
            msgSucesso: "",
            msgErro: ""
        }
    },
    mounted(){
        this.buscarInventario(this.$route.params.id);
    },
    methods: {
        buscarInventario(id){
            InventarioService.get(id)
            .then(response => {
                this.inventario = response.data;
            })
            .catch(e => console.log(e));
        },
        atualizarInventario(){
            InventarioService.update(this.inventario.id, this.inventario)
            .then(response => {
                this.msgSucesso = response.data;
                this.$router.push({name: "ListInventarios"});
            })
            .catch(e => {
                this.msgErro = e;
                console.log(e);
            });
        },
        deletarInventario(){
            InventarioService.delete(this.$route.params.id)
            .then((response) => {
                console.log(response);
                this.$router.push({name: "ListInventarios"});
            })
            .catch(e => {
                console.log(e);
            })
        },
    }
    
}
</script> 