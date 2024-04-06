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
exports.getTienda = exports.getTiendas = void 0;
const tienda_1 = __importDefault(require("../models/tienda"));
const getTiendas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listTiendas = yield tienda_1.default.findAll();
    res.json(listTiendas);
});
exports.getTiendas = getTiendas;
const getTienda = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tienda = yield tienda_1.default.findByPk(id);
    if (tienda) {
        res.json(tienda);
    }
    else {
        res.status(404).json({
            msg: `No existe la tienda con el nombre ${id}`
        });
    }
});
exports.getTienda = getTienda;
// export const deleteTienda = async (req: Request, res: Response) => { 
//     const { id } = req.params;
//     const tienda = await Tienda.findByPk(id);
//     if(tienda) {
//         await tienda.destroy();
//         res.json({
//             msg: 'La tienda ha sido eliminada'
//         });
//     } else {
//         res.status(404).json({
//             msg: `No existe la tienda con el id ${id}`
//         });
//     }
// };
// export const postTienda = async (req: Request, res: Response) => { 
//     const { body } = req;
//     try {
//         await Tienda.create(body);
//         res.json({
//             msg: 'La tienda ha sido creada',
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             msg: 'Error al crear la tienda',
//         });
//     }
// };
// export const updateTienda = async (req: Request, res: Response) => { 
//     const { id } = req.params;
//     const { body } = req;
//     try {
//         const tienda = await Tienda.findByPk(id);
//         if(tienda) {
//             await tienda.update(body);
//             res.json({
//                 msg: 'La tienda ha sido actualizada'
//             });
//         } else {
//             res.status(404).json({
//                 msg: `No existe la tienda con el id ${id}`
//             });
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             msg: 'Error al actualizar la tienda',
//         });
//     }
// };
