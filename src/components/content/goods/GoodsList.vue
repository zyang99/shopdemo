<template>
  <div class="goodslist">
    <!-- {{ goods }} -->
    <GoodsListItem v-for="item in goods" :key="item.index" :goodsItem="item">
    </GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.goodslist{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  /* tabbar的高度 */
  padding-bottom: 50px;
}

</style>