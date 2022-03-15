<template >
  <div>
    <input type="text" v-model="val">
    <button @click="addTodo">添加</button>
    <ul>
      <li v-for="items in todos" >{{items}}</li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue"
 
let val = ref('')
let todos = reactive(['吃饭', '睡觉', '学习vue3'])

function addTodo() {
  todos.push(val.value)
  val.value = ''
}

</script>
<style>
</style>