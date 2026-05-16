var express = require("express");
var router = express.Router();

var postsController = require("../controllers/postsController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/renderizar", function (req, res) {
    postsController.renderizar(req, res);
})

router.post("/renderizarIndex", function (req, res) {
    postsController.renderizarIndex(req, res);
})

module.exports = router;