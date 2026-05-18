var database = require("../database/config")

function renderizar(req, res) {
    console.log("ACESSEI O POSTS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function renderizar(): ")
    var instrucaoSql = `
        select * from postsView order by idPost desc limit 20;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function renderizarIndex(req, res) {
    console.log("ACESSEI O POSTS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function renderizarIndex(): ")
    var instrucaoSql = `
        select * from postsView order by idPost desc limit 12;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPost(idPost, res) {
    console.log("ACESSEI O POSTS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarPost(): ")
    var instrucaoSql = `
        select userr, idUsuario, idPost, nome, descricao, likes, tags from postsView where idPost = ${idPost};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPostPorPesq(tag, res) {
    console.log("ACESSEI O POSTS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarPostPorPesq(): ")
    var instrucaoSql = `
        select * from postsView where concat(',',tags, ',') like '%,${tag},%' order by idPost desc limit 20;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    renderizar,
    renderizarIndex,
    buscarPost,
    buscarPostPorPesq
};