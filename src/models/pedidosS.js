import { DataTypes } from "sequelize";
import {sequelize} from '../database/database.js';

export const PedidosS = sequelize.define('pedidosS',{
id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey: true,
},
cliente:{
    type: DataTypes.STRING,
},
comida:{
    type: DataTypes.STRING,
},
cantidad:{
    type: DataTypes.INTEGER,
},
restaurante:{
    type: DataTypes.STRING,
},
precio:{
    type: DataTypes.FLOAT,
}
});