<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen bg-white px-5 py-8 pb-24">
    <!-- Header -->
    <div class="border-b border-gray-200 pb-8 mb-8">
      <h1 class="text-3xl font-bold tracking-tight text-black mb-3">About Jonosrot</h1>
      <p class="text-base text-gray-500 leading-relaxed max-w-lg">
        Bringing you the stories that matter, delivered with engineering precision and journalistic integrity.
      </p>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-3 gap-4 mb-10">
      <div class="p-4 border border-gray-200 rounded-xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        <h3 class="text-2xl font-bold tracking-tight text-black mb-1">100%</h3>
        <p class="text-[11px] font-medium text-gray-500 uppercase tracking-wider">Independent</p>
      </div>
      <div class="p-4 border border-gray-200 rounded-xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        <h3 class="text-2xl font-bold tracking-tight text-black mb-1">500K</h3>
        <p class="text-[11px] font-medium text-gray-500 uppercase tracking-wider">Readers</p>
      </div>
      <div class="p-4 border border-gray-200 rounded-xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        <h3 class="text-2xl font-bold tracking-tight text-black mb-1">50+</h3>
        <p class="text-[11px] font-medium text-gray-500 uppercase tracking-wider">Awards</p>
      </div>
    </div>

    <!-- Content Sections -->
    <div class="space-y-8">
      <section>
        <h2 class="text-sm font-bold text-black uppercase tracking-widest mb-3">Mission</h2>
        <p class="text-sm text-gray-600 leading-relaxed">
          Founded with a vision to democratize access to quality news, Jonosrot stands as a beacon of truth in an
          increasingly complex media landscape. Our team of experienced journalists and editors work tirelessly to
          uncover the stories that truly matter.
        </p>
      </section>

      <section>
        <h2 class="text-sm font-bold text-black uppercase tracking-widest mb-3">Core Values</h2>
        <div class="space-y-3">
          <div
            class="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
            <div class="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0"></div>
            <div>
              <h3 class="text-sm font-bold text-black">Integrity</h3>
              <p class="text-xs text-gray-500 mt-1">Upholding the highest standards of accuracy.</p>
            </div>
          </div>
          <div
            class="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
            <div class="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0"></div>
            <div>
              <h3 class="text-sm font-bold text-black">Independence</h3>
              <p class="text-xs text-gray-500 mt-1">Zero influence from political or corporate interests.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>