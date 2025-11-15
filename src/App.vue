<script setup lang="ts">
import {onUnmounted, ref} from "vue";
const configureStore = useConfigureStore();
const i18n = useI18n();

const routes = ref<{name: string, link: string}[] | null>()
const truth = ref<boolean>(true)

watch(() => i18n.locale.value, () => {
  routes.value = ([
    {name: i18n.t('header.route1'), link: '/'},
    {name: i18n.t('header.route2'), link: '/schedule'},
    {name: i18n.t('header.route3'), link: '/busstops'},
    {name: i18n.t('header.route4'), link: '/tickets'},
    {name: i18n.t('header.route5'), link: '/about'}
  ])
}, {immediate: true})

const lastScroll = ref<number>(window.scrollY)

const scrollFunc = () => {
  const currentScroll = window.scrollY;
  if (currentScroll > lastScroll.value) {
    truth.value = false;
  } else if (currentScroll < lastScroll.value) {
    truth.value = true;
  }

  lastScroll.value = currentScroll;
}

onMounted(() => {
  configureStore.checkLang();
  window.addEventListener('scroll', scrollFunc)
})

onUnmounted(() => {
  window.removeEventListener("scroll", scrollFunc)
})
</script>

<template>

  <FlexMinified class="h-[100vh]">
    <Transition
        enter-from-class="-translate-y-full opacity-0"
        enter-active-class="transition-all ease duration-500"
        leave-to-class="-translate-y-full opacity-0"
        leave-active-class="transition-all ease duration-500"
    >
      <Header v-if="truth" :routes="routes!" class="bg-eggplant-950 z-50 py-2  " />
    </Transition>

    <Menu :routes="routes!"
          class="z-40 fixed overflow-scroll pt-24 h-[100vh] bg-eggplant-950/80 backdrop-blur-2xl transition-transform duration-700 ease-ii-out lg:hidden"
          :class="(configureStore.menu) ? `translate-x-0` : `translate-x-full`"
    />

      <FlexMinified column gap-y="6" class="flex-grow overflow-auto justify-between   pt-24 z-10" :class="($route.path === '/busstops') ? `max-md:bg-eggplant-950` : ``">

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
        <Footer class=" z-50 bg-eggplant-950/80 backdrop-blur-2xl w-[100vw] relative py-4  "/>

      </FlexMinified>
  </FlexMinified>

</template>

<style scoped>

</style>
