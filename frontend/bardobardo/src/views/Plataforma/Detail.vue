<template>
  <div class="form-plataforma mt-3 mx-auto">
    <p class="headline">Alterar Plataforma</p>

    <div>
      <v-form v-model="formValidado">
        <v-text-field
          v-model="plataforma.nome"
          :rules="[(v) => !!v || 'Nome é um campo obrigatório']"
          label="Nome"
          required>
        </v-text-field>

        <v-text-field
          v-model="plataforma.valor"
          :rules="[(v) => !!v || 'Valor é um campo obrigatório']"
          type="number"
          label="Valor"
          required>
        </v-text-field>

        <v-text-field
          v-model="plataforma.lancamento"
          :rules="[(v) => !!v || 'Lançamento é um campo obrigatório']"
          label="Lançamento"
          required>
        </v-text-field>

        <v-text-field
          v-model="plataforma.descricao"
          :rules="[(v) => !!v || 'Descrição é um campo obrigatório']"
          label="Descrição"
          required>
        </v-text-field>

        <v-divider class="my-5"></v-divider>

        <v-btn color="error" small class="mr-2" @click="deletarPlataforma">
            Excluir
        </v-btn>

        <v-btn color="success" small @click="atualizarPlataforma">
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
import PlataformService from "../../services/PlataformService.js";
export default {
    data() {
        return {
            plataforma: null,
            msgSucesso: "",
            msgErro: ""
        }
    },
    mounted(){
        this.buscarPlataforma(this.$route.params.id);
    },
    methods: {
        buscarPlataforma(id){
            PlataformService.get(id)
            .then(response => {
                this.plataforma = response.data;
            })
            .catch(e => console.log(e));
        },
        atualizarPlataforma(){
            PlataformService.update(this.plataforma.id, this.plataforma)
            .then(response => {
                this.msgSucesso = response.data;
                this.$router.push({name: "ListPlataforms"});
            })
            .catch(e => {
                this.msgErro = e;
                console.log(e);
            });
        },
        deletarPlataforma(){
            PlataformService.delete(this.$route.params.id)
            .then((response) => {
                console.log(response);
                this.$router.push({name: "ListPlataforms"});
            })
            .catch(e => {
                console.log(e);
            })
        },
    }
    
}
</script> 