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
  <nav class="top-nav">
    <div class="top-nav__inner">
      <!-- Logo -->
      <RouterLink to="/" class="top-nav__logo">
        <div class="top-nav__logo-icon">
          <span>জ</span>
        </div>
        <span class="top-nav__logo-text">Jonosrot</span>
      </RouterLink>

      <!-- Desktop Navigation -->
      <div class="top-nav__links">
        <RouterLink
          v-for="item in navItems"
          :key="item.name"
          :to="item.path"
          class="top-nav__link"
          active-class="top-nav__link--active"
        >
          {{ item.name }}
        </RouterLink>
      </div>

      <!-- Desktop CTA -->
      <button class="top-nav__cta">Subscribe</button>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="top-nav__hamburger" :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'">
        <svg v-if="!isMenuOpen" class="top-nav__hamburger-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="top-nav__hamburger-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <transition
      enter-active-class="mobile-enter-active"
      enter-from-class="mobile-enter-from"
      enter-to-class="mobile-enter-to"
      leave-active-class="mobile-leave-active"
      leave-from-class="mobile-leave-from"
      leave-to-class="mobile-leave-to"
    >
      <div v-if="isMenuOpen" class="top-nav__mobile">
        <RouterLink
          v-for="item in navItems"
          :key="item.name"
          :to="item.path"
          @click="closeMenu"
          class="top-nav__mobile-link"
          active-class="top-nav__mobile-link--active"
        >
          {{ item.name }}
        </RouterLink>
        <button class="top-nav__mobile-cta">Subscribe</button>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.top-nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: #ffffff;
  border-bottom: 1px solid #f0f1f4;
}

.top-nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
}

/* ━━━ Logo ━━━ */
.top-nav__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.top-nav__logo:hover {
  opacity: 0.8;
}

.top-nav__logo-icon {
  width: 36px;
  height: 36px;
  background: #1a1a1a;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.top-nav__logo-icon span {
  color: #ffffff;
  font-weight: 800;
  font-size: 17px;
  line-height: 1;
}

.top-nav__logo-text {
  font-weight: 800;
  font-size: 17px;
  color: #111827;
  letter-spacing: -0.01em;
  display: none;
}

@media (min-width: 640px) {
  .top-nav__logo-text {
    display: inline;
  }
}

/* ━━━ Desktop Nav Links ━━━ */
.top-nav__links {
  display: none;
  align-items: center;
  gap: 28px;
}

@media (min-width: 768px) {
  .top-nav__links {
    display: flex;
  }
}

.top-nav__link {
  font-size: 13.5px;
  font-weight: 600;
  color: #6b7280;
  text-decoration: none;
  transition: color 0.2s ease;
  padding: 4px 0;
  position: relative;
}

.top-nav__link:hover {
  color: #111827;
}

.top-nav__link--active {
  color: #111827;
  font-weight: 700;
}

.top-nav__link--active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: #111827;
  border-radius: 1px;
}

/* ━━━ Desktop CTA ━━━ */
.top-nav__cta {
  display: none;
  padding: 8px 22px;
  background: #1a1a1a;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.top-nav__cta:hover {
  background: #333333;
}

.top-nav__cta:active {
  transform: scale(0.96);
}

@media (min-width: 768px) {
  .top-nav__cta {
    display: block;
  }
}

/* ━━━ Hamburger ━━━ */
.top-nav__hamburger {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: none;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;
}

.top-nav__hamburger:hover {
  background: #f3f4f6;
}

.top-nav__hamburger-icon {
  width: 22px;
  height: 22px;
  color: #374151;
}

@media (min-width: 768px) {
  .top-nav__hamburger {
    display: none;
  }
}

/* ━━━ Mobile Menu ━━━ */
.top-nav__mobile {
  padding: 8px 16px 16px;
  border-top: 1px solid #f0f1f4;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.top-nav__mobile-link {
  display: block;
  padding: 10px 14px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  color: #4b5563;
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease;
}

.top-nav__mobile-link:hover {
  background: #f9fafb;
  color: #111827;
}

.top-nav__mobile-link--active {
  background: #1a1a1a;
  color: #ffffff;
}

.top-nav__mobile-cta {
  margin-top: 8px;
  padding: 10px 14px;
  background: #1a1a1a;
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
}

.top-nav__mobile-cta:hover {
  background: #333333;
}

/* ━━━ Mobile Transitions ━━━ */
.mobile-enter-active {
  transition: all 0.2s ease-out;
}
.mobile-leave-active {
  transition: all 0.15s ease-in;
}
.mobile-enter-from,
.mobile-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
.mobile-enter-to,
.mobile-leave-from {
  opacity: 1;
  transform: translateY(0);
}

@media (min-width: 768px) {
  .top-nav__mobile {
    display: none !important;
  }
}
</style>
