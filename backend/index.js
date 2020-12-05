//const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//parse para requisições usado para trabalhar com requisições JSON
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "sucess"})
});

/*app.use((req, res, next) => {​​

    res.header("Access-Control-Allow-Origin", "*");

    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');

    app.use(cors());

    next();

}​)​;
*/
require("./app/routes/inventario.routes.js")(app);
require("./app/routes/pedido.routes.js")(app);
require("./app/routes/plataforma.routes.js")(app);
require("./app/routes/produto.routes.js")(app);
require("./app/routes/usuario.routes.js")(app);


app.listen(3006, () => {
    console.log("Servidor funcionando")
})

