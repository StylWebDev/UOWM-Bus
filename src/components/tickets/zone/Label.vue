<script setup lang="ts">
import {Icon} from "@iconify/vue";

defineProps<{
  label: string,
  index: number
}>()
</script>

<template>
  <h4 class=" text-center text-3xl font-extrabold"
      :class="(index===0) ? `text-blue-500` : `text-red-500`"
  >
    <Icon :icon="(index === 0) ? `mynaui:letter-a-waves-solid` : `mynaui:letter-b-waves-solid`" class="inline size-10"/>
    {{label}}
  </h4>

  <div class="self-center h-0.5 w-80"
       :class="(index===0) ? `bg-blue-500` : `bg-red-500`"
  />
</template>