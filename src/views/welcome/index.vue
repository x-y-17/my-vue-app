<script setup>
import { ref } from "vue";
const value = ref();

// 从左往右匹配，而千分位应该从右往左分组
// 不考虑数字长度，可能会把不完整的组也加上逗号
// 首位处理错误，可能会把最前面的数字分割错误
// 无法处理小数，会把小数部分也进行分组
const myReg = /(\d{3})/g;

const thousandReg = /\B(?=(\d{3})+(?!\d))/g;
const thousand = (value) => {
  return value && value.toString().replace(thousandReg, ",");
};
</script>
<template>
  <div class="welcome">
    <a-descriptions title="欢迎使用">
      <a-descriptions-item label="title">千分位转化</a-descriptions-item>
    </a-descriptions>
    <a-input-number
      class="input-number"
      v-model:value="value"
      :formatter="(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
      :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
    />
    <div>千分位转化结果: {{ thousand(value) }}</div>
  </div>
</template>
<style scoped>
.welcome {
  padding: 20px;
}
.input-number {
  min-width: 200px;
  margin-bottom: 20px;
}
</style>
