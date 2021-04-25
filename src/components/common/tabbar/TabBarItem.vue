<template>
  <div class="tab-bar-item">
    <router-link :to="path" replace custom v-slot="{ href, navigate }">
      <div :href="href" @click="navigate">
        <div v-show="isactive">
          <slot name="item-icon"></slot>
        </div>
        <div v-show="!isactive">
          <slot name="item-icon-active"></slot>
        </div>
        <div :style="activeStyle">
          <slot name="item-name"></slot>
        </div>
      </div>
    </router-link>
    <!-- <img src="../../assets/img/tabbar/zhuye.png" alt="" />
    <div>首页</div> -->
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String,
      default: "/",
    },
    activecolor: {
      type: String,
      default: "#ff8198",
    },
  },
  data() {
    return {
      // isactive: true,
    };
  },
  computed: {
    isactive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isactive ? { color: this.activecolor } : {};
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  height: 25px;
  width: 25px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
/* .active {
  color: rgb(194, 160, 10);
} */
</style>