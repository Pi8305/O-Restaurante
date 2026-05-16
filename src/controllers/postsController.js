var postsModel = require("../models/postsModel");

function renderizar() {
    postsModel.renderizar()
        .then(
            res.json({resposta})
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar a renderização! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function renderizarIndex() {
    postsModel.renderizarIndex()
        .then(
            res.json({resposta})
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar a renderização! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    renderizar,
    renderizarIndex
}