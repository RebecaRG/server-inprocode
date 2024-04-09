import { Request, Response } from 'express';
import Bar from '../models/bar';

export const getBares = async (req: Request, res: Response) => {
    const listBares = await Bar.findAll();

    res.json(listBares);
};