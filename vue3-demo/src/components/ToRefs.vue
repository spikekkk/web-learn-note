<template>
  <div>
    {{name}}
    {{age}}
  </div>
</template>

<script>
import { reactive, ref, toRefs } from '@vue/reactivity'

export default {
  name: 'ToRefs',
  setup() {
    const state = reactive({
      age: 20,
      name: 'xxx'
    })
    const stateAsRefs = toRefs(state) //将响应式对象,变成普通对象
    const { age: ageRef, name: nameRef } = stateAsRefs; // 每个属性都是ref对象
    return {
      nameRef,
      ageRef
    }
    return stateAsRefs
  }
}
</script>