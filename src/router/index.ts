import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

import MainLayout from "@/layouts/main.layout.vue";

import Slider from "@/views/slider.vue";
import Feed from "@/views/feed.vue";
import Likes from "@/views/likes.vue";
import Questions from "@/views/questions.vue";
import Profile from "@/views/profile.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "feed",
        component: Feed,
      },
      {
        path: "likes",
        name: "likes",
        component: Likes,
      },
      {
        path: "questions",
        name: "questions",
        component: Questions,
      },
      {
        path: "profile",
        name: "profile",
        component: Profile,
      },
    ],
  },
  {
    path: "/slider",
    component: Slider,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
