"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEvento = exports.postEvento = exports.deleteEvento = exports.getEvento = exports.getEventos = void 0;
const evento_1 = __importDefault(require("../models/evento"));
const getEventos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listaEventos = yield evento_1.default.findAll();
    res.json(listaEventos);
});
exports.getEventos = getEventos;
const getEvento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const evento = yield evento_1.default.findByPk(id);
    if (evento) {
        res.json(evento);
    }
    else {
        res.status(404).json({
            msg: `No existe el evento con el id ${id}`
        });
    }
});
exports.getEvento = getEvento;
const deleteEvento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const evento = yield evento_1.default.findByPk(id);
    if (evento) {
        yield evento.destroy();
        res.json({
            msg: 'El evento ha sido eliminado'
        });
    }
    else {
        res.status(404).json({
            msg: `No existe el evento con el id ${id}`
        });
    }
});
exports.deleteEvento = deleteEvento;
const postEvento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const evento = yield evento_1.default.create(body);
        res.json({
            msg: 'El evento ha sido creado',
            evento
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al crear el evento'
        });
    }
});
exports.postEvento = postEvento;
const updateEvento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const evento = yield evento_1.default.findByPk(id);
        if (evento) {
            yield evento.update(body);
            res.json({
                msg: 'El evento ha sido actualizado',
                evento
            });
        }
        else {
            res.status(404).json({
                msg: `No existe el evento con el id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al actualizar el evento'
        });
    }
});
exports.updateEvento = updateEvento;
