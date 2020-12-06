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

    app.get("/usuario/", usuarioController.findAll);

    app.get("/usuario/:usuarioId", usuarioController.findOne);

    app.put("/usuario/:usuarioId", usuarioController.update);

    app.delete("/usuario/:usuarioId", usuarioController.delete);

    app.delete("/usuario", usuarioController.deleteAll);

}