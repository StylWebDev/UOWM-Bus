<script setup lang="ts">
import AnimatedCounter from "vue-animated-counter"

const counters = ref<number[]>([18, 365, 14])

</script>

<template>
<FlexMinified justify="around" class="bg-eggplant-950/70 py-3 max-md:flex-col">
  <FlexMinified
      column
      items="center"
      justify="center"
      gap-y="2"
      v-for="(counter, index) in counters" :key="index"
  >
    <h2 class="text-xl font-semibold">{{$t(`home.counter.c${index}.title`)}}</h2>
    <AnimatedCounter :value="counter" :duration="2000" class="text-3xl font-extrabold rainbow" />
    <p class="text-lg text-fuchsia-300"> {{$t(`home.counter.c${index}.subTitle`)}}</p>
  </FlexMinified>
</FlexMinified>
</template>

<style scoped>

</style>