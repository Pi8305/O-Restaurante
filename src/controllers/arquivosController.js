var arquivosModel = require("../models/arquivosModel");
const { verificarID } = require("../models/postsModel");

function salvar(req, res) {
    const nome = req.file.filename;
    const id = req.body.id

    arquivosModel.salvar(nome, id)
        .then(function (resultado) {
            res.status(200).send("Imagem salva com sucesso!");
        })
        .catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao salvar o nome da foto! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function salvarImagemPost(req, res) {
    const nome = req.file.filename;
    const id = req.body.id;

    arquivosModel.verificarIDPost(id, res)
        .then(function (resultado) {
            var idPost = resultado[0].idPost;
            arquivosModel.salvarImagemPost(idPost, nome)
                .then(function () {
                    res.status(200).send("Imagem salva!");
                })
        })
}



module.exports = { salvar, salvarImagemPost }