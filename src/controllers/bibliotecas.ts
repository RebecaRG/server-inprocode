import { Request, Response } from 'express';
import Biblioteca from '../models/biblioteca';

export const getBibliotecas = async (req: Request, res: Response) => {
    const listBibliotecas = await Biblioteca.findAll();
    res.json(listBibliotecas);
};
