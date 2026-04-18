import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../database';

interface RoomAttributes {
  id: number;
  number: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface RoomCreationAttributes extends Optional<RoomAttributes, 'id'> {}

class Room extends Model<RoomAttributes, RoomCreationAttributes> implements RoomAttributes {
  public id!: number;
  public number!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Room.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    number: { type: DataTypes.STRING, allowNull: false },
  },
  { sequelize, tableName: 'rooms' }
);

export default Room;
