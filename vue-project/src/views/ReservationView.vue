<template>
  <div class="min-h-screen bg-black text-white px-6 py-10">

    <!-- Header -->
    <div class="max-w-5xl mx-auto mb-10">
      <h1 class="text-4xl font-bold mb-2">
        Book your seats
      </h1>

      <p class="text-gray-400">
        {{ movie?.title }} • {{ selectedShowtime }}
      </p>
    </div>

    <div class="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">

      <!-- SEAT MAP -->
      <div class="lg:col-span-2">

        <!-- Screen -->
        <div class="text-center mb-8">
          <div class="h-2 bg-white/30 rounded-full w-full"></div>
          <p class="text-gray-400 mt-2 text-sm">SCREEN</p>
        </div>

        <!-- Seats -->
        <div class="grid gap-2 justify-center">
          <div
            v-for="row in rows"
            :key="row"
            class="flex gap-2 justify-center"
          >
            <div
              v-for="seat in cols"
              :key="seat"
              @click="toggleSeat(row, seat)"
              :class="seatClass(row, seat)"
              class="w-10 h-10 flex items-center justify-center rounded cursor-pointer text-xs transition"
            >
              {{ row }}{{ seat }}
            </div>
          </div>
        </div>

        <!-- Legend -->
        <div class="flex gap-6 justify-center mt-8 text-sm text-gray-400">
          <div class="flex items-center gap-2">
            <div class="w-4 h-4 bg-white/20 rounded"></div> Available
          </div>

          <div class="flex items-center gap-2">
            <div class="w-4 h-4 bg-red-500 rounded"></div> Taken
          </div>

          <div class="flex items-center gap-2">
            <div class="w-4 h-4 bg-amber-400 rounded"></div> Selected
          </div>
        </div>

      </div>

      <!-- SUMMARY -->
      <div class="bg-white/5 border border-white/10 rounded-xl p-6 h-fit">

        <h2 class="text-xl font-semibold mb-4">
          Booking summary
        </h2>

        <p class="text-gray-400 mb-4">
          Price per seat: <span class="text-white">25 PLN</span>
        </p>

        <!-- Selected seats -->
        <div class="mb-4">
          <h3 class="text-sm text-gray-400 mb-2">Selected seats</h3>

          <div v-if="selectedSeats.length === 0" class="text-gray-500 text-sm">
            No seats selected
          </div>

          <div v-else class="flex flex-wrap gap-2">
            <span
              v-for="seat in selectedSeats"
              :key="seat"
              class="bg-cinema-gold text-black px-2 py-1 rounded text-xs"
            >
              {{ seat }}
            </span>
          </div>
        </div>

        <!-- Total -->
        <div class="border-t border-white/10 pt-4 mb-6">
          <div class="flex justify-between text-lg">
            <span>Total</span>
            <span class="font-bold">{{ totalPrice }} PLN</span>
          </div>
        </div>

        <!-- Button -->
        <button
          class="w-full border-2  bg-cinema-red hover:bg-red-700 disabled:opacity-40 py-3 rounded font-semibold transition"
          :disabled="selectedSeats.length === 0"
        >
          Proceed to payment
        </button>

        <p class="text-xs text-gray-500 mt-3">
          Max 10 seats per booking
        </p>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { movies, type Movie } from '@/data/movies'
import { useRouter } from 'vue-router'

const router = useRouter()


const route = useRoute()

// --- movie ---
const movie = computed<Movie>(() => {
  return movies.find(m => m.slug === route.params.slug)!
})

if (!movie.value) {
  router.push('/')
}

// --- showtime (mock: pierwszy seans) ---
const selectedShowtime = computed(() => {
  return movie.value.showtimes[0]
})

// --- seat grid ---
const rows = ['A', 'B', 'C', 'D', 'E', 'F']
const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// --- state ---
const selectedSeats = ref<string[]>([])

// mock zajęte miejsca
const takenSeats = ref<string[]>([
  'A1', 'A2', 'B5', 'C7', 'D3', 'E9'
])

// --- logic ---
const toggleSeat = (row: string, seat: number) => {
  const id = `${row}${seat}`

  if (takenSeats.value.includes(id)) return

  if (selectedSeats.value.includes(id)) {
    selectedSeats.value = selectedSeats.value.filter(s => s !== id)
    return
  }

  if (selectedSeats.value.length >= 10) return

  selectedSeats.value.push(id)
}

// --- UI class ---
const seatClass = (row: string, seat: number) => {
  const id = `${row}${seat}`

  if (takenSeats.value.includes(id)) {
    return 'bg-red-500 cursor-not-allowed'
  }

  if (selectedSeats.value.includes(id)) {
    return 'bg-amber-400 text-black'
  }

  return 'bg-white/20 hover:bg-white/40'
}

// --- price ---
const totalPrice = computed(() => {
  return selectedSeats.value.length * 25
})
</script>