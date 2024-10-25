<script setup lang="ts">
import Header from "./layouts/Header.vue";
import Menu from "./layouts/Menu.vue"
import {useConfigureStore} from "./stores/configure.ts";
import Footer from "./layouts/Footer.vue";
const configureStore = useConfigureStore();
const routes = [
  {name: 'Αρχική', link: '/'},
  {name: 'Δρομολόγια', link: '/schedule'},
  {name: 'Εισητήρια', link: '/tickets'},
  {name: 'Σχετικά', link: '/about'},
]
</script>

<template>
  <Header :routes="routes" class="z-50 bg-eggplant-950"/>
  <Menu :routes="routes" class="z-50 fixed top-[8vh] h-[92vh] bg-eggplant-950 transition-transform duration-700 ease-ii-out sm:hidden"
        :class="(configureStore.menu) ? `translate-x-0` : `translate-x-full`"/>
  <div class="h-[84vh] overflow-auto">
    <RouterView/>
  </div>
  <Footer class=" bg-eggplant-950 w-screen h-[8vh]"/>
</template>

<style scoped>

</style>
