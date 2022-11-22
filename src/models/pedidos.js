import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';

import {Usuarios} from './usuarios.js';
import {Menu} from './menu.js';

export const Pedidos=sequelize.define('pedidos',{
    ped_id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true,
    },

    ped_precio:{
        type: DataTypes.FLOAT,
    },
    ped_cantidad:{
        type: DataTypes.INTEGER,
    }/*,
    ped_usuario:{

    },
    ped_menu:{

    }*/
},{
    timestamps:false,
});


Usuarios.hasMany(Pedidos, { /*Esto quiere decir que un projecto tiene muchas tareas */
    
    foreignKey: 'usu_id',  /* Esta es la columna que se agregara a task para la relación  */

    sourceKey:'usu_id' /* Esta es a que columna hace referencia la foreignKey */
})

Pedidos.belongsTo(Usuarios,{ /* Aqui le aclaramos que muchas tareas pueden pertenecer a un solo proyecto *//* Hay
                            que aclarar esto en los dos lados de la relación */


    foreignKey: 'usu_id',  /* Esta es la columna que se agregara a task para la relación  */

    targetId:'usu_id', /* Esta es a que columna hace referencia la foreignKey */
});



Menu.hasMany(Pedidos, { /*Esto quiere decir que un projecto tiene muchas tareas */
    
    foreignKey: 'menu_id',  /* Esta es la columna que se agregara a task para la relación  */

    sourceKey:'menu_id' /* Esta es a que columna hace referencia la foreignKey */
})

Pedidos.belongsTo(Usuarios,{ /* Aqui le aclaramos que muchas tareas pueden pertenecer a un solo proyecto *//* Hay
                            que aclarar esto en los dos lados de la relación */


    foreignKey: 'menu_id',  /* Esta es la columna que se agregara a task para la relación  */

    targetId:'menu_id', /* Esta es a que columna hace referencia la foreignKey */
});