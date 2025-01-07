<template>
  <div class="table-container" ref="containerRef" @scroll="onScroll">
    <el-table-v2
      :columns="columns"
      :data="visibleData"
      border
      stripe
      :height="400"
      :width="1000"
      fixed
      v-loading="loading"
    >
      <el-table-column
        key="index"
        label="Index"
        width="60"
        fixed
        :index="(_, scope) => scope.$index"
      ></el-table-column>
      <el-table-column
        v-for="(col, index) in visibleColumns"
        :key="col"
        :label="`Column ${col}`"
        :prop="`col${col}`"
        :width="columnWidth"
      ></el-table-column>
    </el-table-v2>
  </div>
</template>

<script>
import { ref, computed, watch, onMounted, onUnmounted } from "vue";

export default {
  name: "VirtualScrollTable",
  props: {
    data: {
      type: Array,
      required: true,
    },
    totalColumns: {
      type: Number,
      required: true,
    },
    columnWidth: {
      type: Number,
      default: 100,
    },
    columns: {
      type: Array,
    },
  },
  setup(props) {
    const containerRef = ref(null);
    const scrollLeft = ref(0);
    const containerWidth = ref(0);

    const visibleColumnStartIndex = computed(() => {
      console.log(
        "🚀 ~ setup ~ Math.max(0, Math.floor(scrollLeft.value / props.columnWidth)):",
        Math.max(0, Math.floor(scrollLeft.value / props.columnWidth))
      );
      return Math.max(0, Math.floor(scrollLeft.value / props.columnWidth));
    });

    const visibleColumnEndIndex = computed(() => {
      const visibleCount = Math.ceil(containerWidth.value / props.columnWidth);
      return Math.min(
        props.totalColumns,
        visibleColumnStartIndex.value + visibleCount
      );
    });

    const visibleColumns = computed(() =>
      Array.from(
        { length: visibleColumnEndIndex.value - visibleColumnStartIndex.value },
        (_, i) => visibleColumnStartIndex.value + i + 1
      )
    );

    const loading = ref(false);

    const updateContainerDimensions = () => {
      if (containerRef.value) {
        containerWidth.value = containerRef.value.clientWidth;
      }
    };

    const onScroll = () => {
      scrollLeft.value = containerRef.value.scrollLeft;
    };

    onMounted(() => {
      updateContainerDimensions();
      window.addEventListener("resize", updateContainerDimensions);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", updateContainerDimensions);
    });

    watch(
      () => props.data,
      () => {
        loading.value = true;
        setTimeout(() => {
          loading.value = false;
        }, 500);
      },
      () =>
        visibleColumnStartIndex((val) => {
          console.log(val);
        })
    );

    return {
      containerRef,
      visibleData: props.data,
      visibleColumns,
      loading,
      onScroll,
    };
  },
};
</script>

<style scoped>
.table-container {
  white-space: nowrap;
  overflow-x: auto;
}
</style>
