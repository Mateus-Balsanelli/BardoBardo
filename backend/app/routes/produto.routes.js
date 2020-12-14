module.exports = app => {
    const produtoController = require('../controllers/produto.controller.js');
    const authJwt = require("../middlewares/auth_jwt.middleware.js");
    
    app.post("/produto",[authJwt.verifyToken, authJwt.isAdmin], produtoController.create);

    app.get("/produto/",[authJwt.verifyToken], produtoController.findAll);

    app.get("/produto/:produtoId",[authJwt.verifyToken], produtoController.findOne);

    app.put("/produto/:produtoId", [authJwt.verifyToken, authJwt.isAdmin], produtoController.update);

    app.delete("/produto/:produtoId", [authJwt.verifyToken, authJwt.isAdmin], produtoController.delete);

    app.delete("/produto", [authJwt.verifyToken, authJwt.isAdmin], produtoController.deleteAll);
}