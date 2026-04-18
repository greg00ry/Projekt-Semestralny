import { Router } from 'express';
import { getSeats, getSeatById } from '../controllers/SeatController';

const router = Router();

router.get('/', getSeats);
router.get('/:id', getSeatById);


export default router;
