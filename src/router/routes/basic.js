const basicRoutes = [];

const LayoutRoute = {
  path: "/",
  name: "layout",
  redirect: "/home",
  meta: {
    title: "首页",
  },
};

const HomeRoute = {
  path: "/home",
  name: "home",
  component: () => import("@/views/home.vue"),
  meta: {
    title: "首页",
  },
  children: [
    {
      path: "/welcome",
      name: "welcome",
      component: () => import("@/components/dropShadow.vue"),
    },
    {
      path: "/dropShadow",
      name: "dropShadow",
      component: () => import("@/components/dropShadow.vue"),
    },
    {
      path: "/badge",
      name: "badge",
      component: () => import("@/components/badgeParent.vue"),
    },
  ],
};

// const LoginRoute = {
//   path: '/login',
//   name: 'login',
//   component: () => import('@/views/login/login.vue'),
//   meta: {
//     title: '登录'
//   }
// }

basicRoutes.push(LayoutRoute, HomeRoute);
console.log("🚀 ~ basicRoutes:", basicRoutes);

export default basicRoutes;
