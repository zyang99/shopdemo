<template>
  <div id="details">
    <DetailsNavBar> </DetailsNavBar>
    <DetailSwiper :topImages="topImages"></DetailSwiper>
    <DetailsBaseInfo :goodsInfo="goodsInfo"></DetailsBaseInfo>
    详情页{{ iid }}
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  </div>
</template>

<script>
import DetailsNavBar from "./childComps/DetailsNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailsBaseInfo from "./childComps/DetailsBaseInfo";

import { getDetail, goodsInfo } from "network/details.js";

export default {
  name: "Details",
  components: {
    DetailsNavBar,
    DetailSwiper,
    DetailsBaseInfo,
  },
  data() {
    return {
      iid: 0,
      topImages: [],
      goodsInfo: {},
    };
  },
  created() {
    this.iid = this.$route.params.id;

    this.getDetails();
  },
  methods: {
    getDetails() {
      getDetail(this.iid).then((res) => {
        console.log(res);
        const result = res.data.result;
        this.topImages = result.itemInfo.topImages;
        this.goodsInfo = new goodsInfo(
          result.itemInfo,
          result.columns,
          result.shopInfo.services
        );
      });
    },
  },
};
</script>

<style>
</style>