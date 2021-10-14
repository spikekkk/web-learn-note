<template>
  <div>MousePosition--x{{x}}<p>Y{{y}}</p>
  </div>
</template>
<script >
import { reactive } from 'vue';
import useMousePosition from './useMousePosition'
export default {
  name: 'MousePosition',
  setup() {
    const { x, y } = useMousePosition()
    return {
      x, y
    }
  }
}

</script>
