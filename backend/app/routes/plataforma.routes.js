module.exports = app => {
    const plataformaController = require("../controllers/plataforma.controller.js");
    const authJwt = require("../middlewares/auth_jwt.middleware.js");

    app.post("/plataforma", plataformaController.create);

    app.get("/plataformas", [authJwt.verifyToken, authJwt.isAdmin], plataformaController.findAll);

    app.get("/plataformas/:plataformaId", plataformaController.findOne);

    app.put("/plataformas/:plataformaId", plataformaController.update);

    app.delete("/plataformas/:plataformaId", plataformaController.delete);

    app.delete("/plataformas", plataformaController.deleteAll);
}