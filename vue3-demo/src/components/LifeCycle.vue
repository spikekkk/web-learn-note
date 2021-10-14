

<template>
  <div>message{{msg}} </div> 
</template>

<script>

import {onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted } from 'vue'
export default {
props:['msg'],

// data(){
//   return {msg: String}
// },
setup() {
  onBeforeMount(()=>{
    console.log('onBeforeMounted',)
  })
  onMounted(()=>{
    console.log('onMounte')
  })
}
}
</script>