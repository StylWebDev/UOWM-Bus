<script setup lang="ts">
import {computed, ref} from "vue";
import FlexMinified from "../../components/FlexMinified.vue";
import {Icon} from "@iconify/vue";
import GridMinified from "../../components/GridMinified.vue";
import Tracking from "../../components/schedules/Tracking.vue";
import ScheduleTable from "../../components/schedules/table/ScheduleTable.vue";

import {useRoute} from "vue-router"
const {params} = useRoute()

import {useDataStore} from "../../stores/data.ts";
const {getData} = useDataStore();
const dataStore = useDataStore();

const data = await getData(Number(params.id));

const { dateToTimeStamp} = useDataStore()

const specData = computed(() => {
  return (new Date().getDay() === 0 && parseInt(params.id.toString()) !== 1)
  ? data.sunday
  : (new Date().getDay() === 6  && parseInt(params.id.toString()) !== 1)
  ? data.saturday
  : data.everyday
})

const test = ref((new Date().getDay() === 0 || new Date().getDay() === 6) && params.id === `1`)

const timeTable = ref<string[]>(specData.value.start)

const secondTimeTable = ref<string[]>(specData.value.end)

const lastStartTime = ref<string>(timeTable.value[timeTable.value.length - 1])
const lastStartTime2 = ref<string>(secondTimeTable.value[secondTimeTable.value.length - 1])

//Calculating Arrival and return times

const date = ref<string>(dateToTimeStamp(new Date().getHours(), new Date().getMinutes()))

const arrivalTime = computed(() => {
  if (test.value) return timeTable.value[0];
  return (lastStartTime.value > date.value )
      ? timeTable.value.findLast((time: string, index: number, arr: string[]) => (index === 0) ? arr[0] :  time <= date.value)
      : timeTable.value[0]
});

const departureTime = computed(() => {
  if (test.value) return secondTimeTable.value[0];
  return (lastStartTime2.value > date.value )
      ? secondTimeTable.value.findLast((time: string, index: number, arr: string[]) => (index === 0) ? arr[0] :  time <= date.value)
      : secondTimeTable.value[0]
});
</script>

<template>
  <FlexMinified  :column="true" items="center">
    <h3 class="flex max-sm:flex-col justify-center gap-x-1 items-center text-center font-bold text-3xl rainbow">
      <Icon icon="majesticons:map-simple-destination" class="size-12 " />
      <span class="block">  {{  ($i18n.locale.toString() === 'el') ? data.place.start.el.location : data.place.start.en.location }} - {{  ($i18n.locale.toString() === 'el') ? data.place.end.el.location : data.place.end.en.location }}
</span>
    </h3>
    <div class="h-0.5 max-sm:w-full w-[70vw] text-center rounded-full bg-rainbow"/>

  </FlexMinified>

  <GridMinified columns="1" lg-columns="3" gap-x="5"
                class=" overflow-hidden bg-eggplant-950/80 md:rounded-xl mt-5 md:mx-10 px-5 pt-4 sm:border max-sm:border-y border-white/30"
  >
    <Tracking :id="params.id.toString()"
              :resolved-schedule="($i18n.locale.toString() === 'el') ? data.resolvedSchedule : data.resolvedSchedule_en"
              :arrivalTime="arrivalTime!.toString()"
              :departureTime="departureTime!.toString()"
              :mins="Number(data.mins)" :test="test"
              :mapURL="data.map_url"/>

    <ScheduleTable
        :time-table="timeTable"
        :arrival-time="arrivalTime!.toString()"
        :departure-time="departureTime!.toString()"
        :second-time-table="secondTimeTable"
        :start-time="(test) ? '00:00' : dataStore.startTime"
        :mins="Number(data.mins)"/>

  </GridMinified>
</template>