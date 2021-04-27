<template>
  <div id="app">
    <keep-alive exclude="Details">
      <router-view ></router-view>
    </keep-alive>
    <MainTabBar v-show="isShow"></MainTabBar>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar.vue";

export default {
  name: "APP",
  components: { MainTabBar },
  computed:{
    isShow(){
      // console.log(this.$route);
      return this.$route.fullPath.includes('details') ? false:true
    }
  }
};
</script>

<style>
@import "assets/css/base.css";
</style>
