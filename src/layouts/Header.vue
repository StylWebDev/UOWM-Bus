<script setup lang="ts">
const route = useRoute()
const config = useConfigureStore();
defineProps<{
  routes: {name:string; link: string}[]
}>()
</script>

<template>
<FlexMinified justify="evenly" class="fixed top-0 w-full " items="center">
  <FlexMinified justify="center" class=" w-[50%]">
    <RouterLink to="/" class="flex items-center gap-x-2 text-white cursor-pointer"
                :class="[{'cursor-default': route.fullPath === '/'} ,{'hover:text-blue-700 hover:hue-rotate-90 hover:text-shadow shadow-blue-700' : route.fullPath!=='/'} ,config.trans]"
    >
      <img class="size-12" src="../assets/logo.webp" alt="logo">
      <h1 class="font-bold  text-2xl">UOWMBus</h1>
    </RouterLink>
  </FlexMinified>
  <FlexMinified class="max-lg:hidden w-[50%]" justify="center">
    <FlexMinified class="max-lg:hidden font-semibold text-lg items-center" gap-x="2">
      <router-link v-for="(route, index) in routes"
                   :key="index"  :to="route.link"
                   exact-active-class="text-cyan-400 brightness-125 after:w-[100%]"
                   class="
      block hover:text-cyan-400 transition-all duration-300 ease-in
      after:block after:h-1 after:bg-cyan-400 after:w-[0%] after:rounded  hover:after:w-[100%] after:transition-all after:duration-500 after:ease-in"
      >
        {{route.name}}
      </router-link>
      <LangMenu class="ml-1.5"/>

    </FlexMinified>
  </FlexMinified>
  <button @click="config.menu=!config.menu" type="button" class="hidden max-lg:block w-[10%] cursor-pointer">
      <Icon v-if="!config.menu" icon="line-md:close-to-menu-alt-transition" class="size-8"  />
      <Icon v-else icon="line-md:menu-to-close-alt-transition" class="size-8 text-cyan-700"  />
  </button>
</FlexMinified>
</template>

<style scoped>

</style>