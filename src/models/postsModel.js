var database = require("../database/config")

function renderizar() {
    console.log("ACESSEI O POSTS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function renderizar(): ")
    var instrucaoSql = `
        create view postsView as (select post.*, tags.* from post join conexao on post.idPost = conexao.fkPost join tags on conexao.fkTags = tags.idTag);
        select * from postsView order by idPost desc limit 5;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    renderizar
};