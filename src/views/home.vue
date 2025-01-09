<template>
  <div id="home">
    <header class="header">
      <div class="header-content">
        <div class="logo">广告位</div>
        <a-menu
          v-model:selectedKey="selectedKey"
          mode="horizontal"
          theme="dark"
          :items="menus"
          :class="['header-menu']"
          @click="menuClick"
        >
        </a-menu>
      </div>
    </header>
    <main class="main">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>{{
          getSelectedMenuName(selectedKey)
        }}</a-breadcrumb-item>
        <a-breadcrumb-item>{{
          getSelectedMenuName(selectedKey2)
        }}</a-breadcrumb-item>
      </a-breadcrumb>
      <main class="main-content">
        <router-view></router-view>
      </main>
    </main>
    <footer class="footer">广告位</footer>
  </div>
</template>
<script setup>
import { ref, h } from "vue";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
import { useRouter } from "vue-router";

const selectedKey = ref("welcome");
const selectedKey2 = ref("welcome");
const openKeys = ref(["sub1"]);
const router = useRouter();
console.log("🚀 ~ router:", router);
const menus = ref([
  {
    key: "welcome",
    icon: () => h(MailOutlined),
    label: "欢迎使用",
    title: "欢迎使用",
    path: "/welcome",
  },
  {
    key: "dropShadow",
    icon: () => h(AppstoreOutlined),
    label: "dropShadow展示",
    title: "dropShadow展示",
    path: "/dropShadow",
  },
  {
    key: "badge",
    icon: () => h(SettingOutlined),
    label: "徽章",
    title: "徽章",
    path: "/badge",
  },
  {
    key: "sub1",
    icon: () => h(SettingOutlined),
    label: "Navigation Three - Submenu",
    title: "Navigation Three - Submenu",
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    key: "alipay",
    label: h(
      "a",
      {
        href: "https://antdv.com",
        target: "_blank",
      },
      "Navigation Four - Link"
    ),
    title: "Navigation Four - Link",
  },
]);
const menuClick = ({ item, key, keyPath }) => {
  router.push(item.path);
};
const getSelectedMenuName = (key) => {
  const menu = menus.value.find((item) => {
    return item.key === key;
  });
  return menu?.label;
};
</script>
<style scoped lang="scss">
#home {
  display: flex;
  flex-direction: column;
  .header {
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: $header-menu-bg;
    .header-content {
      display: flex;
      align-items: center;
      margin-left: 24px;
      line-height: 64px;
      .logo {
        width: 120px;
        height: 30px;
        background: $main-bg;
        margin-right: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .header-menu {
        line-height: 64px;
      }
    }
  }
  .main {
    flex: 1;
    padding: 0 50px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background: $main-bg;
    .main-content {
      flex: 1;
      width: 100%;
      background: $main-content-bg;
    }
  }
  .footer {
    width: 100%;
    height: 64px;
    background: $main-bg;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
