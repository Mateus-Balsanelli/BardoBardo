module.exports = app => {
    const produtoController = require('../controllers/produto.controller.js');
    const authJwt = require("../middlewares/auth_jwt.middleware.js");
    
    app.post("/produto",[authJwt.verifyToken, authJwt.isAdmin], produtoController.create);

    app.get("/produto/",[authJwt.verifyToken, authJwt.isAdmin], produtoController.findAll);

    app.get("/produto/:produtoId", produtoController.findOne);

    app.put("/produto/:produtoId", produtoController.update);

    app.delete("/produto/:produtoId", produtoController.delete);

    app.delete("/produto", produtoController.deleteAll);
}