<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import BottomNav from '@/components/BottomNav.vue'
</script>

<template>
  <!-- App shell: centered max-width container for mobile-app feel on all screens -->
  <div class="app-shell">
    <div class="app-frame">
      <NavBar />
      <main class="app-main">
        <RouterView />
      </main>
      <!-- Desktop Footer -->
      <Footer class="hidden md:block" />
      <!-- Mobile Bottom Navigation -->
      <BottomNav />
    </div>
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  min-height: 100dvh;
  background: #e8eaef;
  display: flex;
  justify-content: center;
}

.app-frame {
  width: 100%;
  max-width: 480px;
  min-height: 100vh;
  min-height: 100dvh;
  background: #ffffff;
  position: relative;
  display: flex;
  
  flex-direction: column;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.08);
}

.app-main {
  flex: 1;
  width: 100%;
}

/* On larger screens remove the phone-frame effect */
@media (min-width: 768px) {
  .app-shell {
    background: #ffffff;
  }

  .app-frame {
    max-width: 100%;
    box-shadow: none;
  }
}
</style>