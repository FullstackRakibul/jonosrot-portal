<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen bg-white px-5 py-8 pb-24">
    <h1 class="text-2xl font-bold tracking-tight text-black mb-6">Shorts</h1>

    <div class="flex flex-col gap-6">
      <div v-for="n in 3" :key="n"
        class="relative rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden aspect-[9/16] shadow-sm group cursor-pointer">
        <!-- Minimalist Skeleton/Placeholder for Video -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div
            class="w-12 h-12 rounded-full bg-white/80 border border-gray-200 backdrop-blur-sm flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
            <svg class="w-5 h-5 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        <!-- Meta Data Overlay -->
        <div class="absolute bottom-0 left-0 right-0 p-5 bg-linear-to-t from-black/80 via-black/40 to-transparent">
          <div class="flex items-center gap-2 mb-2">
            <div class="w-6 h-6 rounded-full bg-white border border-transparent"></div>
            <span class="text-sm font-semibold text-white">@creator_tag</span>
          </div>
          <p class="text-xs font-medium text-gray-200 line-clamp-2">Exploring the new features in the latest runtime
            release. Fast, efficient, and type-safe.</p>
        </div>
      </div>
    </div>
  </div>
</template>