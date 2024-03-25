"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const Producto = connection_1.default.define('Producto', {
    id_juego: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: sequelize_1.DataTypes.STRING
    },
    fecha_publicacion: {
        type: sequelize_1.DataTypes.INTEGER
    },
    editorial: {
        type: sequelize_1.DataTypes.STRING
    },
    autoria: {
        type: sequelize_1.DataTypes.STRING
    },
    ilustracion: {
        type: sequelize_1.DataTypes.STRING
    },
    participantes_min: {
        type: sequelize_1.DataTypes.INTEGER
    },
    participantes_max: {
        type: sequelize_1.DataTypes.INTEGER
    },
    duracion_minutos: {
        type: sequelize_1.DataTypes.INTEGER
    },
    edad_min: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Producto;
