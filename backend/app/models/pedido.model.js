const sql = require("./db.js");

//construtor
const PedidoModel = function(pedido) {
    this.forma_pagamento = pedido.forma_pagamento;
    this.endereco = pedido.endereco;
    this.troco = pedido.troco;
    this.usuario_id = pedido.usuario_id;
}


//Cria um novo pedido no banco
PedidoModel.create = (pedido, result) => {
    sql.query("INSERT INTO pedido SET ? ", pedido, (err, res) => {
        if (err) {
            console.log("Erro:", err);
            result(err, null);
            return;
        }
        console.log("Pedido criado: ", { id: res.insertId, ...pedido });
        result(null, { id: res.insertId, ...pedido });

    });
    //implementar criação de um novo pedido no banco
};

//Selecionar um pedido através de um ID
PedidoModel.findById = (pedidoId, result) => {
    sql.query("SELECT * FROM pedido WHERE id = " + pedidoId, (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(null, err);
            return;
        }

        if (res.length) {
            console.log("Pedido encontrado: ", res[0]);
            result(null, res[0]);
            return;
        } else
            result({ kind: "not_found" }, null)

    })

};

//Selecionar todos os pedidos
PedidoModel.getAll = (result) => {
    sql.query("SELECT * FROM pedido", (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(null, err);
            return;
        }
        console.log("pedidos: ", res);
        result(null, res);
    })
}

//Atualizar pedido através de um ID
PedidoModel.updateById = (pedidoId, pedido, result) => {
    sql.query("UPDATE pedido SET forma_pagamento = ?, endereco = ?, troco = ? WHERE id = ? ", [pedido.forma_pagamento, pedido.endereco, pedido.troco, pedidoId], (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(err, null);
        } else if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
        } else {
            console.log("Pedido atualizado: ", { id: pedidoId, ...pedido });
            result(null, { id: pedidoId, ...pedido });
        }
    })
}


//Remover pedido através de um ID
PedidoModel.remove = (pedidoId, result) => {
    sql.query("DELETE FROM pedido WHERE id = ?", pedidoId, (err, res) => {
        if (err) {
            console.log("erro:", err);
            result(err, null);
        } else if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
        } else {
            result(null, res);
        }
    })
}

//Remover todos os pedidos
PedidoModel.removeAll = (result) => {
    sql.query("DELETE FROM pedido", (err, res) => {
        if (err) {
            console.log("erro:", err);
            result(err);
        } else {
            result(null);
        }
    })
}


PedidoModel.retornaPedidoCompleto = (pedidoId, result) => {
    sql.query(`SELECT pedido.endereco AS 'Endereço',
    pedido.troco AS 'Troco',
    produto.nome AS 'Produtos',
    tamanho.nome AS 'Tamanho',
    pizza_pedido.quantidade_sabores AS 'Quantidade de Sabores',
    GROUP_CONCAT(sabor.nome) AS 'Sabores'
    
 FROM pedido 
 LEFT JOIN produto_has_pedido ON produto_has_pedido.pedido_id = pedido.id
 LEFT JOIN produto ON produto.id = produto_has_pedido.produto_id 
 LEFT JOIN pizza_pedido ON pizza_pedido.pedido_id = pedido.id
 LEFT JOIN pizza_pedido_has_sabor ON pizza_pedido_has_sabor.pizza_pedido_id = pizza_pedido.id
 LEFT JOIN tamanho ON tamanho.id = pizza_pedido.tamanho_id
 LEFT JOIN sabor ON sabor.id = pizza_pedido_has_sabor.sabor_id
 WHERE pedido.id = ` + pedidoId, (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(null, err);
            return;
        }

        if (res.length) {

            console.log("Pedido encontrado: ", res[0]);
            result(null, res[0]);
            return;
        } else
            result({ kind: "not_found" }, null)

    })

};


PedidoModel.retornaPedidoDiscriminado = (pedidoId, result) => {
    sql.query(`SELECT pedido.endereco AS 'endereco',
    pedido.troco AS 'troco',
    produto.nome AS 'produtos',
    tamanho.quantidade_fatias AS 'tamanho',
    pizza_pedido.quantidade_sabores AS 'quantidade_sabores',
    sabor.nome AS 'sabores',
    sabor.valor AS 'sabores_valores'
 FROM pedido 
 LEFT JOIN produto_has_pedido ON produto_has_pedido.pedido_id = pedido.id
 LEFT JOIN produto ON produto.id = produto_has_pedido.produto_id 
 LEFT JOIN pizza_pedido ON pizza_pedido.pedido_id = pedido.id
 LEFT JOIN pizza_pedido_has_sabor ON pizza_pedido_has_sabor.pizza_pedido_id = pizza_pedido.id
 LEFT JOIN tamanho ON tamanho.id = pizza_pedido.tamanho_id
 LEFT JOIN sabor ON sabor.id = pizza_pedido_has_sabor.sabor_id
 WHERE pedido.id =` + pedidoId, (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(null, err);
            return;
        }

        if (res.length) {

            console.log("Pedido encontrado: ", res);
            result(null, res);
            return;
        } else
            result({ kind: "not_found" }, null)

    })

};


module.exports = PedidoModel;