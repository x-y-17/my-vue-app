import { createApp } from "vue";
import "./style.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import "./assets/fonts/iconfont";
import STable from "@surely-vue/table";
import "@surely-vue/table/dist/index.less";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
const app = createApp(App);
app.use(Antd);
app.use(ElementPlus);
app.config.globalProperties.$ELEMENT = {
  table: {
    showOverflowTooltip: true,
  },
};
app.use(STable);
app.mount("#app");
