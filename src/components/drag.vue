<template>
  <div class="multi-drag-container">
    <VueDraggableNext
      :list="items"
      :group="{ name: 'items' }"
      :animation="200"
      ghost-class="ghost-class"
      chosen-class="chosen-class"
      @start="onStart"
      @end="onEnd"
    >
      <div
        v-for="element in items"
        :key="element.id"
        :class="['item', { selected: selectedItems.has(element.id) }]"
        @mousedown="handleMouseDown($event, element.id)"
      >
        {{ element.name }}
      </div>
    </VueDraggableNext>
  </div>
</template>

<script setup>
import { ref, nextTick } from "vue";
import { VueDraggableNext } from "vue-draggable-next";

const items = ref([
  { id: 1, name: "项目1" },
  { id: 2, name: "项目2" },
  { id: 3, name: "项目3" },
  { id: 4, name: "项目4" },
  { id: 5, name: "项目5" },
]);

const selectedItems = ref(new Set());
let dragStartIndex = -1;

const handleMouseDown = (event, id) => {
  if (event.ctrlKey || event.metaKey) {
    if (selectedItems.value.has(id)) {
      selectedItems.value.delete(id);
    } else {
      selectedItems.value.add(id);
    }
  } else {
    selectedItems.value.clear();
    selectedItems.value.add(id);
  }
};
let virtualElement = null;
const onStart = (evt) => {
  dragStartIndex = evt.oldIndex;
  //   if (!selectedItems.value.has(items.value[dragStartIndex].id)) {
  //     selectedItems.value.clear();
  //     selectedItems.value.add(items.value[dragStartIndex].id);
  //   }
  // 创建虚拟元素
  virtualElement = document.createElement("div");
  virtualElement.className = "virtual-drag-element";

  // 添加选中的元素到虚拟元素
  selectedItems.value.forEach((id) => {
    const selectedElement = items.value.find((item) => item.id === id);
    const clone = evt.item.cloneNode(true);
    clone.textContent = selectedElement.name;
    virtualElement.appendChild(clone);
  });

  // 替换原始拖动元素
  evt.item.style.display = "none";
  evt.item.parentNode.insertBefore(virtualElement, evt.item);

  // 更新拖动句柄
  evt.dragged = virtualElement;
  console.log("🚀 ~ onStart ~ selectedItems:", selectedItems);
};

const onEnd = (evt) => {
  nextTick(() => {
    const dragEndIndex = evt.newIndex;
    if (dragStartIndex !== dragEndIndex && selectedItems.value.size > 1) {
      const selectedItemsList = items.value.filter((item) =>
        selectedItems.value.has(item.id)
      );
      const nonSelectedItems = items.value.filter(
        (item) => !selectedItems.value.has(item.id)
      );

      let insertIndex = dragEndIndex;
      if (dragEndIndex > dragStartIndex) {
        insertIndex -= selectedItemsList.length - 1;
      }

      nonSelectedItems.splice(insertIndex, 0, ...selectedItemsList);
      items.value = nonSelectedItems;
    }
  });
};
</script>

<style scoped>
.multi-drag-container {
  width: 300px;
  margin: 0 auto;
}

.item {
  padding: 10px;
  margin: 5px 0;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  cursor: move;
  user-select: none;
}

.item.selected {
  background-color: #e0e0ff;
  border-color: #9090ff;
}

.ghost-class {
  opacity: 0.5;
  background: #c8ebfb;
}

.chosen-class {
  background-color: #e0e0ff;
}
</style>
