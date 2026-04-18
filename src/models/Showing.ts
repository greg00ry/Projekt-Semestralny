import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../database';

interface ShowingAttributes {
  id: number;
  movieId: number;
  roomId: number;
  date: Date;
  price: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface ShowingCreationAttributes extends Optional<ShowingAttributes, 'id'> {}

class Showing extends Model<ShowingAttributes, ShowingCreationAttributes> implements ShowingAttributes {
  public id!: number;
  public movieId!: number;
  public roomId!: number;
  public date!: Date;
  public price!: number
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Showing.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    movieId: { type: DataTypes.INTEGER, allowNull: false },
    roomId: { type: DataTypes.INTEGER, allowNull: false },
    date: { type: DataTypes.DATE, allowNull: false },
    price: {type: DataTypes.NUMBER, allowNull: false}
  },
  { sequelize, tableName: 'showings' }
);

export default Showing;
