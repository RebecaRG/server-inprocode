import db from '../db/connection';
import { DataTypes } from 'sequelize';

const Biblioteca = db.define('Biblioteca', {
    id_biblioteca: {
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
    tableName: 'bibliotecas', 
    createdAt: false,
    updatedAt: false
});

export default Biblioteca;
