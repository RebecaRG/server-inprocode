import db from '../db/connection';
import { DataTypes } from 'sequelize';

const Producto = db.define('Producto', {
    id_juego: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING
    },
    fecha_publicacion: {
        type: DataTypes.INTEGER
    },
    editorial: {
        type: DataTypes.STRING
    },
    autoria: {
        type: DataTypes.STRING
    },
    ilustracion: {
        type: DataTypes.STRING
    },
    participantes_min: {
        type: DataTypes.INTEGER
    },
    participantes_max: {
        type: DataTypes.INTEGER
    },
    duracion_minutos: {
        type: DataTypes.INTEGER
    },
    edad_min: {
        type: DataTypes.INTEGER
    }
}, {
    createdAt: false,
    updatedAt: false
});

export default Producto;