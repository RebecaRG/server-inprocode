import { Request, Response } from 'express';
import Tienda from '../models/tienda';

export const getTiendas = async (req: Request, res: Response) => {
    const listTiendas = await Tienda.findAll();

    res.json(listTiendas);
};


