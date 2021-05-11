<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
/* 在这里使用flex布局，先要使用一个大盒子将其包裹 */
.nav-bar {
  display: flex;
  height: 44px;
  z-index: 10;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.3);
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>