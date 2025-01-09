<template>
  <div class="drop-shadow-box">
    <div class="dashed box-shadow"></div>
    <div class="dashed drop-shadow"></div>
  </div>
</template>
<style scoped>
.dashed {
  width: 100px;
  height: 100px;
  border: 10px dashed deepskyblue;
}
.box-shadow {
  box-shadow: 5px 5px 8px;
  margin-bottom: 50px;
}
.drop-shadow {
  filter: drop-shadow(5px 5px 8px);
}
.drop-shadow-box {
  margin: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
