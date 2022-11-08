const express = require ('express');

const app = express();
app.set('port','4000');
app.set('view engine','ejs');

app.use(express.json());




app.use(express.static(__dirname+'/public')); /*El dirname almacena mi url de donde esta mi proyecto,es una varia-
                                                ble global*/

app.listen(app.get('port'), () => {
    console.log('Port on', app.get('port'));
})