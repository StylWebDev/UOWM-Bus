<script setup lang="ts">
import FlexMinified from "./FlexMinified.vue";
import {useDataStore} from "../stores/data.ts";
import greekUtils from "greek-utils";
import {onMounted, ref} from "vue";
import {Icon} from "@iconify/vue";

const {getBusStops} = useDataStore();
const busStops = ref<{name: string, code: string, buses: string[], coordinates: {latitude: number, longitude: number}}[]>((await getBusStops()).stops);

const getDistanceFromLatLonInKm = (lat1: number,lon1: number,lat2: number,lon2: number): number => {
  let R = 6371; // Radius of the earth in km
  let dLat = deg2rad(lat2-lat1);  // deg2rad below
  let dLon = deg2rad(lon2-lon1);
  let a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon/2) * Math.sin(dLon/2)
  ;
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return parseFloat((R * c).toFixed(2));
}

function deg2rad(deg: number): number {
  return deg * (Math.PI/180)
}

const userCoords = ref<any>(null);

const geo = ref<boolean>(true);

const getLocation = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    userCoords.value =  {lon: position.coords.longitude, lat: position.coords.latitude};
    busStops.value.sort((a, b) => getDistanceFromLatLonInKm(a.coordinates.latitude,a.coordinates.longitude, userCoords.value.lat, userCoords.value.lon) - getDistanceFromLatLonInKm(b.coordinates.latitude,b.coordinates.longitude, userCoords.value.lat, userCoords.value.lon));
    geo.value = false
    if (!document.cookie) document.cookie = "geo=1";
  }, () => {
    userCoords.value = null;
  });
}

onMounted(() => {
  if (document.cookie.split('=')[1] === '1') {
    geo.value = false;
    getLocation();
  }

})

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
        <p v-if="userCoords!==null" class="text-xs text-emerald-400">{{$t('distance')}}: {{getDistanceFromLatLonInKm(stop.coordinates.latitude,stop.coordinates.longitude, userCoords.lat, userCoords.lon )}}km</p>
      </FlexMinified>
      <RouterLink class="block py-1 px-2 bg-sky-600 hover:bg-white hover:text-black transition-all  duration-200 ease-in rounded-md"
         :to="`busstops/map/${stop.name}-${stop.code}?lng=${stop.coordinates.longitude}&lat=${stop.coordinates.latitude}`" aria-label="ShowOnMap" >
        <span class="hidden md:inline font-bold ">{{($i18n.locale==='el') ? 'Χάρτης ' : 'View on '}} </span>
        <Icon icon="material-symbols:globe-location-pin-sharp" class="inline size-7"/>
      </RouterLink>
    </FlexMinified>
  </FlexMinified>
  <button
      v-if="geo"
      @click="getLocation"
      class="absolute bottom-[15vh] right-[5vw] bg-red-500 hover:bg-emerald-600 hover:text-white focus:text-white focus:bg-emerald-600 text-neutral-800 p-3  rounded-full hover:brightness-125 transition-all duration-300 ease-in cursor-pointer">
    <Icon icon="line-md:map-marker-alt-twotone-loop" class="size-7"/></button>
</template>

<style scoped>

</style>
