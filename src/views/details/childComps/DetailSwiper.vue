<template>
<div class="detailswiper">
  <Swiper class="detailswiper">
      <SwiperItem v-for="item in topImages" :key="item.index">
        <template>
            <img :src="item" alt=""> 
        </template>
      </SwiperItem>
    </Swiper>
</div>
</template>

<script>
import { Swiper, SwiperItem } from "common/swiper/index.js";

export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  }
};
</script>

<style scoped>
.detailswiper{
  height:300px
}
.detailswiper img{
  height: 100%;
  width: 100%;
}
</style>