import request from 'supertest';
import sequelize from '../database';
import '../models/index';
import ingestDataBase from '../services/ingest.database';
import app from '../app';

beforeAll(async () => {
  await sequelize.sync({ force: true });
  await ingestDataBase();
});

describe('GET /rooms', () => {
  it('zwraca liste sal', async () => {
    const res = await request(app).get('/rooms');
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('sala ma wymagane pola', async () => {
    const res = await request(app).get('/rooms');
    const room = res.body[0];
    expect(room).toHaveProperty('id');
    expect(room).toHaveProperty('number');
  });
});

describe('GET /rooms/:id', () => {
  it('zwraca sale po id', async () => {
    const res = await request(app).get('/rooms/1');
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(1);
  });

  it('zwraca 404 dla nieistniejacey sali', async () => {
    const res = await request(app).get('/rooms/999');
    expect(res.status).toBe(404);
  });
});
