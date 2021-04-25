<template>
  <div>
    <h1>{{c}}</h1>
    <h2>store中状态state</h2>
    <button @click="decrement">-点击</button>
    {{ counter }}
    <button @click="increment">+</button>
    <h2>store中getter</h2>
    <h1>{{ powerCounter }}</h1>
    <span v-for="item of more20stu" :key="item.name"
      ><h1>{{ item }}</h1></span>
    <h1>长度--{{ more20stulength }}</h1>
    <h1>大于30岁的---{{more18(30)}}</h1>
    <h2>store中mutation</h2>
    <h2>store中action</h2>
  </div>
</template>

<script>
export default {
  name: "TestVuex",
  data() {
    return {
      c: this.$store.state.counter     //这里不能响应式？
    };
  },
  methods: {
    decrement() {
      // this.$store.commit("decrement");
      this.$store.dispatch('decrement', '我是payload')
    },
    increment() {
      this.$store.commit("increment");
    },
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    powerCounter() {
      return this.$store.getters.powerCounter;
    },
    more20stu() {
      return this.$store.getters.more20student;
    },
    more20stulength(){
      return this.$store.getters.more20studentLength
    },
    more18(){
      return age=>this.$store.getters.moreagestu(age)
    }
  },
};
</script>

<style>
</style>