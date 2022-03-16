import { ref, onMounted, onUnmounted, Ref} from 'vue'
interface MousePoint{
  x: Ref<number>
  y: Ref<number>
}
export default function useMouse():MousePoint {
// 鼠标坐标模块
const x = ref<number>(0)
const y = ref<number>(0)
function update(e:MouseEvent){
  x.value = e.pageX
  y.value = e.pageY
}

onMounted(()=>{
  window.addEventListener('mousemove', update)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', update)
})

return {x,y}
}