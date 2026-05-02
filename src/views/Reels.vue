<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-4xl font-bold mb-8">Reels</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="n in 6" :key="n" class="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
        <span class="text-gray-400">Video {{ n }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
