<template>
  <div id="home">
    <NavBar class="home-nav">
      <template #center>购物街</template>
    </NavBar>
    <TabControl
        :titles="['流行', '新款', '精选']"
        ref="tabcontrol1"
        class="fixed"
        @tabClick="tabClick"
        v-show="istabcontrolshow"
      ></TabControl>
    <Scroll
      class="home-content"
      ref="scroll"
      :probeType="3"
      @contentposition="contentposition"
      :pullup="true"
      @pullup="loadmore"
    >
      <HomeSwiper :banners="banners" @swiperimgloaded.once="swiperimgloaded">
      </HomeSwiper>
      <HomeRecommendView :recommends="recommends"></HomeRecommendView>
      <HomeFeature></HomeFeature>
      <TabControl
        :titles="['流行', '新款', '精选']"
        ref="tabcontrol2"
        @tabClick="tabClick"
      ></TabControl>
      <GoodsList :goods="showGoods"> </GoodsList>
    </Scroll>
    <BackTop @click.native="backtopClick" v-show="isbacktopshow"></BackTop>
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar.vue";
import Scroll from "common/scroll/Scroll.vue";
import TabControl from "content/tabControl/TabControl.vue";
import GoodsList from "content/goods/GoodsList.vue";

import BackTop from "content/backtop/BackTop.vue";

import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import HomeFeature from "./childComps/HomeFeature";

import { getHomeMultidata, getHomeGoods } from "network/home.js";
// import { debounce } from "@/common/utils.js";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    HomeFeature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isbacktopshow: false,
      taboffsetTop: 0,
      istabcontrolshow: false,
      saveY:0
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  // 保持home的位置状态 在router-view加上 keep-alive
  // 再在这里实现
  activated(){  
    // console.log(this.saveY);
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    // this.$refs.scroll.refresh()
  },
  deactivated(){
    this.saveY = this.$refs.scroll.scroll.y;
    // console.log(this.saveY);
  },
  // 在页面创建就请求数据
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  updated() {
    // 获取组件中元素的offsetTop元素-- 在mounted中可能因为图片没有加载拿到的不准确，所以在updated中获取(最后一次是最后值)
    this.$nextTick(() => {
       this.taboffsetTop = this.$refs.tabcontrol2.$el.offsetTop;
    });
  },
  methods: {
    /**
     * 事件监听
     */
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      // 两个组件的currentIndex点击后不一致--->这就是为什么组件里面的data是一个返回对象的函数
      this.$refs.tabcontrol1.currentIndex = index;
      this.$refs.tabcontrol2.currentIndex = index;
    },
    backtopClick() {
      // 获取组件元素，然后获得组件元素上的方法backTop()
      this.$refs.scroll.scrollTo(0,0,500);
    },
    contentposition(position) {
      // 判断backtop是否显示
      this.isbacktopshow = position.y < -200 
      // 决定tabcontrol是否显示
      this.istabcontrolshow = position.y < -this.taboffsetTop
    },
    loadmore() {
      this.getHomeGoods(this.currentType);
    },
    swiperimgloaded() {
      // 也可以在这里通过子组件加载完成传递事件给父组件来实现，但是这样要知道哪些后加载完
      // 最好还是在父组件的updated里面获取
      // console.log(this.$refs.tabcontrol.$el.offsetTop)
      // this.taboffsetTop = this.$refs.tabcontrol2.$el.offsetTop;
    },
    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then((value) => {
        // console.log(value);
        this.banners = value.data.data.banner.list;
        this.recommends = value.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((value) => {
        // console.log(value.data.data.list);
        this.goods[type].list.push(...value.data.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.refresh();
      });
    },
  },
};
</script>

<style scoped>
/* scoped表示下面样式只在这个组件的作用域内使用，不会因为选择器一样改变其他组件 */
#home {
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
}

.fixed {
  position: relative;
  z-index: 10;
}
.home-content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 10px;
  left: 0;
  right: 0;
}
</style>