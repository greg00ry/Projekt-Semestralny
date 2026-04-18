import { Router } from 'express';
import { getReservations, getReservationById, createReservations, deleteReservations } from '../controllers/ReservationsController';

const router = Router();

router.get('/', getReservations);
router.get('/:id', getReservationById);
router.post('/', createReservations);
router.delete('/:id', deleteReservations);

export default router;
