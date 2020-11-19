const sql = require("./db.js");

//construtor
const PlataformaModel = function(plataforma) {
    this.nome = plataforma.nome;
    this.descricao = plataforma.descricao;
    this.lancamento = plataforma.lancamento;
    this.valor = plataforma.valor;
}


//Cria uma nova plataforma no banco
PlataformaModel.create = (plataforma, result) => {
    sql.query("INSERT INTO plataformas SET ? ", plataforma, (err, res) => {
        if (err) {
            console.log("Erro:", err);
            result(err, null);
            return;
        }
        console.log("Plataforma criada: ", { idplataformas: res.insertId, ...plataforma });
        result(null, { idplataformas: res.insertId, ...plataforma });

    });
    //implementar criação de uma nova plataforma no banco
};

//Selecionar uma plataforma através de um ID
PlataformaModel.findById = (plataformaId, result) => {
    sql.query("SELECT * FROM plataformas WHERE idplataformas = " + plataformaId, (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(null, err);
            return;
        }

        if (res.length) {
            console.log("Plataforma encontrada: ", res[0]);
            result(null, res[0]);
            return;
        } else
            result({ kind: "not_found" }, null)

    })

};

//Selecionar todas as plataformas
PlataformaModel.getAll = (result) => {
    sql.query("SELECT * FROM plataformas", (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(null, err);
            return;
        }
        console.log("plataformas: ", res);
        result(null, res);
    })
}

//Atualizar plataforma através de um ID
PlataformaModel.updateById = (plataformaId, plataforma, result) => {
    sql.query("UPDATE plataformas SET nome = ?, descricao = ?, lancamento = ?, valor = ? WHERE idplataformas = ? ", [plataforma.nome, plataforma.descricao, plataforma.lancamento, plataforma.valor, plataformaId], (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(err, null);
        } else if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
        } else {
            console.log("Plataforma atualizada: ", { idplataformas: plataformasId, ...plataforma });
            result(null, { idplataformas: plataformaId, ...plataforma });
        }
    })
}


//Remover plataforma através de um ID
PlataformaModel.remove = (plataformaId, result) => {
    sql.query("DELETE FROM plataformas WHERE idplataformas = ?", plataformaId, (err, res) => {
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
PlataformaModel.removeAll = (result) => {
    sql.query("DELETE FROM plataformas", (err, res) => {
        if (err) {
            console.log("erro:", err);
            result(err);
        } else {
            result(null);
        }
    })
}

module.exports = PlataformaModel;
