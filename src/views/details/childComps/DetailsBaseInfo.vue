<template>
  <div class="base-info">
    <div class="info-title">{{ goodsInfo.title }}</div>
    <div class="info-price">
      <span>{{goodsInfo.newPrice}}</span>
      <span>{{goodsInfo.oldPrice}}</span>
      <span class="discount">{{goodsInfo.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goodsInfo.columns[0]}}</span>
      <span>{{goodsInfo.columns[1]}}</span>
      <span>{{goodsInfo.services[goodsInfo.services.length-1].name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsBaseInfo",
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
</style>