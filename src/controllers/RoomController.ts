import { Request, Response } from 'express';
import Room from '../models/Room';

export const getRooms = async (req: Request, res: Response): Promise<void> => {
  const users = await Room.findAll();
  res.json(users);
};

export const getRoomById = async (req: Request, res: Response): Promise<void> => {
  const user = await Room.findByPk(Number(req.params.id));
  if (!user) {
    res.status(404).json({ message: 'User not found' });
    return;
  }
  res.json(user);
};

export const createRoom = async (req: Request, res: Response): Promise<void> => {
  const { number } = req.body;
  const user = await Room.create({ number });
  res.status(201).json(user);
};



export const deleteRoom = async (req: Request, res: Response): Promise<void> => {
  const user = await Room.findByPk(Number(req.params.id));
  if (!user) {
    res.status(404).json({ message: 'User not found' });
    return;
  }
  await user.destroy();
  res.status(204).send();
};
