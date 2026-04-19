import { Router } from 'express';
import { getSeats, getSeatById, getTakenSeatsByShowing } from '../controllers/SeatController';

const router = Router();

router.get('/', getSeats);
router.get('/:id', getSeatById);
router.get('/showing/:showingId', getTakenSeatsByShowing);


export default router;
