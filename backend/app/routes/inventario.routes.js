module.exports = app => {

    const inventarioController = require("../controllers/inventario.controller.js");
    const authJwt = require("../middlewares/auth_jwt.middleware.js");

    app.post("/inventario",[authJwt.verifyToken, authJwt.isAdmin], inventarioController.create);
    
    app.get("/inventario/",[authJwt.verifyToken, authJwt.isAdmin], inventarioController.findAll);

    app.get("/inventario/:inventarioId",[authJwt.verifyToken, authJwt.isAdmin], inventarioController.findOne);

    app.put("/inventario/:inventarioId",[authJwt.verifyToken, authJwt.isAdmin], inventarioController.update);

    app.delete("/inventario/:inventarioId",[authJwt.verifyToken, authJwt.isAdmin],inventarioController.delete);

    app.delete("/inventario",[authJwt.verifyToken, authJwt.isAdmin], inventarioController.deleteAll);
}


