<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-4xl font-bold mb-8">Notifications</h1>
    <div class="space-y-4">
      <div v-for="n in 5" :key="n" class="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:bg-gray-100 cursor-pointer transition-colors">
        <div class="flex gap-3">
          <div class="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0" />
          <div class="flex-1">
            <h3 class="font-semibold">Notification {{ n }}</h3>
            <p class="text-gray-600 text-sm">This is a notification message</p>
            <span class="text-xs text-gray-400">2 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
