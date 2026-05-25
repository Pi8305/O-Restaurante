var database = require("../database/config");

function graficoTags(resposta) {
    console.log("ACESSEI O POSTS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function graficoTags(): ")
    var instrucaoSql = `
        select tags.tag tag, count(conexao.fkPost) postsComTag from tags left join conexao ON tags.idTag = conexao.fkTags group by tags.idTag order by postsComTag desc limit 6;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficoPosts(resposta) {
    console.log("ACESSEI O POSTS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function graficoPosts(): ")
    var instrucaoSql = `
        select month(post.dtPost) mes, count(post.idPost) postMes from post group by mes order by mes;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficoUsuarios(resposta) {
    console.log("ACESSEI O POSTS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function graficoUsuarios(): ")
    var instrucaoSql = `
        select month(usuario.dtCriacao) mes, count(usuario.idUsuario) usuMes from usuario group by mes order by mes;    
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficosLikesPost(resposta) {
    console.log("ACESSEI O POSTS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function graficosLikesPost(): ")
    var instrucaoSql = `
        select * from post order by likes desc limit 1;    
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficosLikesTag(resposta) {
    console.log("ACESSEI O POSTS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function graficosLikesTag(): ")
    var instrucaoSql = `
        select tags.tag, sum(post.likes) likesTag from post left join conexao on conexao.fkPost = post.idPost left join tags on conexao.fkTags = tags.idTag group by tags.tag order by likesTag desc limit 1;   
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = { graficoTags, graficoPosts, graficoUsuarios, graficosLikesPost, graficosLikesTag };