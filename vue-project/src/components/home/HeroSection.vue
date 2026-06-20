<script setup lang="ts">
import { onMounted, ref } from 'vue'

const visible = ref(false)

onMounted(() => {
  setTimeout(() => (visible.value = true), 100)
})
</script>

<template>
  <section class="relative h-screen w-full flex items-center justify-center overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop"
        alt="Cinema Theater"
        class="w-full h-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-linear-to-b from-cinema-black/80 via-cinema-black/60 to-cinema-black"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center mt-16">

      <!-- Subtitle -->
      <div
        class="mb-4 transition-all duration-1000"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
        style="transition-delay: 0.2s"
      >
        <span class="font-inter text-cinema-gold tracking-[0.2em] uppercase text-sm font-medium">
          The Ultimate Viewing Experience
        </span>
      </div>

      <!-- Title -->
      <h1
        class="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6 max-w-5xl transition-all duration-1000"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
        style="transition-delay: 0.4s"
      >
        Experience Cinema <br class="hidden md:block" />
        <span class="italic font-light text-gray-300">
          Like Never Before
        </span>
      </h1>

      <!-- Description -->
      <p
        class="font-inter text-lg md:text-xl text-gray-400 max-w-2xl mb-10 transition-all duration-1000"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
        style="transition-delay: 0.6s"
      >
        Immerse yourself in breathtaking visuals and spine-tingling audio.
        Where every frame is a masterpiece and every sound tells a story.
      </p>

      <!-- Buttons -->
      <div
        class="flex flex-col sm:flex-row items-center gap-4 transition-all duration-1000"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
        style="transition-delay: 0.8s"
      >
        <button class="bg-cinema-red hover:bg-red-700 text-white px-8 py-4 rounded-sm font-inter font-semibold text-sm tracking-wide transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
          View Showtimes
        </button>

        <button class="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-sm font-inter font-semibold text-sm tracking-wide transition-all duration-300 w-full sm:w-auto">
          
          <!-- SVG zamiast lucide -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>

          Watch Trailer
        </button>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div
      class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-1000"
      :class="visible ? 'opacity-100' : 'opacity-0'"
      style="transition-delay: 1.5s"
    >
      <span class="font-inter text-xs text-gray-500 tracking-widest uppercase">
        Scroll
      </span>

      <div class="w-px h-12 bg-linear-to-b from-cinema-gold to-transparent animate-bounce-slow"></div>
    </div>
  </section>
</template>

<style scoped>
/* Delikatna animacja zamiast framer-motion */
.animate-bounce-slow {
  animation: bounceSlow 2s infinite ease-in-out;
}

@keyframes bounceSlow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}
</style>