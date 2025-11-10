<script setup lang="ts">
import {toGreeklish} from "greek-utils";
const {getBusStops, getDistanceFromLatLonInKm, normalizeGreek} = useDataStore();
const busStops = ref<{name: string, code: string, buses: string[], coordinates: {latitude: number, longitude: number}}[]>((await getBusStops()).stops);

const userCoords = ref<any>(null);
const geo = ref<boolean>(true);
const disabled = ref<boolean>(false);

let getPosition: number

const getLocation = () => {
  disabled.value = true;
  navigator.geolocation.getCurrentPosition((position) => {
    userCoords.value =  {lon: position.coords.longitude, lat: position.coords.latitude};
    busStops.value.sort((a, b) => getDistanceFromLatLonInKm(a.coordinates.latitude,a.coordinates.longitude, userCoords.value.lat, userCoords.value.lon) - getDistanceFromLatLonInKm(b.coordinates.latitude,b.coordinates.longitude, userCoords.value.lat, userCoords.value.lon));
    geo.value = false
    if (!document.cookie) document.cookie = "geo=1";

    getPosition = setInterval(() => {
      userCoords.value =  {lon: position.coords.longitude, lat: position.coords.latitude};
      busStops.value.sort((a, b) => getDistanceFromLatLonInKm(a.coordinates.latitude,a.coordinates.longitude, userCoords.value.lat, userCoords.value.lon) - getDistanceFromLatLonInKm(b.coordinates.latitude,b.coordinates.longitude, userCoords.value.lat, userCoords.value.lon));
      }, 5000)
    disabled.value = false;
  }, () => {
    userCoords.value = null;
  }, {enableHighAccuracy: true});
}

onMounted(() => {
  if (document.cookie.split('=')[1] === '1') {
    geo.value = false;
    getLocation();
  }
})

onUnmounted(() => {
  clearInterval(getPosition)
})

const filteredStops = computed(() => {
  return busStops.value.filter((stops) => stops.name.startsWith(toGreek(normalizeGreek(textSearch.value).toUpperCase())));
})

const textSearch = ref("")
</script>

<template>
  <FlexMinified :column="true" items="center" class="w-full" md-gap-y="2">
    <Transition enter-from-class="opacity-0 scale-0" enter-active-class="transition-all duration-700 ease-in" leave-to-class="opacity-0 scale-0"  leave-active-class="transition-all duration-700 ease-in" appear >
      <div class="max-sm:w-[92vw] w-92 mb-4">
        <label for="default-search" class="mb-2 text-sm font-medium sr-only text-white">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input v-model="textSearch"
                 type="text" id="default-search"
                 class="block w-full p-4 ps-10 text-sm  border  rounded-lg   max-md:bg-eggplant-900 bg-eggplant-950/80 border-gray-400 placeholder-gray-400 text-white focus:ring-fuchsia-500 focus:border-fuchsia-500"
                 :placeholder="($i18n.locale === `el`) ? `Αναζήτηση Στάσεων` : `Search Bus Stops`"
                 required />
        </div>
      </div>
    </Transition>
    <div class="w-full flex flex-col items-center">
      <TransitionGroup move-class="transition-all ease delay-50 duration-500 " enter-from-class="opacity-0 scale-0" enter-active-class="transition-all duration-500  ease " leave-to-class="opacity-0 scale-0 "  leave-active-class=" transition-all duration-500 ease" appear >
        <FlexMinified class="lg:mb-2 w-full md:w-[80vw] xl:w-[75vw] min-[2000px]:w-[60vw] md:px-10 py-2 md:rounded-lg md:border border-white/40"
                      justify="evenly"
                      gap-x="5"
                      items="center"
                      v-for="(stop,index) in filteredStops" :key="stop.code"
                      :class="(index%2===0) ? `bg-neutral-900/85` : `bg-eggplant-950`"
        >
          <p class="w-20 py-7 text-center font-extrabold black border-2 border-sky-500  bg-eggplant-100 rounded-full">{{ stop.code }}</p>
          <FlexMinified :column="true" gap-y="1" class="w-40">
            <h2 class="font-semibold uppercase">{{($i18n.locale === 'el') ? stop.name : toGreeklish(stop.name)}}</h2>
            <FlexMinified :row="true" gap-x="1" gap-y="0.5" :wrap="true">
              <Icon icon="mdi:bus-multiple" class="text-sky-600"/>
              <div class="p-0.5 text-xs text-center rounded-full bg-red-600 font-semibold "
                   v-for="(busID,index) in stop.buses" :key="index">{{busID}}</div>
            </FlexMinified>
            <Transition enter-from-class="opacity-0 " enter-active-class="transition-all duration-500 ease-in" appear>
              <p v-if="userCoords!==null" class="text-xs text-emerald-400">{{$t('distance')}}: {{getDistanceFromLatLonInKm(stop.coordinates.latitude,stop.coordinates.longitude, userCoords.lat, userCoords.lon )}}km</p>
            </Transition>
          </FlexMinified>
          <button :disabled class="disabled:bg-neutral-500 disabled:text-black bg-sky-600 hover:text-black transition-all  duration-200 ease-in hover:bg-white rounded-md">
            <RouterLink class="block py-1 px-2"
                        :class="disabled && `pointer-events-none`"
                        :to="
                          (userCoords===null)
                          ? `busstops/map/${stop.name}-${stop.code}?lng=${stop.coordinates.longitude}&lat=${stop.coordinates.latitude}`
                          : `busstops/map/${stop.name}-${stop.code}?lng=${stop.coordinates.longitude}&lat=${stop.coordinates.latitude}&userLon=${userCoords.lon}&userLat=${userCoords.lat}` "
                        aria-label="ShowOnMap" >
              <span class="hidden md:inline font-bold ">{{($i18n.locale==='el') ? 'Χάρτης ' : 'View on '}} </span>
              <Icon icon="material-symbols:globe-location-pin-sharp" class="inline size-7"/>
            </RouterLink>
          </button>
        </FlexMinified>
      </TransitionGroup>
    </div>
  </FlexMinified>
  <button
      v-if="geo"
      @click="getLocation"
      class="absolute bottom-[15vh] right-[5vw] bg-red-500 hover:bg-emerald-600 hover:text-white focus:text-white focus:bg-emerald-600 text-neutral-800 p-3  rounded-full hover:brightness-125 transition-all duration-300 ease-in cursor-pointer">
    <Icon icon="line-md:map-marker-alt-twotone-loop" class="size-7"/></button>
</template>

<style scoped>

</style>
