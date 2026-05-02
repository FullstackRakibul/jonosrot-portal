<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Latest', path: '/' },
  { name: 'About', path: '/about' }
]
</script>

<template>
  <nav class="sticky top-0 z-50 bg-white border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div class="flex items-center justify-center w-10 h-10 bg-black rounded-lg">
            <span class="text-white font-bold text-lg">জ</span>
          </div>
          <span class="hidden sm:inline font-bold text-lg text-black">Jonosrot</span>
        </RouterLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <RouterLink 
            v-for="item in navItems" 
            :key="item.name"
            :to="item.path"
            class="text-gray-700 hover:text-black font-medium text-sm transition-colors"
            active-class="text-black font-bold"
          >
            {{ item.name }}
          </RouterLink>
        </div>

        <!-- Desktop CTA -->
        <button class="hidden md:block px-6 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm">
          Subscribe
        </button>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMenu"
          class="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="isMenuOpen" class="md:hidden border-t border-gray-200">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <RouterLink
              v-for="item in navItems"
              :key="item.name"
              :to="item.path"
              @click="closeMenu"
              class="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 font-medium transition-colors"
              active-class="bg-black text-white"
            >
              {{ item.name }}
            </RouterLink>
            <button class="w-full text-left px-3 py-2 rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition-colors mt-4">
              Subscribe
            </button>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<style scoped>
</style>
