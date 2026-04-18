import { Request, Response } from 'express';
import Movie from '../models/Movie';

export const getMovies = async (req: Request, res: Response): Promise<void> => {
  const movies = await Movie.findAll();
  res.json(movies);
};

export const getMoviesById = async (req: Request, res: Response): Promise<void> => {
  const movie = await Movie.findByPk(Number(req.params.id));
  if (!movie) {
    res.status(404).json({ message: 'Movie not found' });
    return;
  }
  res.json(movie);
};

export const createMovie = async (req: Request, res: Response): Promise<void> => {
  const { title, durationMinutes, premiereDate, image, description } = req.body;
  const movie = await Movie.create({ title, durationMinutes, premiereDate, image, description });
  res.status(201).json(movie);
};



export const deleteMovie = async (req: Request, res: Response): Promise<void> => {
  const movie = await Movie.findByPk(Number(req.params.id));
  if (!movie) {
    res.status(404).json({ message: 'Movie not found' });
    return;
  }
  await movie.destroy();
  res.status(204).send();
};
