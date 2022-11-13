import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';
import {Usuarios} from './usuarios.js';

export const Roles = sequelize.define('roles',{
    rol_id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    rol_descripcion:{
        type: DataTypes.STRING,
    },
},{
    timestamps:false,
});

Roles.hasMany(Usuarios, { /*Esto quiere decir que un projecto tiene muchas tareas */
    
    foreignKey: 'rol_id',  /* Esta es la columna que se agregara a task para la relación  */

    sourceKey:'rol_id' /* Esta es a que columna hace referencia la foreignKey */
})

Usuarios.belongsTo(Roles,{ /* Aqui le aclaramos que muchas tareas pueden pertenecer a un solo proyecto *//* Hay
                            que aclarar esto en los dos lados de la relación */


    foreignKey: 'rol_id',  /* Esta es la columna que se agregara a task para la relación  */

    targetId:'rol_id', /* Esta es a que columna hace referencia la foreignKey */
});