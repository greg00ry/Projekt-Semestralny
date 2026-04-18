import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../database';

interface ReservationAttributes {
  id: number;
  number: string;
  showingId: number;
  userId: number;
  seatId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface ReservationCreationAttributes extends Optional<ReservationAttributes, 'id'> {}

class Reservation extends Model<ReservationAttributes, ReservationCreationAttributes> implements ReservationAttributes {
  public id!: number;
  public number!: string;
  public showingId!: number;
  public userId!: number;
  public seatId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Reservation.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    number: { type: DataTypes.STRING, allowNull: false },
    showingId: { type: DataTypes.INTEGER, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    seatId: { type: DataTypes.INTEGER, allowNull: false },
  },
  { sequelize, tableName: 'reservations' }
);

export default Reservation;
