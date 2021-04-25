<template>
  <div id="shopcar">
    <NavBar class="shopcar-nav">
      <template #center> 购物车(0) </template>
    </NavBar>
  </div>
</template>

<script>

import NavBar from 'common/navbar/NavBar.vue';

export default {
  name: "ShopCar",
  components:{
    NavBar
  }
};
</script>

<style>
.shopcar-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>