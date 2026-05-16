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
    console.log("ACESSEI O POSTS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function renderizar(): ")
    var instrucaoSql = `
        select * from postsView order by idPost desc limit 12;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    renderizar,
    renderizarIndex
};