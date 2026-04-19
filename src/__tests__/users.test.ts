import request from 'supertest';
import sequelize from '../database';
import '../models/index';
import ingestDataBase from '../services/ingest.database';
import app from '../app';

beforeAll(async () => {
  await sequelize.sync({ force: true });
  await ingestDataBase();
});

describe('GET /users', () => {
  it('zwraca liste z jednym uzytkownikiem', async () => {
    const res = await request(app).get('/users');
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1);
  });

  it('uzytkownik ma wymagane pola', async () => {
    const res = await request(app).get('/users');
    const user = res.body[0];
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('name');
    expect(user.name).toBe('Adam Kowalski');
  });
});

describe('GET /users/:id', () => {
  it('zwraca uzytkownika po id', async () => {
    const res = await request(app).get('/users/1');
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(1);
  });

  it('zwraca 404 dla nieistniejacego uzytkownika', async () => {
    const res = await request(app).get('/users/999');
    expect(res.status).toBe(404);
  });
});
