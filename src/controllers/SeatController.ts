import { Request, Response } from 'express';
import Seat from '../models/Seat';

export const getSeats = async (req: Request, res: Response): Promise<void> => {
  const users = await Seat.findAll();
  res.json(users);
};

export const getSeatById = async (req: Request, res: Response): Promise<void> => {
  const user = await Seat.findByPk(Number(req.params.id));
  if (!user) {
    res.status(404).json({ message: 'Seat not found' });
    return;
  }
  res.json(user);
};

export const createSeat = async (req: Request, res: Response): Promise<void> => {
  const { seatNumber, roomId } = req.body;
  const user = await Seat.create({ seatNumber, roomId });
  res.status(201).json(user);
};



export const deleteSeat = async (req: Request, res: Response): Promise<void> => {
  const user = await Seat.findByPk(Number(req.params.id));
  if (!user) {
    res.status(404).json({ message: 'Seat not found' });
    return;
  }
  await user.destroy();
  res.status(204).send();
};
