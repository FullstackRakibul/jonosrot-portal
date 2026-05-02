<script setup lang="ts">
import { ref, watch, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

interface NavItem {
  id: string
  label: string
  path: string
  icon: string
}

const navItems: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    path: '/',
    icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'
  },
  {
    id: 'reels',
    label: 'Reels',
    path: '/reels',
    icon: 'M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14v-4z M4 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11V6H4z'
  },
  {
    id: 'notification',
    label: 'Alerts',
    path: '/notifications',
    icon: 'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 0 1-3.46 0'
  },
  {
    id: 'social',
    label: 'Social',
    path: '/social',
    icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75'
  },
  {
    id: 'profile',
    label: 'Menu',
    path: '/profile',
    icon: 'M4 6h16 M4 12h16 M4 18h16'
  }
]

const activeIndex = ref(0)

const syncRoute = () => {
  const index = navItems.findIndex(item => route.path === item.path)
  activeIndex.value = index === -1 ? 0 : index
}

watch(() => route.path, syncRoute)
onMounted(syncRoute)

const navigate = (item: NavItem, index: number) => {
  activeIndex.value = index
  router.push(item.path)
}

/**
 * Computed SVG path that creates the curved bar shape
 * with a concave notch that tracks the active item.
 */
const navBarPath = computed(() => {
  const count = navItems.length
  const totalW = 500
  const itemW = totalW / count
  const cx = itemW * activeIndex.value + itemW / 2

  const notchR = 22
  const curveW = 14
  const barTop = 16

  const leftStart = cx - notchR - curveW
  const leftEnd = cx - notchR
  const rightStart = cx + notchR
  const rightEnd = cx + notchR + curveW

  const r = 14 // top corner radius

  return [
    // Start below top-left corner, arc into the top edge
    `M 0 ${barTop + r}`,
    `A ${r} ${r} 0 0 1 ${r} ${barTop}`,
    // Straight to notch left
    `H ${leftStart}`,
    // Left concave curve into notch
    `C ${leftStart + curveW * 0.7} ${barTop}, ${leftEnd - 4} ${barTop}, ${leftEnd} ${barTop + 10}`,
    // Arc across the notch
    `A ${notchR} ${notchR} 0 0 0 ${rightStart} ${barTop + 10}`,
    // Right concave curve out of notch
    `C ${rightStart + 4} ${barTop}, ${rightEnd - curveW * 0.7} ${barTop}, ${rightEnd} ${barTop}`,
    // Straight to top-right corner, arc down
    `H ${totalW - r}`,
    `A ${r} ${r} 0 0 1 ${totalW} ${barTop + r}`,
    // Down and across the bottom
    `V 80 H 0 Z`
  ].join(' ')
})
</script>

<template>
  <!-- Spacer to prevent content from being hidden behind the fixed nav -->
  <div class="bottom-nav-spacer" />

  <!-- Bottom Navigation -->
  <nav class="bottom-nav" aria-label="Main navigation">
    <!-- SVG Curved Background with smooth notch -->
    <svg class="bottom-nav__bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 80" preserveAspectRatio="none">
      <path class="bottom-nav__bg-path" :d="navBarPath" fill="#1a1a1a" />
    </svg>

    <!-- Nav Items -->
    <ul class="bottom-nav__items">
      <li v-for="(item, index) in navItems" :key="item.id" class="bottom-nav__item">
        <button class="bottom-nav__btn" :class="{ 'is-active': activeIndex === index }" :title="item.label"
          @click="navigate(item, index)">
          <!-- Floating circle behind active icon -->
          <span class="bottom-nav__circle">
            <svg class="bottom-nav__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <path :d="item.icon" />
            </svg>
          </span>

          <!-- Label text -->
          <span class="bottom-nav__label">{{ item.label }}</span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
/* ━━━ Layout & Structure ━━━ */
.bottom-nav-spacer {
  display: block;
  height: 64px;
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 480px;
  z-index: 50;
  height: 80px;
  pointer-events: none;
  overflow: visible;
}

@media (min-width: 768px) {

  .bottom-nav-spacer,
  .bottom-nav {
    display: none;
  }
}

/* ━━━ SVG Background with Notch ━━━ */
.bottom-nav__bg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: auto;
  filter: drop-shadow(0 -3px 12px rgba(116, 110, 110, 0.12));
  overflow: visible;
}

.bottom-nav__bg-path {
  transition: d 0.5s cubic-bezier(0.3, 0, 0.2, 1);
}

/* ━━━ Nav Items Grid ━━━ */
.bottom-nav__items {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0 0 4px;
  height: 64px;
  pointer-events: auto;
  overflow: visible;
}

.bottom-nav__item {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
}

/* ━━━ Button ━━━ */
.bottom-nav__btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  padding: 0;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: visible;
  /* Default: icon+label sit in the middle of the bar */
  justify-content: center;
  gap: 2px;
}

/* ━━━ Circle (active indicator) ━━━ */
.bottom-nav__circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
  flex-shrink: 0;
  transition:
    transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
    background-color 0.4s ease,
    box-shadow 0.4s ease;
  will-change: transform, background-color;
  z-index: 10;
}

.bottom-nav__btn:not(.is-active) .bottom-nav__circle {
  transform: translateY(0);
  background: transparent;
  box-shadow: none;
}

.bottom-nav__btn.is-active .bottom-nav__circle {
  transform: translateY(-18px);
  background: #1a1a1a;
  box-shadow:
    0 6px 20px rgba(59, 63, 84, 0.30),
    0 0 0 5px #ffffff;
}

/* ━━━ Icon ━━━ */
.bottom-nav__icon {
  width: 22px;
  height: 22px;
  transition:
    color 0.35s ease,
    stroke-width 0.3s ease;
}

.bottom-nav__btn:not(.is-active) .bottom-nav__icon {
  color: rgba(255, 255, 255, 0.55);
  stroke-width: 1.8;
}

.bottom-nav__btn.is-active .bottom-nav__icon {
  color: #ffffff;
  stroke-width: 2.2;
}

.bottom-nav__btn:not(.is-active):hover .bottom-nav__icon {
  color: rgba(255, 255, 255, 0.85);
}

/* ━━━ Label ━━━ */
.bottom-nav__label {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.03em;
  line-height: 1;
  transition:
    opacity 0.4s ease,
    transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),
    color 0.35s ease;
  will-change: opacity, transform;
}

.bottom-nav__btn:not(.is-active) .bottom-nav__label {
  color: rgba(255, 255, 255, 0.50);
  opacity: 1;
  transform: translateY(0);
}

.bottom-nav__btn.is-active .bottom-nav__label {
  color: #ffffff;
  opacity: 1;
  transform: translateY(-12px);
  font-weight: 700;
}

/* ━━━ Active press micro-feedback ━━━ */
.bottom-nav__btn:active .bottom-nav__circle {
  transition-duration: 0.1s;
}

.bottom-nav__btn.is-active:active .bottom-nav__circle {
  transform: translateY(-16px) scale(0.93);
}
</style>