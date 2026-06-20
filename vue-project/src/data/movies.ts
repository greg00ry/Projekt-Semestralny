export interface Movie {
  id: number
  slug: string
  title: string
  description: string
  image: string
  genre: string
  director: string
  cast: string[]
  durationMinutes: number
  premiereDate: string  
  date: string          
  showtimes: string[]    
  createdAt: string
  updatedAt: string
  rating?: number      
  ageRating?: string   
  trailerUrl?: string
  language?: string
  format?: string[]      
}

export const movies: Movie[] = [
  {
    id: 1,
    slug: 'dune-part-two',
    title: 'Dune: Part Two',
    description: 'Epic continuation of Paul Atreides journey on Arrakis.',
    date: '2026-04-18',
    premiereDate: '2024-03-01',
    durationMinutes: 166,
    createdAt: '2026-04-10',
    updatedAt: '2026-04-15',
    image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=800',
    genre: 'Sci-Fi',
    director: 'Denis Villeneuve',
    cast: ['Timothée Chalamet', 'Zendaya', 'Rebecca Ferguson'],
    showtimes: [
      '2026-06-20T18:00',
      '2026-06-21T20:30',
      '2026-06-22T17:45',
      '2026-06-24T21:00',
      '2026-06-28T19:00',
      '2026-06-30T20:15',
      '2026-07-02T18:30'
    ]
  },
  {
    id: 2,
    slug: 'oppenheimer',
    title: 'Oppenheimer',
    description: 'The story of the man behind the atomic bomb.',
    date: '2026-04-18',
    premiereDate: '2023-07-21',
    durationMinutes: 180,
    createdAt: '2026-04-10',
    updatedAt: '2026-04-15',
    image: 'https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=800',
    genre: 'Biography / Drama',
    director: 'Christopher Nolan',
    cast: ['Cillian Murphy', 'Emily Blunt', 'Matt Damon'],
    showtimes: [
      '2026-06-20T19:00',
      '2026-06-21T21:00',
      '2026-06-23T18:30',
      '2026-06-25T20:45',
      '2026-06-29T17:30',
      '2026-07-01T21:15',
      '2026-07-03T19:45'
    ]
  },
  {
    id: 3,
    slug: 'interstellar',
    title: 'Interstellar',
    description: 'A journey beyond the stars to save humanity.',
    date: '2026-04-18',
    premiereDate: '2014-11-07',
    durationMinutes: 169,
    createdAt: '2026-04-10',
    updatedAt: '2026-04-15',
    image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=800',
    genre: 'Sci-Fi',
    director: 'Christopher Nolan',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
    showtimes: [
      '2026-06-20T20:00',
      '2026-06-22T18:15',
      '2026-06-23T21:00',
      '2026-06-26T19:30',
      '2026-06-28T21:45',
      '2026-07-01T18:00',
      '2026-07-04T20:30'
    ]
  },
  {
    id: 4,
    slug: 'the-batman',
    title: 'The Batman',
    description: 'Dark and gritty take on Gotham’s vigilante.',
    date: '2026-04-18',
    premiereDate: '2022-03-04',
    durationMinutes: 176,
    createdAt: '2026-04-10',
    updatedAt: '2026-04-15',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800',
    genre: 'Action / Crime',
    director: 'Matt Reeves',
    cast: ['Robert Pattinson', 'Zoë Kravitz', 'Colin Farrell'],
    showtimes: [
      '2026-06-21T18:45',
      '2026-06-22T20:15',
      '2026-06-24T19:00',
      '2026-06-26T21:30',
      '2026-06-29T18:15',
      '2026-07-02T20:00',
      '2026-07-04T21:45'
    ]
  }
]