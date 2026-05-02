<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

interface NavItem {
  id: string
  label: string
  icon: string
  path?: string
}

const navItems: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: 'M3 12a9 9 0 1 1 18 0a9 9 0 0 1-18 0M12 6v6h4.5',
    path: '/'
  },
  {
    id: 'reels',
    label: 'Reels',
    icon: 'M9 3v2h6V3M7 5h10v14H7z M11 8h2v8h-2M9 8h1v8H9m4 0h1v8h-1',
    path: '/reels'
  },
  {
    id: 'notification',
    label: 'Notifications',
    icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6.002 6.002 0 0 0-4-5.659V5a2 2 0 1 0-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 1 1-6 0v-1m6 0H9',
    path: '/notifications'
  },
  {
    id: 'social',
    label: 'Social',
    icon: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8m3.5-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m-7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5',
    path: '/social'
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4',
    path: '/profile'
  }
]

const isActive = (path?: string) => {
  if (!path) return false
  return route.path === path
}

const navigate = (item: NavItem) => {
  if (item.path) {
    router.push(item.path)
  }
}
</script>

<template>
  <!-- Bottom Navigation - Mobile Only -->
  <nav class="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-gray-200 z-40">
    <div class="flex justify-around items-center h-16">
      <button
        v-for="item in navItems"
        :key="item.id"
        @click="navigate(item)"
        class="flex flex-col items-center justify-center h-full flex-1 gap-1 text-gray-600 hover:text-black transition-colors relative group"
        :class="{ 'text-black': isActive(item.path) }"
        :title="item.label"
      >
        <!-- Icon -->
        <svg
          class="w-6 h-6"
          :class="{ 'text-black': isActive(item.path), 'text-gray-600': !isActive(item.path) }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" :d="item.icon" />
        </svg>

        <!-- Label (show on hover for smaller screens) -->
        <span class="text-xs hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity">
          {{ item.label }}
        </span>

        <!-- Active Indicator -->
        <div
          v-if="isActive(item.path)"
          class="absolute top-0 left-0 right-0 h-1 bg-black rounded-b"
        />
      </button>
    </div>
  </nav>

  <!-- Padding for bottom nav on mobile -->
  <div class="h-16 md:hidden" />
</template>

<style scoped>
button {
  user-select: none;
}

button:active {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
