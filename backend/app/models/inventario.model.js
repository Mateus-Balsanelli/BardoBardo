const sql = require("./db.js");

const InventarioModel = function(inventario) {
    this.nome = inventario.nome;
    this.aquisicao = inventario.aquisicao;
    this.produto_idproduto = inventario.produto_idproduto;
    this.valor = inventario.valor;
    this.plataforma_idplataforma = inventario.plataforma_idplataforma;
}

InventarioModel.create = (inventario,  result) => {
    sql.query("INSERT INTO inventario SET ? ", inventario, (err, res) => {
        if (err) {
            console.log("Erro:", err);
            result(err, null);
            return;
        }
        console.log("Produto criada: ", { idinventario: res.insertId, ...inventario });
        result(null, { idinventario: res.insertId, ...inventario });

    });
};

InventarioModel.findById = (inventarioId, result) => {
    sql.query("SELECT * FROM inventario WHERE id = " + inventarioId, (err,res) => {
        if(err) {
            console.log("erro:", err);
            result(null, err);
            return;
        }
        if(res.lenght){
            console.log("Produto encontrado ", res[0]);
            result(null, res[0]);
            return;
        } else {
            result({kind: "not_found"}, null)
        }
    })
};

InventarioModel.getAll = (result) => {
    sql.query("SELECT * FROM produto", (err, res)=> {
        if(err){
            console.log("erro:", err);
            result(null, err);
            return;
        }
        console.log("produto: ",  res);
        result(null, res);
    })
};

InventarioModel.updateById = (inventarioId, inventario, result) => {
    sql.query("UPDATE inventario SET nome = ?, aquisicao = ?, produto_idproduto = ?, valor = ?, plataforma_idplataforma = ? WHERE idproduto = ? ", [inventario.nome, inventario.aquisicao, inventario.produto_idproduto, inventario.valor, inventario.plataforma_idplataforma, inventarioId], (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(err, null);
        } else if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
        } else {
            console.log("Produto atualizado: ", { idinventario: inventarioId, ...inventario });
            result(null, { idinventario: inventarioId, ...inventario });
        }
    })
};

InventarioModel.remove = (inventarioId, result) => {
    sql.query("DELETE FROM inventario WHERE idinventario = ?", inventarioId, (err, res) => {
        if (err) {
            console.log("erro:", err);
            result(err, null);
        } else if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
        } else {
            result(null, res);
        }
    })
};

InventarioModel.removeAll = (result) => {
    sql.query("DELETE FROM inventario", (err, res) => {
        if (err) {
            console.log("erro:", err);
            result(err);
        } else {
            result(null);
        }
    })
};