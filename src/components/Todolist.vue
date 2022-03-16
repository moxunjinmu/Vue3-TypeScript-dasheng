<template >
  <div>
    <h1>{{mousex}}:{{y}}</h1>
    <input type="text" v-model="val" />
    <button @click="addTodo">添加</button>
    <button @click="clearTodo">清理</button>
    <ul v-if="todos.length">
      <li v-for="(todo,i) in todos" :key="i">
        <input type="checkbox" v-model="todo.done">
        <span :class="{done: todo.done}">{{ todo.title }}</span>
        <span @click="removeTodo(i)">❌</span>
        </li>
    </ul>
    <div v-else>暂无数据</div>
    全选：<input type="checkbox" v-model="allDone" />
    <span>{{active}}/{{all}}</span>
  </div>
</template>
<script lang="ts" setup>
import { computed, Ref, ref } from "vue";
import useMouse from '../composiable/mouse'

let {x:mousex,y} = useMouse()

interface Todo {
  title: string,
  done:boolean
}
// let val = ref<string>("");
let val:Ref = ref('')

let todos = ref<Todo[]>([
  { title: "吃饭", done: true },
  { title: "睡觉", done: false },
  { title: "学习", done: false }
]);

function addTodo() {
  todos.value.push({title: val.value, done: false});
  val.value = "";
}


let active = computed<number>(() =>todos.value.filter(v=>v.done).length)
let all = computed<number>(()=>todos.value.length)
let allDone = computed<boolean>({
  get(){
    return active.value === all.value
  },
  set(value:boolean){
    todos.value.forEach(todo=>{
      todo.done = value
    })
  }
})

function removeTodo(i:number) {
  todos.value.splice(i,1)
}

function clearTodo() {
  // 这里使用reactive时不能直接赋值，因为定义的是proxy代理对象
  todos.value = todos.value.filter(todo=>!todo.done)
}

</script>
<style scoped>
span.done{
  text-decoration: line-through;
  color: rgb(182, 118, 21);
}
</style>