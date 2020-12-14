<template>
  <div class="form-produto mt-3 mx-auto">
    <p class="headline">Criar Usuario</p>

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

        <v-text-field
          label="Endereo"
          v-model="endereco"
          :rules="regrasEndereco"
          required
          error-count="2"
        >
        </v-text-field>

        <v-text-field
          label="Telefone"
          v-model="telefone"
          :rules="regrasTelefone"
          required
          error-count="2"
        >
        </v-text-field>

        <v-btn :disabled="!formValido" @click="adicionarUsuario" color="primary"
          >Criar</v-btn
        >
      </v-form>
      <v-alert
        text
        v-if="msgSucesso != ''"
        dense
        color="teal"
        icon="mdi-account-check"
        border="left"
      >
        {{ msgSucesso }}
      </v-alert>
      <v-alert
        v-if="msgErro != ''"
        text
        prominent
        type="error"
        icon="mdi-account-remove"
      >
        {{ msgErro }}
      </v-alert>
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
      regrasTipo: [(v) => !!v || "Tipo de usuário precisa ser preenchido",
      ],
      regrasEndereco: [(v) => !!v || "Endereço do usuário precisa ser preenchido"
      ],
      regrasTelefone: [(v) => !!v || "Telefone do usuário precisa ser preenchido"
      ],
    };
  },
  methods: {
    adicionarUsuario: function () {
      this.msgSucesso = "";
      this.msgErro = "";
      let dados = {
        //Tem que ser igual na API
        nome: this.nome,
        nascimento: this.nascimento,
        cpf: this.cpf,
        email: this.email,
        senha: this.senha,
        tipo: this.tipo,
        endereco: this.endereco,
        telefone: this.telefone,
      };
      UsuarioService.signup(dados)
        .then((response) => {
          this.msgSucesso = response.data;
        })
        .catch((e) => {
          this.msgErro = e;
          console.log(e);
        });
    },
  },
};
</script>