var graficosModel = require("../models/graficosModel");

function graficoTags(req, res) {
    graficosModel.graficoTags()
        .then(function(resultado) {
            res.status(200).send(resultado);
        })
        .catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao pegar as tags! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function graficoPosts(req, res) {
    graficosModel.graficoPosts()
        .then(function(resultado) {
            res.status(200).send(resultado);
        })
        .catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao pegar os posts! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function graficoUsuarios(req, res) {
    graficosModel.graficoUsuarios()
        .then(function(resultado) {
            res.status(200).send(resultado);
        })
        .catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao pegar os usuarios! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function graficosLikesPost(req, res) {
    graficosModel.graficosLikesPost()
        .then(function(resultado) {
            res.status(200).send(resultado);
        })
        .catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao pegar o post! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function graficosLikesTag(req, res) {
    graficosModel.graficosLikesTag()
        .then(function(resultado) {
            res.status(200).send(resultado);
        })
        .catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao pegar a tag! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = { graficoTags, graficoPosts, graficoUsuarios, graficosLikesPost, graficosLikesTag }