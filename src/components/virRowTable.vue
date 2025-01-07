<template>
  <virtual-scroll-table
    :data="tableData"
    :totalColumns="totalCols"
    :columnWidth="150"
    :columns="columns"
  />
</template>

<script>
import VirtualScrollTable from "./VirtualScrollTable.vue";

export default {
  components: {
    VirtualScrollTable,
  },
  setup() {
    const colLength = 1000;
    const generateColumns = (length = 10, prefix = "column-", props) =>
      Array.from({ length }).map((_, columnIndex) => ({
        ...props,
        key: `${prefix}${columnIndex}`,
        dataKey: `${prefix}${columnIndex}`,
        title: `Column ${columnIndex}`,
        width: 150,
      }));

    const generateData = (columns, length = 200, prefix = "row-") =>
      Array.from({ length }).map((_, rowIndex) => {
        return columns.reduce(
          (rowData, column, columnIndex) => {
            rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`;
            return rowData;
          },
          {
            id: `${prefix}${rowIndex}`,
            parentId: null,
          }
        );
      });

    const columns = generateColumns(colLength);
    const data = generateData(columns, 1000);
    return {
      tableData: data,
      totalCols: colLength,
      columns: columns,
    };
  },
};
</script>
