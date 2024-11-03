<script setup lang="ts">
import FlexMinified from "../../FlexMinified.vue";
import {onMounted} from "vue";

const props = defineProps<{
  timeTable: string[],
  secondTimeTable: string[],
  startTime: string
}>();

onMounted(() => {
  if (props.timeTable.length >= props.secondTimeTable.length) {
    props.timeTable.forEach((_: string, index: number) => {
      if (index >= props.secondTimeTable.length) {
        props.secondTimeTable.push('-')
      }
    })
  }
  else {
    props.secondTimeTable.forEach((_: string, index: number) => {
      if (index >= props.timeTable.length) {
        props.timeTable.push('-')
      }
    })
  }
})

</script>

<template>
  <FlexMinified :column="true" items="center" class="lg:col-span-2 max-sm:border border-transparent border-t-white/50  ">
    <h3 class="text-center mb-4  text-xl font-bold text-emerald-500">Πρόγραμμα Λεωφορείου {{`${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`}}</h3>

    <FlexMinified :column="true" items="center" class=" w-full border border-white/30 text-sm text-left rtl:text-right text-eggplant-50 bg-eggplant-500/50 mb-5 rounded-t-2xl rounded-b-2xl ">

      <FlexMinified justify="around" class="sticky w-full top-0 rounded-t-2xl text-center text-pink-400 text-sm uppercase bg-eggplant-800 font-semibold ">
        <div class="px-6 py-3">
          ΜΕΤΑΒΑΣΗ
        </div>
        <div class="px-6 py-3">
          ΕΠΙΣΤΡΟΦΗ
        </div>
      </FlexMinified>
      <div class="text-neutral-200 rounded-b-2xl text-center block w-full max-md:h-[35vh]  md:h-[45vh] lg:h-[36vh] xl:h-[35vh] 2xl:h-[40vh] min-[1800px]:h-[57vh] min-[2200px]:h-[50vh] overflow-y-auto">
        <FlexMinified class="border-b bg-eggplant-500 border-gray-700"
                      justify="around"
                      v-for="(time,index) in props.timeTable"
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
               :class="( props.secondTimeTable[index] === startTime )
            ? `bg-emerald-400 text-gray-600 animate-pulse`
                : null"
          >
            {{props.secondTimeTable[index]}}
          </div>
        </FlexMinified>
      </div>
    </FlexMinified>
  </FlexMinified>
</template>

<style scoped>

</style>