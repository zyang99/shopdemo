<template>
<div class="home-recommend">
  <div class="recommend-item" v-for="item of recommends" :key="item.sort">
    <a :href="item.link">
      <img :src="item.image" alt="">
      {{item.title}}
    </a>
  </div>
</div>
  
</template>

<script>
export default {
 name:'HomeRecommendView',
 props:{
   recommends:{
     type:Array,
     default(){
       return []
     }
   }
 }
}
</script>

<style>
.home-recommend{
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 14px;
  padding: 10px 0 20px;
  border-bottom: 5px solid #eee;
}
.recommend-item{
  flex: 1;
}
.recommend-item img{
  width:100%;
  margin-bottom:6px
}
</style>