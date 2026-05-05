create database ORestaurante;
use table ORestaurante;

create table links (
    idLinks int PRIMARY KEY AUTO_INCREMENT,
    linktree varchar(150),
    instagram varchar(150),
    twitter varchar(150),
    bluesky varchar(150),
    youtube varchar(150),
    discord varchar(150),
    outros1 varchar(150),
    outros2 varchar(150)
)

create table usuario (
    idUsuario int PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) not null,
    email VARCHAR(45) not null,
    senha VARCHAR(45) not null,
    dtCriacao DATETIME not null,
    descricao varchar(200),
    idade int,
    pronomes varchar(45),
    fkLinks int unique
    constraint fkLinksCOns foreign key (fkLinks) references links(idLinks)
);

create table autor (
    idPost int AUTO_INCREMENT,
    fk
);