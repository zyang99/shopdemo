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
.nav-bar {
  display: flex;
  /* 针对文本内容，有内容才会撑开 */
  line-height: 44px; 
  text-align: center;
  font-size: 20px;
}
.left,
.right {
  width: 60px;
  /* background-color: blue; */
}
.center{
  flex: 1;
}
</style>