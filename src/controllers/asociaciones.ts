import { Request, Response } from 'express';
import Asociacion from '../models/asociacion';

export const getAsociaciones = async (req: Request, res: Response) => {
    const listAsociaciones = await Asociacion.findAll();
    res.json(listAsociaciones);
};
