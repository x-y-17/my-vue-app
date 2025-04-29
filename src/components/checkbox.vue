<template>
  <div
    class="demo-button-style"
    v-for="(item, index) in businessTime"
    :key="index"
  >
    <el-checkbox-group v-model="item.weeks" size="small">
      <el-checkbox-button
        v-for="time in times"
        :key="time.value"
        :value="time.value"
        :disabled="isDisabled(index, time)"
      >
        {{ time.label }}
      </el-checkbox-button>
    </el-checkbox-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const businessTime = ref([
  {
    weeks: [2, 1, 3],
    hours: [
      {
        start_time: "08:45",
        end_time: "10:00",
      },
      {
        start_time: "10:00",
        end_time: "10:15",
      },
    ],
  },
  {
    weeks: [7, 6, 5],
    hours: [
      {
        start_time: "09:15",
        end_time: "10:15",
      },
    ],
  },
]);
const times = [
  { label: "周一", value: 1 },
  { label: "周二", value: 2 },
  { label: "周三", value: 3 },
  { label: "周四", value: 4 },
  { label: "周五", value: 5 },
  { label: "周六", value: 6 },
  { label: "周日", value: 7 },
];
const isDisabled = (timeIndex, time) => {
  // 判断week是否在businessTime的其他item的week中
  const otherItem = businessTime.value.filter(
    (item, index) => index !== timeIndex
  );
  return otherItem.some((item) => item.weeks.includes(time.value));
};
</script>

<style scoped>
.demo-button-style {
  margin-top: 24px;
}
</style>
