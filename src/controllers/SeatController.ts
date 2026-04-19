import { Request, Response } from 'express';
import { Seat } from '../models/index';
import getTakenSeats from '../services/get.taken.seats';

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



export const getTakenSeatsByShowing = async (req: Request, res: Response): Promise<void> => {
  const takenSeats = await getTakenSeats(Number(req.params.showingId));
  res.json(takenSeats);
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
