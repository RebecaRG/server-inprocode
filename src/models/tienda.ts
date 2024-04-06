import db from '../db/connection';
import { DataTypes } from 'sequelize';

const Tienda = db.define('Tienda', {
    id_tienda: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    latitud: {
        type: DataTypes.DOUBLE
    },
    longitud: {
        type: DataTypes.DOUBLE
    }, 
    direccion: {
        type: DataTypes.STRING
    },
},{
    createdAt: false,
    updatedAt: false
});

export default Tienda;