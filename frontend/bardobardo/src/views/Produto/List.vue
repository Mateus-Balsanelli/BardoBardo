<template>
    <v-card class="mx-auto">
        <v-card-title>Jogos</v-card-title>

        <v-data-table
        :headers="cabecalho"
        :items="produtos">

        <template v-slot:[`item.acoes`]="{ item }">
            <!--BOTÃO COMPRAR-->
            <v-icon small class="mr-2" @click="editarProduto(item.id)">mdi-pencil</v-icon>
            <v-icon small @click="deletarProduto(item.id)">mdi-delete</v-icon>
        </template>
        
        </v-data-table>

    </v-card>
</template>

<script>
import ProductService from "../../services/ProductService.js";
export default {
    data() {
        return {
            produtos: [],
            cabecalho: [
                { text:"Nome", align:"start", sortable: true, value:"nome" },
                { text:"Valor", sortable: true, value: "valor"},
                { text:"Descrição", sortable: true, value: "descricao"},
                { text:"Gênero", sortable: true, value: "genero"},
                { text:"Classificação Indicativa", sortable: true, value: "classificacao"},
                { text:"Plataforma", sortable: true, value: "plataforma"},
                { text:"Lançamento", sortable: true, value: "lancamento"},
                { text:"Ações", value: "acoes", sortable:false }
            ]
        }
    },
    mounted(){
        this.buscarProdutos();
    },
    methods: {
        buscarProdutos(){
            ProductService.getAll()
            .then(response => {
                this.produtos = response.data.map(this.formatarProduto);
                console.log(this.produtos);
            })
            .catch(e => console.log(e));
        },
        formatarProduto(produto){
            return {
                id: produto.idprodutos,
                nome: produto.nome,
                valor: produto.valor,
                descricao: produto.descricao,
                genero: produto.genero,
                classificacao: produto.classificacao,
                plataforma: produto.plataforma,
                lancamento: produto.lancamento
            }
        },
        deletarProduto(id){
            ProductService.delete(id)
            .then((response) => {
                console.log(response);
                this.buscarProdutos();
            })
            .catch(e => {
                console.log(e);
            })
        },
        editarProduto(id){
            this.$router.push({name: "DetailProduct", params: {id: id} });
        }
    }
}
</script>