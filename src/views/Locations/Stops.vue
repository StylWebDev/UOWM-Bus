<script setup lang="ts">

import LocationsFlex from "../../components/LocationsFlex.vue";
import {Icon} from "@iconify/vue";
import FlexMinified from "../../components/FlexMinified.vue";
</script>

<template>
  <FlexMinified :column="true" items="center" gap-y="4" class="lg:gap-y-3 max-md:bg-eggplant-950">
    <Transition appear enter-from-class="opacity-0 -translate-y-full" appear-active-class="transition-all duration-700 ease-linear">
      <FlexMinified  :column="true" items="center">
        <h3 class="flex justify-center gap-x-1 items-center text-center font-bold text-3xl rainbow">
          <Icon icon="mdi:bus-stop-covered" class="inline size-12 " />
          <span class="block uppercase">{{($i18n.locale==='el') ? 'Στασεις Λεωγορείων' : 'Bus Stops'}}</span>
        </h3>
        <div class="h-0.5 max-sm:w-[80%] w-[70vw] text-center rounded-full bg-rainbow"/>
      </FlexMinified>
    </Transition>

    <Transition appear enter-from-class="opacity-0 scale-50" appear-active-class="transition-all duration-700 ease-linear">
      <LocationsFlex/>
    </Transition>
  </FlexMinified>
</template>

<style scoped>

</style>