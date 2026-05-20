var express = require("express");
var router = express.Router();
const uploadPfp = require('../config/configUploadPfp');
const uploadPost = require('../config/configUploadPosts'); // ARQUIVO COM A CONFIGURAÇÃO DO UPLOAD
const arquivosController = require('../controllers/arquivosController');

router.post("/postArquivo", uploadPfp.single('foto'), (req, res) => {
    arquivosController.salvar(req, res);
});

router.post("/salvarImagemPost", uploadPost.single('foto'), (req, res) => {
    arquivosController.salvarImagemPost(req, res);
});

router.get("/verificarIDPost", function(req, res) {
    arquivosController.verificarIDPost(req, res);
})

module.exports = router;