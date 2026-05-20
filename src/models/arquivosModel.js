var database = require("../database/config")

function salvar(nome, id) {
    console.log("ACESSEI O POSTS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function salvar(): ")
    var instrucaoSql = `
        update usuario set imagem_perfil = '${nome}' where idUsuario = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function salvarImagemPost (id, nome, res) {
    console.log("ACESSEI O POSTS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function salvarImagemPost(): ")
    var instrucaoSql = `
        update post set imagem = '${nome}' where idPost = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function verificarIDPost(id, res) {
    console.log("ACESSEI O POSTS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function verificarIDPost(): ")
    var instrucaoSql = `
        select idPost from post join usuario on fkUsuario = idUsuario where idUsuario = ${id} order by idPost desc limit 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    salvar,
    verificarIDPost,
    salvarImagemPost
};