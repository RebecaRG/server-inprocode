import {Request, Response} from 'express';
import Tienda from '../models/tienda';

export const getTiendas = async (req: Request, res: Response) => {
    const listTiendas = await Tienda.findAll();

    res.json(listTiendas);
};

export const getTienda = async (req: Request, res: Response) => { 
    const { id } = req.params;
    const tienda = await Tienda.findByPk(id);

    if(tienda) {
        res.json(tienda);
    } else {
        res.status(404).json({
            msg: `No existe la tienda con el nombre ${id}`
        });
    }
};

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