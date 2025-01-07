import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/my-vue-app/",
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, //开启less编译，注意：这个很重要
      },
    },
  },
  server: {
    port: 8080,
  },
});
