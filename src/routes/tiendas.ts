import { Router } from 'express';
import { getTiendas } from '../controllers/tiendas';

const router = Router();

router.get('/', getTiendas);

export default router;
