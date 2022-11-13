import {DataTypes} from 'sequelize';
import {sequelize} from './../database/database.js';



export const Usuarios = sequelize.define('usuarios',{
    usu_id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },

    usu_nombre:{
        type: DataTypes.STRING,
    },

    usu_apellido:{
        type: DataTypes.STRING,
    },
    usu_email:{
        type: DataTypes.STRING,
    },

    usu_password:{
        type: DataTypes.STRING,
    },

    usu_direccion:{
        type: DataTypes.STRING,
    },

    usu_tel:{
        type: DataTypes.STRING,
    }

},{
    timestamps:false,
});

