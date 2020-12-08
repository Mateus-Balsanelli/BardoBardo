const PlataformaModel = require("../models/plataforma.model.js");

exports.create = (req, res) => {
    if (!req.body.nome && !req.body.valor && !req.body.lancamento && !req.body.descricao) {
        res.status(400).send({
            message: "Conteúdo do corpo da requisição está vazio."
        });
    } else {
        const plataforma = new PlataformaModel({
            nome: req.body.nome,
            valor: req.body.valor,
            lancamento: req.body.lancamento,
            descricao: req.body.descricao
        });

        PlataformaModel.create(plataforma, (err, data) => {
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
    PlataformaModel.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Ocorreu algum erro"
            })
        } else
            res.send(data);
    });
}

exports.findOne = (req, res) => {
    PlataformaModel.findById(req.params.plataformaId, (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                res.status(404).send({
                    message: "Plataforma não encontrada. ID:" + req.params.plataformaId
                });
            } else {
                res.status(500).send({
                    message: "Erro ao retornar a plataforma com ID:" + req.params.plataformaId
                });
            }
        } else
            res.send(data);
    })

}

exports.update = (req, res) => {
    if (!req.body.nome && !req.body.descricao && !req.body.lancamento && !req.body.valor) {
        res.status(400).send({
            message: "Conteúdo do corpo da requisição está vazio."
        });
    } else {
        const plataforma = new PlataformaModel({
            nome: req.body.nome,
            descricao: req.body.descricao,
            lancamento: req.body.lancamento,
            valor: req.body.valor
        });

        PlataformaModel.updateById(req.params.plataformaId, plataforma, (err, data) => {
            if (err) {
                if (err.kind == "not_found") {
                    res.status(404).send({
                        message: "Plataforma não encontrada."
                    });
                } else {
                    res.status(500).send({
                        message: "Erro ao atualizar plataforma."
                    })
                }
            } else {
                res.send(data);
            }
        })
    }
}

exports.delete = (req, res) => {
    PlataformaModel.remove(req.params.plataformaId, (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                res.status(404).send({ message: "Plataforma não encontrada." })
            } else {
                res.status(500).send({ message: "Erro ao deletar plataforma." })
            }
        } else {
            res.send({ messsage: "Plataforma deletada com sucesso" });
        }
    })

}

exports.deleteAll = (req, res) => {
    PlataformaModel.remove((err) => {
        if (err) {
            res.status(500).send({ message: "Erro ao deletar todas as plataformas." })
        } else {
            res.send({ messsage: "Todas as plataformas foram deletadas com sucesso" });
        }
    })
}