<script setup lang="ts">
import FlexMinified from "../../components/FlexMinified.vue";
import {Icon} from "@iconify/vue";
import GridMinified from "../../components/GridMinified.vue";
import {computed, ref} from "vue";

import {useRoute} from "vue-router"
const {params} = useRoute()

import {useDataStore} from "../../stores/data.ts";
const {getData, addTime} = useDataStore()


const data = await getData(Number(params.id));

const specData = computed(() => {
  return (new Date().getDay() === 0 && parseInt(params.id.toString()) !== 1)
  ? data.sunday
  : (new Date().getDay() === 6  && parseInt(params.id.toString()) !== 1)
  ? data.saturday
  : data.everyday
})

const timeTable = ref(specData.value.start)

const secondTimeTable = ref(specData.value.end)

const lastStartTime = ref(timeTable.value[timeTable.value.length - 1])

const stopSchedule = ref(
    (Number(secondTimeTable.value[secondTimeTable.value.length - 1].slice(0,2)) < new Date().getHours() || ( Number(secondTimeTable.value[secondTimeTable.value.length - 1].slice(0,2)) === new Date().getHours() && Number(addTime(secondTimeTable.value[secondTimeTable.value.length - 1], data.mins).slice(3,5)) < new Date().getMinutes() ))
    || (Number(params.id) === 1 && new Date().getHours() < 7 && new Date().getMinutes() < 55) ||  (Number(params.id) > 1 && new Date().getHours() < 6 && new Date().getMinutes() < 45)
)

const arrivalTime = computed(() => {
  return (Number(lastStartTime.value.slice(0,2))> new Date().getHours() || (Number(lastStartTime.value.slice(0,2)) === new Date().getHours() && Number(lastStartTime.value.slice(0,2)) < new Date().getMinutes()) )
      ? timeTable.value.find((time: string, index: number, arr: string[]) => (index === arr.length - 1)
          ? arr[index]
          : parseInt(time.slice(0,2)) >= new Date().getHours() && parseInt(time.slice(3,5)) <= new Date().getMinutes()
          &&  (arr[index+1] != undefined &&
              (parseInt(arr[index + 1].slice(0,2)) > new Date().getHours() || parseInt(arr[index + 1].slice(3,5)) >= new Date().getMinutes())
          )
      )
      : timeTable.value[timeTable.value.length - 1]
});

const secondArrivalTime =
    ref((timeTable.value[timeTable.value.findIndex((value: string) => value === arrivalTime.value) + 1] != undefined)
              ? timeTable.value[timeTable.value.findIndex((value: string) => value === arrivalTime.value) + 1] : timeTable.value[0] )


const returnTime = computed(() => {
  if (arrivalTime.value !== undefined) return secondTimeTable.value.find((time: string, _:any) =>
        (parseInt(time.slice(0,2)) === parseInt(arrivalTime.value!.slice(0,2))
            && (parseInt(time.slice(3,5)) >= new Date().getMinutes() ||  parseInt(time.slice(3,5)) > parseInt(arrivalTime.value!.slice(3,5))) )
        || (parseInt(time.slice(0,2)) > new Date().getHours()
            && parseInt(time.slice(3,5)) < new Date().getMinutes())
      || (parseInt(time.slice(0,2)) > new Date().getHours()
          && parseInt(time.slice(3,5)) >= new Date().getMinutes())
    )
  return secondTimeTable.value[0]
})

const startTime = computed(() => {
  return (new Date().getHours() <= Number(returnTime.value.slice(0,2)) && new Date().getHours() <= Number(secondArrivalTime.value.slice(0,2))
      && (new Date().getMinutes() >= Number(returnTime.value.slice(3,5))  || new Date().getMinutes() <= Number(secondArrivalTime.value.slice(3,5)) ) ) ? returnTime.value : arrivalTime.value
})

const startText = computed(() => {
  return (new Date().getHours() <= Number(returnTime.value.slice(0,2)) && new Date().getHours() <= Number(secondArrivalTime.value.slice(0,2))
      && (new Date().getMinutes() >= Number(returnTime.value.slice(3,5))  || new Date().getMinutes() <= Number(secondArrivalTime.value.slice(3,5)) ) ) ? `Επιστροφή` : `Μετάβαση`
})

const endTime = computed(() => {
  return (new Date().getHours() <= Number(returnTime.value.slice(0,2)) && new Date().getHours() <= Number(secondArrivalTime.value.slice(0,2))
      && ( new Date().getMinutes() >= Number(returnTime.value.slice(3,5))  && new Date().getMinutes() <= Number(secondArrivalTime.value.slice(3,5)) ) || ( new Date().getMinutes() < Number(returnTime.value.slice(3,5))  && new Date().getMinutes() <= Number(secondArrivalTime.value.slice(3,5)) )) ? secondArrivalTime.value : returnTime.value
})

const endText = computed(() => {
  return (new Date().getHours() <= Number(returnTime.value.slice(0,2)) && new Date().getHours() <= Number(secondArrivalTime.value.slice(0,2))
      && ( new Date().getMinutes() >= Number(returnTime.value.slice(3,5))  && new Date().getMinutes() <= Number(secondArrivalTime.value.slice(3,5)) ) || ( new Date().getMinutes() < Number(returnTime.value.slice(3,5))  && new Date().getMinutes() <= Number(secondArrivalTime.value.slice(3,5)) )) ? `Μετάβαση` : `Επιστροφή`
})

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
                class="sm:bg-eggplant-950/80 md:rounded-xl mt-5 md:mx-10 px-5 pt-4"
  >
    <FlexMinified class=""
        :column="true"
        items="center"
    >
      <h3 class="text-xl font-bold text-pink-500">Διαδρομή</h3>
      <p class="text-pink-300 font-semibold text-center">{{data.resolvedSchedule}}</p>
      <img src="https://astikoktelkastorias.gr/wp-content/uploads/2023/10/mesopotamia-2.png"
           class="rounded-lg mt-3 bg-red-500 border-2 border-eggplant-100 w-full"
           alt="mesopotamia image">

      <FlexMinified :column="true" items="center"
                    class=" lg:col-span-3 my-3 max-sm:border border-t-white/50 border-transparent w-full "
      ><span class="mb-3 text-center  text-xl font-bold text-red-500 "><Icon icon="stash:circle-dot-duotone" class="inline animate-pulse" /> Live Αφίξεις </span>

        <FlexMinified :column="true"
                      class="w-full text-sm"

        >
          <FlexMinified gap-x="4" justify="around" items="center" :class="stopSchedule ? `bg-orange-500` : `bg-emerald-500`" class="rounded-lg  text-center">
            <h5 :class="stopSchedule ? `bg-orange-800` : `bg-emerald-800`" class="h-full rounded-l-lg w-full font-semibold py-1.5">{{(!stopSchedule) ? `Τρέχων:` : `Επόμενο:`}} {{startText}}</h5>
            <p :class="stopSchedule ? `text-gray-100` : `text-gray-600`" class="w-full  ">Ώρα Αναχώρησης: {{(stopSchedule) ? timeTable[0] : startTime}}</p>
            <p :class="stopSchedule ? `text-gray-100` : `text-gray-600`" class="w-full  ">Ώρα Άφιξης: {{(stopSchedule) ? addTime(timeTable[0], data.mins) : addTime(startTime, data.mins)}}</p>

          </FlexMinified>
          <FlexMinified gap-x="4" justify="around" items="center" class="mt-4 rounded-lg  bg-orange-500 text-center  ">
            <h5 class="bg-orange-800 h-full rounded-l-lg py-1.5 w-full font-semibold">Επόμενο: {{endText}}</h5>
            <p class="w-full text-gray-100 ">Ώρα Αναχώρησης: {{(stopSchedule) ? secondTimeTable[0] : endTime}}</p>
            <p class="w-full text-gray-100 ">Ώρα Άφιξης: {{(stopSchedule) ? addTime(secondTimeTable[0], data.mins) : addTime(endTime, data.mins)}}</p>
          </FlexMinified>
        </FlexMinified>
      </FlexMinified>
    </FlexMinified>


    <FlexMinified :column="true" items="center" class="lg:col-span-2 max-sm:border border-transparent border-t-white/50  ">
      <h3 class="text-center mb-4  text-xl font-bold text-emerald-500">Πρόγραμμα Λεωφορείου {{`${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`}}</h3>

        <FlexMinified :column="true" items="center" class=" w-full text-sm text-left rtl:text-right text-eggplant-50">

          <FlexMinified justify="around" class="sticky w-full top-0 rounded-t-2xl text-center text-pink-400 text-sm uppercase bg-eggplant-800 font-semibold">
            <div class="px-6 py-3">
              ΜΕΤΑΒΑΣΗ
            </div>
            <div class="px-6 py-3">
              ΕΠΙΣΤΡΟΦΗ
            </div>
          </FlexMinified>



          <div v-if="timeTable.length >= secondTimeTable.length" class="text-neutral-200 rounded-b-2xl text-center block w-full max-md:h-[35vh] mb-5 md:h-[45vh] lg:h-[36vh] xl:h-[35vh] 2xl:h-[40vh] min-[1800px]:h-[57vh] min-[2200px]:h-[50vh] overflow-y-scroll">
            <FlexMinified class="border-b bg-eggplant-500 border-gray-700"
                justify="around"
                v-for="(time,index) in timeTable"
                :key="index"
            >
              <div  class="px-6 py-4 font-medium whitespace-nowrap w-full "
                   :class="( time === startTime)
            ? `bg-emerald-400 text-gray-600 animate-pulse`
                : null"
              >
                {{time }}
              </div>

              <div class="px-6 py-4 w-full"
                  :class="( secondTimeTable[index] === startTime )
            ? `bg-emerald-400 text-gray-600 animate-pulse`
                : null"
              >
                {{(secondTimeTable[index] === undefined) ? '-' : secondTimeTable[index] }}
              </div>
            </FlexMinified>
          </div>

          <div v-else class="text-neutral-200 rounded-b-2xl text-center block w-full max-md:h-[35vh] mb-5 md:h-[45vh] lg:h-[36vh] xl:h-[35vh] 2xl:h-[40vh] min-[1800px]:h-[57vh] min-[2200px]:h-[50vh] overflow-y-scroll overflow-x-hidden">
             <FlexMinified class="border-b w-full bg-eggplant-500 border-gray-700" justify="around"
              v-for="(time,index) in secondTimeTable"
              :key="index"
              >
                <div  class="px-6 py-4 w-full font-medium whitespace-nowrap"
                      :class="(timeTable[index] === startTime)
                      ?  `bg-emerald-400 text-gray-600 animate-pulse`
                      : null"
                >
                    {{(timeTable[index] === undefined) ? '-' : timeTable[index] }}
                </div>


                <div class="px-6 py-4 w-full"
                  style="z-index: 1"
                  :class="(time === startTime)
                  ? `bg-emerald-400 text-gray-600 animate-pulse`
                  : null"
                >
                  {{time}}
            </div>
          </FlexMinified>
          </div>

        </FlexMinified>
    </FlexMinified>
  </GridMinified>

</template>

<style scoped>

</style>