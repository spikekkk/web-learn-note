<template>
  <p>ref age{{ageRef}}</p>
  <p>name {{state.name}}</p>
  <div ref='divRef'>ref template</div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, onMounted } from 'vue'

export default defineComponent({
  name: 'Ref',
  emits: ['onSayHello'],

  setup(props, { emit }) {
    emit('onSayHello', 'vue3')
    const ageRef = ref(20) // 值类型响应式
    const nameRef = ref('kk')
    const divRef = ref()
    const state = reactive({
      name: nameRef
    })

    setTimeout(() => {
      ageRef.value = 21 //.value修改age值
      nameRef.value = 'xx'
    }, 1500);
    onMounted(() => {
      console.log('divRef', divRef.value)
    });
    return {
      ageRef,
      state,
      divRef
    }
  },
})
</script>
