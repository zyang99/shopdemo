
import BackTop from "content/backtop/BackTop.vue";

// home中回到顶部的代码，在detail里面也需要。所以抽取出来使用混入来实现
export const backTopMixin = {
  components: {
    BackTop,
  },
  data() {
    return {
      isbacktopshow: false,
    }
  },
  methods: {
    backtopClick() {
      // 获取组件元素，然后获得组件元素上的方法backTop()
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
  }
}