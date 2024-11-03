<script setup lang="ts">
import FlexMinified from "../components/FlexMinified.vue";

import {useConfigureStore} from "../stores/configure.ts";
const {trans} = useConfigureStore()
</script>

<template>
<FlexMinified items="center" justify="between" class="sm:h-full max-xl:justify-center max-xl:flex-col xl:flex-row">
  <Transition appear enter-from-class="scale-0 opacity-0" appear-active-class="transition-all duration-700 ease-in">
    <FlexMinified :column="true" class="w-full sm:pl-8 max-xl:items-center" gap-y="4">
      <FlexMinified :column="true" items="center"
                    class="max-[411px]:text-2xl xl:flex-row text-5xl min-[2000px]:text-7xl sm:self-start font-bold w-full rainbow max-xl:text-center">
        <img src="../assets/logo.webp" alt="logo" class="max-[406px]:size-16 max-md:size-24 size-40 xl:size-16 mr-4">
        <span class="align-middle">UOWM Student Bus</span>
      </FlexMinified>

      <p class="max-[411px]:text-base max-sm:text-xl text-xl  max-xl:text-center font-light min-[2000px]:text-2xl">
        Η ιστοσελίδα UOWMBus παρέχει πύλη πληροφοριών για τις συγκοινωνίες του <strong>Πανεπιστημίου Δυτικής Μακεδονίας (ΠΔΜ)</strong> στη πόλη της Καστοριάς.
        Η πλατφόρμα περιλεμάβνει το  πρόγραμμα των δρομολογίων λεωφορείων που εξυπηρετούν τις πανεπιστημιακές σχολές, καθώς και δρομολόγια που συνδέουν την πόλη της Καστοριάς με άλλες κοντινές περιοχές.<br>
        <br class="xl:hidden">
        Επιπλέον, θα βρείτε πληροφορίες για τις ώρες αναχώρησης/άφιξης των λεωφορίων, με ενημερώσεις για τυχόν αλλαγές ή καθυστερήσεις.
        <span class="max-sm:hidden">
        <br><br>
      Το UOWMBus έχει σχεδιαστεί ώστε να προσφέρει μία απλή και γρήγορη εμπειρία για φοιτητές, καθηγητές και εργαζόμενους του πανεπιστημίου, δίνοντάς τους τη δυνατότητα να προγραμματίζουν εύκολα τις μετακινήσεις τους.
      </span>
      </p>

      <FlexMinified
          class="gap-x-10 font-semibold text-xl min-[2000px]:text-2xl max-[411px]:text-base"
      >
        <RouterLink class="px-4 py-1 bg-black rounded-full hover:bg-white hover:text-black" to="/schedule" :class="trans">Δρομολόγια</RouterLink>
        <RouterLink class="px-4 py-1 bg-blue-500 rounded-full hover:bg-white hover:text-black" :class="trans" to="/tickets">Εισητήρια</RouterLink>
      </FlexMinified>
    </FlexMinified>
  </Transition>
  <Transition appear enter-from-class="translate-x-full opacity-0" appear-active-class="transition-all duration-1000 ease-linear">
    <FlexMinified justify="end" class="w-full max-xl:hidden">
      <img src="../assets/busImg.webp" alt="logo" class=" block size-[50%] xl:size-[75%] brightness-75 saturate-200 contrast-150 pointer-events-none ">
    </FlexMinified>
  </Transition>
</FlexMinified>
</template>