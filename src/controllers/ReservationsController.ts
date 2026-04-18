import { Request, Response } from 'express';
import Reservation from '../models/Reservation';

export const getReservations = async (req: Request, res: Response): Promise<void> => {
  const reservations = await Reservation.findAll();
  res.json(reservations);
};

export const getReservationById = async (req: Request, res: Response): Promise<void> => {
  const reservation = await Reservation.findByPk(Number(req.params.id));
  if (!reservation) {
    res.status(404).json({ message: 'Reservation not found' });
    return;
  }
  res.json(reservation);
};

export const createReservations = async (req: Request, res: Response): Promise<void> => {
  const { number, showingId, userId, seatId } = req.body;
  const reservation = await Reservation.create({ number, showingId, userId, seatId });
  res.status(201).json(reservation);
};



export const deleteReservations = async (req: Request, res: Response): Promise<void> => {
  const reservation = await Reservation.findByPk(Number(req.params.id));
  if (!reservation) {
    res.status(404).json({ message: 'Reservation not found' });
    return;
  }
  await reservation.destroy();
  res.status(204).send();
};
