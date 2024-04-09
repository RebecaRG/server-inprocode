import db from '../db/connection';
import { DataTypes } from 'sequelize';

const Asociacion = db.define('Asociacion', {
    id_asociacion: {
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
    tableName: 'asociaciones',
    createdAt: false,
    updatedAt: false
});

export default Asociacion;
