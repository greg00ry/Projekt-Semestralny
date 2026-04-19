import { Request, Response } from 'express';
import { User } from '../models/index';

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  const users = await User.findAll();
  res.json(users);
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  const user = await User.findByPk(Number(req.params.id));
  if (!user) {
    res.status(404).json({ message: 'User not found' });
    return;
  }
  res.json(user);
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
  const { name, email } = req.body;
  const user = await User.create({ name, email });
  res.status(201).json(user);
};



export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  const user = await User.findByPk(Number(req.params.id));
  if (!user) {
    res.status(404).json({ message: 'User not found' });
    return;
  }
  await user.destroy();
  res.status(204).send();
};
