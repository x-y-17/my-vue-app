<script setup>
import { ref } from "vue";

const { src } = defineProps({
  src: {
    type: String,
    required: true,
  },
  description: {
    type: Object,
    default: () => ({}),
  },
});
const isFront = ref(true);
const overturn = () => {
  isFront.value = !isFront.value;
};
</script>

<template>
  <div class="overturn-card" @click="overturn">
    <div class="overturn-card-front" :class="{ hide: !isFront }">
      <img :src="src" alt="" />
    </div>
    <div class="overturn-card-back" :class="{ hide: !isFront }">
      <a-descriptions title="基本信息">
        <a-descriptions-item label="名称"> abc </a-descriptions-item>
        <a-descriptions-item v-if="description.name" label="名称">
          {{ description.name }}
        </a-descriptions-item>
        <a-descriptions-item v-if="description.alcohol" label="酒精度">
          {{ description.alcohol }}
        </a-descriptions-item>
        <a-descriptions-item v-if="description.taste" label="口味">
          {{ description.taste }}
        </a-descriptions-item>
        <a-descriptions-item v-if="description.ingredients" label="原料">
          {{ description.ingredients }}
        </a-descriptions-item>
        <a-descriptions-item v-if="description.price" label="价格">
          {{ description.price }}
        </a-descriptions-item>
      </a-descriptions>
    </div>
  </div>
</template>
<style scoped>
.overturn-card {
  width: 300px;
  height: 400px;
  perspective: 1000px;
}

.overturn-card-front,
.overturn-card-back {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden; /* 隐藏背面 */
  transition: transform 0.5s;
  transform-style: preserve-3d; /* 保持3D效果 */
  background-color: aquamarine;
  img {
    width: 100%;
    height: 100%;
  }
}
.overturn-card-front {
  transform: rotateY(0deg);
  visibility: visible;
}

.overturn-card-back {
  transform: rotateY(180deg); /* 初始状态下背面朝向背后 */
  visibility: visible; /* 初始状态下隐藏背面 */
}

/* 翻转时的状态 */
.overturn-card-front.hide {
  transform: rotateY(270deg);
  visibility: hidden;
}

.overturn-card-back.hide {
  transform: rotateY(360deg);
  visibility: visible; /* 翻转时显示背面 */
}
</style>
