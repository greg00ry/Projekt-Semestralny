import sequelize from './database';
import './models/index';
import ingestDataBase from './services/ingest.database';

(async () => {
  await sequelize.sync({ force: true });
  await ingestDataBase();
  console.log('Ingest zakończony');
  process.exit(0);
})();
