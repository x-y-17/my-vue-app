<script setup>
import { ref } from "vue";
const value = ref();
const timeValue = ref();

// 从左往右匹配，而千分位应该从右往左分组
// 不考虑数字长度，可能会把不完整的组也加上逗号
// 首位处理错误，可能会把最前面的数字分割错误
// 无法处理小数，会把小数部分也进行分组
const myReg = /(\d{3})/g;

const thousandReg = /\B(?=(\d{3})+(?!\d))/g;
const thousand = (value) => {
  return value && value.toString().replace(thousandReg, ",");
};

// 时间转换函数：将 小时:分钟:秒:毫秒:微秒:纳秒 格式转换为秒
const convertTimeToSeconds = (time) => {
  if (!time) return 0;

  const parts = time.split(":");
  let seconds = 0;

  // 处理小时、分钟、秒
  if (parts.length > 0) seconds += parseInt(parts[0] || 0) * 3600; // 小时
  if (parts.length > 1) seconds += parseInt(parts[1] || 0) * 60; // 分钟
  if (parts.length > 2) seconds += parseInt(parts[2] || 0); // 秒

  // 处理毫秒、微秒、纳秒
  if (parts.length > 3) seconds += parseInt(parts[3] || 0) / 1000; // 毫秒
  if (parts.length > 4) seconds += parseInt(parts[4] || 0) / 1000000; // 微秒
  if (parts.length > 5) seconds += parseInt(parts[5] || 0) / 1000000000; // 纳秒

  return seconds;
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
    <div class="title">时分秒转换（格式：小时:分钟:秒:毫秒:微秒:纳秒）</div>
    <a-input
      class="input-number"
      v-model:value="timeValue"
      placeholder="例如：00:01:12:123:456:789"
    />
    <div>转换结果: {{ convertTimeToSeconds(timeValue) }} 秒</div>
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
.title {
  margin-top: 10px;
}
</style>
