import request from 'supertest';
import sequelize from '../database';
import '../models/index';
import ingestDataBase from '../services/ingest.database';
import app from '../app';

beforeAll(async () => {
  await sequelize.sync({ force: true });
  await ingestDataBase();
});

describe('GET /showings', () => {
  it('zwraca liste 6 seansow', async () => {
    const res = await request(app).get('/showings');
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(6);
  });

  it('kazdy seans ma wymagane pola', async () => {
    const res = await request(app).get('/showings');
    const showing = res.body[0];
    expect(showing).toHaveProperty('id');
    expect(showing).toHaveProperty('movieId');
    expect(showing).toHaveProperty('roomId');
    expect(showing).toHaveProperty('date');
    expect(showing).toHaveProperty('price');
  });
});

describe('GET /showings/:id', () => {
  it('zwraca seans po id', async () => {
    const res = await request(app).get('/showings/1');
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(1);
  });

  it('zwraca 404 dla nieistniejacego seansu', async () => {
    const res = await request(app).get('/showings/999');
    expect(res.status).toBe(404);
  });

  it('zwraca 404 dla id 0', async () => {
    const res = await request(app).get('/showings/0');
    expect(res.status).toBe(404);
  });
});

describe('POST /showings', () => {
  it('tworzy nowy seans', async () => {
    const res = await request(app).post('/showings').send({
      movieId: 1,
      roomId: 1,
      date: '2026-06-01T10:00:00',
      price: 25,
    });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.price).toBe(25);
  });
});

describe('DELETE /showings/:id', () => {
  it('usuwa seans', async () => {
    const created = await request(app).post('/showings').send({
      movieId: 1,
      roomId: 1,
      date: '2026-06-02T10:00:00',
      price: 20,
    });
    const res = await request(app).delete(`/showings/${created.body.id}`);
    expect(res.status).toBe(204);
  });

  it('zwraca 404 przy usuwaniu nieistniejacego seansu', async () => {
    const res = await request(app).delete('/showings/999');
    expect(res.status).toBe(404);
  });
});
