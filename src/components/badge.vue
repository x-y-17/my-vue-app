<template>
  <div class="badge-container">
    <div class="badge">
      <div class="image-container" :style="{ '--progress': `${percentage}%` }">
        <slot></slot>
      </div>
    </div>
    <input type="number" v-model="currentValue" :min="0" :max="total" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  total: {
    type: Number,
    default: 100,
  },
});

const currentValue = ref(0);
const percentage = computed(() => (currentValue.value / props.total) * 100);
</script>

<style scoped>
.badge-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  color: white;
  background: linear-gradient(
      to right,
      #e0e0e0 var(--progress),
      transparent var(--progress)
    ),
    linear-gradient(to right, var(--badge-color, #800080) 100%);
  --progress: 0%;
}

input {
  width: 60px;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.image-container {
  position: relative;
}

.image-container::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(224, 224, 224, 0.8);
  -webkit-mask-image: url(https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Crown.png);
  mask-image: url(https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Crown.png);
  -webkit-mask-size: 101% 101%;
  mask-size: 101% 101%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  clip-path: inset(0 0 var(--progress) 0);
  pointer-events: none;
  width: 101%;
  height: 101%;
}

.image-container img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
