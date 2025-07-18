<script setup lang="ts">
import { Icon } from "@iconify/vue";
const route = useRoute()
const config = useConfigureStore();

defineProps<{
  routes: {name:string; link: string}[]
}>()
</script>

<template>
<FlexMinified justify="evenly" class="sticky top-0 " items="center">
  <FlexMinified justify="center" class=" w-[50%]">
    <RouterLink to="/" class="flex items-center gap-x-2 text-white "
                :class="[{'cursor-default': route.fullPath === '/'} ,{'hover:text-blue-700 hover:hue-rotate-90 hover:text-shadow shadow-blue-700' : route.fullPath!=='/'} ,config.trans]"
    >
      <img class="size-12" src="../assets/logo.webp" alt="logo">
      <h1 class="font-bold  text-2xl">UOWMBus</h1>
    </RouterLink>
  </FlexMinified>
  <FlexMinified class="max-md:hidden w-[50%]" justify="center">
    <FlexMinified class="max-md:hidden font-semibold text-lg items-center" gap-x="2">
      <router-link v-for="(route, index) in routes"
                   :key="index"  :to="route.link"
                   active-class="text-cyan-400 brightness-125 underline underline-offset-8 decoration-2 after:hidden"
                   class="
      block hover:text-cyan-400 transition-all duration-300 ease-in
      after:block after:h-0.5 after:bg-cyan-400 after:w-[0%] after:hover:w-[100%] after:transition-all after:duration-500 after:ease-in"
      >
        {{route.name}}
      </router-link>
      <LangMenu class="ml-1.5"/>

    </FlexMinified>
  </FlexMinified>
  <button @click="config.menu=!config.menu" class="hidden max-md:block w-[10%]">
      <Icon v-if="!config.menu" icon="line-md:close-to-menu-alt-transition" class="size-8"  />
      <Icon v-else icon="line-md:menu-to-close-alt-transition" class="size-8 text-cyan-700"  />
  </button>
</FlexMinified>
</template>

<style scoped>

</style>