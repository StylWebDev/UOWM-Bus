<script setup lang="ts">

import FlexMinified from "../components/FlexMinified.vue";
import {Icon} from "@iconify/vue";
import {useDataStore} from "../stores/data.ts";
import {useConfigureStore} from "../stores/configure.ts";
import {reactive, ref} from "vue";


const {getTickets, getData} = useDataStore();
const {trans} = useConfigureStore();
const areas = (await getData(Number(52100))).areas;

const data = await getTickets();

const zoneA = reactive(data.zoneA);
const zoneB = reactive(data.zoneB);
const tickets = ref([zoneA, zoneB]);

</script>

<template>
  <FlexMinified :column="true" items="center" gap-y="6">
    <FlexMinified  :column="true" items="center">
      <h3 class="flex justify-center gap-x-1 items-center text-center font-bold text-3xl rainbow">
        <Icon icon="material-symbols:transit-ticket-rounded" class="inline size-12 " />
        <span class="block uppercase">Εισητήρια</span>
      </h3>
      <div class="h-0.5 max-sm:w-full w-[70vw] text-center rounded-full bg-rainbow"/>

    </FlexMinified>
    <div class="w-fit border border-white/50 sm:rounded-2xl">
      <FlexMinified class="bg-eggplant-950/85 w-screen  sm:w-[80vw] lg:w-[70vw]  py-1 sm:rounded-t-xl text-pink-500 text-xl font-extrabold over">
        <p class="w-full text-center"><Icon icon="streamline:arrow-roadmap-solid" class="inline size-6"/> Δρομολόγια</p>
        <p class="w-full text-center"><Icon icon="material-symbols-light:detection-and-zone-sharp" class="inline size-8"/> Ζώνες</p>
      </FlexMinified>
      <FlexMinified :column="true" class=" bg-eggplant-700 sm:rounded-b-2xl  text-pink-100 overflow-hidden" justify="center">
        <FlexMinified v-for="(area,index) in areas" :key="index+1" class="border-b border-b-white/40 py-1">
          <RouterLink :to="`/schedule/${index+1}`"
                      class="w-full  text-center hover:text-pink-500 font-bold transition-colors duration-300 ease-linear">{{area.place.start.el.location}} - {{area.place.end.el.location}}</RouterLink>
          <p class="w-full text-center font-bold saturate-200" :class="(area.zone === 'A') ? 'text-blue-400' : 'text-red-500'">Ζώνη {{area.zone}}</p>
        </FlexMinified>
      </FlexMinified>
    </div>

    <FlexMinified :row="true" class=" max-xl:flex-col max-sm:w-screen">

      <FlexMinified :column="true" gap-y="3"
                    v-for="(ticket, index) in tickets" :key="index"
                    class="bg-eggplant-950/80 max-sm:border-y sm:border sm:w-fit border-white/50 md:rounded-xl mt-3 md:mx-10 px-5 py-4"
      >

        <h4 class=" text-center text-3xl font-extrabold"
            :class="(index===0) ? `text-blue-500` : `text-red-500`"
        >
          <Icon :icon="(index === 0) ? `mynaui:letter-a-waves-solid` : `mynaui:letter-b-waves-solid`"
                class="inline size-10"
          />
          {{ticket.name_el}}
        </h4>


        <div class="self-center h-0.5 w-80"
             :class="(index===0) ? `bg-blue-500` : `bg-red-500`"
        />


        <FlexMinified justify="around" gap-y="4" class="font-semibold max-sm:flex-col max-sm:items-center text-center sm:gap-x-20 ">
          <div :class="(index===0) ? `text-sky-500` : `text-emerald-500`">
            <h5 class="text-2xl sm:text-lg font-semibold text-center mb-2.5 align-middle" :class="(index===0) ? `text-yellow-500` : `text-pink-500`">
              <Icon icon="mdi:ticket-confirmation" class="inline size-8"/>
              Τύπος: Κανονικό
            </h5>
            <img :src="ticket.category.norm.url" alt="ZoneA_Norm" class="block rounded max-sm:w-96">
            <hgroup class="mt-1.5 text-emerald-300">
              <h6 class="text-xl font-bold">
                <Icon icon="ic:baseline-price-change" class="inline size-8"/>
                Τιμές:
              </h6>
              <p>Αυτόματου Πωλητή: <span class="text-yellow-300 font-light">{{ticket.category.norm.inside}}€</span></p>
              <p>Λεωφορείου: <span class="text-yellow-300 font-light">{{ticket.category.norm.outside}}€</span></p>
            </hgroup>
          </div>

          <div :class="(index===0) ? `text-sky-500` : `text-emerald-500`" class="max-sm:border-t max-sm:border-t-white/30 max-sm:pt-5">
            <h5 class="text-2xl sm:text-lg font-semibold text-center mb-2.5 align-middle" :class="(index ===0) ? `text-orange-500` : `text-sky-500`">
              <Icon icon="mdi:ticket-percent" class="inline size-8"/>
              Τύπος: Μειωμένο
            </h5>
            <img :src="ticket.category.low.url" alt="ZoneA_Low" class="block w-72 rounded max-sm:w-96">
            <hgroup class="mt-1.5 text-emerald-300">
              <h6 class="text-xl font-bold">
                <Icon icon="ic:baseline-price-change" class="inline size-8"/>
                Τιμές:
              </h6>
              <p>Αυτόματου Πωλητή: <span class="text-yellow-300 font-light">{{ticket.category.low.inside}}€</span></p>
              <p>Λεωφορείου: <span class="text-yellow-300 font-light">{{ticket.category.low.outside}}€</span></p>
            </hgroup>
          </div>
        </FlexMinified>
        <h3 class="px-2.5 mt-5 bg-yellow-200/30 font-semibold border rounded border-orange-300 text-sm self-center animate-pulse capitalize w-fit text-center text-orange-300 max-sm:mx-3"
            :class="trans"
        >
          <Icon icon="line-md:alert-twotone-loop" class="inline size-6"></Icon>
          Οι Φοιτητές Δικαιούνται Μειωμένο Εισητήριο!
        </h3>

      </FlexMinified>
    </FlexMinified>
  </FlexMinified>
</template>

<style scoped>

</style>