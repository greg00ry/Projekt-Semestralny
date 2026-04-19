import request from 'supertest';
import sequelize from '../database';
import '../models/index';
import ingestDataBase from '../services/ingest.database';
import app from '../app';

beforeAll(async () => {
  await sequelize.sync({ force: true });
  await ingestDataBase();
});

describe('GET /movies', () => {
  it('zwraca liste 6 filmow', async () => {
    const res = await request(app).get('/movies');
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(6);
  });

  it('kazdy film ma wymagane pola', async () => {
    const res = await request(app).get('/movies');
    const movie = res.body[0];
    expect(movie).toHaveProperty('id');
    expect(movie).toHaveProperty('title');
    expect(movie).toHaveProperty('durationMinutes');
    expect(movie).toHaveProperty('premiereDate');
  });
});

describe('GET /movies/:id', () => {
  it('zwraca film po id', async () => {
    const res = await request(app).get('/movies/1');
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(1);
  });

  it('zwraca 404 dla nieistniejacego id', async () => {
    const res = await request(app).get('/movies/999');
    expect(res.status).toBe(404);
  });

  it('zwraca 404 dla id 0', async () => {
    const res = await request(app).get('/movies/0');
    expect(res.status).toBe(404);
  });

  it('zwraca ostatni film (id 6)', async () => {
    const res = await request(app).get('/movies/6');
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(6);
  });
});
