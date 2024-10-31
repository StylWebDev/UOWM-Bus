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
  <Header :routes="routes" class="z-50 bg-eggplant-950 max-sm:h-[10vh] h-[8vh]"/>
  <Menu :routes="routes" class="z-50 fixed top-[8vh] max-sm:top-[10vh] max-sm:h-[90vh]  h-[92vh] bg-eggplant-950 transition-transform duration-700 ease-ii-out md:hidden"
        :class="(configureStore.menu) ? `translate-x-0` : `translate-x-full`"/>
  <div class="max-sm:h-[80vh] h-[84vh] overflow-auto py-2 sm:py-8">
    <Suspense>
      <template #default>
        <RouterView/>
      </template>
    </Suspense>

  </div>
  <Footer class=" bg-eggplant-950 w-screen  max-sm:h-[10vh] h-[8vh]"/>
</template>

<style scoped>

</style>
