import { Router } from 'express';
import { getMovies, getMoviesById, createMovie, deleteMovie } from '../controllers/MovieController';

const router = Router();

router.get('/', getMovies);
router.get('/:id', getMoviesById);


export default router;
