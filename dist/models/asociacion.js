"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const Asociacion = connection_1.default.define('Asociacion', {
    id_asociacion: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    latitud: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    longitud: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    direccion: {
        type: sequelize_1.DataTypes.STRING
    },
}, {
    tableName: 'asociaciones',
    createdAt: false,
    updatedAt: false
});
exports.default = Asociacion;
