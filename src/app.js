import express from 'express';
import projectsRoutes from './routes/projects.routes.js';
import bodyParser from 'body-parser';

import {addRestaurant, addMenu, getPedidos, addPedidoS} from './controllers/projects.controller.js';


const app= express();
app.set('view engine','ejs');
//middlewares
 var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
 var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(projectsRoutes);

app.post('/confirmacionCompra',urlencodedParser,(req,res)=>{
    const {cliente, restaurante,comida, precio}=req.body;
    res.render('orden.ejs',{cliente,restaurante,comida,precio});
    console.log(req.body);
});



 app.get('/gg', urlencodedParser, getPedidos);

 app.use(express.static('public'));

 app.use('/static', express.static('/public'));




export default app;