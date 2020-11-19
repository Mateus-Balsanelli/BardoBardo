module.exports = app => {
    const produtoControllers = require('../controllers/produto.controller.js');
    
    app.post("/produtos", produtoControllers.create);

    app.get("/produtos/", produtoControllers.findAll);

    app.get("/produtos/:produtoId", produtoControllers.findOne);

    app.put("/produtos/:produtoId", produtoControllers.update);

    app.delete("/produtos/:produtoId", produtoControllers.delete);

    app.delete("/produtos", produtoControllers.deleteAll);
}