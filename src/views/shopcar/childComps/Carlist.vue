<template>
  <div class="carlist">
    <CarlistItem v-for="item of carList" :key="item.iid" :product="item">
    </CarlistItem>
    <CarBottomBar></CarBottomBar>
  </div>
</template>

<script>
import CarlistItem from "./CarlistItem";
import CarBottomBar from "./CarBottomBar";
import { mapGetters } from "vuex";
export default {
  name: "Carlist",
  components: {
    CarlistItem,
    CarBottomBar,
  },
  computed: {
    ...mapGetters(["carList"]),
  },
};
</script>

<style scoped>
</style>