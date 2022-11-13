import {DataTypes} from 'sequelize';
import {sequelize} from './../database/database.js';


export const Menu=sequelize.define('menu',{
    menu_id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    menu_descripcion:{
        type: DataTypes.STRING,
    },
    menu_precio:{
        type: DataTypes.FLOAT,
    },
},{
    timestamps:false,
});


