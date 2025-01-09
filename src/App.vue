<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import SurelyTable from "./components/surely-table.vue";
import virRowTable from "./components/virRowTable.vue";
import drag from "./components/drag.vue";
import testTable from "./components/badgeParent.vue";
import home from "./views/home.vue";
</script>

<template>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <!-- <virRowTable></virRowTable> -->
  <!-- <drag></drag> -->
  <!-- <testTable></testTable> -->
  <!-- <home id="home"></home> -->
  <router-view></router-view>
</template>

<style scoped>
#home {
  height: 100%;
  width: 100%;
}
</style>
