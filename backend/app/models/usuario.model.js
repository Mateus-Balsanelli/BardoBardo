const sql = require("./db.js");

//construtor
const UsuarioModel = function(usuario) {
    this.nome = usuario.nome;
    this.nascimento = usuario.nascimento;
    this.cpf =  usuario.cpf;
    this.email = usuario.email;
    this.senha = usuario.senha;
    this.tipo = usuario.tipo;
    this.endereco = usuario.endereco;
    this.telefone = usuario.telefone;
}


//Cria uma nova plataforma no banco
UsuarioModel.create = (plataforma, result) => {
    sql.query("INSERT INTO usuario SET ? ", usuario, (err, res) => {
        if (err) {
            console.log("Erro:", err);
            result(err, null);
            return;
        }
        console.log("Usuario criado: ", { idusuario: res.insertId, ...usuario });
        result(null, { idusuario: res.insertId, ...usuario });

    });
    //implementar criação de uma nova plataforma no banco
};

//Selecionar uma plataforma através de um ID
UsuarioModel.findById = (usuarioId, result) => {
    sql.query("SELECT * FROM usuario WHERE idusuario = " + usuarioId, (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(null, err);
            return;
        }

        if (res.length) {
            console.log("Usuario encontrada: ", res[0]);
            result(null, res[0]);
            return;
        } else {
            result({ kind: "not_found" }, null)
        }
    })
};

//Selecionar todas as plataformas
UsuarioModel.getAll = (result) => {
    sql.query("SELECT * FROM usuario", (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(null, err);
            return;
        }
        console.log("Usuarios: ", res);
        result(null, res);
    })
}

//Atualizar plataforma através de um ID
UsuarioModel.updateById = (usuarioId, usuario, result) => {
    sql.query("UPDATE usuario SET nome = ?, nascimento = ?, cpf = ?, email = ?, senha = ?, tipo = ?, endereco = ?, telefone = ? WHERE idusuario = ? ", [usuario.nome, usuario.nascimento, usuario.cpf, usuario.email, usuario.senha, usuario.tipo, usuario.endereco, usuario.telefone, usuarioId], (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(err, null);
        } else if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
        } else {
            console.log("Usuario atualizado: ", { idusuario: usuarioId, ...usuario });
            result(null, { idusuario: usuarioId, ...usuario });
        }
    })
}


//Remover plataforma através de um ID
UsuarioModel.remove = (plataformaId, result) => {
    sql.query("DELETE FROM usuario WHERE idusuario = ?", usuarioId, (err, res) => {
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

//Remover todas as plataformas
UsuarioModel.removeAll = (result) => {
    sql.query("DELETE FROM usuario", (err, res) => {
        if (err) {
            console.log("erro:", err);
            result(err);
        } else {
            result(null);
        }
    })
}


module.exports = UsuarioModel;