const jwt = require("jsonwebtoken");
const config = require("../configs/auth.config.js");
const UsuarioModel = require("../models/usuario.model.js");

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({
            message: "Não possui token para autenticação!"
        });
    } else {
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                res.status(401).send({
                    message: "Não autorizado!"
                });
            } else {
                req.idusuario = decoded.id;
                next();
            }
        })
    }
}

isAdmin = (req, res, next) => {
    UsuarioModel.findById(req.idusuario, (err, data) => {
        if (data.tipo == 1) {
            next();
        } else {
            res.status(403).send({
                message: "Você precisa ser administrador para executar a ação!"
            });
        }
    })
}

isCliente = (req, res, next) => {
    UsuarioModel.findById(req.idusuario, (err, data) => {
        if (data.tipo == 2) {
            next();
        } else {
            res.status(403).send({
                message: "Você precisa ser do cliente para executar a ação!"
            });
        }
    })
}


module.exports = {
    verifyToken: verifyToken,
    isAdmin: isAdmin,
    isCliente: isCliente,
}