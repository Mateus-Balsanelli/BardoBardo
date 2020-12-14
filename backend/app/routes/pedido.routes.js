module.exports = app => {

    const pedidoController = require("../controllers/pedido.controller.js");

    app.post("/pedido",[authJwt.verifyToken], pedidoController.create);

    app.get("/pedido",[authJwt.verifyToken, authJwt.isAdmin], pedidoController.findAll);

    app.get("/pedido/:pedidoId",[authJwt.verifyToken, authJwt.isAdmin], pedidoController.findOne);

    //app.get("/pedidoCompleto/:pedidoId", pedidoController.retornaPedidoCompleto);

    //app.get("/pedidoCalculado/:pedidoId", pedidoController.retornaValorCalculado);

    app.put("/pedido/:pedidoId",[authJwt.verifyToken, authJwt.isAdmin], pedidoController.update);

    app.delete("/pedido/:pedidoId",[authJwt.verifyToken, authJwt.isAdmin], pedidoController.delete);

    app.delete("/pedido",[authJwt.verifyToken, authJwt.isAdmin], pedidoController.deleteAll);
}