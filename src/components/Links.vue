<script setup lang="ts">
import {LinkList} from "../types.ts";
const linkList = ref<LinkList[]>([
  {name: 'LinkedIn', href:`https://www.linkedin.com/in/konstantinos-stylianou-a4a95625b/` ,icon:`line-md:linkedin` },
  {name: 'Github', href:`https://github.com/StylWebDev` ,icon:`line-md:github-loop` },
  {name: 'Email', href:`mailto:kostasstilianou@gmail.com` ,icon:`line-md:email-alt-twotone` },
  {name:`StylsDev`, href: 'https://styls.pages.dev' , icon:`material-symbols:globe` }
])
</script>

<template>
  <FlexMinified class="justify-center justify-items-center gap-x-1 ">
    <a v-for="(link,index) in linkList" :key="index"
       :aria-label="link.name"
       class="block p-1  hover:bg-white text-eggplant-800 hover:text-black bg-eggplant-100   bg-opacity-10 rounded-xl hover:scale-110 transition duration-500 ease-in" :href="link.href" target="_blank">
      <Icon width="20px"  :icon="link.icon"/>
    </a>
  </FlexMinified>
</template>

<style scoped>

</style>