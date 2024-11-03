<script setup lang="ts">

import FlexMinified from "../components/FlexMinified.vue";
import {Icon} from "@iconify/vue";
import {useDataStore} from "../stores/data.ts";
import {reactive, ref} from "vue";
import ZonePerArea from "../components/tickets/ZonePerArea.vue";
import Zone from "../components/tickets/Zone.vue";


const {getTickets, getData} = useDataStore();
const areas = (await getData(Number(52100))).areas;

const data = await getTickets();

const zoneA = reactive(data.zoneA);
const zoneB = reactive(data.zoneB);
const tickets = ref([zoneA, zoneB]);

</script>

<template>
  <FlexMinified :column="true" items="center" gap-y="6">
    <Transition appear enter-from-class="opacity-0 -translate-y-full" appear-active-class="transition-all duration-700 ease-linear">
      <div>
        <FlexMinified  :column="true" items="center">
          <h3 class="flex justify-center gap-x-1 items-center text-center font-bold text-3xl rainbow">
            <Icon icon="material-symbols:transit-ticket-rounded" class="inline size-12 " />
            <span class="block uppercase">Εισητήρια</span>
          </h3>
          <div class="h-0.5 max-sm:w-full w-[70vw] text-center rounded-full bg-rainbow"/>
        </FlexMinified>
        <ZonePerArea class="mt-6" :areas="areas"/>
      </div>

    </Transition>
    <Transition appear enter-from-class="opacity-0 scale-50" appear-active-class="transition-all duration-700 ease-linear">
      <Zone :tickets="tickets"/>
    </Transition>

  </FlexMinified>
</template>
