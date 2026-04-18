import Movie from './Movie';
import Room from './Room';
import Showing from './Showing';
import Reservation from './Reservation';
import User from './User';
import Seat from './Seat';

Movie.hasMany(Showing, { foreignKey: 'movieId' });
Showing.belongsTo(Movie, { foreignKey: 'movieId' });

Room.hasMany(Showing, { foreignKey: 'roomId' });
Showing.belongsTo(Room, { foreignKey: 'roomId' });

Room.hasMany(Seat, {foreignKey: 'roomId'});
Seat.belongsTo(Room, {foreignKey: 'roomId'})

Showing.hasMany(Reservation, { foreignKey: 'showingId' });
Reservation.belongsTo(Showing, { foreignKey: 'showingId' });

Seat.hasMany(Reservation, { foreignKey: 'seatId' });
Reservation.belongsTo(Seat, { foreignKey: 'seatId' });

User.hasMany(Reservation, { foreignKey: 'userId' });
Reservation.belongsTo(User, { foreignKey: 'userId' });


export { Movie, Room, Showing, Reservation, User, Seat };
