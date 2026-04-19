import sequelize from '../database';
import Reservation from '../models/Reservation';

const createReservation = async (showingId: number, userId: number, seatIds: number[]) => {
  const t = await sequelize.transaction();

  try {

    // twoja logika tutaj

    await t.commit();
  } catch (error) {
    await t.rollback();
    throw error;
  }
};

export default createReservation;
