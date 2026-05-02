<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="flex flex-col items-center gap-6 mb-12">
      <div class="w-24 h-24 bg-gradient-to-br from-black to-gray-800 rounded-full flex items-center justify-center">
        <span class="text-4xl text-white font-bold">JR</span>
      </div>
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-2">John Doe</h1>
        <p class="text-gray-600">@johndoe • News Contributor</p>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-6 mb-12">
      <div class="bg-gray-50 rounded-lg p-6 text-center">
        <p class="text-3xl font-bold">245</p>
        <p class="text-gray-600 text-sm">Articles</p>
      </div>
      <div class="bg-gray-50 rounded-lg p-6 text-center">
        <p class="text-3xl font-bold">12.5K</p>
        <p class="text-gray-600 text-sm">Followers</p>
      </div>
      <div class="bg-gray-50 rounded-lg p-6 text-center">
        <p class="text-3xl font-bold">1.2K</p>
        <p class="text-gray-600 text-sm">Following</p>
      </div>
    </div>

    <div class="flex gap-3 mb-12">
      <button class="flex-1 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors">
        Follow
      </button>
      <button class="flex-1 border border-gray-200 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
        Message
      </button>
    </div>

    <div>
      <h2 class="text-2xl font-bold mb-6">Recent Articles</h2>
      <div class="space-y-4">
        <div v-for="n in 3" :key="n" class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors">
          <h3 class="font-semibold mb-2">Article Title {{ n }}</h3>
          <p class="text-gray-600 text-sm">Brief description of the article content goes here...</p>
          <span class="text-xs text-gray-400">3 days ago</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
