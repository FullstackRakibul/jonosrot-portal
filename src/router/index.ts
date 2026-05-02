import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue"
import About from "@/views/About.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/reels",
      name: "Reels",
      component: () => import("@/views/Reels.vue"),
    },
    {
      path: "/notifications",
      name: "Notifications",
      component: () => import("@/views/Notifications.vue"),
    },
    {
      path: "/social",
      name: "Social",
      component: () => import("@/views/Social.vue"),
    },
    {
      path: "/profile",
      name: "Profile",
      component: () => import("@/views/Profile.vue"),
    },
  ],
})

export default router
