import { Request, Response } from 'express';
import { Reservation } from '../models/index';
import createReservation from '../services/create.reservation'

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
  const { showingId, userId, seatIds } = req.body;
  try {
    await createReservation(showingId, userId, seatIds);
    res.status(201).json({ message: 'Reservation created' });
  } catch (error) {
    res.status(409).json({ message: 'Seat already taken' });
  }
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
