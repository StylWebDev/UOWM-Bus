<script setup lang="ts">
const route = useRoute();
const configureStore = useConfigureStore();

onMounted(() => {
  configureStore.checkLang();
})
</script>

<template>
  <Header
      :routes="[
        {name: $t('header.route1'), link: '/'},
        {name: $t('header.route5'), link: '/busstops'},
        {name: $t('header.route2'), link: '/schedule'},
        {name: $t('header.route3'), link: '/tickets'},
        {name: $t('header.route4'), link: '/about'}
      ]"
      class="z-50 bg-eggplant-950 max-sm:h-[10vh] h-[8vh]"
  />
  <Menu :routes="[
            {name: $t('header.route1'), link: '/'},
            {name: $t('header.route5'), link: '/busstops'},
            {name: $t('header.route2'), link: '/schedule'},
            {name: $t('header.route3'), link: '/tickets'},
            {name: $t('header.route4'), link: '/about'},
        ]"
        class="z-50 fixed top-[8vh] max-sm:top-[10vh] max-sm:h-[90vh]  h-[92vh] bg-eggplant-950 transition-transform duration-700 ease-ii-out md:hidden"
        :class="(configureStore.menu) ? `translate-x-0` : `translate-x-full`"
  />



  <div class="max-sm:h-[80vh] h-[84vh] overflow-auto  sm:py-8 " :class="(route.path === '/busstops') ? `max-md:bg-eggplant-950` : ``">
    <Suspense>
      <template #default>
        <RouterView/>
      </template>
      <template #fallback>
        <FlexMinified
            column
            justify="center"
            items="center"
            class="w-full" >
              Loading...
        </FlexMinified>
      </template>
    </Suspense>

  </div>
  <Footer class=" bg-eggplant-950 w-screen pb-4 max-sm:h-[10vh] h-[8vh]"/>
</template>

<style scoped>

</style>
