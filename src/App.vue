<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import SurelyTable from "./components/surely-table.vue";
import virRowTable from "./components/virRowTable.vue";
import drag from "./components/drag.vue";
import testTable from "./components/test-table.vue";
</script>

<template>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <!-- <virRowTable></virRowTable> -->
  <!-- <drag></drag> -->
  <testTable></testTable>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
