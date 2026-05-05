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
    email varchar(45) not null,
    senha varchar(45) not null,
    dtCriacao datetime default current_timestamp not null,
    descricao varchar(200),
    idade int,
    pronomes varchar(45),
    fkLinks int unique,
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
	idTag int primary key,
    tag varchar(15)
);

create table conexao (
	fkPost int,
    fkTags int,
    constraint PKComposta2 primary key (fkPost, fkTags)
);

insert into usuario (nome, email, senha) values 
('aaaa', 'aaaa@bbbb', 'bbbb');