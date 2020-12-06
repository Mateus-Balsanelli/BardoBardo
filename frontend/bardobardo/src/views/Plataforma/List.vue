<template>
    <v-card class="mx-auto">
        <v-card-title>Plataformas</v-card-title>

        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar"
            single-line
            hide-details
        ></v-text-field>

        <v-data-table
        :headers="cabecalho"
        :items="plataformas"
        :search="search">>

        <template v-slot:[`item.acoes`]="{ item }">
            <!--BOTÃO COMPRAR-->
            <v-icon small class="mr-2" @click="comprarPlataforma(item.id)">cart-minus</v-icon>
            <v-icon small class="mr-2" @click="editarPlataforma(item.id)">mdi-pencil</v-icon>
            <v-icon small @click="deletarPlataforma(item.id)">mdi-delete</v-icon>
        </template>
        
        </v-data-table>

    </v-card>
</template>

<script>
import PlataformService from "../../services/PlataformService.js";
export default {
    data() {
        return {
            plataformas: [],
            cabecalho: [
                { text:"Nome", align:"start", sortable: true, value:"nome" },
                { text:"Valor", sortable: true, value: "valor"},
                { text:"Lançamento", sortable: true, value: "lancamento"},
                { text:"Descrição", sortable: true, value: "descricao"},
                { text:"Ações", value: "acoes", sortable:false }
            ]
        }
    },
    mounted(){
        this.buscarPlataformas();
    },
    methods: {
        buscarPlataformas(){
            PlataformService.getAll()
            .then(response => {
                this.plataformas = response.data.map(this.formatarPlataforma);
                console.log(this.plataformas);
            })
            .catch(e => console.log(e));
        },
        formatarPlataforma(plataforma){
            return {
                id: plataforma.idplataformas,
                nome: plataforma.nome,
                valor: plataforma.valor,
                lancamento: plataforma.lancamento,
                descricao: plataforma.descricao
            }
        },
        deletarPlataforma(id){
            PlataformService.delete(id)
            .then((response) => {
                console.log(response);
                this.buscarPlataformas();
            })
            .catch(e => {
                console.log(e);
            })
        },
        editarPlataforma(id){
            this.$router.push({name: "DetailPlataform", params: {id: id} });
        }
    }
}
</script> 