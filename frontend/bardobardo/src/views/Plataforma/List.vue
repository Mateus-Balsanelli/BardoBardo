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
        :single-select="singleSelect"
        item-key="nome"
        show-select
        class="elevation-1">>

        <template v-slot:top>
            <v-switch
            v-model="singleSelect"
            label="Single select"
            class="pa-3"
        ></v-switch>
    </template>
        
        </v-data-table>

        <v-card>
            <v-toolbar
                color="#12b1ac"
                dark
                flat
            >                
                <v-tabs
                    v-model="selected"
                    right
                    slider-color="#black"
                    background-color="#12b1ac"
                >
                    <v-tab :href="`/createplataform`"> Cadastrar Plataformas</v-tab>
                </v-tabs>

            </v-toolbar>
        </v-card>
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