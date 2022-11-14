import {Restaurantes} from './../models/restaurantes.js';

export const getProjects = (req, res)=>{
    res.send('getting projects');
}


export const addRestaurant = async (req, res)=>{
    const {rest_descripcion} = req.body;

const newRestaurant=await Restaurantes.create({
        rest_descripcion
    })

    console.log(newRestaurant); 

    res.send('creating projects');
}