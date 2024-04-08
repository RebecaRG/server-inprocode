import { Router } from 'express';
import { deleteEvento, getEvento, getEventos, postEvento, updateEvento } from '../controllers/eventos';

const router = Router();

router.get('/', getEventos);
router.get('/:id', getEvento);
router.delete('/:id', deleteEvento);
router.post('/', postEvento);
router.put('/:id', updateEvento);

export default router;
