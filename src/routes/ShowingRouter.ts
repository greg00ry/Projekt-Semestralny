import { Router } from 'express';
import { getShowings, getShowingById, createShowing, deleteShowing} from '../controllers/ShowingController';

const router = Router();

router.get('/', getShowings);
router.get('/:id', getShowingById);
router.post('/', createShowing);
router.delete('/:id', deleteShowing);



export default router;
