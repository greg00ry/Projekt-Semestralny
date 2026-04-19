import { Movie, Showing, Room } from "./models/index";

(async () => {
    const movies = await Movie.findAll();
    const showings = await Showing.findAll();
    const rooms = await Room.findAll();

    console.log('=== MOVIES ===');
    console.log(JSON.stringify(movies, null, 2));
    console.log('=== SHOWINGS ===');
    console.log(JSON.stringify(showings, null, 2));
    console.log('=== ROOMS ===');
    console.log(JSON.stringify(rooms, null, 2));

    process.exit(0);
})();
