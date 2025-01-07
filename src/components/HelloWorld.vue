<template>
  <div class="main">
    <svg class="icon" aria-hidden="true" style="color: red">
      <use xlink:href="#icon-dianhua"></use>
    </svg>
    <el-table :data="filterTableData" show-overfLow-tooltip style="width: 100%">
      <el-table-column label="Date" prop="date">
        <template #default="scope">
          <div class="data-info">
            {{ scope.row.date }}
            <div class="info">
              icon:info testicon:info testicon:info testicon:info testicon:info
              testicon:info testicon:info testicon:info testicon:info
              testicon:info testicon:info testicon:info testicon:info
              testicon:info testicon:info testicon:info test
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Name" prop="name" />
      <el-table-column align="right">
        <template #header>
          <el-input
            v-model="search"
            size="small"
            placeholder="Type to search"
          />
        </template>
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
            Edit
          </el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

interface User {
  date: string;
  name: string;
  address: string;
}

const search = ref("");
const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
);
const handleEdit = (index: number, row: User) => {
  console.log(index, row);
};
const handleDelete = (index: number, row: User) => {
  console.log(index, row);
};

const tableData: User[] = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "John",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Morgan",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Jessy",
    address: "No. 189, Grove St, Los Angeles",
  },
];
</script>
<style>
.main {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
}
.data-info {
  margin-bottom: 25px;
}
.info {
  position: absolute;
}
</style>
