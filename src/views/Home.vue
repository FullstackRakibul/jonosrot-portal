<script setup lang="ts">
import { ref } from 'vue'

const activeCategory = ref('All')
const categories = ['All', 'Science', 'Crime', 'Politics', 'Entertainment', 'Sports']

const channels = [
  { id: 1, name: 'CNN', bg: '#DC2626', initial: 'CN' },
  { id: 2, name: 'FOX NEWS', bg: '#1E3A5F', initial: 'FX' },
  { id: 3, name: 'CNBC', bg: '#0F766E', initial: 'CB' },
  { id: 4, name: 'CBS', bg: '#18181B', initial: 'CS' },
  { id: 5, name: 'MAX', bg: '#7C3AED', initial: 'MX' },
]

const breakingNews = [
  {
    id: 1,
    title: 'Fernando Mendoza delivers strong message to Raiders ahead of NFL draft',
    image: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=600&auto=format&fit=crop',
    comments: '342',
    views: '25.2K',
    publisher: 'CNN'
  },
  {
    id: 2,
    title: 'Global markets brace for impact as new tech regulations are announced',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop',
    comments: '128',
    views: '12.4K',
    publisher: 'CNBC'
  }
]

const recommendations = [
  {
    id: 1,
    title: "Fernando Mendoza wows NFL fans with incredible throw on 'Tonight Show'",
    time: '2D ago',
    image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&w=400&auto=format&fit=crop',
    comments: '342',
    views: '25.2K',
    readTime: '2 min'
  },
  {
    id: 2,
    title: 'The untold story behind the latest groundbreaking space telescope images',
    time: '2D ago',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop',
    comments: '89',
    views: '15.1K',
    readTime: '5 min'
  },
  {
    id: 3,
    title: 'Local elections: What you need to know before heading to the polls',
    time: '3D ago',
    image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=400&auto=format&fit=crop',
    comments: '512',
    views: '40.8K',
    readTime: '4 min'
  }
]
</script>

<template>
  <div class="home-page">

    <!-- ━━━ Header / Search ━━━ -->
    <header class="home-header">
      <div class="search-wrapper">
        <svg class="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input type="text" placeholder="Search News" class="search-input" />
      </div>
      <button class="notif-btn" title="Notifications">
        <svg class="notif-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span class="notif-dot"></span>
      </button>
    </header>

    <!-- ━━━ Top Channels ━━━ -->
    <section class="section-channels">
      <h2 class="section-title">Top Channels</h2>
      <div class="channels-scroll">
        <button v-for="channel in channels" :key="channel.id" class="channel-chip" :style="{ '--chip-bg': channel.bg }">
          <span class="channel-name">{{ channel.name }}</span>
        </button>
      </div>
    </section>

    <!-- ━━━ Breaking News ━━━ -->
    <section class="section-breaking">
      <h2 class="section-title">Breaking News</h2>
      <div class="breaking-scroll">
        <article v-for="news in breakingNews" :key="news.id" class="breaking-card">
          <img :src="news.image" :alt="news.title" class="breaking-img" loading="lazy" />
          <div class="breaking-overlay"></div>
          <div class="breaking-badge">{{ news.publisher }}</div>
          <div class="breaking-content">
            <h3 class="breaking-title">{{ news.title }}</h3>
            <div class="breaking-meta">
              <span class="meta-item">
                <svg class="meta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                {{ news.comments }}
              </span>
              <span class="meta-item">
                <svg class="meta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {{ news.views }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- ━━━ Recommendations ━━━ -->
    <section class="section-recs">
      <div class="recs-header">
        <h2 class="section-title">Recommendation</h2>
        <button class="see-all-btn">See All</button>
      </div>

      <!-- Category Pills -->
      <div class="pills-scroll">
        <button v-for="category in categories" :key="category" class="pill"
          :class="{ 'pill--active': activeCategory === category }" @click="activeCategory = category">
          {{ category }}
        </button>
      </div>

      <!-- Recommendation Cards -->
      <div class="recs-list">
        <article v-for="item in recommendations" :key="item.id" class="rec-card">
          <div class="rec-thumb">
            <img :src="item.image" :alt="item.title" class="rec-img" loading="lazy" />
          </div>
          <div class="rec-body">
            <span class="rec-time">{{ item.time }}</span>
            <h3 class="rec-title">{{ item.title }}</h3>
            <div class="rec-footer">
              <div class="rec-stats">
                <span class="meta-item meta-item--sm">
                  <svg class="meta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {{ item.comments }}
                </span>
                <span class="meta-item meta-item--sm">
                  <svg class="meta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {{ item.views }}
                </span>
              </div>
              <span class="read-badge">{{ item.readTime }}</span>
            </div>
          </div>
        </article>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* ━━━ Page Container ━━━ */
.home-page {
  /* background: #f5f6f8; */
  min-height: 100vh;
  min-height: 100dvh;
  max-width: 100vw;
  margin: 0 auto;
  padding-bottom: 88px;
  /* room for bottom nav */
}

/* ━━━ Header / Search ━━━ */
.home-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 16px 12px;
  position: sticky;
  top: 0;
  z-index: 30;
  background: linear-gradient(to bottom, #f5f6f8 85%, transparent);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.search-wrapper {
  flex: 1;
  position: relative;
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  color: #9ca3af;
  pointer-events: none;
}

.search-input {
  width: 100%;
  background: #ffffff;
  border: 1.5px solid #eef0f3;
  border-radius: 14px;
  padding: 11px 16px 11px 40px;
  font-size: 13.5px;
  font-weight: 500;
  color: #1f2937;
  outline: none;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.search-input::placeholder {
  color: #b0b5be;
  font-weight: 400;
}

.search-input:focus {
  border-color: #c7cad2;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.04);
}

.notif-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 14px;
  background: #ffffff;
  border: 1.5px solid #eef0f3;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.notif-btn:hover {
  background: #f9fafb;
  border-color: #dde0e5;
}

.notif-icon {
  width: 20px;
  height: 20px;
  color: #4b5563;
}

.notif-dot {
  position: absolute;
  top: 9px;
  right: 10px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #ef4444;
  border: 1.5px solid #ffffff;
}

/* ━━━ Section Title ━━━ */
.section-title {
  font-size: 17px;
  font-weight: 800;
  color: #111827;
  letter-spacing: -0.01em;
  line-height: 1.3;
}

/* ━━━ Top Channels ━━━ */
.section-channels {
  padding: 8px 0 0;
}

.section-channels .section-title {
  padding: 0 16px;
  margin-bottom: 14px;
}

.channels-scroll {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding: 0 16px 8px;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.channels-scroll::-webkit-scrollbar {
  display: none;
}

.channel-chip {
  flex-shrink: 0;
  width: 70px;
  height: 70px;
  border-radius: 18px;
  background: var(--chip-bg);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
}

.channel-chip:hover {
  transform: translateY(-2px) scale(1.04);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
}

.channel-chip:active {
  transform: scale(0.95);
  transition-duration: 0.1s;
}

.channel-name {
  font-size: 11px;
  font-weight: 800;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-align: center;
  line-height: 1.2;
  padding: 4px;
}

/* ━━━ Breaking News ━━━ */
.section-breaking {
  padding: 20px 0 0;
}

.section-breaking .section-title {
  padding: 0 16px;
  margin-bottom: 14px;
}

.breaking-scroll {
  display: flex;
  gap: 14px;
  overflow-x: auto;
  padding: 0 16px 16px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-snap-type: x mandatory;
}

.breaking-scroll::-webkit-scrollbar {
  display: none;
}

.breaking-card {
  position: relative;
  flex-shrink: 0;
  width: 280px;
  height: 175px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  scroll-snap-align: start;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.10);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.breaking-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.16);
}

.breaking-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.breaking-card:hover .breaking-img {
  transform: scale(1.06);
}

.breaking-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top,
      rgba(0, 0, 0, 0.82) 0%,
      rgba(0, 0, 0, 0.35) 45%,
      rgba(0, 0, 0, 0.05) 100%);
  pointer-events: none;
}

.breaking-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.20);
  border-radius: 8px;
  padding: 3px 10px;
  font-size: 10px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.breaking-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
}

.breaking-title {
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.4;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.breaking-meta {
  display: flex;
  align-items: center;
  gap: 14px;
}

.meta-item {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.70);
}

.meta-item--sm {
  font-size: 10.5px;
  color: #9ca3af;
}

.meta-icon {
  width: 13px;
  height: 13px;
  flex-shrink: 0;
}

/* ━━━ Recommendations ━━━ */
.section-recs {
  padding: 8px 16px 0;
}

.recs-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}

.see-all-btn {
  background: none;
  border: none;
  font-size: 13px;
  font-weight: 600;
  color: #6b7280;
  cursor: pointer;
  padding: 4px 0;
  transition: color 0.2s ease;
}

.see-all-btn:hover {
  color: #111827;
}

/* ━━━ Pills ━━━ */
.pills-scroll {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 16px;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.pills-scroll::-webkit-scrollbar {
  display: none;
}

.pill {
  flex-shrink: 0;
  padding: 7px 18px;
  border-radius: 50px;
  font-size: 12.5px;
  font-weight: 600;
  white-space: nowrap;
  border: 1.5px solid #e5e7eb;
  background: #ffffff;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.pill:hover:not(.pill--active) {
  border-color: #c7cad2;
  color: #374151;
  background: #f9fafb;
}

.pill--active {
  background: #1a1a1a;
  color: #ffffff;
  border-color: #1a1a1a;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.18);
}

/* ━━━ Recommendation Cards ━━━ */
.recs-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.rec-card {
  display: flex;
  gap: 14px;
  background: #ffffff;
  padding: 10px;
  border-radius: 18px;
  border: 1.5px solid #f0f1f4;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.rec-card:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.07);
  border-color: #e5e7eb;
}

.rec-card:active {
  transform: scale(0.985);
  transition-duration: 0.1s;
}

.rec-thumb {
  flex-shrink: 0;
  width: 92px;
  height: 92px;
  border-radius: 14px;
  overflow: hidden;
  background: #f3f4f6;
}

.rec-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.rec-card:hover .rec-img {
  transform: scale(1.06);
}

.rec-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2px 4px 2px 0;
  min-width: 0;
}

.rec-time {
  font-size: 10.5px;
  font-weight: 500;
  color: #9ca3af;
  letter-spacing: 0.01em;
}

.rec-title {
  font-size: 13.5px;
  font-weight: 700;
  color: #111827;
  line-height: 1.35;
  margin-top: 3px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.rec-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 6px;
}

.rec-stats {
  display: flex;
  align-items: center;
  gap: 10px;
}

.read-badge {
  font-size: 10px;
  font-weight: 600;
  color: #059669;
  background: #ecfdf5;
  padding: 3px 10px;
  border-radius: 50px;
  letter-spacing: 0.01em;
  white-space: nowrap;
}
</style>