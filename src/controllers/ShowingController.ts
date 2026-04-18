import { Request, Response } from 'express';
import Showing from '../models/Showing';

export const getShowings = async (req: Request, res: Response): Promise<void> => {
  const users = await Showing.findAll();
  res.json(users);
};

export const getShowingById = async (req: Request, res: Response): Promise<void> => {
  const user = await Showing.findByPk(Number(req.params.id));
  if (!user) {
    res.status(404).json({ message: 'User not found' });
    return;
  }
  res.json(user);
};

export const createShowing = async (req: Request, res: Response): Promise<void> => {
  const { movieId, roomId, date, price } = req.body;
  const user = await Showing.create({ date, price, movieId, roomId });
  res.status(201).json(user);
};



export const showingUser = async (req: Request, res: Response): Promise<void> => {
  const user = await Showing.findByPk(Number(req.params.id));
  if (!user) {
    res.status(404).json({ message: 'User not found' });
    return;
  }
  await user.destroy();
  res.status(204).send();
};
