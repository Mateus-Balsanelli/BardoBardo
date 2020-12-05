module.exports = app => {

    const pedidoController = require("../controllers/pedido.controller.js");

    app.post("/pedido", pedidoController.create);

    app.get("/pedido", pedidoController.findAll);

    app.get("/pedido/:pedidoId", pedidoController.findOne);

    //app.get("/pedidoCompleto/:pedidoId", pedidoController.retornaPedidoCompleto);

   // app.get("/pedidoCalculado/:pedidoId", pedidoController.retornaValorCalculado);

    app.put("/pedido/:pedidoId", pedidoController.update);

    app.delete("/pedido/:pedidoId", pedidoController.delete);

    app.delete("/pedido", pedidoController.deleteAll);
}