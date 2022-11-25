import express from 'express';
import projectsRoutes from './routes/projects.routes.js';
import bodyParser from 'body-parser';

import {addRestaurant, addMenu, getPedidos} from './controllers/projects.controller.js';


const app= express();
app.set('view engine','ejs');
//middlewares
export var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
export var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(projectsRoutes);

app.post('/addRestaurante',urlencodedParser,addRestaurant
 /*, addRestaurant */);

 app.get('/gg', urlencodedParser, getPedidos);

 app.use(express.static('public'));

 app.use('/static', express.static('/public'));




export default app;