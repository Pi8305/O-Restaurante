create database ORestaurante;
use ORestaurante;

create table links (
    idLinks int PRIMARY KEY auto_increment,
    linktree varchar(150),
    instagram varchar(150),
    twitter varchar(150),
    bluesky varchar(150),
    youtube varchar(150),
    discord varchar(150),
    outros1 varchar(150),
    outros2 varchar(150)
);

create table usuario (
    idUsuario int PRIMARY KEY auto_increment,
    nome varchar(45) not null,
    email varchar(45) unique not null,
    senha varchar(45) not null,
    dtCriacao datetime default current_timestamp not null,
    descricao varchar(200),
    idade int,
    pronomes varchar(45),
    imagem_perfil varchar(255),
    fkLinks int unique not null,
    constraint fkLinksCons foreign key (fkLinks) references links(idLinks)
);

create table post (
	idPost int primary key auto_increment,
    fkUsuario int,
    constraint fkUsuarioConst foreign key (fkUsuario) references usuario(idUsuario),
    nome varchar(45) not null,
    descricao varchar(200),
    imagem varchar(255),
    likes int
);

create table tags (
	idTag int primary key auto_increment,
    tag varchar(15) unique
);

create table conexao (
	fkPost int,
    fkTags int,
    constraint PKComposta2 primary key (fkPost, fkTags)
);

insert into links (idLinks) values
(default);

insert into usuario (nome, email, senha, fkLinks) values 
('aaaa', 'aaaa@bbbb', 'bbbb', last_insert_id());

select * from usuario join links on usuario.fkLinks = links.idLinks; 

drop table usuario;
drop table links;
drop table post;
drop table tags;
drop table conexao;

insert into post (fkUsuario, nome, descricao, imagem, likes) values
(1, 'Primeiro post', 'Descrição daora', 1, 67);

insert into tags (tag) values
('legal');

insert into conexao values
(1, 1);

select usuario.nome userr, usuario.idUsuario idUsuario, post.*, GROUP_CONCAT(tags.tag) tags from post join conexao on post.idPost = conexao.fkPost join tags on conexao.fkTags = tags.idTag join usuario on usuario.idUsuario = post.fkUsuario group by post.idPost having post.idPost = 1;

drop view postsView;
create view postsView as (select usuario.nome userr, usuario.idUsuario idUsuario, post.*, GROUP_CONCAT(tags.tag) tags from post join conexao on post.idPost = conexao.fkPost join tags on conexao.fkTags = tags.idTag join usuario on usuario.idUsuario = post.fkUsuario group by post.idPost);

select * from postsView order by idPost desc limit 20;
select * from postsView order by idPost limit 20;
select * from postsView where idPost > 20 order by idPost limit 20;
select userr, idUsuario, idPost, nome, descricao, likes, tags from postsView where idPost = 1;
select * from postsView where concat(',',tags, ',') like '%,daora,%' order by idPost desc limit 20;

insert into tags (tag) values
('daora');

update usuario set imagem_perfil = 'x' where idUsuario = 'x';

select idTag from tags where tag = 'tag';

select * from conexao;
select * from tags;
select * from post;

select idPost from postsView order by idPost desc limit 1;

update post set imagem = 'x' where idPost = 'x';

select idPost from post join usuario on fkUsuario = idUsuario where idUsuario = 1 order by idPost desc limit 1;