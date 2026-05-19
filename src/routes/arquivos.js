var express = require("express");
var router = express.Router();
const uploadPfp = require('../config/configUploadPfp'); // ARQUIVO COM A CONFIGURAÇÃO DO UPLOAD
const arquivosController = require('../controllers/arquivosController');

router.post("/postArquivo", uploadPfp.single('foto'), (req, res) => {
    arquivosController.salvar(req, res);
});


module.exports = router;