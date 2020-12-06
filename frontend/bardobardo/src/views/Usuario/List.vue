<template>
    <v-card class="mx-auto">
        <v-card-title>Usuarios</v-card-title>

        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar"
            single-line
            hide-details
        ></v-text-field>

        <v-data-table
        :headers="cabecalho"
        :items="usuarios"
        :search="search">

        <template v-slot:[`item.acoes`]="{ item }">
            <v-icon small class="mr-2" @click="editarUsuario(item.id)">mdi-pencil</v-icon>
            <v-icon small @click="deletarUsuario(item.id)">mdi-delete</v-icon>
        </template>
        
        </v-data-table>

    </v-card>
</template>

<script>
import UsuarioService from "../../services/UsuarioService.js";
export default {
    data() {
        return {
            usuarios: [],
            cabecalho: [
                { text:"Nome", align:"start", sortable: true, value:"nome" },
                { text:"Nascimento", sortable: true, value: "nascimento"},
                { text:"CPF", sortable: true, value: "cpf"},
                { text:"Email", sortable: true, value: "email"},
                { text:"Senha", sortable: true, value: "senha"},
                { text:"Tipo", sortable: true, value: "tipo"},
                { text:"Ações", value: "acoes", sortable:false }
            ]
        }
    },
    mounted(){
        this.buscarUsuarios();
    },
    methods: {
        buscarUsuarios(){
            UsuarioService.getAll()
            .then(response => {
                this.usuarios = response.data.map(this.formatarUsuario);
                console.log(this.usuarios);
            })
            .catch(e => console.log(e));
        },
        formatarUsuario(usuario){
            return {
                id: usuario.idusuarios,
                nome: usuario.nome,
                nascimento: usuario.nascimento,
                cpf: usuario.cpf,
                email: usuario.email,
                senha: usuario.senha,
                tipo: usuario.tipo
            }
        },
        deletarUsuario(id){
            UsuarioService.delete(id)
            .then((response) => {
                console.log(response);
                this.buscarUsuarios();
            })
            .catch(e => {
                console.log(e);
            })
        },
        editarUsuario(id){
            this.$router.push({name: "DetailUser", params: {id: id} });
        }
    }
}
</script>