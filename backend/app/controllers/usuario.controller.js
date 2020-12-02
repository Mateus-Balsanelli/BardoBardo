const bcrypt = require("bcryptjs");
const UsuarioModel = require("../models/usuario.model.js");
const config = require("../configs/auth.config.js");
const jwt = require("jsonwebtoken");


exports.signUp = (req, res) => {
    if (!req.body.nome || !req.body.nascimento ||  !req.body.cpf || !req.body.email || !req.body.tipo || !req.body.endereco || !req.body.telefone ) {
        res.status(400).send({
            message: "Nome, Nascimento, CPF, E-mail ou tipo não enviados"
        })
    } else {
        const usuario = new UsuarioModel({
            nome: req.body.nome,
            nascimento: req.body.nascimento,
            cpf: req.body.cpf,
            email: req.body.email,
            senha: bcrypt.hashSync(req.body.senha, 8),
            tipo: req.body.tipo,
            endereco: req.body.endereco,
            telefone: req.body.telefone
        });

        UsuarioModel.create(usuario, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Ocorreu algum erro"
                })
            } else {
                res.send(data);
            }
        })
    }
}

exports.signIn = (req, res) => {
    UsuarioModel.findByEmail(req.body.email, (err, data) => {
        if (err) {
            if (err == "not_found") {
                res.status(404).send({
                    message: "Não foi encontrado usuário com o e-mail digitado."
                })
            } else {
                res.status(500).send({
                    message: "Ocorreu um erro ao buscar e-mail do usuário no sistema"
                })
            }
        } else {
            let validPassword = bcrypt.compareSync(req.body.senha, data.senha);
            if (!validPassword) {
                res.status(401).send({
                    accessToken: null,
                    message: "Senha inválida!"
                })
            } else {
                let token = jwt.sign({ id: data.idusuarios }, config.secret, {
                    expiresIn: 86400 //24 horas
                })

                res.status(200).send({
                    accessToken: token,
                    id: data.idusuarios,
                    nome: data.nome,
                    nascimento: data.nascimento,
                    cpf: data.cpf,
                    email: data.email,
                    tipo: data.tipo
                })
            }
        }
    })
}

exports.findAll = (req, res) => {
    UsuarioModel.getAll((err, data) => {
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
    UsuarioModel.findById(req.params.idUsuario, (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                res.status(404).send({
                    message: "Usuario não encontrado. ID:" + req.params.idUsuario
                });
            } else {
                res.status(500).send({
                    message: "Erro ao retornar o usuario com ID:" + req.params.idUsuario
                });
            }
        } else{
            res.send(data);
        }
    })

}

exports.update = (req, res) => {
    if (!req.body.nome && !req.body.nascimento && !req.body.cpf && !req.body.email && !req.body.endereco && !req.body.telefone) {
        res.status(400).send({
            message: "Conteúdo do corpo da requisição está vazio."
        });
    } else {
        const usuario = new UsuarioModel({
            nome: req.body.nome,
            nascimento: req.body.nascimento,
            cpf: req.body.cpf,
            email: req.body.email,
            endereco: req.body.endereco,
            telefone: req.body.telefone
        });

        UsuarioModel.updateById(req.params.idUsuario, usuario, (err, data) => {
            if (err) {
                if (err.kind == "not_found") {
                    res.status(404).send({
                        message: "Usuario não encontrado."
                    });
                } else {
                    res.status(500).send({
                        message: "Erro ao atualizar usuario."
                    })
                }
            } else {
                res.send(data);
            }
        })
    }
}

exports.delete = (req, res) => {
    UsuarioModel.remove(req.params.idUsuario, (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                res.status(404).send({ message: "Usuario não encontrado." })
            } else {
                res.status(500).send({ message: "Erro ao deletar usuario." })
            }
        } else {
            res.send({ messsage: "Usuario deletado com sucesso" });
        }
    })
}

exports.deleteAll = (req, res) => {
    UsuarioModel.remove((err) => {
        if (err) {
            res.status(500).send({ message: "Erro ao deletar todos os usuarios." })
        } else {
            res.send({ messsage: "Todos os usuarios deletados com sucesso" });
        }
    })
}