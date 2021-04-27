<template>
  <div class="detail-recommends">
    <div class="info-header">
      <div class="header-title">猜你喜欢</div>
    </div>
      <GoodsList :goods="recommendsInfo" class="goodslist">
      </GoodsList>
  </div>
</template>

<script>
import GoodsList from "content/goods/GoodsList.vue";

export default {
  name: "DetailsRecommends",
  props: {
    recommendsInfo: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodsList,
  },
};
</script>

<style scoped>
.info-header {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-left: 10px;
}
.header-title {
  float: left;
  font-size: 18px;
}
.goodslist{
  margin-top: 10px;
}
</style>