<script setup lang="ts">
import {Icon} from "@iconify/vue";
import FlexMinified from "../FlexMinified.vue";
import {computed, onMounted, ref} from "vue";
import {useDataStore} from "../../stores/data.ts";

const {addTime, dateToTimeStamp} = useDataStore()
const dataStore = useDataStore()

const props = defineProps<{
  resolvedSchedule: string,
  mapURL: string,
  timeTable: string[],
  secondTimeTable: string[],
  mins: number,
  id: string,
  test: boolean
}>()


const date = ref<string>(dateToTimeStamp(new Date().getHours(), new Date().getMinutes()))


const lastStartTime = ref(props.timeTable[props.timeTable.length - 1])
const lastStartTime2 = ref(props.secondTimeTable[props.timeTable.length - 1])

//Calculating Arrival and return times

const arrivalTime = computed(() => {
  if (props.test) return props.timeTable[0];
  return (lastStartTime.value > date.value )
      ? props.timeTable.findLast((time: string, index: number, arr: string[]) => (index === 0) ? arr[0] :  time <= date.value)
      : props.timeTable[props.timeTable.length - 1]
});

const arrivalTime2 = computed(() => {
  if (props.test) return props.secondTimeTable[0];
  return (lastStartTime2.value > date.value )
      ? props.secondTimeTable.findLast((time: string, index: number, arr: string[]) => (index === 0) ? arr[0] :  time <= date.value)
      : props.secondTimeTable[props.secondTimeTable.length - 1]
});

const secondArrivalTime =
    ref((props.timeTable[props.timeTable.findIndex((value: string) => value === arrivalTime.value) + 1] != undefined)
        ? props.timeTable[props.timeTable.findIndex((value: string) => value === arrivalTime.value) + 1] : props.timeTable[0] )

const secondArrivalTime2 =
    ref((props.secondTimeTable[props.timeTable.findIndex((value: string) => value === arrivalTime2.value) + 1] != undefined)
        ? props.timeTable[props.timeTable.findIndex((value: string) => value === arrivalTime.value) + 1] : props.timeTable[0] )

const returnTime = computed(() => {
  if (arrivalTime.value !== undefined) return props.secondTimeTable.find((time: string, _:any) => time >= arrivalTime.value!)
  return props.secondTimeTable[0]
})

//start time text
const startTime = computed(() => {
  if (props.test) return arrivalTime.value!
  return (date.value >= arrivalTime.value! && date.value < returnTime.value!) ?  arrivalTime.value : returnTime.value
})

const startText = computed(() => {
  if (props.test) return `Μετάβαση`
  return (date.value >= arrivalTime.value! && date.value < returnTime.value!) ?  `Μετάβαση` : `Επιστροφή`
})


//end time and text
const endTime = computed(() => {
  if (props.test) return returnTime.value!
  return (date.value >= returnTime.value! && date.value < secondArrivalTime.value!) ? secondArrivalTime.value : returnTime.value
})
const endText = computed(() => {
  if (props.test) return `Επιστροφή`
  return (date.value >= returnTime.value! && date.value < secondArrivalTime.value!) ? `Μετάβαση` : `Επιστροφή`
})

onMounted(() => {
  dataStore.startTime = startTime.value!
})

const stopSchedule = ref(
     (addTime(props.secondTimeTable[props.secondTimeTable.length-1], props.mins) < date.value)
)
const stopSchedule2 = ref(
    (props.secondTimeTable[props.secondTimeTable.length-1] < date.value )
)
</script>

<template>
  <FlexMinified class=""
                :column="true"
                items="center"
  >
    <h3 class="text-xl font-bold text-pink-500">Διαδρομή</h3>
    <p class="text-pink-300 font-semibold text-center">{{resolvedSchedule}}</p>
    <iframe :src="mapURL" class="w-full rounded-2xl" height="480"></iframe>
    <FlexMinified :column="true" items="center"
                  class=" lg:col-span-3 my-5 max-sm:border border-t-white/50 border-transparent w-full "
    ><span class="mb-3 text-center  text-xl font-bold text-red-500 "><Icon icon="stash:circle-dot-duotone" class="inline animate-pulse" /> Live Αφίξεις </span>

      <FlexMinified :column="true"
                    class="w-full text-sm"

      >
        <FlexMinified gap-x="4" justify="around" items="center" :class="stopSchedule || test ? `bg-orange-500` : `bg-emerald-500`" class="rounded-lg  text-center">
          <h5 :class="stopSchedule || test ? `bg-orange-800` : `bg-emerald-800`" class="h-full rounded-l-lg w-full font-semibold py-1.5">{{(!stopSchedule && !test) ? `Τρέχων:` : `Επόμενο:`}} {{startText}}</h5>
          <p :class="stopSchedule || test ? `text-gray-100` : `text-gray-600`" class="w-full  ">Ώρα Αναχώρησης: {{(stopSchedule) ? timeTable[0] : startTime}}</p>
          <p :class="stopSchedule || test ? `text-gray-100` : `text-gray-600`" class="w-full  pr-2">Ώρα Άφιξης: {{(stopSchedule) ? addTime(timeTable[0], mins) : addTime(startTime!, mins)}}</p>
        </FlexMinified>
        <FlexMinified gap-x="4" justify="around" items="center" class="mt-4 rounded-lg  bg-orange-500 text-center  ">
          <h5 class="bg-orange-800 h-full rounded-l-lg py-1.5 w-full font-semibold">Επόμενο: {{(!stopSchedule && stopSchedule2) ? `Μετάβαση` : endText}}</h5>
          <p class="w-full text-gray-100 ">Ώρα Αναχώρησης: {{(stopSchedule) ? secondTimeTable[0] : (stopSchedule2) ? props.timeTable[0] : endTime}}</p>
          <p class="w-full text-gray-100 ">Ώρα Άφιξης: {{(stopSchedule) ? addTime(secondTimeTable[0], mins) : (stopSchedule2) ? addTime(timeTable[0], mins) : addTime(endTime!, mins)}}</p>
        </FlexMinified>
      </FlexMinified>
    </FlexMinified>
  </FlexMinified>
</template>