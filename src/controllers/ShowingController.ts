import { Request, Response } from 'express';
import Showing from '../models/Showing';

export const getShowings = async (req: Request, res: Response): Promise<void> => {
  const showings = await Showing.findAll();
  res.json(showings);
};

export const getShowingById = async (req: Request, res: Response): Promise<void> => {
  const showings = await Showing.findByPk(Number(req.params.id));
  if (!showings) {
    res.status(404).json({ message: 'Seat not found' });
    return;
  }
  res.json(showings);
};

export const createShowing = async (req: Request, res: Response): Promise<void> => {
  const { movieId, roomId, date, price } = req.body;
  const showings = await Showing.create({ date, price, movieId, roomId });
  res.status(201).json(showings);
};



export const deleteShowing = async (req: Request, res: Response): Promise<void> => {
  const showings = await Showing.findByPk(Number(req.params.id));
  if (!showings) {
    res.status(404).json({ message: 'Seat not found' });
    return;
  }
  await showings.destroy();
  res.status(204).send();
};
