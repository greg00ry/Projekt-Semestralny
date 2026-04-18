import { Request, Response } from 'express';
import Movie from '../models/Movie';

export const getMovies = async (req: Request, res: Response): Promise<void> => {
  const users = await Movie.findAll();
  res.json(users);
};

export const getMoviesById = async (req: Request, res: Response): Promise<void> => {
  const user = await Movie.findByPk(Number(req.params.id));
  if (!user) {
    res.status(404).json({ message: 'User not found' });
    return;
  }
  res.json(user);
};

export const createMovie = async (req: Request, res: Response): Promise<void> => {
  const { title, durationMinutes, premiereDate, image, description } = req.body;
  const user = await Movie.create({ title, durationMinutes, premiereDate, image, description });
  res.status(201).json(user);
};



export const deleteMovie = async (req: Request, res: Response): Promise<void> => {
  const user = await Movie.findByPk(Number(req.params.id));
  if (!user) {
    res.status(404).json({ message: 'User not found' });
    return;
  }
  await user.destroy();
  res.status(204).send();
};
