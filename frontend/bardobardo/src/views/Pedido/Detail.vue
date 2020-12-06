<template>
  <div class="form-pedido mt-3 mx-auto">
    <p class="headline">Alterar Pedido</p>

    <div>
      <v-form v-model="formValidado">
        <v-text-field
          v-model="pedido.endereco"
          :rules="[(v) => !!v || 'Endereço é um campo obrigatório']"
          label="Endereço"
          required>
        </v-text-field>

        <v-divider class="my-5"></v-divider>

        <v-btn color="error" small class="mr-2" @click="deletarPedido">
            Excluir
        </v-btn>

        <v-btn color="success" small @click="atualizarPedido">
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
import PedidoService from "../../services/PedidoService.js";
export default {
    data() {
        return {
            pedido: null,
            msgSucesso: "",
            msgErro: ""
        }
    },
    mounted(){
        this.buscarPedido(this.$route.params.id);
    },
    methods: {
        buscarPedido(id){
            PedidoService.get(id)
            .then(response => {
                this.pedido = response.data;
            })
            .catch(e => console.log(e));
        },
        atualizarPedido(){
            PedidoService.update(this.pedido.id, this.pedido)
            .then(response => {
                this.msgSucesso = response.data;
                this.$router.push({name: "ListPedidos"});
            })
            .catch(e => {
                this.msgErro = e;
                console.log(e);
            });
        },
        deletarPedido(){
            PedidoService.delete(this.$route.params.id)
            .then((response) => {
                console.log(response);
                this.$router.push({name: "ListPedidos"});
            })
            .catch(e => {
                console.log(e);
            })
        },
    }
    
}
</script> 