import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../database';

interface SeatAttributes {
  id: number;
  seatNumber: number;
  roomId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface SeatCreationAttributes extends Optional<SeatAttributes, 'id'> {}

class Seat extends Model<SeatAttributes, SeatCreationAttributes> implements SeatAttributes {
  public id!: number;
  public seatNumber!: number;
  public roomId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Seat.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    seatNumber: { type: DataTypes.INTEGER, allowNull: false },
    roomId: { type: DataTypes.INTEGER, allowNull: false },
  },
  { sequelize, tableName: 'seats' }
);

export default Seat;
