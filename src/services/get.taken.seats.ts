import Reservation from '../models/Reservation';
import Seat from '../models/Seat';

const getTakenSeats = async (showingId: number) => {
  const reservations = await Reservation.findAll({
    where: { showingId },
    include: [Seat],
  });

  return reservations.map(r => r.seatId);
};

export default getTakenSeats;
