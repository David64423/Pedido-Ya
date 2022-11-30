import express from 'express';
import projectsRoutes from './routes/projects.routes.js';
import bodyParser from 'body-parser';

import {addRestaurant, addMenu, getPedidos, addPedidoS, getPedidosSMC,getPedidosSKFC,getPedidosSBK} from './controllers/projects.controller.js';


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

app.post('/addPedido',urlencodedParser,(req, res)=>{
    try{
    addPedidoS(req, res);
    }
    finally{
        res.render('PedidoHecho.ejs');
    }
});

app.get('/verPedidosMc',urlencodedParser,(req,res)=>{
   getPedidosSMC(req,res);
   
})

app.get('/verPedidosBk',urlencodedParser,(req,res)=>{
    getPedidosSBK(req,res);
    
 })



app.get('/verPedidosKFC',urlencodedParser,(req,res)=>{
    getPedidosSKFC(req,res);
})



 app.get('/gg', urlencodedParser, getPedidos);

 app.use(express.static('public'));

 app.use('/static', express.static('/public'));




export default app;