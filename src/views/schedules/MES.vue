<script setup lang="ts">

import FlexMinified from "../../components/FlexMinified.vue";
import {Icon} from "@iconify/vue";
import GridMinified from "../../components/GridMinified.vue";
import {computed, ref} from "vue";

const time = ref(new Date().getHours().toString() + `:` + new Date().getMinutes().toString() );
const time2 = ref('20:20')
const time3 = ref('20:50')
const timeTable = [
  '01:20',
  '01:21',
  '01:40',
    '01:47',
  '21:40',
  '22:00',
  '22:20',
  '00:55',
]

const goTable = [
  '00:46',
  '01:32',
  '01:42',
  '01:48',
  '21:30',
  '21:50',
  '22:10',
  '22:30'
]

const bern = computed<string>(() => {
  return timeTable.findLast((time, index) =>
      parseInt(time.slice(0,2)) === new Date().getHours()
      && parseInt(time.slice(3,5)) <= new Date().getMinutes())
})

const bern2 = computed(() => {
  return goTable.find((time, index) =>
      (parseInt(time.slice(0,2)) === new Date().getHours()
      && (parseInt(time.slice(3,5)) >= new Date().getMinutes() ||  parseInt(time.slice(3,5)) > parseInt(bern.value.slice(3,5))) )
      || (parseInt(time.slice(0,2)) > new Date().getHours()
      && parseInt(time.slice(3,5)) < new Date().getMinutes())
  )
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

  <GridMinified columns="1" lg-columns="3"
                class="bg-eggplant-950/85 md:rounded-xl mt-5 lg:grid-flow-row lg:h-[70%] md:mx-10 justify-items-center"
  >
    <FlexMinified
        :column="true"
        items="center"
        class=" lg:pl-5"
    >
      <h3 class="text-xl font-bold text-pink-500">Διαδρομή</h3>
      <p class="text-pink-300 font-semibold text-center">Καστοριά – Μανιάκοι – Κολοκυνθού – Μεσοποταμία</p>
      <img src="https://astikoktelkastorias.gr/wp-content/uploads/2023/10/mesopotamia-2.png"
           class="rounded-lg mt-3 bg-red-500 border-2 border-eggplant-100
                 max-sm:w-[90%] max-md:w-[80%] max-lg:w-[80%]"
           alt="mesopotamia image">
    </FlexMinified>

    <FlexMinified :column="true" items="center" class=" w-full lg:col-span-2 lg:overflow-hidden ">
      <h3 class="text-center  text-xl font-bold text-emerald-500">Πρόγραμμα Λεωφορείου</h3>

      <div class="w-[90%] rounded-lg max-lg:h-[50vh]  max-sm:h-[40vh] mt-5 lg:h-full overflow-y-scroll">
        <table class=" w-full text-sm text-left rtl:text-right text-eggplant-50 ">
          <thead class="sticky top-0 rounded-t-2xl text-center text-pink-400 text-sm uppercase bg-eggplant-800 ">
          <tr>
            <th scope="col" class="px-6 py-3">
              ΜΕΤΑΒΑΣΗ
            </th>
            <th scope="col" class="px-6 py-3">
              ΕΠΙΣΤΡΟΦΗ
            </th>

          </tr>
          </thead>
          <tbody class="text-neutral-200 text-center">
            <tr class="border-b bg-eggplant-500 border-gray-700"
                v-for="(time,index) in timeTable"
                :key="index"

              :class="( parseInt(time.slice(0,2)) === new Date().getHours()
               && parseInt(bern.slice(3,5)) === parseInt(time.slice(3,5))
               && parseInt(time.slice(3,5)) <= new Date().getMinutes()
                && parseInt(timeTable[(index===0) ? 0 : index-1].slice(3,5)) < parseInt(time.slice(3,5)))
               ? `bg-emerald-400 text-gray-600 animate-pulse`
                : null"
            >
              <td  class="px-6 py-4 font-medium whitespace-nowrap ">
              {{time }}
              </td>
              <td class="px-6 py-4">
              {{goTable[index]}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </FlexMinified>

    <FlexMinified :column="true" items="center"
                  class=" lg:col-span-3 mt-3 border border-t-white/50 border-transparent w-[90%]"
    >Επόμενο Λεωφορείο
      <div v-if="
      (bern !== undefined && bern2 !== undefined)
      &&
      (
          (parseInt(bern2.slice(0,2)) === parseInt(bern.slice(0,2))) && (new Date().getMinutes() < parseInt(bern2.slice(3,5)))
          ||  (parseInt(bern2.slice(0,2)) > parseInt(bern.slice(0,2))) && (new Date().getMinutes() > parseInt(bern2.slice(3,5)))
          )
      ">
        <div>{{bern}} {{bern2}}</div>
      </div>
      <div v-else>
        <div>{{bern2}} {{ timeTable[ (timeTable.findIndex(value => value === bern) === timeTable.length-1) ? 0 : timeTable.findIndex(value => value === bern) + 1]}}</div>
      </div>
    </FlexMinified>
  </GridMinified>

</template>

<style scoped>

</style>