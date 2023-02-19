import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "/",
      component: () => import("../views/FrontendView.vue"),
      children: [
        {
          path: "/",
          component: () => import("../views/frontend/HomeView.vue"),
        },
        {
          path: "productlist",
          component: () => import("../views/frontend/ProductsView.vue"),
        },
        {
          path: "product/:id",
          component: () => import("../views/frontend/ProductView.vue"),
        },
        {
          path: "login",
          component: () => import("../views/frontend/LoginView.vue"),
        },
      ],
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/AdminView.vue"),
      children: [
        {
          path: "products",
          component: () => import("../views/admin/ProductsAdmin.vue"),
        },
        {
          path: "orders",
          component: () => import("../views/admin/OrderAdmin.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
