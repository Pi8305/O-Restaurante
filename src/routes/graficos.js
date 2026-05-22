var express = require("express");
var router = express.Router();

var graficosController = require("../controllers/graficosController");

router.get("/tags", function (req, res) {
    graficosController.graficoTags(req, res);
})

router.get("/posts", function (req, res) {
    graficosController.graficoPosts(req, res);
})

router.get("/usuarios", function (req, res) {
    graficosController.graficoUsuarios(req, res);
})

router.get("/likesPost", function (req, res) {
    graficosController.graficosLikesPost(req, res);
})

router.get("/likesTag", function (req, res) {
    graficosController.graficosLikesTag(req, res);
})

module.exports = router;