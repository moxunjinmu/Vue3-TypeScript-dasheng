<template >
  <div>
    <input type="text" v-model="val" />
    <button @click="addTodo">添加</button>
    <ul>
      <li v-for="todo in todos">
        <input type="checkbox" v-model="todo.done">
        <span :class="{done: todo.done}">{{ todo.title }}</span>
        </li>
    </ul>
    全选：<input type="checkbox" v-model="allDone">
    <span>{{active}}/{{all}}</span>
  </div>
</template>
<script lang="ts" setup>
import { computed, reactive, Ref, ref } from "vue";
interface Todo {
  title: string,
  done:boolean
}
// let val = ref<string>("");
let val:Ref = ref('')

let todos = reactive<Todo[]>([
  { title: "吃饭", done: true },
  { title: "睡觉", done: false },
  { title: "学习", done: false }
]);

function addTodo() {
  todos.push({title: val.value, done: false});
  val.value = "";
}


let active = computed(() =>todos.filter(v=>v.done).length)
let all = computed(()=>todos.length)
let allDone = computed(() => active.value === all.value)
// 1.你自己定义的变量类型
// 2.宿主环境（浏览器，node）环境下的变量类型，比如window
// 3.第三方框架，可能是1和2的组合
// 4.泛型等类型的推导 熟练使用工具函数Omit Pick Parial
</script>
<style>
span.done{
  text-decoration: line-through;
  color: rgb(182, 118, 21);
}
</style>