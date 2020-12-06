const sql = require("./db.js");

const PedidoModel = function(pedido) {
    this.produto_idproduto = pedido.produto_idproduto;
    this.usuario_idusuario = pedido.usuario_idusuario;
    this.plataforma_idplataforma = pedido.plataforma_idplataforma; 
    this.dataPedido = pedido.dataPedido; 
    this.endereco = pedido.endereco; 
    this.dataEntrega = pedido.dataEntrega;
}

PedidoModel.create = (pedido,  result) => {
    sql.query("INSERT INTO pedido SET ? ", pedido, (err, res) => {
        if (err) {
            console.log("Erro:", err);
            result(err, null);
            return;
        }
        console.log("pedido criada: ", { idpedido: res.insertId, ...pedido });
        result(null, { idpedido: res.insertId, ...pedido });

    });
};

PedidoModel.findById = (idpedido, result) => {
    sql.query("SELECT * FROM pedido WHERE id = " + idpedido, (err,res) => {
        if(err) {
            console.log("erro:", err);
            result(null, err);
            return;
        }
        if(res.lenght){
            console.log("pedido encontrado ", res[0]);
            result(null, res[0]);
            return;
        } else {
            result({kind: "not_found"}, null)
        }
    })
};

PedidoModel.getAll = (result) => {
    sql.query("SELECT * FROM pedido", (err, res)=> {
        if(err){
            console.log("erro:", err);
            result(null, err);
            return;
        }
        console.log("pedido: ",  res);
        result(null, res);
    })
};

PedidoModel.updateById = (idpedido, pedido, result) => {
    sql.query("UPDATE pedido SET nome = ?, valor = ?, descricao = ?, genero = ?, classificacao = ?, plataforma = ?, lancamento = ? WHERE idproduto = ? ", [produto.nome, produto.valor, produto.descricao, produto.genero, produto.classificacao, produto.plataforma, produto.lancamento, produtoId], (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(err, null);
        } else if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
        } else {
            console.log("pedido atualizado: ", { idpedido: idpedido, ...pedido });
            result(null, { idpedido: idpedido, ...pedido });
        }
    })
};

PedidoModel.remove = (produtoId, result) => {
    sql.query("DELETE FROM pedido WHERE pedido = ?", idpedido, (err, res) => {
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

PedidoModel.removeAll = (result) => {
    sql.query("DELETE FROM pedido", (err, res) => {
        if (err) {
            console.log("erro:", err);
            result(err);
        } else {
            result(null);
        }
    })
};

module.exports = PedidoModel;