<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import BottomNav from '@/components/BottomNav.vue'
</script>

<template>
  <div class="min-h-screen bg-white flex flex-col">
    <NavBar />
    <main class="flex-1 pb-16 md:pb-0">
      <RouterView />
    </main>
    <!-- Desktop Footer -->
    <Footer class="hidden md:block" />
    <!-- Mobile Bottom Navigation -->
    <BottomNav />
  </div>
</template>

<style scoped>
</style>
