import { stringify } from "node:querystring"
import  Room  from "../models/Room"

import Movie from "../models/Movie"
import Seat from "../models/Seat"
import Showing from "../models/Showing"
import { gw1mw } from "./describtions/gw1mw"
import { gw2ak } from "./describtions/gw2ak"
import { gw3zs } from "./describtions/gw3zs"
import { gw4nn } from "./describtions/gw4nn"
import { gw5ik } from "./describtions/gw5ik"
import { gw6pj } from "./describtions/gw6pj"



const ingestDataBase = async () => {
    const room = await Room.create({number: "1"})

    for (let i = 0; i < 50; i++) {
        const seat = await Seat.create({seatNumber: i + 1, roomId: room.id})
    }

    await createMovie("Gwiezdne Wojny: Mroczne Widmo", 136, new Date('1999-09-17'), "https://www.disneyplus.com/pl-pl/browse/entity-e0a9fee4-2959-4077-ad8c-8fab4fd6e4d1", gw1mw)
    await createMovie("Gwiezdne Wojny: Atak Klonów", 142, new Date('2002-05-16'), "https://www.disneyplus.com/pl-pl/browse/entity-39cbdf17-1bbe-4de2-b4a4-8e342875c2c6", gw2ak)
    await createMovie("Gwiezdne Wojny: Zemsta Sithów", 140, new Date('2005-05-19'), "https://www.disneyplus.com/pl-pl/browse/entity-eb1e2c5f-69bf-4240-a61f-7ffc4e0311b3", gw3zs)
    await createMovie("Gwiezdne Wojny: Nowa Nadzieja", 121, new Date('1977-05-25'), "https://www.disneyplus.com/pl-pl/browse/entity-9a280e53-fcc0-4e17-a02c-b1f40913eb0b", gw4nn)
    await createMovie("Gwiezdne Wojny: Imperium Kontratakuje", 124, new Date('1980-05-21'), "https://www.disneyplus.com/pl-pl/browse/entity-0f5c5223-f4f6-46ef-ba8a-69cb0e17d8d3", gw5ik)
    await createMovie("Gwiezdne Wojny: Powrót Jedi", 133, new Date('1983-05-25'), "https://www.disneyplus.com/pl-pl/browse/entity-4b6e7cda-daa5-4f2d-9b61-35bbe562c69c", gw6pj)

}

const createMovie = async (title: string, durationMinutes: number, premiereDate: Date, image: string, description: string) => {
    const movie = await Movie.create({title, durationMinutes, premiereDate, image, description});
}

export default ingestDataBase