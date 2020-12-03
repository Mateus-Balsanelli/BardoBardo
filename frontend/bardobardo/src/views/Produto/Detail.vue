<template>
  <div class="form-produto mt-3 mx-auto">
    <p class="headline">Alterar Jogo</p>

    <div>
      <v-form v-model="formValidado">
        <v-text-field
          v-model="produto.nome"
          :rules="[(v) => !!v || 'Nome é um campo obrigatório']"
          label="Nome"
          required>
        </v-text-field>

        <v-text-field
          v-model="produto.valor"
          :rules="[(v) => !!v || 'Valor é um campo obrigatório']"
          type="number"
          label="Valor"
          required>
        </v-text-field>

        <v-text-field
          v-model="produto.descricao"
          :rules="[(v) => !!v || 'Descrição é um campo obrigatório']"
          label="Descrição"
          required>
        </v-text-field>

        <v-text-field
          v-model="produto.genero"
          :rules="[(v) => !!v || 'Gênero é um campo obrigatório']"
          label="Gênero"
          required>
        </v-text-field>

        <v-text-field
          v-model="produto.classificacao"
          :rules="[(v) => !!v || 'Classificação Indicativa é um campo obrigatório']"
          label="Classificação Indicativa"
          required>
        </v-text-field>

        <v-text-field
          v-model="produto.plataforma"
          :rules="[(v) => !!v || 'Plataforma é um campo obrigatório']"
          label="Plataforma"
          required>
        </v-text-field>

        <v-text-field
          v-model="produto.lancamento"
          :rules="[(v) => !!v || 'Lançamento é um campo obrigatório']"
          label="Lançamento"
          required>
        </v-text-field>

        <v-divider class="my-5"></v-divider>

        <v-btn color="error" small class="mr-2" @click="deletarProduto">
            Excluir
        </v-btn>

        <v-btn color="success" small @click="atualizarProduto">
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
import ProductService from "../../services/ProductService.js";
export default {
    data() {
        return {
            produto: null,
            msgSucesso: "",
            msgErro: ""
        }
    },
    mounted(){
        this.buscarProduto(this.$route.params.id);
    },
    methods: {
        buscarProduto(id){
            ProductService.get(id)
            .then(response => {
                this.produto = response.data;
            })
            .catch(e => console.log(e));
        },
        atualizarProduto(){
            ProductService.update(this.produto.id, this.produto)
            .then(response => {
                this.msgSucesso = response.data;
                this.$router.push({name: "ListProducts"});
            })
            .catch(e => {
                this.msgErro = e;
                console.log(e);
            });
        },
        deletarProduto(){
            ProductService.delete(this.$route.params.id)
            .then((response) => {
                console.log(response);
                this.$router.push({name: "ListProducts"});
            })
            .catch(e => {
                console.log(e);
            })
        },
    }
    
}
</script>