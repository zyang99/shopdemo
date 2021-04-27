<template>
  <div class="bottombar">
    <CheckButton
      class="select-all"
      @click.native="clickAll"
      :isChecked="isShowAll"
    ></CheckButton>
    <span>全选</span>
    <span class="total-price">合计: ¥{{ $store.getters.totalPrice }}</span>
    <span class="buy-product">去计算({{ $store.getters.checkedCount }})</span>
  </div>
</template>

<script>
import CheckButton from "common/checkbutton/CheckButton.vue";

export default {
  name: "CarBottomBar",
  components: {
    CheckButton,
  },
  computed: {
    // 在这里计算和在getters里面拿是一样的
    totalPrice() {
      const carList = this.$store.getters.carList;
      return carList
        .filter((item) => {
          return item.checked;
        })
        .reduce((pre, n) => {
          return pre + n.price * n.count;
        }, 0)
        .toFixed(2);
    },
    // 是否显示全选按钮
    isShowAll() {
      if (this.$store.state.carList.length === 0) {
        return false;
      }
      // every判断数组是否左右元素都满足条件
      return this.$store.state.carList.every((item) => item.checked === true);
    },
  },
  methods: {

    // 注意：对store中状态进行更新的操作应该封装到mutation中去做。不应该在这里直接使用
    clickAll() {
      // 所有都选中返回true， 有一个没有选中返回false
      let isSelectAll = this.$store.state.carList.every(
        (item) => item.checked === true
      );
      if (isSelectAll) {
        this.$store.state.carList.forEach((item) => {
          item.checked = false;
        });
      } else {
        this.$store.state.carList.forEach((item) => {
          item.checked = true;
        });
      }
    },
  },
};
</script>

<style scoped>
.bottombar {
  width: 100%;
  height: 44px;
  background-color: #eee;
  position: fixed;
  bottom: 49px;
  left: 0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  color: #888;
  line-height: 44px;
  padding-left: 35px;
  box-sizing: border-box;
  display: flex;
}
.bottombar .select-all {
  position: absolute;
  line-height: 0;
  left: 12px;
  top: 13px;
}

.bottombar .total-price {
  font-size: 16px;
  color: #666;
  flex: 1;
  text-align: center;
}

.bottombar .buy-product {
  background-color: orangered;
  color: #fff;
  width: 100px;
  height: 44px;
  text-align: center;
  line-height: 44px;
}
</style>