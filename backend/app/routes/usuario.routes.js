module.exports = app => {
    const usuarioController = require("../controllers/usuario.controller.js");

    //Criar uma nova conta
    app.post("/signup", usuarioController.signUp);
    //Logar no sistema
    app.post("/signin", usuarioController.signIn);
        
    app.post("/usuarios", usuarioController.create);

    app.post("/usuarios",[authJwt.verifyToken, authJwt.isAdmin], usuarioController.create);
    
    app.get("/usuarios/",[authJwt.verifyToken, authJwt.isAdmin], usuarioController.findAll);

    app.get("/usuarios/", usuarioController.findAll);

    app.get("/usuarios/:usuarioId", usuarioController.findOne);

    app.put("/usuarios/:usuarioId", usuarioController.update);

    app.delete("/usuarios/:usuarioId", usuarioController.delete);

    app.delete("/usuarios", usuarioController.deleteAll);

}