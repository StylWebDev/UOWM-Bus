<script setup lang="ts">

</script>

<template>
    <div class="flex flex-col items-center gap-8  opacity-70 animate-pulse">
      <FlexMinified  :column="true" items="center">
        <h3 class="flex justify-center gap-x-1 items-center text-center font-bold text-3xl text-neutral-300">
          <Icon icon="material-symbols:transit-ticket-rounded" class="inline size-12 " />
          <span class="block uppercase">{{$t('ticket.h3')}}</span>
        </h3>
        <div class="h-0.5 max-sm:w-full w-[70vw] text-center rounded-full bg-neutral-300"/>
      </FlexMinified>
      <!-- Top Table Skeleton -->
      <div class="bg-neutral-200 rounded-2xl p-4 w-screen  sm:w-[80vw] lg:w-[70vw]">

        <div class="flex justify-around mb-4">
          <div class="h-6 w-52  bg-neutral-300 rounded"></div>
          <div class="h-6 w-32 bg-neutral-300 rounded"></div>
        </div>

        <!-- Rows -->
        <div class="space-y-2">
          <div
              v-for="i in 8"
              :key="i"
              class="flex justify-around bg-neutral-200 rounded-lg p-3"
          >
            <div class="h-4 w-40 bg-neutral-300 rounded"></div>
            <div class="h-4 w-20 bg-neutral-300 rounded"></div>
          </div>
        </div>
      </div>

      <!-- Zone Cards Skeleton -->
      <div class="grid md:grid-cols-2 gap-6 w-full justify-items-center">
        <div
            v-for="zone in 2"
            :key="zone"
            class="bg-neutral-100 rounded-2xl p-10 flex flex-col gap-4 sm:w-[80%] w-full"
        >
          <!-- Zone Header -->
          <div class="flex justify-around items-center">
            <div class="h-4 w-20 bg-neutral-300 rounded"></div>
            <div class="h-4 w-20 bg-neutral-300 rounded"></div>
          </div>

          <!-- Ticket Types (2 per zone) -->
          <div class="grid grid-cols-2 gap-4">
            <div
                v-for="t in 2"
                :key="t"
                class=" rounded-xl justify-center  flex flex-col gap-3"
            >
              <!-- Ticket Image Placeholder -->
              <div class="h-24 bg-neutral-300 rounded-md"></div>
              <div class="h-4 w-16  bg-neutral-300 rounded self-center"></div>
              <div class="h-4 w-28  bg-neutral-300 rounded self-center"></div>
              <div class="h-4 w-20  bg-neutral-300 rounded self-center"></div>

            </div>
          </div>

          <!-- Footer Note -->
          <div class="h-5 w-64 bg-neutral-300 rounded self-center mt-3"></div>
        </div>
      </div>
    </div>
  </template>

<style scoped>

</style>