<script setup lang="ts">
import { ref } from 'vue'
import {Icon} from "@iconify/vue";
const isOpen = ref(false);

</script>
<template>
  <div class="relative inline-block text-left">
    <div>
      <button @click="isOpen = !isOpen" class="max-md:bg-eggplant-700 border-white max-md:focus:text-white max-md:border max-md:focus:border-none max-md:focus:bg-black max-md:px-2 flex justify-center gap-1 items-center w-full rounded-md shadow-sm  py-2 px-1  text-sm font-medium text-yellow-500   focus:outline-none cursor-pointer" >
        <Icon :icon="($i18n.locale.toString() === 'el') ? `emojione:flag-for-greece` : `emojione:flag-for-united-states`" class="inline size-7 hover:contrast-200 hover:invert-100 transition-all duration-300 ease-in" />
        <span class="md:hidden font-semibold text-yellow-500 text-xl">{{($i18n.locale.toString()==='el') ? `EL` : `EN` }}</span>
      </button>
    </div>
    <div
        v-if="isOpen"
        class="origin-top-right absolute -right-1.5 md:-right-5 mt-4 w-fit rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
    >
      <div class="py-1">
        <button
            @click="$i18n.locale='en'; isOpen=!isOpen"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-center cursor-pointer "
        >
          <Icon icon="emojione:flag-for-united-states" class="inline " />
          English
        </button>
        <button
            @click="$i18n.locale='el';  isOpen=!isOpen"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-center cursor-pointer"
        >
          <Icon icon="emojione:flag-for-greece" class="inline" />
          Ελληνικά
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* Optional custom styles */
</style>