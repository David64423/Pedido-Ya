import express from 'express';
import projectsRoutes from './routes/projects.routes.js';



const app= express();
app.set('view engine','ejs');
//middlewares
app.use(express.json()) /* Estas 2 lineas de codigo permite que cada vez que envien un
                        codigo en formato json el servidor va a poder y lo va a guardar 
                        dentro de un req.body  ,es decir que cada vez que yo llame
                        al req.body voy a poder usar los datos que me esta enviando
                        la aplicación cliente */

app.use(projectsRoutes);
//app.use(express.static(path.join(__dirname, 'public')));


app.get('/addComida',(req,res)=>{
    res.render("agregarComida");
})

app.get('/index.ejs',(req,res)=>{
    res.render("index");
})

export default app;