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
    likes int,
    dtPost datetime default current_timestamp not null
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
(default),
(default),
(default),
(default),
(default),
(default),
(default),
(default),
(default),
(default),
(default),
(default);

insert into usuario (nome, email, senha, dtCriacao, fkLinks) values 
('aaaa', 'aaaa@bbbb', 'bbbb', '26-12-01 22:55:09', 1),
('bbbb', 'cccc@dddd', 'bbbb', '26-11-01 22:55:09', 2),
('cccc', 'eeee@ffff', 'bbbb', '26-10-01 22:55:09', 3),
('dddd', 'gggg@hhhh', 'bbbb', '26-09-01 22:55:09', 4),
('eeee', 'iiii@jjjj', 'bbbb', '26-08-01 22:55:09', 5),
('ffff', 'kkkk@llll', 'bbbb', '26-07-01 22:55:09', 6),
('gggg', 'bbbb@aaaa', 'bbbb', '26-06-01 22:55:09', 7),
('hhhh', 'dddd@cccc', 'bbbb', '26-05-01 22:55:09', 8),
('iiii', 'ffff@eeee', 'bbbb', '26-04-01 22:55:09', 9),
('jjjj', 'hhhh@ffff', 'bbbb', '26-03-01 22:55:09', 10),
('kkkk', 'gggg@ffff', 'bbbb', '26-02-01 22:55:09', 11),
('llll', 'iiii@ffff', 'bbbb', '26-01-01 22:55:09', 12);

insert into post (fkUsuario, nome, descricao, imagem, likes, dtPost) values
(1, 'Primeiro post', 'Descrição daora', '1.png', 2, '26-01-25 22:00'),
(1, 'Primeiro post', 'Descrição daora', '2.png', 2, '26-02-25 22:00'),
(1, 'Primeiro post', 'Descrição daora', '3.png', 2, '26-03-25 22:00'),
(1, 'Primeiro post', 'Descrição daora', '4.png', 2, '26-04-25 22:00'),
(1, 'Primeiro post', 'Descrição daora', '', 2, '26-05-25 22:00'),
(1, 'Primeiro post', 'Descrição daora', '', 2, '26-06-25 22:00'),
(1, 'Primeiro post', 'Descrição daora', '', 2, '26-07-25 22:00'),
(1, 'Primeiro post', 'Descrição daora', '', 2, '26-08-25 22:00'),
(1, 'Primeiro post', 'Descrição daora', '', 2, '26-09-25 22:00'),
(1, 'Primeiro post', 'Descrição daora', '', 2, '26-10-25 22:00'),
(1, 'Primeiro post', 'Descrição daora', '', 2, '26-11-25 22:00'),
(1, 'Primeiro post', 'Descrição daora', '', 2, '26-12-25 22:00');

insert into tags (tag) values
('legal'),
('daora'),
('maximo'),
('mds'),
('ata'),
('bacana');

insert into conexao values
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1),
(2, 2),
(4, 2),
(6, 2),
(8, 2),
(10, 2),
(12, 2);

select * from usuario join links on usuario.fkLinks = links.idLinks; 

drop table post;
drop table tags;
drop table conexao;
drop table usuario;
drop table links;

select usuario.nome userr, usuario.idUsuario idUsuario, post.*, GROUP_CONCAT(tags.tag) tags from post join conexao on post.idPost = conexao.fkPost join tags on conexao.fkTags = tags.idTag join usuario on usuario.idUsuario = post.fkUsuario group by post.idPost having post.idPost = 2;

drop view postsView;
create view postsView as (select usuario.nome userr, usuario.idUsuario idUsuario, post.*, GROUP_CONCAT(tags.tag) tags from post join conexao on post.idPost = conexao.fkPost join tags on conexao.fkTags = tags.idTag join usuario on usuario.idUsuario = post.fkUsuario group by post.idPost);

select * from postsView order by idPost desc limit 20;
select * from postsView order by idPost limit 20;
select * from postsView where idPost > 20 order by idPost limit 20;
select userr, idUsuario, idPost, nome, descricao, likes, tags from postsView where idPost = 1;
select * from postsView where concat(',',tags, ',') like '%,daora,%' order by idPost desc limit 20;

update usuario set imagem_perfil = 'x' where idUsuario = 'x';

select idTag from tags where tag = 'tag';

select * from conexao;
select * from tags;
select * from post;
select * from usuario;
select * from links;

select idPost from postsView order by idPost desc limit 1;

update post set imagem = '1.png' where idPost = '1';

select idPost from post join usuario on fkUsuario = idUsuario where idUsuario = 1 order by idPost desc limit 1;

delete from tags where idtag = 5;

select tags.tag, count(conexao.fkPost) postsComTag from tags left join conexao ON tags.idTag = conexao.fkTags group by tags.idTag order by postsComTag desc limit 6;

select month(usuario.dtCriacao) mes, count(usuario.idUsuario) usuMes from usuario group by mes order by mes;
select month(post.dtPost) mes, count(post.idPost) postMes from post group by mes order by mes;

select * from post order by likes desc limit 1;
select tags.tag, sum(post.likes) likesTag from post left join conexao on conexao.fkPost = post.idPost left join tags on conexao.fkTags = tags.idTag group by tags.tag order by likesTag desc limit 1;
