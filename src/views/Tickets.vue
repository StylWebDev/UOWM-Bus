<script setup lang="ts">

import FlexMinified from "../components/FlexMinified.vue";
import {Icon} from "@iconify/vue";
import {useDataStore} from "../stores/data.ts";
import {useConfigureStore} from "../stores/configure.ts";
import {reactive, ref} from "vue";


const {getTickets} = useDataStore();
const {trans} = useConfigureStore();

const data = await getTickets();

const zoneA = reactive(data.zoneA);
const zoneB = reactive(data.zoneB);
const tickets = ref([zoneA, zoneB]);
</script>

<template>
  <FlexMinified  :column="true" items="center">
    <h3 class="flex max-sm:flex-col justify-center gap-x-1 items-center text-center font-bold text-3xl rainbow">
      <Icon icon="material-symbols:transit-ticket-rounded" class="size-12 " />
      <span class="block">Εισητήρια</span>
    </h3>
    <div class="h-0.5 max-sm:w-full w-[70vw] text-center rounded-full bg-rainbow"/>

  </FlexMinified>

  <FlexMinified :column="true" class="mt-5">
    <h3 class="px-2.5 bg-yellow-200/30 border rounded border-orange-300 self-center animate-pulse capitalize w-fit text-xl font-bold text-center text-orange-300"
        :class="trans"
    >
      <Icon icon="line-md:alert-twotone-loop" class="inline size-10"></Icon>
      όλοι Οι Φοιτητές Δικαιούνται Μισό Εισητήριο!
    </h3>

    <FlexMinified :column="true" gap-y="3"
                  v-for="(ticket, index) in tickets" :key="index"
                  class="sm:bg-eggplant-950/80 md:rounded-xl mt-3 md:mx-10 px-5 py-4"
    >
      <h4 class=" text-center text-2xl font-extrabold"
      :class="(index===0) ? `text-blue-500` : `text-emerald-500`"
      >{{ticket.name_el}}</h4>
      <hr class="self-center w-72 "
          :class="(index===0) ? `bg-pink-500` : `bg-rainbow`"
      >
      <FlexMinified justify="around" class="font-semibold">
        <div :class="(index===0) ? `text-sky-500` : `text-emerald-500`">
          <h5 class="text-lg font-semibold text-center mb-2.5" :class="(index===0) ? `text-yellow-500` : `text-pink-500`">Τύπος: Ολόκληρο</h5>
          <img :src="ticket.category.norm.url" alt="ZoneA_Norm" class="block rounded">
          <p class="mt-1.5">Τιμή Αυτόματου Πωλητή: <span class="text-yellow-300 font-normal">{{ticket.category.norm.inside}}€</span></p>
          <p>Τιμή Λεωφορείου: <span class="text-yellow-300 font-normal">{{ticket.category.norm.outside}}€</span></p>
        </div>
        <div :class="(index===0) ? `text-sky-500` : `text-emerald-500`">
          <h5 class="text-lg font-semibold text-center mb-2.5" :class="(index===0) ? `text-red-500` : `text-sky-500`">Τύπος: Μισό</h5>
          <img :src="ticket.category.low.url" alt="ZoneA_Low" class="block w-72 rounded">
          <p class="mt-1.5">Τιμή Αυτόματου Πωλητή: <span class="text-yellow-300 font-normal">{{ticket.category.low.inside}}€</span></p>
          <p>Τιμή Λεωφορείου: <span class="text-yellow-300 font-normal">{{ticket.category.low.outside}}€</span></p>
        </div>
      </FlexMinified>
    </FlexMinified>
  </FlexMinified>

</template>

<style scoped>

</style>