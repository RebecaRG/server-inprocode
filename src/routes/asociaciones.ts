import { Router } from 'express';
import { getAsociaciones } from '../controllers/asociaciones';

const router = Router();

router.get('/', getAsociaciones);

export default router;
