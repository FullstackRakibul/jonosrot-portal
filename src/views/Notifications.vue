<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen bg-white px-5 py-8 pb-24">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold tracking-tight text-black">Inbox</h1>
      <button class="text-xs font-semibold text-gray-500 hover:text-black transition-colors">Mark all as read</button>
    </div>

    <div class="border border-gray-200 rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
      <div class="bg-gray-50/80 border-b border-gray-200 px-4 py-2.5">
        <span class="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Today</span>
      </div>

      <div class="divide-y divide-gray-100 bg-white">
        <div v-for="n in 4" :key="n" class="p-4 flex gap-3 hover:bg-gray-50 transition-colors cursor-pointer group">
          <div class="mt-1 shrink-0 relative">
            <div class="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"></div>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-black mb-0.5 truncate">Pipeline #{{ 4092 + n }} completed successfully
            </p>
            <p class="text-xs text-gray-500 truncate">System deployed to production environment.</p>
          </div>
          <span class="text-[10px] text-gray-400 font-medium shrink-0">{{ n }}h</span>
        </div>
      </div>
    </div>
  </div>
</template>