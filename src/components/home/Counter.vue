<script setup lang="ts">
import AnimatedCounter from "vue-animated-counter"
const counters = ref<{title: string, num: number, subTitle: string}[]>([
  {
    title: 'Με πάνω από',
    num: 18,
    subTitle: 'Δρομολόγια στον Ν.Καστοριάς'
  },
  {
    title: 'Μαζί σας',
    num: 365,
    subTitle: 'Ημέρες τον χρόνο'
  },
  {
    title: 'Με πάνω από',
    num: 14,
    subTitle: 'Ενεργά Λεωφορεία'
  }
])

</script>

<template>
<FlexMinified justify="around" class="bg-eggplant-950/70 py-3 max-md:flex-col">
  <FlexMinified
      column
      items="center"
      justify="center"
      gap-y="2"
      v-for="(item, index) in counters" :key="index"
  >
    <h2 class="text-xl font-semibold">{{item.title}}</h2>
    <AnimatedCounter :value="item.num" :duration="2000" class="text-3xl font-extrabold rainbow" />
    <p class="text-lg text-fuchsia-300"> {{item.subTitle}}</p>
  </FlexMinified>
</FlexMinified>
</template>

<style scoped>

</style>