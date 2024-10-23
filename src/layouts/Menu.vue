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
  <h2 class="mt-2 text-5xl text-cyan-500 font-extrabold">Menu</h2>
  <FlexMinified :column="true" items="center" class=" font-semibold text-lg">
    <RouterLink v-for="(route, index) in routes"
                @click="menu=!menu"
                 :key="index"  :to="route.link"
                 active-class="bg-cyan-700 text-white after:hidden"
                 class="block w-screen text-center hover:text-cyan-700 py-4 transition-all text-2xl duration-300 ease-in hover:bg-white"
    >
      {{route.name}}
    </RouterLink>
  </FlexMinified>
</FlexMinified>
</template>

<style scoped>

</style>