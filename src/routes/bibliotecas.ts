import { Router } from 'express';
import { getBibliotecas } from '../controllers/bibliotecas'; 

const router = Router();

router.get('/', getBibliotecas);

export default router;
