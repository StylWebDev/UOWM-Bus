<script setup lang="ts">

import FlexMinified from "../../components/FlexMinified.vue";
import {Icon} from "@iconify/vue";
import GridMinified from "../../components/GridMinified.vue";
import {computed} from "vue";

const timeTable = [
  "7:55",
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:30",
  "20:30",
  "21:30",
  '22:30',

]

const goTable = [
  "6:45",
  "7:30",
  "8:30",
  "9:30",
  "10:30",
  "11:30",
  "12:30",
  "13:30",
  "14:30",
  "15:30",
  "16:30",
  "17:30",
  "18:30",
  "20:00",
  "21:00",
  "21:50"
]

const bern = computed<string | undefined>(() => {
  return timeTable.find((time, _) =>
      parseInt(time.slice(0,2)) === new Date().getHours()
      && parseInt(time.slice(3,5)) <= new Date().getMinutes())
})

const bern2 = computed(() => {
  if (bern.value !== undefined) return goTable.find((time, _) =>
        (parseInt(time.slice(0,2)) === new Date().getHours()
            && (parseInt(time.slice(3,5)) >= new Date().getMinutes() ||  parseInt(time.slice(3,5)) > parseInt(bern.value!.slice(3,5))) )
        || (parseInt(time.slice(0,2)) > new Date().getHours()
            && parseInt(time.slice(3,5)) < new Date().getMinutes())
    )

  return undefined
})

const currArrivalOn = computed(() => {
  return (parseInt(bern.value.slice(3,5)) < new Date().getMinutes()) ? (parseInt(bern2.value.slice(3,5)) - new Date().getMinutes())
      : (parseInt(bern2.value.slice(3,5)) - (new Date().getMinutes() - parseInt(bern.value.slice(3,5))))
})

const nextArrivalOn = computed(()=> {
  return  (parseInt(bern2.value.slice(3,5)) >= new Date().getMinutes())
      ? ( parseInt(bern2.value.slice(3,5)) - new Date().getMinutes() + parseInt(bern2.value.slice(3,5))) :  ( parseInt(bern2.value.slice(3,5)) + 60 - new Date().getMinutes())
})

const currArrivalOn2  = computed(() => {
  return (parseInt(timeTable[ (timeTable.findIndex(value => value === bern.value) === timeTable.length-1) ? 0 : timeTable.findIndex(value => value === bern.value) + 1].slice(3,5)) < new Date().getMinutes())
      ? ( parseInt(timeTable[ (timeTable.findIndex(value => value === bern.value) === timeTable.length-1) ? 0 : timeTable.findIndex(value => value === bern.value) + 1].slice(3,5)) + 60 - new Date().getMinutes() )
      :  (parseInt(timeTable[ (timeTable.findIndex(value => value === bern.value) === timeTable.length-1) ? 0 : timeTable.findIndex(value => value === bern.value) + 1].slice(3,5)) - (new Date().getMinutes() - parseInt(bern2.value.slice(3,5))))
})

const nextArrivalOn2 = computed(() => {
  return (parseInt(timeTable[ (timeTable.findIndex(value => value === bern.value) === timeTable.length-1) ? 0 : timeTable.findIndex(value => value === bern.value) + 1].slice(3,5)) < new Date().getMinutes())
      ? ( 60 - new Date().getMinutes() + parseInt(bern2.value.slice(3,5)))
      :  ( parseInt(bern2.value.slice(3,5)) - new Date().getMinutes() )
})
</script>

<template>
  <FlexMinified class="h-[10%]" :column="true" items="center">
    <h3 class="flex justify-center gap-x-1 items-center text-center font-bold text-3xl rainbow">
      <Icon icon="majesticons:map-simple-destination" class="size-12 " />
      <span class="block"> Καστοριά - Μεσοποταμία</span>
    </h3>
    <div class="h-0.5 w-[70vw] text-center rounded-full bg-rainbow"/>


  </FlexMinified>

  <GridMinified v-if=" (bern !== undefined && bern2 !== undefined)" columns="1" lg-columns="3" gap-x="5"
                class="bg-eggplant-950/85 md:rounded-xl mt-5 md:mx-10 px-5 pt-4"
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

      <FlexMinified :column="true" items="center"
                    class=" lg:col-span-3 my-3 border border-t-white/50 border-transparent w-full "
      >Αφίξεις

        <FlexMinified :column="true"
                      class="w-full"
                      v-if="
          (parseInt(bern2.slice(0,2)) === parseInt(bern.slice(0,2))) && (new Date().getMinutes() < parseInt(bern2.slice(3,5)))
          ||  (parseInt(bern2.slice(0,2)) > parseInt(bern.slice(0,2))) && (new Date().getMinutes() > parseInt(bern2.slice(3,5)))"

        >
          <FlexMinified gap-x="4" justify="around" class="bg-emerald-500 py-1.5 ">
            <h5>Τρέχων</h5>
            <p>Ώρα Αναχώρησης: {{bern}}</p>
            <p>Άφιξη σε: {{currArrivalOn }}"</p>

          </FlexMinified>
          <FlexMinified gap-x="4" justify="around" class="bg-orange-500 py-1.5 ">
            <h5>Επόμενο</h5>
            <p>Ώρα Αναχώρησης: {{ bern2}}</p>
            <p>Άφιξη σε: {{nextArrivalOn }}"
            </p>
          </FlexMinified>
        </FlexMinified>

        <FlexMinified v-else
                      :column="true"
                      class="w-full sm:w-[100%]"
        >
          <FlexMinified gap-x="4" justify="around" class="bg-emerald-500 py-1.5 ">
            <h5 class="bg-emerald-500">Τρέχων</h5>
            <p>Ώρα Αναχώρησης: {{bern2}}</p>
            <p>Άφιξη σε: {{ currArrivalOn2}}"</p>

          </FlexMinified>

          <FlexMinified gap-x="4" justify="around" class="mt-4 py-1.5 bg-orange-500">
            <h5>Επόμενο</h5>
            <p>Ώρα Αναχώρησης: {{ timeTable[ (timeTable.findIndex(value => value === bern) === timeTable.length-1) ? 0 : timeTable.findIndex(value => value === bern) + 1]}}</p>
            <p>Άφιξη σε: {{nextArrivalOn2}}"</p>
          </FlexMinified>
        </FlexMinified>
      </FlexMinified>

    </FlexMinified>

    <FlexMinified :column="true" items="center" class="lg:col-span-2  ">
      <h3 class="text-center  text-xl font-bold text-emerald-500">Πρόγραμμα Λεωφορείου {{`${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`}}</h3>

        <FlexMinified :column="true" items="center" class=" w-full text-sm text-left rtl:text-right text-eggplant-50">

          <FlexMinified justify="around" class="sticky w-full top-0 rounded-t-2xl text-center text-pink-400 text-sm uppercase bg-eggplant-800 ">
            <div class="px-6 py-3">
              ΜΕΤΑΒΑΣΗ
            </div>
            <div class="px-6 py-3">
              ΕΠΙΣΤΡΟΦΗ
            </div>
          </FlexMinified>




          <div v-if="timeTable.length >= goTable.length" class="text-neutral-200 rounded-b-2xl text-center block w-full max-md:h-[35vh] mb-5 md:h-[45vh] lg:h-[36vh] xl:h-[35vh] 2xl:h-[40vh] min-[1800px]:h-[57vh] min-[2200px]:h-[50vh] overflow-y-scroll">

            <FlexMinified class="border-b bg-eggplant-500 border-gray-700"
                justify="around"
                v-for="(time,index) in timeTable"
                :key="index"
            >
              <div  class="px-6 py-4 font-medium whitespace-nowrap "
                   :class="( parseInt(time.slice(0,2)) === new Date().getHours()
            && parseInt(time.slice(3,5)) <= new Date().getMinutes())
            && parseInt(time.slice(3,5)) >= parseInt(timeTable[(index != undefined) ? index-1 : 0].slice(3,5))
            && !(parseInt(bern2.slice(3,5)) <= new Date().getMinutes())
            ? `bg-emerald-400 text-gray-600 animate-pulse`
                : null"
              >
              {{time }}
              </div>

              <div class="px-6 py-4"
                  :class="(
              goTable[index] != undefined
            && parseInt(goTable[index].slice(0,2)) >= new Date().getHours()
            && parseInt(goTable[index].slice(3,5)) <= new Date().getMinutes())
            && bern2 === goTable[index]
            ? `bg-emerald-400 text-gray-600 animate-pulse`
                : null"
              >
                {{(goTable[index] === undefined) ? '-' : goTable[index] }}
              </div>
            </FlexMinified>
          </div>

          <div v-else class="text-neutral-200 rounded-b-2xl text-center block w-full max-md:h-[35vh] mb-5 md:h-[45vh] lg:h-[36vh] xl:h-[35vh] 2xl:h-[40vh] min-[1800px]:h-[57vh] min-[2200px]:h-[50vh] overflow-y-scroll">
             <FlexMinified class="border-b w-full bg-eggplant-500 border-gray-700" justify="around"
              v-for="(time,index) in goTable"
              :key="index"
              >
                <div  class="px-6 py-4 w-full font-medium whitespace-nowrap"
                      :class="( timeTable[index] != undefined
                      && parseInt(timeTable[index].slice(0,2)) === new Date().getHours()
                      && parseInt(timeTable[index].slice(3,5)) <= new Date().getMinutes())
                      && parseInt(timeTable[index].slice(3,5)) >= parseInt(timeTable[(index != undefined) ? index-1 : 0].slice(3,5))
                      && !(parseInt(bern2.slice(3,5)) <= new Date().getMinutes())
                      ?  `bg-emerald-400 text-gray-600 animate-pulse`
                      : null"
                >
                {{(timeTable[index] === undefined) ? '-' : timeTable[index] }}
                </div>
                <div class="px-6 py-4 w-full"
                  style="z-index: 1"
                  :class="( parseInt(time.slice(0,2)) >= new Date().getHours()
                  && parseInt(time.slice(3,5)) <= new Date().getMinutes())
                  && bern2 === time
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