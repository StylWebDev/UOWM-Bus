<script setup lang="ts">
import FlexMinified from "../../components/FlexMinified.vue";
import {Icon} from "@iconify/vue";
import GridMinified from "../../components/GridMinified.vue";
import {computed, ref} from "vue";

import {useRoute} from "vue-router"
const {params} = useRoute()

import {useDataStore} from "../../stores/data.ts";
const {getData} = useDataStore()


const data = await getData(params.id);

const specData = computed(() => {
  return (new Date().getDay() === 0 && parseInt(params.id.toString()) !== 1)
  ? data.sunday
  : (new Date().getDay() === 6  && parseInt(params.id.toString()) !== 1)
  ? data.saturday
  : data.everyday
})

const timeTable = ref(specData.value.start)

const secondTimeTable = ref(specData.value.end)

/*const arrivalTime = computed(() => {
  return (typeof timeTable.value.find((time: string, _: any) => parseInt(time.slice(0,2)) >= new Date().getHours() && parseInt(time.slice(3,5)) <= new Date().getMinutes()) != 'undefined')
      ? timeTable.value.find((time: string, index: number, arr: string[]) => parseInt(time.slice(0,2)) >= new Date().getHours() && parseInt(time.slice(3,5)) <= new Date().getMinutes()
      &&  (parseInt(arr[index + 1].slice(0,2)) > new Date().getHours() || parseInt(arr[index + 1].slice(3,5)) >= new Date().getMinutes())
      )
      : `-`
})

const returnTime = computed(() => {
  if (arrivalTime.value !== undefined) return secondTimeTable.value.find((time: string, _:any) =>
        (parseInt(time.slice(0,2)) === parseInt(arrivalTime.value!.slice(0,2))
            && (parseInt(time.slice(3,5)) >= new Date().getMinutes() ||  parseInt(time.slice(3,5)) > parseInt(arrivalTime.value!.slice(3,5))) )
        || (parseInt(time.slice(0,2)) > new Date().getHours()
            && parseInt(time.slice(3,5)) < new Date().getMinutes())
      || (parseInt(time.slice(0,2)) > new Date().getHours()
          && parseInt(time.slice(3,5)) >= new Date().getMinutes())
    )

  return ` `
})*/


</script>

<template>
  <FlexMinified  :column="true" items="center">
    <h3 class="flex max-sm:flex-col justify-center gap-x-1 items-center text-center font-bold text-3xl rainbow">
      <Icon icon="majesticons:map-simple-destination" class="size-12 " />
      <span class="block"> Καστοριά - Μεσοποταμία</span>
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
      <p class="text-pink-300 font-semibold text-center">Καστοριά – Μανιάκοι – Κολοκυνθού – Μεσοποταμία</p>
      <img src="https://astikoktelkastorias.gr/wp-content/uploads/2023/10/mesopotamia-2.png"
           class="rounded-lg mt-3 bg-red-500 border-2 border-eggplant-100 w-full"
           alt="mesopotamia image">

<!--      <FlexMinified :column="true" items="center"
                    class=" lg:col-span-3 my-3 max-sm:border border-t-white/50 border-transparent w-full "
      ><span class="mb-3 text-center  text-xl font-bold text-red-500 "><Icon icon="stash:circle-dot-duotone" class="inline animate-pulse" /> Live Αφίξεις </span>

        <FlexMinified :column="true"
                      class="w-full text-sm"
                      v-if="
          (parseInt(returnTime.slice(0,2)) === parseInt(arrivalTime.slice(0,2))) && (new Date().getMinutes() < parseInt(returnTime.slice(3,5)))
          ||  (parseInt(returnTime.slice(0,2)) > parseInt(arrivalTime.slice(0,2))) && (new Date().getMinutes() > parseInt(returnTime.slice(3,5)))"

        >
          <FlexMinified gap-x="4" justify="around" items="center" class="bg-emerald-500 rounded-lg  text-center animate-pulse">
            <h5 class="bg-emerald-800 h-full rounded-l-lg w-full font-semibold py-1.5">Τρέχων: Μετάβση</h5>
            <p class="w-full text-gray-600 ">Ώρα Αναχώρησης: {{arrivalTime}}</p>
            <p class="w-full text-gray-600 ">Άφιξη σε: {{(returnTime = "-") ? timeTable[ (timeTable.findIndex( (value: string) => value === arrivalTime) === timeTable.length-1) ? 0 : timeTable.findIndex((value: string) => value === arrivalTime) + 1] : returnTime }}</p>

          </FlexMinified>
          <FlexMinified gap-x="4" justify="around" items="center" class="mt-4 rounded-lg  bg-orange-500 text-center  ">
            <h5 class="bg-orange-800 h-full rounded-l-lg py-1.5 w-full font-semibold">Επόμενο: {{ (returnTime === `-`) ? `Μετάβαση` : `Επιστροφή` }}</h5>
            <p class="w-full text-gray-100 ">Ώρα Αναχώρησης: {{ (returnTime === `-`) ? timeTable[ (timeTable.findIndex((value: string) => value === arrivalTime) === timeTable.length-1) ? 0 : timeTable.findIndex((value: string) => value === arrivalTime) + 1] : returnTime}}</p>
            <p class="w-full text-gray-100 ">Ώρα Άφιξης: {{ (returnTime === `-`) ? timeTable[ (timeTable.findIndex((value: string) => value === arrivalTime) === timeTable.length-1) ? 0 : timeTable.findIndex((value: string) => value === arrivalTime) + 2] : timeTable[ (timeTable.findIndex((value: string) => value === arrivalTime) === timeTable.length-1) ? 0 : timeTable.findIndex((value: string) => value === arrivalTime) + 1] }}
            </p>
          </FlexMinified>
        </FlexMinified>

        <FlexMinified v-else
                      :column="true"
                      class="w-full sm:w-[100%] text-sm"
        >
          <FlexMinified gap-x="4" justify="around" items="center" class="bg-emerald-500 rounded-lg  text-center animate-pulse">
            <h5 class="bg-emerald-800 h-full text-green-300 rounded-l-lg w-full font-semibold py-1.5">Τρέχων: Επιστροφή</h5>
            <p class="w-full text-gray-600 ">Ώρα Αναχώρησης: {{returnTime}}</p>
            <p class="w-full text-gray-600 ">Άφιξη σε: {{ timeTable[ (timeTable.findIndex((value: string) => value === arrivalTime) === timeTable.length-1) ? 0 : timeTable.findIndex((value: string) => value === arrivalTime) + 1]}}</p>

          </FlexMinified>

          <FlexMinified gap-x="4" justify="around" items="center" class="mt-4 rounded-lg  bg-orange-500 text-center">
            <h5 class="bg-orange-800 h-full text-orange-200 rounded-l-lg py-1.5 w-full font-semibold">Επόμενο: Μετάβαση</h5>
            <p class="w-full text-gray-100 ">Ώρα Αναχώρησης: {{ timeTable[ (timeTable.findIndex((value: string) => value === arrivalTime) === timeTable.length-1) ? 0 : timeTable.findIndex((value: string) => value === arrivalTime) + 1]}}</p>
            <p class="w-full text-gray-100 ">Άφιξη σε: {{secondTimeTable[ (secondTimeTable.findIndex((value: string) => value === returnTime) === secondTimeTable.length-1) ? 0 : secondTimeTable.findIndex((value: string) => value === returnTime) + 1]}}"</p>
          </FlexMinified>
        </FlexMinified>
      </FlexMinified>-->

    </FlexMinified>


    <FlexMinified :column="true" items="center" class="lg:col-span-2 max-sm:border border-transparent border-t-white/50  ">
      <h3 class="text-center mb-4  text-xl font-bold text-emerald-500">Πρόγραμμα Λεωφορείου {{`${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`}}</h3>

        <FlexMinified :column="true" items="center" class=" w-full text-sm text-left rtl:text-right text-eggplant-50">

          <FlexMinified justify="around" class="sticky w-full top-0 rounded-t-2xl text-center text-pink-400 text-sm uppercase bg-eggplant-800 ">
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
              <div  class="px-6 py-4 font-medium whitespace-nowrap w-full"
                   :class="( parseInt(time.slice(0,2)) === new Date().getHours()
            && parseInt(time.slice(3,5)) <= new Date().getMinutes())
            && (new Date().getMinutes() < parseInt(timeTable[(index != undefined) ? index-1 : 0].slice(3,5))
            ? parseInt(time.slice(3,5)) <= parseInt(timeTable[(index != undefined) ? index-1 : 0].slice(3,5))
            : parseInt(time.slice(3,5)) >= parseInt(timeTable[(index != undefined) ? index-1 : 0].slice(3,5)))
            && parseInt(time.slice(0,2)) >= parseInt(timeTable[(index != undefined) ? index-1 : 0].slice(0,2))

            ? `bg-emerald-400 text-gray-600 animate-pulse`
                : null"
              >
              {{time }}
              </div>

              <div class="px-6 py-4 w-full"
                  :class="(
              secondTimeTable[index] != undefined
            && parseInt(secondTimeTable[index].slice(0,2)) >= new Date().getHours()
            && parseInt(secondTimeTable[index].slice(3,5)) <= new Date().getMinutes())
            ? `bg-emerald-400 text-gray-600 animate-pulse`
                : null"
              >
                {{(secondTimeTable[index] === undefined) ? ' ' : secondTimeTable[index] }}
              </div>
            </FlexMinified>
          </div>



          <div v-else class="text-neutral-200 rounded-b-2xl text-center block w-full max-md:h-[35vh] mb-5 md:h-[45vh] lg:h-[36vh] xl:h-[35vh] 2xl:h-[40vh] min-[1800px]:h-[57vh] min-[2200px]:h-[50vh] overflow-y-scroll">
             <FlexMinified class="border-b w-full bg-eggplant-500 border-gray-700" justify="around"
              v-for="(time,index) in secondTimeTable"
              :key="index"
              >
                <div  class="px-6 py-4 w-full font-medium whitespace-nowrap"
                      :class="( timeTable[index] != undefined
                      && parseInt(timeTable[index].slice(0,2)) === new Date().getHours()
                      && parseInt(timeTable[index].slice(3,5)) <= new Date().getMinutes())
                      && (new Date().getMinutes() < parseInt(timeTable[(index != undefined) ? index-1 : 0].slice(3,5))
                      ? parseInt(timeTable[index].slice(3,5)) <= parseInt(timeTable[(index != undefined) ? index-1 : 0].slice(3,5))
                      : parseInt(timeTable[index].slice(3,5)) >= parseInt(timeTable[(index != undefined) ? index-1 : 0].slice(3,5)))
                      && parseInt(timeTable[index].slice(0,2)) >= parseInt(timeTable[(index != undefined) ? index-1 : 0].slice(0,2))
                      ?  `bg-emerald-400 text-gray-600 animate-pulse`
                      : null"
                >
                {{(timeTable[index] === undefined) ? ' ' : timeTable[index] }}
                </div>


                <div class="px-6 py-4 w-full"
                  style="z-index: 1"
                  :class="( parseInt(time.slice(0,2)) >= new Date().getHours()
                  && parseInt(time.slice(3,5)) <= new Date().getMinutes())

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