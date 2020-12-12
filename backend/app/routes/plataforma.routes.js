module.exports = app => {
    const plataformaController = require("../controllers/plataforma.controller.js");
    const authJwt = require("../middlewares/auth_jwt.middleware.js");

    app.post("/plataforma", [authJwt.verifyToken, authJwt.isAdmin], plataformaController.create);

    app.get("/plataforma", [authJwt.verifyToken, authJwt.isAdmin], plataformaController.findAll);

    app.get("/plataforma/:plataformaId", plataformaController.findOne);

    app.put("/plataforma/:plataformaId", plataformaController.update);

    app.delete("/plataforma/:plataformaId", plataformaController.delete);

    app.delete("/plataforma", plataformaController.deleteAll);
}