<script setup lang="ts">
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
     <TicketLabel :label="($i18n.locale === 'el') ? ticket.name_el : ticket.name" :index="ind"/>
      <Ticket :ticket="ticket" :index="ind"/>
      <Info/>
    </FlexMinified>
  </FlexMinified>
</template>

<style scoped>

</style>