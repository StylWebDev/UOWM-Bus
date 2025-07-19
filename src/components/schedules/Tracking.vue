<script setup lang="ts">
import {Tracking} from "../../types.ts";
const {addTime} = useDataStore()
const {t} = useI18n();
const props = defineProps<Tracking>()
</script>

<template>
  <FlexMinified class=""
                :column="true"
                items="center"
  >
    <h3 class="text-xl font-bold text-pink-500">{{ t('schedule.h3') }}</h3>
    <p class="text-pink-300 font-semibold text-center">{{resolvedSchedule}}</p>
    <iframe :src="mapURL" class="w-full rounded-2xl" height="480"></iframe>
    <FlexMinified :column="true" items="center"
                  class=" lg:col-span-3 my-5 max-sm:border border-t-white/50 border-transparent w-full "
    ><span class="mb-3 text-center  text-xl font-bold text-red-500 "><Icon icon="stash:circle-dot-duotone" class="inline animate-pulse" /> {{ t('schedule.p1') }} </span>

      <FlexMinified :column="true"
                    class="w-full text-sm">

        <FlexMinified :column="true">
          <h3 class="text-center font-extrabold mb-1 uppercase text-emerald-400">{{t('schedule.st1')}}</h3>
          <FlexMinified gap-x="4" justify="around" items="center" class="rounded-t-lg text-center bg-emerald-500">
            <h5  class="bg-emerald-800 h-full rounded-tl-lg w-full font-semibold py-1.5">{{t('schedule.now')}}</h5>
            <p  class="w-full text-gray-100 ">{{ t('schedule.time1') }}: {{props.arrivalTime}}</p>
            <p class="w-full text-gray-100  pr-2">{{ t('schedule.time2') }}: {{addTime(props.arrivalTime, mins)}}</p>
          </FlexMinified>
          <FlexMinified gap-x="4" justify="around" items="center" class="rounded-b-lg text-center bg-lime-700">
            <h5  class="bg-lime-900 h-full rounded-bl-lg w-full font-semibold py-1.5">{{t('schedule.next')}}</h5>
            <p  class="w-full text-gray-100 ">{{ t('schedule.time1') }}: {{props.nextArrival}}</p>
            <p class="w-full text-gray-100  pr-2">{{ t('schedule.time2') }}: {{addTime(props.nextArrival, mins)}}</p>
          </FlexMinified>
        </FlexMinified>

          <FlexMinified :column="true" class="mt-4">
            <h3 class="text-center font-extrabold mb-1 uppercase text-orange-400">{{t('schedule.st2')}}</h3>
            <FlexMinified gap-x="4" justify="around" items="center" class=" rounded-t-lg  bg-orange-500 text-center  ">
              <h5 class="bg-orange-800 h-full rounded-tl-lg py-1.5 w-full font-semibold">{{t('schedule.now')}}</h5>
              <p class="w-full text-gray-100 ">{{ t('schedule.time1') }}: {{props.departureTime}}</p>
              <p class="w-full text-gray-100 ">{{ t('schedule.time2') }}: {{addTime(props.departureTime, mins)}}</p>
            </FlexMinified>
            <FlexMinified gap-x="4" justify="around" items="center" class=" rounded-b-lg  bg-amber-700 text-center  ">
              <h5 class="bg-amber-900 h-full rounded-bl-lg py-1.5 w-full font-semibold">{{t('schedule.next')}}</h5>
              <p class="w-full text-gray-100 ">{{ t('schedule.time1') }}: {{props.nextDeparture}}</p>
              <p class="w-full text-gray-100 ">{{ t('schedule.time2') }}: {{addTime(props.nextDeparture, mins)}}</p>
            </FlexMinified>
          </FlexMinified>
      </FlexMinified>
    </FlexMinified>
  </FlexMinified>
</template>