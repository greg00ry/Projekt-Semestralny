import sequelize from '../database';
import Reservation from '../models/Reservation';

const createReservation = async (showingId: number, userId: number, seatIds: number[]) => {
  const t = await sequelize.transaction();

  try {

    for (const seatId of seatIds) {
        const taken = await Reservation.findOne({ where: { showingId, seatId }, transaction: t });
        if (taken) throw new Error(`Seat ${seatId} is already taken`);
        await Reservation.create({ showingId, userId, seatId }, { transaction: t });
    }




    await t.commit();
  } catch (error) {
    await t.rollback();
    throw error;
  }
};

export default createReservation;
