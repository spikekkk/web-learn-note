<template>
  <div>
  ageRef {{ageRef}} 
  <p></p>
  statename  {{state.name}} {{state.age}}
  </div>
</template>
<script>
import { reactive ,ref,toRef} from '@vue/reactivity'
export default {
  name:'ToRef',
  setup() {
    
    const state =reactive({
      name:'kk',
      age:22
    })
    const ageRef=toRef(state,'age')
    setTimeout(() => {
      state.name='rt'
      state.age=25
    }, 1000);
    setTimeout(() => {
      ageRef.value=33434
    }, 2000);
    return {
      state,
      ageRef
    }
  }
}
</script>