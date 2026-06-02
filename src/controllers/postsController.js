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
    let idPost = req.body.idPostServer
    postsModel.buscarPost(idPost)
        .then(
            function (resultado) {
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
            function (resultado) {
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

function checkTags(req, res) {
    postsModel.checkTags(req, res)
        .then(
            function (resultado) {
                res.status(200).json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao checkar as tags! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        )
}

function salvarTags(req, res) {
    let tags = req.body.tagServerAdd
    let tag = tags.split(',')
    for (let i = 0; i < tag.length; i++) {
        postsModel.salvarTags(tag[i])
    }
    res.status(200).json("Tags salvas!")
}

function salvarPost(req, res) {
    let nome = req.body.nomePostServer
    let desc = req.body.descPostServer
    let idUsuario = req.body.idUsuario

    postsModel.salvarPost(nome, desc, idUsuario)
        .then(function (resultado) {
            console.log(`Salvou o post`)
            res.status(200).json(resultado)
        })

}

function adicionarTags(req, res) {
    let tags = req.body.tagsPostServer.split(",");
    let idUsuario = req.body.idUsuario

    postsModel.verificarPostID(idUsuario, res)
        .then(function(resultado) {
            let idPost = resultado[0].idPost;

            for (let i = 0; i < tags.length; i++) {
                postsModel.verificarID(tags[i])
                    .then(function(resposta) {
                        let idTag = resposta[0].idTag;
                        postsModel.adicionarTags(idTag, idPost);
                    })
            }

            res.status(200).json("Tags adicionadas!");
        })
        .catch(function(erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        })
}

function renderizarPorUsuario(req, res) {
    let id = req.body.idUsuarioServer
    
    postsModel.renderizarPorUsuario(id, res)
    .then(function(resposta) {
        console.log('Achou o post!')
        res.status(200).json(resposta)
    })
}

function verLikes(req, res) {
    console.log('chegou no controller')
    let idUsuario = req.body.idUsuarioServer
    let idPost = req.body.idPostServer

    postsModel.verLikes(idUsuario, idPost, res)
    .then(function(resposta) {
        res.status(200).json(resposta)
    })
}

function darLike(req, res) {
    let idUsuario = req.body.idUsuarioServer
    let idPost = req.body.idPostServer

    postsModel.darLike(idUsuario, idPost, res)
    .then(
        function(resposta) {
            res.status(200).json(resposta)
        }
    )
}

function tirarLike(req, res) {
    let idUsuario = req.body.idUsuarioServer
    let idPost = req.body.idPostServer

    postsModel.tirarLike(idUsuario, idPost, res)
    .then(
        function(resposta) {
            res.status(200).json(resposta)
        }
    )
}

function carregarMais(req, res) {
    let carregados = req.body.carregadosServer

    postsModel.carregarMais(carregados, res)
    .then(
        function(resposta) {
            res.status(200).json(resposta)
        }
    )
}

module.exports = {
    renderizar,
    renderizarIndex,
    buscarPost,
    buscarPostPorPesq,
    checkTags,
    salvarTags,
    salvarPost,
    adicionarTags,
    renderizarPorUsuario,
    verLikes,
    darLike,
    tirarLike,
    carregarMais
}