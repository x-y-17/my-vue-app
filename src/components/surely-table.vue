<template>
  <s-table
    :columns="columns"
    :scroll="{ y: 400, x: 500 }"
    scrollX
    :pagination="false"
    :data-source="dataSource"
  ></s-table>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

interface DataItem {
  key: number;
  name: string;
  age: number;
  address: string;
}

export default defineComponent({
  setup() {
    const columns = [
      {
        title: "Full Name",
        dataIndex: "name",
        width: 150,
      },
      {
        title: "Age",
        dataIndex: "age",
        width: 150,
      },
      {
        title: "Column 1",
        dataIndex: "address",
        width: 150,
      },
      {
        title: "Column 2",
        dataIndex: "address",
        width: 150,
      },
      {
        title: "Column 3",
        dataIndex: "address",
        width: 150,
      },
      {
        title: "Column 4",
        dataIndex: "address",
        width: 150,
      },
      { title: "Column 5", dataIndex: "address", width: 150 },
    ];
    for (let i = 0; i < 100000; i++) {
      columns.push({
        title: "Column" + i,
        dataIndex: "address",
        width: 150,
      });
    }
    const data: DataItem[] = [];
    for (let i = 0; i < 100000; i++) {
      data.push({
        key: i,
        name: `Edrward ${i}`,
        age: i + 1,
        address: `London Park no. ${i}`,
      });
    }
    return {
      dataSource: ref(data),
      columns: ref(columns),
    };
  },
});
</script>
