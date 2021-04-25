<template>
  <div class="homeswiper">
    <Swiper>
      <SwiperItem v-for="item in banners" :key="item.index">
        <template>
          <a :href="item.link">
            <img :src="item.image" alt="" @load="imgloaded">
          </a>
        </template>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "common/swiper/index.js";

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    imgloaded(){
      this.$emit('swiperimgloaded')
    }
  }
};
</script>

<style>
</style>