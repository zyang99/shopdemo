<template>
  <div class="tabcontrol">
    <div
      class="tabcontrol-item"
      :class="{ active: index === currentIndex }"
      @click="tabclick(index)"
      v-for="(item, index) in titles"
      :key="item"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods:{
    tabclick(index){
      this.currentIndex = index;
      this.$emit('tabClick',index);
    }
  }
};
</script>

<style>
.tabcontrol {
  display: flex;
  text-align: center;
  background-color: #fff;
}
.tabcontrol-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.tabcontrol-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-high-text);
}
</style>