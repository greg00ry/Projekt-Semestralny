<script setup lang="ts">
import { ref, computed } from 'vue'

interface Movie {
  id: number
  title: string
  slug: string
}

interface Showtime {
  id: number
  movieId: number
  date: string
  time: string
  seats: number
  price: number
}

/* MOCK MOVIES */
const movies: Movie[] = [
  { id: 1, title: 'Dune: Part Two', slug: 'dune-part-two' },
  { id: 2, title: 'Oppenheimer', slug: 'oppenheimer' },
  { id: 3, title: 'Interstellar', slug: 'interstellar' },
  { id: 4, title: 'The Batman', slug: 'the-batman' }
]

/* MOCK SHOWTIMES */
const showtimes: Showtime[] = [
  { id: 1, movieId: 1, date: '2026-06-20', time: '18:00', seats: 45, price: 25 },
  { id: 2, movieId: 1, date: '2026-06-21', time: '21:00', seats: 20, price: 28 },
  { id: 3, movieId: 2, date: '2026-06-20', time: '17:30', seats: 60, price: 24 },
  { id: 4, movieId: 3, date: '2026-06-22', time: '20:00', seats: 15, price: 26 },
  { id: 5, movieId: 3, date: '2026-06-20', time: '19:00', seats: 50, price: 25 },
  { id: 6, movieId: 2, date: '2026-06-21', time: '19:00', seats: 50, price: 25 },
  { id: 7, movieId: 3, date: '2026-06-20', time: '16:00', seats: 50, price: 25 },
  { id: 8, movieId: 4, date: '2026-06-21', time: '22:00', seats: 50, price: 25 },
  { id: 9, movieId: 4, date: '2026-06-20', time: '18:00', seats: 50, price: 25 },
  { id: 10, movieId: 4, date: '2026-06-22', time: '17:00', seats: 50, price: 25 },
  { id: 11, movieId: 2, date: '2026-06-20', time: '13:00', seats: 50, price: 25 },
  { id: 12, movieId: 1, date: '2026-06-21', time: '16:00', seats: 50, price: 25 }
]

/* GENERATE NEXT 7 DAYS */
const today = new Date()

const dates = Array.from({ length: 7 }, (_, i) => {
  const d = new Date()
  d.setDate(today.getDate() + i)
  return d
})

const selectedDate = ref<Date>(dates[0]!)

/* FORMATTERS */
const formatDate = (d: Date) =>
  d.toISOString().split('T')[0]

const formatDay = (d: Date) =>
  d.toLocaleDateString('en-US', { weekday: 'short' })

const formatDayNumber = (d: Date) =>
  d.getDate()

/* FILTERED SHOWTIMES */
const filteredShowtimes = computed(() => {
  const dateStr = formatDate(selectedDate.value)

  return showtimes.filter(s => s.date === dateStr)
})

/* GROUP BY MOVIE */
const grouped = computed(() => {
  const map: Record<number, Showtime[]> = {}

  filteredShowtimes.value.forEach(s => {
    if (!map[s.movieId]) {
      map[s.movieId] = []
    }

    map[s.movieId]!.push(s)
  })

  return map
})

const getMovie = (id: number) =>
  movies.find(m => m.id === id)
</script>

<template>
  <section class="bg-black text-white py-20 px-6 lg:px-12">
    <div class="max-w-7xl mx-auto">

      <!-- HEADER -->
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-playfair font-bold mb-4">
          Showtimes
        </h2>
        <p class="text-gray-400">
          Choose your perfect time and enjoy the show.
        </p>
      </div>

      <!-- DATE TABS -->
      <div class="flex items-center justify-between mb-8">
        
        <!-- Prev -->
        <button
          @click="selectedDate = new Date(selectedDate!.getTime() - 86400000)"
          class="px-3 py-2 bg-white/10 hover:bg-white/20 rounded"
        >
          ←
        </button>

        <!-- Dates -->
        <div class="flex gap-3 overflow-x-auto px-4">
          <button
            v-for="date in dates"
            :key="date.toISOString()"
            @click="selectedDate = date"
            class="flex flex-col items-center px-4 py-2 rounded-lg min-w-17.5 transition"
            :class="formatDate(date) === formatDate(selectedDate!)
              ? 'bg-cinema-red text-white'
              : 'bg-white/5 hover:bg-white/10 text-gray-400'"
          >
            <span class="text-xs">{{ formatDay(date) }}</span>
            <span class="text-lg font-semibold">
              {{ formatDayNumber(date) }}
            </span>
          </button>
        </div>

        <!-- Next -->
        <button
          @click="selectedDate = new Date(selectedDate!.getTime() + 86400000)"
          class="px-3 py-2 bg-white/10 hover:bg-white/20 rounded"
        >
          →
        </button>
      </div>

      <!-- SHOWTIMES -->
      <div class="space-y-10">
        <div
          v-for="(times, movieId) in grouped"
          :key="movieId"
          class="bg-white/5 border border-white/10 rounded-xl p-6"
        >
          <!-- Movie title -->
          <RouterLink
            :to="`/movies/${getMovie(Number(movieId))?.slug}`"
            class="text-xl font-semibold mb-4 text-cinema-gold hover:underline block"
          >
            {{ getMovie(Number(movieId))?.title }}
          </RouterLink>

          <!-- Times -->
          <div class="flex flex-wrap gap-4">
            <div
              v-for="show in times"
              :key="show.id"
              class="px-4 py-3 bg-white/10 rounded-lg hover:bg-cinema-red/80 transition cursor-pointer flex flex-col items-center min-w-25"
            >
              <span class="text-lg font-semibold">
                {{ show.time }}
              </span>

              <span class="text-xs text-gray-400">
                {{ show.seats }} seats
              </span>

              <span class="text-xs text-cinema-gold mt-1">
                {{ show.price }} zł
              </span>
            </div>
          </div>
        </div>

        <!-- EMPTY STATE -->
        <div v-if="filteredShowtimes.length === 0" class="text-center text-gray-500">
          No showtimes available for this day.
        </div>
      </div>

    </div>
  </section>
</template>