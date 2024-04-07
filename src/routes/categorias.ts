import express from 'express';
import { getCategorias } from '../controllers/categorias';

const router = express.Router();

router.get('/', getCategorias);

export default router;