<script setup lang="ts">
import LocationsMap from "../../components/LocationsMap.vue";
import {useRoute} from "vue-router";
import {Icon} from "@iconify/vue";
import FlexMinified from "../../components/FlexMinified.vue";
import greekUtils from 'greek-utils'
const {params, query} = useRoute();
</script>

<template>
  <FlexMinified :column="true" items="center" gap-y="4" class="lg:gap-y-3">
    <Transition appear enter-from-class="opacity-0 -translate-y-full" appear-active-class="transition-all duration-700 ease-linear">
      <FlexMinified  :column="true" items="center">
        <h3 class="flex justify-center gap-x-1 items-center text-center font-bold text-2xl rainbow">
          <Icon icon="mdi:map-outline" class="inline size-10 " />
          <span class="block uppercase text-center">{{($i18n.locale === 'el') ? (params.busStop as string).split('-')[0] : greekUtils.toGreeklish((params.busStop  as string).split('-')[0])}} <span class="capitalize max-md:hidden"> - Stop ID:{{(params.busStop as string).split('-')[1]}}</span> </span>
        </h3>
        <div class="h-0.5 max-sm:w-full w-[70vw] text-center rounded-full bg-rainbow"/>
      </FlexMinified>
    </Transition>

    <Transition appear enter-from-class="opacity-0 scale-50" appear-active-class="transition-all duration-700 ease-linear">
      <LocationsMap :long="parseFloat(query.lng as string)" :lati="parseFloat(query.lat as string)"/>
    </Transition>
  </FlexMinified>
</template>

<style scoped>

</style>