<script setup>
import { ref } from "vue";
import overturnCard from "@/components/overturnCard.vue";

const wineListImgs = import.meta.glob("@/assets/img/wineListImgs/*.jpg", {
  eager: true,
});
console.log("🚀 ~ wineListImgs:", wineListImgs);
console.log(wineListImgs["/src/assets/img/wineListImgs/初恋.jpg"]);
const wineList = ref([
  {
    id: 1,
    name: "初恋",
    img: wineListImgs["/src/assets/img/wineListImgs/初恋.jpg"].default,
    description: {
      name: "初恋",
      alcohol: "10度",
      taste: "甜",
      ingredients: "葡萄",
      price: "100元",
    },
  },
  {
    id: 2,
    name: "贝加尔湖",
    img: wineListImgs["/src/assets/img/wineListImgs/贝加尔湖.jpg"].default,
    description: {
      name: "贝加尔湖",
      alcohol: "10度",
      taste: "甜",
      ingredients: "葡萄",
      price: "100元",
    },
  },
  {
    id: 3,
    name: "冷空气",
    img: wineListImgs["/src/assets/img/wineListImgs/冷空气.jpg"].default,
    description: {
      name: "冷空气",
      alcohol: "10度",
      taste: "甜",
      ingredients: "葡萄",
      price: "100元",
    },
  },
  {
    id: 4,
    name: "日不落",
    img: wineListImgs["/src/assets/img/wineListImgs/日不落.jpg"].default,
    description: {
      name: "日不落",
      alcohol: "10度",
      taste: "甜",
      ingredients: "葡萄",
      price: "100元",
    },
  },
  {
    id: 5,
    name: "圣诞树",
    img: wineListImgs["/src/assets/img/wineListImgs/圣诞树.jpg"].default,
    description: {
      name: "圣诞树",
      alcohol: "10度",
      taste: "甜",
      ingredients: "葡萄",
      price: "100元",
    },
  },
  {
    id: 6,
    name: "天空之境",
    img: wineListImgs["/src/assets/img/wineListImgs/天空之境.jpg"].default,
    description: {
      name: "天空之境",
      alcohol: "10度",
      taste: "甜",
      ingredients: "葡萄",
      price: "100元",
    },
  },
  {
    id: 7,
    name: "永夜星河",
    img: wineListImgs["/src/assets/img/wineListImgs/永夜星河.jpg"].default,
    description: {
      name: "永夜星河",
      alcohol: "10度",
      taste: "甜",
      ingredients: "葡萄",
      price: "100元",
    },
  },
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
      </a-carousel>
    </div>
    <div class="wine-list-content">
      <div
        v-for="item in wineList"
        :key="item.id"
        class="wine-list-item-container"
      >
        <overturnCard :src="item.img" :description="item.description" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.wine-list-container {
  width: 100%;
  height: 100%;
  .wine-list-content {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin-top: 200px;
    justify-content: center;
  }
}

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
