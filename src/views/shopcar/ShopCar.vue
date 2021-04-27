<template>
  <div id="shopcar">
    <NavBar class="shopcar-nav">
      <template #center> 购物车({{ totalCount }}) </template>
    </NavBar>
    <Carlist> </Carlist>
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar.vue";

import Carlist from "./childComps/Carlist";
// 将store中的getter映射为局部计算属性
import { mapGetters } from "vuex";

export default {
  name: "ShopCar",
  components: {
    NavBar,
    Carlist,
  },
  computed: {
    ...mapGetters(["totalCount"]),
  },
};
</script>

<style>
.shopcar-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>