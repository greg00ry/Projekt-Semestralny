import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../database';

interface MovieAttributes {
  id: number;
  title: string;
  durationMinutes: number;
  premiereDate: Date;
  image: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface MovieCreationAttributes extends Optional<MovieAttributes, 'id'> {}

class Movie extends Model<MovieAttributes, MovieCreationAttributes> implements MovieAttributes {
  public id!: number;
  public title!: string;
  public durationMinutes!: number;
  public premiereDate!: Date;
  public image!: string;
  public description!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Movie.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    durationMinutes: { type: DataTypes.INTEGER, allowNull: false },
    premiereDate: {type: DataTypes.DATE, allowNull: false},
    image: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false} 
  },
  { sequelize, tableName: 'movies' }
);

export default Movie;
