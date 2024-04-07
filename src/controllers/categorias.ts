
import {Request, Response} from 'express';

export const getCategorias = async (req: Request, res: Response) => {
    const categorias = ['tiendas', 'bares', 'bibliotecas', 'asociaciones'];

    res.json(categorias);
};
