var postsModel = require("../models/postsModel");

function renderizar(req, res) {
    postsModel.renderizar(req, res)
        .then(
            function (resultado) {
                    res.json(resultado);
                }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar a renderização! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function renderizarIndex(req, res) {
    postsModel.renderizarIndex(req, res)
        .then(
            function (resultado) {
                    res.json(resultado);
                }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar a renderização! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarPost(req, res) {
    let idPost = req.params.idPost
    postsModel.buscarPost(idPost)
        .then(
            function(resultado) {
                res.json(resultado[0]);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar a renderização do post! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        )
}

function buscarPostPorPesq(req, res) {
    let tag = req.params.tag
    postsModel.buscarPostPorPesq(tag)
        .then(
            function(resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar a pesquisa! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        )
}

module.exports = {
    renderizar,
    renderizarIndex,
    buscarPost,
    buscarPostPorPesq
}