var express = require("express");
var router = express.Router();

var postsController = require("../controllers/postsController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/renderizar", function (req, res) {
    postsController.renderizar(req, res);
})

router.get("/renderizarIndex", function (req, res) {
    postsController.renderizarIndex(req, res);
})

router.get("/buscarPost/:idPost", function (req, res) {
    postsController.buscarPost(req, res);
})

router.get("/renderizarPorPesquisa/:tag", function (req, res) {
    postsController.buscarPostPorPesq(req, res);
})

module.exports = router;