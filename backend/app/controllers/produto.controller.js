const produtoModel = require("../models/produto.model.js");

exports.create = (req, res) => {

};

exports.findAll = (req, res) => {
    produtoModel.getAll((err, data) => {
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
    usuarioModel.findById(req.params.idProduto , (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                res.status(404).send({
                    message: "Produto não encontrado. ID:" + req.params.idProduto 
                });
            } else {
                res.status(500).send({
                    message: "Erro ao retornar o produto com ID:" + req.params.idProduto 
                });
            }
        } else
            res.send(data);
    })
};

exports.update = (req, res) => {
    if (err) {
        if (err.kind == "not_found") {
            res.status(404).send({
                message: "Produto não encontrado."
            });
        } else {
            res.status(500).send({
                message: "Erro ao atualizar produto."
            })
        }
    } else {
        res.send(data);
    }

};

exports.delete = (req, res) => {

};

exports.deleteAll = (req, res) => {

};