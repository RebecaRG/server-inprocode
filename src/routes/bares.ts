import { Router } from 'express';
import { getBares } from '../controllers/bares'; 

const router = Router();

router.get('/', getBares);

export default router;