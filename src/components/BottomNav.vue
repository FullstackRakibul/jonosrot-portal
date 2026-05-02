<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

interface NavItem {
  id: string
  label: string
  path: string
  outlinedIcon: string
  filledIcon: string
}

const navItems: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    path: '/',
    outlinedIcon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
    filledIcon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'
  },
  {
    id: 'reels',
    label: 'Reels',
    path: '/reels',
    outlinedIcon: 'M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14v-4z M4 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11V6H4z',
    filledIcon: 'M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14v-4z M4 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11V6H4z'
  },
  {
    id: 'notification',
    label: 'Alerts',
    path: '/notifications',
    outlinedIcon: 'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 0 1-3.46 0',
    filledIcon: 'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 0 1-3.46 0'
  },
  {
    id: 'social',
    label: 'Social',
    path: '/social',
    outlinedIcon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75',
    filledIcon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75'
  },
  {
    id: 'profile',
    label: 'Menu',
    path: '/profile',
    outlinedIcon: 'M4 6h16 M4 12h16 M4 18h16',
    filledIcon: 'M4 6h16 M4 12h16 M4 18h16'
  }
]

// Using a local ref for instant UI response before router completes
const activeIndex = ref(0)

// Sync with route changes
const syncRoute = () => {
  const index = navItems.findIndex(item => route.path === item.path)
  activeIndex.value = index === -1 ? 0 : index
}

watch(() => route.path, syncRoute)
onMounted(syncRoute)

const navigate = (item: NavItem, index: number) => {
  activeIndex.value = index // Immediate UI update
  router.push(item.path)
}
</script>

<template>
  <div class="h-20 md:hidden bg-white" />

  <!-- Nav Container -->
  <nav
    class="fixed bottom-0 left-0 right-0 md:hidden bg-[#242526] z-40 rounded-t-2xl shadow-[0_-4px_25px_rgba(0,0,0,0.1)]">
    <!-- 
      Removed padding and used strict flex-1 to ensure mathematically perfect alignment 
      between the indicator width and the nav item widths.
    -->
    <ul class="relative flex w-full h-15 m-0 p-0 list-none">

      <!-- Fluid Magic Indicator Background -->
      <div class="absolute top-0 left-0 h-full pointer-events-none indicator-transition" :style="{
        width: `${100 / navItems.length}%`,
        transform: `translateX(${activeIndex * 100}%)`
      }">
        <div class="indicator-circle"></div>
      </div>

      <!-- Navigation Items -->
      <li v-for="(item, index) in navItems" :key="item.id"
        class="relative z-10 flex-1 flex justify-center items-center h-full">
        <button @click="navigate(item, index)"
          class="flex flex-col items-center justify-center w-full h-full group bg-transparent border-none outline-none tap-transparent"
          :title="item.label">
          <!-- Icon Container -->
          <div class="relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-500 z-20"
            :class="[
              activeIndex === index
                ? '-translate-y-6.5  text-white'
                : 'text-gray-400 group-hover:text-gray-200 translate-y-1'
            ]">
            <svg class="w-6 h-6.5 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 26 26"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path :d="activeIndex === index ? item.filledIcon : item.outlinedIcon" />
            </svg>
          </div>

          <!-- Label -->
          <span class="absolute bottom-0 text-[11px] font-medium transition-all duration-500" :class="[
            activeIndex === index
              ? 'opacity-100 text-white translate-y-0'
              : 'opacity-100 text-gray-400 translate-y-0'
          ]">
            {{ item.label }}
          </span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.tap-transparent {
  -webkit-tap-highlight-color: transparent;
}

/* Premium bouncy transition for the sliding effect */
.indicator-transition {
  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* Precision CSS Geometry for the Cutout */
.indicator-circle {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  background-color: #242526;
  border-radius: 50%;
  /* 6px border matches the app background color (white) */
  border: 6px solid #ffffff;
  box-sizing: content-box;
}

/* Left curve of the cutout */
.indicator-circle::before {
  content: '';
  position: absolute;
  top: 10px;
  /* Aligns exactly with the top of the nav bar */
  left: -25px;
  width: 20px;
  height: 20px;
  background: transparent;
  border-top-right-radius: 20px;
  /* Shadow color must match the app background color (white) */
  box-shadow: 5px -5px 0 0 #f1f1f1;
}

/* Right curve of the cutout */
.indicator-circle::after {
  content: '';
  position: absolute;
  top: 10px;
  /* Aligns exactly with the top of the nav bar */
  right: -25px;
  width: 20px;
  height: 20px;
  background: transparent;
  border-top-left-radius: 20px;
  /* Shadow color must match the app background color (white) */
  box-shadow: -5px -5px 0 0 #f1f1f1;
}
</style>