<template>
 <div>
  <WRate :value="score" color="red"/>
  <WRate :value="score" color="#ccc"/>
 </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import WRate from './components/WRate.vue';
let score = ref(3)
</script>