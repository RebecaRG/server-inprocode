import {Request, Response} from 'express';
import Producto from '../models/producto';

export const getProducts = async(req: Request, res: Response) => {
    const listProducts = await Producto.findAll();

    res.json(listProducts)
}

export const getProduct = async (req: Request, res: Response) => { 
    const { id } = req.params;
    const product = await Producto.findByPk(id);

    if(product) {
        res.json(product)
    } else {
        res.status(404).json({
            msg: `No existe el producto con el id ${id}`
    }) 
    }
}

export const deleteProduct = async (req: Request, res: Response) => { 
    const { id } = req.params;
    const product = await Producto.findByPk(id);

    if(product) {
        await product.destroy();
        res.status(404).json({
            msg: 'El producto ha sido eliminado'
    }) 
    } else {
        res.status(404).json({
            msg: `No existe el producto con el id ${id}`
    }) 
    }
}

export const postProduct = async (req: Request, res: Response) => { 
    const { body } = req;

    try{
        await Producto.create(body);

        res.json({
            msg: 'El producto ha sido creado',
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al crear el producto',
        })
    }
}

export const updateProduct = async (req: Request, res: Response) => { 
    const { body } = req;
    const { id } = req.params;

    try{
        const product = await Producto.findByPk(id);
        if(product) {
            await product.update(body);
            res.json({
                msg: 'El producto ha sido actualizado'
            })
        }else {
            res.status(404).json({
                msg: `No existe el producto con el id ${id}`
            }) 
        }

    }catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al actualizar el producto',
        })
    }



}