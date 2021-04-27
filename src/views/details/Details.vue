<template>
  <div id="details">
    <DetailsNavBar
      class="detail-nav"
      @detailtabclick="detailtabclick"
      ref="detailNav"
      :currentIndex="detailcurrentIndex"
    >
    </DetailsNavBar>
    <Scroll
      class="detail-content"
      ref="scroll"
      :probeType="3"
      @contentposition="contentScroll"
    >
      <DetailSwiper :topImages="topImages"></DetailSwiper>
      <DetailsBaseInfo :goodsInfo="goodsInfo"></DetailsBaseInfo>
      <DetailsShopInfo :shopInfo="shopInfo"></DetailsShopInfo>
      <DetailsInfo
        :detailInfo="detailInfo"
        @imageLoad="imageLoad"
      ></DetailsInfo>
      <DetailsParam
        :goodsParam="goodsParam"
        ref="params"
        class="detailsparam"
      ></DetailsParam>
      <DetailsComment
        :commentInfo="commontInfo"
        ref="comment"
        class="detailscomment"
      ></DetailsComment>
      <DetailsRecommends
        :recommendsInfo="recommends"
        ref="recommend"
        class="recommends"
      ></DetailsRecommends>
    </Scroll>
    <BackTop @click.native="backtopClick" v-show="isbacktopshow"></BackTop>
    <DetailsBottomBar @addcar="addToCar"></DetailsBottomBar>
    <!-- 详情页{{ iid }} -->
  </div>
</template>

<script>
import DetailsNavBar from "./childComps/DetailsNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailsBaseInfo from "./childComps/DetailsBaseInfo";
import DetailsShopInfo from "./childComps/DetailsShopInfo";
import DetailsInfo from "./childComps/DetailsInfo";
import DetailsParam from "./childComps/DetailsParam";
import DetailsComment from "./childComps/DetailsComment";
import DetailsRecommends from "./childComps/DetailsRecommends";
import DetailsBottomBar from "./childComps/DetailsBottomBar";

import Scroll from "common/scroll/Scroll.vue";
import { debounce } from "@/common/utils.js";
import {
  getDetail,
  goodsInfo,
  shopInfo,
  goodsParam,
  getRecommend,
} from "network/details.js";

import { backTopMixin } from "@/common/mixin.js";

export default {
  name: "Details",
  components: {
    DetailsNavBar,
    Scroll,
    DetailSwiper,
    DetailsBaseInfo,
    DetailsShopInfo,
    DetailsInfo,
    DetailsParam,
    DetailsComment,
    DetailsRecommends,
    DetailsBottomBar,
  },
  // 使用混入实现回到顶部
  mixins: [backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {},
      isShowdetailImg: false,
      goodsParam: {},
      commontInfo: {},
      recommends: [],
      themeTopYs: [0, 0, 0, 0],
      getthemeTopYs: null,
      detailcurrentIndex: 0,
    };
  },
  created() {
    this.iid = this.$route.params.id;
    this.getDetails();
    this.getthemeTopYs = debounce(() => {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
    });
  },
  methods: {
    /**
     * 事件监听
     */
    imageLoad() {
      // console.log(this.$refs.scroll.refresh);
      this.$refs.scroll.refresh();
      this.getthemeTopYs();
    },
    detailtabclick(index) {
      // console.log("details里面监听到了",index);
      switch (index) {
        case 0:
          this.$refs.scroll.scrollTo(0, 0, 500);
          break;
        case 1:
          this.$refs.scroll.scroll.scrollToElement(".detailsparam", 500, 0, 0);
          break;
        case 2:
          this.$refs.scroll.scroll.scrollToElement(
            ".detailscomment",
            500,
            0,
            0
          );
          break;
        case 3:
          this.$refs.scroll.scroll.scrollToElement(".recommends", 500, 0, 0);
          break;
      }
    },
    contentScroll(position) {
      // console.log(this.themeTopYs);
      const positionY = -position.y;
      this.isbacktopshow = position.y < -200;
      // console.log(positionY);
      length = this.themeTopYs.length;
      for (let i = 0; i < length; i++) {
        if (
          // 这里条件的顺序有重大影响
          this.detailcurrentIndex !== i &&
          ((i < length - 1 &&
            positionY >= this.themeTopYs[i] &&
            positionY < this.themeTopYs[i + 1]) ||
            (i === length - 1 && positionY >= this.themeTopYs[i]))
        ) {
          this.detailcurrentIndex = i;
          console.log(this.detailcurrentIndex);
          // 如果是这样将值传递过去，子组件中currentIndex需要定义在data或者computed中才行
          // this.$refs.detailNav.currentIndex = this.detailcurrentIndex
        }
      }
    },
    addToCar(){
      // 获取购物车商品展示信息
      console.log("添加购物车");
      const product = {}
      product.image = this.topImages[0];
      product.title= this.goodsInfo.title;
      product.desc = this.goodsInfo.desc;
      product.price = this.goodsInfo.realPrice;
      product.iid = this.iid;
      // 将商品调价到store中
      this.$store.dispatch('addcar',product);
    },
    /**
     * 网络请求
     */
    getDetails() {
      // 请求详情数据
      getDetail(this.iid).then((res) => {
        // console.log(res);
        const result = res.data.result;
        // 顶部轮播图
        this.topImages = result.itemInfo.topImages;
        // 基本信息
        this.goodsInfo = new goodsInfo(
          result.itemInfo,
          result.columns,
          result.shopInfo.services
        );
        // 商家信息
        this.shopInfo = new shopInfo(result.shopInfo);
        // 商品细节图
        this.detailInfo = result.detailInfo;
        // 商品参数
        this.goodsParam = new goodsParam(
          result.itemParams.info,
          result.itemParams.rule
        );
        // 评论信息
        if (result.rate.cRate !== 0) {
          this.commontInfo = result.rate.list[0];
        }
        // console.log(this.goodsInfo);
      });
      // 请求推荐数据
      getRecommend().then((res) => {
        // console.log(res);
        this.recommends = res.data.data.list;
        // console.log(this.recommends);
      });
    },
  },
};
</script>

<style>
#details {
  position: relative;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  top: 0;
  z-index: 9;
  background-color: #fff;
}
.detail-content {
  position: absolute;
  top: 49px;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>