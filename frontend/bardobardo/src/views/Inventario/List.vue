<template>
    <v-card class="mx-auto">
        <v-card-title>Inventario</v-card-title>

        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar"
            single-line
            hide-details
        ></v-text-field>

        <v-data-table
        :headers="cabecalho"
        :items="inventarios"
        :search="search">>

        <template v-slot:[`item.acoes`]="{ item }">
            <v-icon small class="mr-2" @click="editarInventario(item.id)">mdi-pencil</v-icon>
            <v-icon small @click="deletarInventario(item.id)">mdi-delete</v-icon>
        </template>
        
        </v-data-table>

    </v-card>
</template>

<script>
import InventarioService from "../../services/InventarioService.js";
export default {
    data() {
        return {
            inventarios: [],
            cabecalho: [
                { text:"Nome", align:"start", sortable: true, value:"nome" },
                { text:"Aquisição", sortable: true, value: "aquisicao"},
                { text:"Valor", sortable: true, value: "valor"},
                { text:"Ações", value: "acoes", sortable:false }
            ]
        }
    },
    mounted(){
        this.buscarInventarios();
    },
    methods: {
        buscarInventarios(){
            InventarioService.getAll()
            .then(response => {
                this.inventarios = response.data.map(this.formatarInventario);
                console.log(this.inventarios);
            })
            .catch(e => console.log(e));
        },
        formatarInventario(inventario){
            return {
                id: inventario.idinventarios,
                nome: inventario.nome,
                aquisicao: inventario.aquisicao,
                valor: inventario.valor
            }
        },
        deletarInventario(id){
            InventarioService.delete(id)
            .then((response) => {
                console.log(response);
                this.buscarInventarios();
            })
            .catch(e => {
                console.log(e);
            })
        },
        editarInventario(id){
            this.$router.push({name: "DetailInventario", params: {id: id} });
        }
    }
}
</script> 