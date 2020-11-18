const sql = require("./db.js");

//Construtor
const Usuario = function(usuario) {
    this.nome = usuario.nome;
    this.nascimento = usuario.nascimento;
    this.cpf = usuario.cpf;
    this.email = usuario.email;
    //this.senha = usuario.senha;
    this.tipo = usuario.tipo;
}

//Cria um novo usuario no banco
Usuario.create = (usuario, result) => {
    sql.query("INSERT INTO usuarios SET ?", usuario, (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, "Usuário criado com sucesso");
        }
    })
}

//Selecionar um usuario através de um email
Usuario.findByEmail = (emailUsuario, result) => {
    sql.query(`SELECT * FROM usuarios WHERE email = '${emailUsuario}'`, (err, res) => {
        if (err) {
            result(err, null);
        }
        //Verificar se usuário existe
        else if (res.length) {
            result(null, res[0]);
        } else {
            result({ kind: "not_found" }, null);
        }
    })
}

//Selecionar um usuario através de um ID
Usuario.findById = (idUsuario, result) => {
    sql.query(`SELECT * FROM usuarios WHERE idusuarios = '${idUsuario}'`, (err, res) => {
        if (err) {
            result(err, null);
        }
        //Verificar se usuário existe
        else if (res.length) {
            result(null, res[0]);
        } else {
            result({ kind: "not_found" }, null);
        }
    })
}

//Selecionar todos os usuarios
Usuario.getAll = (result) => {
    sql.query("SELECT * FROM usuarios", (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(null, err);
            return;
        }
        console.log("usuarios: ", res);
        result(null, res);
    })
}

//Atualizar usuario através de um ID
Usuario.updateById = (idUsuario, result) => {
    sql.query("UPDATE usuarios SET nome = ?, nascimento = ?, cpf = ?, email= ? WHERE idusuarios = ? ", [usuario.nome, usuario.nascimento, usuario.cpf, usuario.email, idUsuario], (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(err, null);
        } else if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
        } else {
            console.log("Usuario atualizado: ", { idusuarios: idUsuario, ...usuario });
            result(null, { idusuarios: idUsuario, ...usuario });
        }
    })
}


//Remover usuario através de um ID
Usuario.remove = (idUsuario, result) => {
    sql.query("DELETE FROM usuarios WHERE idusuarios = ?", idUsuario, (err, res) => {
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

//Remover todos os usuarios
Usuario.removeAll = (result) => {
    sql.query("DELETE FROM usuarios", (err, res) => {
        if (err) {
            console.log("erro:", err);
            result(err);
        } else {
            result(null);
        }
    })
}

module.exports = Usuario;
