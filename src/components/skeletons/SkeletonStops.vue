<script setup lang="ts">

</script>

<template>
<div class="opacity-70">
  <FlexMinified :column="true" items="center" class="w-full" md-gap-y="2">
    <Transition appear enter-from-class="opacity-0 -translate-y-full" appear-active-class="transition-all duration-700 ease-linear">
      <FlexMinified  :column="true" items="center" class="w-full animate-pulse">
        <h3 class="flex justify-center gap-x-1 items-center text-center font-bold text-3xl text-neutral-100">
          <Icon icon="mdi:bus-stop-covered" class="inline size-12 " />
          <span class="block uppercase">{{($i18n.locale==='el') ? 'Στασεις Λεωφορείων' : 'Bus Stops'}}</span>
        </h3>
        <div class="h-0.5 max-sm:w-[92vw] w-[70vw] text-center rounded-full bg-neutral-100"/>
      </FlexMinified>
    </Transition>

      <div class="max-sm:w-[92vw] w-92 lg:mb-2 animate-pulse">
          <div
                 type="text" id="default-search"
                 class="block w-full p-8 ps-10 text-sm   border  rounded-lg    bg-neutral-100  text-white">
          </div>
      </div>
    <div class="w-full flex flex-col items-center">
      <div class="flex justify-around items-center bg-neutral-100 w-full lg:mb-4 animate-pulse md:w-[80vw] h-[100px] xl:w-[75vw] min-[2000px]:w-[60vw] md:px-10 py-2 md:rounded-lg md:border border-white/40"
           v-for="skeleton in 15"
           :key="skeleton"
      >
        <div class=" p-10 rounded-full bg-neutral-300 animate-pulse"></div>
        <div class="flex flex-col  text-center font-bold text-3xl text-neutral-300">
          <div class="h-2.5 w-28 bg-gray-300 rounded"></div>
          <div class="h-2.5 mt-0.5 w-20 bg-gray-300 rounded"></div>
          <div class="h-2 w-10 mt-2 bg-gray-300 rounded"></div>
          <div class="h-2.5 w-20 mt-1.5 bg-gray-300 rounded"></div>
        </div>
        <div class="flex flex-col items-center gap-y-4 text-center font-bold text-3xl text-neutral-300">
          <div class="h-8 w-24 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  </FlexMinified>
</div>
</template>

<style scoped>

</style>