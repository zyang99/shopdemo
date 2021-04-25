<template>
  <TabBar>
    <TabBarItem path="/home">
      <template #item-icon>
        <img src="~assets/img/tabbar/zhuye.png" alt="" />
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/zhuye-active.png" alt="" />
      </template>
      <template #item-name>
        <div>首页</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/category">
      <template #item-icon>
        <img src="~assets/img/tabbar/fenlei.png" alt="" />
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/fenlei-active.png" alt="" />
      </template>
      <template #item-name>
        <div>分类</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/shopcar">
      <template #item-icon>
        <img src="~assets/img/tabbar/shopcar.png" alt="" />
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/shopcar-active.png" alt="" />
      </template>
      <template #item-name>
        <div>购物车</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/profile">
      <template #item-icon>
        <img src="~assets/img/tabbar/profile.png" alt="" />
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/profile-active.png" alt="" />
      </template>
      <template #item-name>
        <div>我的</div>
      </template>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>
</style>