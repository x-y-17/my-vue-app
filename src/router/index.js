import { createRouter, createWebHistory } from "vue-router";
import basicRoutes from "./routes/basic.js";
// import analysisRoutes from "./routes/modules/analysis.js";
// import dataManageRoutes from "./routes/modules/dataManage.js";
// 白名单应该包含基本静态路由
const WHITE_NAME_LIST = [];

const routes = [];
routes.push(...basicRoutes);
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

// 重置路由
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route;
    if (name && !WHITE_NAME_LIST.includes(name)) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}

export default router;
