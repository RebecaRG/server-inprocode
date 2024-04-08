"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const Evento = connection_1.default.define('Evento', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titulo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lugar: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    inicio: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    fin: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
    }
}, {
    tableName: 'eventos',
    timestamps: false,
});
exports.default = Evento;
