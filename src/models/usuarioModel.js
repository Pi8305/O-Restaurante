var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idUsuario, nome, email, senha, dtCriacao, ifnull(descricao, 'nada') descricao, ifnull(idade, 0) idade, ifnull(pronomes, 'nada') pronomes, imagem_perfil pfp, ifnull(links.linktree, 'nada') linktree, ifnull(links.instagram, 'nada') instagram, ifnull(links.twitter, 'nada') twitter, ifnull(links.bluesky, 'nada') bluesky, ifnull(links.youtube, 'nada') youtube, ifnull(links.discord, 'nada') discord, ifnull(links.outros1, 'nada') outros1, ifnull(links.outros2, 'nada') outros2 FROM usuario JOIN links ON usuario.fkLinks = links.idLinks WHERE usuario.email = '${email}' AND usuario.senha = '${senha}'
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha, fkEmpresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO links (idLinks) VALUES (default); 
        INSERT INTO usuario (nome, email, senha, fkLinks) VALUES ('${nome}', '${email}', '${senha}', last_insert_id());
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function extras(mandar, id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function extras()")
    var instrucaoSql = `
        update usuario set descricao = '${mandar[0]}' where idUsuario = ${Number(id)};
        update usuario set idade = ${Number(mandar[1])} where idUsuario = ${Number(id)};
        update usuario set pronomes = '${mandar[2]}' where idUsuario = ${Number(id)};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function links(mandar, id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function links()")
    var instrucaoSql = `
        update links set linktree = '${mandar[0]}' where idLinks = ${Number(id)};
        update links set instagram = '${mandar[1]}' where idLinks = ${Number(id)};
        update links set twitter = '${mandar[2]}' where idLinks = ${Number(id)};
        update links set bluesky = '${mandar[3]}' where idLinks = ${Number(id)};
        update links set youtube = '${mandar[4]}' where idLinks = ${Number(id)};
        update links set discord = '${mandar[5]}' where idLinks = ${Number(id)};
        update links set outros1 = '${mandar[6]}' where idLinks = ${Number(id)};
        update links set outros2 = '${mandar[7]}' where idLinks = ${Number(id)};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pesquisarUsuario(usuario, res) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarUsuario()")
    var instrucaoSql = `
        SELECT idUsuario, nome, email, senha, dtCriacao, ifnull(descricao, 'nada') descricao, ifnull(idade, 0) idade, ifnull(pronomes, 'nada') pronomes, imagem_perfil pfp, ifnull(links.linktree, 'nada') linktree, ifnull(links.instagram, 'nada') instagram, ifnull(links.twitter, 'nada') twitter, ifnull(links.bluesky, 'nada') bluesky, ifnull(links.youtube, 'nada') youtube, ifnull(links.discord, 'nada') discord, ifnull(links.outros1, 'nada') outros1, ifnull(links.outros2, 'nada') outros2 FROM usuario JOIN links ON usuario.fkLinks = links.idLinks WHERE usuario.idUsuario = ${usuario}
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    extras,
    links,
    pesquisarUsuario
};