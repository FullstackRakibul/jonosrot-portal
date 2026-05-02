<script setup lang="ts">
import { computed } from 'vue'

const categories = ['Technology', 'Science', 'Business', 'Lifestyle']

const featuredStories = [
  {
    id: 1,
    title: 'The Future of Artificial Intelligence',
    description: 'Exploring how AI is reshaping industries and changing the way we work',
    category: 'Technology',
    image: '🤖',
    date: 'May 2, 2026',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Breaking: New Climate Report Released',
    description: 'Scientists warn of accelerating climate change and urge immediate action',
    category: 'Science',
    image: '🌍',
    date: 'May 1, 2026',
    readTime: '8 min read'
  },
  {
    id: 3,
    title: 'Global Markets Hit Record Highs',
    description: 'Stock markets surge following positive economic indicators worldwide',
    category: 'Business',
    image: '📈',
    date: 'April 30, 2026',
    readTime: '6 min read'
  }
]
</script>

<template>
  <div class="w-full">
    <!-- Hero Banner -->
    <div class="bg-gradient-to-br from-black to-gray-900 text-white py-16 sm:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Stay Updated with the Latest Stories
          </h1>
          <p class="text-lg sm:text-xl text-gray-300 mb-8">
            Discover breaking news, insights, and stories that matter. Delivered daily to your inbox.
          </p>
          <button class="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>

    <!-- Main Featured Story -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <!-- Large Featured Article -->
        <div class="md:col-span-2 group cursor-pointer">
          <div class="bg-gray-100 rounded-xl overflow-hidden mb-4 h-64 sm:h-80 flex items-center justify-center text-6xl hover:bg-gray-200 transition-colors">
            {{ featuredStories[0].image }}
          </div>
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="text-xs font-semibold text-black uppercase">{{ featuredStories[0].category }}</span>
              <span class="text-xs text-gray-600">{{ featuredStories[0].date }}</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-bold mb-2 group-hover:text-gray-700 transition-colors">
              {{ featuredStories[0].title }}
            </h2>
            <p class="text-gray-600 mb-3 text-sm sm:text-base">
              {{ featuredStories[0].description }}
            </p>
            <p class="text-xs text-gray-500">{{ featuredStories[0].readTime }}</p>
          </div>
        </div>

        <!-- Sidebar Featured Articles -->
        <div class="space-y-6">
          <div 
            v-for="(story, index) in featuredStories.slice(1)" 
            :key="story.id"
            class="group cursor-pointer border-b pb-6 last:border-b-0 last:pb-0"
          >
            <div class="bg-gray-100 rounded-lg overflow-hidden mb-3 h-24 flex items-center justify-center text-4xl hover:bg-gray-200 transition-colors">
              {{ story.image }}
            </div>
            <div class="flex items-center gap-2 mb-2">
              <span class="text-xs font-semibold text-black uppercase">{{ story.category }}</span>
            </div>
            <h3 class="font-bold text-base group-hover:text-gray-700 transition-colors line-clamp-2">
              {{ story.title }}
            </h3>
            <p class="text-xs text-gray-500 mt-2">{{ story.date }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Category Filter -->
    <div class="border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex gap-4 overflow-x-auto pb-4 pt-6 scroll-smooth">
          <button class="px-4 py-2 bg-black text-white rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-800 transition-colors">
            All
          </button>
          <button 
            v-for="category in categories"
            :key="category"
            class="px-4 py-2 border border-gray-300 text-gray-700 rounded-full text-sm font-medium whitespace-nowrap hover:border-black hover:text-black transition-colors"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </div>

    <!-- Latest Stories Grid -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="text-2xl sm:text-3xl font-bold mb-8">Latest Stories</h2>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="i in 6"
          :key="i"
          class="group cursor-pointer border border-gray-200 rounded-lg overflow-hidden hover:border-black transition-colors hover:shadow-lg"
        >
          <div class="bg-gray-100 h-48 flex items-center justify-center text-5xl hover:bg-gray-200 transition-colors">
            🔥
          </div>
          <div class="p-4 sm:p-5">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-xs font-semibold text-black uppercase">News</span>
              <span class="text-xs text-gray-600">May {{ i }}, 2026</span>
            </div>
            <h3 class="font-bold text-base sm:text-lg mb-2 group-hover:text-gray-700 transition-colors line-clamp-2">
              Breaking News Story {{ i }}: Important Update You Need to Know
            </h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-2">
              This is a sample news story description that gives readers a brief overview of the news content.
            </p>
            <p class="text-xs text-gray-500">4 min read</p>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div class="flex justify-center mt-12">
        <button class="px-8 py-3 border-2 border-black text-black font-semibold rounded-lg hover:bg-black hover:text-white transition-colors">
          Load More Stories
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
