show databases;
use flashi;
show tables;

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

select * from restaurantes;

insert into restaurantes values (null,"KFC");

create table menuMc(
menuMc_id int(4) primary key auto_increment,
menuMc_descripcion varchar(40),
menuMc_precio float (5,2)
);

create table menuKFC(
menuKfc_id int(4) primary key auto_increment,
menuKfc_descripcion varchar(40),
menuKfc_precio float (5,2)
);

create table menuBK(
menuBK_id int(4) primary key auto_increment,
menuBK_descripcion varchar(40),
menuBK_precio float (5,2)
);
drop table menu;

create table pedidos_T_Mc(
ped_id int(5) auto_increment,
usu_id int(2),
menuMc_id int(4),
rest_id int(3),
ped_cantidad int(3),
primary key (ped_id, usu_id,menuMc_id),
foreign key (rest_id) references restaurantes(rest_id) 
);

create table pedidos_T_Bk(
ped_id int(5) auto_increment,
usu_id int(2),
menuBk_id int(4),
rest_id int(3),
ped_cantidad int(3),
primary key (ped_id, usu_id,menuBk_id),
foreign key (rest_id) references restaurantes(rest_id) 

);

create table pedidos_T_KFC(
ped_id int(5) auto_increment,
usu_id int(2),
menuKfc_id int(4),
rest_id int(3),
ped_cantidad int(3),
primary key (ped_id, usu_id,menuKfc_id),
foreign key (usu_id) references usuarios (usu_id),
foreign key (menuKfc_id) references menuKFC (menuKfc_id),
foreign key (rest_id) references restaurantes (rest_id)
);
DROP TABLE pedidos_T_Bk;

show tables;
create table 

drop table restaurantes;
