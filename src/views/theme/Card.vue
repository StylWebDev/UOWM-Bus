<script setup lang="ts">
import FlexMinified from "../../components/FlexMinified.vue";
interface Props {
  color?: string;
  text?: string;
}

const props = withDefaults(defineProps<Props>(), {
  color: "bg-neutral-800",
  text: 'text-white'
})
</script>

<template>
<FlexMinified :class="[props.color, props.text]"
              class=" rounded-lg rounded-b-xl"
              :column="true"
              gap-y="2"
>
  <div class="w-[100%]">
    <slot name="img"/>
  </div>
  <h4 class="ml-2 text-xl rainbow font-bold">
    <slot name="title"/>
  </h4>
  <div class="ml-2 opacity-75">
    <slot name="subtitle"/>
  </div>
  <p class="text-sm ml-2">
    <slot name="content"/>
  </p>
  <FlexMinified class="pb-2.5 pt-1" justify="center" gap-x="2">
    <slot name="footer"/>
  </FlexMinified>
</FlexMinified>
</template>

<style scoped>

</style>