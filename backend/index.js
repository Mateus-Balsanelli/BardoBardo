const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//parse para requisições usado para trabalhar com requisições JSON
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "sucess"})
});

require("./app/routes/produto.routes.js")(app);

app.listen(3006, () => {
    console.log("Servidor funcinando")
})

