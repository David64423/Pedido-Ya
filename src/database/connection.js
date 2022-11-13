var mysql = require('mysql');
var conexion = mysql.createConnection({
    host:'localhost',
    database:'pedidoYa',
    user:'root',
    password:''
}); 

conexion.connect(function(error){
    if (error){
        throw error;
    }else{
        console.log('Conexion exitosa');
    }
});


conexion.end();



