<script setup>
import { ref } from "vue";

const wineListImgs = import.meta.glob("@/assets/wineListImgs/*.png");
console.log("🚀 ~ wineListImgs:", wineListImgs);

const wineList = ref([
  { id: 1, name: "初恋", img: wineListImgs["/wineListImgs/1.png"] },
  { id: 2, name: "初恋", img: wineListImgs["/wineListImgs/2.png"] },
  { id: 3, name: "初恋", img: wineListImgs["/wineListImgs/3.png"] },
  { id: 4, name: "初恋", img: wineListImgs["/wineListImgs/4.png"] },
]);
</script>

<template>
  <div class="wine-list-container">
    <div class="wine-list-header">
      <a-carousel arrows>
        <template #prevArrow>
          <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
            <left-circle-outlined />
          </div>
        </template>
        <template #nextArrow>
          <div class="custom-slick-arrow" style="right: 10px">
            <right-circle-outlined />
          </div>
        </template>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </a-carousel>
    </div>
  </div>
</template>
<style scoped>
/* For demo */
:deep(.slick-slide) {
  text-align: center;
  height: 400px;
  line-height: 400px;
  /* background: #364d79; */
  overflow: hidden;
}

:deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  transition: ease all 0.3s;
  opacity: 0.3;
  z-index: 1;
}
:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}
:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #fff;
  opacity: 0.5;
}

:deep(.slick-slide h3) {
  color: #fff;
}
</style>
