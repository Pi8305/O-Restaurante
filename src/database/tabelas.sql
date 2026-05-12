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
    fkLinks int unique not null,
    constraint fkLinksCons foreign key (fkLinks) references links(idLinks)
);

create table post (
	idPost int primary key auto_increment,
    fkUsuario int,
    nome varchar(45) not null,
    descricao varchar(200),
    likes int
);

create table tags (
	idTag int primary key auto_increment,
    tag varchar(15)
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

drop table links;
drop table usuario;
drop table post;
drop table tags;
drop table conexao;

insert into post (fkUsuario, nome, descricao, likes) values
(1, 'Primeiro post', 'Descrição daora', 67);

insert into tags (tag) values
('legal');

insert into conexao values
(8, 1);

select post.*, tags.* from post join conexao on post.idPost = conexao.fkPost join tags on conexao.fkTags = tags.idTag order by idPost desc limit 5;

drop view postsView;
create view postsView as (select post.*, tags.* from post join conexao on post.idPost = conexao.fkPost join tags on conexao.fkTags = tags.idTag);

select * from postsView order by idPost desc limit 5;
