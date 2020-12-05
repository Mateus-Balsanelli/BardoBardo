module.exports = app => {
    
    const inventarioController = require("../controllers/inventario.controller.js");
    const authJwt = require("../middlewares/auth_jwt.middleware.js");

    app.post("/inventario",[authJwt.verifyToken, authJwt.isAdmin], inventarioController.create);
    
    app.get("/inventario/",[authJwt.verifyToken, authJwt.isAdmin], inventarioController.findAll);

    app.get("/inventario/", inventarioController.findAll);

    app.get("/inventario/:inventarioId", inventarioController.findOne);

    app.put("/inventario/:inventarioId", inventarioController.update);

    app.delete("/inventario/:inventarioId",inventarioController.delete);

    app.delete("/inventario", inventarioController.deleteAll);
}


