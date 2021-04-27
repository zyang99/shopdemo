<template>
  <div class="detailsnavbar">
    <NavBar>
      <template #left>
        <div class="back" @click="click">
          <img src="~assets/img/common/back.svg" alt="" />
        </div>
      </template>
      <template #center>
        <TabControl
          :titles="['商品', '参数', '评论', '推荐']"
          class="detailsTabControl"
          @tabClick="tabclick"
          :chooseindex="currentIndex"
        ></TabControl>
      </template>
      <template #right>
        <img src="~assets/img/cart/tick.svg" alt="" />
      </template>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar.vue";
import TabControl from "content/tabControl/TabControl.vue";
export default {
  name: "DetailsNavBar",
  components: {
    NavBar,
    TabControl,
  },
  props:{
    currentIndex:{
      type:Number,
      default: 0
    }
  },
  methods:{
    click(){
      this.$router.push('/home')
    },
    tabclick(index){
      // console.log('navbar里点击',index);
      this.$emit('detailtabclick',index)
    }
  }
};
</script>

<style scoped>
.detailsTabControl {
  font-size: 14px;
}
.back img {
  margin-top: 12px;
}
</style>