<script setup lang="ts">
import Header from "./layouts/Header.vue";
import Menu from "./layouts/Menu.vue"
import {useConfigureStore} from "./stores/configure.ts";
import Footer from "./layouts/Footer.vue";
const configureStore = useConfigureStore();
const routes = [
  {name: 'Home', link: '/'},
  {name: 'Schedule', link: '/schedule'},
  {name: 'Tickets', link: '/tickets'},
  {name: 'About', link: '/about'},
]
</script>

<template>
  <Header :routes="routes" class="bg-eggplant-950"/>
  <Menu :routes="routes" class="fixed top-[8vh] w-screen h-auto bg-eggplant-950 transition-transform duration-700 ease-ii-out sm:hidden"
        :class="(configureStore.menu) ? `translate-x-0` : `translate-x-full`"/>
  <RouterView/>
  <Footer class="absolute bg-eggplant-950 w-screen h-[8vh]"/>
</template>

<style scoped>

</style>
