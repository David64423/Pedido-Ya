import {Restaurantes} from './../models/restaurantes.js';
import {Menu} from './../models/menu.js';
import {Pedidos} from './../models/pedidos.js';
import {PedidosS} from './../models/pedidosS.js';

export const getProjects = (req, res)=>{
    res.send('getting projects');
}


export const addRestaurant = async (req, res)=>{
    const {rest_descripcion} = req.body;

const newRestaurant=await Restaurantes.create({
        rest_descripcion
    })

    console.log(req.body); 

    res.send('creating Restaurant');
}


export const addMenu = async (req, res)=>{
    const {menu_descripcion, menu_precio, rest_id} = req.body;

const newMenu=await Menu.create({
        menu_descripcion,
        menu_precio,
        rest_id
    })

    console.log(req.body); 

    res.send('creating projects');
}


export const addPedido = async (req, res)=>{
    const {ped_precio, ped_cantidad, usu_id, menu_id} = req.body;

    const newPedido= await Pedidos.create({
        ped_precio,
        ped_cantidad,
        usu_id,
        menu_id
    })

    console.log(newPedido);

    res.send("Creating a new pedido");
}



export const getPedidos= async function(req,res){
    const rest=await Restaurantes.findAll({
        where:{
            rest_id :3,
        }
    });
    res.json(rest);
}

export const getPedidosSMC = async function(req, res){
    let pedidosS= await PedidosS.findAll({
        where:{
            restaurante:"McDonald",
        }
    })

    

    console.log(pedidosS);

    res.send(pedidosS);
}


export const getPedidosSBK = async function(req, res){
    const pedidosS= await PedidosS.findAll({
        where:{
            restaurante:"Burger King",
        }
    })

    

    console.log(pedidosS);

    return PedidosS;
}



export const getPedidosSKFC = async function(req, res){
    const pedidosS= await PedidosS.findAll({
        where:{
            restaurante:"KFC",
        }
    })

    

    console.log(pedidosS);

    return PedidosS;
}



export const addPedidoS = async (req, res)=>{
    const {cliente, comida,restaurante, precio} = req.body;

    const newPedidoS= await PedidosS.create({
        cliente,
        restaurante,
        precio,
        comida
    })

    console.log(newPedidoS);

    res.send("Creating a new pedidoS");
}