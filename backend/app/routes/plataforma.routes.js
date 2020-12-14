module.exports = app => {
    const plataformaController = require("../controllers/plataforma.controller.js");
    const authJwt = require("../middlewares/auth_jwt.middleware.js");

    app.post("/plataforma", [authJwt.verifyToken, authJwt.isAdmin], plataformaController.create);

    app.get("/plataforma", [authJwt.verifyToken], plataformaController.findAll);

    app.get("/plataforma/:plataformaId", [authJwt.verifyToken], plataformaController.findOne);

    app.put("/plataforma/:plataformaId", [authJwt.verifyToken, authJwt.isAdmin], plataformaController.update);

    app.delete("/plataforma/:plataformaId", [authJwt.verifyToken, authJwt.isAdmin], plataformaController.delete);

    app.delete("/plataforma", [authJwt.verifyToken, authJwt.isAdmin], plataformaController.deleteAll);
}