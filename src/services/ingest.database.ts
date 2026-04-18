import { stringify } from "node:querystring"
import  Room  from "../models/Room"

import Movie from "../models/Movie"
import Seat from "../models/Seat"
import Showing from "../models/Showing"
import { gw1mw } from "./describes/gw1mw"
import { gw2ak } from "./describes/gw2ak"



const ingestDataBase = async () => {
    const room = await Room.create({number: "1"})

    for (let i = 0; i < 50; i++) {
        const seat = await Seat.create({seatNumber: i + 1, roomId: room.id})
    }

    await createMovie("Gwiezdne Wojny: Mroczne Widmo", 136, new Date('1999-09-17'), "https://www.disneyplus.com/pl-pl/browse/entity-e0a9fee4-2959-4077-ad8c-8fab4fd6e4d1", gw1mw)
    await createMovie("Gwiezdne Wojny: Atak Klonów", 142, new Date('2002-05-16'), "https://www.disneyplus.com/pl-pl/browse/entity-39cbdf17-1bbe-4de2-b4a4-8e342875c2c6", gw2ak)
    await createMovie("Gwiezdne Wojny: Zemsta Sithów", 136, new Date('1999-09-17'), "https://www.disneyplus.com/pl-pl/browse/entity-e0a9fee4-2959-4077-ad8c-8fab4fd6e4d1", gw1mw)
    await createMovie("Gwiezdne Wojny: Nowa Nadzieja", 136, new Date('1999-09-17'), "https://www.disneyplus.com/pl-pl/browse/entity-e0a9fee4-2959-4077-ad8c-8fab4fd6e4d1", gw1mw)
    await createMovie("Gwiezdne Wojny: Imperium Kontratakuje", 136, new Date('1999-09-17'), "https://www.disneyplus.com/pl-pl/browse/entity-e0a9fee4-2959-4077-ad8c-8fab4fd6e4d1", gw1mw)
    await createMovie("Gwiezdne Wojny: Powrót Jedi", 136, new Date('1999-09-17'), "https://www.disneyplus.com/pl-pl/browse/entity-e0a9fee4-2959-4077-ad8c-8fab4fd6e4d1", gw1mw)

}

const createMovie = async (title: string, durationMinutes: number, premiereDate: Date, image: string, description: string) => {
    const movie = await Movie.create({title, durationMinutes, premiereDate, image, description});
}

export default ingestDataBase