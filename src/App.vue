<script setup lang="ts">
import {ref} from "vue";
const configureStore = useConfigureStore();
const i18n = useI18n();

const routes = ref<{name: string, link: string}[] | null>()

watch(() => i18n.locale.value, () => {
  routes.value = ([
    {name: i18n.t('header.route1'), link: '/'},
    {name: i18n.t('header.route2'), link: '/schedule'},
    {name: i18n.t('header.route3'), link: '/busstops'},
    {name: i18n.t('header.route4'), link: '/tickets'},
    {name: i18n.t('header.route5'), link: '/about'}
  ])
}, {immediate: true})

onMounted(() => {
  configureStore.checkLang();
})
</script>

<template>
  <Header :routes="routes!" class="z-50 bg-eggplant-950 max-sm:h-[10vh] h-[8vh]"
  />
  <Menu :routes="routes!"
        class="z-50 fixed top-[8vh] max-sm:top-[10vh] max-sm:h-[90vh]  h-[92vh] bg-eggplant-950 transition-transform duration-700 ease-ii-out lg:hidden"
        :class="(configureStore.menu) ? `translate-x-0` : `translate-x-full`"
  />



  <div class="max-sm:h-[80vh] h-[84vh] overflow-auto  sm:py-8 " :class="($route.path === '/busstops') ? `max-md:bg-eggplant-950` : ``">

    <RouterView v-slot="{Component}">
      <Suspense>
        <template #default>
          <div>
            <Component :is="Component"/>
          </div>
        </template>
        <template #fallback>
          <SkeletonTickets v-if="$route.fullPath.endsWith('tickets')" />
        </template>
      </Suspense>
    </RouterView>
  </div>
  <Footer class=" bg-eggplant-950 w-screen pb-4 max-sm:h-[10vh] h-[8vh]"/>
</template>

<style scoped>

</style>
