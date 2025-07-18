<script setup lang="ts">
import greekUtils from 'greek-utils'
const {params, query} = useRoute();

const {getBusStops} = useDataStore();
const busStops = ref<{name: string, code: string, buses: string[], coordinates: {latitude: number, longitude: number}}[]>((await getBusStops()).stops);

const stop = computed(() => {
  return busStops.value.find((value) => params.busStop.toString().includes(value.code) );
})
</script>

<template>
  <FlexMinified :column="true" items="center" gap-y="2" class="lg:gap-y-3">
    <Transition appear enter-from-class="opacity-0 -translate-y-full" appear-active-class="transition-all duration-700 ease-linear">
      <FlexMinified  :column="true" items="center" class="w-full">
        <h3 class="flex justify-center gap-x-1 items-center text-center font-bold text-2xl rainbow">
          <Icon icon="mdi:map-outline" class="inline size-10 " />
          <span class="block uppercase text-center">{{($i18n.locale === 'el') ? (params.busStop as string).split('-')[0] : greekUtils.toGreeklish((params.busStop  as string).split('-')[0])}} <span class="capitalize max-md:hidden"> - Stop ID:{{(params.busStop as string).split('-')[1]}}</span> </span>
        </h3>
        <div class="h-0.5 max-sm:w-[90vw] w-[70vw] text-center rounded-full bg-rainbow"/>
        <FlexMinified row justify="around">
          <p></p>
          <p></p>
        </FlexMinified>
          <FlexMinified :row="true" gap-x="1" gap-y="0.5" :wrap="true" class="mt-2">
            <div class="text-white text-xs font-bold px-1 bg-sky-500 rounded-lg">
              <span class="max-md:">Busses </span><Icon icon="mdi:bus-multiple" class="text-white inline size-4"/>
            </div>
            <div class="p-0.5 text-xs text-center rounded-full bg-red-600 font-semibold "
                 v-for="(busID,index) in stop?.buses" :key="index">{{busID}}</div>
          </FlexMinified>
      </FlexMinified>
    </Transition>

    <Transition appear enter-from-class="opacity-0 scale-50" appear-active-class="transition-all duration-700 ease-linear">
      <LocationsMap :long="parseFloat(query.lng as string)" :lati="parseFloat(query.lat as string)"/>
    </Transition>
  </FlexMinified>
</template>

<style scoped>

</style>