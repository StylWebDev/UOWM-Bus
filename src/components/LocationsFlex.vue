<script setup lang="ts">
import FlexMinified from "./FlexMinified.vue";
import {useDataStore} from "../stores/data.ts";
import greekUtils from "greek-utils";
import {ref} from "vue";
import {Icon} from "@iconify/vue";

const {getBusStops} = useDataStore();
const busStops = ref((await getBusStops()).stops);

</script>

<template>
  <FlexMinified :column="true" items="center" class="w-full" md-gap-y="2">
    <FlexMinified class=" w-full md:w-[80vw] xl:w-[75vw] min-[2000px]:w-[60vw] md:px-10 py-2 md:rounded-lg md:border border-white/40"
                  justify="evenly"
                  gap-x="5"
                  items="center"
                  v-for="(stop,index) in busStops" :key="stop.code"
                  :class="(index%2===0) ? `bg-eggplant-950` : `bg-neutral-900/85`"
    >
      <p class="w-20 py-7 text-center font-extrabold black  bg-eggplant-100 rounded-full">{{ stop.code }}</p>
      <FlexMinified :column="true" gap-y="1" class="w-40">
        <h2 class="font-semibold uppercase">{{($i18n.locale === 'el') ? stop.name : greekUtils.toGreeklish(stop.name)}}</h2>
        <FlexMinified :row="true" gap-x="1" gap-y="0.5" :wrap="true">
          <Icon icon="mdi:bus-multiple" class="text-sky-600"/>
          <div class="p-0.5 text-xs text-center rounded-full bg-red-600 font-semibold "
               v-for="(busID,index) in stop.buses" :key="index">{{busID}}</div>
        </FlexMinified>
      </FlexMinified>
      <RouterLink class="block py-1 px-2 bg-sky-600 hover:bg-white hover:text-black transition-all  duration-200 ease-in rounded-md"
         :to="`busstops/map/${stop.name}-${stop.code}?lng=${stop.coordinates.longitude}&lat=${stop.coordinates.latitude}`" aria-label="ShowOnMap" >
        <span class="hidden md:inline font-bold ">{{($i18n.locale==='el') ? 'Χάρτης ' : 'View on '}} </span>
        <Icon icon="material-symbols:globe-location-pin-sharp" class="inline size-7"/>
      </RouterLink>
    </FlexMinified>
  </FlexMinified>
</template>

<style scoped>

</style>