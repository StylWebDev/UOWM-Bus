<script setup lang="ts">
import {Card} from "../../types.ts";

const props = withDefaults(defineProps<Card>(), {
  color: "bg-neutral-800",
  text: 'text-white',
  borderColor: 'border-white',
  shadow: false,
})
</script>

<template>
<FlexMinified :class="[props.color, props.text, props.borderColor, { 'shadow-lg shadow-neutral-900' : shadow }]"
              class=" rounded-lg rounded-b-xl border"
              :column="true"
              gap-y="2"
>
  <div class="w-[100%]">
    <slot name="img"/>
  </div>
  <h4 class="mx-2 text-xl rainbow font-bold">
    <slot name="title"/>
  </h4>
  <div class="mx-2 opacity-75">
    <slot name="subtitle"/>
  </div>
  <p class="text-sm mx-2">
    <slot name="content"/>
  </p>
  <FlexMinified class="pb-2.5 pt-1" justify="center" gap-x="2">
    <slot name="footer"/>
  </FlexMinified>
</FlexMinified>
</template>

<style scoped>

</style>