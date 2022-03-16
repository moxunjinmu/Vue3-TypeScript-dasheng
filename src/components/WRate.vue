
<template>
  <!-- <div>
    <h2 :style="{color: color}">{{score}}</h2>
  </div> -->
  <div :style="{ color: color }">
    <div class="rate">
      <span v-for="num in 5" :key="num">☆</span>
      <span class="hollow" :style="starWidth">
        <span v-for="num in 5" :key="num">★</span>
      </span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";

let props = defineProps<{
  value: number;
  color: string;
}>();

let score = computed(() => {
  // slice选取从开始到结尾返回一个数组
  return "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value);
});
let color = computed(() => props.color);
let starWidth = computed(() => `width:${props.value}em;`)
</script>
<style scoped>

.rate {
  position: relative;
  display: inline-block;
}
.rate > .hollow {
  position: absolute;
  display: inline-block;
  left: 0;
  top: 0;
  /* width: 1em; */
  overflow: hidden;
}
</style>
