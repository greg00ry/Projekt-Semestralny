import { Request, Response } from 'express';
import Room from '../models/Room';

export const getRooms = async (req: Request, res: Response): Promise<void> => {
  const rooms = await Room.findAll();
  res.json(rooms);
};

export const getRoomById = async (req: Request, res: Response): Promise<void> => {
  const room = await Room.findByPk(Number(req.params.id));
  if (!room) {
    res.status(404).json({ message: 'Room not found' });
    return;
  }
  res.json(room);
};

export const createRoom = async (req: Request, res: Response): Promise<void> => {
  const { number } = req.body;
  const room = await Room.create({ number });
  res.status(201).json(room);
};



export const deleteRoom = async (req: Request, res: Response): Promise<void> => {
  const room = await Room.findByPk(Number(req.params.id));
  if (!room) {
    res.status(404).json({ message: 'Room not found' });
    return;
  }
  await room.destroy();
  res.status(204).send();
};
