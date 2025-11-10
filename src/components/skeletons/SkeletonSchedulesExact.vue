<script setup lang="ts">

</script>

<template>
  <div class="opacity-70">
    <div>
      <FlexMinified :column="true" items="center" class="animate-pulse">
        <h3 class="flex justify-center gap-x-1 items-center text-center font-bold text-3xl md:text-4xl text-gray-300">
          <Icon icon="healthicons:i-schedule-school-date-time" class="size-12 2xl:size-16" />
          <span class="block uppercase">{{($i18n.locale.toString() === 'el') ? "ΑΠΟ - ΠΡΟΣ" : "FROM - TO"}}</span>
        </h3>
        <div class="h-0.5 w-[70vw] text-center rounded-full bg-gray-300"/>
      </FlexMinified>
    </div>

    <div class="flex flex-col md:flex-row gap-6 p-6 bg-neutral-50 animate-pulse overflow-hidden  md:rounded-xl mt-5 md:mx-10 px-5 pt-4 sm:border max-sm:border-y border-white/30">
      <!-- Left Section (Map + Live Tracking) -->
      <div class="flex flex-col gap-4 w-full md:w-1/3">
        <div class="h-7 w-80 self-center bg-gray-300 rounded"></div>
        <!-- Map Skeleton -->
        <div class="rounded-2xl bg-gray-200 animate-pulse h-[450px] w-full" />

        <!-- Live Tracking Section -->
        <div class="rounded-2xl bg-gray-100 p-4 flex flex-col gap-3">
          <div class="h-7 w-80 self-center bg-gray-300 rounded"></div>


          <!-- Two rows for "Μετάβαση" & "Επιστροφή" -->
          <div class="space-y-2 flex flex-col mt-5">
            <div class="h-4 w-40 self-center bg-gray-300 rounded"></div>
            <div
                class="rounded-xl bg-gray-200 p-3 flex justify-between"
            >
              <div class="space-y-1">
                <div class="h-4 w-24 bg-gray-300 rounded"></div>

                <div class="h-4 w-32 bg-gray-300 rounded"></div>
              </div>
              <div class="space-y-1">
                <div class="h-4 w-24 bg-gray-300 rounded"></div>

                <div class="h-4 w-32 bg-gray-300 rounded"></div>
              </div>
            </div>


            <div class="h-4 w-40 self-center bg-gray-300 rounded mt-3"></div>
            <div
                class="rounded-xl bg-gray-200 p-3 flex justify-between"
            >
              <div class="space-y-1">
                <div class="h-4 w-24 bg-gray-300 rounded"></div>

                <div class="h-4 w-32 bg-gray-300 rounded"></div>
              </div>
              <div class="space-y-1">
                <div class="h-4 w-24 bg-gray-300 rounded"></div>

                <div class="h-4 w-32 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Section (Schedule Table) -->
      <div class="flex-1 bg-gray-100 rounded-2xl p-4">
        <div class="flex justify-center">
          <div class="h-8 w-[60%] bg-gray-300 rounded"></div>
        </div>
        <!-- Table Header -->
        <div class="flex justify-around items-centre mb-4 mt-3">
          <div class="h-5 w-28 sm:w-44 bg-gray-300 rounded"></div>
          <div class="h-5 w-28 sm:w-44 bg-gray-300 rounded"></div>
        </div>

        <!-- Table Rows -->
        <div class="space-y-2 ">
          <div
              v-for="i in 15"
              :key="i"
              class="flex justify-around items-center bg-gray-200 rounded-xl p-3"
          >
            <div class="h-4 w-16 bg-gray-300 rounded"></div>
            <div class="h-4 w-16 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>