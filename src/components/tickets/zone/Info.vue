<script setup lang="ts">
import {Icon} from "@iconify/vue";
import {useConfigureStore} from "../../../stores/configure.ts";
const {trans} = useConfigureStore();
</script>

<template>
  <h3 class="px-2.5 mt-5 bg-yellow-200/30 font-semibold border rounded border-orange-300 text-sm self-center animate-pulse capitalize w-fit text-center text-orange-300 max-sm:mx-3"
      :class="trans"
  >
    <Icon icon="line-md:alert-twotone-loop" class="inline size-6"></Icon>
    Οι Φοιτητές Δικαιούνται Μειωμένο Εισητήριο!
  </h3>
</template>

<style scoped>

</style>