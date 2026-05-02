<script setup lang="ts">
const currentYear = new Date().getFullYear()

const footerLinks = {
  Company: ['About', 'Blog', 'Contact', 'Press'],
  Resources: ['Help Center', 'API', 'Terms', 'Privacy'],
  Follow: ['Twitter', 'Facebook', 'Instagram', 'LinkedIn']
}
</script>

<template>
  <footer class="bg-black flex justify-center align-center text-white border-t border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
        <!-- Brand -->
        <div class="col-span-2 sm:col-span-3 lg:col-span-1">
          <div class="flex items-center gap-2 mb-4">
            <div class="flex items-center justify-center w-10 h-10 bg-white rounded-lg">
              <span class="text-black font-bold text-lg">জ</span>
            </div>
            <span class="font-bold text-lg text-white">Jonosrot</span>
          </div>
          <p class="text-gray-400 text-sm">
            Stay informed with the latest news and stories that matter.
          </p>
        </div>

        <!-- Footer Sections -->
        <div v-for="(links, section) in footerLinks" :key="section">
          <h3 class="font-semibold text-white mb-4 text-sm uppercase">{{ section }}</h3>
          <ul class="space-y-2">
            <li v-for="link in links" :key="link">
              <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">
                {{ link }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Footer -->
      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p class="text-gray-400 text-sm">
            © {{ currentYear }} Jonosrot. All rights reserved.
          </p>
          <div class="flex gap-6">
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <span class="sr-only">Twitter</span>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9-0.5 11-4-4.5 1.5-7 0-7-0z" />
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <span class="sr-only">Facebook</span>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.5v8.5h2.5v-4.34c0-.92.6-1.9 1.68-1.9 1.07 0 1.67.98 1.67 1.9v4.34h2.5zM6.5 8a1 1 0 110-2 1 1 0 010 2zm.5 2.5v8.5h-2v-8.5h2z" />
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <span class="sr-only">Instagram</span>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor"
                  stroke-width="2" />
                <path fill="none" stroke="currentColor" stroke-width="2"
                  d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>