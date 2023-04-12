import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "frontend",
    component: () => import("../views/FrontendView.vue"),
    children: [
      {
        path: "",
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
      {
        path: "checkCart",
        component: () => import("../views/frontend/CheckCart.vue"),
      },
      {
        path: "checkInfo",
        component: () => import("../views/frontend/CheckInfo.vue"),
      },
      {
        path: "orderConfirm/:id",
        component: () => import("../views/frontend/OrderConfirm.vue"),
      },
      {
        path: "orderCompleted/:id",
        component: () => import("../views/frontend/OrderCompleted.vue"),
      },
      {
        path: "trials",
        component: () => import("../views/frontend/TrialsView.vue"),
      },
      {
        path: "custom",
        component: () => import("../views/frontend/CustomView.vue"),
      },
      {
        path: "customresult",
        component: () => import("../views/frontend/CustomResultView.vue"),
      },
    ],
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/AdminView.vue"),
    children: [
      {
        path: "",
        component: () => import("../views/admin/ProductsAdmin.vue"),
      },
      {
        path: "orders",
        component: () => import("../views/admin/OrderAdmin.vue"),
      },
      {
        path: "coupon",
        component: () => import("../views/admin/CouponAdmin.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
