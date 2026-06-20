<script setup lang="ts">
interface Movie {
  id: number
  title: string
  slug: string
  description: string
  date: string
  premiereDate: string
  durationMinutes: number
  createdAt: string
  updatedAt: string
  image: string
}

const movies: Movie[] = [
  {
    id: 1,
    title: 'Dune: Part Two',
    slug: 'dune-part-two',
    description: 'Epic continuation of Paul Atreides journey on Arrakis.',
    date: '2026-04-18',
    premiereDate: '2024-03-01',
    durationMinutes: 166,
    createdAt: '2026-04-10',
    updatedAt: '2026-04-15',
    image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=800'
  },
  {
    id: 2,
    title: 'Oppenheimer',
    slug: 'oppenheimer',
    description: 'The story of the man behind the atomic bomb.',
    date: '2026-04-18',
    premiereDate: '2023-07-21',
    durationMinutes: 180,
    createdAt: '2026-04-10',
    updatedAt: '2026-04-15',
    image: 'https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=800'
  },
  {
    id: 3,
    title: 'Interstellar',
    slug: 'interstellar',
    description: 'A journey beyond the stars to save humanity.',
    date: '2026-04-18',
    premiereDate: '2014-11-07',
    durationMinutes: 169,
    createdAt: '2026-04-10',
    updatedAt: '2026-04-15',
    image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=800'
  },
  {
    id: 4,
    title: 'The Batman',
    slug: 'the-batman',
    description: 'Dark and gritty take on Gotham’s vigilante.',
    date: '2026-04-18',
    premiereDate: '2022-03-04',
    durationMinutes: 176,
    createdAt: '2026-04-10',
    updatedAt: '2026-04-15',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800'
  }
]
</script>

<template>
  <section class="bg-black text-white py-20 px-6 lg:px-12">
    <div class="max-w-7xl mx-auto">

      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-playfair font-bold mb-4">
          Now Showing
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Discover the latest blockbusters and timeless classics on the big screen.
        </p>
      </div>

      <!-- Movies Grid -->
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div
          v-for="movie in movies"
          :key="movie.id"
          class="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-cinema-gold/40 transition-all duration-300"
        >
          <!-- Image -->
          <div class="relative overflow-hidden">
            <img
              :src="movie.image"
              :alt="movie.title"
              class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />

            <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

            <!-- Duration badge -->
            <div class="absolute top-3 right-3 bg-black/70 text-xs text-white px-2 py-1 rounded">
              {{ movie.durationMinutes }} min
            </div>
          </div>

          <!-- Content -->
          <div class="p-5 flex flex-col gap-3">
            <h3 class="text-lg font-semibold group-hover:text-cinema-gold transition">
              {{ movie.title }}
            </h3>

            <p class="text-sm text-gray-400 line-clamp-3">
              {{ movie.description }}
            </p>

            <!-- Meta -->
            <div class="text-xs text-gray-500 flex justify-between mt-2">
              <span>Premiere: {{ movie.premiereDate }}</span>
              <span>{{ movie.date }}</span>
            </div>

            <!-- Button -->
            <RouterLink
              :to="`/movies/${movie.slug}`"
              class="mt-4 bg-cinema-red hover:bg-red-700 text-white py-2 rounded text-sm transition text-center block"
            >
              View Details
            </RouterLink>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>