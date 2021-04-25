<template>
  <div class="wrapper" ref="wrapper">
    <div class="content" ref="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullup: {
      type: Boolean,
      default: false,
    },
    pulldown: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this._initScroll();
    });
  },
  methods: {
    // 初始化scroll
    _initScroll() {
      this.scroll = new BetterScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: true,
        // scrollX: false,
        observeDOM: true,
        mouseWheel: {},
      });
      // 是否派发滚动事件:由配置项probeType决定
      this.scroll.on("scroll", (position) => {
        // console.log(position);
        this.$emit("contentposition", position);
      });
      // 是否派发滚到底部事件，用于上拉加载
      if (this.pullup) {
        // 监听上拉到底部
        this.scroll.on("scrollEnd", () => {
          if (this.scroll.y <= this.scroll.maxScrollY + 50) {
            this.$emit("pullup");
          }
        });
        // 监听鼠标滚动到底部
        this.scroll.on("mousewheelEnd", () => {
          if (this.scroll.y <= this.scroll.maxScrollY + 50) {
            this.$emit("pullup");
          }
        });
      }
      // 是否派发顶部下拉事件，用于下拉刷新---->有可能数据第一页更新
      if (this.pulldown) {
      }
    },
    scrollTo(x,y,delay){
      this.scroll && this.scroll.scrollTo(x,y,delay);
    },
    // // 回到顶部
    // backTop() {
    //   this.scroll && this.scroll.scrollTo(0, 0, 500);
    // },
    // 代理better-scroll的refresh
    refresh(){
      this.scroll && this.scroll.refresh()
    }
  },
};
</script>

<style>
</style>