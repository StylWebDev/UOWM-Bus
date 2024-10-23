<script setup lang="ts">
import FlexMinified from "../components/FlexMinified.vue";
import {useConfigureStore} from "../stores/configure.ts";
import {storeToRefs} from "pinia";

const {menu} = storeToRefs(useConfigureStore());

defineProps<{
  routes: {name:string; link: string}[]
}>()
</script>

<template>
<FlexMinified :column="true" items="center" gap-y="10">
  <h2 class="mt-2 text-3xl font-extrabold">Menu</h2>
  <FlexMinified :column="true" items="center" class=" font-semibold text-lg" gap-x="2">
    <RouterLink v-for="(route, index) in routes"
                @click="menu=!menu"
                 :key="index"  :to="route.link"
                 active-class="text-fuchsia-500 underline underline-offset-8 decoration-2 after:hidden"
                 class="
      block hover:text-fuchsia-500 transition-all duration-300 ease-in
      after:block after:h-0.5 after:bg-fuchsia-500 after:w-[0%] after:hover:w-[100%] after:transition-all after:duration-300 after:ease-in"
    >
      {{route.name}}
    </RouterLink>
  </FlexMinified>
</FlexMinified>
</template>

<style scoped>

</style>