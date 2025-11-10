<script setup lang="ts">

</script>

<template>
  <div class="opacity-70">
    <Transition appear enter-from-class="opacity-0 -translate-y-full" appear-active-class="transition-all duration-700 ease-linear">
      <FlexMinified :column="true" items="center" class="animate-pulse">
        <h3 class="flex justify-center gap-x-1 items-center text-center font-bold text-3xl md:text-4xl text-neutral-300">
          <Icon icon="healthicons:i-schedule-school-date-time" class="size-12 2xl:size-16" />
          <span class="block uppercase">{{($i18n.locale.toString() === 'el') ? "Δρομολόγια" : "Routes"}}</span>
        </h3>
        <div class="h-0.5 w-[70vw] text-center rounded-full bg-neutral-300"/>
      </FlexMinified>
    </Transition>
  </div>
  <GridMinified columns="1" sm-columns="2" md-columns="2" xl-columns="3"
                class="mt-5 items-center justify-items-center animate-pulse">
      <Card
          v-for="area in 6" :key="area"
          color="bg-neutral-800"
          border-color="border-white/35"
          :shadow="true"
          class="card cursor-default h-fit w-[85vw] min-[430px]:w-[75vw] sm:w-[46vw] md:w-[46vw] lg:w-[40vw] xl:w-[45vh] 2xl:w-[25vw]  mt-5"
      >
        <template #img>
          <div class=" rounded-t-lg  size-full h-[40vh] bg-neutral-300 "/>
        </template>
        <template #title>
          <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
        </template>
        <template #subtitle>
          <div class="h-2.5 bg-gray-200 rounded-full w-62 mb-4"></div>
        </template>
        <template #content>
          <div class="h-1.5 bg-gray-200 rounded-full w-80 mb-4"></div>
          <div class="h-1.5 bg-gray-200 rounded-full w-80 mb-4"></div>
          <div class="h-1.5 bg-gray-200 rounded-full w-80 mb-4"></div>
        </template>
        <template #footer>
          <div class="h-5 bg-gray-200 rounded-full w-24 mb-4"></div>
        </template>
      </Card>
  </GridMinified>
</template>

<style scoped>

</style>