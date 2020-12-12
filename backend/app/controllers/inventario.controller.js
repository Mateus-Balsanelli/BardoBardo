const InventarioModel = require("../models/inventario.model.js");

exports.create = (req, res) => {
    if (!req.body.nome && !req.body.aquisicao && !req.body.produto_idproduto && !req.body.valor && !req.body.plataforma_idplataforma) {
        res.status(400).send({
            message: "Conteúdo do corpo da requisição está vazio."
        });
    } else {
        const inventario = new InventarioModel({
            nome: req.body.nome,
            aquisicao: req.body.aquisicao,
            produto_idproduto: req.body.produto_idproduto,
            valor: req.body.valor,
            plataforma_idplataforma: req.body.plataforma_idplataforma
        });

        InventarioModel.create(inventario, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Ocorreu um erro"
                });
            } else {
                res.send(data);
            }
        })
    }
}

exports.findAll = (req, res) => {
    InventarioModel.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Ocorreu algum erro"
            })
        } else {
            res.send(data);
        }
    });
}

exports.findOne = (req, res) => {
    InventarioModel.findById(req.params.inventarioId, (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                res.status(404).send({
                    message: "Produto não encontrado. ID:" + req.params.inventarioId
                });
            } else {
                res.status(500).send({
                    message: "Erro ao retornar o produto com ID:" + req.params.inventarioId
                });
            }
        } else
            res.send(data);
    })
}

exports.update = (req, res) => {
    if (!req.body.nome && !req.body.aquisicao && !req.body.produto_idproduto && !req.body.valor && !req.body.plataforma_idplataforma) {
        res.status(400).send({
            message: "Conteúdo do corpo da requisição está vazio."
        });
    } else {
        const inventario = new InventarioModel({
            nome: req.body.nome,
            aquisicao: req.body.aquisicao,
            produto_idproduto: req.body.produto_idproduto,
            valor: req.body.valor,
            plataforma_idplataforma: req.body.plataforma_idplataforma,
        });

        InventarioModel.updateById(req.params.inventarioId, inventario, (err, data) => {
            if (err) {
                if (err.kind == "not_found") {
                    res.status(404).send({
                        message: "Produto não encontrada."
                    });
                } else {
                    res.status(500).send({
                        message: "Erro ao atualizar produto."
                    })
                }
            } else {
                res.send(data);
            }
        })
    }
}

exports.delete = (req, res) => {
    InventarioModel.remove(req.params.inventarioId, (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                res.status(404).send({ message: "Produto não encontrada." })
            } else {
                res.status(500).send({ message: "Erro ao deletar produto." })
            }
        } else {
            res.send({ messsage: "Produto deletada com sucesso" });
        }
    })
}

exports.deleteAll = (req, res) => {
    InventarioModel.remove((err) => {
        if (err) {
            res.status(500).send({ message: "Erro ao deletar todo o inventario." })
        } else {
            res.send({ messsage: "Todo inventario deletado com sucesso" });
        }
    })
}