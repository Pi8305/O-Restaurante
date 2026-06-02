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

router.post("/buscarPost", function (req, res) {
    postsController.buscarPost(req, res);
})

router.get("/renderizarPorPesquisa/:tag", function (req, res) {
    postsController.buscarPostPorPesq(req, res);
})

router.get("/checkTags", function(req, res) {
    postsController.checkTags(req, res);
})

router.post("/salvarTags", function(req, res) {
    postsController.salvarTags(req, res);
})

router.post("/salvarPost", function(req, res) {
    postsController.salvarPost(req, res);
})

router.post("/adicionarTags", function(req, res) {
    postsController.adicionarTags(req, res);
})

router.post("/renderizarPorUsuario/", function(req, res) {
    postsController.renderizarPorUsuario(req, res);
})

router.post("/verLikes", function(req, res) {
    postsController.verLikes(req, res);
})

router.post("/darLike", function(req, res) {
    postsController.darLike(req, res);
})

router.post("/tirarLike", function(req, res) {
    postsController.tirarLike(req, res);
})

router.post("/carregarMais", function(req, res) {
    postsController.carregarMais(req, res);
})

module.exports = router;