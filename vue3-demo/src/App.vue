
<template>
  <ToRef></ToRef>
  <div>
    numberRef {{numberRef}}
  </div>
  <div>age:{{age}}</div>
</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
import HelloWorld from './components/LifeCycle.vue';
import Ref from './components/Ref.vue'
import ToRef from './components/toRef.vue'
import MousePosition from './components/MousePosition/index.vue'

import { watch, watchEffect, toRefs, ref, reactive } from 'vue'
export default {
  components: {
    Ref,
  },
  setup() {
    const numberRef = ref(100)
    const state = reactive({
      name: 'kk',
      age: 20
    })
    watchEffect(() => {

      console.log('state.age', state.age)
    })
    setTimeout(() => {
      state.age = 110
    }, 2000)
    watchEffect(() => {
      console.log('state.name', state.name)
    })
    setTimeout(() => {
      state.name = 'xxxx'
    }, 2000)

    // 监听多个属性--初始化就加载
    watchEffect(() => {
      console.log('state.name-d', state.name)
      console.log('state.age-d', state.age)
    })


    watch(numberRef, (newNumber, oldNumber) => {
      console.log('ref', newNumber, oldNumber)
    })
    setTimeout(() => {
      numberRef.value = 200
    }, 1000)
    return {
      numberRef,
      ...toRefs(state)
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
