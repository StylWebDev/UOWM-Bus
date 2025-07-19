<script setup lang="ts">
defineProps<{
  areas: any[]
}>()
</script>

<template>
  <div class="w-fit border border-white/50 sm:rounded-2xl">
    <FlexMinified class="bg-eggplant-950/85 w-screen  sm:w-[80vw] lg:w-[70vw]  py-1 sm:rounded-t-xl text-pink-500 text-xl font-extrabold over">
      <p class="w-full text-center"><Icon icon="streamline:arrow-roadmap-solid" class="inline size-6"/>{{($i18n.locale.toString() === 'el') ? "Δρομολόγια" : "Routes"}}</p>
      <p class="w-full text-center"><Icon icon="material-symbols-light:detection-and-zone-sharp" class="inline size-8"/>{{($i18n.locale.toString() === 'el') ? "Ζώνες" : "Zones"}} </p>
    </FlexMinified>
    <FlexMinified :column="true" class=" bg-eggplant-700 sm:rounded-b-2xl  text-pink-100 overflow-hidden" justify="center">
      <FlexMinified v-for="(area,index) in areas" :key="index+1" class="border-b border-b-white/40 py-1">
        <RouterLink :to="`/schedule/${index+1}`"
                    class="w-full  text-center hover:text-pink-500 font-bold transition-colors duration-300 ease-linear">{{ ($i18n.locale.toString() === 'el') ? area.place.start.el.location : area.place.start.en.location}} - {{ ($i18n.locale.toString() === 'el') ? area.place.end.el.location : area.place.end.en.location }}</RouterLink>
        <p class="w-full text-center font-bold saturate-200" :class="(area.zone === 'A') ? 'text-blue-400' : 'text-red-500'">{{($i18n.locale.toString() === 'el') ? "Ζώνη" : "Zone"}} {{area.zone}}</p>
      </FlexMinified>
    </FlexMinified>
  </div>
</template>

<style scoped>

</style>