import { ref, onMounted, onUnmounted } from "vue"

const useMousePosition = () => {
    const x = ref(0)
    const y = ref(0)

    onMounted(() => {
        console.log("onPosition")
    })
    return {
        x,
        y,
    }
}
export default useMousePosition
