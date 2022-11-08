create database pedidoYa;
use pedidoYa;

create table usuarios(
usu_id int(2) primary key auto_increment,
usu_nombre varchar(30),
usu_Apellido varchar(30),
usu_email varchar(50),
usu_pass varchar(30),
usu_direccion varchar(40),
usu_tel varchar(30),
rol_id int(2),
foreign key (rol_id) references roles(rol_id)
);


create table roles(
rol_id int(2) primary key auto_increment,
rol_descripcion varchar(30)
);
insert into roles(rol_descripcion) values("Cliente");
select * from roles;

create table restaurantes(
rest_id int(3) primary key auto_increment,
rest_descripcion varchar(30)
);


insert into restaurantes values (null,"KFC");

create table menu(
menu_id int(4) primary key auto_increment,
menu_descripcion varchar(40),
menu_precio float (5,2),
rest_id int(3),
foreign key (rest_id) references restaurantes (rest_id)
);
drop table menu;

create table pedidos_T(
ped_id int(5) auto_increment,
usu_id int(2),
menu_id int(4),
ped_cantidad int(3),
ped_precio float(6,2), 
primary key (ped_id, usu_id,menu_id),
foreign key (usu_id) references usuarios(usu_id),
foreign key (menu_id) references menu(menu_id)
);
