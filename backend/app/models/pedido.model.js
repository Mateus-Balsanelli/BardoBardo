const sql = require("./db.js");

const ProdutoModel = function(produto) {
    this.nome = produto.nome;
    this.valor = produto.valor;
    this.descricao = produto.descricao;
    this.genero = produto.genero;
    this.classificacao = produto.classificacao;
    this.plataforma = produto.plataforma;
    this.lancamento = produto.lancamento;
}

ProdutoModel.create = (produto,  result) => {
    sql.query("INSERT INTO produto SET ? ", produto, (err, res) => {
        if (err) {
            console.log("Erro:", err);
            result(err, null);
            return;
        }
        console.log("Produto criada: ", { idproduto: res.insertId, ...produto });
        result(null, { idproduto: res.insertId, ...produto });

    });
};

ProdutoModel.findById = (produtoId, result) => {
    sql.query("SELECT * FROM produto WHERE id = " + produtoId, (err,res) => {
        if(err) {
            console.log("erro:", err);
            result(null, err);
            return;
        }
        if(res.lenght){
            console.log("Produto encontrado ", res[0]);
            result(null, res[0]);
            return;
        } else {
            result({kind: "not_found"}, null)
        }
    })
};

ProdutoModel.getAll = (result) => {
    sql.query("SELECT * FROM produto", (err, res)=> {
        if(err){
            console.log("erro:", err);
            result(null, err);
            return;
        }
        console.log("produto: ",  res);
        result(null, res);
    })
};

ProdutoModel.updateById = (produtoId, produto, result) => {
    sql.query("UPDATE produto SET nome = ?, valor = ?, descricao = ?, genero = ?, classificacao = ?, plataforma = ?, lancamento = ? WHERE idproduto = ? ", [produto.nome, produto.valor, produto.descricao, produto.genero, produto.classificacao, produto.plataforma, produto.lancamento, produtoId], (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(err, null);
        } else if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
        } else {
            console.log("Produto atualizado: ", { idproduto: produtoId, ...produto });
            result(null, { idproduto: produtoId, ...produto });
        }
    })
};

ProdutoModel.remove = (produtoId, result) => {
    sql.query("DELETE FROM produtor WHERE idproduto = ?", produtoId, (err, res) => {
        if (err) {
            console.log("erro:", err);
            result(err, null);
        } else if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
        } else {
            result(null, res);
        }
    })
};

ProdutoModel.removeAll = (result) => {
    sql.query("DELETE FROM produto", (err, res) => {
        if (err) {
            console.log("erro:", err);
            result(err);
        } else {
            result(null);
        }
    })
};

module.exports = ProdutoModel;