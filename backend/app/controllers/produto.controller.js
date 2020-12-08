const ProdutoModel = require("../models/produto.model.js");

exports.create = (req, res) => {
    if (!req.body.nome && !req.body.valor && !req.body.descricao && !req.body.genero && !req.body.classificacao && !req.body.plataforma && !req.body.lancamento) {
        res.status(400).send({
            message: "Conteúdo do corpo da requisição está vazio."
        });
    } else {
        const plataforma = new plataformaModel({
            nome: req.body.nome,
            valor: req.body.valor,
            descricao: req.body.descricao,
            genero: req.body.genero,
            classificacao: req.body.classificacao,
            plataforma: req.body.plataforma,
            lancamento: req.body.lancamento
        });

        plataformaModel.create(plataforma, (err, data) => {
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
    ProdutoModel.getAll((err, data) => {
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
    if (!req.body.nome && !req.body.valor && !req.body.descricao && !req.body.genero && !req.body.classificacao && !req.body.plataforma && !req.body.lancamento) {
        res.status(400).send({
            message: "Conteúdo do corpo da requisição está vazio."
        });
    }
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
    ProdutoModel.remove(req.params.idProduto, (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                res.status(404).send({ message: "Produto não encontrado." })
            } else {
                res.status(500).send({ message: "Erro ao deletar produto." })
            }
        } else {
            res.send({ messsage: "Produto deletado com sucesso" });
        }
    })
}

exports.deleteAll = (req, res) => {
    ProdutoModel.remove((err) => {
        if (err) {
            res.status(500).send({ message: "Erro ao deletar todos os produtos." })
        } else {
            res.send({ messsage: "Todos os produtos deletados com sucesso" });
        }
    })
}