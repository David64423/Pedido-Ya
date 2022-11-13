import express from 'express';
//const { sequelize } = require('./src/database/database.js');

const app = express();
app.set('port','4000');
app.set('view engine','ejs');

//app.use(express.json());

// import './models/usuarios.js';
// import './models/roles.js';
// import './models/restaurantes.js';


app.use(express.static('/public')); /*El dirname almacena mi url de donde esta mi proyecto,es una varia-
                                                ble global*/

app.listen(app.get('port'), () => {
    console.log('Port on', app.get('port'));
})


