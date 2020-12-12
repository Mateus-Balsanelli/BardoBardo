<template>
    <v-card class="mx-auto">
        <v-card-title>Pedidos</v-card-title>

        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar"
            single-line
            hide-details
        ></v-text-field>

        <v-data-table
        :headers="cabecalho"
        :items="pedidos"
        :search="search">>

        <template v-slot:[`item.acoes`]="{ item }">
            <v-icon small class="mr-2" @click="editarPedido(item.id)">mdi-pencil</v-icon>
            <v-icon small @click="deletarPedido(item.id)">mdi-delete</v-icon>
        </template>
        
        </v-data-table>

    </v-card>
</template>

<script>
import PedidoService from "../../services/PedidoService.js";
export default {
    data() {
        return {
            pedidos: [],
            cabecalho: [
                { text:"Endereço", align:"start", sortable: true, value:"endereco" },
                { text:"Ações", value: "acoes", sortable:false }
            ]
        }
    },
    mounted(){
        this.buscarPedidos();
    },
    methods: {
        buscarPedidos(){
            PedidoService.getAll()
            .then(response => {
                this.pedidos = response.data.map(this.formatarPedido);
                console.log(this.pedidos);
            })
            .catch(e => console.log(e));
        },
        formatarPedido(pedido){
            return {
                id: pedido.idpedidos,
                endereco: pedido.nome
            }
        },
        deletarPedido(id){
            PedidoService.delete(id)
            .then((response) => {
                console.log(response);
                this.buscarPedidos();
            })
            .catch(e => {
                console.log(e);
            })
        },
        editarPedido(id){
            this.$router.push({name: "DetailPedido", params: {id: id} });
        }
    }
}
</script> 