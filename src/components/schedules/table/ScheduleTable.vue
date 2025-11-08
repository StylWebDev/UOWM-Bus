<script setup lang="ts">
import {TimingTable} from "../../../types.ts";
const props = defineProps<TimingTable>();

const timeTable = ref<string[]>([...props.timeTable])
const secondTimeTable = ref<string[]>([...props.secondTimeTable])

// const {addTime, dateToTimeStamp} = useDataStore()
// const date = ref<string>(dateToTimeStamp(new Date().getHours(), new Date().getMinutes()))
//
// const stopSchedule = ref(
//     (addTime(props.secondTimeTable[props.secondTimeTable.length-1], props.mins) < date.value || (date.value < props.timeTable[0] || date.value < props.secondTimeTable[0]))
// )

const route = useRoute()

onMounted(() => {
  if (timeTable.value.length >= secondTimeTable.value.length) {
    timeTable.value.forEach((_: string, index: number) => {
      if (index >= secondTimeTable.value.length) {
        secondTimeTable.value.push('-')
      }
    })
  }
  else {
    secondTimeTable.value.forEach((_: string, index: number) => {
      if (index >= timeTable.value.length) {
        timeTable.value.push('-')
      }
    })
  }
})

const isAEI = computed<number>( () => {
  if (['1','4'].includes(route.params.id.toString())) return  (new Date().getDay() == 6 ) ? 2 : (new Date().getDay() == 7 ) ? 1 : 0;
  return 0;
})
</script>

<template>
  <FlexMinified :column="true" items="center" class="lg:col-span-2 max-sm:border border-transparent border-t-white/50  ">
    <h3 class="text-center mb-4  text-xl font-bold text-emerald-500">{{ $t('schedule.h4') }} {{`${new Date().getDate() + isAEI }/${new Date().getMonth()}/${new Date().getFullYear()}`}}</h3>

    <FlexMinified :column="true" items="center" class=" w-full border border-white/30 text-sm text-left rtl:text-right text-eggplant-50 bg-eggplant-500/50 mb-5 rounded-t-2xl rounded-b-2xl ">

      <FlexMinified justify="around" class="sticky w-full top-0 rounded-t-2xl text-center text-pink-400 text-sm uppercase bg-eggplant-800 font-semibold ">
        <div class="px-6 py-3 uppercase">
          {{ $t('schedule.st1') }}
        </div>
        <div class="px-6 py-3 uppercase">
          {{ $t('schedule.st2') }}
        </div>
      </FlexMinified>
      <div class="text-neutral-200 rounded-b-2xl text-center block w-full max-md:h-[35vh] md:h-[700px] lg:h-[800px] xl:h-[700px] overflow-y-auto">
        <FlexMinified class="border-b bg-eggplant-500 border-gray-700"
                      justify="around"
                      v-for="(time,index) in timeTable"
                      :key="index"
        >
          <div  class="px-6 py-4 font-medium whitespace-nowrap w-full "
                :class="( (time === arrivalTime ) || timeTable[0] === timeTable[timeTable.length-1])
            ? `bg-emerald-400 text-gray-600 animate-pulse`
                : null"
          >
            {{time }}
          </div>

          <div class="px-6 py-4 w-full"
               :class="( (secondTimeTable[index] === departureTime ) || secondTimeTable[0] === secondTimeTable[secondTimeTable.length-1])
            ? `bg-orange-400 text-gray-600 animate-pulse`
                : null"
          >
            {{secondTimeTable[index]}}
          </div>
        </FlexMinified>
      </div>
    </FlexMinified>
  </FlexMinified>
</template>

<style scoped>
</style>