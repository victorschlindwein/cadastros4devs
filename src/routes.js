const express = require('express');
const routes = express.Router();

const PessoasController = require('./controllers/PessoasController');

routes.get("/pessoas", PessoasController.index);
routes.post("/pessoas", PessoasController.store);
routes.put("/pessoas/:id", PessoasController.update);
routes.delete("/pessoas/:id", PessoasController.destroy);

module.exports = routes;