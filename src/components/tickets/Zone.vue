<script setup lang="ts">
import FlexMinified from "../FlexMinified.vue";
import Label from "./zone/Label.vue";
import Info from "./zone/Info.vue";
import Ticket from "./zone/Ticket.vue";

defineProps<{
  tickets: any[]
}>()
</script>

<template>
  <FlexMinified :row="true" class=" max-xl:flex-col max-sm:w-screen">

    <FlexMinified :column="true" gap-y="3"
                  v-for="(ticket, ind) in tickets" :key="ind"
                  class="bg-eggplant-950/70 max-sm:border-y sm:border sm:w-fit border-white/50 md:rounded-xl mt-3 md:mx-10 px-5 py-4"
    >
     <Label :label="ticket.name_el" :index="ind"/>
      <Ticket :ticket="ticket" :index="ind"/>
      <Info/>
    </FlexMinified>
  </FlexMinified>
</template>

<style scoped>

</style>