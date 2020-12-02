const PedidoModel = require("../models/pedido.model.js");

exports.create = (req, res) => {
    if (!req.body.produto_idproduto && !req.body.usuario_idusario && !req.body.plataforma_idplataforma && !req.body.dataPedido && !req.body.endereco && !req.body.dataEntrega) {
        res.status(400).send({
            message: "Conteúdo do corpo da requisição está vazio."
        });
    } else {
        const pedido = new PedidoModel({
            produto_idproduto = req.body.produto_idproduto,
            usuario_idususario = req.body.usuario_idusario,
            plataforma_idplataforma = req.body.plataforma_idplataforma, 
            dataPedido = req.body.dataPedido, 
            endereco = req.body.endereco, 
            dataEntrega = req.body.dataEntrega
        });

        PedidoModel.create(pedido, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Ocorreu um erro"
                });
            } else {
                res.send(data);
            }
        })
    }
};

exports.findAll = (req, res) => {
    PedidoModel.getAll((err, data) => {
        if (err){
            res.status(500).send({ 
                message : err.message || "ocorreu algum erro"
            })
        } else {
            res.send(data);
        }    
    })
};

exports.findOne = (req, res) => {
    produtoModel.findById(req.params.idPedido , (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                res.status(404).send({
                    message: "Pedido não encontrado. ID:" + req.params.idPedido 
                });
            } else {
                res.status(500).send({
                    message: "Erro ao retornar o pedido com ID:" + req.params.idPedido
                });
            }
        } else
            res.send(data);
    })
};

exports.update = (req, res) => {
    if (!req.body.produto_idproduto && !req.body.usuario_idusario && !req.body.plataforma_idplataforma && !req.body.dataPedido && !req.body.endereco && !req.body.dataEntrega) {
        res.status(400).send({
            message: "Conteúdo do corpo da requisição está vazio."
        });
    }
    if (err) {
        if (err.kind == "not_found") {
            res.status(404).send({
                message: "Pedido não encontrado."
            });
        } else {
            res.status(500).send({
                message: "Erro ao atualizar pedido."
            })
        }
    } else {
        res.send(data);
    }
};

exports.delete = (req, res) => {
    PedidoModel.remove(req.params.idPedido, (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                res.status(404).send({ message: "Pedido não encontrado." })
            } else {
                res.status(500).send({ message: "Erro ao deletar pedido." })
            }
        } else {
            res.send({ messsage: "Pedido deletado com sucesso" });
        }
    })
}

exports.deleteAll = (req, res) => {
    PedidoModel.remove((err) => {
        if (err) {
            res.status(500).send({ message: "Erro ao deletar todos os pedidos." })
        } else {
            res.send({ messsage: "Todos os pedidos deletados com sucesso" });
        }
    })
}