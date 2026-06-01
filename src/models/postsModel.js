var database = require("../database/config")

function renderizar(req, res) {
    console.log("ACESSEI O POSTS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function renderizar(): ")
    var instrucaoSql = `
        select usuario.nome userr, usuario.idUsuario idUsuario, post.*, GROUP_CONCAT(tags.tag) tags from post join conexao on post.idPost = conexao.fkPost join tags on conexao.fkTags = tags.idTag join usuario on usuario.idUsuario = post.fkUsuario group by post.idPost order by idPost desc limit 20;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function renderizarIndex(req, res) {
    console.log("ACESSEI O POSTS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function renderizarIndex(): ")
    var instrucaoSql = `
        select usuario.nome userr, usuario.idUsuario idUsuario, post.*, GROUP_CONCAT(tags.tag) tags from post join conexao on post.idPost = conexao.fkPost join tags on conexao.fkTags = tags.idTag join usuario on usuario.idUsuario = post.fkUsuario group by post.idPost order by idPost desc limit 12;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPost(idPost, res) {
    console.log("ACESSEI O POSTS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarPost(): ")
    var instrucaoSql = `
    select usuario.nome userr, usuario.idUsuario idUsuario, post.idPost, post.nome, post.descricao, (select count(fkPost) likes from likes where fkPost = ${idPost}) likes, post.imagem, GROUP_CONCAT(tags.tag) tags from post join conexao on post.idPost = conexao.fkPost join tags on conexao.fkTags = tags.idTag join usuario on usuario.idUsuario = post.fkUsuario group by post.idPost having post.idPost = ${idPost};    
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPostPorPesq(tag, res) {
    console.log("ACESSEI O POSTS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarPostPorPesq(): ")
    var instrucaoSql = `
        select usuario.nome userr, usuario.idUsuario idUsuario, post.*, GROUP_CONCAT(tags.tag) tags from post join conexao on post.idPost = conexao.fkPost join tags on conexao.fkTags = tags.idTag join usuario on usuario.idUsuario = post.fkUsuario group by post.idPost having concat(',' ,tags, ',') like '%,${tag},%' order by idPost desc limit 20;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function checkTags(tag, res) {
    console.log("ACESSEI O POSTS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function checkTags(): ")
    var instrucaoSql = `
        select tag from tags;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function salvarTags(tag, res) {
    console.log("ACESSEI O POSTS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function salvarTags(): ")
    var instrucaoSql = `
        insert into tags (tag) values 
        ('${tag}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function salvarPost(nome, desc, idUsuario) {
    console.log("ACESSEI O POSTS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function salvarPost(): ")
    var instrucaoSql = `
        insert into post (fkUsuario, nome, descricao) values
        (${idUsuario}, '${nome}', '${desc}');
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function adicionarTags(tags, idPost, res) {
    console.log("ACESSEI O POSTS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function adicionarTags(): ")
    var instrucaoSql = `
        insert into conexao (fkTags, fkPost) values (${tags}, ${idPost});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function verificarPostID(id, res) {
    console.log("ACESSEI O POSTS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function verificarPostID(): ")
    var instrucaoSql = `
        select idPost from post join usuario on fkUsuario = idUsuario where idUsuario = ${id} order by idPost desc limit 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function verificarID(tags, res) {
    console.log("ACESSEI O POSTS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function verificarID(): ")
    var instrucaoSql = `
        select idTag from tags where tag = '${tags}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function renderizarPorUsuario(id, res) {
    console.log("ACESSEI O POSTS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarPostPorPesq(): ")
    var instrucaoSql = `
        select usuario.nome userr, usuario.idUsuario idUsuario, post.*, GROUP_CONCAT(tags.tag) tags from post join conexao on post.idPost = conexao.fkPost join tags on conexao.fkTags = tags.idTag join usuario on usuario.idUsuario = post.fkUsuario group by post.idPost having usuario.idUsuario = ${id} order by idPost desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function verLikes(idUsuario, idPost, res) {
    console.log("ACESSEI O POSTS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function verLikes(): ")
    var instrucaoSql = `
        select * from likes where fkPost = ${idPost} and fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function darLike(idUsuario, idPost, res) {
    console.log("ACESSEI O POSTS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function darLike(): ")
    var instrucaoSql = `
        insert into likes values
        (${idPost}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function tirarLike(idUsuario, idPost, res) {
    console.log("ACESSEI O POSTS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function tirarLike(): ")
    var instrucaoSql = `
        delete from likes where fkUsuario = ${idUsuario} and fkPost = ${idPost}
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
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
    verificarID,
    verificarPostID,
    renderizarPorUsuario,
    verLikes,
    darLike,
    tirarLike
};