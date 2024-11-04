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

const specData = computed(() => {
  return (new Date().getDay() === 0 && parseInt(params.id.toString()) !== 1)
  ? data.sunday
  : (new Date().getDay() === 6  && parseInt(params.id.toString()) !== 1)
  ? data.saturday
  : data.everyday
})

const test = ref((new Date().getDay() === 0 || new Date().getDay() === 6) && params.id === `1`)

const timeTable = ref(specData.value.start)

const secondTimeTable = ref(specData.value.end)
</script>

<template>
  <FlexMinified  :column="true" items="center">
    <h3 class="flex max-sm:flex-col justify-center gap-x-1 items-center text-center font-bold text-3xl rainbow">
      <Icon icon="majesticons:map-simple-destination" class="size-12 " />
      <span class="block"> {{data.place.start.el.location}} - {{data.place.end.el.location}}</span>
    </h3>
    <div class="h-0.5 max-sm:w-full w-[70vw] text-center rounded-full bg-rainbow"/>

  </FlexMinified>

  <GridMinified columns="1" lg-columns="3" gap-x="5"
                class="bg-eggplant-950/80 md:rounded-xl mt-5 md:mx-10 px-5 pt-4 sm:border max-sm:border-y border-white/30"
  >
    <Tracking :id="params.id.toString()" :resolved-schedule="data.resolvedSchedule" :time-table="timeTable" :second-time-table="secondTimeTable" :mins="Number(data.mins)" :test="test" :mapURL="data.map_url"/>

    <ScheduleTable :time-table="timeTable" :second-time-table="secondTimeTable" :start-time="(test) ? '00:00' : dataStore.startTime" :mins="Number(data.mins)"/>
  </GridMinified>
</template>