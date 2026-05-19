var arquivosModel = require("../models/arquivosModel");

function salvar(req, res) {
    const nome = req.file.filename;
    const id = req.body.id
    
    res.status(200).send("Imagem salva com sucesso!");
    arquivosModel.salvar(nome, id)
        .then(
            function (resultado) {
                    res.json(resultado);
                }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o nome da foto! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = { salvar }