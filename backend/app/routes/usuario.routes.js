module.exports = app => {
    const usuarioController = require("../controllers/usuario.controller.js");
    const authJwt = require("../middlewares/auth_jwt.middleware.js");

    //Criar uma nova conta
    app.post("/signup", usuarioController.signUp);
    //Logar no sistema
    app.post("/signin", usuarioController.signIn);
        
    //app.post("/usuarios", usuarioController.create);

    app.post("/usuario",[authJwt.verifyToken, authJwt.isAdmin], usuarioController.create);
    
    app.get("/usuario/",[authJwt.verifyToken, authJwt.isAdmin], usuarioController.findAll);

    app.get("/usuario/:usuarioId",[authJwt.verifyToken], usuarioController.findOne);

    app.put("/usuario/:usuarioId",[authJwt.verifyToken], usuarioController.update);

    app.delete("/usuario/:usuarioId",[authJwt.verifyToken], usuarioController.delete);

    app.delete("/usuario",[authJwt.verifyToken, authJwt.isAdmin], usuarioController.deleteAll);

}