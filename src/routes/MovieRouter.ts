import { Router } from 'express';
import { getMovies, getMoviesById, createMovie, deleteMovie } from '../controllers/MovieController';

const router = Router();

router.get('/', getMovies);
router.get('/:id', getMoviesById);
router.post('/', createMovie);
router.delete('/:id', deleteMovie);

export default router;
