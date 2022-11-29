import {Router} from 'express';
import {addRestaurant, addMenu} from '../controllers/projects.controller.js';
//import {urlencodedParser, jsonParser} from './../app.js';

const router = Router();


//router.get('/projects', getProjects) //Aca vamos a hacer que se puedan ver todos los proyectos
                                        /*Aqui le digo que cuando se vaya a esta ruta
                                        se va a ejecutar la funcion que importe 
                                        "getProjects" */

//router.post('/projects', createProject) //Cuando haga una ruta post quiero crear proyectos
                                        /*Aqui le digo que cuando se vaya a esta ruta
                                        se va a ejecutar la funcion que importe 
                                        "createProjects" */



router.post('/addPlato',
addMenu
);



router.get('/addComida',(req,res)=>{
    res.render("agregarComida");
})

router.get('/contacto',(req,res)=>{
    res.render("contacto");
})

router.get('/addRestaurant.ejs',(req,res)=>{
    res.render("addRestaurant");
})

// router.get('/noUsuario',(req, res, next)={

// })
// router.get('/terminos', function(req, res, next) {
//     res.render('loggin');
//   });






export default router;