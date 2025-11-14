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
  <Header :routes="routes!" class="bg-eggplant-950 z-50 py-2  "
  />
  <Menu :routes="routes!"
        class="z-40 fixed overflow-scroll pt-24 max-sm:h-[95vh]  h-[97vh] bg-eggplant-950/80 backdrop-blur-2xl transition-transform duration-700 ease-ii-out lg:hidden"
        :class="(configureStore.menu) ? `translate-x-0` : `translate-x-full`"
  />



  <div class="h-full overflow-auto pb-8 pt-24  z-10" :class="($route.path === '/busstops') ? `max-md:bg-eggplant-950` : ``">

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
  <Footer class=" z-50 bg-eggplant-950/80 backdrop-blur-2xl w-screen fixed bottom-0 py-4  "/>
</template>

<style scoped>

</style>
