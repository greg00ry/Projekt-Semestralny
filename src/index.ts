import sequelize from './database';
import ingestDataBase from './services/ingest.database';
import app from './app';

const PORT = 3000;

(async () => {
  await sequelize.sync({ force: true });
  await ingestDataBase();
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
})();
