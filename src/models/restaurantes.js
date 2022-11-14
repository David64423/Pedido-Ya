import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';

import {Menu} from './menu.js';

export const Restaurantes=sequelize.define('restaurantes',{
    rest_id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    rest_descripcion:{
        type: DataTypes.STRING,
    }
},
{
    timestamps:false,
});

Restaurantes.hasMany(Menu, { /*Esto quiere decir que un projecto tiene muchas tareas */
    
    foreignKey: 'rest_id',  /* Esta es la columna que se agregara a task para la relación  */

    sourceKey:'rest_id' /* Esta es a que columna hace referencia la foreignKey */
})

Menu.belongsTo(Restaurantes,{ /* Aqui le aclaramos que muchas tareas pueden pertenecer a un solo proyecto *//* Hay
                            que aclarar esto en los dos lados de la relación */


    foreignKey: 'rest_id',  /* Esta es la columna que se agregara a task para la relación  */

    targetId:'rest_id', /* Esta es a que columna hace referencia la foreignKey */
});