# Projekt Semestralny — Backend API

## Endpointy

---

### Movies

**GET /movies**
Zwraca listę wszystkich filmów.
```json
[
  {
    "id": 1,
    "title": "Gwiezdne Wojny: Mroczne Widmo",
    "durationMinutes": 136,
    "premiereDate": "1999-09-17T00:00:00.000Z",
    "image": "https://...",
    "description": "..."
  }
]
```

**GET /movies/:id**
Zwraca film o podanym id. Zwraca `404` jeśli nie istnieje.

---

### Rooms

**GET /rooms**
Zwraca listę sal kinowych.
```json
[
  {
    "id": 1,
    "number": "1"
  }
]
```

**GET /rooms/:id**
Zwraca salę o podanym id. Zwraca `404` jeśli nie istnieje.

---

### Seats

**GET /seats**
Zwraca listę wszystkich miejsc.
```json
[
  {
    "id": 1,
    "seatNumber": 1,
    "roomId": 1
  }
]
```

**GET /seats/:id**
Zwraca miejsce o podanym id. Zwraca `404` jeśli nie istnieje.

**GET /seats/showing/:showingId**
Zwraca tablicę id zajętych miejsc dla danego seansu.
```json
[1, 2, 3]
```

---

### Showings

**GET /showings**
Zwraca listę wszystkich seansów.
```json
[
  {
    "id": 1,
    "movieId": 1,
    "roomId": 1,
    "date": "2026-05-21T10:00:00.000Z",
    "price": 29
  }
]
```

**GET /showings/:id**
Zwraca seans o podanym id. Zwraca `404` jeśli nie istnieje.

**POST /showings**
Tworzy nowy seans. Zwraca `201` z utworzonym obiektem.
```json
{
  "movieId": 1,
  "roomId": 1,
  "date": "2026-06-01T10:00:00",
  "price": 29
}
```

**DELETE /showings/:id**
Usuwa seans. Zwraca `204`. Zwraca `404` jeśli nie istnieje.

---

### Reservations

**GET /reservations**
Zwraca listę wszystkich rezerwacji.
```json
[
  {
    "id": 1,
    "showingId": 1,
    "userId": 1,
    "seatId": 5
  }
]
```

**GET /reservations/:id**
Zwraca rezerwację o podanym id. Zwraca `404` jeśli nie istnieje.

**POST /reservations**
Tworzy rezerwacje dla podanych miejsc. Zwraca `201` po sukcesie.
Zwraca `409` jeśli którekolwiek miejsce jest już zajęte (całość jest wtedy anulowana).
```json
{
  "showingId": 1,
  "userId": 1,
  "seatIds": [1, 2, 3]
}
```

**DELETE /reservations/:id**
Usuwa rezerwację. Zwraca `204`. Zwraca `404` jeśli nie istnieje.

---

### Users

**GET /users**
Zwraca listę użytkowników.
```json
[
  {
    "id": 1,
    "name": "Adam Kowalski"
  }
]
```

**GET /users/:id**
Zwraca użytkownika o podanym id. Zwraca `404` jeśli nie istnieje.
