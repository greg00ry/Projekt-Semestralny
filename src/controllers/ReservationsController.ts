import { Request, Response } from 'express';
import Reservation from '../models/Reservation';

export const getReservations = async (req: Request, res: Response): Promise<void> => {
  const users = await Reservation.findAll();
  res.json(users);
};

export const getReservationById = async (req: Request, res: Response): Promise<void> => {
  const user = await Reservation.findByPk(Number(req.params.id));
  if (!user) {
    res.status(404).json({ message: 'User not found' });
    return;
  }
  res.json(user);
};

export const createReservations = async (req: Request, res: Response): Promise<void> => {
  const { number, showingId, userId, seatId } = req.body;
  const user = await Reservation.create({ number, showingId, userId, seatId });
  res.status(201).json(user);
};



export const deleteReservations = async (req: Request, res: Response): Promise<void> => {
  const user = await Reservation.findByPk(Number(req.params.id));
  if (!user) {
    res.status(404).json({ message: 'User not found' });
    return;
  }
  await user.destroy();
  res.status(204).send();
};
