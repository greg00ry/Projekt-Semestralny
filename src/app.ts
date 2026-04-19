import express from 'express';
import './models/index';
import MovieRouter from './routes/MovieRouter';
import RoomRouter from './routes/RoomRouter';
import SeatRouter from './routes/SeatRouter';
import ShowingRouter from './routes/ShowingRouter';
import ReservationRouter from './routes/ReservationRouter';
import UserRouter from './routes/UserRouter';

const app = express();
app.use(express.json());

app.use('/movies', MovieRouter);
app.use('/rooms', RoomRouter);
app.use('/seats', SeatRouter);
app.use('/showings', ShowingRouter);
app.use('/reservations', ReservationRouter);
app.use('/users', UserRouter);

export default app;
