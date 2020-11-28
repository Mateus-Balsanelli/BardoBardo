module.exports = app => {
    const produtoController = require('../controllers/produto.controller.js');
    
    app.post("/produtos", produtoController.create);

    //app.post("/produtos",[authJwt.verifyToken, authJwt.isAdmin], produtoController.create);
    //app.get("/produtos/",[authJwt.verifyToken, authJwt.isAdmin], produtoController.findAll);

    app.get("/produtos/", produtoController.findAll);

    app.get("/produtos/:produtoId", produtoController.findOne);

    app.put("/produtos/:produtoId", produtoController.update);

    app.delete("/produtos/:produtoId", produtoController.delete);

    app.delete("/produtos", produtoController.deleteAll);
}