<template>
  <div class="form-usuario mt-3 mx-auto">
    <p class="headline">Alterar Usuario</p>

    <div>
        <!--FORMULÁRIO-->
      <v-form v-model="formValido">

        <v-text-field
          label="Nome"
          v-model="nome"
          :rules="regrasNome"
          required
          error-count="2"
        >
        </v-text-field>

        <v-text-field
          label="Nascimento"
          v-model="nascimento"
          :rules="regrasNascimento"
          required
          error-count="2"
        >
        </v-text-field>

        <v-text-field
          label="CPF"
          v-model="cpf"
          :rules="regrasCPF"
          required
          error-count="2"
        >
        </v-text-field>

        <v-text-field
          label="E-mail"
          v-model="email"
          :rules="regrasEmail"
          required
          error-count="2"
        >
        </v-text-field>

        <v-text-field
          label="Senha"
          v-model="senha"
          min="8"
          counter
          :rules="regrasSenha"
          type="password"
          required
          error-count="2"
        >
        </v-text-field>

        <v-select
          :items="itens"
          v-model="tipo"
          :rules="regrasTipo"
          label="Tipo de usuário"
          item-text="nome"
          item-value="valor"
        >
        </v-select>

        <v-divider class="my-5"></v-divider>

        <v-btn color="error" small class="mr-2" @click="deletarUsuario">
            Excluir
        </v-btn>

        <v-btn color="success" small @click="atualizarUsuario">
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
import UsuarioService from "../../services/UsuarioService.js";
export default {
    data() {
        return {
            nome: "",
      nascimento: "",
      cpf: "",
      email: "",
      senha: "",
      tipo: "",
      formValido: "",
      msgSucesso: "",
      msgErro: "",
      itens: [
        { nome: "Administrador", valor: "1" },
        { nome: "Cliente", valor: "2" },
      ],
      regrasNome: [(v) => !!v || "Nome do usuário precisa ser preenchido"
      ],
      regrasNascimento: [
        (v) => !!v || "Nascimento precisa ser preenchido utilizando pontos para separar mês e ano",
        (v) => /\d{2}\.\d{2}\.\d{4}$/.test(v) || "Nascimento é inválido",
      ],
      regrasCPF: [
        (v) => !!v || "CPF precisa ser preenchido utilizando pontos ",
        (v) => /\d{3}\.\d{3}\.\d{3}\.\d{2}$/.test(v) || "CPF é inválido",
      ],
      regrasEmail: [
        (v) => !!v || "E-mail precisa ser preenchido",
        (v) => /.+@.+/.test(v) || "E-mail é inválido",
      ],
      regrasSenha: [
        (v) => !!v || "Senha precisa ser preenchida",
        (v) =>
          (v && v.length >= 8) || "Senha precisa ter ao menos 8 caracteres",
      ],
      regrasTipo: [(v) => !!v || "Tipo de usuário precisa ser preenchido"],
    };
  },
    mounted(){
        this.buscarUsuario(this.$route.params.id);
    },
    methods: {
        buscarUsuario(id){
            UsuarioService.get(id)
            .then(response => {
                this.usuario = response.data;
            })
            .catch(e => console.log(e));
        },
        atualizarUsuario(){
            UsuarioService.update(this.usuario.id, this.usuario)
            .then(response => {
                this.msgSucesso = response.data;
                this.$router.push({name: "ListUsers"});
            })
            .catch(e => {
                this.msgErro = e;
                console.log(e);
            });
        },
        deletarUsuario(){
            UsuarioService.delete(this.$route.params.id)
            .then((response) => {
                console.log(response);
                this.$router.push({name: "ListUsers"});
            })
            .catch(e => {
                console.log(e);
            })
        },
    }
    
}
</script> 