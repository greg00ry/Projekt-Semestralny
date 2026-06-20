<template>
  <!-- Hero -->
  <section class="relative h-125">
    <img
      :src="movie?.image"
      :alt="movie?.title"
      class="absolute inset-0 w-full h-full object-cover"
    />

    <div
      class="absolute inset-0 bg-linear-to-t from-black via-black/70 to-black/20"
    />

    <div class="relative z-10 container mx-auto px-6 h-full flex items-end pb-16">
      <div>
        <h1 class="text-5xl text-gray-300 font-playfair font-bold mb-4">
          {{ movie?.title }}
        </h1>

        <div class="flex gap-4 text-gray-300">
          <span>{{ movie?.durationMinutes }} min</span>
          <span>•</span>
          <span>{{ movie?.premiereDate }}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Content -->
  <section class="container mx-auto px-6 py-12">
    <div class="grid lg:grid-cols-3 gap-10">
      <!-- Description -->
      <div class="lg:col-span-2">
        <h2 class="text-2xl font-semibold mb-4">
          About Movie
        </h2>

        <p class="text-gray-400 leading-relaxed">
          {{ movie?.description }}
        </p>
      </div>

      <!-- Meta -->
      <div class="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
        <h3 class="text-xl font-semibold mb-4">
          Information
        </h3>

        <div class="space-y-3 text-gray-300">
          <div class="flex justify-between">
            <span>Duration</span>
            <span>{{ movie?.durationMinutes }} min</span>
          </div>

          <div class="flex justify-between">
            <span>Premiere</span>
            <span>{{ movie?.premiereDate }}</span>
          </div>

          <div class="flex justify-between">
            <span>Language</span>
            <span>English</span>
          </div>

          <div class="flex justify-between">
            <span>Format</span>
            <span>2D / IMAX</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Showtimes -->
    <div class="mt-16">
      <h2 class="text-3xl font-bold mb-8">
        Available Showtimes
      </h2>

      <!-- This Week -->
      <div class="mb-10">
        <h3 class="text-xl font-semibold text-cinema-gold mb-4">
          This Week
        </h3>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="show in thisWeekShowtimes"
            :key="show"
            class="bg-red-800/55 border border-white/10 rounded-lg p-4"
          >
            <div class="font-semibold">
              {{ formatDate(show) }}
            </div>

            <RouterLink
                :to="`/reservation/${movie.slug}?showtime=${show}`"
                class="text-cinema-gold mt-2 block hover:underline"
                >
                {{ formatTime(show) }}
                </RouterLink>
          </div>
        </div>
      </div>

      <!-- Next Week -->
      <div>
        <h3 class="text-xl font-semibold text-cinema-gold mb-4">
          Next Week
        </h3>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="show in nextWeekShowtimes"
            :key="show"
            class="bg-red-800/55 border border-white/10 rounded-lg p-4"
          >
            <div class="font-semibold">
              {{ formatDate(show) }}
            </div>

            <RouterLink
                :to="`/reservation/${movie.slug}?showtime=${show}`"
                class="text-cinema-gold mt-2 block hover:underline"
                >
                {{ formatTime(show) }}
                </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { movies, type Movie } from '@/data/movies'

const route = useRoute()

const movie = computed<Movie | undefined>(() => {
  return movies.find(m => m.slug === route.params.slug)
})

const showtimes = computed(() => movie.value?.showtimes ?? [])

/**
 * Prosty podział:
 * pierwsze 4 → this week
 * reszta → next week
 */
const thisWeekShowtimes = computed(() => {
  return showtimes.value.slice(0, 4)
})

const nextWeekShowtimes = computed(() => {
  return showtimes.value.slice(4)
})

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-GB', {
    weekday: 'short',
    day: '2-digit',
    month: 'short'
  })
}

const formatTime = (date: string) => {
  return new Date(date).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>