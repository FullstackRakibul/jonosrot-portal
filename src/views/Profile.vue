<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen bg-white px-5 py-8 pb-24">
    <!-- Header Profile -->
    <div class="flex items-center gap-5 mb-8">
      <div
        class="w-20 h-20 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center shadow-sm shrink-0">
        <span class="text-xl text-black font-bold tracking-tighter">JD</span>
      </div>
      <div>
        <h1 class="text-2xl font-bold tracking-tight text-black leading-none mb-1">John Doe</h1>
        <p class="text-sm text-gray-500 mb-3">@johndoe</p>
        <div class="flex gap-2">
          <span
            class="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold bg-gray-100 text-black border border-gray-200 uppercase tracking-wider">Contributor</span>
          <span
            class="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold bg-gray-100 text-black border border-gray-200 uppercase tracking-wider">Verified</span>
        </div>
      </div>
    </div>

    <!-- Stats Matrix -->
    <div class="flex divide-x divide-gray-200 border-y border-gray-200 mb-8 py-4">
      <div class="flex-1 text-center">
        <p class="text-lg font-bold text-black tracking-tight">245</p>
        <p class="text-[11px] text-gray-500 font-medium mt-0.5">Articles</p>
      </div>
      <div class="flex-1 text-center">
        <p class="text-lg font-bold text-black tracking-tight">12.5K</p>
        <p class="text-[11px] text-gray-500 font-medium mt-0.5">Followers</p>
      </div>
      <div class="flex-1 text-center">
        <p class="text-lg font-bold text-black tracking-tight">1.2K</p>
        <p class="text-[11px] text-gray-500 font-medium mt-0.5">Following</p>
      </div>
    </div>

    <!-- Actions -->
    <div class="flex gap-3 mb-10">
      <button
        class="flex-1 bg-black text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-gray-900 transition-colors shadow-sm">
        Follow
      </button>
      <button
        class="flex-1 bg-white border border-gray-200 text-black text-sm font-semibold py-2.5 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
        Message
      </button>
    </div>

    <!-- Activity Log -->
    <div>
      <h2 class="text-sm font-bold text-black uppercase tracking-widest mb-4">Recent Activity</h2>
      <div class="space-y-3">
        <div v-for="n in 3" :key="n"
          class="group border border-gray-200 rounded-xl p-4 hover:border-black transition-colors cursor-pointer bg-white">
          <div class="flex justify-between items-start mb-2">
            <h3 class="font-semibold text-sm text-black group-hover:underline decoration-2 underline-offset-2">
              Architecting the Modern Web</h3>
            <span class="text-[10px] font-medium text-gray-400 whitespace-nowrap ml-4">3d ago</span>
          </div>
          <p class="text-xs text-gray-500 line-clamp-2 leading-relaxed">An deep dive into performance, modern
            frameworks, and how enterprise architecture is shifting towards edge networks.</p>
        </div>
      </div>
    </div>
  </div>
</template>