<template>
  <div class="form-pedido mt-3 mx-auto">
    <p class="headline">Efetuar Pedido</p>

    <div>
      <v-form v-model="formValidado">
        <v-text-field
          v-model="endereco"
          :rules="[(v) => !!v || 'Endereço é um campo obrigatório']"
          label="Endereço"
          required>
        </v-text-field>

        <v-btn
          :disabled="!formValidado"
          color="primary"
          class="mt-3"
          @click="adicionarPedido"
          >Comprar</v-btn>
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
import PedidoService from '../../services/PedidoService.js'
export default {
    name:"create-pedido",
    data() {
        return {
            endereco: "",
            formValidado: "",
            msgSucesso: "",
            msgErro: ""
        }
    },
    methods: {
        adicionarPedido(){
            var pedido = {
                endereco: this.endereco
            }
            PedidoService.create(pedido)
            .then(response => {
                this.msgSucesso = "O pedido " +  response.data.nome + " foi feito com sucesso!";
                
            })
            .catch(e => {
                this.msgErro = e;
                console.log(e);
            })
        }
    }
    
}
</script>  