const sql = require("./db.js");

const InventarioModel = function(inventario) {
    this.nome = inventario.nome;
    this.valor = inventario.valor;
}

InventarioModel.findById = (InventarioId, result) => {
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