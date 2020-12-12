<template>
  <div class="form-plataforma mt-3 mx-auto">
    <p class="headline">Adicionar Plataforma</p>

    <div>
      <v-form v-model="formValidado">
        <v-text-field
          v-model="nome"
          :rules="[(v) => !!v || 'Nome é um campo obrigatório']"
          label="Nome"
          required>
        </v-text-field>

        <v-text-field
          v-model="valor"
          :rules="[(v) => !!v || 'Valor é um campo obrigatório']"
          type="number"
          label="Valor"
          required>
        </v-text-field>

        <v-text-field
          v-model="lancamento"
          :rules="[(v) => !!v || 'Lançamento é um campo obrigatório']"
          label="Lançamento"
          required>
        </v-text-field>

        <v-text-field
          v-model="descricao"
          :rules="[(v) => !!v || 'Descrição é um campo obrigatório']"
          label="Descrição"
          required>
        </v-text-field>

        <v-btn
          :disabled="!formValidado"
          color="primary"
          class="mt-3"
          @click="adicionarPlataforma"
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
import PlataformService from '../../services/PlataformService.js'
export default {
    name:"create-plataform",
    data() {
        return {
            nome: "",
            valor: "",
            lancamento: "",
            descricao: "",
            formValidado: "",
            msgSucesso: "",
            msgErro: ""
        }
    },
    methods: {
        adicionarPlataforma(){
            var plataforma = {
                nome: this.nome,
                valor: this.valor,
                lancamento: this.lancamento,
                descricao: this.descricao
            }
            PlataformService.create(plataforma)
            .then(response => {
                this.msgSucesso = "A plataforma " +  response.data.nome + " foi criada com sucesso!";
                
            })
            .catch(e => {
                this.msgErro = e;
                console.log(e);
            })
        } 
    }
    
}
</script> 