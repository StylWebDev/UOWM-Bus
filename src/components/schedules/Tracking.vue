<script setup lang="ts">
import {Icon} from "@iconify/vue";
import FlexMinified from "../FlexMinified.vue";
import {useDataStore} from "../../stores/data.ts";
import {useI18n} from "vue-i18n";

const {addTime} = useDataStore()
const {t} = useI18n();

const props = defineProps<{
  resolvedSchedule: string,
  mapURL: string,
  mins: number,
  arrivalTime: string,
  departureTime: string,
  id: string,
  test: boolean
}>()

</script>

<template>
  <FlexMinified class=""
                :column="true"
                items="center"
  >
    <h3 class="text-xl font-bold text-pink-500">{{ t('schedule.h3') }}</h3>
    <p class="text-pink-300 font-semibold text-center">{{resolvedSchedule}}</p>
    <iframe :src="mapURL" class="w-full rounded-2xl" height="480"></iframe>
    <FlexMinified :column="true" items="center"
                  class=" lg:col-span-3 my-5 max-sm:border border-t-white/50 border-transparent w-full "
    ><span class="mb-3 text-center  text-xl font-bold text-red-500 "><Icon icon="stash:circle-dot-duotone" class="inline animate-pulse" /> {{ t('schedule.p1') }} </span>

      <FlexMinified :column="true"
                    class="w-full text-sm">

        <FlexMinified gap-x="4" justify="around" items="center" class="rounded-lg text-center bg-emerald-500">
          <h5  class="bg-emerald-800 h-full rounded-l-lg w-full font-semibold py-1.5">{{t('schedule.st1')}}</h5>
          <p  class="w-full text-gray-100 ">{{ t('schedule.time1') }}: {{props.arrivalTime}}</p>
          <p class="w-full text-gray-100  pr-2">{{ t('schedule.time2') }}: {{addTime(props.arrivalTime, mins)}}</p>
        </FlexMinified>
        <FlexMinified gap-x="4" justify="around" items="center" class="mt-4 rounded-lg  bg-orange-500 text-center  ">
          <h5 class="bg-orange-800 h-full rounded-l-lg py-1.5 w-full font-semibold">{{t('schedule.st2')}}</h5>
          <p class="w-full text-gray-100 ">{{ t('schedule.time1') }}: {{props.departureTime}}</p>
          <p class="w-full text-gray-100 ">{{ t('schedule.time2') }}: {{addTime(props.departureTime, mins)}}</p>
        </FlexMinified>
      </FlexMinified>
    </FlexMinified>
  </FlexMinified>
</template>