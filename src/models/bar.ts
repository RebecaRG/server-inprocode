import db from '../db/connection';
import { DataTypes } from 'sequelize';

const Bar = db.define('Bar', {
    id_bar: {
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
}, {
    tableName: 'bares',
    createdAt: false,
    updatedAt: false
});

export default Bar;
