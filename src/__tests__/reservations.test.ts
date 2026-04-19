import request from 'supertest';
import sequelize from '../database';
import '../models/index';
import ingestDataBase from '../services/ingest.database';
import app from '../app';

beforeAll(async () => {
  await sequelize.sync({ force: true });
  await ingestDataBase();
});

describe('POST /reservations', () => {
  it('tworzy rezerwacje dla jednego miejsca', async () => {
    const res = await request(app).post('/reservations').send({
      showingId: 1,
      userId: 1,
      seatIds: [1],
    });
    expect(res.status).toBe(201);
  });

  it('tworzy rezerwacje dla wielu miejsc', async () => {
    const res = await request(app).post('/reservations').send({
      showingId: 1,
      userId: 1,
      seatIds: [2, 3, 4],
    });
    expect(res.status).toBe(201);
  });

  it('zwraca 409 dla juz zajetego miejsca', async () => {
    const res = await request(app).post('/reservations').send({
      showingId: 1,
      userId: 1,
      seatIds: [1],
    });
    expect(res.status).toBe(409);
  });

  it('rollback - jesli jedno miejsce zajete odrzuca cala tablice', async () => {
    const res = await request(app).post('/reservations').send({
      showingId: 1,
      userId: 1,
      seatIds: [5, 6, 1],
    });
    expect(res.status).toBe(409);

    // miejsca 5 i 6 nie powinny byc zarezerwowane po rollbacku
    const seats = await request(app).get('/seats/showing/1');
    expect(seats.body).not.toContain(5);
    expect(seats.body).not.toContain(6);
  });

  it('to samo miejsce mozna zarezerwowac na inny seans', async () => {
    const res = await request(app).post('/reservations').send({
      showingId: 2,
      userId: 1,
      seatIds: [1],
    });
    expect(res.status).toBe(201);
  });
});

describe('GET /seats/showing/:showingId', () => {
  it('zwraca zajete miejsca dla seansu', async () => {
    const res = await request(app).get('/seats/showing/1');
    expect(res.status).toBe(200);
    expect(res.body).toContain(1);
    expect(res.body).toContain(2);
    expect(res.body).toContain(3);
    expect(res.body).toContain(4);
  });

  it('zwraca pusta tablice dla seansu bez rezerwacji', async () => {
    const res = await request(app).get('/seats/showing/3');
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(0);
  });

  it('zwraca pusta tablice dla nieistniejacego seansu', async () => {
    const res = await request(app).get('/seats/showing/999');
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(0);
  });
});

describe('GET /reservations', () => {
  it('zwraca liste rezerwacji', async () => {
    const res = await request(app).get('/reservations');
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe('DELETE /reservations/:id', () => {
  it('usuwa rezerwacje', async () => {
    const reservations = await request(app).get('/reservations');
    const id = reservations.body[0].id;
    const res = await request(app).delete(`/reservations/${id}`);
    expect(res.status).toBe(204);
  });

  it('zwraca 404 przy usuwaniu nieistniejacej rezerwacji', async () => {
    const res = await request(app).delete('/reservations/999');
    expect(res.status).toBe(404);
  });
});
