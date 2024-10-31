<script setup lang="ts">
import {Icon} from "@iconify/vue";
import FlexMinified from "../FlexMinified.vue";
import {computed, onMounted, ref} from "vue";
import {useDataStore} from "../../stores/data.ts";
import Map from "./Map.vue";

const {addTime} = useDataStore()
const dataStore = useDataStore()

const props = defineProps<{
  resolvedSchedule: string,
  timeTable: string[],
  secondTimeTable: string[],
  mins: number,
  id: string,
}>()
const stopSchedule = ref(
    (Number(props.secondTimeTable[props.secondTimeTable.length - 1].slice(0,2)) < new Date().getHours() || ( Number(props.secondTimeTable[props.secondTimeTable.length - 1].slice(0,2)) === new Date().getHours() && Number(addTime(props.secondTimeTable[props.secondTimeTable.length - 1], props.mins).slice(3,5)) < new Date().getMinutes() ))
    || (Number(props.id) === 1 && new Date().getHours() < 7 && new Date().getMinutes() < 55) ||  (Number(props.id) > 1 && new Date().getHours() < 6 && new Date().getMinutes() < 45)
)
const lastStartTime = ref(props.timeTable[props.timeTable.length - 1])

//Calculating Arrival and return times

const arrivalTime = computed(() => {
  return (Number(lastStartTime.value.slice(0,2))> new Date().getHours() || (Number(lastStartTime.value.slice(0,2)) === new Date().getHours() && Number(lastStartTime.value.slice(0,2)) < new Date().getMinutes()) )
      ? props.timeTable.find((time: string, index: number, arr: string[]) => (index === arr.length - 1)
          ? arr[index]
          : parseInt(time.slice(0,2)) >= new Date().getHours() && parseInt(time.slice(3,5)) <= new Date().getMinutes()
          &&  (arr[index+1] != undefined &&
              (parseInt(arr[index + 1].slice(0,2)) > new Date().getHours() || parseInt(arr[index + 1].slice(3,5)) >= new Date().getMinutes())
          )
      )
      : props.timeTable[props.timeTable.length - 1]
});

const secondArrivalTime =
    ref((props.timeTable[props.timeTable.findIndex((value: string) => value === arrivalTime.value) + 1] != undefined)
        ? props.timeTable[props.timeTable.findIndex((value: string) => value === arrivalTime.value) + 1] : props.timeTable[0] )

const returnTime = computed(() => {
  if (arrivalTime.value !== undefined) return props.secondTimeTable.find((time: string, _:any) =>
      (parseInt(time.slice(0,2)) === parseInt(arrivalTime.value!.slice(0,2))
          && (parseInt(time.slice(3,5)) >= new Date().getMinutes() ||  parseInt(time.slice(3,5)) > parseInt(arrivalTime.value!.slice(3,5))) )
      || (parseInt(time.slice(0,2)) > new Date().getHours()
          && parseInt(time.slice(3,5)) < new Date().getMinutes())
      || (parseInt(time.slice(0,2)) > new Date().getHours()
          && parseInt(time.slice(3,5)) >= new Date().getMinutes())
  )
  return props.secondTimeTable[0]
})

//start time text
const startTime = computed(() => {
  return (new Date().getHours() <= Number(returnTime.value!.slice(0,2)) && new Date().getHours() <= Number(secondArrivalTime.value.slice(0,2))
      && (new Date().getMinutes() >= Number(returnTime.value!.slice(3,5))  || new Date().getMinutes() <= Number(secondArrivalTime.value.slice(3,5)) ) ) ? returnTime.value : arrivalTime.value
})
const startText = computed(() => {
  return (new Date().getHours() <= Number(returnTime.value!.slice(0,2)) && new Date().getHours() <= Number(secondArrivalTime.value.slice(0,2))
      && (new Date().getMinutes() >= Number(returnTime.value!.slice(3,5))  || new Date().getMinutes() <= Number(secondArrivalTime.value.slice(3,5)) ) ) ? `Επιστροφή` : `Μετάβαση`
})


//end time and text
const endTime = computed(() => {
  return (new Date().getHours() <= Number(returnTime.value!.slice(0,2)) && new Date().getHours() <= Number(secondArrivalTime.value.slice(0,2))
      && ( new Date().getMinutes() >= Number(returnTime.value!.slice(3,5))  && new Date().getMinutes() <= Number(secondArrivalTime.value.slice(3,5)) ) || ( new Date().getMinutes() < Number(returnTime.value!.slice(3,5))  && new Date().getMinutes() <= Number(secondArrivalTime.value.slice(3,5)) )) ? secondArrivalTime.value : returnTime.value
})
const endText = computed(() => {
  return (new Date().getHours() <= Number(returnTime.value!.slice(0,2)) && new Date().getHours() <= Number(secondArrivalTime.value.slice(0,2))
      && ( new Date().getMinutes() >= Number(returnTime.value!.slice(3,5))  && new Date().getMinutes() <= Number(secondArrivalTime.value.slice(3,5)) ) || ( new Date().getMinutes() < Number(returnTime.value!.slice(3,5))  && new Date().getMinutes() <= Number(secondArrivalTime.value.slice(3,5)) )) ? `Μετάβαση` : `Επιστροφή`
})

onMounted(() => {
  dataStore.startTime = startTime.value!
})
</script>

<template>
  <FlexMinified class=""
                :column="true"
                items="center"
  >
    <h3 class="text-xl font-bold text-pink-500">Διαδρομή</h3>
    <p class="text-pink-300 font-semibold text-center">{{resolvedSchedule}}</p>
    <Map/>
    <FlexMinified :column="true" items="center"
                  class=" lg:col-span-3 my-5 max-sm:border border-t-white/50 border-transparent w-full "
    ><span class="mb-3 text-center  text-xl font-bold text-red-500 "><Icon icon="stash:circle-dot-duotone" class="inline animate-pulse" /> Live Αφίξεις </span>

      <FlexMinified :column="true"
                    class="w-full text-sm"

      >
        <FlexMinified gap-x="4" justify="around" items="center" :class="stopSchedule ? `bg-orange-500` : `bg-emerald-500`" class="rounded-lg  text-center">
          <h5 :class="stopSchedule ? `bg-orange-800` : `bg-emerald-800`" class="h-full rounded-l-lg w-full font-semibold py-1.5">{{(!stopSchedule) ? `Τρέχων:` : `Επόμενο:`}} {{startText}}</h5>
          <p :class="stopSchedule ? `text-gray-100` : `text-gray-600`" class="w-full  ">Ώρα Αναχώρησης: {{(stopSchedule) ? timeTable[0] : startTime}}</p>
          <p :class="stopSchedule ? `text-gray-100` : `text-gray-600`" class="w-full  ">Ώρα Άφιξης: {{(stopSchedule) ? addTime(timeTable[0], mins) : addTime(startTime!, mins)}}</p>

        </FlexMinified>
        <FlexMinified gap-x="4" justify="around" items="center" class="mt-4 rounded-lg  bg-orange-500 text-center  ">
          <h5 class="bg-orange-800 h-full rounded-l-lg py-1.5 w-full font-semibold">Επόμενο: {{endText}}</h5>
          <p class="w-full text-gray-100 ">Ώρα Αναχώρησης: {{(stopSchedule) ? secondTimeTable[0] : endTime}}</p>
          <p class="w-full text-gray-100 ">Ώρα Άφιξης: {{(stopSchedule) ? addTime(secondTimeTable[0], mins) : addTime(endTime!, mins)}}</p>
        </FlexMinified>
      </FlexMinified>
    </FlexMinified>
  </FlexMinified>
</template>