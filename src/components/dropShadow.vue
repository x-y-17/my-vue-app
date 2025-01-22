<script setup>
import overturnCard from "./overturnCard.vue";
import wineImg from "@/assets/img/wineListImgs/初恋.jpg";
</script>
<template>
  <div class="drop-shadow-box">
    <div class="dashed box-shadow"></div>
    <div class="dashed drop-shadow"></div>
    <!-- 随机生成一个网络上的图片 -->
    <overturnCard :src="wineImg" />
  </div>
</template>
<style scoped>
.dashed {
  width: 100px;
  height: 100px;
  border: 10px dashed deepskyblue;
}
.box-shadow {
  box-shadow: 5px 5px 8px;
  margin-bottom: 50px;
}
.drop-shadow {
  filter: drop-shadow(5px 5px 8px);
  margin-bottom: 200px;
}
.drop-shadow-box {
  margin: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
