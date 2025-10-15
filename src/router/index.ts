import { createRouter, createWebHistory, type RouteRecordRaw, useRouter } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: "",
    name: "index",
    component: () => import("@/layouts/DefaultLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/pages/HomeView.vue")
      },
      {
        path: "community",
        name: "community",
        component: () => import("@/pages/CommunityView.vue")
      },
      {
        path: "discover",
        name: "discover",
        component: () => import("@/pages/DiscoverView.vue")
      },
      {
        path: "message",
        name: "message",
        component: () => import("@/pages/MessageView.vue")
      },
      {
        path: "article/:id",
        name: "article",
        component:() => import("@/pages/ArticleView.vue")
      },
      {
        path: "/user-agreement",
        name: "user-agreement",
        component: () => import("@/pages/UserAgreementView.vue")
      },
      {
        path: "/privacy-policy",
        name: "privacy-policy",
        component: () => import("@/pages/PrivacyPolicyView.vue")
      }
    ]
  },
  {
    path: "/user",
    name: "user",
    component: () => import("@/layouts/DefaultLayout.vue"),
    children: [
      {
        path: "sign-in",
        name: "sign-in",
        component: () => import("@/pages/SigninView.vue")
      },
      {
        path: "sign-up",
        name: "sign-up",
        component: () => import("@/pages/SignupView.vue")
      },
      {
        path: "profile",
        name: "profile",
        component: () => import("@/pages/ProfileView.vue")
      },
      {
        path: "settings",
        name: "settings",
        component: () => import("@/pages/SettingView.vue")
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export const goTo = (name: string) => {
  // const route = useRouter()
  // return route.push({
  return router.push({
    name,
  })
}

export default router
