<script setup lang="ts">

import {Icon} from "@iconify/vue";
import FlexMinified from "../components/FlexMinified.vue";
import Sections from "../components/about/Sections.vue";
</script>

<template>
  <FlexMinified :column="true" gap-y="4">
    <FlexMinified  :column="true" items="center">
      <h3 class="flex justify-center gap-x-1 items-center text-center font-bold text-3xl rainbow">
        <Icon icon="material-symbols:transit-ticket-rounded" class="inline size-12 " />
        <span class="block uppercase">Σχετικά</span>
      </h3>
      <div class="h-0.5 max-sm:w-full w-[70vw] text-center rounded-full bg-rainbow"/>
    </FlexMinified>
    <div>
      <p class="max-[400px]:text-base text-center text-xl font-semibold text-emerald-500 capitalize px-1">Η εν λόγω ιστοσελίδα κατασκευάστηκε καθαρά για μαθησιακούς και μη κερδοσκοπικούς σκοπούς!</p>
      <p class="max-[400px]:text-sm text-center text-white text-lg semi px-1 mt-2.5">
        Για περαιτέρω πληροφοριές σχετικα με το <strong class="text-yellow-500">Πανεπιστήμιο</strong>, επικοινωνία με τον <strong class="text-pink-500">Developer</strong> ή για την έυρεση περισσότερων δρομολογίων των <strong class="text-blue-400">Αστικών Καστοριάς</strong> , μεταβείτε στους παρακάτω συνδέσμους:</p>
    </div>
    <Sections class="max-sm:px-2 z-20"/>
  </FlexMinified>

</template>

<style scoped>

</style>