import { Sequelize } from 'sequelize';
import path from 'path';
import ingestDataBase from './services/ingest.database';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '../database.sqlite'),
  logging: false,
});

ingestDataBase()

export default sequelize;
